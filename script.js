let mainPostWrapper=document.getElementById('post-wrapper');
let overlay=document.getElementById('overlay');
let content=document.getElementById('content');
let close=document.getElementById('close');


function ajax(url, callback){      //dinamic link
let requist=new XMLHttpRequest();
requist.open('GET',url);
requist.addEventListener('load', function(){
    
    let data=JSON.parse(requist.responseText);
    callback(data);
    
  });

requist.send();
}

ajax('https://jsonplaceholder.typicode.com/posts', function (data){
    printData(data);
});

function printData(data){
   
    data.forEach(element => {
        createPost(element);
    });
}

function createPost(item){
    let divWrapper=document.createElement('div');
        divWrapper.classList.add('posts');
        divWrapper.setAttribute('data-id', item.id); 
        let h3Tag=document.createElement('h3');
        h3Tag.innerText=item.id;
        h3Tag.classList.add('post-id');

    let h2Tag=document.createElement('h2');
    h2Tag.innerText=item.title;

divWrapper.appendChild(h3Tag);
divWrapper.appendChild(h2Tag);

divWrapper.addEventListener('click', function(event){
    let id=event.target.getAttribute('data-id');
    openOverlay(id);

});

mainPostWrapper.appendChild(divWrapper);
console.log(divWrapper);

}
function openOverlay(id){
    overlay.classList.add('active');
    let url=`https://jsonplaceholder.typicode.com/posts/${id}`;
    ajax(url, function(data){
        console.log(data);
    });


    console.log(id);
}

close.addEventListener('click', function(){
    overlay.classList.remove('active');
})




 