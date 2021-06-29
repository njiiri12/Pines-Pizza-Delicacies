$(document).ready(function () {

    $('.summary').hide();
    $('.cdata-overlay').hide();
    $('.deliver').hide();
    $('.pickup').hide();
  
    $("#checkout").click(function (event) {
      event.preventDefault()
        let flavour = $(".flavour option:selected").val();
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        let number = $("#number").val();
        console.log(size);
  
      
        let order = (f, s, c, t, n, total) => {
            return {f, s, c, t, n, total};
        };
  
        
        let price, totalPrice;
        switch (size) {
            case size = "regular":
                totalPrice = 400;
                break;
              case size = "medium":
                totalPrice = 700;
                break;
              case size = "large":
                totalPrice = 1000 ;
                break;
                
        }
        switch (topping) {
          
            case topping = "olives":
                totalPrice = totalPrice + 100;
                break;
            case topping = "pineapple":
                totalPrice = totalPrice + 100;
                break;
            case topping = "sweetcorn":
                totalPrice = totalPrice + 100;
                break;
            case topping = "macon":
                totalPrice = totalPrice + 100;
                break;
            case topping = "mince":
                totalPrice = totalPrice + 100;
                break;
  
        }
  
        switch (crust) {
          case crust = "thin":
              totalPrice = totalPrice + 100;
              break;
          case crust = "thin":
              totalPrice = totalPrice + 150;
              break;
          case crust = "thin":
              totalPrice = totalPrice + 180;
              break;
          case crust = "thin":
              totalPrice = totalPrice + 280;
              break;
        }
  
        let cost = (totalPrice * number)
  
        let newOrder = order(flavour, size, crust, topping, number, cost);
        
   
        $('.summary').slideDown(2000);
        $('.cdata-overlay').slideUp();
        $('#list').slideDown();
        $('.deliver').show(1000);
        $('.pickup').show(1000);
  
        $('#list').text(" ");
        $("#list").append("<br>" + "Flavour :   " + newOrder.f + "<br>" + "Size :   "
            + newOrder.s + "<br>" + "Crust :     "
            + newOrder.c + "<br>" + "Toppings :     "
            + newOrder.t + "<br>" + " Number of pizzas :    "
            + newOrder.n + "<br>" + "Total Price :  "
            + newOrder.total + "<br><br>").css('font-family', 'Times New Roman').css('font-size', '24px');
     
    });
    
    $(".deliver").click(function () {
        $('.summary').slideUp();
        $('#list').slideUp();
        $('.summary').text("Provide location details").slideDown();
        $('.deliver').hide(1000);
        $('.pickup').hide(1000);
        $('.cdata-overlay').slideDown();
    });
  
  
    $(".pickup").click(function () {
  
    });
  
    $(function () {
        $.scrollify.move('#sum-order');
    });
  });
  