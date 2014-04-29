EasyForm = { id: 0};

if(Meteor.isClient) {
  EasyForm.getValues = function(template) {
    var d = {}
    _.each(template.data.inputs, function(i) {       
      var el =  template.find('#' + i.id);
      if(el) {        
        d[i.model] = template.find('#' + i.id).value;  
      }      
    });  
    return d;
  };

  EasyForm.getChangedValues = function(template) {
    var d = {}
    _.each(template.data.inputs, function(i) {       
      var el =  template.find('#' + i.id);
      if(el) {        
        if((el.attributes['data-original'] && el.attributes['data-original'].value != el.value) 
            || (!el.attributes['data-original'] && el.value)
            || i.model==='_id') {
          d[i.model] = el.value;  
        }
      }
      
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
    return f;  2
  }

  UI.registerHelper('easyFormIsInput', function(inputType) {    
    return this.type === 'dropdown';
  });

  UI.registerHelper('easyFormIsInputVisible', function() {    
    return this.type !== 'hidden';
  });
}

if(Meteor.isServer) {
  EasyForm.update = function(col, id, changed) {
    // 
  }
}