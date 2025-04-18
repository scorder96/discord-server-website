import { format } from "date-fns";
import { Card, CardContent } from "~/components/ui/card";
import { Navbar } from "~/components/navbar";
import { motion } from "motion/react";
// import { Skeleton } from "~/components/ui/skeleton"

interface DiscordEvent {
  id: string;
  name: string;
  description: string;
  scheduled_start_time: string;
  scheduled_end_time: string | null;
  image: string | null;
}
const events: DiscordEvent[] = [
  {
    id: "1",
    name: "Community Game Night",
    description: "Join us for some casual games and fun with the community.",
    scheduled_start_time: "2025-04-15T19:00:00Z",
    scheduled_end_time: "2025-04-15T21:00:00Z",
    image:
      "https://www.shutterstock.com/shutterstock/videos/3557652623/thumb/1.jpg?ip=x480",
  },
  {
    id: "2",
    name: "Server Anniversary Celebration",
    description: "We're turning 2! Come hang out and celebrate with us 🎉",
    scheduled_start_time: "2025-04-20T17:00:00Z",
    scheduled_end_time: null,
    image:
      "https://media.istockphoto.com/id/1482176963/photo/dark-blue-background-with-confetti-horizontal.jpg?s=612x612&w=0&k=20&c=x_9bfxcVihdhPbQHPbgPnu-PxgJD9rM5dC-YgN62tzs=",
  },
  {
    id: "3",
    name: "AMA with Mods",
    description: "Ask Me Anything session with the server moderators.",
    scheduled_start_time: "2025-04-22T20:00:00Z",
    scheduled_end_time: "2025-04-22T21:30:00Z",
    image:
      "https://community.aws/_next/image?url=https%3A%2F%2Fassets.community.aws%2Fa%2F2lKZl5YF3yZkXR0rQagF0idcPEn%2FAdobe.webp%3FimgSize%3D945x630&w=1920&q=75",
  },
];

export default function EventsPage() {
  //   const [events, setEvents] = useState<DiscordEvent[] | null>(null);

  //   useEffect(() => {
  //     const fetchEvents = async () => {
  //       try {
  //         const res = await fetch("/api/discord-events");
  //         const data = await res.json();
  //         setEvents(data);
  //       } catch (err) {
  //         console.error("Failed to load events:", err);
  //       }
  //     };

  //     fetchEvents();
  //   }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-800 text-white px-4 sm:px-6 lg:px-8 pb-8">
        <h1 className="text-2xl sm:text-3xl font-bold pt-32 pb-16">📆 Upcoming Events</h1>
        {events === null ? (
          <div className="grid gap-4">
            {/* {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-24 rounded-xl" />
          ))} */}
          </div>
        ) : events.length === 0 ? (
          <p className="text-zinc-400">No upcoming events found.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {events.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-zinc-800 border-zinc-700 text-white">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold">{event.name}</h2>
                    <p className="text-zinc-400 text-sm mb-2">
                      {format(new Date(event.scheduled_start_time), "PPpp")}{" "}
                      {event.scheduled_end_time &&
                        `– ${format(new Date(event.scheduled_end_time), "pp")}`}
                    </p>
                    {event.description && (
                      <p className="text-zinc-300 text-sm mb-2">{event.description}</p>
                    )}
                    {event.image && (
                      <img
                        src={event.image}
                        alt="Event banner"
                        className="w-full max-h-64 object-cover mt-4 rounded-xl"
                      />
                    )}
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
