"use client";

import { useState, useRef } from "react";
import { Upload, FileText, X, Briefcase, MapPin, Clock, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jobListings = [
  {
    title: "AI/ML Engineer",
    location: "Remote",
    type: "Full-time",
    department: "Engineering",
    description: "Build and improve our AI interview models",
  },
  {
    title: "Frontend Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    department: "Engineering",
    description: "Create beautiful user experiences with React",
  },
  {
    title: "Product Manager",
    location: "New York, NY",
    type: "Full-time",
    department: "Product",
    description: "Lead product strategy and roadmap",
  },
  {
    title: "UX Designer",
    location: "Remote",
    type: "Contract",
    department: "Design",
    description: "Design intuitive interview preparation flows",
  },
];

const JobsPage = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (allowedTypes.includes(file.type)) {
        if (file.size > 10 * 1024 * 1024) {
          toast.error("File size should be less than 10MB");
          return;
        }
        setUploadedFile(file);
        toast.success("Resume uploaded successfully!");
      } else {
        toast.error("Please upload a PDF or Word document");
      }
    }
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    if (!uploadedFile) {
      toast.error("Please upload your resume");
      return;
    }
    toast.success("Application submitted! We'll be in touch soon.");
    setName("");
    setEmail("");
    setUploadedFile(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Careers
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Join Our <span className="text-gradient">Team</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Help us revolutionize interview preparation with AI. We're looking for passionate people to join our mission.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Job Listings */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-xl font-display font-semibold mb-4">Open Positions</h2>
              {jobListings.map((job, index) => (
                <Card key={index} className="hover:border-primary/50 transition-colors cursor-pointer">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{job.title}</CardTitle>
                        <CardDescription className="mt-1">{job.description}</CardDescription>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        {job.department}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Resume Upload Form */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-xl font-display">Upload Your Resume</CardTitle>
                  <CardDescription>Submit your resume and we'll match you with the right role</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                      />
                    </div>

                    <div
                      className="border-2 border-dashed border-primary/30 rounded-xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <Upload className="w-8 h-8 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground mb-1">Click to upload</p>
                      <p className="text-xs text-muted-foreground">PDF or Word (max 10MB)</p>
                    </div>

                    {uploadedFile && (
                      <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg">
                        <FileText className="w-5 h-5 text-primary" />
                        <span className="text-sm flex-1 truncate">{uploadedFile.name}</span>
                        <button
                          type="button"
                          onClick={handleRemoveFile}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    )}

                    <Button type="submit" variant="hero" className="w-full rounded-full">
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JobsPage;
