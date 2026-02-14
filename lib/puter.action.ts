import puter from "@heyputer/puter.js";

// Puter auto-initializes when imported
// Make sure you're running this in a browser environment

// Helper to check if we're in a browser
const isBrowser = typeof window !== "undefined";

export const signIn = async () => {
  if (!isBrowser) {
    console.warn("Puter signIn called on server - skipping");
    return false;
  }

  try {
    await puter.auth.signIn();
    return true;
  } catch (error) {
    console.error("Puter sign in error:", error);
    return false;
  }
};

export const signOut = async () => {
  if (!isBrowser) {
    console.warn("Puter signOut called on server - skipping");
    return false;
  }

  try {
    await puter.auth.signOut();
    return true;
  } catch (error) {
    console.error("Puter sign out error:", error);
    return false;
  }
};

export const getCurrentUser = async () => {
  if (!isBrowser) {
    return null;
  }

  try {
    // Check if user is already authenticated
    const isAuthenticated = await puter.auth.isSignedIn();
    if (!isAuthenticated) {
      return null;
    }

    const user = await puter.auth.getUser();
    return user;
  } catch (error) {
    // 401 errors are expected when not signed in
    if (error instanceof Error && error.message.includes("401")) {
      return null;
    }
    console.error("Puter get user error:", error);
    return null;
  }
};
