import hashlib
preimage = bytes.fromhex('00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00\
00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 05')
print("bytes",preimage)
print("length",len(preimage.hex()));
print("bin",bin(int(preimage.hex(), 16)))
# output is '0b101'

output = hashlib.sha256(preimage).hexdigest()
print("sha256",output)
# print(bin(int(output,16)))
print("sha256, hex->int",int(output,16))
# output is 'c6481e22c5ff4164af680b8cfaa5e8ed3120eeff89c4f307c4a6faaae059ce10'


# preimage = bytes.fromhex(hex(5)[2:].rjust(128,'0'))
# print(hashlib.sha256(preimage).hexdigest())

# Input strings
numbers = ["263561599766550617289250058199814760685", "65303172752238645975888084098459749904"]

# Convert to binary strings (without the '0b' prefix)
bin_strings = [bin(int(num))[2:].rjust(128,'0') for num in numbers]
print(bin_strings)
# Concatenate the binary strings
concatenated_bin = "".join(bin_strings)

# # Ensure the result is 256 bits
# if len(concatenated_bin) != 256:
#     raise ValueError("The concatenated result is not 256 bits!")

# Convert back to integer (optional)
concatenated_int = int(concatenated_bin, 2)

print(hex(concatenated_int))