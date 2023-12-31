import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";
import { TodoList } from "../components/TodoList";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <main className="w-full">
        <h1>Create T3 App</h1>
        <p className="text-2xl ">
          {hello.data ? hello.data.greeting : "Loading tRPC query..."}
        </p>
        <AuthShowcase />
        <div className="w-full border-b-2 border-slate-500"></div>
        <br></br>
        <TodoList />
      </main>
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl ">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-2xl border border-slate-900 p-4 "
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
