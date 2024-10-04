import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import { useState } from "react";

const Login = () => {
  const { login, loading } = useLogin();
  const [inputdata, setinputdata] = useState({
    username: "",
    password: "",
  });
  const submitHandler = async () => {
    await login(inputdata);
  };
  return (<>
       <div className="text-blue-500 text-[30px] font-bold text-center mb-5"> ChatFusion</div>
    <div className="flex flex-col items-center justify-center min-w-96 w-[35%]  mx-auto bg-slate-600 rounded-md">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          
        </h1>

        <div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              value={inputdata.username}
              onChange={(e) => {
                setinputdata({ ...inputdata, username: e.target.value });
              }}
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              value={inputdata.password}
              onChange={(e) => {
                setinputdata({ ...inputdata, password: e.target.value });
              }}
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <Link
            to="/signup"
            className="text-sm  hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>

          <div>
            <button
              className="btn btn-block btn-sm mt-2"
              onClick={submitHandler}
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
    </> );
};
export default Login;
