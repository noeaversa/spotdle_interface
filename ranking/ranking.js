function getRanking(q) {
    return new Promise((resolve, reject) => {
        fetch("https://nigga.spotdle.ar/ranking/top?q=" + q, {
            credentials: "include"
        }).then(data => {
            data.json().then(data => {
                resolve(data);
            })
        }).catch(err => {
            reject(err);
        });
    })
}

function updateRankingTable(users_array) {
    let tbody = document.getElementById("table-ranking").getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";
    users_array = users_array.reverse();
    console.log(users_array);
    let counter = 3;
    users_array.forEach(user => {
        let row = tbody.insertRow(0);
        let top = row.insertCell(0);
        let name = row.insertCell(1);
        let score = row.insertCell(2);
        top.innerHTML = counter;
        name.innerHTML = user.name;
        score.innerHTML = user.maxScore;
        counter--;
    })  
}

function orderUsersByMaxScore(users_array) {
    users_array.sort((a, b) => {
        return b.maxScore - a.maxScore;
    });
    return users_array;
}