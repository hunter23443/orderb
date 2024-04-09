let imgs = document.querySelectorAll('.img-select a');
let imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click' , (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage() {
    let displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * -displayWidth}px)`;
}

window.addEventListener('resize' , slideImage);

let popup = document.getElementById('popup');

function openpopup(){
    popup.classList.add("open-popup");
}

function closepopup(){
    popup.classList.remove("open-popup");
}



function emailSend() {
    var userName = document.querySelector('#name').value;
    var phone = document.querySelector('#phone').value;
    var gov = document.querySelector('#gov').value;
    var govwith = document.querySelector('#govwith').value;
    var color = document.querySelector('#color').value;
    let popup = document.getElementById('popup');
    var message = "اسم الزبون : " + userName + "<br/> رقم الهاتف : " + phone + "<br/> المحافظة : " + gov + "<br/> العنوان مع اقرب نقطة دالة : " + govwith + "<br/> لون الساعة : " + color;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "stmptesting95@gmail.com",
        Password : "4398A03A6D720C49DD08795E0DBDBDF80283",
        To : 'stmptesting95@gmail.com',
        From : "stmptesting95@gmail.com",
        Subject : "طلب جديد",
        Body : message
    }).then(
      message => alert("تم ارسال المعلومات, سوف يتم الاتصال بك لتثبيت الحجز")
    );
}