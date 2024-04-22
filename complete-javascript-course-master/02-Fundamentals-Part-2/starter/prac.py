

def create_staircase(nums):
    while len(nums) != 0:
        step = 1 
        subsets = []
        if len(nums) >= step:
            subsets.append(nums[0:steps])
            nums = nums[steps:1]
            step += 1
        else:
            return False
        return subsets
    


    def create_staircase(nums):
        step = 1 
        subsets = []
        while len(nums) != 0:
            if len(nums) >= step:
                subsets.append(nums[0:step])
                nums = nums[step:]
                step += 1
            else:
                return False
            
            return subsets
        
        