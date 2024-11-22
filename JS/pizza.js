
/**             ---- GET_RECEIPT_FUNCTION ----
 * This function initializes the String so it can get passed
 * from function to function, ascendingly line by line into
 * a full receipt
 */
function getReceipt()
{
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName( "size" );

    // Iterates through pizza size
    for ( var i = 0; i < sizeArray.length; i++ )
    {
        if ( sizeArray[ i ].checked )
        {
            var selectedSize = sizeArray[ i ].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }

    if ( selectedSize === "Personal Pizza" )
    {
        sizeTotal = 8;
    }
    else if ( selectedSize === "Small Pizza" )
    {
        sizeTotal = 10;
    }
    else if ( selectedSize === "Medium Pizza" )
    {
        sizeTotal = 14;
    }
    else if ( selectedSize === "Large Pizza" )
    {
        sizeTotal = 16;
    }
    else if ( selectedSize === "Extra Large Pizza" )
    {
        sizeTotal = 18;
    }

    runningTotal = sizeTotal;
    console.log( selectedSize + " = $" + sizeTotal + ".00" );
    console.log( "size text1: " + text1 );
    console.log( "Subtotal: $" + runningTotal + ".00" );

    // These variables will get passed on to each function
    getTopping( runningTotal, text1 );
}

/**             ---- GET_TOPPING_FUNCTION ---- */
function getTopping( runningTotal, text1 )
{
    var toppingTotal = 0;

    // Empty Array to store my list of toppings
    var selectedTopping = [];

    var toppingArray = document.getElementsByClassName( "toppings" );

    // Iterates through my list of toppings
    for ( var j = 0; j < toppingArray.length; j++ )
    {
        if ( toppingArray[ j ].checked )
        {
            // Push my toppings into my empty array 
            selectedTopping.push( toppingArray[ j ].value );

            console.log( "Selected Toppings Item: (" + toppingArray[ j ].value + ")" );
            text1 = text1 + toppingArray[ j ].value + "<br>"
        }
    }

    var toppingCount = selectedTopping.length;

    if ( toppingCount > 1 )
    {
        toppingTotal = ( toppingCount - 1 );
    }
    else
    {
        toppingTotal = 0;
    }

    runningTotal = ( runningTotal + toppingTotal );

    console.log( "Total Selected Topping Items: " + toppingCount );
    console.log( toppingCount + "Topping - 1 Free Topping = " + "$" + toppingTotal + ".00" );
    console.log( "Topping text1:" + text1 );
    console.log( "Purchase Total: " + "$" + runningTotal + ".00" );

    document.getElementById( "showText" ).innerHTML = text1;
    document.getElementById( "totalPrice" ).innerHTML = "<h3>Total: <strong>$" 
    + runningTotal + ".00" + "</strong></h3>";

}
