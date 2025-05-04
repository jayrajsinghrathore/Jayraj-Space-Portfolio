"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, MapPin, Building2 } from "lucide-react"

const timelineData = [
  {
    id: 1,
    company: "Scribes, HackaSphere, Ace-Hack 4.0",
    role: "Hackathons",
    period: "2023-2025",
    location: "Jaipur, Delhi",
    type: "Top 10",
    logo: "https://img.freepik.com/premium-photo/team-business-people-working-together_813420-473.jpg",
    skills: ["Typescript", "Websockets", "Next.js", "PostgreSQL", "Python"],
  },
  {
    id: 2,
    company: "Mern Stack",
    role: "Free Lancing",
    period: "2024 - Present",
    location: "remote",
    type: "IT",
    logo: "https://images.seeklogo.com/logo-png/5/1/freelancer-work-inside-logo-png_seeklogo-57543.png?v=1955367293759856504",
    skills: ["React", "Express.js", "Node.js", "Mongo.DB"],
  },
]

const skillsData = {
  "Programming Languages": [
    { name: "JavaScript", proficiency: 90 },
    { name: "TypeScript", proficiency: 80 },
    { name: "Python", proficiency: 50 },
  ],
  "Frameworks/Libraries": [
    { name: "React", proficiency: 95 },
    { name: "Next.js", proficiency: 85 },
    { name: "Node.js", proficiency: 80 },
    { name: "Express.js", proficiency: 70 },
    { name: "Django", proficiency: 50 },
  ],
  "Tools/Design": [
    { name: "Git ", proficiency: 98 },
    { name: "VS-Code", proficiency: 88 },
    { name: "Linux", proficiency: 80 },
    { name: "Figma", proficiency: 78 },
    { name: "Canva", proficiency: 78 },
  ],
  "Platforms & Services": [
    { name: "Supabase & Neon", proficiency: 90 },
    { name: "Git-Hub", proficiency: 98 },
    { name: "Postman", proficiency: 85 },
    { name: "Vercel & Netlify", proficiency: 80 },
    { name: "Prisma Studio", proficiency: 78 },
  ],
}

export default function AboutMe() {
  return (
    <section id="about" className="py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Code, Coffee & Me
            </span>
            <span className="ml-2">☕💻</span>
          </h2>
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
            <div className="md:w-1/3">
              <div className="relative w-64 h-64 mx-auto">
                <Image
                  src="https://res.cloudinary.com/dzrs9u5fg/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1745145763/Snapchat-703159312_oqkyx7.jpg"
                  alt="Jayraj Singh Rathore"
                  fill
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="prose prose-invert max-w-none text-center md:text-left">
                {/* Mobile description */}
                <p className="text-lg leading-relaxed md:hidden">
                  Full Stack Developer 💻 and Tech Enthusiast 🔍. Building modern, scalable solutions for the web and
                  mobile. From frontend to backend, turning ideas into reality. 🚀💡✨
                </p>
                {/* Desktop description */}
                <div className="hidden md:block">
                  <p className="text-xl mb-4">
                    🚀 <strong>Hey, I'm Jayraj Singh Rathore!</strong>
                  </p>
                  <p className="mb-4">
                   A <strong>Full Stack Developer 💻</strong> | <strong>Tech           
                  Enthusiast 🔍</strong>, I specialize in building{" "}
                   <strong>scalable web</strong> and <strong>mobile applications</          
                  strong> with a focus on{" "}
                   <strong>performance</strong>, <strong>usability</strong>, and <strong> clean architecture</strong>. From intuitive <strong>UI/UX           
                  design</strong> to robust{" "}
                   <strong>backend systems</strong>, I enjoy crafting end-to-end           
                  solutions that solve{" "}
                   <strong>real-world problems</strong>.
                  </p>

                   <p className="mb-4">
                    Proficient in <strong>JavaScript, TypeScript, and Python</strong>, I spend my time architecting{" "} <strong>modern applications</strong> and exploring <strong>emerging technologies</strong> in the web ecosystem. Outside of development, I'm actively involved in {" "} <strong>open-source projects</strong> and continuously learning to stay ahead in a{" "}<strong>fast-evolving tech landscape</strong>.</p>

                  <p>
                    Let's <strong>connect, innovate, and build amazing things</strong>—because the{" "}
                    <strong>future is digital, and I'm excited to be part of it!</strong> 🚀💡✨
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                The Road So Far
              </span>
              <span className="ml-2 text-white">🛤️</span>
            </h3>
            <div className="relative">
              {/* Vertical Line (only visible on larger screens) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"></div>

              {/* Timeline Items */}
              <div className="space-y-8">
                {timelineData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 relative`}
                  >
                    {/* Content */}
                    <div className="md:w-1/2 p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
                      <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="w-16 h-16 md:w-12 md:h-12 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden mb-4 md:mb-0 mx-auto md:mx-0">
                          <Image
                            src={item.logo || "/placeholder.svg"}
                            alt={item.company}
                            width={56}
                            height={56}
                            className="rounded-full"
                          />
                        </div>
                        <div className="text-center md:text-left">
                          <h3 className="text-xl font-bold text-white">{item.role}</h3>
                          <h4 className="text-lg text-purple-400">{item.company}</h4>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 mt-1">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{item.period}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{item.location}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                            <Building2 className="w-4 h-4" />
                            <span className="text-sm">{item.type}</span>
                          </div>
                        </div>
                      </div>
                      {item.skills.length > 0 && (
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                          {item.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 border border-purple-500/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Timeline Point (hidden on mobile) */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hidden md:block"></div>

                    {/* Timeline Connector (hidden on mobile) */}
                    {index < timelineData.length - 1 && (
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                        className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"
                        style={{ top: "100%", height: "100px" }}
                      ></motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Code Arsenal
              </span>
              <span className="ml-2 text-white">⚔️</span>
            </h3>
            {/* 
              Note: Skills data can be customized as requested.
              Current structure is maintained for demonstration.
            */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {Object.entries(skillsData).map(([category, skills]) => (
                <div key={category} className="p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
                  <h4 className="text-xl font-bold mb-4 text-purple-400 text-center md:text-left">{category}</h4>
                  {skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} proficiency={skill.proficiency} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SkillBar({ name, proficiency }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300">{name}</span>
        <span className="text-gray-400">{proficiency}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
        />
      </div>
    </div>
  )
}
