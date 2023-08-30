const web3 = require('web3');
const crypto = require('crypto');

function encodeParameters(paramTypes, paramValues) {
  return web3.eth.abi.encodeParameters(paramTypes, paramValues);
}

function getBufferFromHex(hexString) {
  return Buffer.from(
    hexString.startsWith('0x') ? hexString.slice(2) : hexString,
    'hex'
  );
}

function computeSHA256Hash(buffer) {
  return crypto.createHash('sha256').update(buffer).digest('hex');
}

// Usage
const encodedParameters = encodeParameters(['uint256', 'uint256'], [0, 5]);
console.log(encodedParameters);

const bufferFromHex = getBufferFromHex(encodedParameters);
console.log(bufferFromHex);

const hash = computeSHA256Hash(bufferFromHex);
console.log(hash);
