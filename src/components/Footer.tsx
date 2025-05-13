import { ZapIcon } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-sm">
      {/* TOP BORDER*/}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* LOGO & COPYRIGHT */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="p-1 bg-primary/10 rounded">
                <ZapIcon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xl font-bold font-mono">
                gen<span className="text-primary">gym</span>.ai
              </span>
            </Link>
            <p className="text-xs text-center text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
          <p className="text-sm text-center text-muted-foreground flex-1/3">
            *Note: AI-generated advice is not 100% accurate. Consult a
            healthcare professional before making major changes to your diet or
            exercise routine.
          </p>

          {/* STATUS */}
          <div className="flex items-center gap-2 px-3 py-2 border border-border rounded-md bg-background/50">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-xs font-mono">OPERATION ACTIVE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
