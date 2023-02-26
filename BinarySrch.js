class BinarySrch
{
    BinarySearch(arr, target)
    {
        let left=0;
        let right= arr.length - 1;
        //let mid = 0;
        
        while(left<=right)
        {
            let mid = Math.floor((left+right)/2)
            if(arr[mid] === target)
            {
                return mid;
            }
            else if(target < arr[mid])
            {
                right = mid-1
            }
            else if(arr[mid] < target)
            {
                left = mid+1
            }
        }
        return -1
    }
}

var bs=new BinarySrch()
var arr = [1, 3, 5, 7, 9, 11, 13, 17];
let target = 5

const result = bs.BinarySearch(arr, target)
if(result === -1)
{
    console.log("Not found!!!")
}
else
{
    console.log("Target is found at ", result, "th index")
}