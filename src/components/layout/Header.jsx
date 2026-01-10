import { Link } from "react-router";
import Logo from "../logo/Logo";

export default function Header() {
  return (
    <div>
      <header>
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <div className="w-[100px] sm:w-[187px]">
            <Logo />
          </div>

          <div className="flex gap-3">
            <Link
              to="/agency/register"
              className="rounded-md px-6 py-2 text-white  duration-300 bg-primary  transition-colors hover:bg-primary/90 font-bold tracking-tight"
            >
              Become a Agency
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
