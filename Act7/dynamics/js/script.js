$(document).ready(function() {
    $(".submitcarr").on("click",function(){
        carrera = $("input").val();
        console.log(carrera);
        let peticion=$.ajax({
            url:"./dynamics/php/Consultas.php",
            data:{busq:carrera},
            method:"POST"
        });
        peticion.done((resp)=>{
            $(".results").html(resp);
        })
    })
    $("select").on("change", function(){
        modalidad = $("select").val();
        console.log(modalidad);
        let peticion=$.ajax({
            url:"./dynamics/php/Consultas.php",
            data:{dato:modalidad},
            method:"POST"
        });
        peticion.done((resp)=>{
            $(".results").html(resp);
        })
    })
    
});
