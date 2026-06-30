import { useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  Search,
  Users,
  MessageCircle,
  Calendar,
  User,
} from "lucide-react";

const NAV_ITEMS = [
  { icon: Home, label: "Feed", path: "/feed" },
  { icon: Search, label: "Find partnere", path: "/browse" },
  { icon: Users, label: "Matches", path: "/matches" },
  { icon: MessageCircle, label: "Chat", path: "/messages" },

  { icon: User, label: "Profil", path: "/profile/me" },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="hidden lg:flex flex-col w-[300px] fixed top-[64px] left-0 bottom-0 bg-[#faf6f0] border-r border-neutral-light px-8 py-8 overflow-y-auto z-40">
      {/* Logo */}
      <div
        className="flex items-center gap-3 mb-12 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shrink-0">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="0" y="8" width="20" height="4" fill="white" />
            <rect x="6" y="0" width="4" height="20" fill="white" />
          </svg>
        </div>
        <span className="text-2xl font-bold text-primary">danskbuddy</span>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-2">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-4 rounded-2xl text-left text-[0.95rem] font-medium transition-all cursor-pointer border-none
                ${
                  isActive
                    ? "bg-primary-light text-primary font-semibold"
                    : "bg-transparent text-neutral hover:bg-surface hover:text-foreground"
                }`}
            >
              <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
