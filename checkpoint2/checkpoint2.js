
function sum (arr)
{
    let lowestSum = Math.abs(arr[0] + arr[1]);
    let result = [];
    let sum;
    for(let i=0; i< arr.length; i++){
        for(let j=0; j < arr.length; j++){
            sum = Math.abs(arr[i] + arr[j]);

            if (sum < lowestSum){
                result[0] = arr[i];
                result[1] = arr[j];
                lowestSum = sum;
            }
        }
        

        }
        return result;
        
};

console.log(sum([1,2,5,6,-9,-6,4,5]));