const endpoint = "http://localhost:3000";

function bytesToSize(bytes, seperator = "") {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes == 0) return "n/a";
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) return `${bytes}${seperator}${sizes[i]}`;
    return `${(bytes / 1024 ** i).toFixed(1)}${seperator}${sizes[i]}`;
}

// async function getInterface() {
//     const interface = await fetch(endpoint + "/interface");
//     const iface = await interface.json();
//     var iface_total = Object.keys(iface).length;
//     console.log("Total Interface :", iface_total);
//     console.log(iface);
//     // document.getElementById("total_iface").innerHTML = iface_total;
//     //     if (iface_total > 0) {
//     //         var temp = "";
//     //         iface.forEach((itemData) => {
//     //             temp += "<tr>";
//     //             temp += "<td>" + itemData[".id"];
//     //             temp += "<td>" + itemData["name"];
//     //             temp += "</td>";
//     //             console.log("Interface Id :", itemData[".id"]);
//     //             console.log("Interface Name :", itemData["name"]);
//     //         });
//     //         document.getElementById("interface").innerHTML = temp;
//     //     }
// }

async function getResource() {
    const resource = await fetch(endpoint + "/system/resource");
    const resc_res = await resource.json();
    document.getElementById("boardname").innerHTML = resc_res["board-name"];
    document.getElementById("cpu").innerHTML = resc_res["cpu"];
    document.getElementById("cpu-count").innerHTML = resc_res["cpu-count"];
    document.getElementById("cpu-freq").innerHTML = resc_res["cpu-frequency"];
    document.getElementById("free-ram").innerHTML = bytesToSize(resc_res["free-memory"]) + " / " + bytesToSize(resc_res["total-memory"]);
    document.getElementById("free-hdd").innerHTML = bytesToSize(resc_res["free-hdd-space"]) + " / " + bytesToSize(resc_res["total-hdd-space"]);
    document.getElementById("version").innerHTML = resc_res["version"];
}

async function getResource_reload() {
    const resource_reload = await fetch(endpoint + "/system/resource");
    const resc_realtime = await resource_reload.json();
    document.getElementById("cpu-load").innerHTML = resc_realtime["cpu-load"] + "%";
    document.getElementById("uptime").innerHTML = resc_realtime["uptime"];
    setTimeout(() => getResource_reload(), 1000);
}

async function getPPP() {
    const ppp = await fetch(endpoint + "/ppp/active");
    const ppp_res = await ppp.json();

    // Change To ppp.js
    // if (ppp_res.length >= 0) {
    //     var temp = "";
    //     ppp_res.forEach((itemData) => {
    //         temp += "<tr>";
    //         temp += "<td>" + itemData[".id"];
    //         temp += "<td>" + itemData["service"];
    //         temp += "<td>" + itemData["address"];
    //         temp += "<td>" + itemData["name"];
    //         temp += "<td>" + itemData["caller-id"];
    //         temp += "<td>" + itemData["uptime"];
    //         temp += "</td></tr>";

    //         // console.log(itemData);
    //     });
    document.getElementById("total_ppp").innerHTML = ppp_res.length;
    // document.getElementById("tb_ppp").innerHTML = temp;
    // }
}

async function getHs_Host() {
    const host = await fetch(endpoint + "/ip/hotspot/host");
    const host_res = await host.json();

    // Change To host.js
    // if (host_res.length >= 0) {
    //     var temp = "";
    //     host_res.forEach((itemData) => {
    //         temp += "<tr>";
    //         temp += "<td>" + itemData[".id"];
    //         temp += "<td>" + itemData["server"];
    //         temp += "<td>" + itemData["mac-address"];
    //         temp += "<td>" + itemData["address"];
    //         temp += "<td>" + itemData["to-address"];
    //         temp += "<td>" + itemData["comment"];
    //         temp += "</td></tr>";
    //     });
    document.getElementById("total_host").innerHTML = host_res.length;
    // document.getElementById("tb_host").innerHTML = temp;
    // }
}
async function getHs_Active() {
    const active = await fetch(endpoint + "/ip/hotspot/active");
    const active_res = await active.json();
    // console.log(active_res);

    document.getElementById("total_active").innerHTML = active_res.length;
    // console.log(data);
}
getHs_Active();

async function getIdentity() {
    const identity = await fetch(endpoint + "/system/identity");
    const id_res = await identity.json();
    document.getElementById("identity").innerHTML = id_res["name"];
}

getPPP();
getResource();
getResource_reload();
getHs_Host();
getHs_Active();
getIdentity();