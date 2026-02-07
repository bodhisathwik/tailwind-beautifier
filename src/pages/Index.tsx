import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0, 0, 0.2, 1] as const },
  }),
};

const stats = [
  { icon: Calendar, label: "3 Days", sub: "Jun 15–17, 2026" },
  { icon: MapPin, label: "San Francisco", sub: "Moscone Center" },
  { icon: Users, label: "5,000+", sub: "Attendees Expected" },
];

const tracks = [
  { title: "Web Development", color: "from-primary to-primary/60" },
  { title: "AI / ML", color: "from-accent to-accent/60" },
  { title: "Cyber Security", color: "from-destructive to-destructive/60" },
  { title: "Cloud Computing", color: "from-primary to-accent" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto"
          >
            <motion.p
              custom={0}
              variants={fadeUp}
              className="text-primary font-mono text-sm tracking-widest uppercase mb-4"
            >
              June 15–17, 2026 · San Francisco
            </motion.p>
            <motion.h1
              custom={1}
              variants={fadeUp}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
            >
              Welcome to{" "}
              <span className="gradient-text text-glow">Tech Event</span>{" "}
              2026
            </motion.h1>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10"
            >
              The official gathering for developers, researchers, and innovators shaping
              the future of technology.
            </motion.p>
            <motion.div custom={3} variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/register"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Register Now
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/schedule"
                className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-3 rounded-lg font-semibold text-sm hover:bg-muted transition-colors"
              >
                View Schedule
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="glass rounded-xl p-6 flex items-center gap-4 border-glow"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-lg font-bold text-foreground">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tracks Preview */}
      <section className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Event Tracks</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Four immersive tracks covering the most impactful areas in tech today.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tracks.map((track, i) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors cursor-pointer"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${track.color}`} />
              <h3 className="text-lg font-semibold mt-2 mb-2 text-foreground group-hover:text-primary transition-colors">
                {track.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                Deep-dive sessions, workshops, and hands-on labs.
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
