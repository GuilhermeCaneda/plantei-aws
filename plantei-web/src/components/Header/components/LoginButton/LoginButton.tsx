import './LoginButton.css';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const LoginButton = () => {
  return (
    <div className='login-button'>
      <SignedOut>
        <SignInButton>
        <button className="custom-signin-button">Sign In</button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
      <UserButton appearance={{
  elements: {
    userButtonAvatarBox: {
      width: '2.6rem',
      height: '2.6rem',
    },
  },
}} />
      </SignedIn>
    </div>
  );
};

export default LoginButton;
