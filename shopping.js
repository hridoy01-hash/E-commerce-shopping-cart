const minus_qunatity_id = document.getElementById("minus_qunatity_id");
const plus_qunatity_id = document.getElementById("plus_qunatity_id");

minus_qunatity_id.addEventListener("click", function () {

    const product_quantity_number_id = document.getElementById("product_quantity_number_id");
    const currentQuantity = product_quantity_number_id.innerText;

    if (parseInt(currentQuantity) !== 1) {
        const MinusNumber = (parseInt(currentQuantity) - 1);
        product_quantity_number_id.textContent = `${MinusNumber}`;
        totalPriceCalculate(MinusNumber);
    }
    totalCalculateAmount("");
});
plus_qunatity_id.addEventListener("click", function () {
    const product_quantity_number_id = document.getElementById("product_quantity_number_id");
    const currentQuantity = product_quantity_number_id.innerText;
    const MinusNumber = (parseInt(currentQuantity) + 1);
    product_quantity_number_id.textContent = `${MinusNumber}`;

    totalPriceCalculate(MinusNumber);
    totalCalculateAmount("");
});

function totalPriceCalculate(getValueOfCartItem) {
    const unite_price_id = document.getElementById("unite_price_id");
    const single_product_price = document.querySelector(".single_product_price").innerHTML;

    const calculateTotalPrice = parseInt(single_product_price * getValueOfCartItem);
    unite_price_id.textContent = `${calculateTotalPrice}`;
    // subtotal amount
    const sub_total_amount_id = document.getElementById("sub_total_amount_id");
    sub_total_amount_id.textContent = `${calculateTotalPrice}`;
    // totalCalculateAmount(calculateTotalPrice);
};
const shipping_poruct_wrapper = document.querySelector(".shipping_poruct_wrapper");
const product_remove_svg = document.querySelector(".product_remove_svg");
product_remove_svg.addEventListener("click", function () {
    shipping_poruct_wrapper.remove();
});

const apply_cuppon_btn = document.getElementById("apply_cuppon_btn");
apply_cuppon_btn.addEventListener("click", function () {
    const cupon_field = document.querySelector(".cupon_field").value;
    console.log("cupon_field", cupon_field);
    const cupon_id = document.getElementById("cupon_id");
    cupon_id.innerHTML = ` $${parseInt(cupon_field)}`;

});

// delivery charge 

const shippin_charge = document.getElementById("shippin_charge");
const insideDhaka = document.getElementById("insideDhaka");
const insideDhakaCharge = parseInt(insideDhaka.value);
shippin_charge.textContent = `${insideDhakaCharge}`;
console.log("insideDhakaCharge", insideDhakaCharge);
totalCalculateAmount(insideDhakaCharge);

insideDhaka.addEventListener("click", function () {
    const insideDhakaCharge = parseInt(insideDhaka.value);
    shippin_charge.textContent = `${insideDhakaCharge}`;
    totalCalculateAmount(insideDhakaCharge);

});
const outsideDHaka = document.getElementById("outsideDHaka");
outsideDHaka.addEventListener("click", function () {
    const outSideDhakaCharge = parseInt(outsideDHaka.value);
    shippin_charge.textContent = `${outSideDhakaCharge}`;
    totalCalculateAmount(outSideDhakaCharge);
});


// total amount calculate

function totalCalculateAmount(deliveryCharge) {
    const sub_total_amount_id = document.getElementById("sub_total_amount_id").innerText;

    const totalBill = deliveryCharge + parseInt(sub_total_amount_id)
    console.log("totalBill", totalBill);

    const payableAmount = document.querySelector(".payableAmount");
    payableAmount.textContent = `${totalBill}`;
}






