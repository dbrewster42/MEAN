function BubbleS(arr){
	for (let i = 0; i < arr.length-1; i++){
		for (let j = 1; j < arr.length - i; j++){
			if (arr[j] < arr[j-1]){
				let temp = arr[j];
				arr[j] = arr[j-1];
				arr[j-1] = temp;
			}
		}
	}
	return arr;
}

O(n)
O(1)
O(n)
O(n^2)