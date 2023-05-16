const btn = document.querySelector('.menu');
const logo = document.querySelector('.brandname');
const menu = document.querySelector('.sidebar');
const desc = document.querySelector('.desc');
const fa = document.querySelectorAll('.fa-solid')
const sidebarlink = document.querySelectorAll('.sidebarlink')

btn.addEventListener('click', ()=>{
    btn.classList.toggle('active'); 
    if(btn.classList.contains('active')) {
        menu.style.display = 'block'

    } else {
        menu.style.display = 'none';
    }
})

// btn.addEventListener('click', function () {
//     btn.classList.toggle('active');
//     if (btn.classList.contains('active')) {
//         menu.style.width = '4.4rem';
//         logo.style.opacity = '0';
//         desc.style.opacity = '0'
//     //    displayLinkNone();
//     //    displayFall()
//     }
//     else {
//         menu.style.width = '13rem';
//         logo.style.opacity = '1';
//         desc.style.opacity = '1'
//         // displayLinkAll()
// }
// }
// )


// function displayLinkNone() {
//     sidebarlink.forEach((e)=>{
//         e.style.display = 'none'
//     })
// }
// function displayLinkAll() {
//     sidebarlink.forEach((e)=>{
//         e.style.display = 'block'
//     })    }
// function displayFall() {
//     fa.forEach((b) => {
//         b.style.display = 'block'
//     })
// }
