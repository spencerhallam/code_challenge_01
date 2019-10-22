const data = [
    {
        id: 10001,
        customer: "Luna",
        date: Date("2019-8-01"),
        amt: 120,  
    },
    {
        id: 10001,
        customer: "Luna",
        date: Date("2019-9-24"),
        amt: 60,  
    },
    {
        id: 10002,
        customer: "Francis",
        date: Date("2019-8-16"),
        amt: 290, 
    },
    {
        id: 10002,
        customer: "Francis",
        date: Date("2019-9-04"),
        amt: 75,  
    },
    {
        id: 10002,
        customer: "Francis",
        date: Date("2019-10-28"),
        amt: 40,  
    },
    {
        id: 10003,
        customer: "Helen",
        date: Date("2019-9-13"),
        amt: 230,  
    },
    {
        id: 10004,
        customer: "Moses",
        date: Date("2019-3-13"),
        amt: 290,  
    },
    {
        id: 10003,
        customer: "Helen",
        date: Date("2019-10-20"),
        amt: 110,  
    }
]
//console.log("test", data[0].amt);

//variables available to program
const subTotalArray = [];
const custAllTrans = [];
let unique = [];

function calcPoints() {
    //calculate reward points
    for(i in data){
        let totOne = 0;
        if(data[i].amt > 50 && data[i].amt < 100){
            totOne += data[i].amt - 50
        }
        if(data[i].amt > 100){
            totOne += 50 + (data[i].amt - 100)*2
        }

    //Create object containing customerId to calculated points for each transaction.
    let subpoints = {customerId: data[i].id, points: totOne };
    
    //Push customer ids into their own array
    custAllTrans.push(data[i].id);
    //Push object with customerId and earned transaction points to array 
    subTotalArray.push(subpoints);

    // console.log("subTotalArray:", subTotalArray);
    // console.log("custAllTrans:", custAllTrans);
    
    //Remove duplicates from array of customer ids
    unique.push(removeDupes(custAllTrans));
    console.log("unique", unique);
    let yaya = getCustSums(unique);
    console.log("yaya", yaya);

   }
}

//Uses unique customer ids to search through and total earned points for each customer
function getCustSums(custs){
  let superSum = [];  
  for(i in custs){
    
    let pointTotA = 0;
    for(j in subTotalArray){
        //let pointTotB = 0
        if(custs[i] === subTotalArray[j].customerId){
            //console.log("test1:", subTotalArray[j].customerId + " | " + subTotalArray[j].points);
            pointTotA += subTotalArray[j].points
        }
        //console.log("pointTotA3:", pointTotA);
      }
      let custSum = {id: custs[i], total: pointTotA}; 
      superSum.push(custSum);
      //console.log("custSum:", custSum);
      //console.log("pointTotA:", pointTotA);  
  }
  console.log("SuperSum!:", superSum);
  return superSum
}

//Helper to remove duplicates from any array
function removeDupes(arrWithDupes){
    unique = [...new Set(arrWithDupes)];
    // console.log("removedDupes:", unique);
    // console.log("removedDupes length:", unique.length);
    return unique;
}


//Output results to the DOM
         
    for(i in custSums){
        var para = document.createElement("P");
        console.log(para)
        para.innerHTML = custSum[i].id + " | " + custSum[0].total;
        document.getElementById("main").appendChild(para);
    }
    para.innerHTML = data[0].customer + " | " + data[0].date + " | " + data[0].amt;            
    document.getElementById("main").appendChild(para);



