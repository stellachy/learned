var title = document.getElementById("title");
var content = document.getElementById("content");
var btn = document.getElementById("btn");
var list = document.getElementById("list");

btn.addEventListener("click", function(){
    list.innerHTML = list.innerHTML + 
    `<div class="article">
        <h3>
            ${title.value}
        </h3>
        <p>
            ${content.value}
        </p>
    </div>`;
    title.value="";
    content.value="";
}
);