import {Comp3} from "./Comp3.tsx";

export function Comp2({username}: {username: string}){

console.log('Comp2', username)

    return <Comp3 username={username} />
}