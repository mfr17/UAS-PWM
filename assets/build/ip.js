const endpoint = "http://localhost:3000";

async function getIpAddress() {
    const ip = await fetch(endpoint + "/ip/address");
    const ip_res = await ip.json();
    if (ip_res.length >= 0) {
        var temp = "";
        i = 0;
        ip_res.forEach((itemData) => {
            i++;
            temp += "<tr>";
            temp += "<td>" + i;
            temp += "<td>" + itemData["address"];
            temp += "<td>" + itemData["network"];
            temp += "<td>" + itemData["actual-interface"];
            temp += "</td></tr>";
        });
        document.getElementById("total_ip").innerHTML = ip_res.length;
        document.getElementById("tb_ip").innerHTML = temp;
    }
}
getIpAddress();