import React, { useState } from "react";
import Layout from "../components/common/Layout";
import { droneData } from "../data";
import { useNavigate } from "react-router-dom";
import InputWrapper from "../components/common/form/InputWrapper";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState<{
    username: string;
    password: string;
  }>({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState("");

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const user = droneData?.users?.find(
        (user) =>
          user.username === loginDetails.username &&
          user.password === loginDetails.password
      );
      if (user) {
        localStorage.setItem("auth", JSON.stringify(true));
        navigate("/");
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error: any) {
      setErrors(error.message || "Something went wrong");
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
    <Layout>
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
                <InputWrapper
                  name="username"
                  value={loginDetails?.username}
                  onChange={handleOnChangeInput}
                  placeholder="Username"
                  isRequired
                  label="Username"
                  type="text"
                />

                <InputWrapper
                  name="password"
                  value={loginDetails?.password}
                  onChange={handleOnChangeInput}
                  placeholder="Password"
                  isRequired
                  label="Password"
                  type="password"
                />
                <button
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-600 py-2.5 rounded-md mt-2 font-semibold"
                >
                  Sign in
                </button>
              </form>
              <p className="">
                {errors && (
                  <span className="text-red-500 text-sm font-medium">
                    {errors}
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
