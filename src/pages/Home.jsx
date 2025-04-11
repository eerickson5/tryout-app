import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen min-w-screen p-6 bg-base-100">
      {/* Hero Section */}
      <div className="hero bg-base-200 rounded-lg shadow-lg">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">UltiTryouts</h1>
            <p className="py-6">
              Connecting local talent with open roster spots.
            </p>
            <button className="btn btn-primary mr-2">Post a Tryout</button>
            <button className="btn btn-primary">Discover Local Teams</button>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-10 text-center">
        <p className="text-lg">
          Ready to get started? Sign up and post your tryout today!
        </p>
        <button className="btn btn-primary mt-4">Sign Up Now</button>
      </div>
    </div>
  );
};

export default Home;