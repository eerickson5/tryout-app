import React from "react";
import SignInButton from "./SignInButton";

const CTAPanel = () => {
    return (
        <div className="mt-10 p-10 text-center card  bg-base-200">
        <p className="text-2xl font-bold text-neutral mb-5 uppercase">
            📢 Calling all captains 📢 
        </p> 
        <p className="text-xl font-medium text-neutral mb-5">
            Stop relying on Instagram posts to reach potential players. <br/>
            Sign up and post your tryout in less than 5 minutes &#8595;
        </p>
        <SignInButton text="Post Tryout Now" />
      </div>
    )
}

export default CTAPanel;
