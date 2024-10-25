"""
Begin
   create dec func
   
   create real func
   
   call the func
   
   print the count when call the real func
End

begin
    def dec-func(func)
        def wrapper(*args, **kwargs)
            count= 0
            if (func):
                return count+=1
        return wrapper
    return def-func
@
def two_sum(a, b):
    reurn a + b

func call

end

"""

# def function_counter(func):

#     countss = []

#     def wrapp(*args, **kwargs):
#         key = (args, frozenset(kwargs.items()))

#         if func:
#             result = func(*args, **kwargs)
#             countss.append(result)

#         print(len(countss))

#     return wrapp


# @function_counter
# def two_sum(a, b):
#     print(f"The answer is: {a + b}")


# two_sum(3, 2)
# two_sum(2, 21)
# two_sum(19, 2)
# two_sum(3, 2)


def function_counter(func):
    count = 0

    def wrapper(*args, **kwargs):
        nonlocal count
        count += 1
        result = func(*args, **kwargs)
        print(f"Function called {count} times")
        return result

    return wrapper


@function_counter
def two_sum(a, b):
    print(f"The answer is: {a + b}")


# Usage
two_sum(3, 2)
two_sum(2, 21)
two_sum(19, 2)
two_sum(3, 2)
