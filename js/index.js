isRepeated = (value) => {
    let repeated = false;
    $(".itemShop").each(function() {
        repeated |= ($(this).text() === value);
    })
    return repeated;
}

$(document).ready(function() {
    $(".agregar").click(function(event) {
        event.preventDefault();
        if ($("#newText").val() !== "") {
            if (!isRepeated($("#newText").val())) {
                texto = $("#newText").val();
                var newElement = `<div>
                                    <li class="lis">
                                        <p class="itemShop">${texto}</p>
                                        <button class="checar">Check</button>
                                        <button class="del">Delete</button>
                                    </li>
                                </div>`
                $(".Lista").append(newElement);
            } else {
                alert("You are trying to insert a repeated elmenet, ARE U CRAzy¿¿")
            }
            $("#newText").val('');
        }
    })

    $("ul").on("click", ".checar", function(event) {
        event.preventDefault();
        ($(this).parent().hasClass("chec")?
        $(this).parent().removeClass("chec") : $(this).parent().addClass("chec"));
    })  

    $("ul").on("click", ".del", function(event) {
        event.preventDefault();
        $(this).parent().parent().remove();
    })
})

