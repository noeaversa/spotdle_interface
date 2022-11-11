function getUserImages() {
    return new Promise((resolve, reject) => {
        fetch("http://localhost:3000/me/user/image", {
            credentials: "include",
        }).then(data => {
            data.json().then(data => {
                resolve(data);
            })
        }).catch(err => {
            reject(err);
        })
    })
}

function getUser() {
    return new Promise((resolve, reject) => {
        fetch("http://localhost:3000/me/user/", {
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

function saveScore(score) {
    return new Promise((resolve, reject) => {
        fetch("http://localhost:3000/me/user/score/save/", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                score: score
            })
        }).then(data => {
            data.json().then(data => {
                resolve(data);
            })
        }).catch(err => {
            reject(err);
        });
    })
}
