//Memoized Factorial  
const createFactorial = () => {
    const cache = {};
    
    return (n) => {
      if (!Number.isInteger(n) || n < 0) return "Invalid input";
      
      if (n in cache) return cache[n];
      
      let result = 1;
      for (let i = 2; i <= n; i++) result *= i;
      
      cache[n] = result;
      return result;
    };
  };
  
  const factorial = createFactorial();
  
  console.log(`Factorial(3): ${factorial(3)}`);  
  console.log(`Factorial(5): ${factorial(5)}`);   
  console.log(`Factorial(3): ${factorial(3)}`);  
  console.log(`Factorial(-1): ${factorial(-1)}`); 

  // String Formatter
  const formatString = (str, options = {}) => {
    if (typeof str !== 'string') return "Invalid";
    
    const { uppercase = false, reverse = false, trim = false } = options;
    let result = str;
    
    if (trim) result = result.trim();
    if (uppercase) result = result.toUpperCase();
    if (reverse) result = [...result].reverse().join('');
    
    return `Formatted: "${result}"`;
  };
  
  console.log(formatString("hello", { uppercase: true }));  
  console.log(formatString("World", { reverse: true }));   // Invalid input


  //Custom Array Filter 
  const createFilter = (condition) => {
    let callCount = 0;
    const validConditions = ["even", "odd", "positive"];
  
    return (arr) => {
      callCount++;
  

      if (!Array.isArray(arr)) return { error: "Invalid input", count: callCount };
      if (!validConditions.includes(condition)) return { error: "Invalid input", count: callCount };
  

      const filterLogic = {
        even: num => num % 2 === 0,
        odd: num => num % 2 !== 0,
        positive: num => num > 0
      };
  
      return {
        filtered: arr.filter(filterLogic[condition]),
        count: callCount
      };
    };
  };
  
  
  const evenFilter = createFilter("even");
  console.log(`Call ${evenFilter([1,2,3,4]).count}:`, evenFilter([1,2,3,4]).filtered);
  console.log(`Call ${evenFilter([5,6,7,8,10]).count}:`, evenFilter([5,6,7,8,10]).filtered); 