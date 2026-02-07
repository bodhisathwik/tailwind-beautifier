import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const domains = ["Web Development", "AI / ML", "Cyber Security", "Cloud Computing"];

const Register = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState(domains[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <section className="hero-gradient min-h-[70vh] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-md mx-auto px-6"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-primary" size={32} />
            </div>
            <h1 className="text-3xl font-bold mb-3">You're Registered!</h1>
            <p className="text-muted-foreground">
              Thanks for signing up, <span className="text-foreground font-medium">{name}</span>. 
              We'll send details to <span className="text-primary font-mono text-sm">{email}</span>.
            </p>
          </motion.div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="hero-gradient">
        <div className="container mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Join Us</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Register for the Event</h1>
            <p className="text-muted-foreground text-lg">
              Secure your spot at Tech Event 2026. Limited seats available.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-card p-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your full name"
                className="w-full rounded-lg border border-border bg-muted/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="w-full rounded-lg border border-border bg-muted/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Domain of Interest</label>
              <select
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="w-full rounded-lg border border-border bg-muted/30 px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all appearance-none cursor-pointer"
              >
                {domains.map((d) => (
                  <option key={d} value={d} className="bg-card text-foreground">
                    {d}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <Send size={16} />
              Submit Registration
            </button>
          </form>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Register;
