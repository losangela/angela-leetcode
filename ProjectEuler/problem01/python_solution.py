import time

def solution_1(rangeMax):
  sum = 0
  for int in range(rangeMax):
    if int % 3 == 0 or int % 5 == 0:
      sum += int

  return sum

def solution_2(rangeMax):
  sum = 0

  for int in range(3, rangeMax, 3):
    sum += int
  
  for int in range(5, rangeMax, 5):
    if int % 3 != 0:
      sum += int

  return sum

start = time.time()
answer = solution_2(1000)
end = time.time()
print("Done! The answer is:", answer, "and the runtime was:", (end - start)*1000, "ms")
