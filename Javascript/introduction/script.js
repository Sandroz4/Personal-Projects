// console.log('success'
// alert('order confirmed')

// let bike = 15
// console.log(bike + 15)

// let name = 'sandro'
// console.log(name + 'has a bright future.')
// let name = 'sandro'

// let surname = 'zabakhidze'
// console.log(name + ' ' + surname)

// const age = 20
// console.log(age)

// let name = document.getElementById('test');
// name.textContent = 'tested';

// let newValue = name.textContent + ' value';
// console.log(newValue);

// let userName = document.getElementById('name').value; 
// let paragraphElement = document.querySelector('p'); 

// paragraphElement.textContent += ' ' + userName;

// function nameX(){
//     let name = document.getElementById('name').textContent
//     console.log(name + ' zabakhidze')
// } 

// nameX()

// function colorChange(){
//     let text = document.querySelector('p')
//     let color = document.querySelector('input').value
//     text.style.color = color
// }

// colorChange()

// function widthChange() {
//     let user = document.querySelector('input').value;
//     let image = document.querySelector('img'); 

//     image.style.width = user + 'px'; 
// }

// console.log(5>4)
// console.log(2>4)
// console.log(5>=4)
// console.log(5>=5)




function parameters() {
    let width = document.getElementById('width').value;
    let height = document.getElementById('height').value;
    let radius = document.getElementById('radius').value; 
    let image = document.querySelector('img');


    image.style.width = width + 'px';
    image.style.height = height + 'px';
    image.style.borderRadius = radius + 'px';
}
