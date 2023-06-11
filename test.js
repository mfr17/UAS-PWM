const endpoint = "http://localhost:3000";

fetch(endpoint + "/interface")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        if (data.length > 0) {
            var temp = "";
            data.forEach((itemData) => {
                temp += "<tr>";
                temp += "<td>" + itemData[".id"];
                temp += "<td>" + itemData["name"];
                temp += "</td>";
            });
            document.getElementById("interface").innerHTML = temp;
        }
    });