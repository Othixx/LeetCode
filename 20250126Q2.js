/**
 * @param {number} numberOfUsers
 * @param {string[][]} events
 * @return {number[]}
 */
var countMentions = function (numberOfUsers, events) {
    let mentions = new Array(numberOfUsers).fill(0);
    let onlineStatus = new Array(numberOfUsers).fill(true);
    let onlineTime = new Array(numberOfUsers).fill(0);
    let countALL = 0;
    // 按照events[i][1]排序
    events.sort((a, b) => {
        if(parseInt(a[1]) !== parseInt(b[1])) return parseInt(a[1]) - parseInt(b[1]);
        else{
            if(a[0] === "OFFLINE" && b[0] === "OFFLINE") return -1;
            else if(a[0] === "OFFLINE" && b[0] === "MESSAGE") return -1;
            else if(a[0] === "MESSAGE" && b[0] === "OFFLINE") return 1;
            else return -1;
        }
    });
    for (let i = 0; i < events.length; i++) {
        if (events[i][0] === "MESSAGE") {
            if (events[i][2] === "ALL") {
                countALL++;
            } else if (events[i][2] === "HERE") {
                for (let j = 0; j < numberOfUsers; j++) {
                    if (onlineStatus[j]) mentions[j]++;
                    else {
                        if (parseInt(events[i][1]) >= onlineTime[j]) {
                            mentions[j]++;
                            onlineStatus[j] = true;
                        }
                    }
                }
            } else {
                let mentions_string = events[i][2].split(" ");
                for (let k = 0; k < mentions_string.length; k++) {
                    let idx = parseInt(mentions_string[k].slice(2));
                    mentions[idx]++;
                }
            }
        } else if (events[i][0] === "OFFLINE") {
            let idx = parseInt(events[i][2]);
            onlineStatus[idx] = false;
            onlineTime[idx] = parseInt(events[i][1]) + 60;
        }
    }
    for (let i = 0; i < numberOfUsers; i++) {
        mentions[i] += countALL;
    }
    return mentions;
};

let numberOfUsers = 15;
let events = [["MESSAGE", "174", "HERE"], ["OFFLINE", "426", "0"], ["MESSAGE", "98", "ALL"], ["MESSAGE", "383", "ALL"], ["MESSAGE", "178", "id13 id1 id6 id0 id8 id6 id0"], ["OFFLINE", "474", "10"], ["MESSAGE", "190", "ALL"], ["MESSAGE", "190", "HERE"], ["MESSAGE", "366", "ALL"], ["OFFLINE", "113", "4"], ["MESSAGE", "130", "HERE"], ["OFFLINE", "299", "10"], ["OFFLINE", "352", "8"], ["MESSAGE", "167", "id12 id13 id2 id10"], ["MESSAGE", "120", "ALL"], ["MESSAGE", "175", "ALL"], ["OFFLINE", "150", "2"], ["MESSAGE", "124", "ALL"], ["OFFLINE", "70", "13"]];
console.log(countMentions(numberOfUsers, events));