import TerminalOverlay from '@/components/TerminalOverlay';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import UserPrograms from '@/components/UserPrograms';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen text-foreground overflow-hidden">
      <section className="relative z-10 py-12 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            {/* LEFT BORDER */}
            <div className="absolute top-8 left-0 w-40 h-40 border-l-2 border-t-2 border-border" />

            {/* LEFT PART */}
            <div className="lg:col-span-7 space-y-8 relative">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight px-8">
                <div>
                  <span className="text-foreground">Transform</span>
                </div>
                <div>
                  <span className="text-primary">Your Body</span>
                </div>
                <div className="pt-2">
                  <span className="text-foreground">With Advanced</span>
                </div>
                <div className="pt-2">
                  <span className="text-foreground">AI</span>
                  <span className="text-primary"> Technology</span>
                </div>
              </h1>
              {/* LINE SEPARATOR */}
              <div className="h-px w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-50" />

              <p className="text-xl text-muted-foreground w-2/3">
                Talk to our AI assistant and get personalized diet and workout
                plans designed just for you.
              </p>
              {/* STATS */}
              <div className="flex items-center justify-center gap-16 mt-10 font-mono">
                <div className="flex flex-col items-center">
                  <p className="text-3xl text-primary">500+</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">
                    PROGRAMS
                  </p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="flex flex-col items-center">
                  <p className="text-3xl text-primary">3min</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">
                    CREATION TIME
                  </p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="flex flex-col items-center">
                  <p className="text-3xl text-primary">100%</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">
                    PERSONALIZED
                  </p>
                </div>
              </div>

              {/* CTA BUTTON */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  size="lg"
                  asChild
                  className="overflow-hidden bg-primary text-primary-foreground px-8 py-6 text-lg font-medium"
                >
                  <Link
                    href={'/generate-program'}
                    className="flex items-center font-mono"
                  >
                    Build Your Program
                    <ArrowRightIcon className="ml-2 size-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* RIGHT PART */}
            <div className="lg:col-span-5 relative">
              {/* ANGLE DECORATION BORDERS */}
              <div className="absolute -inset-4 pointer-events-none">
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-border"></div>
                <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-border"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-border"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-border"></div>
              </div>

              {/* IMAGE CONTAINER */}
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="relative overflow-hidden rounded-lg bg-cyber-black">
                  {/* <img
                    src="/hero-ai3.png"
                    alt="hero-image"
                    className="size-full object-cover object-center"
                  /> */}
                  <Image
                    src="/hero-ai3.png"
                    alt="hero-image"
                    width={1024}
                    height={1536}
                    className="size-full object-cover object-center"
                  />

                  {/* IMAGE ANIMATION */}
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,transparent_calc(50%-1px),var(--cyber-glow-primary)_50%,transparent_calc(50%+1px),transparent_100%)] bg-[length:100%_8px] animate-scanline pointer-events-none" />

                  {/* IMAGE DECORATION */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border border-primary/40 rounded-full" />
                    <div className="absolute top-1/2 left-0 w-1/4 h-px bg-primary/50"></div>
                    <div className="absolute top-1/2 right-0 w-1/4 h-px bg-primary/50"></div>
                    <div className="absolute top-0 left-1/2 h-1/4 w-px bg-primary/50"></div>
                    <div className="absolute bottom-0 left-1/2 h-1/4 w-px bg-primary/50"></div>
                  </div>

                  {/* IMAGE SHADOW */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                </div>

                {/* TERMINAL OVERLAY */}
                <TerminalOverlay />
              </div>
            </div>
          </div>
        </div>
      </section>

      <UserPrograms />
    </div>
  );
};

export default HomePage;
