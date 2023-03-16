//saturdayFun function
function saturdayFun(action){
    if(action==null){
    return 'This Saturday, I want to roller-skate!'
    }else{
    return `This Saturday, I want to ${action}!`
    }
}
saturdayFun();
//mondayWork function
function mondayWork(string){
    if(string==null){
        return 'This Monday, I will go to the office.'
    }else{
        return `This Monday, I will ${string}.`
    }
}
mondayWork();
//wrapAdjective function
function wrapAdjective(style){
    if(style=='*'){
        return function(){
            return `You are ${style}a hard worker${style}!`
        }
    }else if(style=='||'){
        return function(sentence){
            return `You are ${style}a dedicated programmer${style}!`
        }
    }
}