import time

def isPrime(n):
  for int in range(2, n):
    if n % int == 0:
      return False
  return True

def largestPrimeFactor(n):
  start = -(n//-2)
  if start % 2 == 0:
    start += 1
  for int in range(start, 2, -2):
    if n//int == -(n//-int) and isPrime(int):
      return int





start = time.time()
answer = largestPrimeFactor(600_851_475_143)
# answer = largestPrimeFactor(22)

end = time.time()
print("Done! The answer is:", answer, "and the runtime was:", (end - start)*1000, "ms")