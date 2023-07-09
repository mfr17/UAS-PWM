const endpoint = "https://reverse.ostore.my.id";
async function getPPP() {
    const ppp = await fetch(endpoint + "/ppp/active");
    const ppp_res = await ppp.json();
    if (ppp_res.length >= 0) {
        var temp = "";
        i = 0;
        ppp_res.forEach((itemData) => {
            i++;
            temp += "<tr>";
            temp += "<td>" + i;
            temp += "<td>" + itemData["service"];
            temp += "<td>" + itemData["address"];
            temp += "<td>" + itemData["name"];
            temp += "<td>" + itemData["caller-id"];
            temp += "<td>" + itemData["uptime"];
            temp += "</td></tr>";
        });
        document.getElementById("total_ppp").innerHTML = ppp_res.length;
        document.getElementById("tb_ppp").innerHTML = temp;
    }
}
getPPP();