const endpoint = "http://localhost:3000";

function bytesToSize(bytes, seperator = "") {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes == 0) return "n/a";
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) return `${bytes}${seperator}${sizes[i]}`;
    return `${(bytes / 1024 ** i).toFixed(1)}${seperator}${sizes[i]}`;
}

async function getHs_Active() {
    const active = await fetch(endpoint + "/ip/hotspot/active");
    const active_res = await active.json();
    if (active_res.length >= 0) {
        var temp = "";
        let i = 0;
        active_res.forEach((itemData) => {
            i++;
            temp += "<tr>";
            temp += "<td>" + i;
            temp += "<td>" + itemData["user"];
            temp += "<td>" + itemData["address"];
            temp += "<td>" + itemData["mac-address"];
            temp += "<td>" + itemData["login-by"];

            temp += "<td>" + bytesToSize(itemData["bytes-in"]);
            temp += "<td>" + bytesToSize(itemData["bytes-out"]);
            temp += "<td>" + itemData["uptime"];
            if (itemData["comment"]) {
                temp += "<td>" + itemData["comment"];
            } else {
                temp += "<td> No Comment";
            }
            temp += "</td></tr>";
            setTimeout(() => getHs_Active(), 10000);
        });
        document.getElementById("total_active").innerHTML = active_res.length;
        document.getElementById("tb_active").innerHTML = temp;
    }
}

getHs_Active();