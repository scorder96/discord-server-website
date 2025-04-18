import { Navbar } from "~/components/navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { format } from "date-fns";
import { motion } from "motion/react";

export default function Announcements() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-800 text-white px-4 sm:px-6 lg:px-8 pb-8">
        <h1 className="text-2xl sm:text-3xl font-bold pt-32 pb-16">📢 Announcements</h1>
        {announcements === null ? (
          <div className="grid gap-4">
            {/* {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-24 rounded-xl" />
          ))} */}
          </div>
        ) : announcements.length === 0 ? (
          <p className="text-zinc-400">No announcements available.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {announcements.map((announcement, i) => (
              <motion.div
                key={announcement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-zinc-800 border-zinc-700 text-white h-full">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-1">{announcement.title}</h2>
                    <p className="text-zinc-400 text-sm mb-2">
                      Posted by {announcement.author} on{" "}
                      {format(new Date(announcement.posted_at), "PPpp")}
                    </p>
                    <p className="text-zinc-300 text-sm whitespace-pre-wrap">
                      {announcement.content}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
const ann = [
  {
    id: "1",
    title: "🎉 Welcome to the New Server!",
    content:
      "We're excited to launch our new Discord community. Be sure to read the rules and introduce yourself in #introductions!",
    posted_at: "2025-04-01T10:00:00Z",
    author: "AdminBot",
  },
  {
    id: "2",
    title: "🚨 Scheduled Downtime",
    content:
      "The server will be undergoing maintenance on April 15 at 2 AM UTC. Expected downtime is approximately 30 minutes.",
    posted_at: "2025-04-10T15:23:00Z",
    author: "Server Team",
  },
  {
    id: "3",
    title: "📅 April Event Calendar",
    content:
      "Check out our full list of community events happening this month in the #events channel!",
    posted_at: "2025-04-05T08:45:00Z",
    author: "EventsMod",
  },
  {
    id: "4",
    title: "✨ New Roles Available",
    content:
      "You can now self-assign your favorite game roles in #role-select. More coming soon!",
    posted_at: "2025-04-08T17:05:00Z",
    author: "ModSquad",
  },
];
const announcements = ann.reverse();
