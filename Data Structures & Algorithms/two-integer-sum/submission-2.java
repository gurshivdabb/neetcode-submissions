class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();

        for(int i = 0; i < nums.length; i++) {
            int answer = target - nums[i];
            if(map.containsKey(answer)) {
                return new int[]{map.get(answer), i};
            }
            map.put(nums[i], i);
        }

        return new int[]{};
    }
}
