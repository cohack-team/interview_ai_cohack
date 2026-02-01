"use client";

import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const jobListings: Record<string, any> = {
  "frontend-developer": {
    id: "frontend-developer",
    title: "Frontend Developer",
    company: "Tech Innovations",
    location: "Bangalore, India",
    type: "Full-time",
    level: "Mid",
    department: "Technology",
    salary: "₹12,00,000 – ₹18,00,000",
    date: "5/10/2025",
    description: "We are looking for a skilled Frontend Developer to join our dynamic team. You will be responsible for developing and implementing user interface components using React.js concepts and workflows.",
    requirements: [
      "3+ years experience with React.js",
      "Proficient understanding of web markup, HTML5, CSS3",
      "Good understanding of JavaScript and ES6+ features",
      "Experience with RESTful APIs and GraphQL",
      "Familiarity with Redux, TypeScript, and modern frontend tools"
    ],
    responsibilities: [
      "Develop new user-facing features using React.js",
      "Build reusable components and frontend libraries for future use",
      "Translate designs and wireframes into high-quality code",
      "Optimize components for maximum performance across devices and browsers"
    ]
  },
  "backend-developer": {
    id: "backend-developer",
    title: "Backend Developer",
    company: "Digital Solutions",
    location: "Mumbai, India",
    type: "Full-time",
    level: "Senior",
    department: "Engineering",
    salary: "₹18,00,000 – ₹28,00,000",
    date: "5/09/2025",
    description: "We are seeking an experienced Backend Developer to build scalable and robust server-side applications. You will design and implement RESTful APIs, manage databases, and optimize system performance.",
    requirements: [
      "5+ years of backend development experience",
      "Strong knowledge of Node.js, Python, or Java",
      "Experience with SQL and NoSQL databases (PostgreSQL, MongoDB)",
      "Understanding of microservices architecture",
      "Experience with cloud platforms like AWS, GCP, or Azure"
    ],
    responsibilities: [
      "Design and develop scalable backend APIs and services",
      "Implement efficient database schemas and optimize queries",
      "Write clean, maintainable, and well-documented code",
      "Collaborate with frontend developers and DevOps teams"
    ]
  },
  "python-developer": {
    id: "python-developer",
    title: "Python Developer",
    company: "Code Masters",
    location: "Pune, India",
    type: "Full-time",
    level: "Mid",
    department: "Engineering",
    salary: "₹14,00,000 – ₹22,00,000",
    date: "5/11/2025",
    description: "Join our team as a Python Developer to build robust backend applications and automation tools. You will work with Django/Flask frameworks and contribute to building scalable web applications.",
    requirements: [
      "4+ years of Python programming experience",
      "Strong knowledge of Django or Flask frameworks",
      "Experience with REST API development",
      "Understanding of Python data structures and algorithms",
      "Familiarity with PostgreSQL/MySQL and ORM concepts"
    ],
    responsibilities: [
      "Develop backend applications using Python frameworks",
      "Create and maintain RESTful APIs",
      "Write efficient, reusable, and reliable Python code",
      "Optimize application performance and troubleshoot issues"
    ]
  },
  "data-scientist": {
    id: "data-scientist",
    title: "Data Scientist",
    company: "Analytics Corp",
    location: "Remote",
    type: "Full-time",
    level: "Advanced",
    department: "Data Science",
    salary: "₹20,00,000 – ₹30,00,000",
    date: "5/08/2025",
    description: "Join our Data Science team to build machine learning models and drive insights from big data. You will work with cutting-edge tools and technologies to solve complex business problems.",
    requirements: [
      "Master's degree in Computer Science, Statistics, or related field",
      "4+ years of experience with machine learning and data analysis",
      "Proficiency in Python (NumPy, Pandas, Scikit-learn)",
      "Experience with data visualization tools (Matplotlib, Seaborn)",
      "Strong understanding of statistics and probability"
    ],
    responsibilities: [
      "Develop and train machine learning models",
      "Perform exploratory data analysis and feature engineering",
      "Create data visualizations and dashboards",
      "Collaborate with stakeholders to define data requirements"
    ]
  },
  "ml-engineer": {
    id: "ml-engineer",
    title: "Machine Learning Engineer",
    company: "AI Systems",
    location: "Hyderabad, India",
    type: "Full-time",
    level: "Advanced",
    department: "AI/ML",
    salary: "₹22,00,000 – ₹35,00,000",
    date: "5/07/2025",
    description: "We are looking for an experienced ML Engineer to design, build, and deploy machine learning systems at scale. You will work on deep learning models and production ML pipelines.",
    requirements: [
      "5+ years of experience in machine learning engineering",
      "Expertise in TensorFlow, PyTorch, or Keras",
      "Strong knowledge of deep learning architectures",
      "Experience with MLOps and model deployment",
      "Proficiency in Python and cloud platforms (AWS/GCP)"
    ],
    responsibilities: [
      "Design and implement deep learning models",
      "Build and maintain ML pipelines and infrastructure",
      "Deploy models to production environments",
      "Monitor model performance and implement improvements"
    ]
  },
  "fullstack-developer": {
    id: "fullstack-developer",
    title: "Full Stack Developer",
    company: "Web Solutions Inc",
    location: "Delhi, India",
    type: "Full-time",
    level: "Advanced",
    department: "Engineering",
    salary: "₹18,00,000 – ₹28,00,000",
    date: "5/12/2025",
    description: "We need a Full Stack Developer who can handle both frontend and backend development. You will build complete web applications from database to user interface.",
    requirements: [
      "5+ years of full stack development experience",
      "Strong knowledge of React.js and Node.js",
      "Experience with databases (SQL and NoSQL)",
      "Understanding of system design and architecture",
      "Proficiency in Git, Docker, and CI/CD pipelines"
    ],
    responsibilities: [
      "Develop end-to-end web applications",
      "Design and implement both frontend and backend features",
      "Ensure application performance and scalability",
      "Collaborate with cross-functional teams"
    ]
  },
  "product-manager": {
    id: "product-manager",
    title: "Product Manager",
    company: "Innovation Labs",
    location: "Bangalore, India",
    type: "Full-time",
    level: "Mid-Senior",
    department: "Product",
    salary: "₹20,00,000 – ₹32,00,000",
    date: "5/06/2025",
    description: "Join as a Product Manager to lead product strategy and roadmap. You will work with engineering, design, and business teams to build products that users love.",
    requirements: [
      "4+ years of product management experience",
      "Strong understanding of agile methodologies",
      "Experience with product analytics tools",
      "Excellent communication and leadership skills",
      "Technical background preferred"
    ],
    responsibilities: [
      "Define product vision and strategy",
      "Create and prioritize product roadmap",
      "Conduct user research and gather feedback",
      "Work with engineering teams on feature development"
    ]
  },
  "devops-engineer": {
    id: "devops-engineer",
    title: "DevOps Engineer",
    company: "Cloud Infrastructure Ltd",
    location: "Chennai, India",
    type: "Full-time",
    level: "Advanced",
    department: "DevOps",
    salary: "₹19,00,000 – ₹29,00,000",
    date: "5/05/2025",
    description: "We are seeking a DevOps Engineer to manage our cloud infrastructure and automate deployment pipelines. You will ensure high availability and performance of our systems.",
    requirements: [
      "5+ years of DevOps/SRE experience",
      "Expertise in Kubernetes and Docker",
      "Strong knowledge of CI/CD tools (Jenkins, GitLab CI)",
      "Experience with AWS, GCP, or Azure",
      "Proficiency in scripting (Bash, Python)"
    ],
    responsibilities: [
      "Design and maintain CI/CD pipelines",
      "Manage cloud infrastructure and orchestration",
      "Implement monitoring and logging solutions",
      "Automate deployment and scaling processes"
    ]
  }
};

export default function JobDetail() {
  const params = useParams();
  const router = useRouter();
  const jobId = params.id as string;
  const job = jobListings[jobId];

  if (!job) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Job Not Found</h1>
            <Button 
              variant="outline" 
              className="rounded-full"
              onClick={() => router.back()}
            >
              Go Back
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handlePracticeInterview = () => {
    router.push("/ai-interview");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">{job.title}</h1>
                <p className="text-muted-foreground text-lg flex flex-wrap items-center gap-3">
                  <span className="font-medium">{job.company}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                </p>
                <div className="flex gap-2 mt-6 flex-wrap">
                  <span className="px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
                    {job.type}
                  </span>
                  <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                    {job.level}
                  </span>
                  <span className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                    {job.department}
                  </span>
                </div>
              </div>

              {/* Job Description */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Job Description</h2>
                <p className="text-foreground text-base leading-relaxed">
                  {job.description}
                </p>
              </div>

              {/* Requirements */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Requirements</h2>
                <ul className="space-y-3">
                  {job.requirements.map((req: string, idx: number) => (
                    <li key={idx} className="flex gap-3 text-foreground">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span className="text-base">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Responsibilities */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Responsibilities</h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((resp: string, idx: number) => (
                    <li key={idx} className="flex gap-3 text-foreground">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span className="text-base">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-8">Job Summary</h3>
                <div className="space-y-8">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-2">Company</p>
                    <p className="font-semibold text-foreground text-lg">{job.company}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-2">Location</p>
                    <p className="font-semibold text-foreground text-lg">{job.location}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-2">Job Type</p>
                    <p className="font-semibold text-foreground text-lg">{job.type}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-2">Experience Level</p>
                    <p className="font-semibold text-foreground text-lg">{job.level}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-2">Salary Range</p>
                    <p className="font-semibold text-foreground text-lg">{job.salary}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-2">Posted Date</p>
                    <p className="font-semibold text-foreground text-lg">{job.date}</p>
                  </div>
                  <Button 
                    className="w-full rounded-full bg-emerald-600 hover:bg-emerald-700 h-12 text-base font-semibold mt-8"
                    onClick={handlePracticeInterview}
                  >
                    Practice Interview Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
