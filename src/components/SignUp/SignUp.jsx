import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="py-14">
      <div className="max-w-7xl mx-auto text-center lg:h-screen flex items-center px-5 md:px-5 lg:px-0 ">
        <form className="card-body py-10 bg-white rounded-2xl   lg:max-w-xl mx-auto">
          <h1 className="text-2xl text-black font-bold">Sign Up now</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Fast Name</span>
            </label>
            <input
              type="text"
              placeholder="Fast name"
              className="input input-bordered rounded-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input
              type="text"
              placeholder="Last name"
              className="input input-bordered rounded-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered rounded-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered rounded-full"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary rounded-full bg-[#9538E2] text-white hover:bg-gray-200 hover:text-black">
              Sign Up
            </button>
          </div>
          <div className="border-b-2 py-2"></div>
          <p>
            Don not have an account?{" "}
            <Link to={"/login"} className="text-blue-700">
              Login
            </Link><br/>
            <Link to={'/'} className=" rounded-full bg-[#9538E2] text-white px-3 py-1 ">Go Home</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
