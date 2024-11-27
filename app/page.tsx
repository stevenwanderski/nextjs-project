import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      Hey, next. Check out the <Link href="/users">users</Link>.
    </div>
  );
}
