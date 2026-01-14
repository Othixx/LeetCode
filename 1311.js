/**
 * @param {string[][]} watchedVideos
 * @param {number[][]} friends
 * @param {number} id
 * @param {number} level
 * @return {string[]}
 */
var watchedVideosByFriends = function (watchedVideos, friends, id, level) {
    const n = friends.length
    const levelArr = new Array(n).fill(-1)
    const q = [id]
    const map = new Map()
    levelArr[id] = 0
    while (q.length > 0 && levelArr[q[0]] <= level) {
        const node = q[0]
        if (levelArr[node] === level) {
            for (const watchedVideo of watchedVideos[node]) {
                if (map.has(watchedVideo)) map.set(watchedVideo, map.get(watchedVideo) + 1)
                else map.set(watchedVideo, 1)
            }
        }

        for (const friend of friends[node]) {
            if (levelArr[friend] === -1) {
                levelArr[friend] = levelArr[node] + 1
                q.push(friend)
            }
        }
        q.shift()
    }
    
    const arr = []
    for (const [video, times] of map) {
        arr.push([video, times])
    }
    arr.sort((a, b) => {
        if (a[1] !== b[1]) return a[1] - b[1]   // 观看次数升序排序
        return a[0] > b[0] ? 1 : -1
    })
    const ans = []
    for (const item of arr) {
        ans.push(item[0])
    }
    return ans

};

const watchedVideos = [["xk","qvgjjsp","sbphxzm"],["rwyvxl","ov"]]
const friends = [[1],[0]]
const id = 0
const level = 1
console.log(watchedVideosByFriends(watchedVideos, friends, id, level))