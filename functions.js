const data = [
    {
        customer: "Luna",
        date: Date("2019-8-01"),
        amt: 140,   
    },
    {
        customer: "Luna",
        date: Date("2019-9-24"),
        amt: 20,   
    },
    {
        customer: "Francis",
        date: Date("2019-8-16"),
        amt: 290,   
    },
    {
        customer: "Francis",
        date: Date("2019-9-04"),
        amt: 75,   
    },
    {
        customer: "Francis",
        date: Date("2019-10-28"),
        amt: 40,   
    },
    {
        customer: "Helen",
        date: Date("2019-9-13"),
        amt: 230,   
    },
    {
        customer: "Helen",
        date: Date("2019-10-20"),
        amt: 110,   
    }
]
console.log("test", data[0].amt);
const totalArray = [];

function myFunction() {
    let totOne = 0;
    let totTwo = 0;
    
    for(i in data){
        if(data[i].amt > 50){
            totOne += data[i].amt - 50
        }
        if(condition if amt < 100){
            totOne += (data[i].amt - 100)*2
        }
       totalArray.push{Object: "data[i].customer: totOne"}
    }
    var para = document.createElement("P");                
    para.innerHTML = data[0].customer + " | " + data[0].date + " | " + data[0].amt;            
    document.getElementById("main").appendChild(para); 
}
