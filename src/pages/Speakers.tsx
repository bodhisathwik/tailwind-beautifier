import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Globe, Twitter, Linkedin } from "lucide-react";

const speakers = [
  {
    name: "Subbu Sir",
    role: "Web Development",
    bio: "Expert in modern web technologies, leading the Web Dev team with hands-on mentorship.",
    initials: "SS",
  },
  {
    name: "Hasha Reddy",
    role: "Full Stack Development",
    bio: "Full stack developer skilled in building end-to-end applications with modern frameworks.",
    initials: "HR",
  },
  {
    name: "Tanish",
    role: "AI / ML",
    bio: "AI and Machine Learning enthusiast driving innovation in intelligent systems.",
    initials: "TN",
  },
  {
    name: "Satwik",
    role: "Java Backend",
    bio: "Backend engineer specializing in scalable Java architectures and microservices.",
    initials: "SW",
  },
];

const Speakers = () => {
  return (
    <Layout>
      <section className="hero-gradient">
        <div className="container mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Lineup</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Featured Speakers</h1>
            <p className="text-muted-foreground text-lg">
              Meet the speakers driving each track at Tech Event 2026.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {speakers.map((speaker, i) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-all"
            >
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-border flex items-center justify-center text-lg font-bold text-primary shrink-0">
                  {speaker.initials}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {speaker.name}
                  </h3>
                  <p className="text-sm text-primary/80 font-medium mb-2">{speaker.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{speaker.bio}</p>
                  <div className="flex items-center gap-3 mt-4 text-muted-foreground">
                    <button className="hover:text-primary transition-colors"><Twitter size={16} /></button>
                    <button className="hover:text-primary transition-colors"><Linkedin size={16} /></button>
                    <button className="hover:text-primary transition-colors"><Globe size={16} /></button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Speakers;
