/**
 * Bài 1: Xây dựng ứng dụng đổi màu ngôi nhà
 */

const colors = ['pallet', 'viridian','pewter','cerulean','vermillion','lavender','celadon','saffron','fuschia','cinnabar'];

let loadColor = () => {
    let btnColor = "";
    colors.map((color,index) => {
        btnColor += `
            <button onclick="changeColor('${color}')"  class="color-button ${color}"></button>
        `
        }
    )
   
    document.getElementById('colorContainer').innerHTML = btnColor;
    document.querySelector('.pallet').classList.add('active');   
};
loadColor();

let changeColor = (color) => {
    document.querySelectorAll('.color-button').forEach( item =>{
        item.classList.remove('active');
        colors.map(item =>{
            document.getElementById('house').classList.remove(`${item}`);
        })
    })
    document.querySelector(`.color-button.${color}`).classList.add('active'); 
    document.getElementById('house').classList.add(`${color}`);
      
}




