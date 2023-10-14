function decimalToBinary(num) {
  //Write you code here
  if (typeof num !== 'number' || isNaN(num)) {
    return 'Invalid input';
  }

  // Use toString() with radix 2 to convert to binary
  const binary = num.toString(2);

  return binary;
}

window.decimalToBinary = decimalToBinary;
