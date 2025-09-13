import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '@/app/firebase/config';
import { useState } from "react";
import { useRouter } from "next/navigation";

export const useLogin = () => {
    const [error, setError] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const provider = new GithubAuthProvider();
    const router = useRouter()

    const login = async () => {
        setError(null);
        setIsPending(true);

        try {
            const res = await signInWithPopup(auth, provider);
            if (!res) {
                throw new Error("Could not complete signup");
            }

            const user = res.user;
            console.log(user);
            setIsPending(false)
            if (res) {
                router.push('/dashboard')
            }
        } catch (error) {
            console.log(error);
            setError(error.message);
            setIsPending(false);
        }
    };

    return { login, error, isPending };
};