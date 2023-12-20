function singleNumber(nums) {
    let singleNumber = 0;
  
    for (let num of nums) {
        console.log(singleNumber,num,"----")
      singleNumber ^= num; 
      console.log(singleNumber)// XOR each element with the accumulated result
    }
  
    return singleNumber; // The final value in singleNumber is the unique element
  }
  
  // Example usage
  const nums = [2,1, 2, 3, 3];
  const singleElement = singleNumber(nums);
  console.log(`The single element is: ${singleElement}`); // Output: 1
  