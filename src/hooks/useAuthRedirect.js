import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function useAuthRedirect() {
  const { user } = useSelector((state) => state.userAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === undefined) return;

    if (!user) {
      navigate("/login", { replace: true });
      return;
    }

    switch (user.role) {
      case "admin":
        navigate("/admin", { replace: true });
        break;
      case "customer":
        navigate("/customer", { replace: true });

        break;
      case "agency":
        navigate("/agency", { replace: true });

        break;
      case "merchant":
        navigate("/agent/dashboard", { replace: true });
        break;
      default:
        navigate("/login", { replace: true });
        break;
    }
  }, [user, navigate]);
}
