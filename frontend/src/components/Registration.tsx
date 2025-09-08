import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";

const Registration = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-healthcare-blue to-healthcare-teal">
      {/* Centered Card */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <h1 className="text-2xl font-bold text-healthcare-blue text-center mb-2">
            Create Your Account
          </h1>
          <p className="text-sm text-gray-600 text-center mb-6">
            Join CGDRC to access counselling, packages, and personalized child growth guidance.
          </p>

          {/* Registration Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-healthcare-blue"
            />
            <input
              type="date"
              placeholder="Birth Date"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-healthcare-blue"
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-healthcare-blue"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-healthcare-blue"
            />

            <Button
              className="w-full bg-healthcare-blue text-white hover:bg-healthcare-teal rounded-lg py-3 text-lg"
              type="submit"
            >
              <UserPlus className="w-5 h-5 mr-2" /> Create Account
            </Button>
          </form>

          {/* Already have account */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-healthcare-blue font-medium hover:underline"
            >
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
