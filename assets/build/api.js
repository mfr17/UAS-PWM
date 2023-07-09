const endpoint = "https://reverse.ostore.my.id";

function bytesToSize(bytes, seperator = "") {
    const sizes = [" Bytes", " KB", " MB", " GB", " TB"];
    if (bytes == 0) return "n/a";
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) return `${bytes}${seperator}${sizes[i]}`;
    return `${(bytes / 1024 ** i).toFixed(1)}${seperator}${sizes[i]}`;
}

async function getResource() {
    const resource = await fetch(endpoint + "/system/resource");
    const resc_res = await resource.json();
    document.getElementById("boardname").innerHTML = resc_res["board-name"];
    document.getElementById("cpu").innerHTML = resc_res["cpu"];
    document.getElementById("cpu-count").innerHTML = resc_res["cpu-count"];

    document.getElementById("free-ram").innerHTML = bytesToSize(resc_res["free-memory"]) + " / " + bytesToSize(resc_res["total-memory"]);
    document.getElementById("free-hdd").innerHTML = bytesToSize(resc_res["free-hdd-space"]) + " / " + bytesToSize(resc_res["total-hdd-space"]);
    document.getElementById("version").innerHTML = resc_res["version"];
}

async function getResource_reload() {
    const resource_reload = await fetch(endpoint + "/system/resource");
    const resc_realtime = await resource_reload.json();
    document.getElementById("cpu-freq").innerHTML = resc_realtime["cpu-frequency"] + " Mhz";
    document.getElementById("cpu-load").innerHTML = resc_realtime["cpu-load"] + "%";
    document.getElementById("uptime").innerHTML = resc_realtime["uptime"];
    setTimeout(() => getResource_reload(), 1000);
}

async function getPPP() {
    const ppp = await fetch(endpoint + "/ppp/active");
    const ppp_res = await ppp.json();
    document.getElementById("total_ppp").innerHTML = ppp_res.length;
}

async function getHs_Host() {
    const host = await fetch(endpoint + "/ip/hotspot/host");
    const host_res = await host.json();
    document.getElementById("total_host").innerHTML = host_res.length;

}
async function getHs_Active() {
    const active = await fetch(endpoint + "/ip/hotspot/active");
    const active_res = await active.json();
    document.getElementById("total_active").innerHTML = active_res.length;
}


async function getIdentity() {
    const identity = await fetch(endpoint + "/system/identity");
    const id_res = await identity.json();
    document.getElementById("identity").innerHTML = id_res["name"];
}

async function getTotal_Vc() {
    const total_vc = await fetch(endpoint + "/ip/hotspot/user");
    const total_vc_res = await total_vc.json();
    document.getElementById("total_vc").innerHTML = total_vc_res.length;
}

getPPP();
getResource();
getResource_reload();
getHs_Host();
getHs_Active();
getIdentity();
getTotal_Vc();