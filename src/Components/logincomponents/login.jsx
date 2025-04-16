import React from 'react';
import Inputbtn from './inputbtn';
import Inputfields from './inputfield';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50"> 
      <div className="flex flex-col gap-4 items-start p-8 bg-white shadow-lg rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold">Welcome back</h1>
        <p className="text-gray-600">Welcome back! Please enter your details.</p>

        <Inputfields lbname={"Email"} placeholder={"Email"} type="email" />
        <Inputfields lbname={"Password"} placeholder={"Password"} type="password" />

        <a href="#" className="text-blue-500 self-end text-sm">Forgot Password?</a>

        <Inputbtn name={"Login"} alert={"Login clicked"} />
        <Inputbtn name={"Sign up with Google"} alert={"Google signup clicked"} />
      </div>
    </div>
  );
};

export default Login;


/* justify center = Horizontally Centered 
itmes center = Vertically Centered
*/