import { redirect } from "next/navigation";

export default function Home() {
  redirect("/deisi/shop");
  return (
    <h1>Redirecting...</h1>
  );
}
