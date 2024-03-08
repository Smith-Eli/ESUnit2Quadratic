let a = "";
let b = "";
let c = "";
let x1 = "";
let x2 = "";

function calculate(){
    a = parseFloat(document.getElementById("frmA").value); 
    b = parseFloat(document.getElementById("frmB").value);
    c = parseFloat(document.getElementById("frmC").value);
    x1 = (b*-1-Math.sqrt(b*b-4*a*c))/(2*a);
    //x2 = ((b*-1)-Math.sqrt((b*b)-(4*a*c)))/(2*a);
    alert(x1);
    //alert(x2);
}