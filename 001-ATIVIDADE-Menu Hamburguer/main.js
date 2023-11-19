const btDialog = document.querySelector(".bt_dialog")
const dialog = document.querySelector(".dialog")


btDialog.addEventListener("click", () => dialog.show())

document.querySelectorAll("dialog button").forEach(
    bt => bt.addEventListener("click", () => dialog.close()))


// modal

const modal = document.querySelector('.modal')
const openModal = document.querySelector('.bt-open-modal')
const closeModal = document.querySelector('.bt-close-modal')

openModal.addEventListener("click", () => {
    modal.showModal()
})

closeModal.addEventListener("click", () => {
    modal.close()
})

const modal1 = document.querySelector('.modal1')
const openModal1 = document.querySelector('.bt-open-modal1')
const closeModal1 = document.querySelector('.bt-close-modal1')

openModal1.addEventListener("click", () => {
    modal1.showModal()
})

closeModal1.addEventListener("click", () => {
    modal1.close()
})

const modal2 = document.querySelector('.modal2')
const openModal2 = document.querySelector('.bt-open-modal2')
const closeModal2 = document.querySelector('.bt-close-modal2')

openModal2.addEventListener("click", () => {
    modal2.showModal()
})

closeModal2.addEventListener("click", () => {
    modal2.close()
})
// menu hamburguer

const btHamburger = document.querySelector(".menu-hamburger")
const mainMenu = document.querySelector("nav.main-menu")

btHamburger.addEventListener("click", () => {
    btHamburger.classList.toggle("opened")
    mainMenu.classList.toggle("opened")
})