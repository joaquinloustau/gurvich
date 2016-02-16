$(document).ready( function() {
    $('.direct-upload').each( function() {
        var form = $(this);

        form.fileupload({
            url: form.attr('action'),
            type: 'POST',
            datatype: 'xml',
            add: function (event, data) {

                // Message on unLoad.
                window.onbeforeunload = function() {
                    return 'You have unsaved changes.';
                };

                // Submit
                data.submit();
            },
            send: function(e, data) {
                // onSend
            },
            progress: function(e, data){
                // This is what makes everything really cool, thanks to that callback
                // you can now update the progress bar based on the upload progress.
                var percent = Math.round((data.loaded / data.total) * 100);
                $('.bar').css('width', percent + '%');
            },
            fail: function(e, data) {
                // Remove 'unsaved changes' message.
                window.onbeforeunload = null;
            },
            success: function(data) {
                // onSuccess
            },
            done: function (event, data) {
                // Fill the name field with the file's name.
                $('#upload_original_name').val(data.originalFiles[0].name);
                $('#upload_custom_name').val(data.originalFiles[0].name);
            },
        });
    });
});