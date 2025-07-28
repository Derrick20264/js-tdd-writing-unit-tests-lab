// Your code here
export function isPalindrome(word) {
  if (typeof word !== "string") {
    throw new Error("Input must be a string");
  }
if (word === "") {
    return false; // Handle empty string separately
    }
  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error("Input must contain only alphabetic characters");
  }

  const cleaned = word.toLowerCase();
  return cleaned === cleaned.split("").reverse().join("");
}
