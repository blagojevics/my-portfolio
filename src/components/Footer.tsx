import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer id="footer" className=" py-12 bg-muted/30 border-t">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Contact</h3>
          <p className="text-muted-foreground mb-8">
            Interested in working together? Let's connect.
          </p>

          <div className="flex justify-center gap-6 mb-8">
            <a
              href="mailto:your.email@example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={28} />
            </a>
            <a
              href="https://github.com/blagojevics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/stefan-blagojevic-16455a385/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={28} />
            </a>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>&copy; 2025 Stefan Blagojević. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
