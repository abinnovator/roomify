interface AuthState {
  isSignedIn: boolean;
  userName: string | null;
  userId: String | null;
}
type AuthContext = {
  isSignedIn: boolean;
  userName: string | null;
  userId: String | null;
  refreshAuth: () => Promise<boolean>;
  signOut: () => Promise<boolean>;
  signIn: () => Promise<boolean>;
};
