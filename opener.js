var node = document.createElement('button');
node.setAttribute('id', 'letznav-opener-id');
node.innerHTML = 'click me!!';

document.querySelector('body').appendChild(node);

document.querySelector('#letznav-opener-id').addEventListener('click', function () {
    // alert('clicked');
    window.open('http://showcase18.myregisteredsite.com/', "mywindow", "menubar=1,resizable=1,width=1000,height=1000")
});