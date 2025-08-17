exports.generateRegistrationToken = () => {
  const uniqueDigits = new Set();
  while (uniqueDigits.size < 4) {
    uniqueDigits.add(Math.floor(Math.random() * 10));
  }
  const digits = Array.from(uniqueDigits).join('');
  return `2025_abc_${digits}`;
};