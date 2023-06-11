const endpoint = "http://localhost:3000";
async function getPPP() {
    const ppp = await fetch(endpoint + "/ppp/active");
    const ppp_res = await ppp.json();
    if (ppp_res.length >= 0) {
        var temp = "";
        ppp_res.forEach((itemData) => {
            temp += "<tr>";
            temp += "<td>" + itemData[".id"];
            temp += "<td>" + itemData["service"];
            temp += "<td>" + itemData["address"];
            temp += "<td>" + itemData["name"];
            temp += "<td>" + itemData["caller-id"];
            temp += "<td>" + itemData["uptime"];
            temp += "</td></tr>";

            // console.log(itemData);
        });
        // document.getElementById("total_ppp").innerHTML = ppp_res.length;
        document.getElementById("tb_ppp").innerHTML = temp;
    }
}
getPPP();