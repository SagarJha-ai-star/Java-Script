function password(length,lc,uc,num,sym){
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "0123456789";
    const symbol = "!@#$%^&*()_-+=";
    let allchar = "";
    let password = "";
    allchar += lc ? lower : "";
    allchar += uc ? upper : "";
    allchar += num ? number : "";
    allchar += sym ? symbol : "";

    if(length <= 0){
        return `(Minimum Length should be one)`
    }
    if(allchar.length === 0){
        return `(Atleastone character set should be selected.)`
    }
    for(let i = 0; i < length; i++){
        let index = Math.floor(Math.random() * allchar.length);
        password += allchar[index];
    }
    return password;
}

const length = 12;
const lc = true;
const uc = true;
const num = true;
const sym = true;

let passw = password(length,lc,uc,num,sym);
console.log(passw);