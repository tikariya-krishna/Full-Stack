$(document).ready(()=>{ // use this funtion to ready the html code then j query.
    $('p').click(()=>{
        console.log("This is paraghraph tag");
    });

    $('p').on(
        {
        click:function(){
        console.log("This is paraghraph tag");
        },
        mouseleave:function(){
            console.log("leave mouse");
        }
    });

    $(".hide-btn").click(()=>{
        $(".demo-text").hide(alert("hideing paragharaph"));
    });
    $('.show-btn').click(()=>{
        $(".demo-text").show(alert("showing paragharaph"));
    });

    //use toggel instend of this hise and show, which writeing reduce code.
    $('.toggle-btn').click(()=>{
        $('.demo-text').toggle();
    });

});