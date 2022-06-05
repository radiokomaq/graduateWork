import {makeAutoObservable} from "mobx"



class Conteiner{
    count =1
    ms=[]
    constructor(){
        makeAutoObservable(this)
    }
increment(){
this.count = this.count+1
}
decriment(){

    this.count = this.count-1
    if(this.count<1){
        this.count=1 
    }
}
remove_increment(){
    this.count=1 
}
dobav(e){
this.ms=[...this.ms,e+'место,']
}
removVe(e){
    this.ms =  this.ms.filter(ms=> ms !==e+'место,')
    // for(let i=0; i<=this.ms.length; i++){
    //     if(e==this.ms[i]){
    //         console.log('do' +this.ms);
    //         this.ms.splice(i,1)

    //         console.log('posle'+ this.ms);
    //     }
    // }


}
fullremove(){
    this.ms =  this.ms.filter(ms=> ms !==ms)
}

}

export default new Conteiner()


