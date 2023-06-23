import time

start_time = time.time()


def prime(k):
    if k > 1:
        for i in range(2, k):
            if (k % i) == 0:
                return False
        else:
            return True
    else:
        return False


def list_prime(n):
    num_list = []
    for i in range(n):
        if prime(i) == True:
            num_list.append(i)
    return num_list


if __name__ == "__main__":
    print(list_prime(100))
    print("--- %s seconds ---" % (time.time() - start_time))
