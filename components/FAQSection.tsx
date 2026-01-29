import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI interview practice work?",
    answer: "Our AI analyzes your responses in real-time, evaluating factors like clarity, confidence, and relevance. You'll receive instant feedback with actionable suggestions to improve your interview performance."
  },
  {
    question: "What types of interviews can I practice?",
    answer: "We cover behavioral interviews, technical interviews, case studies, and role-specific scenarios across industries including tech, finance, consulting, healthcare, and more."
  },
  {
    question: "Is my interview data private and secure?",
    answer: "Absolutely. All your practice sessions are encrypted and stored securely. We never share your data with third parties, and you can delete your history anytime."
  },
  {
    question: "Can I practice for specific companies?",
    answer: "Yes! Our Professional and Teams plans include company-specific question banks tailored to top employers like Google, Amazon, McKinsey, and hundreds more."
  },
  {
    question: "How accurate is the AI feedback?",
    answer: "Our AI is trained on thousands of successful interview responses and hiring manager preferences. It provides feedback that closely mirrors what real interviewers look for."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes! Our Starter plan is completely free with 3 practice sessions per month. You can upgrade anytime to unlock unlimited sessions and advanced features."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about InterviewIQ
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background rounded-xl border border-border/50 px-6 shadow-sm data-[state=open]:shadow-md data-[state=open]:border-primary/30 transition-all duration-200"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline hover:text-primary py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a href="#" className="text-primary font-medium hover:underline">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
