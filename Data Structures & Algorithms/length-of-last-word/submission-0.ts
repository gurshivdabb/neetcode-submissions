class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s: string): number {
        const sArr = s.trim().split(" ");

        return sArr[sArr.length-1].length;
    }
}
