import { LightningElement,track } from 'lwc';

export default class ParentComp extends LightningElement {
    @track showComp=false;
    @track dataList=[];

    connectedCallback(){
        this.dataList=[        
            {
                'Name':'John',
                'Age':10
            },
            {
                'Name':'Jone',
                'Age':15
            },
            {
                'Name':'Jacob',
                'Age':17
            }
        ]
    }

    toggleChild(){
        this.showComp=!this.showComp
    }
    handleEvent(event){
        var johnObj=this.dataList.find((item)=>item.Name='John');
        johnObj.Age=event.detail.value;
        console.log('button from child has been clicked');
    }
}