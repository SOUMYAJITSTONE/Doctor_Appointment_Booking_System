import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4 md:px-5 py-6 md:py-10">
      <div className="w-full max-w-[90%] md:max-w-[500px] bg-white rounded-lg shadow-lg p-8 md:p-12">
        <h3 className="text-headingColor text-[24px] md:text-[28px] leading-tight font-bold text-center mb-6">
          Welcome Back! 👋
        </h3>
        <p className="text-textColor text-center mb-8 text-[16px] md:text-[18px]">
          Login to access your account and continue your journey.
        </p>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-headingColor mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-[#0066ff61] rounded-lg focus:ring-2 focus:ring-primaryColor focus:outline-none text-headingColor text-[16px]"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-headingColor mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Your Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-[#0066ff61] rounded-lg focus:ring-2 focus:ring-primaryColor focus:outline-none text-headingColor text-[16px]"
              required
            />
          </div>
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-primaryColor hover:underline text-sm"
            >
              Forgot password?
            </Link>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-primaryColor text-white text-[16px] font-medium py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300"
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-6 text-textColor text-center text-sm">
          Don&apos;t have an account?
          <Link
            to="/register"
            className="text-primaryColor font-medium hover:underline ml-1"
          >
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
