const endpoint = "http://localhost:3000";

function bytesToSize(bytes, seperator = "") {
    const sizes = [" Bytes", " KB", " MB", " GB", " TB"];
    if (bytes == 0) return "n/a";
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) return `${bytes}${seperator}${sizes[i]}`;
    return `${(bytes / 1024 ** i).toFixed(1)}${seperator}${sizes[i]}`;
}

async function Voucher() {
    const vc = await fetch(endpoint + "/ip/hotspot/user");
    const vc_res = await vc.json();


    if (vc_res.length >= 0) {
        function compare(a, b) {
            if (a.profile < b.profile) {
                return -1;
            }
            return 0;
        }

        vc_res.sort(compare);
        i = 0;
        var temp = "";
        vc_res.forEach((itemData) => {
            if (itemData["name"] == "default-trial") {
                itemData["name"] = "Trial";
                itemData["profile"] = "Trial";
            } else { }

            i++;
            temp += "<tr>";
            temp += "<td>" + i;
            temp += "<td>" + itemData["name"];
            temp += "<td>" + itemData["profile"];

            if (itemData["mac-address"]) {
                temp += "<td>" + itemData["mac-address"];
            } else {
                temp += "<td>";
            }
            if (itemData["bytes-in"] != 0) {
                temp += "<td class=text-end>" + bytesToSize(itemData["bytes-in"]);
            } else {
                temp += "<td class=text-end> 0 Byte";
            }
            if (itemData["bytes-in"] != 0) {
                temp += "<td class=text-end>" + bytesToSize(itemData["bytes-out"]);
            } else {
                temp += "<td class=text-end> 0 Byte";
            }
            if (itemData["uptime"] != "0s") {
                temp += "<td class=text-end>" + itemData["uptime"];
            } else {
                temp += "<td class=text-end> 00:00:00";
            }
            if (itemData["limit-uptime"]) {
                temp += "<td class=text-end>" + itemData["limit-uptime"];
            } else {
                temp += "<td class=text-end> -";
            }
            if (itemData["comment"]) {
                temp += "<td>" + itemData["comment"];
            } else {
                temp += "<td> No Comment";
            }
            temp += "</td></tr>";
        });
        document.getElementById("total_vc").innerHTML = vc_res.length;
        document.getElementById("tb_vc").innerHTML = temp;
    }
}

Voucher();

