import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from './Navbar';
import { BookOpen, Code2, Database, FileCode, Cog, Lightbulb } from "lucide-react";

const courses = [
  {
    id: "01",
    title: "Introduction to Noir",
    description: "Learn the basics of Noir and its purpose in zero-knowledge proofs.",
    icon: <BookOpen className="w-8 h-8 text-blue-500" />,
    link: "/learn/intro"
  },
  {
    id: "02",
    title: "Basic Syntax",
    description: "Explore the fundamental syntax of Noir programming.",
    icon: <Code2 className="w-8 h-8 text-green-500" />,
    link: "/learn/syntax"
  },
  {
    id: "03",
    title: "Data Types",
    description: "Understand the various data types available in Noir.",
    icon: <Database className="w-8 h-8 text-purple-500" />,
    link: "/learn/datatypes"
  },
  {
    id: "04",
    title: "Functions",
    description: "Learn how to define and use functions in Noir.",
    icon: <FileCode className="w-8 h-8 text-orange-500" />,
    link: "/learn/functions"
  },
  {
    id: "05",
    title: "Control Flow",
    description: "Master control flow statements in Noir.",
    icon: <Cog className="w-8 h-8 text-pink-500" />,
    link: "/learn/control-flow"
  },
  {
    id: "06",
    title: "Zero-Knowledge Concepts",
    description: "Dive into zero-knowledge concepts and their implementation in Noir.",
    icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
    link: "/learn/zk-concepts"
  }
];

const LearnPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Learn Noir</h1>
        <h3 className="text-xl text-muted-foreground mb-12">
          Start your journey into zero-knowledge proofs with Noir. Choose a topic below to begin.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="group relative rounded-lg border border-border bg-card p-6 hover:border-primary transition-colors">
              <div className="mb-4 rounded-lg bg-primary/10 p-3 w-fit">
                {course.icon}
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-sm text-muted-foreground mr-2">{course.id}</span>
                  <h2 className="text-xl font-semibold">{course.title}</h2>
                </div>
                <p className="text-muted-foreground">{course.description}</p>
              </div>
              <Button asChild className="mt-4 w-full" variant="outline">
                <Link to={course.link}>Start Learning</Link>
              </Button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LearnPage; 