function maximumPairSum(cards) {
  // Sort the cards in ascending order
  cards.sort((a, b) => a - b);

  let maxSum = 0;

  // Pair up the cards by selecting the smallest and largest values
  for (let i = 0; i < cards.length / 2; i++) {
    const pairSum = cards[i] + cards[cards.length - 1 - i];
    maxSum = Math.max(maxSum, pairSum);
  }

  return maxSum;
}


// Example usage:
const cards = [1, 4, 3, 2];
const maxPairSum = maximumPairSum(cards);
console.log(maxPairSum);
