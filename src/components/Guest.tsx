import { SignIn } from "@clerk/nextjs";

const Guest = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <h1>Welcome</h1>
      <p>Please sign in to manage your transactions</p>
      <SignIn routing="hash" />
    </div>
  );
};

export default Guest;
