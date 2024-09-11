import { LoginForm } from "@/modules/auth/LoginForm";

export default function Home() {
  const loginUrl = `${process.env.BACK_URL}/auth/login`;
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 w-full">
      <LoginForm loginUrl={loginUrl} />
    </main>
  );
}
