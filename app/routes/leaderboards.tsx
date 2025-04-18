import { motion } from "motion/react";
import { Navbar } from "~/components/navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

export default function Leaderboards() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-800 text-white px-4 sm:px-6 lg:px-8 pb-8">
        <h1 className="text-2xl sm:text-3xl font-bold pt-32 pb-16">🏆 Leaderboards</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-zinc-800 border-zinc-700 text-white">
            <CardHeader>
              <CardTitle>Most Active</CardTitle>
            </CardHeader>
            <CardContent>
              <Table className="overflow-hidden">
                <TableHeader>
                  <TableRow className="hover:bg-zinc-800">
                    <TableHead>Rank</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Score</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {active.map((entry, i) => (
                    <TableRow key={entry.id} className="hover:bg-zinc-800">
                      <TableCell>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          #{entry.rank}
                        </motion.div>
                      </TableCell>
                      <TableCell>
                        <motion.div
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          {entry.avatar && (
                            <img
                              src={entry.avatar}
                              alt={entry.username}
                              className="w-8 h-8 rounded-full"
                            />
                          )}
                          <span>{entry.username}</span>
                        </motion.div>
                      </TableCell>
                      <TableCell className="font-medium">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          {entry.score}
                        </motion.div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card className="bg-zinc-800 border-zinc-700 text-white">
            <CardHeader>
              <CardTitle>Boosters</CardTitle>
            </CardHeader>
            <CardContent>
              <Table className="overflow-hidden">
                <TableHeader>
                  <TableRow className="hover:bg-zinc-800">
                    <TableHead>Rank</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Boosts</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {boosters.map((entry, i) => (
                    <TableRow key={entry.id} className="hover:bg-zinc-800">
                      <TableCell>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          #{entry.rank}
                        </motion.div>
                      </TableCell>
                      <TableCell>
                        <motion.div
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          {entry.avatar && (
                            <img
                              src={entry.avatar}
                              alt={entry.username}
                              className="w-8 h-8 rounded-full"
                            />
                          )}
                          <span>{entry.username}</span>
                        </motion.div>
                      </TableCell>
                      <TableCell className="font-medium">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          {entry.score}
                        </motion.div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
const active = [
  {
    id: "1",
    username: "Chrisyyy",
    avatar: "https://api.dicebear.com/6.x/lorelei/svg?seed=Christian",
    score: 1420,
    rank: 1,
  },
  {
    id: "2",
    username: "BrianBator",
    avatar: "https://api.dicebear.com/6.x/lorelei/svg?seed=Brian",
    score: 1295,
    rank: 2,
  },
  {
    id: "3",
    username: "Masoneer",
    avatar: "https://api.dicebear.com/6.x/lorelei/svg?seed=Mason",
    score: 1170,
    rank: 3,
  },
  {
    id: "4",
    username: "Saraxoxo",
    avatar: "https://api.dicebear.com/6.x/lorelei/svg?seed=Sara",
    score: 1104,
    rank: 4,
  },
  {
    id: "5",
    username: "Vivian",
    avatar: "https://api.dicebear.com/6.x/lorelei/svg?seed=Vivian",
    score: 1062,
    rank: 5,
  },
];
const boosters = [
  {
    id: "1",
    username: "Chrisyyy",
    avatar: "https://api.dicebear.com/6.x/lorelei/svg?seed=Christian",
    score: 6,
    rank: 1,
  },
  {
    id: "2",
    username: "GeorgeTheScientist",
    avatar: "https://api.dicebear.com/6.x/lorelei/svg?seed=George",
    score: 4,
    rank: 2,
  },
  {
    id: "3",
    username: "LuisPuis",
    avatar: "https://api.dicebear.com/6.x/lorelei/svg?seed=Luis",
    score: 1,
    rank: 3,
  },
];
