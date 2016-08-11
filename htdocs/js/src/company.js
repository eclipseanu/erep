peque.company = function ()
{
    'use strict';

    var init = function () {
        $('[data-action=create-company]').on("click", function () {

        });
    };

    var createInit = function ()
    {
        $('[data-action=show-company-options]').on("click", function () {
            var id = $(this).data("id");

            $(".company-qualities").hide();
            $('.company-qualities[data-id="' + id + '"]').show();
        });

        $('[data-action=buy-company]').on('click', function ()
        {
            var id = $(this).data("id"),
                quality = parseInt($(this).data("quality")),
                name = $(this).data("name");

            if (!id || !name || quality < 1) {
                return false;
            }

            peque.navigation.showConfirm("¿Are you sure to buy a " + name + "?", function ()
            {
                peque.api("company/create", {id: id, quality: quality}, function (data) {
                    if (data.error == 0) {
                        peque.navigation.redirect("/mycompanies");
                        return true;
                    } else if (data.error == 6) {
                        peque.navigation.showError("You dont have enough money");
                    } else {
                        peque.navigation.showError("internal error");
                    }
                });
            });
        });
    };

    return {
        init: init,
        createInit: createInit
    };
}();