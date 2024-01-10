$(document).ready(function() {
    // Handle the "Learn More" button click
    $('.learn-more-btn').on('click', function() {
        // Get the content of the card associated with the clicked button
        var cardContent = $(this).closest('.card2').html();

        // Set the modal body content with the card content
        $('#cardModal1 .modal-body').html(cardContent);
        $('#cardModal2 .modal-body').html(cardContent);
        $('#cardModal3 .modal-body').html(cardContent);
        $('#cardModal4 .modal-body').html(cardContent);
        $('#cardModal5 .modal-body').html(cardContent);
        $('#cardModal6 .modal-body').html(cardContent);


        // Show the modal
        $('#myModal').modal('show');
        $('#myModal').modal('hide');

    });
});
