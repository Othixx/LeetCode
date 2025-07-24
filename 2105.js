/**
 * @param {number[]} plants
 * @param {number} capacityA
 * @param {number} capacityB
 * @return {number}
 */
var minimumRefill = function (plants, capacityA, capacityB) {
    let n = plants.length;
    let left = 0, right = n - 1;
    let bagA = capacityA, bagB = capacityB;
    let ans = 0;
    while (left <= right) {
        if (left === right) {
            if (Math.max(bagA, bagB) < plants[left]) ans++;
            return ans;
        }
        else {
            if (bagA > plants[left]) {
                bagA -= plants[left];
            }
            else {
                ans++;
                bagA = capacityA - plants[left];
            }
            left++;

            if (bagB > plants[right]) {
                bagB -= plants[right];
            }
            else {
                ans++;
                bagB = capacityB - plants[right];
            }
            right--;
        }
    }
    return ans;
};

let plants = [1,2,4,4,5];
let capacityA = 6;
let capacityB = 5;
console.log(minimumRefill(plants, capacityA, capacityB)); // Output: