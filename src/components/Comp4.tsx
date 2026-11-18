import {useContext, useState} from "react";
import {UserContext} from "../UserContext.tsx";

export function Comp4({username}: { username: string }) {

    const user = useContext(UserContext);
    const [userName, setUsername] = useState(user.userName)
    return <>Hola : <b>{userName}</b> - prop drilling value :<b> {username}</b>

        <input type="text" value={userName} onChange={(x) => setUsername(x.target.value)}
               onBlur={() => user.setUserName(userName)}/></>
}