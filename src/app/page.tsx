"use client";

import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";
import { useRouter } from 'next/navigation';

export default function Home() {
  const { signOut } = useAuthActions();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut(); // Sign out the user
    router.push('/auth'); // Redirect to /auth
  };

  return (
    <div>
      Logged In!
      <Button onClick={handleSignOut}>Sign Out</Button>
    </div>
  );
}
