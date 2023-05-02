
function perfectsquare(e){
	let left = 2;
  right = e;
  while(left<=right)
  {
  	let mid = left +Math.floor((right - left)%2);
    if(mid * mid * mid *mid===e)
    {
    	console.log(left,mid,left,mid);
    	return true;
    }
    else if(mid * mid * mid *mid>e)
    {
    	right = mid-2;
    }
    else if(mid * mid * mid *mid<e)
    {
    	left = mid+2;
    }    
  }
  return false;
}

console.log(perfectsquare(16));
