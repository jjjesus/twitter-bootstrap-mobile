jQuery(function() {
    jQuery('div.btn-list[data-toggle-name=*]').each(function() {
        var group   = jQuery(this),
            form    = group.parents('form').eq(0),
            name    = group.attr('data-toggle-name'),
            type    = group.attr('data-toggle'),
            hidden  = jQuery('input[name="' + name + '"]', form),
            buttons = group.find('.btn');
    
        if (group.hasClass('buttons-checkbox-list'))
        {
          hidden = jQuery('input[name="' + name + '[]"]', form);
          var random = hidden.first();
        }
    
        buttons.bind('tap', function () {
            if (jQuery(this).parents('.btn-list').hasClass('buttons-checkbox-list'))
            {
                var data_val = jQuery(this).data('value');
                var clone = random.clone();
                var existing_input = jQuery('#hidden-fields input[name="' + name + '[]"][value="' + data_val + '"]');
            
                if (existing_input.length)
                {
                  existing_input.remove();
                  jQuery('#hidden-fields input[name="' + name + '[]"][value=""]').remove();
                }
                else
                {
                  clone.val(data_val);
                  jQuery('#hidden-fields', form).append(clone);
                  if ('' == random.val())
                  {
                    random.remove();
                  }
                }
            }
            else
            {
                hidden.val(jQuery(this).data('value'));
            }
        });
    });
});
