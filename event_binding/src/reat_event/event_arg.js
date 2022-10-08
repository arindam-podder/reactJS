

export function SyntheticEvent(){

   // document.getElementById("btnInsert").on("click", function(){
   //     alert(1)
   // })                        //like this  js event not working 

    function InsertClick(event){
        //console.log(event)
        console.log(`
            Button Id : ${event.target.id} \n
            Button Name: ${event.target.name} \n
            X Position : ${event.clientX} \n
            Ctrl Key    : ${event.ctrlKey}

        `);
    }

    return (
        <div>
            <button  onClick={InsertClick} id="btnInsert" name="insertButton"> Insert  </button>
        </div>
    )
}