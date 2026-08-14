let username;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myHead").textContent = `Welcome ${username}`;
    console.log(`Username : ${username}`);
}