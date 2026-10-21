import {useState} from "react";
import {useUserData} from "./useUserData.ts";

export function About() {
    const {email, password, setUser } = useUserData();

    const [passInput, setPassInput] = useState<string>(password);
    const [emailInput, setEmailInput] = useState<string>(email);

    function onClean() {
        setEmailInput("");
        setPassInput("");
    }
    return <>
        <h1>About</h1>
        <p>This is the about content </p>
        <form onSubmit={e => {
            setUser(emailInput,passInput);
            e.preventDefault();
        }}>
            <input type="text" name="email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)}
                   placeholder="email"/>
            <input type="password" name="password" value={passInput} onChange={(e) => setPassInput(e.target.value)}
                   placeholder="password"/>
            <button type="submit">Submit</button>
            <button type="button" onClick={onClean}>Clean</button>
        </form>
        <>email is : {email} and pass is : {password} </>
    </>
}