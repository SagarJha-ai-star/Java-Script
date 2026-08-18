let num = 0;

document.getElementById("inc").onclick = function () {
    num += 1;
    document.getElementById("head1").textContent = num;
}
document.getElementById("dec").onclick = function () {
    num -= 1;
    document.getElementById("head1").textContent = num;
}
document.getElementById("res").onclick = function () {
    num = 0;
    document.getElementById("head1").textContent = num;
}