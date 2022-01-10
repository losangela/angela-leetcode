# Self powers
# Problem 48

# The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.
# Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.
import time

def solution():
  answer = 0
  modulo = 10_000_000_000

  for i in range(1, 1000):
    answer += i**i % modulo
    answer %= modulo

  return str(answer)

start = time.time()
answer = solution()
end = time.time()
print("Done! The answer is:", answer, "and the runtime was:", (end - start)*1000, "ms")