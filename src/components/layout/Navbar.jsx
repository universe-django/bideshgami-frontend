import { Link } from "react-router";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { useSelector } from "react-redux";

const menuItems = [
  {
    id: 1,
    name: "Home",
    link: "/",
    icon: "🏠",
  },
  {
    id: 2,
    name: "Air-Ticket",
    link: "#",
    icon: "✈️",
  },
  {
    id: 3,
    name: "Work Permit",
    link: "#",
    icon: "💼",
  },
  {
    id: 4,
    name: "Student",
    link: "#",
    icon: "🎓",
  },
  {
    id: 5,
    name: "Hajj & Umrah",
    link: "#",
    icon: "🕋",
  },
  {
    id: 6,
    name: "Visa Processing",
    link: "#",
    icon: "📋",
  },
  {
    id: 7,
    name: "Tour Package",
    link: "#",
    icon: "🗺️",
  },
  {
    id: 8,
    name: "Hotel Booking",
    link: "#",
    icon: "🏨",
  },
];

export default function Navbar() {
  const { user } = useSelector((state) => state.userAuth);
  return (
    <div className="sticky top-0 z-50 ">
      <nav className="px-2 py-4 transition-all duration-300 bg-primary ">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.link}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200    text-white hover:text-white hover:bg-white/10"
                  >
                    <span className="font-semibold">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex space-x-2">
              <Link
                to="login"
                className="rounded-md px-6 py-2 transition-all duration-200 bg-white text-primary hover:bg-white/90 font-bold tracking-tight"
              >
                {user ? "dashboard" : "Sign in"}
              </Link>
            </div>

            <div className="flex lg:hidden items-center space-x-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="p-2 bg-transparent hover:bg-transparent rounded-lg text-white ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-full bg-white ">
                  <div className="p-6 ">
                    <ul className="space-y-2 ">
                      {menuItems.map((item) => (
                        <li key={item.id}>
                          <Link
                            to={item.link}
                            className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                          >
                            <span className="text-lg">{item.icon}</span>
                            <span className="font-medium">{item.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
