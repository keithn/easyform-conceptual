
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
