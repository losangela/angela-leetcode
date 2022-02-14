def subsets(nums):
  result = [[]]
  temp = []
  
  for int in nums:
    temp.append([int])
    for sub_arr in result[1:]:
      temp.append(sub_arr+[int])
    result.extend(temp)
    temp = []

  return result

case_1 = [1,2,3]
answer = subsets(case_1)
print('Got: ', answer, 'and wanted: ', [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]])