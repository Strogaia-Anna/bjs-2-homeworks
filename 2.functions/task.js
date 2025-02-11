function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
      let elem = arr[i];
      sum += elem; 
      if (elem < min) {
          min = elem;
      } else if (elem > max) {
          max = elem;
      }
  }

  let avg = +((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length == 0) {
      return 0;
  }
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
      sum += arr[i]; 
  }
  
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length == 0) {
      return 0;
  }
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
      let elem = arr[i];
          if (elem < min) {
          min = elem;
      } else if (elem > max) {
          max = elem;
      }
  }
  let dif = max - min;
  return dif;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length == 0) {
      return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
      let elem = arr[i];
      if (elem % 2 == 0) {
         sumEvenElement += elem;
      } else {
          sumOddElement += elem; 
      }
  }
  let dif = sumEvenElement - sumOddElement;
  return dif;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length == 0) {
      return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
      let elem = arr[i];
      if (elem % 2 == 0) {
         sumEvenElement += elem;
         countEvenElement += 1; 
      }
  }
  let dif = sumEvenElement / countEvenElement;
  return dif;
}


function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
      const result = func(...arrOfArr[i]);
      if (result > maxWorkerResult) {
          maxWorkerResult = result;
      }
  }
  return maxWorkerResult;
}