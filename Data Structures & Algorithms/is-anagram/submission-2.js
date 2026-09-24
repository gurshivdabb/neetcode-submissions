class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false;

        const sMap = new Map();
        const tMap = new Map();

        for (let i = 0; i < s.length; i++) {
            sMap.set(s.charAt(i), (sMap.get(s.charAt(i)) ?? 0) + 1);
            tMap.set(t.charAt(i), (tMap.get(t.charAt(i)) ?? 0) + 1);
        }

        for (let [k,v] of sMap) {
            if(!tMap.has(k) || tMap.get(k) !== v) {
                return false;
            }
        }
        return true;
    }
}
