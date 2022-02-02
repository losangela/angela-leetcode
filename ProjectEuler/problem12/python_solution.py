import time


def factorsOfNCount(n):
  factors = 1
  for int in range(1, n//2 + 1):
    if n % int == 0:
      factors += 1
  return factors

def solution_01():
  triangleNumber = 0
  number = 0
  while True:
    number += 1
    triangleNumber += number
    if (factorsOfNCount(triangleNumber) > 500):
      return triangleNumber





start = time.time()
answer = solution_01()

end = time.time()
print("Done! The answer is:", answer, "and the runtime was:", (end - start)*1000, "ms")
