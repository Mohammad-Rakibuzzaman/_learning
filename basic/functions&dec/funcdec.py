def log_execution_time(func):
    from time import time

    def wrapper(*args, **kwargs):
        start_time = time()
        result = func(*args, **kwargs)
        end_time = time()
        print(f"{func.__name__} took {end_time - start_time: .3f} seconds to execute!")
        return result

    return wrapper


@log_execution_time
def calculate_squares(numbers):
    return [numbers[value] * numbers[value] for key, value in enumerate(numbers)]


# numbers = [1, 2, 4, 7]
numbers = {"bag": 1, "chair": 2, "water bottle": 3, "egg": 4}
# for key, val in enumerate(numbers):
#     print(key)
squares = calculate_squares(numbers)
print(squares)
