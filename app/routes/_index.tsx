import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { motion } from "framer-motion";
import { Sparkles, Users, ShieldCheck, Rocket } from "lucide-react";
import { features, staff } from "~/data/data";
import { Navbar } from "~/components/navbar";
import Stats from "~/components/stats";
import DiscordStats from "~/components/stats";

export default function Index() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-800 text-white px-4 sm:px-6 lg:px-8">
        <header className="max-w-7xl mx-auto pt-32 pb-16 text-center">
          <motion.h1
            className="text-4xl sm:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Welcome to <span className="text-indigo-400">[Server Name]</span>
          </motion.h1>
          <p className="text-zinc-300 text-lg sm:text-xl mb-6">
            The official community hub for fans, creators, and collaborators.
          </p>
          <Button
            size="lg"
            className="text-base bg-indigo-600 hover:bg-indigo-500 text-white"
          >
            Join our Discord
          </Button>
        </header>

        <section className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-20 auto-rows-fr">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-zinc-800 border-zinc-700 text-white h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <feature.icon className="h-10 w-10 text-indigo-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-zinc-400 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </section>
        <section id="about" className="max-w-4xl mx-auto px-4 py-20 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            About the Server
          </motion.h2>
          <motion.p
            className="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            [Server Name] is more than just a chatroom—it's a thriving community built
            around shared interests, creativity, and connection. Whether you're here for
            gaming, fandom discussions, tech talk, or casual chill sessions, there's a
            space for everyone. Come hang out, share your thoughts, and meet like-minded
            people from all over the world.
          </motion.p>
        </section>
        <section id="stats" className="max-w-5xl mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Server Stats</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Real-time stats from our Discord community. Hop in and see what we’re all
              about!
            </p>
            <DiscordStats guildId="970295509979910174" />
          </div>
        </section>
        <section id="staff" className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-10">Meet the Staff</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {staff.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-zinc-800 border-zinc-700 text-white h-full">
                  <CardContent className="p-6 text-center flex flex-col items-center">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      // className="h-20 w-20 rounded-full object-cover mb-4 border-2 border-indigo-400"
                      className="h-20 w-20 rounded-full object-cover mb-4"
                    />
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-indigo-400 text-sm">{member.role}</p>
                    <p className="text-zinc-400 text-sm mt-2">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="join" className="max-w-5xl mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Join the Community?
            </h2>
            <p className="text-zinc-400 text-lg mb-8">
              Whether you're here to make friends, share your passions, or just vibe out —
              there's a spot for you in our server.
            </p>
            <Button
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-500 text-white text-base px-6"
            >
              Join Our Discord
            </Button>
          </div>
        </section>

        <footer className="text-center py-10 border-t border-zinc-700 text-zinc-500 text-sm">
          © {new Date().getFullYear()} [Server Name]. All rights reserved.
        </footer>
      </div>
    </>
  );
}
