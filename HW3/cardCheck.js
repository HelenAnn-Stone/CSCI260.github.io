function cardCheck() {

    var cardNumber = document.forms[0].text.value;

    var total = 0;

    for (i = 0; i < cardNumber.length; i++) {

        if (i % 2 == 0) {

            x = parseInt(cardNumber.slice(i, i + 1) * 2);

            if (x >= 10) {

                total = total + parseInt(x.toString().slice(0, 1)) + parseInt(x.toString().slice(1, 1));

            } else {

                total = total + x;

            }

        } else {

            total = total + parseInt(cardNumber.slice(i, i + 1));

        }

    }

    if (total % 10 == 0) {

        alert("Valid");

        //return true;

    } else {

        alert("Invalid");

        //return false;

    }

}