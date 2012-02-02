// Is this being used?
Ext.ns('Ext.ux');
Ext.ux.CustomSlider = Ext.extend(Object, {
    valueTextClass: 'x-slider-value-text',
    valueUnit: '',
    store: '',
    valueUnitPos: 'before',
    tooltipStyle: 'background-color: #FFF; text-align: center',
    showSliderBothEndValue: true,
    sliderEndValuePos: 'under',
    sliderEndValueStyle: 'color: black',
    maxValueEl: null,
    constructor: function (config) {
        Ext.apply(this, config);
        Ext.ux.CustomSlider.superclass.constructor.apply(this, arguments);
    },
    init: function (parent) {
        var me = this;
        parent.on({
            drag: {
                fn: function (slider, thumb, value) {                    
                    me.showSliderValue(this.valueTextEl, slider, thumb, value);
                }
            },
            dragend: {
                fn: function (slider, thumb, value) {                    
                    me.showSliderValue(this.valueTextEl, slider, thumb, value);
                }
            },
            afterrender: {
                fn: function (component) {                    
                    if (!this.valueTextEl) {
                        this.valueTextEl = component.getEl().createChild({
                            cls: me.valueTextClass,
                            // html: '<center style="width:100px">' + this.minValue + '<br/>' + me.valueUnit + '</center>'
							html: '<center style="width:100px">' + this.minValue + ' ' + me.valueUnit + '</center>'
                        });
                    }
                    if (me.showSliderBothEndValue) me.showSliderEndValue(this);
                }
            }
        });
    },
    showSliderValue: function (valueTextEl, slider, thumb, value) {
        if (this.valueUnitPos == 'before') {
            valueTextEl.setHTML(this.valueUnit + value);
        } else {
            // valueTextEl.setHTML('<center style="width:100px">' + value + '<br/>' + this.valueUnit + '</center>');
			valueTextEl.setHTML('<center style="width:100px">' + value + ' ' + this.valueUnit + '</center>');
        }

        var left = thumb.getEl().getX(),
        thumbWidth = thumb.getEl().getWidth(),
        thumbHeight = thumb.getEl().getHeight(),
        top = thumbHeight / 2,
        textWidth = valueTextEl.getWidth(),
        sliderLength = slider.getWidth();

        if (left > sliderLength - textWidth - thumbWidth) {
            left = left - textWidth - thumbWidth / 2;
        } else {
            left = left + thumbWidth / 2;
        }

        valueTextEl.setLeft(left);
        valueTextEl.setTop(top);
    },
    showSliderEndValue: function (slider) {
        var sliderPosX = slider.getThumb().getEl().getX();
        var minValueEl = slider.getEl().createChild();
        minValueEl.setHTML(slider.minValue);
        minValueEl.applyStyles('overflow:hidden;position:absolute');
        minValueEl.applyStyles(this.sliderEndValueStyle);

        var thumbHeight = slider.getThumb().getEl().getHeight();
        minValueEl.setLeft(sliderPosX - 205);
        if (this.sliderEndValuePos == 'above') {
            minValueEl.setTop(-4);
        } else {
            minValueEl.setTop(thumbHeight + 2);
        }

        var maxValueEl = slider.getEl().createChild();
        maxValueEl.setHTML(slider.maxValue);
        maxValueEl.applyStyles('overflow:hidden;position:absolute');
        maxValueEl.applyStyles(this.sliderEndValueStyle);

        var sliderLength = slider.getEl().getWidth();
        var maxTextWidth = maxValueEl.getWidth();
        maxValueEl.setLeft(sliderLength - maxTextWidth - 120);
        if (this.sliderEndValuePos == 'above') {
            maxValueEl.setTop(-4);
        } else {
            maxValueEl.setTop(thumbHeight + 2);
        }
    }
});