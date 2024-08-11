import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { checkUser } from "../lib/checkUser";

const Header = async () => {
  const user = await checkUser();

  return (
    <nav className="bg-secondary">
      <div className="m-0 mx-auto flex h-[5vh] max-w-[90vw] items-center justify-between py-2">
        <h2>Expense Tracker</h2>
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Header;
