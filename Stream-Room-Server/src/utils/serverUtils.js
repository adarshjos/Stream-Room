import {APP_CONSTANTS} from "./constants";

export const serverUtils = {


    /*
    ID Generation  @returns {string}
     */
    generateId:()=>{
        let generatedVal='';
        let hexChars = '0123456789abcdef';
        for (let i = 0; i < 16; i += 1) {
            generatedVal += hexChars[Math.floor(Math.random() * 16)];
        }
        return generatedVal;
    },

    validateID:(id)=>{
        return typeof id ==='string'&&id.length===16;
    },

    validateVideoState:(state)=>{
        return typeof state==='string'&&(state===APP_CONSTANTS.PLAY || state ===APP_CONSTANTS.PAUSE);
    }

}