import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left div */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Sureshs
            </span>
            Blog
          </Link>
          <p className="text-sm mt-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            rem, unde nisi enim aliquam nulla vero vel sequi, i
          </p>
        </div>
        {/* righ div */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Username" />
              <TextInput placeholder="Username" type="text" id="username" />
            </div>
            <div>
              <Label value="Password" />
              <TextInput placeholder="password" type="password" id="password" />
            </div>
            <div>
              <Label value="Email Address" />
              <TextInput placeholder="email" type="email" id="email" />
            </div>
            <Button type="submit" gradientDuoTone="purpleToPink">
              Sign Up
            </Button>
            <div className="flex gp2 text-sm mt-5">
              <span>Have an account?</span>
              <Link to="/signin" className="text-blue-500">Sign In</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
