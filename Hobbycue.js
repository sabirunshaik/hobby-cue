const mbicon=document.getElementById('mbicon')
const navlist=document.getElementById('mblist')
mbicon.addEventListener('click',function(){
    navlist.classList.toggle('showandhide')
    console.log('mbicon');
})