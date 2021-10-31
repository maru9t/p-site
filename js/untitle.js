function kantan(entries) {

    if (entries[0].intersectionRatio == 0) {
    
    return;
    }
    
    else
    {
    
    // alert("出たよ〜")
    gazou.classList.add("alpha");
    }
    
    }
    
    ;
    
    var gazou = document.getElementById("detayo");
    
    var options = {
    
    threshold:1
    }
    
    ;
    
    var observer = new IntersectionObserver(kantan,options);
    
    observer.observe(gazou);


    