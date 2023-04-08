const createTodo = async (todo)=>{
    let options = {
        method:"POST",
        headers :{
            "content-type":"application/json"},
            body : JSON.stringify(todo),
     
        }
    
        
    let p = await fetch('https://jsonplaceholder.typicode.com/posts',options) // if not write await then error because first this should resolve before going to json
     
    let response = await p.json(todo)
    return response
    
    }

    
    mainFunc = async  ()=>{
        let todo =  {
                title:'foo',
                body:'bar',
                userId:1
            }
        
        let todor = await createTodo(todo);
        console.log(todor);
    }
    
    mainFunc();