import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Clock, Code, Brain, Shield, Cloud } from "lucide-react";

const scheduleData = [
  {
    track: "Web Development",
    icon: Code,
    sessions: [
      { time: "9:00 AM", title: "Opening Keynote: The Future of the Web" },
      { time: "10:30 AM", title: "Building with Modern Frameworks" },
      { time: "1:00 PM", title: "Workshop: Full-Stack TypeScript" },
      { time: "3:30 PM", title: "Panel: Web Standards & Performance" },
    ],
  },
  {
    track: "AI / ML",
    icon: Brain,
    sessions: [
      { time: "9:00 AM", title: "State of AI in 2026" },
      { time: "10:30 AM", title: "Practical LLM Applications" },
      { time: "1:00 PM", title: "Workshop: Building ML Pipelines" },
      { time: "3:30 PM", title: "Ethics in Artificial Intelligence" },
    ],
  },
  {
    track: "Cyber Security",
    icon: Shield,
    sessions: [
      { time: "9:00 AM", title: "Threat Landscape Overview" },
      { time: "10:30 AM", title: "Zero Trust Architecture" },
      { time: "1:00 PM", title: "Workshop: Penetration Testing" },
      { time: "3:30 PM", title: "Securing Cloud Infrastructure" },
    ],
  },
  {
    track: "Cloud Computing",
    icon: Cloud,
    sessions: [
      { time: "9:00 AM", title: "Multi-Cloud Strategies" },
      { time: "10:30 AM", title: "Serverless at Scale" },
      { time: "1:00 PM", title: "Workshop: Kubernetes Deep Dive" },
      { time: "3:30 PM", title: "Edge Computing & CDNs" },
    ],
  },
];

const Schedule = () => {
  return (
    <Layout>
      <section className="hero-gradient">
        <div className="container mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Program</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Event Schedule</h1>
            <p className="text-muted-foreground text-lg">
              Three days of talks, workshops, and networking across four technology tracks.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {scheduleData.map((track, i) => (
            <motion.div
              key={track.track}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card overflow-hidden"
            >
              <div className="flex items-center gap-3 px-6 py-4 border-b border-border bg-muted/30">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <track.icon size={20} />
                </div>
                <h2 className="text-lg font-semibold text-foreground">{track.track}</h2>
              </div>
              <div className="divide-y divide-border">
                {track.sessions.map((session) => (
                  <div key={session.title} className="flex items-start gap-4 px-6 py-4 hover:bg-muted/20 transition-colors">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono min-w-[80px] pt-0.5">
                      <Clock size={12} />
                      {session.time}
                    </div>
                    <p className="text-sm font-medium text-foreground">{session.title}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Schedule;
