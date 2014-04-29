
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

Template.hello.person = function() {
  return { name: 'Bob', description: 'The Builder', email: 'bob@thebuilder.com'};
}

Template.hello.contactDetailsForm = function(data) {    
  return EasyForm.form({    
    'inputs': [
      {model: '_id', type: 'hidden'},
      {model: 'name'},
      {placeholder: 'Description of Whoever', model: 'description'},      
      {model: 'email', type: 'email'},
      {model: 'mobile', validate: EasyForm.phoneNumber, error: 'must only be digits'},
      {model: 'address', validate: EasyForm.mustBeAlphaNumeric, error: 'must be alpha'},
      {model: 'city', options: [{value:'Aucland'}, {value:'Wellington'}], type: 'dropdown'},
      {model: 'password', type: 'password'},
    ],
    'onValidateError' : function(input, value, target, context, template) {      
      var el = template.find('#' + input.id + '-error');
      if(el) $(el).show();                        
    },
    'onValidateOk' : function(input, value, target, context, template) {      
      var el = template.find('#' + input.id + '-error');
      if(el) $(el).hide();                        
    },
    'submitName' : 'Save',    
    'submitAction': function(event, template) {
      event.preventDefault();
      console.log(EasyForm.getValues(template));
      console.log(EasyForm.getChangedValues(template));
    }
  }, data);
};
