function upDate(previewPic){
     var changeThis = document.getElementById('image');
     changeThis.innerHTML = previewPic.alt;
     var src = previewPic.src;
     changeThis.style.backgroundImage = 'url('+ src +')';
       }
   
function unDo(){

       var changeThis = document.getElementById('image');
       changeThis.innerHTML = 'Hover over an image below to display here';
       changeThis.style.backgroundImage = 'url(\'\')';
           
       }