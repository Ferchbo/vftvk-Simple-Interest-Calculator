function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var years = new Date().getFullYear() + parseInt(years);
    p = document.getElementById("principal").value;
    if (principal < 1) {
        alert("please enter a positive number")
        location.reload();
        principal.focus();
        return false;
    }
    if (principal > 0) {
        document.getElementById("result").innerHTML = "\<br\>If you deposit <mark>" +
            principal + "</mark>,\<br\>at an interest rate of <mark>" +
            rate + "% </mark>\<br\>You will receive an amount of <mark>" +
            interest + "</mark>,\<br\>in the year <mark>" +
            years + " </mark>\<br\>"
    }
}

function updaterate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}