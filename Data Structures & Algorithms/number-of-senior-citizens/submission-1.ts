class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details: string[]): number {
        let count: number = 0;

        for (const detail of details) {
            if(+detail.slice(11, 13) > 60) {
                count++;
            }
        }
        return count;
    }
}
