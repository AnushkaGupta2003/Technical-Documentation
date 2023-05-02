function changestyle(el){
    console.log("here");
el.style.color="green";
do_underline(el);
}
function original(el){
    console.log("here");
el.style.color="black";
el.style.textDecoration="none";
}
function do_underline(el){
    el.style.textDecoration="underline";
}