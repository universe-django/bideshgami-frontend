import { logout } from "@/redux/slices/authSlice";
import { ChatIcon } from "@/utils/svg-utils";
import { Menu } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import User from "../../../assets/user.png";

export default function AgentHeader({ onShowHide }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoutBtn = () => {
    dispatch(logout());
    navigate("/user-login");
  };
  return (
    <header className="py-4 bg-white border-b border-slate-200 sticky top-0 z-40">
      <div className="flex justify-between items-center px-4">
        <div className="flex items-center gap-4">
          <button onClick={onShowHide} className="p-2 rounded cursor-pointer">
            <Menu color="blue" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 rounded cursor-pointer">
            <ChatIcon />
          </button>
          <button
            onClick={handleLogoutBtn}
            className="flex items-center gap-2 font-medium text-blue-700 px-4 py-2 rounded cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
          >
            <img src={User} alt="" />
            Logout Agency
          </button>
        </div>
      </div>
    </header>
  );
}
