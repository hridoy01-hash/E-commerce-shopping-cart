const minus_qunatity_id = document.getElementById("minus_qunatity_id");
const plus_qunatity_id = document.getElementById("plus_qunatity_id");

minus_qunatity_id.addEventListener("click", function () {

    const product_quantity_number_id = document.getElementById("product_quantity_number_id");
    const currentQuantity = product_quantity_number_id.innerText;
    const MinusNumber = (parseInt(currentQuantity) - 1);
    if (MinusNumber !== 0) {
        product_quantity_number_id.textContent = `${MinusNumber}`;
    }
    totalPriceCalculate(MinusNumber);

});
plus_qunatity_id.addEventListener("click", function () {
    const product_quantity_number_id = document.getElementById("product_quantity_number_id");
    const currentQuantity = product_quantity_number_id.innerText;
    const MinusNumber = (parseInt(currentQuantity) + 1);
    product_quantity_number_id.textContent = `${MinusNumber}`;
    // console.log("value after plus", MinusNumber);
    totalPriceCalculate(MinusNumber)
});

function totalPriceCalculate(getValueOfCartItem) {
    console.log("getValueOfCartItem", getValueOfCartItem);
}
