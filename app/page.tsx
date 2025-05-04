"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Twitter,
  Calendar,
  FileText,
  Blocks,
  Cpu,
  Braces,
  MessageSquare,
  Smartphone,
  PenTool,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Code,
  CheckCircle,
} from "lucide-react"
import { Link as ScrollLink } from "react-scroll"
import CustomCursor from "@/components/custom-cursor"
import Navbar from "@/components/navbar"
import SocialIcon from "@/components/social-icon"
import { Button } from "@/components/ui/button"
import AboutMe from "@/components/about-me"
import Loading from "@/components/loading"
import InteractiveShapes from "@/components/InteractiveShapes"
import AnimatedBoxes from "@/components/AnimatedBoxes"
import Image from "next/image"
import { toast } from "sonner"

// Project data with images and links
const projectsData = [
  {
    id: 1,
    title: "AI-Smile Analysis",
    description:
      "An AI-Based teeth analysis/face analysis, dental routine/veneer recommendation system with report generation, email to doctor, appointment booking, integrated dental simulator with(Models: Overbite/Crossbite/Underbite and Treatments: Invisalign/veneers) .",
    tags: ["Next.js", "Vortex AI", "PostgreSQL", "Blender", "Computer Vision", "Three.js", "Nodemailer", "Typescript"],
    image: "https://res.cloudinary.com/dzrs9u5fg/image/upload/v1746351264/Screenshot_from_2025-05-04_14-55-00_cjdaqu.png",
    liveLink: "https://ai-smile-analysis.vercel.app",
    githubLink: "https://github.com/jayrajsinghrathore/SmileMatch-AI",
  },
  {
    id: 2,
    title: "WealthWise",
    description:"Wealth Wise is a modern personal finance management application built with Next.js, TypeScript, Prisma, PostgreSQL, and Chart.js. It helps users track income, expenses, and financial goals through a clean dashboard and interactive data visualizations. Designed for clarity and scalability, the app ensures a smooth and responsive budgeting experience.",
    tags: ["Next.js", "NextAuth & OAuth", "PostgreSQL", "Chart.js", "Prisma ORM", "Three.js", "Typescript"],
    image: "https://res.cloudinary.com/dzrs9u5fg/image/upload/v1746338554/Screenshot_from_2025-05-04_10-37-07_uevfgg.png",
    liveLink: "https://wealthwise-jayraj.vercel.app",
    githubLink: "https://github.com/jayrajsinghrathore/WealthWise",
  },
  {
    id: 3,
    title: "VoiceCook AI",
    description:
      "VoiceCook AI is a voice-controlled AI cooking assistant that allows users to search, view, and save recipes using natural voice commands. Built for hands-free use in the kitchen, it enhances the cooking experience with intelligent search and a smooth, interactive UI.",
    tags: ["Next.js", "Spoonacular API", "PostgreSQL", "Cloudinary", "Prisma","Framer Motion", "Typescript"],
    image: "https://res.cloudinary.com/dzrs9u5fg/image/upload/v1746338567/Screenshot_from_2025-05-04_11-07-31_iz1xgf.png",
    liveLink: "https://voicecook-ai.vercel.app",
    githubLink: "https://github.com/jayrajsinghrathore/VoiceCook-AI",
  },
 
  {
    id: 4,
    title: "DrawCollab",
    description:"A real-time collaborative whiteboard application with rich features, smooth animations, and secure authentication. Perfect for remote teams, educators, and creative professionals. It features real-time drawing tools like pen, shapes, text, and eraser with customizable colors and stroke sizes. Users can zoom, pan, export their work, and enjoy a smooth, interactive canvas experience across devices.",
    tags: ["Next.js", "NextAuth", " Three.js", "TypeScript", "Websockets", "Tailwind CSS"],
    image: "https://res.cloudinary.com/dzrs9u5fg/image/upload/v1745495809/Screenshot_from_2025-04-24_17-22-06_g1aju0.png",
    liveLink: "https://collaborative-whiteboard-tool2.vercel.app",
    githubLink: "https://github.com/jayrajsr/portfolio",
  },
  {
    id: 5,
    title: "AOT-The Epic Story",
    description:"dynamic and visually immersive fan site dedicated to the legendary anime Attack on Titan. It brings the world of Titans, characters, and story arcs to life with smooth animations with optimized media via Cloudinary and interactive 3D visuals. The site blends performance and design to deliver an engaging experience for anime fans.",
    tags: ["Next.js", "Three.js","Framer Motion", "Cloudinary", "Typescript", "TailwindCSS", "Shadcn"],
    image:
      "https://res.cloudinary.com/dzrs9u5fg/image/upload/v1745298773/Screenshot_from_2025-04-20_18-59-24_jte4hi.png",
    liveLink: "https://attack-on-titan-jayraj.vercel.app/",
    githubLink: "https://github.com/jayrajsinghrathore/AOT-The-Epic-Anime",
  },

  {
    id: 6,
    title: "Frag & Frame",
    description:
      "BGMI portfolio a dynamic and interactive showcase of my gaming journey, built with GSAP and JavaScript. Features include smooth scrolling, cool animations, and sleek cards to display my achievements and milestones in BGMI.",
    tags: ["javascript", "Gsap", "CSS", "HTML"],
    image: "https://res.cloudinary.com/dzrs9u5fg/image/upload/v1745495810/Screenshot_from_2025-04-24_17-14-28_buom16.png",
    liveLink: "https://rococo-treacle-a503c3.netlify.app/",
    githubLink: "https://github.com/jayrajsinghrathore/FRAG-FRAME",
  },
  {
    id: 7,
    title: "Employee Network",
    description:
      "A Comprehensive Employee Management System: Leveraged React to create a dynamic web application featuring an intuitive admin dashboard and employee interface to assign and accept tasks, enhancing user experience through responsive design and seamless navigation.",
    tags: ["Javascript", "Tailwind Css", "React.js", "Context API", "Localstorage"],
    image: "https://res.cloudinary.com/dzrs9u5fg/image/upload/v1745495809/Screenshot_from_2025-04-24_17-22-54_ei33ge.png",
    liveLink: "https://adorable-fenglisu-a762c2.netlify.app",
    githubLink: "https://github.com/jayrajsinghrathore/EMPLOYEE-NETWORK",
  },

]

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [formSubmitting, setFormSubmitting] = useState(false)
  const [formSuccess, setFormSuccess] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // Show loading for 2 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null
  if (loading) return <Loading />

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormSubmitting(true)

    // Get form data
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    // Simple validation
    if (!name || !email || !message) {
      toast.error("Please fill in all fields")
      setFormSubmitting(false)
      return
    }

    try {
      // In a real implementation, you would send this data to your backend
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Show success message
      toast.success("Message sent successfully! I'll get back to you soon.")
      setFormSuccess(true)

      // Reset form
      e.currentTarget.reset()

      // After 3 seconds, reset success state
      setTimeout(() => setFormSuccess(false), 3000)
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
    } finally {
      setFormSubmitting(false)
    }
  }

  // Get visible projects based on showAllProjects state
  const visibleProjects = showAllProjects ? projectsData : projectsData.slice(0, 2)

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <CustomCursor />
      <Navbar />
      <InteractiveShapes />

      {/* Hero Section with Animated Boxes */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBoxes />
        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-shadow">
              Hey! It's Jayraj Singh Rathore
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-muted-foreground">
              🚀 Full-Stack Developer | Tech Enthusiast | Problem Solver
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <ScrollLink to="work" smooth={true} duration={500}>
                <Button className="gradient-bg hover:opacity-90 text-white">View Projects</Button>
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500}>
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-primary text-primary hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  Contact Me
                </Button>
              </ScrollLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container px-4 mx-auto">
          <AboutMe />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="gradient-text text-shadow">My Expertise</span>
              <span className="ml-2 text-foreground">🛠️</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <ServiceCard
                icon={<Blocks className="w-10 h-10 text-primary" />}
                title="Web Development"
                description="Modern, responsive web applications built with the latest frameworks and best practices."
              />
              <ServiceCard
                icon={<Cpu className="w-10 h-10 text-primary" />}
                title="Mobile App Development"
                description="Cross-platform mobile applications that deliver exceptional user experiences."
              />
              <ServiceCard
                icon={<Braces className="w-10 h-10 text-primary" />}
                title="Full Stack Development"
                description="End-to-end web application development with modern frameworks and best practices."
              />
              <ServiceCard
                icon={<FileText className="w-10 h-10 text-primary" />}
                title="UI/UX Design"
                description="Intuitive and engaging user interfaces that enhance user experience and drive engagement."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="gradient-text text-shadow">What I've Built</span>
              <span className="ml-2 text-foreground">🏗️</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {visibleProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  image={project.image}
                  liveLink={project.liveLink}
                  githubLink={project.githubLink}
                />
              ))}
            </div>

            {/* Toggle button to show/hide more projects */}
            <div className="flex justify-center mt-10">
              <Button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="flex items-center gap-2 gradient-bg hover:opacity-90 text-white"
              >
                {showAllProjects ? (
                  <>
                    Show Less <ChevronUp size={18} />
                  </>
                ) : (
                  <>
                    View More Projects <ChevronDown size={18} />
                  </>
                )}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="gradient-text text-shadow">Ping Me</span>
              <span className="ml-2 text-foreground">🚀</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-card p-6 rounded-lg border border-border">
                {formSuccess ? (
                  <div className="flex flex-col items-center justify-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground text-center">
                      Thanks for reaching out! I'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 block w-full rounded-md bg-secondary border-border text-foreground px-4 py-3"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 block w-full rounded-md bg-secondary border-border text-foreground px-4 py-3"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="mt-1 block w-full rounded-md bg-secondary border-border text-foreground px-4 py-3"
                        required
                      ></textarea>
                    </div>
                    <Button
                      type="submit"
                      className="w-full gradient-bg hover:opacity-90 text-white"
                      disabled={formSubmitting}
                    >
                      {formSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
                <div className="mt-6 text-center">
                  <p className="text-muted-foreground mb-2">Prefer to schedule a meeting?</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                      href="https://calendly.com/jayraj8285/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white gradient-bg hover:opacity-90"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule a Meeting
                    </a>
                    <a
                      href="https://drive.google.com/file/d/your-resume-link/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white gradient-bg hover:opacity-90"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      View CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer with Social Links */}
      <footer className="py-12 bg-gradient-to-t from-secondary/30 to-background">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <SocialIcon icon={<Github />} href="https://github.com/jayrajsinghrathore" label="GitHub" />
            <SocialIcon
              icon={<Linkedin />}
              href="https://www.linkedin.com/in/jayraj-singh-rathore-786b13217/"
              label="LinkedIn"
            />
            <SocialIcon icon={<Twitter />} href="https://twitter.com/jayrajsr" label="Twitter" />
            <SocialIcon icon={<MessageSquare />} href="https://discord.com/users/jayrajsr" label="Discord" />
            <SocialIcon icon={<PenTool />} href="https://medium.com/@jayrajsr" label="Medium" />
            <SocialIcon
              icon={<Smartphone />}
              href="#"
              label="Mobile Apps"
              className="opacity-50 cursor-not-allowed"
              onClick={(e) => {
                e.preventDefault()
                console.log("Mobile icon click prevented")
              }}
            />
          </div>
          <div className="text-center text-muted-foreground text-sm">
            <p>© {new Date().getFullYear()} Jayraj Singh Rathore. All rights reserved.</p>
            <a href="mailto:jayraj8285@gmail.com" className="text-primary hover:text-primary/80 mt-2 inline-block">
              jayraj8285@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 text-center md:text-left"
    >
      <div className="mb-4 flex justify-center md:justify-start">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  )
}

function ProjectCard({ title, description, tags, image, liveLink, githubLink }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 overflow-hidden"
    >
      <div className="relative w-full h-48 overflow-hidden group">
        <Image
          src={image || "/placeholder.svg?height=400&width=600"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-50"
        />

        {/* Overlay buttons that appear on hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.a
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-4 py-2 rounded-md bg-white/90 text-black font-medium hover:bg-white transition-colors"
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </motion.a>
          <motion.a
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-4 py-2 rounded-md bg-black/90 text-white font-medium hover:bg-black transition-colors"
          >
            <Code size={16} />
            <span>Source Code</span>
          </motion.a>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-foreground text-center md:text-left">{title}</h3>
        <p className="text-muted-foreground mb-4 text-center md:text-left line-clamp-3">{description}</p>
        <div className="flex flex-wrap justify-center md:justify-start gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs px-2 py-1 rounded-full bg-secondary/50 text-primary">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
