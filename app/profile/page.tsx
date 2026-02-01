"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useUserStore } from "@/hooks/userUser";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/client";
import { toast } from "sonner";
import {
  Briefcase,
  FileText,
  Github,
  Instagram,
  Linkedin,
  PencilLine,
  Sparkles,
  Twitter,
  X,
  Upload,
} from "lucide-react";

export default function ProfilePage() {
  const router = useRouter();
  const { user, setUser } = useUserStore();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [bio, setBio] = useState(user?.bio || "");
  const [skills, setSkills] = useState<string[]>(user?.skills || []);
  const [newSkill, setNewSkill] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [resumeMeta, setResumeMeta] = useState<{ url?: string; name?: string }>({
    url: user?.resumeUrl,
    name: user?.resumeName,
  });
  
  const displayName = user?.displayName || user?.email || "Guest";
  const email = user?.email || "No email on file";
  const initials = (user?.displayName || user?.email || "U").charAt(0).toUpperCase();

  useEffect(() => {
    setResumeMeta({ url: user?.resumeUrl, name: user?.resumeName });
  }, [user?.resumeUrl, user?.resumeName]);

  const handleSaveBio = async () => {
    if (!user?.uid) return;
    try {
      await updateDoc(doc(db, "users", user.uid), { bio });
      setUser({ ...user, bio });
      setIsEditOpen(false);
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error("Failed to update profile");
    }
  };

  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skill: string) => {
    setSkills(skills.filter(s => s !== skill));
  };

  const handleSaveSkills = async () => {
    if (!user?.uid) return;
    try {
      await updateDoc(doc(db, "users", user.uid), { skills });
      setUser({ ...user, skills });
      setIsSkillsOpen(false);
      toast.success("Skills updated successfully");
    } catch (error) {
      toast.error("Failed to update skills");
    }
  };

  const handleResumeUpload = async () => {
    if (!user?.uid) {
      toast.error("Please log in to upload your resume");
      return;
    }
    if (!resumeFile) {
      toast.error("Please select a resume file");
      return;
    }

    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!validTypes.includes(resumeFile.type)) {
      toast.error("Please upload a PDF or Word document");
      return;
    }
    if (resumeFile.size > 5 * 1024 * 1024) {
      toast.error("File size must be less than 5MB");
      return;
    }

    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", resumeFile);

      const response = await fetch("/api/resume", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Upload failed");
      }

      const data = await response.json();
      const resumeUrl = data?.url as string | undefined;
      const resumeName = data?.name as string | undefined;

      if (!resumeUrl) {
        throw new Error("Upload failed: missing file URL");
      }

      const finalName = resumeName || resumeFile.name;
      setResumeMeta({ url: resumeUrl, name: finalName });

      try {
        await updateDoc(doc(db, "users", user.uid), {
          resumeUrl,
          resumeName: finalName,
        });

        setUser({
          ...user,
          resumeUrl,
          resumeName: finalName,
        });
      } catch (saveError: any) {
        console.error("Failed to save resume in profile:", saveError);
        toast.error("Uploaded, but failed to save to profile. Please try again.");
      }
      setResumeFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      toast.success("Resume uploaded successfully");
    } catch (error: any) {
      console.error("Resume upload error:", error);
      toast.error(error?.message || "Failed to upload resume");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-16 px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <section className="glass-card rounded-3xl p-6 md:p-8 bg-emerald-50/60 dark:bg-emerald-500/10 border border-border">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="h-24 w-24 md:h-28 md:w-28 rounded-full bg-primary/15 flex items-center justify-center overflow-hidden shadow-lg">
                {user?.profilePicture ? (
                  <img
                    src={user.profilePicture}
                    alt={displayName}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-3xl font-bold text-primary">{initials}</span>
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 text-2xl md:text-3xl font-display font-bold text-foreground">
                  <Sparkles className="h-6 w-6 text-primary" />
                  {displayName}
                </div>
                <p className="text-muted-foreground mt-1">{email}</p>
                <p className="text-sm text-muted-foreground mt-2">{user?.bio || "No bio provided"}</p>
              </div>
              <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="rounded-full gap-2 border-emerald-300/60 text-foreground hover:bg-emerald-100/70"
                  >
                    <PencilLine className="h-4 w-4" />
                    Edit Profile
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        placeholder="Tell us about yourself..."
                        rows={4}
                      />
                    </div>
                    <Button onClick={handleSaveBio} className="w-full rounded-full bg-teal-500 hover:bg-teal-600 text-white">
                      Save Changes
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </section>

          <div className="grid lg:grid-cols-2 gap-6">
            <section className="glass-card rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <Briefcase className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-display font-semibold">Skills & Interests</h3>
              </div>
              {user?.skills && user.skills.length > 0 ? (
                <div className="flex flex-wrap gap-2 mb-4">
                  {user.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground mb-4">
                  Add your top skills to get better interview recommendations.
                </p>
              )}
              <Dialog open={isSkillsOpen} onOpenChange={setIsSkillsOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="rounded-full">
                    {user?.skills && user.skills.length > 0 ? "Edit Skills" : "Add Skills"}
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Manage Skills</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 mt-4">
                    <div className="flex gap-2">
                      <Input
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleAddSkill()}
                        placeholder="Add a skill..."
                      />
                      <Button onClick={handleAddSkill} className="bg-teal-500 hover:bg-teal-600">
                        Add
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 min-h-[100px] p-3 border rounded-lg">
                      {skills.length > 0 ? (
                        skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-sm gap-1">
                            {skill}
                            <X className="h-3 w-3 cursor-pointer" onClick={() => handleRemoveSkill(skill)} />
                          </Badge>
                        ))
                      ) : (
                        <p className="text-sm text-muted-foreground">No skills added yet</p>
                      )}
                    </div>
                    <Button onClick={handleSaveSkills} className="w-full rounded-full bg-teal-500 hover:bg-teal-600 text-white">
                      Save Skills
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </section>

            <section className="glass-card rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-display font-semibold">Resume</h3>
              </div>
              {resumeMeta.url ? (
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-2">Current resume:</p>
                  <a
                    href={resumeMeta.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline flex items-center gap-1"
                  >
                    <FileText className="h-4 w-4" />
                    {resumeMeta.name || "View resume"}
                  </a>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground mb-4">
                  Upload your resume to personalize feedback.
                </p>
              )}
              <div className="space-y-3">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
                  className="hidden"
                />
                <Button
                  variant="outline"
                  className="rounded-full w-full"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="h-4 w-4 mr-2" />
                  {resumeFile ? resumeFile.name : resumeMeta.url ? "Replace Resume" : "Choose Resume"}
                </Button>
                {resumeFile && (
                  <Button
                    onClick={handleResumeUpload}
                    disabled={isUploading}
                    className="w-full rounded-full bg-teal-500 hover:bg-teal-600 text-white"
                  >
                    {isUploading ? "Uploading..." : "Upload Resume"}
                  </Button>
                )}
              </div>
            </section>
          </div>

          <section className="glass-card rounded-2xl p-6 border border-border">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-display font-semibold">Social Links</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center justify-between rounded-xl border border-border bg-secondary/40 px-4 py-3">
                <div className="flex items-center gap-3">
                  <Twitter className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Twitter</span>
                </div>
                <span className="text-xs text-muted-foreground">Not connected</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-border bg-secondary/40 px-4 py-3">
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </div>
                <span className="text-xs text-muted-foreground">Not connected</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-border bg-secondary/40 px-4 py-3">
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">GitHub</span>
                </div>
                <span className="text-xs text-muted-foreground">Not connected</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-border bg-secondary/40 px-4 py-3">
                <div className="flex items-center gap-3">
                  <Instagram className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Instagram</span>
                </div>
                <span className="text-xs text-muted-foreground">Not connected</span>
              </div>
            </div>
          </section>

          <section className="glass-card rounded-2xl p-6 border border-border">
            <div className="flex items-center justify-between gap-4 mb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-display font-semibold">Interview History</h3>
              </div>
              <Button 
                onClick={() => router.push('/practice')}
                className="rounded-full bg-teal-500 hover:bg-teal-600 text-white"
              >
                Practice New Interview
              </Button>
            </div>
            <div className="text-center py-10 text-muted-foreground">
              <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
                <Briefcase className="h-6 w-6" />
              </div>
              <p className="font-medium">No interview practices yet</p>
              <p className="text-sm">
                Start your first practice interview to see your history here
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
