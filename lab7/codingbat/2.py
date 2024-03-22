def sum3(nums):
  return sum(nums)

def rotate_left3(nums):
  res = [0] * len(nums)
  for i in range(1, len(nums)):
    res[i-1] = nums[i]
  
  res[i] = nums[0]
  return res
