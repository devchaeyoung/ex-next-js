import SignInForm from "@/components/_/SignInForm";
import React from "react";

const SignInPage = () => {
  return (
    <section className="flex flex-col gap-4 p-5 items-center max-w-screen-lg m-auto">
      <h1>Sign In</h1>
      <SignInForm />
    </section>
  );
};

export default SignInPage;
