
let diemToan = document.getElementById('inpToan');
let diemLy = document.getElementById('inpLy');
let diemHoa = document.getElementById('inpHoa');
let diemVan = document.getElementById('inpVan');
let diemSu = document.getElementById('inpSu');
let diemDia = document.getElementById('inpDia');
let diemEnglish = document.getElementById('inpEnglish');

let tinhDTB = (lop, ...diem) => {
    let dtb = 0;
    diem.map(item => {
        dtb += item;
    })
    if (lop == 'lop1') {
        document.getElementById('tbKhoi1').innerHTML = (dtb / diem.length).toFixed(1);

    } else {
        document.getElementById('tbKhoi2').innerHTML = (dtb / diem.length).toFixed(1);
    }
};

document.getElementById('btnKhoi1').onclick = () => {
    tinhDTB('lop1', Number(diemToan.value), Number(diemLy.value), Number(diemHoa.value))
}
document.getElementById('btnKhoi2').onclick = () => {
    tinhDTB('lop2', Number(diemVan.value), Number(diemSu.value), Number(diemDia.value), Number(diemEnglish.value))
}
