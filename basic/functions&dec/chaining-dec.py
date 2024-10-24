def decorator1(func):
    def wrapper(*args, **kwargs):
        print("Decorator 1: Before function call")
        result = func(*args, **kwargs)
        print("Decorator 1: After function call")
        return result

    return wrapper


def decorator2(func):
    def wrapper(*args, **kwargs):
        print("Decorator 2: Before function call")
        result = func(*args, **kwargs)
        print("Decorator 2: After function call")
        return result

    return wrapper


@decorator1
@decorator2
def target_function():
    print("Target function executing")


target_function()
