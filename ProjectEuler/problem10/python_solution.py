import time
import sys
sys.path.append('ProjectEuler/problem03')
from p03_python import isPrime

def solution_01():
  sum = 2
  for int in range(3, 2_000_000, 2):
    if isPrime(int):
      sum += int
  
  return sum

start = time.time()
answer = solution_01()

end = time.time()
print("Done! The answer is:", answer, "and the runtime was:", (end - start)*1000, "ms")