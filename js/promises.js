



function getGithubUsernames(userName) {
    return fetch(`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': GIT_HUB_TOKEN}})
        .then(response => response.json()).then(data => {
            console.log(data);
        })
}
getGithubUsernames('matthew-r-walker');