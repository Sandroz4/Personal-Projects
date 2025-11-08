# # Exercise 1:
# # Print the ASCII code of 'A', 'a', and '0'.
# # Also, print the character corresponding to 65, 97, and 48.

# # Try writing the code using ord() and chr().

# print(ord('A'))
# print(ord('a'))
# print(ord('0'))

# print(chr(65))
# print(chr(97))
# print(chr(48))


# # Principle:

# # Uppercase letters: ASCII 65–90 (A–Z)

# # Lowercase letters: ASCII 97–122 (a–z)

# # Exercise 2:
# # Write a lambda function is_upper that takes a single character 
# # and returns True if it’s uppercase, False otherwise (don’t use .isupper()).


# def checkCase(char):
#     return 65 <= ord(char) <= 90


# print(checkCase('A'))




# # Principle:

# # Uppercase → Lowercase: add 32 to ASCII (ord('A') + 32 = 97 → 'a')

# # Lowercase → Uppercase: subtract 32 from ASCII (ord('a') - 32 = 65 → 'A')

# # Exercise 3:
# # Write a function invert_case(char) that takes a single letter and returns the opposite case. If it’s not a letter, return it unchanged.


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



# # Exercise 4:
# # Write a function count_upper(text) that counts how many letters in a string are uppercase (don’t use .isupper()).

# def count_upper(text):
#     count = 0

#     for i in text:
#         if 65 <= ord(i) <= 90:
#             count += 1
#     return count


# print(count_upper('heLLo Sandro'))


# # Step 5: Count Lowercase in a String

# # Principle:
# # Lowercase letters have ASCII 97–122.

# # Exercise 5:
# # Write a function count_lower(text) that counts lowercase letters without using .islower().

# def count_lower(text):
#     count = 0

#     for i in text:
#         if 97 <= ord(i) <= 122:
#             count += 1
#     return count


# print(count_lower('heLLo Sandro'))



# Principle:

# Uppercase/lowercase letters differ by 32 in ASCII.

# If abs(ord(a) - ord(b)) == 32, they are the same letter in different cases.

# # Exercise 6:
# # Write a function same_letter_diff_case(a, b) that returns True if the letters are the same ignoring case, False otherwise.


# def same_letter_diff_case(a, b):
#     return abs(ord(a) - ord(b)) == 32

# print(same_letter_diff_case('a', 'A'))



# Principle:

# random.randint(65, 122) generates numbers corresponding to ASCII letters (uppercase + lowercase + some symbols in between).

# chr(number) converts to a character.

# # Exercise 7:
# # Write a function random_text_lowercase_count() that:

# # Generates 100 random numbers from 65–122.

# # Converts them to characters to form a string.

# # Counts how many letters are lowercase (97–122).

# # Example output (will vary due to randomness):

# import random 
# def random_text_lowercase_count():
#     count = 0

#     for _ in range(100):
#         i = random.randint(65, 122)
#         i = chr(i)
#         if 97 <= ord(i) <= 122:
#             count += 1
#     return count



# print(random_text_lowercase_count())




# # Principle:

# # Just loop through the string and increment a counter whenever the character matches.

# # This is what exam problem #10 is asking.

# # Exercise 8:
# # Write a function count_char(text, char) that counts how many times char appears in text without using .count().


# def count_char(text, char):
#     count = 0

#     for i in text:
#         if ord(i) == ord(char):
#             count += 1

#     return count


# print(count_char('hello world', 'l'))