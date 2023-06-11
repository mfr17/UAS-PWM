const endpoint = "http://localhost:3000";
async function getHs_Active() {
    const active = await fetch(endpoint + "/ip/hotspot/active");
    const active_res = await active.json();

    // console.log(data);
}
getHs_Active();