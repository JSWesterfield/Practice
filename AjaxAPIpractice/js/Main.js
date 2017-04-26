$(function () {
    var $orders = $('#orders');
    var $name = $('#name');
    var $drink = $('#drink');

    function addOrder(order) {
        $orders.append('<li>name: '+ order.name +', drink: '+ order.drink + '</li>');
    }

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
            name: $name.val(),
            drink: $drink.val(),
        };

        $.ajax({
            type: 'POST',
            url: '/api/orders',
            data: order,
            success: function(newOrder) {
                $orders.append('<li>name: '+ newOrder.name +', drink: '+ newOrder.drink + '</li>');
            },
            error: function() {
                alert('error saving order');
            }
        });

    })

});