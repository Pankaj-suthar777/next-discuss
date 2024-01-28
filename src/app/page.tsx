import { Button } from "@nextui-org/react";
import { auth } from "@/auth";
import * as actions from "@/actions";
export default async function Home() {
  const session = await auth();
  return (
    <div>
      <form action={actions.signIn}>
        <Button type="submit">Sign in</Button>
      </form>
      <form action={actions.signOut}>
        <Button type="submit">Sign Out</Button>
      </form>

      {session?.user ? (
        <div>{JSON.stringify(session.user)}</div>
      ) : (
        <div>Sign out</div>
      )}
    </div>
  );
}
