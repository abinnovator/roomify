import { Box } from "lucide-react";
import React from "react";
import Button from "./ui/button";
import { useOutletContext } from "react-router";

const Navbar = () => {
  const { isSignedIn, userName, signIn, signOut } =
    useOutletContext<AuthContext>();
  const handleAuthClick = async () => {
    if (isSignedIn) {
      try {
        await signOut();
      } catch (error) {
        console.log(`Puter sign out failed ${error}`);
      }
      return;
    }
    try {
      await signIn();
    } catch (error) {
      console.log(`Puter sign in failed ${error}`);
    }
  };
  return (
    <header className="navbar">
      <nav className="inner">
        <div className="left">
          <div className="brand">
            <Box className="logo" />
            <span className="name">Roomify</span>
          </div>
          <ul className="links">
            <a href="#">Product</a>
            <a href="#">Pricing</a>
            <a href="#">Community</a>
            <a href="#">Enterprise</a>
          </ul>
        </div>
        <div className="actions">
          {isSignedIn ? (
            <>
              <span className="greeting">Hello, {userName}</span>
              <Button
                size="sm"
                onClick={handleAuthClick}
                className="btn cursor-pointer"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                size="sm"
                onClick={handleAuthClick}
                className="btn"
                variant="ghost"
              >
                Login
              </Button>
              <a href="#upload" className="cta">
                Get Started
              </a>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
