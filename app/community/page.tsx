"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MessageSquare, Star, Trophy } from "lucide-react";

const CommunityPage = () => {
  const stats = [
    { label: "Active Members", value: "50K+", icon: Users },
    { label: "Discussion Topics", value: "10K+", icon: MessageSquare },
    { label: "Success Stories", value: "5K+", icon: Star },
    { label: "Mentors Available", value: "500+", icon: Trophy },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Community
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Join Our <span className="text-gradient">Growing Community</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Connect with fellow job seekers, share experiences, and get support from our community of professionals.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardHeader className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{stat.value}</CardTitle>
                  <CardDescription>{stat.label}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Discussion Forums</CardTitle>
                <CardDescription>
                  Join conversations about interview experiences, tips, and strategies with thousands of members.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a href="/contact" className="text-primary text-sm font-medium hover:underline">
                  Visit forums →
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Success Stories</CardTitle>
                <CardDescription>
                  Get inspired by real stories from community members who landed their dream jobs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a href="/blog" className="text-primary text-sm font-medium hover:underline">
                  Read stories →
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Peer Mentorship</CardTitle>
                <CardDescription>
                  Connect with experienced professionals who can guide you through your interview journey.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a href="/contact" className="text-primary text-sm font-medium hover:underline">
                  Find a mentor →
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Study Groups</CardTitle>
                <CardDescription>
                  Join or create study groups to practice interviews and share resources with peers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a href="/practice" className="text-primary text-sm font-medium hover:underline">
                  Join a group →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CommunityPage;
