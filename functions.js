const transactions = [
    {
        id: 10001,
        customer: "Luna",
        date: "2019-8-01",
        amt: 120,  
    },
    {
        id: 10001,
        customer: "Luna",
        date: "2019-10-02",
        amt: 5000,  
    },
    {
        id: 10001,
        customer: "Luna",
        date: "2019-9-06",
        amt: 146,  
    },
    {
        id: 10001,
        customer: "Luna",
        date: "2019-9-24",
        amt: 60,  
    },
    {
        id: 10002,
        customer: "Francis",
        date: "2019-8-16",
        amt: 290,
    },
    {
        id: 10002,
        customer: "Francis",
        date: "2019-9-04",
        amt: 75,  
    },
    {
        id: 10002,
        customer: "Francis",
        date: "2019-10-28",
        amt: 40,  
    },
    {
        id: 10003,
        customer: "Helen",
        date: "2019-9-13",
        amt: 230,  
    },
    {
        id: 10004,
        customer: "Moses",
        date: "2019-10-13",
        amt: 290,  
    },
    {
        id: 10003,
        customer: "Helen",
        date: "2019-2-20",
        amt: 110,  
    }
]

//3 months to search use number "0-11"
const monthsToFilter = [ 7, 8, 9 ];

console.log("Original Data:", JSON.stringify(transactions));

//variables
const subTotalArray = []; //stores points calculated for each transaction
const custForEachTrans = []; //stores a customer id for each transaction
let unique = []; // stores customer ids with duplicates removed


//Main Function Stack
function getCustPointsReport(){
    //Calculate Points for each transaction & generate array of customer ids for each transaction
    let sums = calcPoints(transactions);
    console.log("subTotalArray:", subTotalArray);
    console.log("custForEachTrans:", custForEachTrans);

    //Filter Month Range
    let monthFilter = chooseMonths(subTotalArray, monthsToFilter);
    console.log("monthFilter:", monthFilter);

    //get list of customer ids and return array with no duplicates
    let custIds = removeDupes(custForEachTrans);
    console.log("custIds:", custIds);
   
    //Get 3 month point totals for each customer
    let threeMoSums = getCustSums(custIds, monthFilter);
    console.log("threeMoSums: ", threeMoSums);
   
    //Get single month totals for month for each customer
    let singleMoTots = getCustMoSums(monthFilter, custIds, monthsToFilter)
    console.log("singleMoTots:", singleMoTots);
    
    // let singleMoTotsDry = removeObjDups(singleMoTots);
    // console.log("singleMoTotsDry:", singleMoTotsDry);

    console.log("UNIUNI:", unique);
    console.log("sums:", sums);

    sumDisplay(threeMoSums);
    moSumDisplay(singleMoTots)
}

//MAIN FUNCTIONS

function calcPoints(data) {
    let sums;

    //Calculate reward points
    for(i in data){
        let totOne = 0;
        if(data[i].amt > 50 && data[i].amt < 100){
            totOne += data[i].amt - 50
        }
        if(data[i].amt > 100){
            totOne += 50 + (data[i].amt - 100)*2
        }

    //Create object containing customerId to calculated points for each transaction.
    let dateObj = new Date(data[i].date);
    let monthCode = dateObj.getMonth();
    let subpoints = {customerId: data[i].id, name: data[i].customer,  date: data[i].date, month: monthCode, points: totOne };
   
    //Push customer ids into their own array
    custForEachTrans.push(data[i].id);

    //Push object with customerId and earned transaction points to array
    subTotalArray.push(subpoints);
   }

}

function chooseMonths(arr, months){
     let newArr = [];

     for(i in arr){
        if( arr[i].month === months[0] || arr[i].month === months[1] || arr[i].month === months[2] ){
            newArr.push(arr[i]);
        }    
     }

     return newArr
}


//Uses unique customer ids to search through and total earned points for each customer filtered by months indicated
function getCustSums(arrA, arrB){
  let superSum = [];  
  for(i in arrA){

    let pointTotA = 0;
    let nameA = "";
    let dateA = 0;
    let transQty = 0;

    for(j in arrB){
       
        if(arrA[i] === arrB[j].customerId){
       
            pointTotA += arrB[j].points
            nameA = arrB[j].name
            //dateA = arrB[j].month
            transQty += 1
        }
      }  

       //Create new object and push to "superSum" array
      let custSum = {id: arrA[i], name: nameA, total: pointTotA, qty: transQty};
         superSum.push(custSum);
    }

  return superSum
}

function getCustMoSums(arrA, arrB, months){
    let superSum = []; 

    for(i in arrB){
        for(j in months){
            
            let pointTotA = 0;
            let nameA = "See ID";
            let monthsA = months[j];
            let transQty = 0;
            let idA = 0; 

                for(k in arrA){
                    
                    if(arrA[k].customerId === arrB[i] && arrA[k].month === months[j] && arrA[k].customerId !== 0 ){

                        monthA = months[j]
                        nameA = arrA[k].name
                        idA = arrA[k].customerId
                        transQty += 1
                        pointTotA += arrA[k].points
                        
                    }

         }


     let custSum = {id: arrB[i], name: nameA, month: monthsA, total: pointTotA, qty: transQty};
     if(custSum.id !== 0){
     superSum.push(custSum); 
     }
    }

    
    
  }
 
  return superSum
}



//Removes duplicates values from any array
function removeDupes(arrWithDupes){
    let uniq = [...new Set(arrWithDupes)];
    //console.log("uniq", uniq);
    return uniq;
}

function getTots(arr){
  let superSum = [];  
  for(i in arr){
      if(arr[i].id){}
    }
  console.log("SuperSum!:", superSum);
  return superSum
}

//Removes duplicates values from any array
function removeDupes(arrWithDupes){
    let uniq = [...new Set(arrWithDupes)];
    //console.log("uniq", uniq);
    return uniq;
}


//Removes duplicate objects from any array
function removeObjDups(x) {

            // Create an array of objects  
            jsonObject = x.map(JSON.stringify);
     
            //console.log(jsonObject);  
            uniqueSet = new Set(jsonObject);
            uniqueArray = Array.from(uniqueSet).map(JSON.parse);
     
            //console.log(uniqueArray);
            return uniqueArray
        }





//Outputs Totals to the DOM
function sumDisplay(arrayX){
     
    for(i in arrayX){
        const paraA = document.createElement("P");
        paraA.innerHTML = arrayX[i].name + " | " + arrayX[i].id + " | 3 Month Total: " + arrayX[i].total + " points";
        document.getElementById("main").appendChild(paraA);
    }

}
function moSumDisplay(arrayX){      
    console.log('arrayX', arrayX);
    for(i in arrayX){
        const paraB = document.createElement("P");
        //console.log("paraA", paraA);
        paraB.innerHTML = arrayX[i].name + " | " + arrayX[i].id + " | Total/Mo: " + arrayX[i].total + " points" + " | " + "Transaction qty: " + arrayX[i].qty;
        document.getElementById("main").appendChild(paraB);
    }

}

//HELPER FUNCTIONS:
function getMonthString(num){
    let month;
    switch(num)
    {
      case 0:
        month="January";
        break;
      case 1:
        month="February";
        break;
      case 2:
        month="March";
        break;
      case 3:
        month="April";
        break;
      case 4:
        month="May";
        break;
      case 5:
        month="June";
        break;
      case 6:
        month="July";
        break;
      case 7:
        month="August";
        break;
      case 8:
        month="September";
        break;
      case 9:
        month="October";
        break;
      case 10:
        month="November";
        break;
      case 11:
        month="December";
        break;
      default:
        month="Invalid month";
    }
    return month;
}     
