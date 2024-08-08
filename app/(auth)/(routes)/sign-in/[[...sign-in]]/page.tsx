import React from "react";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className={`w-full h-screen flex items-center justify-center`}>
            <SignIn fallbackRedirectUrl="/my-notes" />
        </div>
    )
}