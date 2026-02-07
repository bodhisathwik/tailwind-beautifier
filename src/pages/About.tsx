import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Mail, Lightbulb, Zap, Users } from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Innovation", description: "Pushing boundaries with breakthrough ideas and emerging technologies." },
  { icon: Zap, title: "Speed", description: "Rapid iteration and agile thinking to stay ahead of the curve." },
  { icon: Users, title: "Community", description: "Building connections that last beyond the event." },
];

const About = () => {
  return (
    <Layout>
      <section className="hero-gradient">
        <div className="container mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Our Story</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About the Event</h1>
            <p className="text-muted-foreground text-lg">
              This event encourages innovation, speed, and creative thinking across
              all domains of technology.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <value.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto rounded-xl border border-border bg-card p-8 text-center"
        >
          <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
            <Mail size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
          <p className="text-muted-foreground mb-1">Have questions? Reach out to us at</p>
          <a
            href="mailto:contact@techevent.com"
            className="text-primary font-mono text-sm hover:underline"
          >
            contact@techevent.com
          </a>
        </motion.div>
      </section>
    </Layout>
  );
};

export default About;
