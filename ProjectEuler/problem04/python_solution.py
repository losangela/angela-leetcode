import time

def solution_1():
  def isPalindrome(n):
    nToString = str(n)
    for i in range(len(nToString)//2):
      if nToString[i] != nToString[len(nToString) - 1 - i]:
        return False

    return True
  
  largest = 0

  for i in range(91,999):
    for j in range(99, 999):
      prod = i * j
      if isPalindrome(prod) and prod > largest:
        largest = prod
  
  return largest


start = time.time()
answer = solution_1()
end = time.time()
print("Done! The answer is:", answer, "and the runtime was:", (end - start)*1000, "ms")