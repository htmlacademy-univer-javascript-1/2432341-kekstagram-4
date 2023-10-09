const IsStringCorrectLength = (string, maxLength) => string.length <= maxLength;
const IsStringPalindrome = (string) =>
{
  let normalized = string.replaceAll(' ', '').toLowerCase();
  let normalizedLength = normalized.length;
  for (let i = 0; i < normalizedLength; i++)
  {
    if (normalized[i] !== normalized[normalizedLength - i - 1])
    {
      return false;
    }
    return true;
  }
};
