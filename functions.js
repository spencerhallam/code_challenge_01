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
        id: 10003,
        customer: "Helen",
        date: Date("2019-10-20"),
        amt: 110,  
    }
]
console.log("test", data[0].amt);

const subTotalArray = [];
const custAllTrans = [];
let unique = [];

function removeDupes(){
    unique = [...new Set(custAllTrans)];
    return unique;
    // console.log("removeDupes:", unique);
    // console.log("removeDupes length:", unique.length);
}

function myFunctionA() {

    for(i in data){
        let totOne = 0;
        if(data[i].amt > 50 && data[i].amt < 100){
            totOne += data[i].amt - 50
        }
        if(data[i].amt > 100){
            totOne += 50 + (data[i].amt - 100)*2
        }

    let subpoints = {customerId: data[i].id, points: totOne };

    custAllTrans.push(data[i].id);
    subTotalArray.push(subpoints);
    console.log("subTotalArray:", subTotalArray);
    console.log("custAllTrans:", custAllTrans);

    unique.push(removeDupes());
    console.log("unique", unique);
    yoyo(unique);
   }

function yoyo(custs){
  let superSum = [];  
  for(i in custs){
    
    let pointTotA = 0;
    for(j in subTotalArray){
        let pointTotB = 0
        if(custs[i] === subTotalArray[j].customerId){
            console.log("test1:", subTotalArray[j].customerId + " | " + subTotalArray[j].points);
            pointTotA += subTotalArray[j].points
        }
        console.log("pointTotA3:", pointTotA);
      }
      let custSum = {id: custs[i], total: pointTotA}; 
      superSum.push(custSum);
      console.log("custSum:", custSum);
      console.log("pointTotA:", pointTotA);  
  }
  console.log("SuperSum!:", superSum);
}

// function myFunctionA() {

//     for(i in data){
//         let totOne = 0;
//         if(data[i].amt > 50 && data[i].amt < 100){
//             totOne += data[i].amt - 50
//         }
//         if(data[i].amt > 100){
//             totOne += (data[i].amt - 100)*2
//         }
//     let customer = data[i].customer;
//     let subpoints = "{" + customer: totOne };

//     subTotalArray.push(subpoints);
//     console.log("subTotalArray:", subTotalArray);
//    }

// function myFunctionB() {
//     for(i in )

// }



// function grabkeys(x){
//     const newarray = [];
//     for(let i = 0; i < x.length; i++){
//       newarray.push(Object.keys(data[i]));
//     }
//     return newarray
// }

// console.log("grabkeys", grabkeys(data));

    var para = document.createElement("P");                
    para.innerHTML = data[0].customer + " | " + data[0].date + " | " + data[0].amt;            
    document.getElementById("main").appendChild(para);
}


