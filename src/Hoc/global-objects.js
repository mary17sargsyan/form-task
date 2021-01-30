export const firstStepControls = {
  controls: {

          firstName: {
              elementType: 'input',
              elementConfig: {
                  type: 'text',
                  placeholder: 'First Name...'
              },
              value:  '',
              rules:{
                max: 15,
                min: 2
              },
              valide: true
          },
          lastName: {
              elementType: 'input',
              elementConfig: {
                  type: 'text',
                  placeholder: 'Last Name...'
              },
              value: '',
              rules:{
                max: 20,
                min: 2
              },
              valide:true
              
          },
          country: {
              elementType: 'select',
              elementConfig: {
                  type: 'text',
                  options:[],
              },
              value:  '',
              rules:{
                max: 50,
                min: 2
              },
              valide: true
              
          },
      city:{
          elementType: 'input',
          elementConfig: {
              type: 'text',
              placeholder: 'City...'
          },
          value:  '',
          rules:{
            max: 15,
            min: 2
          },
          valide: true
      
    },
    address:{
      elementType: 'input',
      elementConfig: {
          type: 'text',
          placeholder: 'Address...'
      },
      value: '',
      rules:{
        max: 100,
        min: 5
      },
      valide: true
  },
  postalCode:{
      elementType: 'input',
      elementConfig: {
          type: 'text',
          placeholder: 'Postal code...'
      },
      value: '',
      rules:{
        max: 4,
        min: 5
      },
      valide: true
  },

  dataForShipping:{
      elementType: 'checkbox',
      elementConfig: {
          type: 'checkbox',
      },
      label:"Use filled data for shipping",
      value: true,
      rules:{
       
      },
     
    },
    shippingCountry: {
      elementType: 'select',
      elementConfig: {
          type: 'text',
          options:[],
      },
      value:  '',
      rules:{
        max: 50,
        min: 2
      },
      valide: true
      
  },
  shippingCity: {
      elementType: 'input',
      elementConfig: {
          type: 'text',
          placeholder: 'Shipping city...'
      },
      value:  '',
      rules:{
        max: 15,
        min: 2
      },
      valide: true
  },
  shippingAddress: {
      elementType: 'input',
      elementConfig: {
          type: 'text',
          placeholder: 'Shipping address...'
      },
      value: '',
      rules:{
        max: 100,
        min: 5
      },
      valide:true
      
  },
  shippingPostalCode:{
    elementType: 'input',
    elementConfig: {
        type: 'text',
        placeholder: 'Shipping postal code...'
    },
    value: '',
    rules:{
      max: 4,
      min: 5
    },
    valide: true
},

}


}


export const secondStepControls ={
  email: {
    elementType: 'input',
    elementConfig: {
        type: 'text',
        placeholder: 'E:mail...'
    },
    value:  '',
    rules:{
      max: 50,
      min: 2
    },
    valide: true
},
password: {
    elementType: 'input',
    elementConfig: {
        type: 'password',
        placeholder: 'Password...'
    },
    value: '',
    rules:{
      max: 50,
      min: 2
    },
    valide:true
    
},
repeatPassword: {
    elementType: 'input',
    elementConfig: {
        type: 'password',
        placeholder: 'Please repeat password...'
    },
    value:  '',
    rules:{
      max: 50,
      min: 2
    },
    valide: true
    
},
standartPackage:{
  elementType: 'checkbox',
  elementConfig: {
      type: 'radio',
  },
  label:"Standart paskage",
  value: false,
  
 
},

premiumPackage: {
  elementType: 'checkbox',
  elementConfig: {
      type: 'radio',
  },
  label:"Premium package",
  value:  false,  
},
}




export const thirdStepControls={
  card: {
    elementType: 'input',
    elementConfig: {
        type: 'text',
        placeholder: 'xxxx xxxx xxxx xxxx'
    },
    cardType:'',
    value:'',
    valide: true
},
cardName: {
    elementType: 'input',
    elementConfig: {
        type: 'text',
        placeholder: 'Full card name...'
    },
    value: '',
    rules:{
      max: 20,
      min: 2
    },
    valide:true
    
},
cvc:{
elementType: 'input',
elementConfig: {
    type: 'text',
    placeholder: 'CVC...'
},
value:  '',
rules:{
  max: 4,
  min: 0
},
valide: true

},
expiryDate:{
  elementType: 'input',
  elementConfig: {
      type: 'date',
      placeholder: 'Expiry date ex: 12/01/2025'
  },
  value:  '',
  rules:{
    max: 10,
    min: 8
  },
  valide: true
  
  },

}

/*




export const checkValidity=(value, controls, id,  countryList)=>{

if(id==='card'){
 let cardType= creditCardType(value);
 if(cardType){
    return cardType;
 }
}

    if(id==='country' || id==='shippingCountry'){
        for(let key in countryList){
            if(countryList[key].name === value){
                return true;
            }
        }
    }

    if(id==='postalCode' || id==='shippingPostalCode'){
        let code;
        for(let key in countryList){
        if(controls.country.value){
            if( countryList[key].name===controls.country.value){
                let postalCodes=countryList[key].postalCode;
                let found = postalCodes.find(element => element == value);
                if(found){
                    code=true;
                }
            }
        }else{
            let postalCodes=countryList[key].postalCode;
            let found = postalCodes.find(element => element == value);
            if(found){
                code=true;
            }
          
        } 
    }
        return code;
    }


  if(id==='repeatPassword' ){
      if(controls['password'].value.length>0){
          if(controls['password'].value===value){
              return true
          }else{
              return false
          }
      } else{
          return true
      } 
  }
  
  
if(id==='firstName' || id==='lastName'  || id==='city' || id==='address'   || id==='shippingAddress' || id==='shippingCity'  || id==='password' || id==='repeatPassword' || id==='cardName' || id==='cvc' ){
    
        if( value.length <= controls[id].rules.max && value.length>=controls[id].rules.min ){
            return true;
        }else{
            return false
        }
    }
    if(id === 'email'){ 
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)){
            if(value.length<=controls[id].rules.min || value.length>= controls[id].rules.max){
                return(false)
            } else{
                return(true)
            }
         
        }else{
            return false
        }
      
    }

}
export const updateObject = (oldObject, updatedValues)=>{
    return{
        ...oldObject,
        ...updatedValues

    };
};
export  const changedValueHandler = (controls, controlName, event, countryList)=>{
    let updateControl;
    let value=event.target.value;
        
    if(controls[controlName].elementType === 'checkbox' ){
        controls[controlName].value?value=false:value=true
    }else{value=event.target.value};
/*
    if(controlName === 'cvc'){
       if(typeof(value)==='string'){
        value.substr(0, -1);
   console.log('val',value)
       }
    }
   */

   /*
  updateControl = updateObject(controls, {...controls,
    [controlName]: updateObject(controls[controlName],{
       value: event.target.value,
       valide: checkValidity(value, controls, controlName, countryList)
     })
  });

  
if(controlName==='country' && controls['postalCode'].value ){
         updateControl = updateObject(updateControl, {...updateControl,
             ['postalCode']: updateObject(controls['postalCode'], {
                 value: updateControl['postalCode'].value,
                valide: checkValidity(updateControl['postalCode'].value, updateControl,'postalCode', countryList)
              })
           })
 }



 if(controlName==='password'){
     if(updateControl['repeatPassword'].value.length>0){
        let checked=upt(updateControl, 'repeatPassword', ''  )
        updateControl=checked;
     }
   
  }
  
  
  
  
  console.log('1',updateControl)
  return updateControl;
  
  }
  
  export const upt =(controls, controlName, event, countryList)=>{
  let  upt = updateObject(controls, {...controls,
    [controlName]: updateObject(controls[controlName], {
        value: event,
       valide: checkValidity(controls[controlName].value, controls, controlName, countryList)
     })
  })
  return upt;
  };


  export const creditCardType=(cc) =>{
    let amex = new RegExp('^3[47][0-9]{13}$');
    let visa = new RegExp('^4[0-9]{12}(?:[0-9]{3})?$');
    let cup1 = new RegExp('^62[0-9]{14}[0-9]*$');
    let cup2 = new RegExp('^81[0-9]{14}[0-9]*$');
   
    let mastercard = new RegExp('^5[1-5][0-9]{14}$');
    let mastercard2 = new RegExp('^2[2-7][0-9]{14}$');
   
    let disco1 = new RegExp('^6011[0-9]{12}[0-9]*$');
    let disco2 = new RegExp('^62[24568][0-9]{13}[0-9]*$');
    let disco3 = new RegExp('^6[45][0-9]{14}[0-9]*$');
    
    let diners = new RegExp('^3[0689][0-9]{12}[0-9]*$');
    let jcb =  new RegExp('^35[0-9]{14}[0-9]*$');
   
   
    if (visa.test(cc)) {
      return 'VISA';
    }
    if (amex.test(cc)) {
      return 'AMEX';
    }
    if (mastercard.test(cc) || mastercard2.test(cc)) {
        console.log('masterLilit')
      return 'MASTERCARD';
    }
    if (disco1.test(cc) || disco2.test(cc) || disco3.test(cc)) {
      return 'DISCOVER';
    }
    if (diners.test(cc)) {
      return 'DINERS';
    }
    if (jcb.test(cc)) {
      return 'JCB';
    }
    if (cup1.test(cc) || cup2.test(cc)) {
      return 'CHINA_UNION_PAY';
    }
    return undefined;
  }
  




*/