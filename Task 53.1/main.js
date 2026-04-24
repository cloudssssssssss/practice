console.log('#53. JavaScript homework example file');

/*
 * #1 isDebugMode
 */
const isDebugMode = () => {
  const env = process.env.NODE_ENV;
  const isDebug = env === 'development';
  
  console.log(`Current NODE_ENV: ${env}`);
  console.log(`Is Debug Mode: ${isDebug}`);
  
  return isDebug;
};

/*
 * #2 encode/decode functions
 */

// Кодування у Base64
const encodeToBase64 = (...args) => {
  const combinedString = args.join(':');
  console.log('Encoding to Base64:', combinedString);
  return Buffer.from(combinedString).toString('base64');
};

// Кодування у Hex
const encodeToHex = (...args) => {
  const combinedString = args.join(':');
  console.log('Encoding to Hex:', combinedString);
  return Buffer.from(combinedString).toString('hex');
};

// Декодування з Base64
const decodeFromBase64 = (base64String) => {
  try {
    console.log('Decoding from Base64:', base64String);
    return Buffer.from(base64String, 'base64').toString('utf8');
  } catch (error) {
    console.error('Base64 Decoding Error:', error.message);
    return null;
  }
};

// Декодування з Hex
const decodeFromHex = (hexString) => {
  try {
    console.log('Decoding from Hex:', hexString);
    return Buffer.from(hexString, 'hex').toString('utf8');
  } catch (error) {
    console.error('Hex Decoding Error:', error.message);
    return null;
  }
};

/*
 * #3 Safe decoding with validation
 */

const safeDecodeFromBase64 = (base64String) => {
  // Регулярний вираз для перевірки валідності Base64
  const base64Regex = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
  
  if (!base64Regex.test(base64String)) {
    const errorMsg = 'Invalid base64 string';
    console.error(errorMsg);
    throw new Error(errorMsg);
  }

  const decoded = decodeFromBase64(base64String);
  console.log('Successfully decoded Base64:', decoded);
  return decoded;
};

const safeDecodeFromHex = (hexString) => {
  // Регулярний вираз для перевірки Hex (парна кількість символів 0-9, a-f)
  const hexRegex = /^[0-9a-fA-F]+$/;
  
  if (!hexRegex.test(hexString) || hexString.length % 2 !== 0) {
    const errorMsg = 'Invalid hex string';
    console.error(errorMsg);
    throw new Error(errorMsg);
  }

  const decoded = decodeFromHex(hexString);
  console.log('Successfully decoded Hex:', decoded);
  return decoded;
};

export {
  isDebugMode,
  encodeToBase64,
  encodeToHex,
  decodeFromBase64,
  decodeFromHex,
  safeDecodeFromBase64,
  safeDecodeFromHex,
};