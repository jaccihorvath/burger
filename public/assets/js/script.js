$(function () {
    $('#devour-btn').on('click', function (event) {
        let id = $(this).data('id');

        let isDevoured = {
            devoured: true
        };

        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: isDevoured
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
            burger_name: $('#new-burger').val().trim(),
            devoured: 0
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