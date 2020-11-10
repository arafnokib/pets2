class Form{

    constructor(){

    }

    display(){
        var button1 = createButton("Feed");
        button1.position(400,150)  
       button1.mousePressed(function(){
        database.ref('/').set({
        
            food: food - 1
           });

        lastFed = hour() + ":" + minute ();
        console.log(lastFed)
        database.ref('/').set({
        
            time: lastFed
           });
           
       })

       var button2 = createButton("Stock");
        button2.position(450,150)  
       button2.mousePressed(function(){
        database.ref('/').set({
        
            food: food + 1
           });
       })
    }
}