// takes in an user name as string and console logs the last push date from that user.
function getLastGitPush(userName) {
    return fetch(`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': GIT_HUB_TOKEN}})
        .then(response => response.json()).then(data => {
            let lastPushDate;
            for(let event of data) {
                if(event.type === "PushEvent") {
                    lastPushDate = new Date(event.created_at);
                    break;
                }
            }
            console.log(`${userName}'s last push was ${lastPushDate}`);
        }).catch(() => console.log('Fetch request failed, check if user name is correct.'));
}
// getLastGitPush('matthew-r-walker');


// Accepts a number of seconds for timeout before returning promise
function wait(num) {
    console.log('This will connect in ' + num + ' seconds.');
    return new Promise((fulfill, reject) => {
        setTimeout(() => {
        if (Math.random() > 0.5) {
            fulfill('here is your data');
        } else {
            reject('network connection error');
        }
        }, num * 1000);
    });
}

// wait(2)
//     .then((message) => console.log('Success', message))
//     .catch((message) => console.log('Failure to connect,', message));