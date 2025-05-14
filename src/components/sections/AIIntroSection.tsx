"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import SectionWrapper from '@/components/SectionWrapper';
import { generateIntro, type GenerateIntroInput } from '@/ai/flows/generate-intro';
import { portfolioConfig } from '@/config/portfolio';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Wand2 } from 'lucide-react';

const formSchema = z.object({
  visitorName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  visitorProfile: z.string().min(10, { message: "Profile summary must be at least 10 characters." }).max(500, { message: "Profile summary must be at most 500 characters." }),
});

type AIIntroFormValues = z.infer<typeof formSchema>;

export default function AIIntroSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedIntro, setGeneratedIntro] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<AIIntroFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      visitorName: '',
      visitorProfile: '',
    },
  });

  async function onSubmit(values: AIIntroFormValues) {
    setIsLoading(true);
    setGeneratedIntro(null);
    try {
      const input: GenerateIntroInput = {
        ...values,
        portfolioContent: portfolioConfig.aiIntro.portfolioSummary,
      };
      const result = await generateIntro(input);
      setGeneratedIntro(result.introduction);
      toast({
        title: "Introduction Generated!",
        description: "Your personalized introduction is ready.",
      });
    } catch (error) {
      console.error("Error generating introduction:", error);
      toast({
        title: "Error",
        description: "Failed to generate introduction. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <SectionWrapper id="ai-intro" className="bg-secondary/20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">Personalized AI Introduction</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Tell me a bit about yourself, and I'll generate a custom introduction based on my portfolio!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <Card className="shadow-xl border-border/50">
          <CardHeader>
            <CardTitle>Your Details</CardTitle>
            <CardDescription>Enter your name and a brief professional summary.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="visitorName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Jane Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="visitorProfile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Profile Summary</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., Tech recruiter looking for Next.js developers..."
                          className="resize-none"
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Wand2 className="mr-2 h-4 w-4" />
                  )}
                  Generate Introduction
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <Card className="shadow-xl border-border/50 min-h-[300px] flex flex-col">
          <CardHeader>
            <CardTitle>Generated Introduction</CardTitle>
            <CardDescription>Here's what the AI came up with for you.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            {isLoading && (
              <div className="flex items-center justify-center h-full">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="ml-2 text-muted-foreground">Generating...</p>
              </div>
            )}
            {!isLoading && generatedIntro && (
              <p className="text-foreground/90 whitespace-pre-wrap">{generatedIntro}</p>
            )}
            {!isLoading && !generatedIntro && (
              <p className="text-muted-foreground text-center py-10">
                Your personalized introduction will appear here.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
