// 1st challenge

function getcelcius(temp){
  let celcius
  celcius = (temp - 32) * 5/9
  return celcius
}

console.log(`The temperature is ${getcelcius(254)}\xB0C`);

// 2nd challenge

const minMax = (arr) => {
  let min = Math.min(...arr)
  let max = Math.max(...arr)
  return {
    min, max
  }

}

console.log(minMax([2,3,0,53,1,23]));

// 3rd challenge

(function (length, width){
  const area = length * width
  const output = `The area of a rectange of ${length} and width ${width
  } is ${area}`
  console.log(output);
})(5,23)