import { SignIn } from "@clerk/clerk-react";
import "./SignIn.css";

const SignInPage = () => {
  return (
    <div className="sign-in-container">
      <SignIn />
    </div>
  );
};

export default SignInPage;