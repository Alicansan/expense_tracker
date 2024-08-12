import getUserBalance from "@/app/actions/getUserBalance";
import { addCommas } from "@/lib/utils";

export default async function Balance() {
  const { balance } = await getUserBalance();

  return (
    <>
      <h4 className="text-2xl font-bold">Your Balance</h4>
      <h1 className="font-mono text-xl font-semibold">
        {" "}
        ${addCommas(Number(balance?.toFixed(2)) ?? 0)}
      </h1>
    </>
  );
}
