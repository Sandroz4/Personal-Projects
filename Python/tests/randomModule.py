









# import math, random

# def randomWhile(a, b):
#     count = 0
    
#     total = 0
#     amount = 0
#     while count < 100:
#         x = math.ceil(random.uniform(a, b))

#         if x %2 != 0:
#             total += x
#             amount += 1
#         count += 1
#     return total / amount
        


# print(randomWhile(1, 30))

# # print(math.ceil(5.3))



# # Exercise 1
# import random

# def quiz1(a, b):
#     # generate 80 random numbers between a and b
#     # return (biggest + smallest) ** 2
#     min, max = 100, 0

#     for i in range(80):
#         x = random.randint(a, b)
#         if x < min:
#             min = x
#         elif x > max:
#             max = x
#     return pow((max + min), 2)


# print(quiz1(1, 10))


# # Exercise 2

# import random

# def quiz2(a, b):
#     # 150 random ints from a to b
#     # return biggest * smallest * 10
#     min, max = 100, 0

#     for i in range(150):
#         x = random.randint(a, b)
#         if x < min:
#             min = x
#         elif x > max:
#             max = x
#     return ((min*max), 2)


# print(quiz2(1, 20))




# # Exercise 4
# import random

# def quiz4(low, high):
#     # 50 random numbers
#     # find the biggest even number and the smallest odd number
#     # return their product
#     max_even, min_odd = 0, 100

#     for i in range(50):
#         x = random.randint(low, high)
#         if x %2 == 0:
#             if x > max_even:
#                 max_even = x
#         else:
#             if x < min_odd:
#                 min_odd = x
#     return max_even*min_odd



# print(quiz4(1, 20))




# # Exercise 5
# import random
# def quiz5(a, b):
#     total = 0
#     # generate 120 random numbers
#     # add up only the ones that are divisible by 5
#     # return total ** 2
#     sum = 0
#     for i in range(120):
#         x = random.randint(a, b)
#         if x %5 == 0:
#             sum += x
#     return pow(sum, 2)


    
# print(quiz5(1, 30))







