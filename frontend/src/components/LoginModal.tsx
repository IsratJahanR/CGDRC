import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function LoginModal({ open, onOpenChange }: LoginModalProps) {
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Connect to FastAPI login endpoint here
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md p-6 rounded-2xl shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-center">
            Sign In
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <Label htmlFor="username">Username or Email</Label>
            <Input id="username" type="text" placeholder="Enter your username" required />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" required />
          </div>
          <div className="flex items-center gap-2 border p-2 rounded-md">
            <input id="captcha" type="checkbox" required className="w-4 h-4" />
            <Label htmlFor="captcha">Verify you are human</Label>
          </div>
          <Button
            type="submit"
            className="w-full bg-healthcare-blue text-white hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </Button>
        </form>
        <div className="flex justify-between text-sm mt-3 text-healthcare-blue">
          <a href="#" className="hover:underline">Forgot Password?</a>
          <a href="#" className="hover:underline">Sign Up</a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
