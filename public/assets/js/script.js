$(function () {
    $('#devour-btn').on('click', function (event) {
        let id = $(this).data('id');
        let isDevoured = $(this).data('devoured');

        let nowDevoured = {
            devoured: isDevoured
        };

        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: nowDevoured
        }).then(
            function () {
                console.log('this burger is now devoured!');
                location.reload();
            }
        );
    });

    $('#add').on('click', function (event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $('#burger').val().trim(),
            devoured: false
        };

        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        );
    });
});