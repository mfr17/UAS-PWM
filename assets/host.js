const endpoint = "http://localhost:3000";
async function getHs_Host() {
    const host = await fetch(endpoint + "/ip/hotspot/host");
    const host_res = await host.json();
    if (host_res.length >= 0) {
        var temp = "";
        host_res.forEach((itemData) => {
            temp += "<tr>";
            temp += "<td>" + itemData[".id"];
            temp += "<td>" + itemData["server"];
            temp += "<td>" + itemData["mac-address"];
            temp += "<td>" + itemData["address"];
            temp += "<td>" + itemData["to-address"];
            temp += "<td>" + itemData["comment"];
            temp += "</td></tr>";
        });
        document.getElementById("total_host").innerHTML = host_res.length;
        document.getElementById("tb_host").innerHTML = temp;
    }
}
getHs_Host();