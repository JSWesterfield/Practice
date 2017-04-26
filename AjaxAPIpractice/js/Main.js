$(function () {
    var $orders = $('#orders');
    var $name = $('#name');
    var $drink = $('#drink');

    $.ajax({
        type: 'GET',
        url: '/api/orders',
        success: function(orders) {
            $.each(order, function(i, order) {
                $orders.append('<li>name: '+ order.name +', drink: '+ order.drink + '</li>');
            });            
        },
        error: function() {
            alert('error loading orders');
        }
    });

    $('#add-order').on('click', function() {

        var order = {
            name: $name.val();
            drink: $drink.val();
        }

    })

});