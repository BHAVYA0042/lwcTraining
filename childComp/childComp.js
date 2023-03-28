import { api, LightningElement,track } from 'lwc';

export default class ChildComp extends LightningElement {
    @api peopleData;


    connectedCallback(){
        console.log('This data is coming form parent',this.peopleData);
    }

    handleChange(){
        console.log('button clicked');
        const updatevent= new CustomEvent('updatevent',{
            detail:{
                value:this.peopleData[0].Age +5
            }
        });
        this.dispatchEvent(updatevent);
    }
}