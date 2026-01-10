import { cn } from "@/lib/utils";
import { logout } from "@/redux/slices/authSlice";
import {
  BookCheck,
  BookOpenCheck,
  DollarSign,
  Heart,
  Home,
  Lock,
  LogOut,
  MessageCircleMore,
  Orbit,
  Pause,
  TicketsPlane,
  User,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import UserProfile from "../../../assets/user.png";

const menu = [
  {
    id: 1,
    title: "Dashboard",
    link: "dashboard",
    icon: <Home className="w-5 h-5" />,
  },
  {
    id: 2,
    title: "My Profile",
    link: "me",
    icon: <User className="w-5 h-5" />,
  },

  {
    id: 3,
    title: "My Favourite",
    link: "favourite",
    icon: <Heart className="w-5 h-5" />,
  },
  {
    id: 4,
    title: "My Booking",
    link: "booking",
    icon: <BookCheck className="w-5 h-5" />,
  },
  {
    id: 5,
    title: "My Message",
    link: "message",
    icon: <MessageCircleMore className="w-5 h-5" />,
  },
  {
    id: 6,
    title: "My Flight Ticket",
    link: "ticket",
    icon: <TicketsPlane className="w-5 h-5" />,
  },
  {
    id: 7,
    title: "Appointment Booking",
    link: "appointment",
    icon: <BookOpenCheck className="w-5 h-5" />,
  },
  {
    id: 8,
    title: "My Co Traveler ",
    link: "co-traveler",
    icon: <Pause className="w-5 h-5" />,
  },
  {
    id: 9,
    title: "Check status",
    link: "check-status",
    icon: <Orbit className="w-5 h-5" />,
  },
  {
    id: 10,
    title: "Change password",
    link: "change-password",
    icon: <Lock className="w-5 h-5" />,
  },
  {
    id: 11,
    title: "Payment ",
    link: "payment",
    icon: <DollarSign className="w-5 h-5" />,
  },
];
export default function Sidebar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isActive = (path) => {
    return location.pathname.replace("/customer/", "") === path;
  };

  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
      navigate("/user-login");
    } catch (error) {
      console.error("Logout failed:", error);
      navigate("/user-login");
    }
  };

  return (
    <>
      <aside className="w-64 bg-white shadow-lg h-full flex flex-col justify-between rounded-md border border-gray-300">
        {/* Profile Section */}
        <div className="p-4 flex flex-col items-center border-b border-gray-200">
          <img
            src={UserProfile}
            alt="Profile"
            className="w-20 h-20 rounded-full mb-2"
          />
          <h2 className="text-lg font-semibold">Mahamudul Hasan Fahad</h2>
          <p className="text-sm text-gray-500">User ID: 01001</p>
        </div>

        {/* Menu Items */}
        <ul className="flex-1 p-4 space-y-2">
          {menu.map((item) => (
            <li
              key={item.id}
              className={cn(
                " p-2 rounded cursor-pointer ",
                isActive(item.link)
                  ? "bg-primary text-white"
                  : "hover:bg-gray-100"
              )}
            >
              <NavLink to={item.link} className={cn("flex items-center gap-3")}>
                {item.icon} <span>{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Logout Button */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 p-2 rounded bg-red-500 text-white hover:bg-red-600 transition"
          >
            <LogOut className="w-5 h-5" /> Logout
          </button>
        </div>
      </aside>
    </>
  );
}
