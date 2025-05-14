
"use client";

import SectionWrapper from '@/components/SectionWrapper';
import { portfolioConfig, socialIcons } from '@/config/portfolio';

export default function ContactSection() {
  const firstPostUrn = "7256301017066074112"; // Existing post
  const secondPostUrn = "7308550922782056449"; // New post from user request

  return (
    <SectionWrapper id="contact" className="bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">Stay Connected</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Check out my latest LinkedIn posts below, or connect with me through other channels.
        </p>
      </div>
      <div className="max-w-2xl mx-auto">
        {/* LinkedIn Embeds */}
        <div className="mb-12 flex flex-col items-center space-y-8">
          <div className="w-full flex justify-center">
            <iframe 
              src={`https://www.linkedin.com/embed/feed/update/urn:li:share:${secondPostUrn}`}
              height="650" // Adjusted height for better page fit
              width="504" // Max width of the embed
              frameBorder="0" 
              allowFullScreen={true}
              title="Embedded LinkedIn Post 2"
              className="max-w-full w-[504px] rounded-lg shadow-xl border border-border/50"
              style={{maxWidth: '504px', width: '100%'}} // Ensures responsiveness
            ></iframe>
          </div>
          <div className="w-full flex justify-center">
            <iframe 
              src={`https://www.linkedin.com/embed/feed/update/urn:li:share:${firstPostUrn}`}
              height="650" // Adjusted height for better page fit
              width="504" // Max width of the embed
              frameBorder="0" 
              allowFullScreen={true}
              title="Embedded LinkedIn Post 1"
              className="max-w-full w-[504px] rounded-lg shadow-xl border border-border/50"
              style={{maxWidth: '504px', width: '100%'}} // Ensures responsiveness
            ></iframe>
          </div>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">Or connect with me on social media:</p>
          <div className="flex justify-center space-x-4">
            {Object.entries(portfolioConfig.socialLinks).map(([platform, url]) => {
              const Icon = socialIcons[platform];
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${portfolioConfig.name} on ${platform}`}
                  className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
                >
                  <Icon className="h-7 w-7" />
                </a>
              );
            })}
          </div>
           <p className="mt-6 text-muted-foreground">
            Email: <a href={`mailto:${portfolioConfig.contactEmail}`} className="text-primary hover:underline">{portfolioConfig.contactEmail}</a>
          </p>
           <p className="mt-2 text-muted-foreground">
            Phone: <a href={`tel:${portfolioConfig.phone}`} className="text-primary hover:underline">{portfolioConfig.phone}</a>
          </p>
          <p className="mt-2 text-muted-foreground">
            Address: {portfolioConfig.address}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}

