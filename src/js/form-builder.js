import { createElement } from './tools';

const handlerDeleteProduct = (e) => {
    console.log(e)
    const formRow = e.currentTarget.parentNode.parentNode.parentNode;
    formRow.classList.add("deleted");
    setTimeout(() => {
        formRow.remove();
    }, 700)

}
const getFormRowContent = (productNumber) => {

    const formRow = createElement("div");
    const h2 = createElement("h2");
    const xMark = createElement("span");
    const xMarkSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const xMarkUse = document.createElementNS("http://www.w3.org/2000/svg", "use");
    const keywordWrapper = createElement("div");
    const linkWrapper = createElement("div");
    const keywordLabel = createElement("label");
    const keywordInpt = createElement("input");
    const linkLabel = createElement("label");
    const linkInpt = createElement("input");

    xMarkUse.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#x-mark");

    xMarkSvg.addEventListener("click", handlerDeleteProduct)
    xMark.setAttribute("class", "delete")
    xMarkSvg.appendChild(xMarkUse);
    xMark.appendChild(xMarkSvg);

    h2.innerText = `Product ${productNumber}`;
    h2.appendChild(xMark);
    formRow.appendChild(h2);

    keywordLabel.innerText = "Enter main keyword for the product";
    keywordInpt.setAttribute("placeholder", "or example, sylicon wine cup");
    keywordWrapper.setAttribute("class", "keyword-wrapper");
    keywordWrapper.appendChild(keywordLabel);
    keywordWrapper.appendChild(keywordInpt);
    formRow.appendChild(keywordWrapper);

    linkLabel.innerText = "Enter link to the similar product as a referencet";
    linkInpt.setAttribute("placeholder", "https://...");
    linkWrapper.setAttribute("class", "link-wrapper");
    linkWrapper.appendChild(linkLabel);
    linkWrapper.appendChild(linkInpt);
    formRow.appendChild(linkWrapper);

    formRow.setAttribute("class", "form-row");

    return formRow;
}

export const formBuilder = (count) => {
    const elems = [];

    for (let i = 0; i < count; i++) {
        elems.push(getFormRowContent(i + 1));
    }

    return elems;
}