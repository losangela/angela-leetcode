import time

def solution_1():
  sumOfSquares = 0
  sum = 0

  for int in range(101):
    sum += int
    sumOfSquares += pow(int, 2)
  
  return pow(sum, 2) - sumOfSquares

start = time.time()
answer = solution_1()
end = time.time()
print("Done! The answer is:", answer, "and the runtime was:", (end - start)*1000, "ms")