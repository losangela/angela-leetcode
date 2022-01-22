import time
import sys
sys.path.append('ProjectEuler/problem03')
from p03_python import isPrime

def solution_01(n):
  count = 0
  int = 1
  while count < n:
    int += 1
    if isPrime(int):
      count += 1

  return int

start = time.time()
answer = solution_01(10_001)

end = time.time()
print("Done! The answer is:", answer, "and the runtime was:", (end - start)*1000, "ms")