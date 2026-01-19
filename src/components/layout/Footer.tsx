import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Leaf className="h-4 w-4 text-primary-foreground" />
              </div>
              <h3 className="font-serif font-semibold">Virtual Herbal Garden</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Explore the healing power of AYUSH medicinal plants through our interactive virtual garden.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/plants" className="text-muted-foreground hover:text-primary transition-colors">
                  Plant Library
                </Link>
              </li>
              <li>
                <Link to="/tours" className="text-muted-foreground hover:text-primary transition-colors">
                  Guided Tours
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About AYUSH
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">AYUSH Systems</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Ayurveda</li>
              <li>Yoga & Naturopathy</li>
              <li>Unani</li>
              <li>Siddha</li>
              <li>Homeopathy</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border flex justify-center items-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Virtual Herbal Garden. Educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};
