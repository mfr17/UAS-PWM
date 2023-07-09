const endpoint = "https://reverse.ostore.my.id";
async function getHs_Host() {
    const host = await fetch(endpoint + "/ip/hotspot/host");
    const host_res = await host.json();
    if (host_res.length >= 0) {
        var temp = "";
        i = 0;
        host_res.forEach((itemData) => {
            i++;
            temp += "<tr>";
            temp += "<td>" + i;
            // temp += "<td>" + itemData[".id"];
            if (itemData["authorized"] == "true") {
                temp += "<td> AH";
            } else if (itemData["static"] == "true" && itemData["bypassed"] == "true") {
                temp += "<td> PS";
            } else if (itemData["authorized"] == "false" && itemData["bypassed"] == "true") {
                temp += "<td> P";
            } else {
                temp += "<td> H";
            }
            temp += "<td>" + itemData["server"];
            temp += "<td>" + itemData["mac-address"];
            temp += "<td>" + itemData["address"];
            temp += "<td>" + itemData["to-address"];
            if (itemData["comment"]) {
                temp += "<td>" + itemData["comment"];
            } else {
                temp += "<td> No Comment";
            }
            temp += "</td></tr>";
        });
        document.getElementById("total_host").innerHTML = host_res.length;
        document.getElementById("tb_host").innerHTML = temp;
    }
}
getHs_Host();