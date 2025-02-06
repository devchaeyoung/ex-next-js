"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

const SignInSchema = z.object({
  email : z.string().email({
    message : 'invailed email'
  }).min(1,{
    message: 'required email'
  }).max(20, {message:'too long'}),
  password: z.string()
});

const SignInForm = () => { 

  const router = useRouter()
  const {register , handleSubmit, formState} = useForm({
    mode : 'onChange',
    defaultValues: {
      email:'user@example.com',
      password: 'password'
    }, 
    resolver: zodResolver(SignInSchema)
  })

  const onSubmit = async (value:FieldValues ) => {
    const res = await fetch('/api/sign-in', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        ...value
      })
    })
    const data = await res.json()
    console.log(SignInSchema.parse(value))
    if(res.status === 200) router.back()
   
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 p-5 items-center w-full m-auto"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register('email')}
          placeholder="Email"
          className="text-black"
        />
        {formState.errors.email?.message}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          {...register('password')}
          placeholder="Password"
          className="text-black"
        />
      </div>
      <button
        className="bg-gray-800 text-white px-4 py-2 rounded-md"
        type="submit"
      >
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;
