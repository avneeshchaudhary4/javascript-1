let arr=["standard","overnight","express"];
for(let i=0;i<arr.length;i++){
    if(arr[i]=="standard"){
        console.log("might take 3-5 days");
    }
    else
    if(arr[i]=="express"){
        console.log(" might take 1-2 days");
    }
    else
    if(arr[i]=="overnight"){
        console.log("Would be delivered the next day");
    }
}
