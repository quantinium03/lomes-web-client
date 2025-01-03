import React from 'react';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import { SignIn } from '@clerk/clerk-react';
import { dark } from '@clerk/themes'

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <SignIn
            appearance={{
              baseTheme: dark
            }}
          />
        </div>
      </SignedOut>
    </>
  );
};
