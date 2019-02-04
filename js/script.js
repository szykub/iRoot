let logo_array = ["#", 'https://helpio.life/', "https://www.clara.airforce", '#'];

function appendHrefs(){
    for(let i = 0; i < 4; i++){
        $(".logo").eq(i+1).on("click", function(){
            window.open(logo_array[i], "_blank")
        });
    }    
};

appendHrefs();