"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Bot, ChevronDown, LogOut, User } from "lucide-react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "@/firebase/client";
import { useUserStore } from "@/hooks/userUser";
import { toast } from "sonner";
import type { UserProfile } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { user, isAuthenticated, setUser, setIsAuthenticated } = useUserStore();

  const handleScrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    if (pathname !== "/") {
      router.push(`/#${sectionId}`);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getProvider = (providerId?: string): UserProfile["provider"] => {
    if (providerId === "google.com") return "google";
    if (providerId === "github.com") return "github";
    return "email";
  };

  const getInitial = (name?: string, email?: string) => {
    const base = name?.trim() || email?.trim() || "U";
    return base.charAt(0).toUpperCase();
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userRef = doc(db, "users", firebaseUser.uid);
        const userSnap = await getDoc(userRef);
        const providerId = firebaseUser.providerData[0]?.providerId;

        const baseProfile: UserProfile = {
          uid: firebaseUser.uid,
          email: firebaseUser.email ?? "",
          displayName: firebaseUser.displayName ?? "",
          provider: getProvider(providerId),
          profilePicture: firebaseUser.photoURL ?? "",
        };

        const profile = userSnap.exists()
          ? { ...baseProfile, ...(userSnap.data() as Partial<UserProfile>) }
          : baseProfile;

        setUser(profile);
        setIsAuthenticated();
      } else {
        setUser(null);
        setIsAuthenticated();
      }
    });

    return () => unsubscribe();
  }, [setUser, setIsAuthenticated]);

  const handleGoogleAuth = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      const profile: UserProfile = {
        uid: user.uid,
        email: user.email ?? "",
        displayName: user.displayName ?? "",
        provider: "google",
        profilePicture: user.photoURL ?? "",
      };

      if (!userSnap.exists()) {
        await setDoc(userRef, profile, { merge: true });
      }

      setUser(profile);
      setIsAuthenticated();
      setIsLoginOpen(false);
      setIsSignInOpen(false);
      toast.success("Signed in with Google");
    } catch (err: any) {
      toast.error(err?.message || "Google sign-in failed");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setIsAuthenticated();
      toast.success("Logged out successfully");
    } catch (err: any) {
      toast.error(err?.message || "Logout failed");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-button-gradient flex items-center justify-center shadow-glow">
            <Bot className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-display font-bold text-gradient">InterviewIQ</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center nav-glass rounded-full px-2 py-1.5">
          <a
            href="#home"
            onClick={(e) => handleScrollToSection(e, "home")}
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent/50"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => handleScrollToSection(e, "features")}
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent/50"
          >
            About Us
          </a>
          <Link
            href="/pricing"
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent/50"
          >
            Pricing
          </Link>
          <Link
            href="/practice"
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent/50"
          >
            Practice
          </Link>
          <Link
            href="/jobs"
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent/50"
          >
            Jobs
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent/50"
          >
            Contact Us
          </Link>
        </div>

        {/* Auth Buttons */}
        {isAuthenticated && user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 rounded-full bg-muted/40 px-3 py-1.5 hover:bg-muted/60 transition-colors">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
                  {user.profilePicture ? (
                    <img
                      src={user.profilePicture}
                      alt={user.displayName || "User"}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-sm font-semibold text-primary">
                      {getInitial(user.displayName, user.email)}
                    </span>
                  )}
                </div>
                <span className="text-sm font-medium text-foreground hidden sm:inline">
                  {user.displayName || user.email}
                </span>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 rounded-xl border border-border p-2">
              <DropdownMenuLabel className="text-xs text-muted-foreground">
                Signed in as
              </DropdownMenuLabel>
              <div className="px-2 pb-2 text-sm font-medium text-foreground truncate">
                {user.displayName || user.email}
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/profile" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={handleLogout}
                variant="destructive"
                className="cursor-pointer"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="flex items-center gap-3">
            {/* Login Dialog */}
            <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className="rounded-full px-4">
                  Login
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl font-display">Welcome Back</DialogTitle>
                <DialogDescription>
                  Login to continue your interview preparation journey
                </DialogDescription>
              </DialogHeader>
              <form className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email</Label>
                  <Input id="login-email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-password">Password</Label>
                  <Input id="login-password" type="password" placeholder="Enter your password" />
                </div>
                <Button type="submit" className="w-full rounded-full bg-teal-500 hover:bg-teal-600 text-white">
                  Login
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setIsLoginOpen(false);
                      setIsSignInOpen(true);
                    }}
                    className="text-primary hover:underline font-medium"
                  >
                    Sign Up
                  </button>
                </p>
              </form>
            </DialogContent>
          </Dialog>

          {/* Sign In Dialog */}
          <Dialog open={isSignInOpen} onOpenChange={setIsSignInOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="rounded-full px-6 bg-teal-500 hover:bg-teal-600 text-white">
                Sign Up
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl font-display">Create Account</DialogTitle>
                <DialogDescription>
                  Join InterviewIQ and ace your next interview
                </DialogDescription>
              </DialogHeader>
              <form className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-name">Full Name</Label>
                  <Input id="signup-name" type="text" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input id="signup-email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input id="signup-password" type="password" placeholder="Create a password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-confirm">Confirm Password</Label>
                  <Input id="signup-confirm" type="password" placeholder="Confirm your password" />
                </div>
                <Button type="submit" className="w-full rounded-full bg-teal-500 hover:bg-teal-600 text-white">
                  Create Account
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setIsSignInOpen(false);
                      setIsLoginOpen(true);
                    }}
                    className="text-primary hover:underline font-medium"
                  >
                    Login
                  </button>
                </p>
              </form>
            </DialogContent>
          </Dialog>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
