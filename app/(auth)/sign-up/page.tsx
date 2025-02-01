"use client";

import React from "react";
import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/validations";

const SignUp = () => {
    return (
        <AuthForm
            type='SIGN_UP'
            schema={signUpSchema}
            defaultValues={{
                email: "",
                password: "",
                fullName: "",
                universityId: "",
                universityCard: "",
            }}
            onSubmit={() => {}}
        />
    );
};

export default SignUp;
