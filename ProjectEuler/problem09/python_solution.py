import math
import time

def solution_01():
  a, b = 1, 2

  def c():
    return math.sqrt(a**2 + b**2)

  def product():
    return a * b * c()

  while a < 333:
    for i in range(b, (1000-a)//2):
      if a + b + c() == 1000:
        break
      b += 1
    if a + b + c() == 1000:
      break
    a += 1
    b = a + 1
  
  return { 'a': a, 'b': b, 'c': c(), 'product' : product() }


start = time.time()
answer = solution_01()

end = time.time()
print("Done! The answer is:", answer, "and the runtime was:", (end - start)*1000, "ms")