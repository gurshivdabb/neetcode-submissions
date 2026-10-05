class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let profit = 0;
        let cheap = prices[0];

        for (const price of prices) {
            if (cheap > price) {
                cheap = price;
            } else if (price - cheap > profit) {
                profit = price - cheap;
            }
        }
        
        return profit;
    } 
}
