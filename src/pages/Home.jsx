import React from "react";
import SignIn from "../components/SignInButton";
import TryoutsList from "../components/sections/TryoutsList";
import CTAPanel from "../components/CTAPanel";

const Home = () => {
  return (
    <div className="min-h-screen min-w-screen p-12 bg-base-100 flex flex-col align-center items-stretch">
      {/* Hero Section */}
      <div className="hero bg-base-200 rounded-lg shadow-lg">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-neutral">UltiTryouts</h1>
            <p className="py-6 text-primary">
              Connecting local talent with open roster spots.
            </p>
            <SignIn text="Post a Tryout" />
            <button className="btn btn-primary ml-2 ">Discover Local Teams</button>
          </div>
        </div>
      </div>

      <section >
        <h2 class="text-neutral font-semibold text-3xl text-center mt-16 mb-4">Upcoming Tryouts</h2>
        <div class="flex flex-row gap-4">
            <TryoutsList class="flex-1"/>

            <div class="flex-1 max-h-96">
                {/* <TryoutsMap/> */}
                <img 
                className="w-full h-96 object-cover" 
                src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg" 
                alt="Map"
                />           
 
            </div>
        </div>
        
      </section>

      <CTAPanel />
    </div>
  );
};

export default Home;