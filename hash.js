import crypto from 'crypto';

function getBufferFromHex(hexString) {
  return Buffer.from(
    hexString.startsWith('0x') ? hexString.slice(2) : hexString,
    'hex'
  );
}

function computeSHA256Hash(buffer) {
  return crypto.createHash('sha256').update(buffer).digest('hex');
}



const encodedParameters = '0x'+BigInt('17413931210521999512241311185236').toString(16).padStart(32,'0')+'0'.padStart(32,'0')+'0'.padStart(32,'0')+BigInt('100').toString(16).padStart(32,'0');


const bufferFromHex = getBufferFromHex(encodedParameters);

const hash = computeSHA256Hash(bufferFromHex);
console.log("hash SHA256",hash);

const big = BigInt('0x'+hash) >> 128n

const bitmask = BigInt("0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF");

const remainingBits = BigInt('0x'+hash) & bitmask;

console.log("hash First half",big.toString(10))
console.log("hash Second half",remainingBits.toString(10))

// [First][Second]
