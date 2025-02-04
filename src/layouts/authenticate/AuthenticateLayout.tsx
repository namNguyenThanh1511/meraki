import { Link, Outlet, useMatch } from "react-router-dom";
import "./index.scss";

export default function AuthenticateLayout() {
  // Dùng useMatch để xác định authType từ path
  const isSignIn = useMatch("/auth/sign-in");
  const isSignUp = useMatch("/auth/sign-up");

  const authType = isSignIn ? "sign-in" : isSignUp ? "sign-up" : null;

  // Object cấu hình cho các nội dung
  const templateConfig = {
    "sign-in": {
      title: "Welcome back!",
      description:
        "Welcome back! We are so happy to have you here. It's great to see you again. We hope you had a safe and enjoyable time away.",
      btnText: "No account yet?",
      linkText: "Sign up!",
      linkTo: "/auth/sign-up",
    },
    "sign-up": {
      title: "Come join us!",
      description:
        "We are so excited to have you here. If you haven't already, create an account to get access to exclusive offers, rewards, and discounts.",
      btnText: "Already have an account?",
      linkText: "Sign in!",
      linkTo: "/auth/sign-in",
    },
  };

  const template = authType ? templateConfig[authType] : null;

  return (
    <div className="authenticate-layout">
      {template && (
        <div className="authenticate-layout__left">
          <div className="authenticate-layout__left__title">{template.title}</div>
          <div className="authenticate-layout__left__description">{template.description}</div>
          <div className="authenticate-layout__left__btn">
            {template.btnText} <Link to={template.linkTo}>{template.linkText}</Link>
          </div>
        </div>
      )}
      <div className={`authenticate-layout__right ${!template ? "full-width" : ""}`}>
        <Outlet />
      </div>
    </div>
  );
}
