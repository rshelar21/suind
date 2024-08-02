import React, { useState } from "react";
import Layout from "../components/common/Layout";
import { droneData } from "../data";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState<{
    username: string;
    password: string;
  }>({
    username: "",
    password: "",
  });

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const user = droneData.users.find(
        (user) =>
          user.username === loginDetails.username &&
          user.password === loginDetails.password
      );
      if (user) {
        localStorage.setItem("auth", JSON.stringify(true));
        navigate("/");
        console.log("Login successful");
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      console.log("error found");
    }
  };

  const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <Layout showSidebar={false}>
      <div className="h-screen w-full flex ">
        <div className="w-3/5 h-full ">
          <img
            src="/assets/images/drone.jpg"
            alt="drone"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-2/5 bg-gray-900">
          <div className="flex items-center justify-center h-full text-white">
            <div className="max-w-sm w-full space-y-8 font-ibm-mono">
              <h1 className=" font-bold text-2xl font-ibm-mono">
                Sign in to your account
              </h1>

              <form
                className="flex flex-col gap-y-4"
                onSubmit={handleSubmitForm}
              >
                <div className="space-y-2">
                  <label
                    htmlFor=""
                    className="font-medium text-gray-200 text-sm"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    className="w-full border-none outline-none rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-600
                  bg-gray-800 text-white focus:border-transparent
                  "
                    name="username"
                    placeholder="Username"
                    onChange={handleOnChangeInput}
                    value={loginDetails?.username}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor=""
                    className="font-medium text-gray-200 text-sm font-ibm-mono"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full border-none outline-none rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-600
                  bg-gray-800 text-white focus:border-transparent
                  "
                    name="password"
                    placeholder="Password"
                    onChange={handleOnChangeInput}
                    value={loginDetails?.password}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-600 py-2.5 rounded-md mt-2 font-semibold"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
