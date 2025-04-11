import React, { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

const SignIn = () => {
    const [error, setError] = useState("");

    const handleGoogleSignIn = async () => {
        setError("");
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user; //save this to context
            alert(`Welcome, ${user.displayName}!`);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <button
            className="btn btn-primary w-full mt-4"
            onClick={handleGoogleSignIn}
        >
            Sign in with Google
        </button>
    );
};

export default SignIn;
