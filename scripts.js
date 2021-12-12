const gp = document.querySelector(".grand-parent")
const p = document.querySelector(".parent")
const c = document.querySelector(".child")
const gc = document.querySelector(".grand-child")
const b = document.querySelector(".button")

b.addEventListener("click", logOffsets)

let getTableData = () => {
    return {
    "TOP": "TOP",
    "grand-child offsetTop": gc.offsetTop,
    "grand-child getBoundingClientRectTop": gc.getBoundingClientRect().top,
    "child offsetTop": c.offsetTop,
    "child getBoundingClientRectTop": c.getBoundingClientRect().top,
    "parent offsetTop": p.offsetTop,
    "parent getBoundingClientRectTop": p.getBoundingClientRect().top,
    "grand-parent offsetTop": gp.offsetTop,
    "grand-parent getBoundingClientRectTop": gp.getBoundingClientRect().top,

    "LEFT": "LEFT",
    "grand-child offsetLeft": gc.offsetLeft,
    "grand-child getBoundingClientRectLeft": gc.getBoundingClientRect().left,
    "child offsetLeft": c.offsetLeft,
    "child getBoundingClientRectLeft": c.getBoundingClientRect().left,
    "parent offsetLeft": p.offsetLeft,
    "parent getBoundingClientRectLeft": p.getBoundingClientRect().left,
    "grand-parent offsetLeft": gp.offsetLeft,
    "grand-parent getBoundingClientRectLeft": gp.getBoundingClientRect().left,

    "HEIGHT": "HEIGHT",

    "grand-child offsetHeight": gc.offsetHeight,
    "grand-child getBoundingClientRectHeight": gc.getBoundingClientRect().height,
    "child offsetHeight": c.offsetHeight,
    "child getBoundingClientRectHeight": c.getBoundingClientRect().height,
    "parent offsetHeight": p.offsetHeight,
    "parent getBoundingClientRectHeight": p.getBoundingClientRect().height,
    "grand-parent offsetHeight": gp.offsetHeight,
    "grand-parent getBoundingClientRectHeight": gp.getBoundingClientRect().height,

    "WIDTH": "WIDTH",

    "grand-child offsetWidth": gc.offsetWidth,
    "grand-child getBoundingClientRectWidth": gc.getBoundingClientRect().width,
    "child offsetWidth": c.offsetWidth,
    "child getBoundingClientRectWidth": c.getBoundingClientRect().width,
    "parent offsetWidth": p.offsetWidth,
    "parent getBoundingClientRectWidth": p.getBoundingClientRect().width,
    "grand-parent offsetWidth": gp.offsetWidth,
    "grand-parent getBoundingClientRectWidth": gp.getBoundingClientRect().width,
    }
}

function logOffsets(){
    console.table(getTableData())
}