# Exercise 1:
# Print the ASCII code of 'A', 'a', and '0'.
# Also, print the character corresponding to 65, 97, and 48.

# Try writing the code using ord() and chr().

# print(ord('A'))
# print(ord('a'))
# print(ord('0'))

# print(chr(65))
# print(chr(97))
# print(chr(48))


# Principle:

# Uppercase letters: ASCII 65–90 (A–Z)

# Lowercase letters: ASCII 97–122 (a–z)

# # Exercise 2:
# # Write a lambda function is_upper that takes a single character 
# # and returns True if it’s uppercase, False otherwise (don’t use .isupper()).


# def checkCase(char):
#     return 65 <= ord(char) <= 90


# print(checkCase('A'))




# Principle:

# Uppercase → Lowercase: add 32 to ASCII (ord('A') + 32 = 97 → 'a')

# Lowercase → Uppercase: subtract 32 from ASCII (ord('a') - 32 = 65 → 'A')

# Exercise 3:
# Write a function invert_case(char) that takes a single letter and returns the opposite case. If it’s not a letter, return it unchanged.


# def invert_case(char):
#     if 65 <= ord(char) <= 90 or 97 <= ord(char) <= 122:
#         if 65 <= ord(char) <= 90:
#             return chr(ord(char) + 32)
#         else:
#             return chr(ord(char) - 32)
#     return char

# def invert_case(char):
#     if 65 <= ord(char) <= 90:
#         return chr(ord(char) + 32)
#     elif 97 <= ord(char) <= 122:
#         return chr(ord(char) - 32)
#     return char

        

# print(invert_case('?'))