let res = document.getElementById('res').innerHTML;

function key(k){
    res += k;
    document.getElementById('res').innerHTML = res;
}

function clear_res() {
    res = "";
    document.getElementById("res").innerHTML = res;
};

function funAction() {
    if (res.indexOf("+") != -1) {
        var numbers = res.split("+");
        var x = parseInt(numbers[0], 2);
        var y = parseInt(numbers[1], 2);
        var sum = x + y;
        var ans = sum.toString(2);
    } else if (res.indexOf("-") != -1) {
        var numbers = res.split("-");
        var x = parseInt(numbers[0], 2);
        var y = parseInt(numbers[1], 2);
        var sub = x - y;
        var ans = sub.toString(2);
    } else if (res.indexOf("*") != -1) {
        var numbers = res.split("*");
        var x = parseInt(numbers[0], 2);
        var y = parseInt(numbers[1], 2);
        var mul = x * y;
        var ans = mul.toString(2);
    } else if (res.indexOf("/") != -1) {
        var numbers = res.split("/");
        var x = parseInt(numbers[0], 2);
        var y = parseInt(numbers[1], 2);
        var div = x / y;
        var ans = div.toString(2);
    }
    res = ans;
    document.getElementById("res").innerHTML = res;
}
