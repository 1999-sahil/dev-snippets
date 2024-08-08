import React from "react";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className={`w-full h-screen flex items-center justify-center`}>
            <SignUp fallbackRedirectUrl="/" />
        </div>
    )
}