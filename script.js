function calcSum() {

    let fruit = document.getElementById("fruit").value;
    let kg = parseInt(document.getElementById("kg").value);

    switch (fruit) {
        case "smith":
            document.getElementById("sum-to-pay").value = (9.9 * kg);
            break;
        case "pink":
            document.getElementById("sum-to-pay").value = (19.9 * kg);
            break;
        case "hermon":
            document.getElementById("sum-to-pay").value = (14.9 * kg);
            break;
        case "banana":
            document.getElementById("sum-to-pay").value = (6.5 * kg);
            break;
        case "watermelon":
            document.getElementById("sum-to-pay").value = (4.9 * kg);
            break;
        case "mango":
            document.getElementById("sum-to-pay").value = (24.9 * kg);
            break;
    }


}