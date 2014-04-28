EasyForm = { id: 0};

EasyForm.getValues = function(template) {
  var d = {}
  _.each(template.data.inputs, function(i) {    
    d[i.model] = template.find('#' + i.id).value;
  });  
  return d;
};

EasyForm.setupEvents = function(template, self) {
  var evs = {};
  evs['click #' + self.data.submitId] = self.data.submitAction;
  template.events(evs);  
};

EasyForm.form=  function(f, d) {
  _.each(f.inputs, function(i){
    if(!i.id) i.id = 'easyform-'+EasyForm.id++;
    if(!i.type) i.type = 'text';
    if(!i.label && i.model) i.label = i.model.charAt(0).toUpperCase() + i.model.slice(1);;
    if(!i.placeholder) i.placeholder = i.label;
    if(d && d[i.model]) i.value = d[i.model];
  });
  if(!f.submitId) f.submitId = 'easyform-' + EasyForm.id++;
  return f;  
}

UI.registerHelper('easyFormIsInput', function(inputType) {    
    return this.type === 'dropdown';
});

UI.registerHelper('easyFromIsInputVisible', function() {    
    return this.type !== 'hidden';
});

