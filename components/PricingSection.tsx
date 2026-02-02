"use client";

import { Check, Zap, Crown, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

const pricingPlans = [
  {
    name: "Starter",
    icon: Zap,
    price: "0",
    period: "Free forever",
    tagline: "Begin your journey",
    features: [
      "5 mock interviews/month",
      "Basic AI feedback",
      "Email support",
      "7-day history",
    ],
    buttonText: "Start Free",
    highlighted: false,
  },
  {
    name: "Professional",
    icon: Crown,
    price: "19",
    period: "per month",
    tagline: "For serious candidates",
    features: [
      "Unlimited interviews",
      "Advanced analytics",
      "Priority support",
      "Unlimited history",
      "Custom scenarios",
      "PDF reports",
    ],
    buttonText: "Go Pro",
    highlighted: true,
  },
  {
    name: "Teams",
    icon: Building2,
    price: "49",
    period: "per month",
    tagline: "For organizations",
    features: [
      "Everything in Pro",
      "Team dashboard",
      "API access",
      "Dedicated manager",
      "Custom branding",
      "SSO integration",
    ],
    buttonText: "Contact Us",
    highlighted: false,
  },
];

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden bg-secondary/30">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-primary/20 rounded-full" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border border-primary/10 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Pricing Plans
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Invest in Your <span className="text-gradient">Success</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choose the plan that fits your goals. Upgrade anytime as you grow.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm ${billingCycle === "monthly" ? "text-foreground font-medium" : "text-muted-foreground"}`}>
            Monthly
          </span>
          <Switch
            checked={billingCycle === "yearly"}
            onCheckedChange={(checked) => setBillingCycle(checked ? "yearly" : "monthly")}
            aria-label="Toggle billing cycle"
          />
          <span className={`text-sm ${billingCycle === "yearly" ? "text-foreground font-medium" : "text-muted-foreground"}`}>
            Yearly
            <span className="ml-1.5 text-xs text-primary font-medium">Save 20%</span>
          </span>
        </div>

        {/* Pricing cards - Horizontal layout */}
        <div className="grid lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan) => {
            const Icon = plan.icon;
            const displayPrice = billingCycle === "yearly" && plan.price !== "0"
              ? Math.round(parseInt(plan.price) * 0.8)
              : plan.price;

            return (
              <div
                key={plan.name}
                className={`relative group rounded-3xl p-6 transition-all duration-300 flex flex-col h-full ${
                  plan.highlighted
                    ? "bg-foreground text-background scale-105 shadow-2xl"
                    : "bg-card border border-primary/50 shadow-lg"
                }`}
              >
                {/* Popular ribbon */}
                {plan.highlighted && (
                  <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </div>
                )}

                {/* Icon and name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    plan.highlighted ? "bg-primary" : "bg-primary/10"
                  }`}>
                    <Icon className={`w-5 h-5 ${plan.highlighted ? "text-primary-foreground" : "text-primary"}`} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg">{plan.name}</h3>
                    <p className={`text-xs ${plan.highlighted ? "text-background/70" : "text-muted-foreground"}`}>
                      {plan.tagline}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-display font-bold ${plan.highlighted ? "" : "text-gradient"}`}>
                      ${displayPrice}
                    </span>
                    <span className={`text-sm ${plan.highlighted ? "text-background/70" : "text-muted-foreground"}`}>
                      /{plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <Check className={`w-4 h-4 shrink-0 ${
                        plan.highlighted ? "text-primary" : "text-primary"
                      }`} />
                      <span className={plan.highlighted ? "text-background/90" : ""}>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={plan.highlighted ? "secondary" : "outline"}
                  className={`w-full rounded-full group/btn transition-shadow mt-auto ${
                    plan.highlighted
                      ? "shadow-lg"
                      : "border-primary/60 bg-background text-foreground shadow-md"
                  }`}
                  size="lg"
                >
                  {plan.buttonText}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-muted-foreground mt-10">
          All plans include a 14-day money-back guarantee. No questions asked.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
