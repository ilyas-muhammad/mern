export default function (inputString: string): number {
  if (!inputString || inputString.trim() === '') {
    return 0; // Return 0 for empty or whitespace-only strings
  }

  // Split the input string by whitespace and count the resulting array's length
  return inputString.trim().split(/\s+/).length;
}
