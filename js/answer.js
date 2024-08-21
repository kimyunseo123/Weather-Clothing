$(document).ready(function() {
            // Handle click on .write-item
            $('.write-item').on('click', function() {
                var id = $(this).data('id');
                $('.write-detail').hide(); // Hide all detail sections
                $('#detail-' + id).show(); // Show the clicked item's detail
            });

            // Handle click on close button
            $('.write-detail .close').on('click', function() {
                $(this).closest('.write-detail').hide(); // Hide the detail section
            });
        });