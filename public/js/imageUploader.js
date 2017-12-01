var imgToChange = undefined;

function openModal(img) {

    // Set imgToChange when opening modal
    imgToChange = img;
    // $('#imgLoad').attr('data-url', '/upload/' + imgToChange);
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
        }
    });
}

$(document).ready(function () {
    // Resetting imgToChange when modal is closes
    $('#changeImg').on('hide.bs.modal', function () {
        imgToChange = undefined;
    });
});
