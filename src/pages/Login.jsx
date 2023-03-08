import React, { useState, useNavigate } from "react";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import backGround from "../static/images/background.svg";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate;
  const [form, setForm] = useState({
    email: { value: "", isTouched: false, isValid: false },
    password: { value: "", isTouched: false, isValid: false },
  });

  const handleChange = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    setForm((state) => {
      return {
        ...state,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <section
      className=""
      style={{
        backgroundImage: `url(${backGround})`,
        backgroundRepeat: "true",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        alignContent: "center",
      }}
    >
      {/* <img src="../static/images/background.svg" alt="Logo" /> */}

      <Card className="max-w-[920px] grid grid-cols-2 m-auto bg-white">
        <figure className="flex justify-center items-center">
          <div className="text-center">
            <h2>Welcome Back</h2>
            <div>Don't have an account?</div>
            <Button>Sign Up</Button>
          </div>
        </figure>

        <div className="p-10">
          <form className="px-10">
            <label className="text-sm" htmlFor="email">
              Email
            </label>
            <Input
              name="email"
              type="text"
              onChange={handleChange}
              value={form.email.value}
              className="border-b-2 outline-none py-2 w-full mb-4 block"
              placeholder="eg. example@email.com"
            />

            <label className="text-sm" htmlFor="password">
              Password
            </label>
            <Input
              password="password"
              type="password"
              onChange={handleChange}
              value={form.email.value}
              className="border-b-2 outline-none py-2 w-full mb-4 block"
              placeholder="eg. 1234567890Ab!"
            />
            <Link>Forgot your passworld?</Link>
            <Button
              className="m-auto w-full my-8"
              onClick={handleSubmit}
              bgColor="blue"
              hoverColor="Yellow"
            >
              Sign In
            </Button>
          </form>
        </div>
      </Card>
    </section>
  );
};

export default Login;
