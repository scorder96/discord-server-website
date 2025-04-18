"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type DiscordStatsProps = {
  guildId: string;
  className?: string;
};

type LiveStats = {
  members: number;
  online: number;
  eventsHosted: number;
  roles: number;
  textChannels: number;
  voiceChannels: number;
  emojis: number;
  serverLevel: number;
  messagesSent: number;
};

const initialStats: LiveStats = {
  members: 232,
  online: 97,
  eventsHosted: 13,
  roles: 18,
  textChannels: 25,
  voiceChannels: 4,
  emojis: 40,
  serverLevel: 2,
  messagesSent: 47000,
};

export default function DiscordStats({ guildId, className }: DiscordStatsProps) {
  const [stats, setStats] = useState<LiveStats>(initialStats);

  //   useEffect(() => {
  //     async function fetchStats() {
  //       try {
  //         // Fetch data from your bot API or use Discord API directly if using a bot token
  //         const res = await fetch(`/api/discord-stats?guildId=${guildId}`);
  //         const data = await res.json();
  //         setStats(data);
  //       } catch (error) {
  //         console.error("Failed to fetch Discord stats:", error);
  //       }
  //     }

  //     fetchStats();
  //     const interval = setInterval(fetchStats, 15000); // refresh every 15 seconds
  //     return () => clearInterval(interval);
  //   }, [guildId]);

  const statItems = [
    { label: "Total Members", value: stats.members, icon: "👥" },
    { label: "Online Now", value: stats.online, icon: "🟢" },
    { label: "Events Hosted", value: stats.eventsHosted, icon: "🎉" },
    { label: "Roles", value: stats.roles, icon: "🎭" },
    { label: "Text Channels", value: stats.textChannels, icon: "💬" },
    { label: "Voice Channels", value: stats.voiceChannels, icon: "🎙️" },
    { label: "Emojis", value: stats.emojis, icon: "🙂" },
    { label: "Server Level", value: stats.serverLevel, icon: "🏆" },
    { label: "Messages Sent", value: stats.messagesSent, icon: "💬" },
  ];

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 ${className}`}>
      {statItems.map((stat, i) => (
        <motion.div
          key={stat.label}
          className="bg-zinc-800 rounded-2xl p-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="text-4xl mb-2">{stat.icon}</div>
          <div className="text-3xl font-bold">{stat.value}</div>
          <div className="text-zinc-400 text-sm">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
