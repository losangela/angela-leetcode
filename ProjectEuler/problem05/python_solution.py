import time
import math

def isDivisibleUpTo20(n):
  for int in range(3, 20):
    if n % int > 0:
      return False
  return True

def solution_1():
  startIndex = 2520
  while (True):
    if isDivisibleUpTo20(startIndex):
      return startIndex
    startIndex += 20
  
start = time.time()
answer = solution_1()
end = time.time()
print("Done! The answer is:", answer, "and the runtime was:", (end - start)*1000, "ms")