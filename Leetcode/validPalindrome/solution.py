class Solution(object):
    def isPalindrome(self, s):
        filteredS = ""
        for i in range(len(s)):
            if s[i].isalnum():
                filteredS = filteredS + s[i].lower()
        left = 0
        right = len(filteredS) - 1
        
        while left < right:
            if filteredS[left] != filteredS[right]:
                return False
            left += 1
            right -= 1
        
        return True
        