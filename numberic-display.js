window.onload=function(){
    var nd1=new NumbericDisplay(data1);
}
var data1={
    char=1,
    // dot=false,
    // colon=false,
    color='#44e',
}
var NumbericDisplay=function(data){
    this.nums=[
        [0,2,3,4,5,6],          //0
        [4,6],                  //1
        [0,1,2,4,5],            //2
        [0,1,2,4,6],            //3
        [1,3,4,6],              //4
        [0,1,2,3,6],            //5
        [0,1,2,3,5],            //6
        [0,3,4,6],              //7
        [0,1,2,3,4,5,6],        //8
        [0,1,2,3,4,6],          //9        
    ]
    this.inter=[
        [7]                     //点
        [8,9]                   //冒号
    ]
    this.data=data;    
}
NumbericDisplay.prototype={
    inner:function(){
        
    }
}
