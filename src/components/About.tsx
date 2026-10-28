import {useState} from "react";
import {useUserData} from "./useUserData";

export function About() {
    const {email, password, setUser} = useUserData();

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
            setUser(emailInput, passInput);
            e.preventDefault();
        }}>
            <input type="text" role='input' name="email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)}
                   placeholder="email"/>
            <input type="password" role='input'  name="password" value={passInput} onChange={(e) => setPassInput(e.target.value)}
                   placeholder="password"/>
            <button type="submit" aria-label={'submit form'}>Submit</button>
            <button type="button" aria-label={'clean'} onClick={onClean}>Clean</button>
        </form>
        <>email is : <b aria-label={'email content'}>{email}</b> and pass is :<b aria-label={'password content'}>{password}</b> </>
    </>
}