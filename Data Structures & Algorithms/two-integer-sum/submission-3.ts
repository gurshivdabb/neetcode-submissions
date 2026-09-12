class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map<number, number>();

        for(let i = 0; i < nums.length; i++) {
            const ans = target - nums[i];
            if(map.has(ans)) {
                return [map.get(ans), i];
            }
            map.set(nums[i], i);
        }
        return [];
    }
}
