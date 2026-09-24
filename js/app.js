$(document).ready(() => {

    console.log('jQuery is working!');

});


$(document).ready(() => {

    $('#searchMessage').hide();

    $('#searchButton').on('click', () => {
        $('#searchMessage').toggle();
    });

});

$(document).ready(() => {

    $('#searchMessage').hide();

    $('#searchButton').on('click', () => {
        $('#searchMessage').toggle();
    });


    $('#successMessage').hide();

    $('#addCatchButton').on('click', () => {
        $('#successMessage').show();
    });

});