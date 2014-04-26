
Template.hello.nameForm = function() {
  return EasyForm.form({    
    'inputs': [
      {model: 'name'},
      {placeholder: 'Description of Whoever', model: 'description'},      
    ],
    'submitName' : 'Save',    
    'submitAction': function(event, template) {
      event.preventDefault();
      console.log(EasyForm.getValues(template));
    }
  });
};

Template.hello.contactDetailsForm = function() {
  return EasyForm.form({    
    'inputs': [
      {model: 'name'},
      {placeholder: 'Description of Whoever', model: 'description'},      
      {model: 'email', type: 'email'},
      {model: 'mobile'},
      {model: 'address'},
      {model: 'city', options: [{value:'Aucland'}, {value:'Wellington'}], type: 'dropdown'},
      {model: 'password', type: 'password'},
    ],
    'submitName' : 'Save',    
    'submitAction': function(event, template) {
      event.preventDefault();
      console.log(EasyForm.getValues(template));
    }
  });
};
