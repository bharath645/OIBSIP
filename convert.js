function convert() {
    let temp = document.getElementById("tempInput").value;
    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");

    // Validation
    if (temp === "") {
        result.innerText = "Please enter a number!";
        return;
    }

    temp = Number(temp);
    let output = "";

    if (unit === "celsius") {
        let f = (temp * 9/5) + 32;
        let k = temp + 273.15;
        output = f.toFixed(2) + " °F | " + k.toFixed(2) + " K";
    }
    else if (unit === "fahrenheit") {
        let c = (temp - 32) * 5/9;
        let k = c + 273.15;
        output = c.toFixed(2) + " °C | " + k.toFixed(2) + " K";
    }
    else {
        let c = temp - 273.15;
        let f = (c * 9/5) + 32;
        output = c.toFixed(2) + " °C | " + f.toFixed(2) + " °F";
    }

    result.innerText = "Converted Temperature: " + output;
}
