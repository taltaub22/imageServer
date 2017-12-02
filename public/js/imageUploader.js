var imgToChange = undefined;

function openModal(img) {
    // Set imgToChange when opening modal
    imgToChange = img;
    $('#changeImg').modal('show');
}

function saveImage() {
    let form = new FormData();
    form.append('image', $('#imgLoad')[0].files[0]);
    $.ajax({
        type: 'POST',
        url: "/upload/" + imgToChange,
        data: form,
        contentType: false,
        processData: false,
        success: function (data) {
            $('#changeImg').modal('hide');
            $('#imgLoad').val(undefined);
        },
        error: function (err) {
            alert("There was an error with the file you tried to upload,\n please try again.")
        }
    });
}

