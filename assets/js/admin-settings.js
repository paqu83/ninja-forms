jQuery(document).ready(function($) {
    $( '.js-delete-saved-field' ).click( function(){

        var that = this;

        var data = {
            'action': 'nf_delete_saved_field',
            'field': {
                id: $( that ).data( 'id' )
            },
            'security': nf_settings.nonce
        };

        $.post( nf_settings.ajax_url, data )
            .done( function( response ) {
                $( that ).closest( 'tr').fadeOut().remove();
            });
    });
    
    var currencySelect = $( 'select[id="ninja_forms[currency]"]' );
    var customCurRows  = $( 'tr[id="row_ninja_forms[currency_code]"], tr[id="row_ninja_forms[currency_symbol]"]' );
    
    function toggleCustomCur(){
        if( currencySelect.val() == 'add_custom_currency' ){
            customCurRows.fadeIn();
        }else{
            customCurRows.fadeOut();
        }
    }
    toggleCustomCur();
    
    currencySelect.change(function(){
        toggleCustomCur();
    });
});
