(function($, undefined){
    var _uid = 1,
        uid = function(){
            return _uid++;
        },
        defaultElement = {
            button: '<button>',
            checkbox: '<input type="checkbox" />',
            radio: '<input type="radio" />',
            input: '<input type="button" />'
        },
        radioGroup = function( radio ) {
            var name = radio.name,
                form = radio.form,
                radios = $( [] );
            if ( name ) {
                if ( form ) {
                    radios = $( form ).find( "[name='" + name + "']" );
                } else {
                    radios = $( "[name='" + name + "']", radio.ownerDocument );
                }
            }
            return radios;
        };

    $.ui.button.register(function(){
        return {
            pluginName: 'input',
            _init: function(){
                var data = this._data;
                this._initOrg();
                (data.type == 'checkbox' || data.type =='radio') && this.root().prop('checked', !!data.selected);
            },

            _createDefEL: function(){
                return $(defaultElement[this._data.type]) || this._createDefELOrg();
            },

            _detectType: function(){
                var $el = this.root();
                return $el.is('[type=checkbox]')?'checkbox': $el.is('[type=radio]') ? 'radio' : $el.is("input")? 'input': this._detectTypeOrg();
            },

            _prepareBtnEL: function(mode){
                var data = this._data, _id, btnEl, $el, labelSelector;
                if(data.type == 'checkbox' || data.type == 'radio') {
                    $el = this.root();
                    $el.addClass('ui-helper-hidden');
                    if(mode == 'create') {
                        if(!(_id = data.attributes && data.attributes.id)){
                            _id = 'input_'+uid();
                            $.extend(data.attributes || (data.attributes = {}), {id: _id});
                        }
                        btnEl =  $('<label for="'+_id+'"></label>');
                    } else {
                        labelSelector = "label[for='" + $el.attr("id") + "']";
                        btnEl = $el.siblings(labelSelector);
                        if(!btnEl.length){
                            btnEl = $el.parent().find(labelSelector);
                        }
                        data.selected = data.selected || $el.prop('checked');
                    }
                }
                return btnEl?btnEl:this._prepareBtnELOrg(mode);
            },
            _prepareDom: function(mode){
                var data = this._data, $el;
                if(data.type == 'input'){
                    $el = this.root();
                    data.label && $el.val(data.label);
                    if(mode != 'create'){
                        data.label = $el.val();
                    }
                } else return this._prepareDomOrg(mode);
            },

            _setSelected: function(val){
                var data = this._data, type = data.type;
                data.selected != val && (type == 'checkbox' || type == 'radio') && this._el.prop('checked', val);
                return this._setSelectedOrg(val);
            },

            _eventHandler: function(e){
                var data = this._data, radio;
                if(!data.disabled) {
                    if(data.type == 'checkbox'){
                        data._buttonElement.toggleClass( "ui-state-active" );
                        data.selected = !data.selected;
                    } else if(data.type == 'radio'){
                        data._buttonElement.addClass( "ui-state-active" );
                        data.selected = true;
                        radio = this._el[0];
                        $.each(radioGroup( radio )
                            .not( radio )
                            .map(function() {
                                return $( this ).button( "this" );
                            }), function(){
                            if(!this instanceof $.ui.button)return ;
                            this.unselect();
                        });
                    }
                }
                return this._eventHandlerOrg(e);
            },
            setIcon: function(icon) {
                var data = this._data, text = data.label;
                if(data.icon != icon && data.type!= 'input'){
                    if(data.icon){
                        if(!icon){
                            data._iconSpan.remove();
                            data._iconSpan = null;
                            data._buttonElement.removeClass(text?'ui-button-text-icon':'ui-button-icon-only').addClass('ui-button-text-only');
                        } else {
                            data._iconSpan.removeClass('ui-icon-'+data.icon).addClass('ui-icon-'+icon);
                        }
                    }else {
                        data._iconSpan = $('<span class="ui-icon ui-icon-'+icon+'"></span>').appendTo(this._buttonElement);
                        data._buttonElement.removeClass('ui-button-text-only').addClass(text?'ui-button-text-icon':'ui-button-icon-only');
                    }
                    data.icon = icon;
                }
                return this;
            }
        };
    });
})(Zepto);