import time

def solution_1():
  fib = {
    0: 1,
    1: 1,
  }

  def getFib(n):
    if n in fib:
      return fib[n]
    else:
      fib[n] = getFib(n - 1) + getFib(n - 2)
      return fib[n]

  sum = 0
  for int in range(2, 4_000_000):
    if getFib(int) > 4_000_000:
      break
    if getFib(int) % 2 == 0:
      sum += getFib(int)
  
  return sum



def solution_2():
  sum = 0

  prev = 0
  curr = 1
  fib = 0
  while True:
    fib = prev + curr

    if fib > 4_000_000:
      break

    if fib % 2 == 0:
      sum += fib

    prev = curr
    curr = fib

  return sum





start = time.time()
answer = solution_2()
end = time.time()
print("Done! The answer is:", answer, "and the runtime was:", (end - start)*1000, "ms")