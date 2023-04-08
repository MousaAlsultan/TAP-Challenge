const majority = (nums) => {
    let counter = 0 ;
    for(let i = 0 ; i < nums.length ; i++){
      for(let j = 0 ; i < nums.length ; i++){
        if(nums[i] === nums[j]){
          counter++;
        }
        if(counter >= nums.length / 2){
        return nums[i]
      }
      }
    }
  }