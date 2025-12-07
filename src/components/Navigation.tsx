import { Button } from "@/components/ui/button";
import { Activity, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "@/components/NavLink"; // using your wrapper

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 cursor-pointer">
  <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
    <Activity className="w-5 h-5 text-primary-foreground" />
  </div>
  <span className="text-xl font-bold">SportSense</span>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink
              to="/coach"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              activeClassName="text-primary font-semibold"
            >
              Coach
            </NavLink>
            <NavLink
              to="/training"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              activeClassName="text-primary font-semibold"
            >
              Training
            </NavLink>
            <NavLink
              to="/metrics"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              activeClassName="text-primary font-semibold"
            >
              Metrics
            </NavLink>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">Sign In</Button>
            <Button>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {/* Mobile Menu */}
{mobileMenuOpen && (
  <div className="md:hidden py-4 border-t border-border/50">
    <div className="flex flex-col gap-4 items-center text-center">
      <NavLink
        to="/coach"
        mobile
        className="text-base py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
        activeClassName="text-primary font-semibold"
      >
        Coach
      </NavLink>
      <NavLink
        to="/training"
        mobile
        className="text-base py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
        activeClassName="text-primary font-semibold"
      >
        Training
      </NavLink>
      <NavLink
        to="/metrics"
        mobile
        className="text-base py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
        activeClassName="text-primary font-semibold"
      >
        Metrics
      </NavLink>

      {/* CTA Buttons */}
      <div className="pt-4 border-t border-border/50 flex flex-col gap-2 w-full items-center">
        <Button variant="ghost" className="w-3/4">Sign In</Button>
        <Button className="w-3/4">Get Started</Button>
      </div>
    </div>
  </div>
)}

      </div>
    </nav>
  );
};

export default Navigation;
