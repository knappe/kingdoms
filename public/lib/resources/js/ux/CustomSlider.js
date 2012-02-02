app.views.CustomSlider = Ext.extend(Ext.form.Slider, {
	dirty    : false,
    renderTpl: [
        '<tpl if="label">',
            '<div class="x-form-label"><span>{label}</span></div>',
        '</tpl>',
        '<div class="x-form-label cslider-value"><span>{value}</span></div>',
        '<tpl if="fieldEl">',
            '<div class="hbox flex1">',
                '<div class="cslider-parent">',
                '</div>',

                '<div id="{inputId}" name="{name}" class="flex1 {fieldCls}"',
                    '<tpl if="tabIndex">tabIndex="{tabIndex}"</tpl>',
                    '<tpl if="style">style="{style}" </tpl>',
                '/></div>',
        
                '<div class="cslider-parent" style="right: 2px;">',
                '</div>',
            '</div>',
        ,'</tpl>'
    ],

    /**
     * @private
     */
    initRenderData: function() {
        app.views.CustomSlider.superclass.initRenderData.apply(this, arguments);

        Ext.applyIf(this.renderData, {
            minValue        :   this.minValue,
            maxValue        :   this.maxValue
        });

        return this.renderData;
    },

    constructor: function() {
        app.views.CustomSlider.superclass.constructor.apply(this, arguments);
        this.on('drag', this.updateValue, this );
        this.on('change', this.updateValue, this );
    },

    updateValue: function(slider, thumb, value, oldValue) {
    	var sliderValue = slider.getEl().down('div.cslider-value');
    	if(oldValue !== "") {
    		this.dirty = true;
    	}
      sliderValue.update(value);
    },
    
    getValue : function() {
    	if(this.dirty) {
    		return this.getThumb().getValue();
    	} else { 
    		return '';
    	}
    },
    
    setValue : function(value, animationDuration, moveThumb) {
      if (this.store == undefined || this.store == null)
      {
        console.log("Warning: A store is required when instantiating a customslider.")
      }
      else
      {
        var record = app.stores[this.store].findRecord('job_id', app.currentJob);
        if((record && record.get(this.name) != "") || this.dirty) {
          if( typeof moveThumb == 'undefined') {
            moveThumb = true;
          }
          moveThumb = !!moveThumb;

          //TODO: this should accept a second argument referencing which thumb to move
          var thumb = this.getThumb(), oldValue = thumb.getValue(), newValue = this.constrain(value);

          if(this.fireEvent('beforechange', this, thumb, newValue, oldValue) !== false) {
            if(moveThumb) {
              this.moveThumb(thumb, this.getPixelValue(newValue, thumb), animationDuration);
            }

            thumb.setValue(newValue);
            this.doComponentLayout();

            this.fireEvent('change', this, thumb, newValue, oldValue);
          }

          return this;
        }
      }
    }
});

Ext.reg('customslider', app.views.CustomSlider);