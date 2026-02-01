"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
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
    <nav className="fixed top-0 left-0 right-0 z-50 mx-5 my-4 p-3 rounded-2xl bg-background/70 shadow-gray-600 border-2 border-foreground/10 backdrop-blur-md">
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
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-full bg-muted/40 px-3 py-1.5">
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
              <span className="text-sm font-medium text-foreground">
                {user.displayName || user.email}
              </span>
            </div>
          </div>
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
                <DialogTitle className="text-xl font-display">Welcome Back</DialogTitle>
                <DialogDescription className="text-sm">
                  Login to continue your interview preparation journey
                </DialogDescription>
              </DialogHeader>
              <form className="space-y-3 mt-3">
                <div className="space-y-1">
                  <Label htmlFor="login-email" className="text-sm">Email</Label>
                  <Input id="login-email" type="email" placeholder="Enter your email" className="h-9" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="login-password" className="text-sm">Password</Label>
                  <Input id="login-password" type="password" placeholder="Enter your password" className="h-9" />
                </div>
                <Button type="submit" className="w-full rounded-full bg-teal-500 hover:bg-teal-600 text-white">
                  Login
                </Button>
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-xs text-muted-foreground">OR</span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full rounded-full gap-2"
                  onClick={handleGoogleAuth}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 533.5 544.3"
                    aria-hidden="true"
                  >
                    <path
                      fill="#4285F4"
                      d="M533.5 278.4c0-17.4-1.6-34.2-4.6-50.4H272.1v95.3h146.9c-6.3 34-25 62.7-53.4 82l86.1 66.9c50.3-46.4 81.8-114.8 81.8-193.8z"
                    />
                    <path
                      fill="#34A853"
                      d="M272.1 544.3c72.9 0 134-24.2 178.6-65.8l-86.1-66.9c-24 16.1-54.8 25.6-92.5 25.6-71 0-131.2-47.9-152.7-112.3H30.1v70.8c44.6 88.1 136.3 148.6 242 148.6z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M119.4 324.9c-10.2-30.2-10.2-62.6 0-92.8V161.3H30.1c-39.6 79.1-39.6 172.5 0 251.6l89.3-67.9z"
                    />
                    <path
                      fill="#EA4335"
                      d="M272.1 107.4c39.6-.6 77.6 13.7 106.8 39.6l80-80.1C413.6 23.3 344.7-1.5 272.1 0 166.4 0 74.7 60.5 30.1 148.6l89.3 67.9c21.5-64.4 81.7-112.3 152.7-112.3z"
                    />
                  </svg>
                  Continue with Google
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setIsLoginOpen(false);
                      setIsSignInOpen(true);
                    }}
                    className="text-primary hover:underline font-medium py-3 m-2"
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
              <Button className="rounded-full px-6 bg-teal-500 hover:bg-teal-600 text-white">
                Sign Up
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-xl font-display">Create Account</DialogTitle>
                <DialogDescription className="text-sm">
                  Join InterviewIQ and ace your next interview
                </DialogDescription>
              </DialogHeader>
              <form className="space-y-3 mt-3">
                <div className="space-y-1">
                  <Label htmlFor="signup-name" className="text-sm">Full Name</Label>
                  <Input id="signup-name" type="text" placeholder="Enter your name" className="h-9" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="signup-email" className="text-sm">Email</Label>
                  <Input id="signup-email" type="email" placeholder="Enter your email" className="h-9" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="signup-password" className="text-sm">Password</Label>
                  <Input id="signup-password" type="password" placeholder="Create a password" className="h-9" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="signup-confirm" className="text-sm">Confirm Password</Label>
                  <Input id="signup-confirm" type="password" placeholder="Confirm your password" className="h-9" />
                </div>
                <Button
                  type="submit"
                  className="w-full rounded-full bg-teal-500 hover:bg-teal-600 text-white"
                >
                  Create Account
                </Button>
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-xs text-muted-foreground">OR</span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full rounded-full gap-2"
                  onClick={handleGoogleAuth}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 533.5 544.3"
                    aria-hidden="true"
                  >
                    <path
                      fill="#4285F4"
                      d="M533.5 278.4c0-17.4-1.6-34.2-4.6-50.4H272.1v95.3h146.9c-6.3 34-25 62.7-53.4 82l86.1 66.9c50.3-46.4 81.8-114.8 81.8-193.8z"
                    />
                    <path
                      fill="#34A853"
                      d="M272.1 544.3c72.9 0 134-24.2 178.6-65.8l-86.1-66.9c-24 16.1-54.8 25.6-92.5 25.6-71 0-131.2-47.9-152.7-112.3H30.1v70.8c44.6 88.1 136.3 148.6 242 148.6z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M119.4 324.9c-10.2-30.2-10.2-62.6 0-92.8V161.3H30.1c-39.6 79.1-39.6 172.5 0 251.6l89.3-67.9z"
                    />
                    <path
                      fill="#EA4335"
                      d="M272.1 107.4c39.6-.6 77.6 13.7 106.8 39.6l80-80.1C413.6 23.3 344.7-1.5 272.1 0 166.4 0 74.7 60.5 30.1 148.6l89.3 67.9c21.5-64.4 81.7-112.3 152.7-112.3z"
                    />
                  </svg>
                  Continue with Google
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setIsSignInOpen(false);
                      setIsLoginOpen(true);
                    }}
                    className="text-primary hover:underline font-medium py-3 m-2"
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
