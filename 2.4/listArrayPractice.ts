let firstList: Array<number> = []; 

let candy: Array<string> = [
    "Snickers", 
    "Sour Patch Kids", 
    "Twix", 
    "Sweetish Fish"
]; 

//  Push to add items to our arrays; 
firstList.push(100); 
firstList.push(1000); 
firstList.push(10000);

console.log("This should be the first list", firstList); 
console.log("This should print and delete Sweetish Fish", candy.pop()); 
console.log("this should be the remaining candy", candy); 
console.log("should give us back 100", firstList[0]); 
console.log("this should give us back snickers", candy[0])