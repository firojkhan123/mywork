import dispatcher from '../dispatcher';

const Utils = {
    _getDataOne : function() {
        dispatcher.dispatch({type:'company'
            ,response:'Happay'})   
    },
    _getDataTwo : function() {
        dispatcher.dispatch({type:'location',
            response:'Banglore'})
    },
    _getDataThree : function() {
        dispatcher.dispatch({type: 'contact'
            ,response:'9839390080'})
    },
};


export default Utils;