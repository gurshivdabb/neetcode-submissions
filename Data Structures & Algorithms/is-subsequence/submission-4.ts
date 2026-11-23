class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s: string, t: string): boolean {
        let sIdx: number = 0;
        let tIdx: number = 0;

        while ((sIdx < s.length) && (tIdx < t.length)) {
            if (s[sIdx] == t[tIdx]) {
                sIdx = sIdx + 1;
                tIdx = tIdx + 1;
            } else {
                tIdx = tIdx + 1;
            }
        }

        return sIdx == s.length;
    }
}
