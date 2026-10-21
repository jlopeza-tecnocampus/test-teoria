import {useState} from "react";

export function useUserData() {

    const [password, setPassword] = useState<string>('password');
    const [email, setEmail] = useState<string>('hola@hola.com');

    return {
        email,
        password,
        setUser: (_email: string, _password: string) => {
            setEmail(_email);
            setPassword(_password);
        }
    }
}