function shuffleItems(arr: any[]): any[] {
  // Use the Fisher-Yates shuffle algorithm
  for (let i = arr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[rand]] = [arr[rand], arr[i]];
  }
  return arr;
}

export { shuffleItems };
