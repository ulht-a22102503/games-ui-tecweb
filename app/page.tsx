import { redirect } from "next/navigation";

export default function Home() {
  redirect("/deisi/games");
  return (
    <h1>Redirecting...</h1>
  );
}
