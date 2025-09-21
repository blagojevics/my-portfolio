"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer id="footer" className="py-12 bg-muted/30 border-t ">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Contact</h3>
          <p className="text-muted-foreground mb-8">
            Open to new opportunities and conversations.
          </p>

          <div className="flex justify-center gap-6 mb-8">
            <a
              href="mailto:sb@stefan-blagojevic.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-[#00BFFF] "
            >
              <Mail size={28} />
            </a>
            <a
              href="https://github.com/blagojevics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-[#807171] "
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/stefan-blagojevic-16455a385/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-[#0072b1] "
            >
              <Linkedin size={28} />
            </a>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>&copy; 2025 Stefan Blagojević. All rights reserved.</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media screen and (min-width: 280px) and (max-width: 500px) {
          #footer {
            min-width: 280px;
            width: 300px;
            margin: 0 auto;
            text-align: justify;
          }
        }
      `}</style>
    </footer>
  );
}
