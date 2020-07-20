//dimensões

function dimentions(){
    var height= window.innerHeight;
    var width=window.innerWidth;
    document.getElementById("fundo_1").style.height=height + 'px';
    document.getElementById("fundo_1").style.width=width + 'px';
    document.getElementById("fundo_2").style.height=height + 'px';
    document.getElementById("fundo_2").style.width=width + 'px';
    document.getElementById("fundo_3").style.height=height + 'px';
    document.getElementById("fundo_3").style.width=width + 'px';
    document.getElementById("fundo_4").style.height=height + 'px';
    document.getElementById("fundo_4").style.width=width + 'px';
    document.getElementById("navbar").style.height=height + 'px';
    document.getElementById("fundo2").style.height=height + 'px';
    document.getElementById("fundo2").style.width=width + 'px';
}
dimentions();




//menu
var settingsPagina=document.getElementById("settings");
var paginaAppPagina=document.getElementById("paginaApp");
var helpPagina=document.getElementById("help");
var aboutPagina=document.getElementById("about");
var homePagina=document.getElementById("index");


//quando clica nos settings
document.getElementById("menuSettings").addEventListener("click",function(){
    console.log("settings");
    settingsPagina.classList.remove("noDisplay");
    paginaAppPagina.classList.add("noDisplay");
    helpPagina.classList.add("noDisplay");
    homePagina.classList.add("noDisplay");
    aboutPagina.classList.add("noDisplay");

    settingsPagina.classList.add("Display");
    paginaAppPagina.classList.remove("Display");
    helpPagina.classList.remove("Display");
    homePagina.classList.remove("Display");
    aboutPagina.classList.remove("Display");

});


//quando clica no play
document.getElementById("menuPaginaApp").addEventListener("click",function(){
    console.log("PaginaApp");
    settingsPagina.classList.add("noDisplay");
    paginaAppPagina.classList.remove("noDisplay");
    helpPagina.classList.add("noDisplay");
    homePagina.classList.add("noDisplay");
    aboutPagina.classList.add("noDisplay");

    settingsPagina.classList.remove("Display");
    paginaAppPagina.classList.add("Display");
    helpPagina.classList.remove("Display");
    homePagina.classList.remove("Display");
    aboutPagina.classList.remove("Display");

});

//quando clica no help
document.getElementById("menuHelp").addEventListener("click",function(){
    console.log("PaginaHelp");
    settingsPagina.classList.add("noDisplay");
    paginaAppPagina.classList.add("noDisplay");
    helpPagina.classList.remove("noDisplay");
    homePagina.classList.add("noDisplay");
    aboutPagina.classList.add("noDisplay");

    settingsPagina.classList.remove("Display");
    paginaAppPagina.classList.remove("Display");
    helpPagina.classList.add("Display");
    homePagina.classList.remove("Display");
    aboutPagina.classList.remove("Display");


});
document.getElementById("menuAbout").addEventListener("click",function(){
    console.log("PaginaAbout");
    settingsPagina.classList.add("noDisplay");
    paginaAppPagina.classList.add("noDisplay");
    helpPagina.classList.add("noDisplay");
    homePagina.classList.add("noDisplay");
    aboutPagina.classList.remove("noDisplay");

    settingsPagina.classList.remove("Display");
    paginaAppPagina.classList.remove("Display");
    helpPagina.classList.remove("Display");
    homePagina.classList.remove("Display");
    aboutPagina.classList.add("Display");

});




//menu X


document.getElementById("icon").addEventListener("click", function() {
    console.log("clica1");
    document.querySelector("#icon div:first-child").classList.toggle("active1");
    document.querySelector("#icon div:nth-child(2)").classList.toggle("active2");
    document.querySelector("#icon div:nth-child(3)").classList.toggle("active3");
    console.log("clica");
    document.querySelector(".stroke").classList.toggle("transform");
});
