let myData = [];
let Links = document.querySelectorAll(".nav-link");
let category = "general";
getData(category);

for(let i=0;i<Links.length;i++)
{
    Links[i].addEventListener("click",function(e){
        category = e.target.text;
        getData(category);
    })
}

function getData(selectedCategory){

let http = new XMLHttpRequest();
http.open("GET","https://newsapi.org/v2/top-headlines?country=eg&category="+selectedCategory+"&apiKey=af1fc2df59d44fcaae833fc197425282")
http.send();
http.onreadystatechange = function(){
    if(http.readyState == 4 && http.status == 200)
    myData = JSON.parse(http.response);
    myData = myData.articles;
    display();
}
}


function display()
{
    let temp = ``;
    for( let i=0 ;i<myData.length ;i++)
    {
        temp+=`  
                <div class="col-md-4 mb-5">
                    <div class="card" style="width : 18rem ;">
                        <img src="`+myData[i].urlToImage+`" class="card-img-top">
                        <h5>`+myData[i].title+`</h5>
                        <p>`+myData[i].description+`</p>
                        <a href="`+myData[i].url+`" class="btn btn-primary">Read More</a>
                    </div>
                </div>`
    }
    document.getElementById("rowData").innerHTML=temp;
}














