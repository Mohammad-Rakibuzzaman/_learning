def authorization_decorator(func):
    def wrapper(user, *args, **kwargs):
        if user.is_authenticated:
            print(f"User {user.username} is authorized.")
            return func(user, *args, **kwargs)
        else:
            print("Unauthorized access.")

    return wrapper


def log_decorator(func):
    def wrapper(user, *args, **kwargs):
        print(f"Access logged for {user.username}")
        return func(user, *args, **kwargs)

    return wrapper


@log_decorator
@authorization_decorator
def sensitive_operation(user, data):
    # Perform sensitive operation here
    print(f"Sensitive operation performed with data: {data}")


# Usage
user1 = {"username": "Alice", "is_authenticated": True}
sensitive_operation(user1, "sensitive_data")

user2 = {"username": "Bob", "is_authenticated": False}
sensitive_operation(user2, "confidential_data")
