const endpoint = "http://localhost:3000";
async function getIpAddress() {
    const ip = await fetch(endpoint + "/ip/address");
    const ip_res = await ip.json();
    if (ip_res.length >= 0) {
        var temp = "";
        ip_res.forEach((itemData) => {
            temp += "<tr>";
            temp += "<td>" + itemData[".id"];
            temp += "<td>" + itemData["address"];
            temp += "<td>" + itemData["network"];
            temp += "<td>" + itemData["actual-interface"];
            temp += "</td></tr>";

            // console.log(itemData);
        });
        // document.getElementById("total_ip").innerHTML = ip_res.length;
        document.getElementById("tb_ip").innerHTML = temp;
    }
}
getIpAddress();