import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, Briefcase, TrendingUp, Activity, ArrowUpRight } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const data = [
  { name: "Jan", total: 120 },
  { name: "Feb", total: 210 },
  { name: "Mar", total: 180 },
  { name: "Apr", total: 320 },
  { name: "May", total: 450 },
  { name: "Jun", total: 380 },
  { name: "Jul", total: 500 },
];

const recentActivity = [
  { name: "Sarah Jenkins", role: "Frontend Developer", status: "Shortlisted", time: "2 hours ago", avatar: "SJ" },
  { name: "Michael Chen", role: "UX Designer", status: "Applied", time: "5 hours ago", avatar: "MC" },
  { name: "Elena Rodriguez", role: "Backend Engineer", status: "Interviewing", time: "1 day ago", avatar: "ER" },
  { name: "David Kim", role: "Product Manager", status: "Rejected", time: "2 days ago", avatar: "DK" },
  { name: "Alex Turner", role: "Data Scientist", status: "Applied", time: "3 days ago", avatar: "AT" },
];

const stats = [
  { title: "Total Internships", value: "124", icon: Briefcase, trend: "+12%" },
  { title: "Active Applications", value: "3,205", icon: Users, trend: "+24%" },
  { title: "Partner Companies", value: "84", icon: Activity, trend: "+4%" },
  { title: "Success Rate", value: "68%", icon: TrendingUp, trend: "+1%" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function Dashboard() {
  return (
    <motion.div 
      className="flex flex-col gap-6 w-full pb-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Overview</h1>
        <p className="text-zinc-500 dark:text-zinc-400">Here's what's happening with your platform today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div key={i} variants={itemVariants}>
            <Card className="hover:shadow-md transition-shadow duration-300 h-full border-zinc-200 dark:border-zinc-800">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {stat.title}
                </CardTitle>
                <div className="h-8 w-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                  <stat.icon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">{stat.value}</div>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center mt-1 font-medium">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  {stat.trend} from last month
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Chart Section */}
        <motion.div variants={itemVariants} className="col-span-4">
          <Card className="h-full border-zinc-200 dark:border-zinc-800">
            <CardHeader>
              <CardTitle>Application Volume</CardTitle>
              <CardDescription>Number of internship applications over the last 7 months</CardDescription>
            </CardHeader>
            <CardContent className="pl-0">
              <div className="h-[350px] w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" className="dark:stroke-zinc-800" />
                    <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                      itemStyle={{ color: '#3b82f6', fontWeight: 'bold' }}
                    />
                    <Area type="monotone" dataKey="total" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorTotal)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Activity Section */}
        <motion.div variants={itemVariants} className="col-span-3">
          <Card className="h-full border-zinc-200 dark:border-zinc-800">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest actions taken by candidates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {recentActivity.map((activity, i) => (
                  <div key={i} className="flex items-center">
                    <Avatar className="h-10 w-10 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                      <AvatarImage src={`https://api.dicebear.com/7.x/notionists/svg?seed=${activity.name}`} alt="Avatar" />
                      <AvatarFallback>{activity.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none text-zinc-900 dark:text-zinc-50">{activity.name}</p>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-1">Applied for <span className="text-zinc-700 dark:text-zinc-300 font-medium">{activity.role}</span></p>
                    </div>
                    <div className="ml-auto flex flex-col items-end gap-1.5">
                      <Badge variant="secondary" className={`
                        px-2 py-0.5 text-[10px] font-semibold border-none
                        ${activity.status === 'Shortlisted' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' : ''}
                        ${activity.status === 'Interviewing' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' : ''}
                        ${activity.status === 'Rejected' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : ''}
                        ${activity.status === 'Applied' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : ''}
                      `}>
                        {activity.status}
                      </Badge>
                      <span className="text-[10px] font-medium text-zinc-400">{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
