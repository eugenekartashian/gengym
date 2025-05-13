'use client';

import React, { useState } from 'react';
import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import {
  DumbbellIcon,
  HomeIcon,
  UserIcon,
  ZapIcon,
  MenuIcon,
  XIcon
} from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const { isSignedIn } = useUser();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border px-2 py-3">
      <div className="container mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 z-100">
          <div className="p-1 bg-primary/10 rounded">
            <ZapIcon className="w-4 h-4 text-primary" />
          </div>
          <span className="text-xl font-bold font-mono">
            gen<span className="text-primary">gym</span>.ai
          </span>
        </Link>

        {/* NAVIGATION */}
        <nav className="items-center px-2 gap-5 hidden sm:flex">
          {isSignedIn ? (
            <>
              <Link
                href="/"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <HomeIcon size={20} />
                <span>Home</span>
              </Link>
              <Link
                href="/generate-program"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <DumbbellIcon size={20} />
                <span>Generate</span>
              </Link>

              <Link
                href="/profile"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <UserIcon size={20} />
                <span>Profile</span>
              </Link>
              <Button
                asChild
                variant={'outline'}
                className="ml-2 border-primary/50 text-primary hover:text-white hover:bg-primary/10"
              >
                <Link href="/generate-program">Get Started</Link>
              </Button>
              <UserButton />
            </>
          ) : (
            <>
              <SignInButton>
                <Button
                  variant={'outline'}
                  className="border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                >
                  Sign In
                </Button>
              </SignInButton>

              <SignUpButton>
                <Button
                  variant={'outline'}
                  className="border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                >
                  Sign Up
                </Button>
              </SignUpButton>
            </>
          )}
        </nav>

        <div className="sm:hidden flex items-center px-2">
          <button
            onClick={toggleMenu}
            className="p-2 text-primary focus:outline-none"
          >
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-sm pt-20 px-4">
            <div className="flex flex-col bg-background backdrop-blur-md border border-border rounded-lg p-4">
              {isSignedIn ? (
                <>
                  <Link
                    href="/"
                    onClick={toggleMenu}
                    className="flex items-center gap-3 text-lg py-2 hover:text-primary transition-colors"
                  >
                    <HomeIcon size={20} />
                    <span>Home</span>
                  </Link>
                  <Link
                    href="/generate-program"
                    onClick={toggleMenu}
                    className="flex items-center gap-3 text-lg py-2 hover:text-primary transition-colors"
                  >
                    <DumbbellIcon size={20} />
                    <span>Generate</span>
                  </Link>
                  <Link
                    href="/profile"
                    onClick={toggleMenu}
                    className="flex items-center gap-3 text-lg py-2 hover:text-primary transition-colors"
                  >
                    <UserIcon size={20} />
                    <span>Profile</span>
                  </Link>

                  <div className="flex items-center gap-3 text-lg py-2 hover:text-primary transition-colors">
                    <UserButton />
                    <span>Account</span>
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="mt-4 border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                  >
                    <Link href="/generate-program" onClick={toggleMenu}>
                      Get Started
                    </Link>
                  </Button>
                </>
              ) : (
                <>
                  <SignInButton>
                    <Button
                      variant="outline"
                      className="w-full border-primary/50 text-primary hover:text-white hover:bg-primary/10 mb-2"
                    >
                      Sign In
                    </Button>
                  </SignInButton>
                  <SignUpButton>
                    <Button
                      variant="outline"
                      className="w-full border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                    >
                      Sign Up
                    </Button>
                  </SignUpButton>
                </>
              )}
            </div>
            <button
              onClick={toggleMenu}
              className="absolute top-3 right-4 p-2 text-primary"
            >
              <XIcon size={24} />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
