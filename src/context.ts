(globalThis as any).__username = '';

export function setUsername(_username: string){
    (globalThis as any).__username = _username;
    console.log(_username);
}

export function getUsername(){
    return (globalThis as any).__username;
}