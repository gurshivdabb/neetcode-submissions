class Solution {
    public int maxProfit(int[] prices) {
        int profit = 0;
        int initialVal = prices[0];
        
        for (int price: prices) {
            if(price < initialVal) {
                initialVal = price;
            } else if (price - initialVal > profit) {
                profit = price - initialVal;
            }
        }

        return profit;
    }
}
