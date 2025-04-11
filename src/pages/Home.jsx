import React from "react";
import SignIn from "../components/SignInButton";
import TryoutsList from "../components/sections/TryoutsList";

const Home = () => {
  return (
    <div className="min-h-screen min-w-screen p-6 bg-base-100">
      {/* Hero Section */}
      <div className="hero bg-base-200 rounded-lg shadow-lg">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-primary">UltiTryouts</h1>
            <p className="py-6 text-secondary">
              Connecting local talent with open roster spots.
            </p>
            <SignIn text="Post a Tryout" />
            <button className="btn btn-primary ml-2 ">Discover Local Teams</button>
          </div>
        </div>
      </div>

      <section>
        <h2>Upcoming Tryouts</h2>
        <TryoutsList/>
      </section>

      {/* Call to Action */}
      <div className="mt-10 p-10 text-center card  bg-base-200">
        <p className="text-xl font-medium text-neutral mb-5">
        📢 Calling all captains 📢 <br/> Sign up and post your tryout today!
        </p>
        <SignIn text="Sign Up Now" />
      </div>
    </div>
  );
};

export default Home;