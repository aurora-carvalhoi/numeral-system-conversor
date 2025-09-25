/*developed by Aurora Carvalho, do not remove the credits*/

if (!location.hash) {

    /*forces the page open in the decimal section if there's no hash in the url*/

    location.hash = "#decimal"
}

/*clearing fields and error messages from previous conversions when changing section*/

function clearFields() {
    ipt_decimal.value = ""
    dc_binary_output.innerHTML = ""
    dc_octal_output.innerHTML = ""
    dc_hexadecimal_output.innerHTML = ""

    ipt_binary.value = ""
    bi_decimal_output.innerHTML = ""
    bi_octal_output.innerHTML = ""
    bi_hexadecimal_output.innerHTML = ""

    ipt_octal.value = ""
    oc_decimal_output.innerHTML = ""
    oc_binary_output.innerHTML = ""
    oc_hexadecimal_output.innerHTML = ""

    ipt_hexadecimal.value = ""
    hex_decimal_output.innerHTML = ""
    hex_binary_output.innerHTML = ""
    hex_octal_output.innerHTML = ""

    error_binary.style.display = "none"
    error_octal.style.display = "none"
    error_hex.style.display = "none"
}

/*General converter function for all sections. 
The "radix" parameter indicates which base's logic to apply.
The logic for each base is defined at the onclick attribute.*/

function convert(radix) {
    if (radix === 'decimal') {

        let decimal = ipt_decimal.value

        /* Regex used to validate the input.
        It ensures the string contains only valid characters for the given base
        ^ ^ = start of the string, $ = end of the string, [ ] = allowed characters, + = one or more repetitions*/

        if (/^[0-9]+$/.test(decimal)) {

            let decimal = parseInt(ipt_decimal.value)

            dc_binary_output.innerHTML = decimal.toString(2)
            dc_octal_output.innerHTML = decimal.toString(8)
            dc_hexadecimal_output.innerHTML = decimal.toString(16)
            error_decimal.style.display = "none"

        } else {

            /*showing error message above the input;
            cleaning the values typed by the user
            clearing the output messages from previous conversions*/

            error_decimal.style.display = "block"
            ipt_decimal.value = ""
            dc_binary_output.innerHTML = ""
            dc_octal_output.innerHTML = ""
            dc_hexadecimal_output.innerHTML = ""
            return;
        }


    } else if (radix === 'binary') {

        let binary = ipt_binary.value

        if (/^[0-1]+$/.test(binary)) {

            let decimal = parseInt(binary, 2)

            bi_decimal_output.innerHTML = decimal
            bi_octal_output.innerHTML = decimal.toString(8)
            bi_hexadecimal_output.innerHTML = decimal.toString(16)
            error_binary.style.display = "none"

        } else {

            error_binary.style.display = "block"
            ipt_binary.value = ""
            bi_decimal_output.innerHTML = ""
            bi_octal_output.innerHTML = ""
            bi_hexadecimal_output.innerHTML = ""
            return;
        }


    } else if (radix === 'octal') {

        let octal = ipt_octal.value

        if ((/^[0-7]+$/.test(octal))) {

            let decimal = parseInt(octal, 8)

            oc_decimal_output.innerHTML = decimal
            oc_binary_output.innerHTML = decimal.toString(2)
            oc_hexadecimal_output.innerHTML = decimal.toString(16)
            error_octal.style.display = "none"

        } else {
            error_octal.style.display = "block"
            ipt_octal.value = ""
            oc_decimal_output.innerHTML = ""
            oc_binary_output.innerHTML = ""
            oc_hexadecimal_output.innerHTML = ""
            return;
        }



    } else if (radix === 'hexadecimal') {

        let hexadecimal = ipt_hexadecimal.value

        if ((/^[0-9A-Fa-f]+$/.test(hexadecimal))) {

            let decimal = parseInt(hexadecimal, 16)

            hex_decimal_output.innerHTML = decimal
            hex_binary_output.innerHTML = decimal.toString(2)
            hex_octal_output.innerHTML = decimal.toString(8)
            error_hex.style.display = "none"

        } else {
            error_hex.style.display = "block"
            ipt_hexadecimal.value = ""
            hex_decimal_output.innerHTML = ""
            hex_binary_output.innerHTML = ""
            hex_octal_output.innerHTML = ""
            return;
        }

    }
}