import functools


def cache_decorator(func):
    cache = {}

    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        key = (args, frozenset(kwargs.items()))
        if key not in cache:
            result = func(*args, **kwargs)
            cache[key] = result
            print(f"Result cached for {func.__name__}{key}")
        return cache[key]

    return wrapper


@cache_decorator
def expensive_calculation(x, y):
    result = x + y
    return result


# Usage
result1 = expensive_calculation(5, 3)
result2 = expensive_calculation(5, 4)

print(result1)  # Output: 8 (result from calculation)
print(result2)  # Output: 8 (result from cache)
