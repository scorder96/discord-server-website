import { motion } from "motion/react";
import { Navbar } from "~/components/navbar";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function Leaderboards() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-800 text-white px-4 sm:px-6 lg:px-8 pb-8">
        <h1 className="text-2xl sm:text-3xl font-bold pt-32 pb-16">🤝 Partners</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-zinc-800 border-zinc-700 text-white h-full">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-1">{partner.name}</h2>
                  <p className="text-zinc-400 text-sm mb-2">{partner.description}</p>
                  <Button className="text-base bg-indigo-600 hover:bg-indigo-500 text-white mt-2">
                    Join their Discord
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
const partners = [
  {
    id: "1",
    name: "Pixel Guild",
    logo: "https://placehold.co/100x100?text=PG",
    description:
      "A community of digital artists and pixel enthusiasts." +
      " Great place for collaboration and learning.",
    website: "https://pixelguild.gg",
  },
  {
    id: "2",
    name: "GameVerse Network",
    logo: "https://placehold.co/100x100?text=GVN",
    description: "Your hub for indie game news, tournaments, and giveaways.",
    website: "https://gameverse.gg",
  },
  {
    id: "3",
    name: "StreamLabz",
    logo: "https://placehold.co/100x100?text=SL",
    description: "Partnered tools for streamers, overlays, and community alerts.",
    website: "https://streamlabz.io",
  },
];
