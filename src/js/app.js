import { $, $$ } from './tools';
import { formBuilder } from './form-builder';

const router = (url) => {
    const state = ""
    const title = ''
    // const url = 'paymentsuccess'

    history.pushState(state, title, url)
}
const setInvisible = () => {
    $$("form > div").forEach(element => {
        element.classList.add("invisible")
    });
}
const success = (id) => {
    window.clearInterval(id)
    setInvisible();
    $(".payment-success").classList.remove("invisible");
}

const failed = () => {
    setInvisible();
    $(".payment-failed").classList.remove("invisible");
}

const handlerAddMoreProduct = (e) => {

    e.preventDefault();
    $(".adding").classList.remove("invisible")
    $(".info").classList.add("invisible")
}

const handlerProductCount = (e) => {
    e.preventDefault();

    const formBody = $(".product-list .form-body");
    const count = $("input[type='radio'][name='item']:checked").value;
    const productListEl = $(".product-list");

    const elems = formBuilder(count);

    productListEl.classList.remove("invisible")
    $(".adding").classList.add("invisible");

    formBody.append(...elems);

}

const handlerPaymentSend = (e) => {
    e.preventDefault();
    const loader = e.currentTarget.querySelector("i");
    loader.style.display = "inline-block";
    const id = setInterval(function () {
        loader.style.display = "none";
        router("paymentsuccess");
        success(id);
    }, 2000);
}

export const App = () => {
    $(".add-more").addEventListener("click", handlerAddMoreProduct)
    $(".adding .btn").addEventListener("click", handlerProductCount)
    $(".product-list .btn").addEventListener("click", handlerPaymentSend);
    console.log(window.location.pathname)

    const { pathname } = window.location;

    if (pathname == "/paymentsuccess") {
        success();
    } else if (pathname == '/paymenterror') {
        failed();
    }
}