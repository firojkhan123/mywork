import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
 class Datastore extends EventEmitter{
    constructor(){
        super()
        this.dataOne=''
        this.dataTwo=''
        this.dataThree=''
    }

    _setDataOne(data){
        this.dataOne=data;
        this.emit('change')
    }
    _getDataOne(){
        return  this.dataOne
    }
    _setDataTwo(data){
        this.dataTwo=data;
        this.emit('change')

    }
    _getDataTwo(){
        return  this.dataTwo;
    }
    _setDataThree(data){
        this.dataThree=data
        this.emit('change')

    }
    _getDataThree(){
        return  this.dataThree
    }
    _handleAction(action){
        switch(action.type){
            case "company" : {
                this._setDataOne(action.response);
                break
            }
            case "location" : {
                this._setDataTwo(action.response);
                break
            }
            case "contact" : {
                this._setDataThree(action.response);
                break
            }
            case "default" :{
                break;
            }
        }
       
    }

}
const temp=new Datastore;
dispatcher.register(temp._handleAction.bind(temp))
// console.log('value of dispatcher',temp)
export default temp;