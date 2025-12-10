import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const WelcomeModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem("welcomeModalSeen");
    if (!hasSeenModal) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("welcomeModalSeen", "true");
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md rounded-xl shadow-lg bg-card ring-2 ring-primary/50 ring-offset-2 ring-offset-background">
        <DialogHeader className="text-center space-y-2">
          <DialogTitle className="text-2xl font-bold">Welcome to SportSense</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            🚧 This app is currently in development.  
            In production, you’ll see:
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-2 text-sm text-foreground">
          <p>✨ AI API powering smarter training flows</p>
          <p>💬 Chat linked directly to coaches</p>
          <p>📝 Coach registration approved by admins</p>
          <p>❓ Admins handling Help & FAQs</p>
          <p>🔑 Sign In and Get Started flows</p>
        </div>

      </DialogContent>
    </Dialog>
  );
};

export default WelcomeModal;
