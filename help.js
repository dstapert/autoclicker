var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    console.log(this);
    var content = this.nextElementSibling;
    console.log(content);
    if (content){
      this.classList.toggle("active");
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    }else{
      console.log("bruh",this)
    }
    
  });
}