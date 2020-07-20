//############ COISAS QUE TEM A VER COM O JAVASCRIPT DOS MENUS E ASSIM ##############

//dimensões
var clicar_ecra = 0;
let executado=false;
let container;
let botao;
let captura1;

//##########################################################################
//dimensões
function dimentions() {
    var height = window.innerHeight;
    var width = window.innerWidth;
    document.getElementById("fundo_1").style.height = height + 'px';
    document.getElementById("fundo_1").style.width = width + 'px';
    document.getElementById("fundo_2").style.height = height + 'px';
    document.getElementById("fundo_2").style.width = width + 'px';
    document.getElementById("fundo_3").style.height = height + 'px';
    document.getElementById("fundo_3").style.width = width + 'px';
    document.getElementById("fundo_4").style.height = height + 'px';
    document.getElementById("fundo_4").style.width = width + 'px';
    document.getElementById("navbar").style.height = height + 'px';
    document.getElementById("fundo2").style.height = height + 'px';
    document.getElementById("fundo2").style.width = width + 'px';
    // document.getElementById("bm").style.height = height + 'px';
    // document.getElementById("bm").style.width = width + 'px';

}


dimentions();

//#################################################################
//FAQ
document.getElementById("question1").addEventListener("click", function(){
    document.getElementById("answer1").classList.toggle("displayNone");
    document.getElementById("answer1").classList.toggle("displayInherit");
});
document.getElementById("question2").addEventListener("click", function(){
    document.getElementById("answer2").classList.toggle("displayNone");
    document.getElementById("answer2").classList.toggle("displayInherit");
});
document.getElementById("question3").addEventListener("click", function(){
    document.getElementById("answer3").classList.toggle("displayNone");
    document.getElementById("answer3").classList.toggle("displayInherit");
});
document.getElementById("question4").addEventListener("click", function(){
    document.getElementById("answer4").classList.toggle("displayNone");
    document.getElementById("answer4").classList.toggle("displayInherit");
});
document.getElementById("question5").addEventListener("click", function(){
    document.getElementById("answer5").classList.toggle("displayNone");
    document.getElementById("answer5").classList.toggle("displayInherit");
});
document.getElementById("question6").addEventListener("click", function(){
    document.getElementById("answer6").classList.toggle("displayNone");
    document.getElementById("answer6").classList.toggle("displayInherit");
});
document.getElementById("question7").addEventListener("click", function(){
    document.getElementById("answer7").classList.toggle("displayNone");
    document.getElementById("answer7").classList.toggle("displayInherit");
});
document.getElementById("question8").addEventListener("click", function(){
    document.getElementById("answer8").classList.toggle("displayNone");
    document.getElementById("answer8").classList.toggle("displayInherit");
});
document.getElementById("question9").addEventListener("click", function(){
    document.getElementById("answer9").classList.toggle("displayNone");
    document.getElementById("answer9").classList.toggle("displayInherit");
});


//##############################################################################################
//menu
var settingsPagina = document.getElementById("settings");
var paginaAppPagina = document.getElementById("paginaApp");
var helpPagina = document.getElementById("help");
var homePagina = document.getElementById("index");
var aboutPagina = document.getElementById("about");

//para aparecer as diferentes páginas
let displayVideo = false;
let displaySettings = false;


//quando clica nos settings
document.getElementById("menuSettings").addEventListener("click", function () {
    console.log("settings");
    settingsPagina.classList.remove("noDisplay");
    paginaAppPagina.classList.add("noDisplay");
    helpPagina.classList.add("noDisplay");
    homePagina.classList.add("noDisplay");
    aboutPagina.classList.add("noDisplay");

    //para aparecer as diferentes páginas
    displaySettings = true;
    displayVideo = false;
    console.log("displaySettings: " + displaySettings);
    console.log("displayVideo:" + displayVideo);

    settingsPagina.classList.add("Display");
    paginaAppPagina.classList.remove("Display");
    helpPagina.classList.remove("Display");
    homePagina.classList.remove("Display");
    aboutPagina.classList.remove("Display");

});


//quando clica no play
document.getElementById("menuPaginaApp").addEventListener("click", function () {
    console.log("PaginaApp");
    settingsPagina.classList.add("noDisplay");
    paginaAppPagina.classList.remove("noDisplay");
    helpPagina.classList.add("noDisplay");
    homePagina.classList.add("noDisplay");
    aboutPagina.classList.add("noDisplay");

    //para aparecer as diferentes páginas
    displayVideo = true;
    displaySettings = false;
    anime.play();
    console.log("displaySettings: " + displaySettings);
    console.log("displayVideo:" + displayVideo);

    settingsPagina.classList.remove("Display");
    paginaAppPagina.classList.add("Display");
    helpPagina.classList.remove("Display");
    homePagina.classList.remove("Display");
    aboutPagina.classList.remove("Display");

});

//qunado clica no START na página inicial
document.getElementById("Start").addEventListener("click", function () {

    console.log("PaginaApp");
    settingsPagina.classList.add("noDisplay");
    paginaAppPagina.classList.remove("noDisplay");
    helpPagina.classList.add("noDisplay");
    homePagina.classList.add("noDisplay");
    aboutPagina.classList.add("noDisplay");

    //para aparecer as diferentes páginas
    displayVideo = true;
    displaySettings = false;
    anime.play();
    console.log("displaySettings: " + displaySettings);
    console.log("displayVideo:" + displayVideo);

    settingsPagina.classList.remove("Display");
    paginaAppPagina.classList.add("Display");
    helpPagina.classList.remove("Display");
    homePagina.classList.remove("Display");
    aboutPagina.classList.remove("Display");

});


var params = {
    container: document.getElementById("bm"),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'data.json'

};
var anime;
function animacao() {

    console.log("cliquei_anime");
    anime.destroy();
    executado=true;


}

if(executado===false) {

    anime = lottie.loadAnimation(params);

    document.getElementById("bm").addEventListener('click',animacao);

}


//quando clica no help
document.getElementById("menuHelp").addEventListener("click", function () {
    console.log("PaginaHelp");
    settingsPagina.classList.add("noDisplay");
    paginaAppPagina.classList.add("noDisplay");
    helpPagina.classList.remove("noDisplay");
    homePagina.classList.add("noDisplay");
    aboutPagina.classList.add("noDisplay");

    //para aparecer as diferentes páginas
    displayVideo = false;
    displaySettings = false;
    console.log("displaySettings: " + displaySettings);
    console.log("displayVideo:" + displayVideo);

    settingsPagina.classList.remove("Display");
    paginaAppPagina.classList.remove("Display");
    helpPagina.classList.add("Display");
    homePagina.classList.remove("Display");
    aboutPagina.classList.remove("Display");

});

//quando clica no about
document.getElementById("menuAbout").addEventListener("click", function () {
    console.log("PaginaAbout");
    settingsPagina.classList.add("noDisplay");
    paginaAppPagina.classList.add("noDisplay");
    helpPagina.classList.add("noDisplay");
    homePagina.classList.add("noDisplay");
    aboutPagina.classList.remove("noDisplay");
    aboutPagina.classList.add("noDisplay");

    //para aparecer as diferentes páginas
    displayVideo = false;
    displaySettings = false;
    console.log("displaySettings: " + displaySettings);
    console.log("displayVideo:" + displayVideo);

    settingsPagina.classList.remove("Display");
    paginaAppPagina.classList.remove("Display");
    helpPagina.classList.remove("Display");
    homePagina.classList.remove("Display");
    aboutPagina.classList.add("Display");

});


//menu X


document.getElementById("icon").addEventListener("click", function () {
    menu_contar++;
    console.log("conta_menu: " + menu_contar);
    console.log("clica1");
    document.querySelector("#icon div:first-child").classList.toggle("active1");
    document.querySelector("#icon div:nth-child(2)").classList.toggle("active2");
    document.querySelector("#icon div:nth-child(3)").classList.toggle("active3");
    console.log("clica");
    document.querySelector(".stroke").classList.toggle("transform");
});


//#####################################APLICAÇÃO

var bubbles = [];
var distancias = [];
var dragging = false;
var rollover = false;
var x1, y1, r;
var r_bolinhas = 24;
var r2;
var offsetX, offsetY;
let a;

let contar_sons = 0;

let distancia;
let distancia_1;
let copiadistancias = [];
let remove = false;
let clicar_tirar;
var clicar = [];
var clicar1 = 0;
//som
let limite = 7;
let aumento = 2;

//Oitava -3

//cores distancias
let distancia_vermelho_Oitava_menos3;//fá
let distancia_vermelho_sustenido_Oitava_menos3;//fá sustenido--> vermelho sustenido
let distancia_verde_Oitava_menos3;//lá
let distancia_verde_sustenido_Oitava_menos3;//lá sustenido--> verde sustenido
let distancia_azul_Oitava_menos3;//dó
let distancia_azul_sustenido_Oitava_menos3;//dó sustenido--> azul sustenido
let distancia_roxo_Oitava_menos3;//re
let distancia_roxo_sustenido_Oitava_menos3;//ré sustenido--> roxo sustenido
let distancia_rosa_Oitava_menos3;//mi
let distancia_amarelo_Oitava_menos3;//sol
let distancia_amarelo_sustenido_Oitava_menos3;//sol sustenido--> amarelo sustenido
let distancia_ciano_Oitava_menos3;//si

//cores
let vermelho_Oitava_menos3;//fá
let vermelho_sustenido_Oitava_menos3;//fá sustenido--> vermelho sustenido
let verde_Oitava_menos3;//lá
let verde_sustenido_Oitava_menos3;//lá sustenido--> verde sustenido
let azul_Oitava_menos3;//dó
let azul_sustenido_Oitava_menos3;//dó sustenido--> azul sustenido
let roxo_Oitava_menos3;//re
let roxo_sustenido_Oitava_menos3;//ré sustenido--> roxo sustenido
let rosa_Oitava_menos3;//mi
let amarelo_Oitava_menos3;//sol
let amarelo_sustenido_Oitava_menos3;//sol sustenido--> amarelo sustenido
let ciano_Oitava_menos3;//si


// audios:
var Do_Oitava_menos3;//azul
var Do_sustenido_Oitava_menos3;//azul sustenido-->do sutenido
var Re_Oitava_menos3;//roxo
var Re_sustenido_Oitava_menos3;//roxo sustenido--> ré sustenido
var Mi_Oitava_menos3;//rosa
var Fa_Oitava_menos3;//vermelho
var Fa_sustenido_Oitava_menos3;//vermelho sustenido --> fá sustenido
var Sol_Oitava_menos3;//amarelo
var Sol_sustenido_Oitava_menos3;//amarelo sustenido --> sol sustenido
var La_Oitava_menos3;//verde
var La_sustenido_Oitava_menos3;//verde sustenido --> lá sustenido
var Si_Oitava_menos3;//ciano


//Oitava -2

//cores distancias
let distancia_vermelho_Oitava_menos2;//fá
let distancia_vermelho_sustenido_Oitava_menos2;//fá sustenido--> vermelho sustenido
let distancia_verde_Oitava_menos2;//lá
let distancia_verde_sustenido_Oitava_menos2;//lá sustenido--> verde sustenido
let distancia_azul_Oitava_menos2;//dó
let distancia_azul_sustenido_Oitava_menos2;//dó sustenido--> azul sustenido
let distancia_roxo_Oitava_menos2;//re
let distancia_roxo_sustenido_Oitava_menos2;//ré sustenido--> roxo sustenido
let distancia_rosa_Oitava_menos2;//mi
let distancia_amarelo_Oitava_menos2;//sol
let distancia_amarelo_sustenido_Oitava_menos2;//sol sustenido--> amarelo sustenido
let distancia_ciano_Oitava_menos2;//si

//cores
let vermelho_Oitava_menos2;//fá
let vermelho_sustenido_Oitava_menos2;//fá sustenido--> vermelho sustenido
let verde_Oitava_menos2;//lá
let verde_sustenido_Oitava_menos2;//lá sustenido--> verde sustenido
let azul_Oitava_menos2;//dó
let azul_sustenido_Oitava_menos2;//dó sustenido--> azul sustenido
let roxo_Oitava_menos2;//re
let roxo_sustenido_Oitava_menos2;//ré sustenido--> roxo sustenido
let rosa_Oitava_menos2;//mi
let amarelo_Oitava_menos2;//sol
let amarelo_sustenido_Oitava_menos2;//sol sustenido--> amarelo sustenido
let ciano_Oitava_menos2;//si


// audios:
var Do_Oitava_menos2;//azul
var Do_sustenido_Oitava_menos2;//azul sustenido-->do sutenido
var Re_Oitava_menos2;//roxo
var Re_sustenido_Oitava_menos2;//roxo sustenido--> ré sustenido
var Mi_Oitava_menos2;//rosa
var Fa_Oitava_menos2;//vermelho
var Fa_sustenido_Oitava_menos2;//vermelho sustenido --> fá sustenido
var Sol_Oitava_menos2;//amarelo
var Sol_sustenido_Oitava_menos2;//amarelo sustenido --> sol sustenido
var La_Oitava_menos2;//verde
var La_sustenido_Oitava_menos2;//verde sustenido --> lá sustenido
var Si_Oitava_menos2;//ciano

//Oitava -1

//cores distancias
let distancia_vermelho_Oitava_menos1;//fá
let distancia_vermelho_sustenido_Oitava_menos1;//fá sustenido--> vermelho sustenido
let distancia_verde_Oitava_menos1;//lá
let distancia_verde_sustenido_Oitava_menos1;//lá sustenido--> verde sustenido
let distancia_azul_Oitava_menos1;//dó
let distancia_azul_sustenido_Oitava_menos1;//dó sustenido--> azul sustenido
let distancia_roxo_Oitava_menos1;//re
let distancia_roxo_sustenido_Oitava_menos1;//ré sustenido--> roxo sustenido
let distancia_rosa_Oitava_menos1;//mi
let distancia_amarelo_Oitava_menos1;//sol
let distancia_amarelo_sustenido_Oitava_menos1;//sol sustenido--> amarelo sustenido
let distancia_ciano_Oitava_menos1;//si

//cores
let vermelho_Oitava_menos1;//fá
let vermelho_sustenido_Oitava_menos1;//fá sustenido--> vermelho sustenido
let verde_Oitava_menos1;//lá
let verde_sustenido_Oitava_menos1;//lá sustenido--> verde sustenido
let azul_Oitava_menos1;//dó
let azul_sustenido_Oitava_menos1;//dó sustenido--> azul sustenido
let roxo_Oitava_menos1;//re
let roxo_sustenido_Oitava_menos1;//ré sustenido--> roxo sustenido
let rosa_Oitava_menos1;//mi
let amarelo_Oitava_menos1;//sol
let amarelo_sustenido_Oitava_menos1;//sol sustenido--> amarelo sustenido
let ciano_Oitava_menos1;//si


// audios:
var Do_Oitava_menos1;//azul
var Do_sustenido_Oitava_menos1;//azul sustenido-->do sutenido
var Re_Oitava_menos1;//roxo
var Re_sustenido_Oitava_menos1;//roxo sustenido--> ré sustenido
var Mi_Oitava_menos1;//rosa
var Fa_Oitava_menos1;//vermelho
var Fa_sustenido_Oitava_menos1;//vermelho sustenido --> fá sustenido
var Sol_Oitava_menos1;//amarelo
var Sol_sustenido_Oitava_menos1;//amarelo sustenido --> sol sustenido
var La_Oitava_menos1;//verde
var La_sustenido_Oitava_menos1;//verde sustenido --> lá sustenido
var Si_Oitava_menos1;//ciano


//Oitava do meio

//cores distancias
let distancia_vermelho;//fá
let distancia_vermelho_sustenido;//fá sustenido--> vermelho sustenido
let distancia_verde;//lá
let distancia_verde_sustenido;//lá sustenido--> verde sustenido
let distancia_azul;//dó
let distancia_azul_sustenido;//dó sustenido--> azul sustenido
let distancia_roxo;//re
let distancia_roxo_sustenido;//ré sustenido--> roxo sustenido
let distancia_rosa;//mi
let distancia_amarelo;//sol
let distancia_amarelo_sustenido;//sol sustenido--> amarelo sustenido
let distancia_ciano;//si


//cores
let vermelho;//fá
let vermelho_sustenido;//fá sustenido--> vermelho sustenido
let verde;//lá
let verde_sustenido;//lá sustenido--> verde sustenido
let azul;//dó
let azul_sustenido;//dó sustenido--> azul sustenido
let roxo;//re
let roxo_sustenido;//ré sustenido--> roxo sustenido
let rosa;//mi
let amarelo;//sol
let amarelo_sustenido;//sol sustenido--> amarelo sustenido
let ciano;//si


// audios:
var Do;//azul
var Do_sustenido;//azul sustenido-->do sutenido
var Re;//roxo
var Re_sustenido;//roxo sustenido--> ré sustenido
var Mi;//rosa
var Fa;//vermelho
var Fa_sustenido;//vermelho sustenido --> fá sustenido
var Sol;//amarelo
var Sol_sustenido;//amarelo sustenido --> sol sustenido
var La;//verde
var La_sustenido;//verde sustenido --> lá sustenido
var Si;//ciano


//Oitava +1

//cores distancias
let distancia_vermelho_Oitava_mais1;//fá
let distancia_vermelho_sustenido_Oitava_mais1;//fá sustenido--> vermelho sustenido
let distancia_verde_Oitava_mais1;//lá
let distancia_verde_sustenido_Oitava_mais1;//lá sustenido--> verde sustenido
let distancia_azul_Oitava_mais1;//dó
let distancia_azul_sustenido_Oitava_mais1;//dó sustenido--> azul sustenido
let distancia_roxo_Oitava_mais1;//re
let distancia_roxo_sustenido_Oitava_mais1;//ré sustenido--> roxo sustenido
let distancia_rosa_Oitava_mais1;//mi
let distancia_amarelo_Oitava_mais1;//sol
let distancia_amarelo_sustenido_Oitava_mais1;//sol sustenido--> amarelo sustenido
let distancia_ciano_Oitava_mais1;//si

//cores
let vermelho_Oitava_mais1;//fá
let vermelho_sustenido_Oitava_mais1;//fá sustenido--> vermelho sustenido
let verde_Oitava_mais1;//lá
let verde_sustenido_Oitava_mais1;//lá sustenido--> verde sustenido
let azul_Oitava_mais1;//dó
let azul_sustenido_Oitava_mais1;//dó sustenido--> azul sustenido
let roxo_Oitava_mais1;//re
let roxo_sustenido_Oitava_mais1;//ré sustenido--> roxo sustenido
let rosa_Oitava_mais1;//mi
let amarelo_Oitava_mais1;//sol
let amarelo_sustenido_Oitava_mais1;//sol sustenido--> amarelo sustenido
let ciano_Oitava_mais1;//si


// audios:
var Do_Oitava_mais1;//azul
var Do_sustenido_Oitava_mais1;//azul sustenido-->do sutenido
var Re_Oitava_mais1;//roxo
var Re_sustenido_Oitava_mais1;//roxo sustenido--> ré sustenido
var Mi_Oitava_mais1;//rosa
var Fa_Oitava_mais1;//vermelho
var Fa_sustenido_Oitava_mais1;//vermelho sustenido --> fá sustenido
var Sol_Oitava_mais1;//amarelo
var Sol_sustenido_Oitava_mais1;//amarelo sustenido --> sol sustenido
var La_Oitava_mais1;//verde
var La_sustenido_Oitava_mais1;//verde sustenido --> lá sustenido
var Si_Oitava_mais1;//ciano

//Oitava +2

//cores distancias
let distancia_vermelho_Oitava_mais2;//fá
let distancia_vermelho_sustenido_Oitava_mais2;//fá sustenido--> vermelho sustenido
let distancia_verde_Oitava_mais2;//lá
let distancia_verde_sustenido_Oitava_mais2;//lá sustenido--> verde sustenido
let distancia_azul_Oitava_mais2;//dó
let distancia_azul_sustenido_Oitava_mais2;//dó sustenido--> azul sustenido
let distancia_roxo_Oitava_mais2;//re
let distancia_roxo_sustenido_Oitava_mais2;//ré sustenido--> roxo sustenido
let distancia_rosa_Oitava_mais2;//mi
let distancia_amarelo_Oitava_mais2;//sol
let distancia_amarelo_sustenido_Oitava_mais2;//sol sustenido--> amarelo sustenido
let distancia_ciano_Oitava_mais2;//si

//cores
let vermelho_Oitava_mais2;//fá
let vermelho_sustenido_Oitava_mais2;//fá sustenido--> vermelho sustenido
let verde_Oitava_mais2;//lá
let verde_sustenido_Oitava_mais2;//lá sustenido--> verde sustenido
let azul_Oitava_mais2;//dó
let azul_sustenido_Oitava_mais2;//dó sustenido--> azul sustenido
let roxo_Oitava_mais2;//re
let roxo_sustenido_Oitava_mais2;//ré sustenido--> roxo sustenido
let rosa_Oitava_mais2;//mi
let amarelo_Oitava_mais2;//sol
let amarelo_sustenido_Oitava_mais2;//sol sustenido--> amarelo sustenido
let ciano_Oitava_mais2;//si


// audios:
var Do_Oitava_mais2;//azul
var Do_sustenido_Oitava_mais2;//azul sustenido-->do sutenido
var Re_Oitava_mais2;//roxo
var Re_sustenido_Oitava_mais2;//roxo sustenido--> ré sustenido
var Mi_Oitava_mais2;//rosa
var Fa_Oitava_mais2;//vermelho
var Fa_sustenido_Oitava_mais2;//vermelho sustenido --> fá sustenido
var Sol_Oitava_mais2;//amarelo
var Sol_sustenido_Oitava_mais2;//amarelo sustenido --> sol sustenido
var La_Oitava_mais2;//verde
var La_sustenido_Oitava_mais2;//verde sustenido --> lá sustenido
var Si_Oitava_mais2;//ciano


//Oitava +3

//cores distancias
let distancia_vermelho_Oitava_mais3;//fá
let distancia_vermelho_sustenido_Oitava_mais3;//fá sustenido--> vermelho sustenido
let distancia_verde_Oitava_mais3;//lá
let distancia_verde_sustenido_Oitava_mais3;//lá sustenido--> verde sustenido
let distancia_azul_Oitava_mais3;//dó
let distancia_azul_sustenido_Oitava_mais3;//dó sustenido--> azul sustenido
let distancia_roxo_Oitava_mais3;//re
let distancia_roxo_sustenido_Oitava_mais3;//ré sustenido--> roxo sustenido
let distancia_rosa_Oitava_mais3;//mi
let distancia_amarelo_Oitava_mais3;//sol
let distancia_amarelo_sustenido_Oitava_mais3;//sol sustenido--> amarelo sustenido
let distancia_ciano_Oitava_mais3;//si

//cores
let vermelho_Oitava_mais3;//fá
let vermelho_sustenido_Oitava_mais3;//fá sustenido--> vermelho sustenido
let verde_Oitava_mais3;//lá
let verde_sustenido_Oitava_mais3;//lá sustenido--> verde sustenido
let azul_Oitava_mais3;//dó
let azul_sustenido_Oitava_mais3;//dó sustenido--> azul sustenido
let roxo_Oitava_mais3;//re
let roxo_sustenido_Oitava_mais3;//ré sustenido--> roxo sustenido
let rosa_Oitava_mais3;//mi
let amarelo_Oitava_mais3;//sol
let amarelo_sustenido_Oitava_mais3;//sol sustenido--> amarelo sustenido
let ciano_Oitava_mais3;//si


// audios:
var Do_Oitava_mais3;//azul
var Do_sustenido_Oitava_mais3;//azul sustenido-->do sutenido
var Re_Oitava_mais3;//roxo
var Re_sustenido_Oitava_mais3;//roxo sustenido--> ré sustenido
var Mi_Oitava_mais3;//rosa
var Fa_Oitava_mais3;//vermelho
var Fa_sustenido_Oitava_mais3;//vermelho sustenido --> fá sustenido
var Sol_Oitava_mais3;//amarelo
var Sol_sustenido_Oitava_mais3;//amarelo sustenido --> sol sustenido
var La_Oitava_mais3;//verde
var La_sustenido_Oitava_mais3;//verde sustenido --> lá sustenido
var Si_Oitava_mais3;//ciano


let app_div;
let settings;


let volume;
let valor_volume_1;
let valor_volume = 0.5;


let beat;
let valor_beat_1;
let valor_beat = 100;

let Delay;
let f;
let tempo = 500;

var timeout;
var menu_contar = 0;

let select;
let constraints;

let button;
let option;

let b;
let x = 0;

let stream;

let supports;
let constrain;
//coisas que não estão a ser usadas (mais ou menos)
var capture;
let doPlay = false;
let doSustenidoPlay = false;
let rePlay = false;
let reSustenidoPlay = false;
let miPlay = false;
let faPlay = false;
let faSustenidoPlay = false;
let solPlay = false;
let solSustenidoPlay = false;
let laPlay = false;
let laSustenidoPlay = false;
let siPlay = false;
let switchFlag = false;
let imageBtn;
let pode_clicar;
var animation;

var options = {
    video: {

        facingMode: {
            exact: "user"
        }
    }
};

function preload() {
    //Setup de Audios --> HOWLER

    //oitava -3
    //azul--> do
    Do_Oitava_menos3 = new Howl({
        src: ["Sons/1Oitava/CMenos3.wav"]

    });
    //azul sustenido-->do sutenido
    Do_sustenido_Oitava_menos3 = new Howl({
        src: ["Sons/1Oitava/CSMenos3.wav"]

    });
    //roxo--> re
    Re_Oitava_menos3 = new Howl({
        src: ["Sons/1Oitava/DMenos3.wav"]

    });
    //roxo sustenido--> re sustenido
    Re_sustenido_Oitava_menos3 = new Howl({
        src: ["Sons/1Oitava/DSMenos3.wav"]

    });
    //rosa--> mi
    Mi_Oitava_menos3 = new Howl({
        src: ["Sons/1Oitava/EMenos3.wav"]
    });
    //vermelho-->fa
    Fa_Oitava_menos3 = new Howl({
        src: ["Sons/1Oitava/FMenos3.wav"]

    });
    //vermelho sustenido --> fá sustenido
    Fa_sustenido_Oitava_menos3 = new Howl({
        src: ["Sons/1Oitava/FSMenos3.wav"]

    });
    //amarelo-->sol
    Sol_Oitava_menos3 = new Howl({
        src: ["Sons/1Oitava/GMenos3.wav"]

    });
    //amarelo sustenido --> sol sustenido
    Sol_sustenido_Oitava_menos3 = new Howl({
        src: ["Sons/1Oitava/GSMenos3.wav"]

    });
    //verde-->la
    La_Oitava_menos3 = new Howl({
        src: ["Sons/1Oitava/AMenos3.wav"]

    });
    //verde sustenido --> lá sustenido
    La_sustenido_Oitava_menos3 = new Howl({
        src: ["Sons/1Oitava/ASMenos3.wav"]

    });
    //ciano-->si
    Si_Oitava_menos3 = new Howl({
        src: ["Sons/1Oitava/BMenos3.wav"]

    });


    //oitava -2
    //azul--> do
    Do_Oitava_menos2 = new Howl({
        src: ["Sons/2Oitava/C_Menos2.wav"]

    });
    //azul sustenido-->do sutenido
    Do_sustenido_Oitava_menos2 = new Howl({
        src: ["Sons/2Oitava/CS_Menos2.wav"]

    });
    //roxo--> re
    Re_Oitava_menos2 = new Howl({
        src: ["Sons/2Oitava/D_Menos2.wav"]

    });
    //roxo sustenido--> re sustenido
    Re_sustenido_Oitava_menos2 = new Howl({
        src: ["Sons/2Oitava/DS_Menos2.wav"]

    });
    //rosa--> mi
    Mi_Oitava_menos2 = new Howl({
        src: ["Sons/2Oitava/E_Menos2.wav"]
    });
    //vermelho-->fa
    Fa_Oitava_menos2 = new Howl({
        src: ["Sons/2Oitava/F_Menos2.wav"]

    });
    //vermelho sustenido --> fá sustenido
    Fa_sustenido_Oitava_menos2 = new Howl({
        src: ["Sons/2Oitava/FS_Menos2.wav"]

    });
    //amarelo-->sol
    Sol_Oitava_menos2 = new Howl({
        src: ["Sons/2Oitava/G_Menos2.wav"]

    });
    //amarelo sustenido --> sol sustenido
    Sol_sustenido_Oitava_menos2 = new Howl({
        src: ["Sons/2Oitava/GS_Menos2.wav"]

    });
    //verde-->la
    La_Oitava_menos2 = new Howl({
        src: ["Sons/2Oitava/A_Menos2.wav"]

    });
    //verde sustenido --> lá sustenido
    La_sustenido_Oitava_menos2 = new Howl({
        src: ["Sons/2Oitava/AS_Menos2.wav"]

    });
    //ciano-->si
    Si_Oitava_menos2 = new Howl({
        src: ["Sons/2Oitava/B_Menos2.wav"]

    });


    //oitava -1
    //azul--> do
    Do_Oitava_menos1 = new Howl({
        src: ["Sons/3Oitava/C_Menos1.wav"]

    });
    //azul sustenido-->do sutenido
    Do_sustenido_Oitava_menos1 = new Howl({
        src: ["Sons/3Oitava/CS_Menos1.wav"]

    });
    //roxo--> re
    Re_Oitava_menos1 = new Howl({
        src: ["Sons/3Oitava/D_Menos1.wav"]

    });
    //roxo sustenido--> re sustenido
    Re_sustenido_Oitava_menos1 = new Howl({
        src: ["Sons/3Oitava/DS_Menos1.wav"]

    });
    //rosa--> mi
    Mi_Oitava_menos1 = new Howl({
        src: ["Sons/3Oitava/E_Menos1.wav"]
    });
    //vermelho-->fa
    Fa_Oitava_menos1 = new Howl({
        src: ["Sons/3Oitava/F_Menos1.wav"]

    });
    //vermelho sustenido --> fá sustenido
    Fa_sustenido_Oitava_menos1 = new Howl({
        src: ["Sons/3Oitava/FS_Menos1.wav"]

    });
    //amarelo-->sol
    Sol_Oitava_menos1 = new Howl({
        src: ["Sons/3Oitava/G_Menos1.wav"]

    });
    //amarelo sustenido --> sol sustenido
    Sol_sustenido_Oitava_menos1 = new Howl({
        src: ["Sons/3Oitava/GS_Menos1.wav"]

    });
    //verde-->la
    La_Oitava_menos1 = new Howl({
        src: ["Sons/3Oitava/A_Menos1.wav"]

    });
    //verde sustenido --> lá sustenido
    La_sustenido_Oitava_menos1 = new Howl({
        src: ["Sons/3Oitava/AS_Menos1.wav"]

    });
    //ciano-->si
    Si_Oitava_menos1 = new Howl({
        src: ["Sons/3Oitava/B_Menos1.wav"]

    });

    //Oitava meio
//dó
    Do = new Howl({
        src: ["Sons/4Oitava/C.wav"]

    });
//dó sustenido
    Do_sustenido = new Howl({
        src: ["Sons/4Oitava/CS.wav"]

    });
//ré
    Re = new Howl({
        src: ["Sons/4Oitava/D.wav"]

    });
//ré sustenido
    Re_sustenido = new Howl({
        src: ["Sons/4Oitava/DS.wav"]

    });
//mi
    Mi = new Howl({
        src: ["Sons/4Oitava/E.wav"]

    });
//fá
    Fa = new Howl({
        src: ["Sons/4Oitava/F.wav"]

    });
//fá sustenido
    Fa_sustenido = new Howl({
        src: ["Sons/4Oitava/FS.wav"]

    });
//sol
    Sol = new Howl({
        src: ["Sons/4Oitava/G.wav"]

    });
//sol sustenido
    Sol_sustenido = new Howl({
        src: ["Sons/4Oitava/GS.wav"]

    });
//lá
    La = new Howl({
        src: ["Sons/4Oitava/A.wav"]

    });
//lá sustenido
    La_sustenido = new Howl({
        src: ["Sons/4Oitava/AS.wav"]

    });
//si
    Si = new Howl({
        src: ["Sons/4Oitava/B.wav"]

    });


    //oitava +1
    //azul--> do
    Do_Oitava_mais1 = new Howl({
        src: ["Sons/5Oitava/C_Mais1.wav"]

    });
    //azul sustenido-->do sutenido
    Do_sustenido_Oitava_mais1 = new Howl({
        src: ["Sons/5Oitava/CS_Mais1.wav"]

    });
    //roxo--> re
    Re_Oitava_mais1 = new Howl({
        src: ["Sons/5Oitava/D_Mais1.wav"]

    });
    //roxo sustenido--> re sustenido
    Re_sustenido_Oitava_mais1 = new Howl({
        src: ["Sons/5Oitava/DS_Mais1.wav"]

    });
    //rosa--> mi
    Mi_Oitava_mais1 = new Howl({
        src: ["Sons/5Oitava/E_Mais1.wav"]
    });
    //vermelho-->fa
    Fa_Oitava_mais1 = new Howl({
        src: ["Sons/5Oitava/F_Mais1.wav"]

    });
    //vermelho sustenido --> fá sustenido
    Fa_sustenido_Oitava_mais1 = new Howl({
        src: ["Sons/5Oitava/FS_Mais1.wav"]

    });
    //amarelo-->sol
    Sol_Oitava_mais1 = new Howl({
        src: ["Sons/5Oitava/G_Mais1.wav"]

    });
    //amarelo sustenido --> sol sustenido
    Sol_sustenido_Oitava_mais1 = new Howl({
        src: ["Sons/5Oitava/GS_Mais1.wav"]

    });
    //verde-->la
    La_Oitava_mais1 = new Howl({
        src: ["Sons/5Oitava/A_Mais1.wav"]

    });
    //verde sustenido --> lá sustenido
    La_sustenido_Oitava_mais1 = new Howl({
        src: ["Sons/5Oitava/AS_Mais1.wav"]

    });
    //ciano-->si
    Si_Oitava_mais1 = new Howl({
        src: ["Sons/5Oitava/B_Mais1.wav"]

    });


    //oitava +2
    //azul--> do
    Do_Oitava_mais2 = new Howl({
        src: ["Sons/6Oitava/C_Mais2.wav"]

    });
    //azul sustenido-->do sutenido
    Do_sustenido_Oitava_mais2 = new Howl({
        src: ["Sons/6Oitava/CS_Mais2.wav"]

    });
    //roxo--> re
    Re_Oitava_mais2 = new Howl({
        src: ["Sons/6Oitava/D_Mais2.wav"]

    });
    //roxo sustenido--> re sustenido
    Re_sustenido_Oitava_mais2 = new Howl({
        src: ["Sons/6Oitava/DS_Mais2.wav"]

    });
    //rosa--> mi
    Mi_Oitava_mais2 = new Howl({
        src: ["Sons/6Oitava/E_Mais2.wav"]
    });
    //vermelho-->fa
    Fa_Oitava_mais2 = new Howl({
        src: ["Sons/6Oitava/F_Mais2.wav"]

    });
    //vermelho sustenido --> fá sustenido
    Fa_sustenido_Oitava_mais2 = new Howl({
        src: ["Sons/6Oitava/FS_Mais2.wav"]

    });
    //amarelo-->sol
    Sol_Oitava_mais2 = new Howl({
        src: ["Sons/6Oitava/G_Mais2.wav"]

    });
    //amarelo sustenido --> sol sustenido
    Sol_sustenido_Oitava_mais2 = new Howl({
        src: ["Sons/6Oitava/GS_Mais2.wav"]

    });
    //verde-->la
    La_Oitava_mais2 = new Howl({
        src: ["Sons/6Oitava/A_Mais2.wav"]

    });
    //verde sustenido --> lá sustenido
    La_sustenido_Oitava_mais2 = new Howl({
        src: ["Sons/6Oitava/AS_Mais2.wav"]

    });
    //ciano-->si
    Si_Oitava_mais2 = new Howl({
        src: ["Sons/6Oitava/B_Mais2.wav"]

    });


    //oitava +3
    //azul--> do
    Do_Oitava_mais3 = new Howl({
        src: ["Sons/7Oitava/C_Mais3.wav"]

    });
    //azul sustenido-->do sutenido
    Do_sustenido_Oitava_mais3 = new Howl({
        src: ["Sons/7Oitava/CS_Mais3.wav"]

    });
    //roxo--> re
    Re_Oitava_mais3 = new Howl({
        src: ["Sons/7Oitava/D_Mais3.wav"]

    });
    //roxo sustenido--> re sustenido
    Re_sustenido_Oitava_mais3 = new Howl({
        src: ["Sons/7Oitava/DS_Mais3.wav"]

    });
    //rosa--> mi
    Mi_Oitava_mais3 = new Howl({
        src: ["Sons/7Oitava/E_Mais3.wav"]
    });
    //vermelho-->fa
    Fa_Oitava_mais3 = new Howl({
        src: ["Sons/7Oitava/F_Mais3.wav"]

    });
    //vermelho sustenido --> fá sustenido
    Fa_sustenido_Oitava_mais3 = new Howl({
        src: ["Sons/7Oitava/FS_Mais3.wav"]

    });
    //amarelo-->sol
    Sol_Oitava_mais3 = new Howl({
        src: ["Sons/7Oitava/G_Mais3.wav"]

    });
    //amarelo sustenido --> sol sustenido
    Sol_sustenido_Oitava_mais3 = new Howl({
        src: ["Sons/7Oitava/GS_Mais3.wav"]

    });
    //verde-->la
    La_Oitava_mais3 = new Howl({
        src: ["Sons/7Oitava/A_Mais3.wav"]

    });
    //verde sustenido --> lá sustenido
    La_sustenido_Oitava_mais3 = new Howl({
        src: ["Sons/7Oitava/AS_Mais3.wav"]

    });
    //ciano-->si
    Si_Oitava_mais3 = new Howl({
        src: ["Sons/7Oitava/B_Mais3.wav"]

    });

}



function setup() {


    console.log("displaySettings: " + displaySettings);
    console.log("displayVideo:" + displayVideo);


    app_div = document.getElementById("paginaApp");

    let app = createCanvas(innerWidth, innerHeight);
    app.parent('aplicação');
    console.log("aplicação");


    //video

    capture = createCapture(options);
    capture.volume(0);
    capture.parent(app);
    capture.hide();

    //video inicial
   // captura1=createCapture();
   // captura1.volume(0);
    //captura1.parent('aplicação');
    //captura1.position(0,0);
   // captura1.size(innerWidth,innerHeight);







    imageBtn = createImg('iconcamera.png');

    imageBtn.parent(app);
    imageBtn.hide();
    imageMode(CENTER);

        botao = createImg('iconcamera.png');
        botao.parent('aplicação');
        botao.position(innerWidth / 2 - 40, innerHeight - 90);
        botao.size(20 * 4, 20 * 4);






    imageMode(CORNER);
    button = createImg('flipCamara.png');
    button.mousePressed(switchCamera);
    button.parent('aplicação');
    button.position(30, innerHeight - 55);


    for (var i = 0; i < 0; i++) {
        bubbles.push(new Bubbles(mouseX, mouseY));
    }
    x1 = innerWidth / 2;
    y1 = innerHeight - 50;
    r = 20 * 4;
    //setup de cores;
    //Oitava -3
    vermelho_Oitava_menos3 = color(112, 0, 0);//fá
    vermelho_sustenido_Oitava_menos3 = color(113, 34, 2);//fá sustenido--> vermelho sustenido
    verde_Oitava_menos3 = color(42, 87, 22);//lá
    verde_sustenido_Oitava_menos3 = color(0, 78, 74);//lá sustenido--> verde sustenido
    azul_Oitava_menos3 = color(8, 52, 92);//dó
    azul_sustenido_Oitava_menos3 = color(1, 10, 66);//dó sustenido--> azul sustenido
    roxo_Oitava_menos3 = color(44, 1, 73);//re
    roxo_sustenido_Oitava_menos3 = color(83, 0, 62);//ré sustenido--> roxo sustenido
    rosa_Oitava_menos3 = color(113, 1, 48);//mi
    amarelo_Oitava_menos3 = color(120, 114, 0);//sol
    amarelo_sustenido_Oitava_menos3 = color(84, 96, 8);//sol sustenido--> amarelo sustenido
    ciano_Oitava_menos3 = color(2, 85, 117);//si
    //Oitava -2
    vermelho_Oitava_menos2 = color(161, 10, 17);//fá
    vermelho_sustenido_Oitava_menos2 = color(158, 59, 13);//fá sustenido--> vermelho sustenido
    verde_Oitava_menos2 = color(75, 124, 40);//lá
    verde_sustenido_Oitava_menos2 = color(1, 109, 102);//lá sustenido--> verde sustenido
    azul_Oitava_menos2 = color(31, 78, 128);//dó
    azul_sustenido_Oitava_menos2 = color(15, 36, 91);//dó sustenido--> azul sustenido
    roxo_Oitava_menos2 = color(69, 16, 104);//re
    roxo_sustenido_Oitava_menos2 = color(113, 3, 92);//ré sustenido--> roxo sustenido
    rosa_Oitava_menos2 = color(161, 5, 76);//mi
    amarelo_Oitava_menos2 = color(171, 160, 10);//sol
    amarelo_sustenido_Oitava_menos2 = color(121, 134, 28);//sol sustenido--> amarelo sustenido
    ciano_Oitava_menos2 = color(2, 116, 158);//si
    //Oitava -1
    vermelho_Oitava_menos1 = color(197, 21, 31);//fá
    vermelho_sustenido_Oitava_menos1 = color(210, 74, 29);//fá sustenido--> vermelho sustenido
    verde_Oitava_menos1 = color(100, 156, 60);//lá
    verde_sustenido_Oitava_menos1 = color(1, 140, 127);//lá sustenido--> verde sustenido
    azul_Oitava_menos1 = color(42, 102, 157);//dó
    azul_sustenido_Oitava_menos1 = color(28, 48, 117);//dó sustenido--> azul sustenido
    roxo_Oitava_menos1 = color(82, 28, 120);//re
    roxo_sustenido_Oitava_menos1 = color(140, 21, 113);//ré sustenido--> roxo sustenido
    rosa_Oitava_menos1 = color(199, 1, 97);//mi
    amarelo_Oitava_menos1 = color(219, 199, 11);//sol
    amarelo_sustenido_Oitava_menos1 = color(157, 171, 36);//sol sustenido--> amarelo sustenido
    ciano_Oitava_menos1 = color(4, 149, 184);//si
    //Oitava do meio
    vermelho = color(241, 26, 41);//fá
    vermelho_sustenido = color(246, 86, 38);//fá sustenido
    verde = color(114, 182, 61);//lá
    verde_sustenido = color(2, 160, 155);//lá sustenido
    azul = color(2, 123, 196);//do
    azul_sustenido = color(25, 79, 129);//do sustenido
    roxo = color(98, 42, 148);//re
    roxo_sustenido = color(173, 33, 139);//re sustenido
    rosa = color(233, 12, 113);//mi
    amarelo = color(255, 239, 6);//sol
    amarelo_sustenido = color(186, 204, 40);//sol sustenido
    ciano = color(0, 172, 235);//si
    //Oitava +1
    vermelho_Oitava_mais1 = color(249, 107, 85);//fá
    vermelho_sustenido_Oitava_mais1 = color(242, 140, 82);//fá sustenido--> vermelho sustenido
    verde_Oitava_mais1 = color(158, 199, 116);//lá
    verde_sustenido_Oitava_mais1 = color(54, 180, 176);//lá sustenido--> verde sustenido
    azul_Oitava_mais1 = color(63, 150, 208);//dó
    azul_sustenido_Oitava_mais1 = color(97, 114, 162);//dó sustenido--> azul sustenido
    roxo_Oitava_mais1 = color(133, 95, 168);//re
    roxo_sustenido_Oitava_mais1 = color(185, 106, 165);//ré sustenido--> roxo sustenido
    rosa_Oitava_mais1 = color(239, 113, 149);//mi
    amarelo_Oitava_mais1 = color(253, 243, 112);//sol
    amarelo_sustenido_Oitava_mais1 = color(207, 216, 122);//sol sustenido--> amarelo sustenido
    ciano_Oitava_mais1 = color(1, 191, 238);//si
    //Oitava +2
    vermelho_Oitava_mais2 = color(254, 156, 131);//fá
    vermelho_sustenido_Oitava_mais2 = color(245, 177, 141);//fá sustenido--> vermelho sustenido
    verde_Oitava_mais2 = color(191, 220, 161);//lá
    verde_sustenido_Oitava_mais2 = color(138, 203, 200);//lá sustenido--> verde sustenido
    azul_Oitava_mais2 = color(139, 178, 217);//dó
    azul_sustenido_Oitava_mais2 = color(150, 158, 194);//dó sustenido--> azul sustenido
    roxo_Oitava_mais2 = color(172, 147, 193);//re
    roxo_sustenido_Oitava_mais2 = color(209, 156, 195);//ré sustenido--> roxo sustenido
    rosa_Oitava_mais2 = color(248, 161, 183);//mi
    amarelo_Oitava_mais2 = color(253, 246, 158);//sol
    amarelo_sustenido_Oitava_mais2 = color(226, 231, 168);//sol sustenido--> amarelo sustenido
    ciano_Oitava_mais2 = color(120, 208, 251);//si
    //Oitava +3
    vermelho_Oitava_mais3 = color(250, 204, 189);//fá
    vermelho_sustenido_Oitava_mais3 = color(251, 215, 193);//fá sustenido--> vermelho sustenido
    verde_Oitava_mais3 = color(224, 233, 205);//lá
    verde_sustenido_Oitava_mais3 = color(193, 225, 224);//lá sustenido--> verde sustenido
    azul_Oitava_mais3 = color(189, 212, 236);//dó
    azul_sustenido_Oitava_mais3 = color(194, 198, 216);//dó sustenido--> azul sustenido
    roxo_Oitava_mais3 = color(207, 194, 226);//re
    roxo_sustenido_Oitava_mais3 = color(229, 202, 224);//ré sustenido--> roxo sustenido
    rosa_Oitava_mais3 = color(250, 208, 217);//mi
    amarelo_Oitava_mais3 = color(253, 251, 211);//sol
    amarelo_sustenido_Oitava_mais3 = color(244, 245, 217);//sol sustenido--> amarelo sustenido
    ciano_Oitava_mais3 = color(191, 232, 252);//si


    settings = document.getElementById("settings");

    volume = createSlider(1, 100, 50);
    volume.parent('volume');
    console.log("Volume");

    beat = createSlider(1, 100, 5);
    beat.parent('beat');
    console.log("Batida");





}







function switchCamera() {
    switchFlag = !switchFlag;
    stopCapture();
    if (switchFlag === true) {

        options = {
            video: {
                facingMode: {
                    exact: "environment"
                }
            }
        };

    }
    else {

        options = {
            video: {
                facingMode: {
                    exact: "user"
                }
            }
        };
    }
    capture = createCapture(options);
    capture.volume(0);
    capture.hide();

}

function stopCapture() {
    let stream = capture.elt.srcObject;
    let tracks = stream.getTracks();

    tracks.forEach(function (track) {
        track.stop();
    });

    capture.elt.srcObject = null;
}







function draw() {
        if(executado===true){
            botao.hide();
            //captura1.hide();
        }
        background(0);

    console.log("displaySettings: " + displaySettings);
    console.log("displayVideo:" + displayVideo);
    if (displaySettings === true && menu_contar % 2 === 0) {

        valor_volume_1 = volume.value();
        valor_volume = map(valor_volume_1, 0, 100, 0, 1);
        console.log("Volume:" + valor_volume);

        valor_beat_1 = beat.value();
        valor_beat = map(valor_beat_1, 1, 100, 100, 5000); //mudar os segundos valores
        console.log("beat: " + valor_beat);
        console.log("tempo: " + tempo);
    }

    //Volume -->HOWLER
    Howler.volume(valor_volume);

    //Volume --> P5
    /*Do.volume(valor_volume);
    console.log("volume do" + Do.volume(valor_volume));
    console.log("volume do" + valor_volume);
    Re.volume(valor_volume);
    Mi.volume(valor_volume);
    Fa.volume(valor_volume);
    Sol.volume(valor_volume);
    La.volume(valor_volume);
    Si.volume(valor_volume);*/

    //Delay
    console.log("tempo_1: " + tempo);
    tempo = valor_beat;


    if (displayVideo === true || displaySettings === true) {

//ANIMAÇÂO INICIAL



            //imagem

            imageMode(CORNER);
            image(capture, 0, 0, width, height);


            for (var i = 0; i < bubbles.length; i++) {

                bubbles[i].display();

            }


            if (dist(x1, y1, mouseX, mouseY) <= r / 2) {
                rollover = true;
            } else {
                rollover = false;
            }
            if (dragging === true) {
                if (mouseX >= r / 2 &&
                    mouseX <= width - r / 2 && mouseY >= r / 2 &&
                    mouseY <= height - r / 2) {

                    x1 = mouseX + offsetX;
                    y1 = mouseY + offsetY;
                }
            }
//imagem
            imageMode(CENTER);
            image(imageBtn, x1, y1, r, r);
//tocarSom();


        }



}



//generator

function* bubblesLenght() {
    console.log("index;2");
    yield i = 0;
    while (true) {
        yield i = 1 + numeral;

    }

}

function aumentar(numeros) {
    //numeral=numeros % bubbles.length;

    if (numeros < bubbles.length) {
        numeral = numeros;
        console.log("index:" + numeral);
        som();
    }
    else {
        numeral = 0;
        console.log("index:" + numeral);
        som();
    }

}

let numeral;
let iterator1 = bubblesLenght();


function tocarSom() {
    console.log("index;");
    som1();

}

function som1() {
    console.log("index;1");
    let numero1 = iterator1.next().value;

    console.log("index: " + numero1);

    aumentar(numero1);
}

//funções de som--> PARAR

function Pararsom() {
    bubbles[numeral].r_bolinhas = 24;
    tocar();
}
let playSound;
//funcções de som ---> voltar a tocar o som
function tocar() {
    playSound=false;
    tocarSom();

}


function som() {

    console.log("index:" + numeral);

    console.log("index:" + numeral);
    console.log("index_distancia:" + distancias[numeral]);
    let dists = round(((distancias[numeral] / 2) * tempo) / 15);
    valor_volume_1=valor_volume_1*(distancias[numeral] / 2);
    valor_volume = map(valor_volume_1, 0, innerHeight-10*valor_volume_1, 0, 1);

    console.log("index_distancia:" + dists);
    Howler.volume(valor_volume);


    //funções de som --> TOCAR
    //fa
    if (bubbles[numeral].distancia_vermelho / 10 < limite
        || bubbles[numeral].distancia_vermelho_sustenido / 10 < limite
        || bubbles[numeral].distancia_verde / 10 < limite
        || bubbles[numeral].distancia_verde_sustenido / 10 < limite
        || bubbles[numeral].distancia_azul / 10 < limite
        || bubbles[numeral].distancia_azul_sustenido / 10 < limite
        || bubbles[numeral].distancia_roxo / 10 < limite
        || bubbles[numeral].distancia_roxo_sustenido / 10 < limite
        || bubbles[numeral].distancia_rosa / 10 < limite
        || bubbles[numeral].distancia_amarelo / 10 < limite
        || bubbles[numeral].distancia_amarelo_sustenido / 10 < limite
        || bubbles[numeral].distancia_ciano / 10 < limite
        || bubbles[numeral].distancia_vermelho_Oitava_menos3 / 10 < limite
        || bubbles[numeral].distancia_vermelho_sustenido_Oitava_menos3 / 10 < limite
        || bubbles[numeral].distancia_verde_Oitava_menos3 / 10 < limite
        || bubbles[numeral].distancia_verde_sustenido_Oitava_menos3 / 10 < limite
        || bubbles[numeral].distancia_azul_Oitava_menos3 / 10 < limite
        || bubbles[numeral].distancia_azul_sustenido_Oitava_menos3 / 10 < limite
        || bubbles[numeral].distancia_roxo_Oitava_menos3 / 10 < limite
        || bubbles[numeral].distancia_roxo_sustenido_Oitava_menos3 / 10 < limite
        || bubbles[numeral].distancia_rosa_Oitava_menos3 / 10 < limite
        || bubbles[numeral].distancia_amarelo_Oitava_menos3 / 10 < limite
        || bubbles[numeral].distancia_amarelo_sustenido_Oitava_menos3 / 10 < limite
        || bubbles[numeral].distancia_ciano_Oitava_menos3 / 10 < limite
        || bubbles[numeral].distancia_vermelho_Oitava_menos2 / 10 < limite
        || bubbles[numeral].distancia_vermelho_sustenido_Oitava_menos2 / 10 < limite
        || bubbles[numeral].distancia_verde_Oitava_menos2 / 10 < limite
        || bubbles[numeral].distancia_verde_sustenido_Oitava_menos2 / 10 < limite
        || bubbles[numeral].distancia_azul_Oitava_menos2 / 10 < limite
        || bubbles[numeral].distancia_azul_sustenido_Oitava_menos2 / 10 < limite
        || bubbles[numeral].distancia_roxo_Oitava_menos2 / 10 < limite
        || bubbles[numeral].distancia_roxo_sustenido_Oitava_menos2 / 10 < limite
        || bubbles[numeral].distancia_rosa_Oitava_menos2 / 10 < limite
        || bubbles[numeral].distancia_amarelo_Oitava_menos2 / 10 < limite
        || bubbles[numeral].distancia_amarelo_sustenido_Oitava_menos2 / 10 < limite
        || bubbles[numeral].distancia_ciano_Oitava_menos2 / 10 < limite
        || bubbles[numeral].distancia_vermelho_Oitava_menos1 / 10 < limite
        || bubbles[numeral].distancia_vermelho_sustenido_Oitava_menos1 / 10 < limite
        || bubbles[numeral].distancia_verde_Oitava_menos1 / 10 < limite
        || bubbles[numeral].distancia_verde_sustenido_Oitava_menos1 / 10 < limite
        || bubbles[numeral].distancia_azul_Oitava_menos1 / 10 < limite
        || bubbles[numeral].distancia_azul_sustenido_Oitava_menos1 / 10 < limite
        || bubbles[numeral].distancia_roxo_Oitava_menos1 / 10 < limite
        || bubbles[numeral].distancia_roxo_sustenido_Oitava_menos1 / 10 < limite
        || bubbles[numeral].distancia_rosa_Oitava_menos1 / 10 < limite
        || bubbles[numeral].distancia_amarelo_Oitava_menos1 / 10 < 8
        || bubbles[numeral].distancia_amarelo_sustenido_Oitava_menos1 / 10 < limite
        || bubbles[numeral].distancia_ciano_Oitava_menos1 / 10 < limite
        || bubbles[numeral].distancia_vermelho_Oitava_mais1 / 10 < limite
        || bubbles[numeral].distancia_vermelho_sustenido_Oitava_mais1 / 10 < limite
        || bubbles[numeral].distancia_verde_Oitava_mais1 / 10 < limite
        || bubbles[numeral].distancia_verde_sustenido_Oitava_mais1 / 10 < limite
        || bubbles[numeral].distancia_azul_Oitava_mais1 / 10 < limite
        || bubbles[numeral].distancia_azul_sustenido_Oitava_mais1 / 10 < limite
        || bubbles[numeral].distancia_roxo_Oitava_mais1 / 10 < limite
        || bubbles[numeral].distancia_roxo_sustenido_Oitava_mais1 / 10 < limite
        || bubbles[numeral].distancia_rosa_Oitava_mais1 / 10 < limite
        || bubbles[numeral].distancia_amarelo_Oitava_mais1 / 10 < limite
        || bubbles[numeral].distancia_amarelo_sustenido_Oitava_mais1 / 10 < limite
        || bubbles[numeral].distancia_ciano_Oitava_mais1 / 10 < limite
        || bubbles[numeral].distancia_vermelho_Oitava_mais2 / 10 < limite
        || bubbles[numeral].distancia_vermelho_sustenido_Oitava_mais2 / 10 < limite
        || bubbles[numeral].distancia_verde_Oitava_mais2 / 10 < limite
        || bubbles[numeral].distancia_verde_sustenido_Oitava_mais2 / 10 < limite
        || bubbles[numeral].distancia_azul_Oitava_mais2 / 10 < limite
        || bubbles[numeral].distancia_azul_sustenido_Oitava_mais2 / 10 < limite
        || bubbles[numeral].distancia_roxo_Oitava_mais2 / 10 < limite
        || bubbles[numeral].distancia_roxo_sustenido_Oitava_mais2 / 10 < limite
        || bubbles[numeral].distancia_rosa_Oitava_mais2 / 10 < limite
        || bubbles[numeral].distancia_amarelo_Oitava_mais2 / 10 < limite
        || bubbles[numeral].distancia_amarelo_sustenido_Oitava_mais2 / 10 < limite
        || bubbles[numeral].distancia_ciano_Oitava_mais2 / 10 < limite
        || bubbles[numeral].distancia_vermelho_Oitava_mais3 / 10 < limite
        || bubbles[numeral].distancia_vermelho_sustenido_Oitava_mais3 / 10 < limite
        || bubbles[numeral].distancia_verde_Oitava_mais3 / 10 < limite
        || bubbles[numeral].distancia_verde_sustenido_Oitava_mais3 / 10 < limite
        || bubbles[numeral].distancia_azul_Oitava_mais3 / 10 < limite
        || bubbles[numeral].distancia_azul_sustenido_Oitava_mais3 / 10 < limite
        || bubbles[numeral].distancia_roxo_Oitava_mais3 / 10 < limite
        || bubbles[numeral].distancia_roxo_sustenido_Oitava_mais3 / 10 < limite
        || bubbles[numeral].distancia_rosa_Oitava_mais3 / 10 < limite
        || bubbles[numeral].distancia_amarelo_Oitava_mais3 / 10 < limite
        || bubbles[numeral].distancia_amarelo_sustenido_Oitava_mais3 / 10 < limite
        || bubbles[numeral].distancia_ciano_Oitava_mais3 / 10 < limite
    ) {
        //novo
        bubbles[numeral].r_bolinhas = bubbles[numeral].r_bolinhas + aumento;

        console.log("NOTA: há som");
        //Oitava -3
        if (bubbles[numeral].distancia_vermelho_Oitava_menos3 / 10 < limite && playSound===false) {
            playSound=true;

            Fa_Oitava_menos3.play();
            console.log(" NOTA: fa");


        }
        else {
            faPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");


        }
        //fa sustenido
        if (bubbles[numeral].distancia_vermelho_sustenido_Oitava_menos3 / 10 < limite && playSound===false) {
            playSound=true;
            faSustenidoPlay = true;
            Fa_sustenido_Oitava_menos3.play();
            console.log("NOTA: fa sustenido");


        }
        else {
            faSustenidoPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");


        }
        //la
        if (bubbles[numeral].distancia_verde_Oitava_menos3 / 10 < limite && playSound===false) {
            playSound=true;
            laPlay = true;
            La_Oitava_menos3.play();
            console.log("NOTA: LA");


        } else {
            laPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        if (bubbles[numeral].distancia_verde_sustenido_Oitava_menos3 / 10 < limite && playSound===false) {
            playSound=true;
            laSustenidoPlay = true;
            La_sustenido_Oitava_menos3.play();
            console.log("NOTA: LA sustenido");


        } else {
            laSustenidoPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //do
        if (bubbles[numeral].distancia_azul_Oitava_menos3 / 10 < limite && playSound===false) {
            playSound=true;
            doPlay = true;
            Do_Oitava_menos3.play();
            console.log("NOTA: DO");


        } else {
            doPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //do sustenido
        if (bubbles[numeral].distancia_azul_sustenido_Oitava_menos3 / 10 < limite && playSound===false) {
            playSound=true;
            doSustenidoPlay = true;
            Do_sustenido_Oitava_menos3.play();
            console.log("NOTA: DO sustenido");


        } else {
            doSustenidoPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //re
        if (bubbles[numeral].distancia_roxo_Oitava_menos3 / 10 < limite && playSound===false) {
            playSound=true;
            rePlay = true;
            Re_Oitava_menos3.play();
            console.log("NOTA: RE");


        }
        else {
            rePlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //re sustenido
        if (bubbles[numeral].distancia_roxo_sustenido_Oitava_menos3 / 10 < limite && playSound===false) {
            playSound=true;
            reSustenidoPlay = true;
            Re_sustenido_Oitava_menos3.play();
            console.log("NOTA: RE sustenido");


        } else {
            reSustenidoPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //mi
        if (bubbles[numeral].distancia_rosa_Oitava_menos3 / 10 < limite && playSound===false) {
            playSound=true;
            miPlay = true;
            Mi_Oitava_menos3.play();
            console.log("NOTA: MI");


        } else {
            miPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //sol
        if (bubbles[numeral].distancia_amarelo_Oitava_menos3 / 10 < limite && playSound===false) {
            playSound=true;
            solPlay = true;
            Sol_Oitava_menos3.play();
            console.log("NOTA: SOL");


        }
        else {
            solPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        if (bubbles[numeral].distancia_amarelo_sustenido_Oitava_menos3 / 10 < limite && playSound===false) {
            playSound=true;
            solSustenidoPlay = true;
            Sol_sustenido_Oitava_menos3.play();
            console.log("NOTA: SOL sustenido");


        } else {
            solSustenidoPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        if (bubbles[numeral].distancia_ciano_Oitava_menos3 / 10 < limite && playSound===false) {
            playSound=true;
            siPlay = true;
            Si_Oitava_menos3.play();
            console.log("NOTA: SI");


        }
        else {
            siPlay = false;
            console.log("NOTA: Afinal não há som");
            console.log("index...");

        }


        //Oitava -2
        if (bubbles[numeral].distancia_vermelho_Oitava_menos2 / 10 < limite && playSound===false) {
            playSound=true;
            faPlay = true;
            Fa_Oitava_menos2.play();
            console.log(" NOTA: fa");


        }
        else {
            faPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //fa sustenido
        if (bubbles[numeral].distancia_vermelho_sustenido_Oitava_menos2 / 10 < limite && playSound===false) {
            playSound=true;
            faSustenidoPlay = true;
            Fa_sustenido_Oitava_menos2.play();
            console.log("NOTA: fa sustenido");


        }
        else {
            faSustenidoPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");


        }
        //la
        if (bubbles[numeral].distancia_verde_Oitava_menos2 / 10 < limite && playSound===false) {
            playSound=true;
            laPlay = true;
            La_Oitava_menos2.play();
            console.log("NOTA: LA");


        } else {
            laPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        if (bubbles[numeral].distancia_verde_sustenido_Oitava_menos2 / 10 < limite && playSound===false) {
            playSound=true;
            laSustenidoPlay = true;
            La_sustenido_Oitava_menos2.play();
            console.log("NOTA: LA sustenido");


        } else {
            laSustenidoPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //do
        if (bubbles[numeral].distancia_azul_Oitava_menos2 / 10 < limite && playSound===false) {
            playSound=true;
            doPlay = true;
            Do_Oitava_menos2.play();
            console.log("NOTA: DO");


        } else {
            doPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //do sustenido
        if (bubbles[numeral].distancia_azul_sustenido_Oitava_menos2 / 10 < limite && playSound===false) {
            playSound=true;
            doSustenidoPlay = true;
            Do_sustenido_Oitava_menos2.play();
            console.log("NOTA: DO sustenido");


        } else {
            doSustenidoPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //re
        if (bubbles[numeral].distancia_roxo_Oitava_menos2 / 10 < limite && playSound===false) {
            playSound=true;
            rePlay = true;
            Re_Oitava_menos2.play();
            console.log("NOTA: RE");


        }
        else {
            rePlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //re sustenido
        if (bubbles[numeral].distancia_roxo_sustenido_Oitava_menos2 / 10 < limite && playSound===false) {
            playSound=true;
            reSustenidoPlay = true;
            Re_sustenido_Oitava_menos2.play();
            console.log("NOTA: RE sustenido");


        } else {
            reSustenidoPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //mi
        if (bubbles[numeral].distancia_rosa_Oitava_menos2 / 10 < limite && playSound===false) {
            playSound=true;
            miPlay = true;
            Mi_Oitava_menos2.play();
            console.log("NOTA: MI");


        } else {
            miPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //sol
        if (bubbles[numeral].distancia_amarelo_Oitava_menos2 / 10 < limite && playSound===false) {
            playSound=true;
            solPlay = true;
            Sol_Oitava_menos2.play();
            console.log("NOTA: SOL");


        }
        else {
            solPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        if (bubbles[numeral].distancia_amarelo_sustenido_Oitava_menos2 / 10 < limite && playSound===false) {
            playSound=true;
            solSustenidoPlay = true;
            Sol_sustenido_Oitava_menos2.play();
            console.log("NOTA: SOL sustenido");


        } else {
            solSustenidoPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        if (bubbles[numeral].distancia_ciano_Oitava_menos2 / 10 < limite && playSound===false) {
            playSound=true;
            siPlay = true;
            Si_Oitava_menos2.play();
            console.log("NOTA: SI");


        }
        else {
            siPlay = false;
            console.log("NOTA: Afinal não há som");
            console.log("index...");

        }


        //Oitava -1
        if (bubbles[numeral].distancia_vermelho_Oitava_menos1 / 10 < limite && playSound===false) {
            playSound=true;
            faPlay = true;
            Fa_Oitava_menos1.play();
            console.log(" NOTA: fa");


        }
        else {
            faPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //fa sustenido
        if (bubbles[numeral].distancia_vermelho_sustenido_Oitava_menos1 / 10 < limite && playSound===false) {
            playSound=true;
            faSustenidoPlay = true;
            Fa_sustenido_Oitava_menos1.play();
            console.log("NOTA: fa sustenido");


        }
        else {
            faSustenidoPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");


        }
        //la
        if (bubbles[numeral].distancia_verde_Oitava_menos1 / 10 < limite && playSound===false) {
            playSound=true;
            laPlay = true;
            La_Oitava_menos1.play();
            console.log("NOTA: LA");


        } else {
            laPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        if (bubbles[numeral].distancia_verde_sustenido_Oitava_menos1 / 10 < limite && playSound===false) {
            playSound=true;
            laSustenidoPlay = true;
            La_sustenido_Oitava_menos1.play();
            console.log("NOTA: LA sustenido");


        } else {
            laSustenidoPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //do
        if (bubbles[numeral].distancia_azul_Oitava_menos1 / 10 < limite && playSound===false) {
            playSound=true;
            doPlay = true;
            Do_Oitava_menos1.play();
            console.log("NOTA: DO");


        } else {
            doPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //do sustenido
        if (bubbles[numeral].distancia_azul_sustenido_Oitava_menos1 / 10 < limite && playSound===false) {
            playSound=true;
            doSustenidoPlay = true;
            Do_sustenido_Oitava_menos1.play();
            console.log("NOTA: DO sustenido");


        } else {
            doSustenidoPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //re
        if (bubbles[numeral].distancia_roxo_Oitava_menos1 / 10 < limite && playSound===false) {
            playSound=true;
            rePlay = true;
            Re_Oitava_menos1.play();
            console.log("NOTA: RE");


        }
        else {
            rePlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //re sustenido
        if (bubbles[numeral].distancia_roxo_sustenido_Oitava_menos1 / 10 < limite && playSound===false) {
            playSound=true;
            reSustenidoPlay = true;
            Re_sustenido_Oitava_menos1.play();
            console.log("NOTA: RE sustenido");


        } else {
            reSustenidoPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //mi
        if (bubbles[numeral].distancia_rosa_Oitava_menos1 / 10 < limite && playSound===false) {
            playSound=true;
            miPlay = true;
            Mi_Oitava_menos1.play();
            console.log("NOTA: MI");


        } else {
            miPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //sol
        if (bubbles[numeral].distancia_amarelo_Oitava_menos1 / 10 < limite && playSound===false) {
            playSound=true;
            solPlay = true;
            Sol_Oitava_menos1.play();
            console.log("NOTA: SOL");


        }
        else {
            solPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        if (bubbles[numeral].distancia_amarelo_sustenido_Oitava_menos1 / 10 < limite && playSound===false) {
            playSound=true;
            solSustenidoPlay = true;
            Sol_sustenido_Oitava_menos1.play();
            console.log("NOTA: SOL sustenido");


        } else {
            solSustenidoPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        if (bubbles[numeral].distancia_ciano_Oitava_menos1 / 10 < limite && playSound===false) {
            playSound=true;
            siPlay = true;
            Si_Oitava_menos1.play();
            console.log("NOTA: SI");


        }
        else {
            siPlay = false;
            console.log("NOTA: Afinal não há som");
            console.log("index...");

        }

        //Oitava do meio

        if (bubbles[numeral].distancia_vermelho / 10 < limite && playSound===false) {
            playSound=true;
            faPlay = true;
            Fa.play();
            console.log(" NOTA: fa");


        }
        else {
            faPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //fa sustenido
        if (bubbles[numeral].distancia_vermelho_sustenido / 10 < limite && playSound===false) {
            playSound=true;
            faSustenidoPlay = true;
            Fa_sustenido.play();
            console.log("NOTA: fa sustenido");


        }
        else {
            faSustenidoPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");


        }
        //la
        if (bubbles[numeral].distancia_verde / 10 < limite && playSound===false) {
            playSound=true;
            laPlay = true;
            La.play();
            console.log("NOTA: LA");


        } else {
            laPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        if (bubbles[numeral].distancia_verde_sustenido / 10 < limite && playSound===false) {
            playSound=true;
            laSustenidoPlay = true;
            La_sustenido.play();
            console.log("NOTA: LA sustenido");


        } else {
            laSustenidoPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //do
        if (bubbles[numeral].distancia_azul / 10 < limite && playSound===false) {
            playSound=true;
            doPlay = true;
            Do.play();
            console.log("NOTA: DO");


        } else {
            doPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //do sustenido
        if (bubbles[numeral].distancia_azul_sustenido / 10 < limite && playSound===false) {
            playSound=true;
            doSustenidoPlay = true;
            Do_sustenido.play();
            console.log("NOTA: DO sustenido");


        } else {
            doSustenidoPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //re
        if (bubbles[numeral].distancia_roxo / 10 < limite && playSound===false) {
            playSound=true;
            rePlay = true;
            Re.play();
            console.log("NOTA: RE");


        }
        else {
            rePlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //re sustenido
        if (bubbles[numeral].distancia_roxo_sustenido / 10 < limite && playSound===false) {
            playSound=true;
            reSustenidoPlay = true;
            Re_sustenido.play();
            console.log("NOTA: RE sustenido");


        } else {
            reSustenidoPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //mi
        if (bubbles[numeral].distancia_rosa / 10 < limite && playSound===false) {
            playSound=true;
            miPlay = true;
            Mi.play();
            console.log("NOTA: MI");


        } else {
            miPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //sol
        if (bubbles[numeral].distancia_amarelo / 10 < limite && playSound===false) {
            playSound=true;
            solPlay = true;
            Sol.play();
            console.log("NOTA: SOL");


        }
        else {
            solPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        if (bubbles[numeral].distancia_amarelo_sustenido / 10 < limite && playSound===false) {
            playSound=true;
            solSustenidoPlay = true;
            Sol_sustenido.play();
            console.log("NOTA: SOL sustenido");


        } else {
            solSustenidoPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        if (bubbles[numeral].distancia_ciano / 10 < limite && playSound===false) {
            playSound=true;
            siPlay = true;
            Si.play();
            console.log("NOTA: SI");


        }
        else {
            siPlay = false;
            console.log("NOTA: Afinal não há som");
            console.log("index...");

        }

        //Oitava +1
        if (bubbles[numeral].distancia_vermelho_Oitava_mais1 / 10 < limite && playSound===false) {
            playSound=true;
            faPlay = true;
            Fa_Oitava_mais1.play();
            console.log(" NOTA: fa");


        }
        else {
            faPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //fa sustenido
        if (bubbles[numeral].distancia_vermelho_sustenido_Oitava_mais1 / 10 < limite && playSound===false) {
            playSound=true;
            faSustenidoPlay = true;
            Fa_sustenido_Oitava_mais1.play();
            console.log("NOTA: fa sustenido");


        }
        else {
            faSustenidoPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");


        }
        //la
        if (bubbles[numeral].distancia_verde_Oitava_mais1 / 10 < limite && playSound===false) {
            playSound=true;
            laPlay = true;
            La_Oitava_mais1.play();
            console.log("NOTA: LA");


        } else {
            laPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        if (bubbles[numeral].distancia_verde_sustenido_Oitava_mais1 / 10 < limite && playSound===false) {
            playSound=true;
            laSustenidoPlay = true;
            La_sustenido_Oitava_mais1.play();
            console.log("NOTA: LA sustenido");


        } else {
            laSustenidoPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //do
        if (bubbles[numeral].distancia_azul_Oitava_mais1 / 10 < limite && playSound===false) {
            playSound=true;
            doPlay = true;
            Do_Oitava_mais1.play();
            console.log("NOTA: DO");


        } else {
            doPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //do sustenido
        if (bubbles[numeral].distancia_azul_sustenido_Oitava_mais1 / 10 < limite && playSound===false) {
            playSound=true;
            doSustenidoPlay = true;
            Do_sustenido_Oitava_mais1.play();
            console.log("NOTA: DO sustenido");


        } else {
            doSustenidoPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //re
        if (bubbles[numeral].distancia_roxo_Oitava_mais1 / 10 < limite && playSound===false) {
            playSound=true;
            rePlay = true;
            Re_Oitava_mais1.play();
            console.log("NOTA: RE");


        }
        else {
            rePlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //re sustenido
        if (bubbles[numeral].distancia_roxo_sustenido_Oitava_mais1 / 10 < limite && playSound===false) {
            playSound=true;
            reSustenidoPlay = true;
            Re_sustenido_Oitava_mais1.play();
            console.log("NOTA: RE sustenido");


        } else {
            reSustenidoPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //mi
        if (bubbles[numeral].distancia_rosa_Oitava_mais1 / 10 < limite && playSound===false) {
            playSound=true;
            miPlay = true;
            Mi_Oitava_mais1.play();
            console.log("NOTA: MI");


        } else {
            miPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //sol
        if (bubbles[numeral].distancia_amarelo_Oitava_mais1 / 10 < limite && playSound===false) {
            playSound=true;
            solPlay = true;
            Sol_Oitava_mais1.play();
            console.log("NOTA: SOL");


        }
        else {
            solPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        if (bubbles[numeral].distancia_amarelo_sustenido_Oitava_mais1 / 10 < limite && playSound===false) {
            playSound=true;
            solSustenidoPlay = true;
            Sol_sustenido_Oitava_mais1.play();
            console.log("NOTA: SOL sustenido");


        } else {
            solSustenidoPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        if (bubbles[numeral].distancia_ciano_Oitava_mais1 / 10 < limite && playSound===false) {
            playSound=true;
            siPlay = true;
            Si_Oitava_mais1.play();
            console.log("NOTA: SI");


        }
        else {
            siPlay = false;
            console.log("NOTA: Afinal não há som");
            console.log("index...");

        }


        //Oitava +2
        if (bubbles[numeral].distancia_vermelho_Oitava_mais2 / 10 < limite && playSound===false) {
            playSound=true;
            faPlay = true;
            Fa_Oitava_mais2.play();
            console.log(" NOTA: fa");


        }
        else {
            faPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //fa sustenido
        if (bubbles[numeral].distancia_vermelho_sustenido_Oitava_mais2 / 10 < limite && playSound===false) {
            playSound=true;
            faSustenidoPlay = true;
            Fa_sustenido_Oitava_mais2.play();
            console.log("NOTA: fa sustenido");


        }
        else {
            faSustenidoPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");


        }
        //la
        if (bubbles[numeral].distancia_verde_Oitava_mais2 / 10 < limite && playSound===false) {
            playSound=true;
            laPlay = true;
            La_Oitava_mais2.play();
            console.log("NOTA: LA");


        } else {
            laPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        if (bubbles[numeral].distancia_verde_sustenido_Oitava_mais2 / 10 < limite && playSound===false) {
            playSound=true;
            laSustenidoPlay = true;
            La_sustenido_Oitava_mais2.play();
            console.log("NOTA: LA sustenido");


        } else {
            laSustenidoPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //do
        if (bubbles[numeral].distancia_azul_Oitava_mais2 / 10 < limite && playSound===false) {
            playSound=true;
            doPlay = true;
            Do_Oitava_mais2.play();
            console.log("NOTA: DO");


        } else {
            doPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //do sustenido
        if (bubbles[numeral].distancia_azul_sustenido_Oitava_mais2 / 10 < limite && playSound===false) {
            playSound=true;
            doSustenidoPlay = true;
            Do_sustenido_Oitava_mais2.play();
            console.log("NOTA: DO sustenido");


        } else {
            doSustenidoPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //re
        if (bubbles[numeral].distancia_roxo_Oitava_mais2 / 10 < limite && playSound===false) {
            playSound=true;
            rePlay = true;
            Re_Oitava_mais2.play();
            console.log("NOTA: RE");


        }
        else {
            rePlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //re sustenido
        if (bubbles[numeral].distancia_roxo_sustenido_Oitava_mais2 / 10 < limite && playSound===false) {
            playSound=true;
            reSustenidoPlay = true;
            Re_sustenido_Oitava_mais2.play();
            console.log("NOTA: RE sustenido");


        } else {
            reSustenidoPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //mi
        if (bubbles[numeral].distancia_rosa_Oitava_mais2 / 10 < limite && playSound===false) {
            playSound=true;
            miPlay = true;
            Mi_Oitava_mais2.play();
            console.log("NOTA: MI");


        } else {
            miPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //sol
        if (bubbles[numeral].distancia_amarelo_Oitava_mais2 / 10 < limite && playSound===false) {
            playSound=true;
            solPlay = true;
            Sol_Oitava_mais2.play();
            console.log("NOTA: SOL");


        }
        else {
            solPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        if (bubbles[numeral].distancia_amarelo_sustenido_Oitava_mais2 / 10 < limite && playSound===false) {
            playSound=true;
            solSustenidoPlay = true;
            Sol_sustenido_Oitava_mais2.play();
            console.log("NOTA: SOL sustenido");


        } else {
            solSustenidoPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        if (bubbles[numeral].distancia_ciano_Oitava_mais2 / 10 < limite && playSound===false) {
            playSound=true;
            siPlay = true;
            Si_Oitava_mais2.play();
            console.log("NOTA: SI");


        }
        else {
            siPlay = false;
            console.log("NOTA: Afinal não há som");
            console.log("index...");

        }


        //Oitava +3
        if (bubbles[numeral].distancia_vermelho_Oitava_mais3 / 10 < limite && playSound===false) {
            playSound=true;
            faPlay = true;
            Fa_Oitava_mais3.play();
            console.log(" NOTA: fa");


        }
        else {
            faPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //fa sustenido
        if (bubbles[numeral].distancia_vermelho_sustenido_Oitava_mais3 / 10 < limite && playSound===false) {
            playSound=true;
            faSustenidoPlay = true;
            Fa_sustenido_Oitava_mais3.play();
            console.log("NOTA: fa sustenido");


        }
        else {
            faSustenidoPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");


        }
        //la
        if (bubbles[numeral].distancia_verde_Oitava_mais3 / 10 < limite && playSound===false) {
            playSound=true;
            laPlay = true;
            La_Oitava_mais3.play();
            console.log("NOTA: LA");


        } else {
            laPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        if (bubbles[numeral].distancia_verde_sustenido_Oitava_mais3 / 10 < limite && playSound===false) {
            playSound=true;
            laSustenidoPlay = true;
            La_sustenido_Oitava_mais3.play();
            console.log("NOTA: LA sustenido");


        } else {
            laSustenidoPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //do
        if (bubbles[numeral].distancia_azul_Oitava_mais3 / 10 < limite && playSound===false) {
            playSound=true;
            doPlay = true;
            Do_Oitava_mais3.play();
            console.log("NOTA: DO");


        } else {
            doPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //do sustenido
        if (bubbles[numeral].distancia_azul_sustenido_Oitava_mais3 / 10 < limite && playSound===false) {
            playSound=true;
            doSustenidoPlay = true;
            Do_sustenido_Oitava_mais3.play();
            console.log("NOTA: DO sustenido");


        } else {
            doSustenidoPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //re
        if (bubbles[numeral].distancia_roxo_Oitava_mais3 / 10 < limite && playSound===false) {
            playSound=true;
            rePlay = true;
            Re_Oitava_mais3.play();
            console.log("NOTA: RE");


        }
        else {
            rePlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //re sustenido
        if (bubbles[numeral].distancia_roxo_sustenido_Oitava_mais3 / 10 < limite && playSound===false) {
            playSound=true;
            reSustenidoPlay = true;
            Re_sustenido_Oitava_mais3.play();
            console.log("NOTA: RE sustenido");


        } else {
            reSustenidoPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //mi
        if (bubbles[numeral].distancia_rosa_Oitava_mais3 / 10 < limite && playSound===false) {
            playSound=true;
            miPlay = true;
            Mi_Oitava_mais3.play();
            console.log("NOTA: MI");


        } else {
            miPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        //sol
        if (bubbles[numeral].distancia_amarelo_Oitava_mais3 / 10 < limite && playSound===false) {
            playSound=true;
            solPlay = true;
            Sol_Oitava_mais3.play();
            console.log("NOTA: SOL");


        }
        else {
            solPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        if (bubbles[numeral].distancia_amarelo_sustenido_Oitava_mais3 / 10 < limite && playSound===false) {
            playSound=true;
            solSustenidoPlay = true;
            Sol_sustenido_Oitava_mais3.play();
            console.log("NOTA: SOL sustenido");


        } else {
            solSustenidoPlay = false;
            console.log("NOTA: nao há som");
            console.log("index...");

        }
        if (bubbles[numeral].distancia_ciano_Oitava_mais3 / 10 < limite && playSound===false) {
            playSound=true;
            siPlay = true;
            Si_Oitava_mais3.play();
            console.log("NOTA: SI");


        }
        else {

            bubbles[numeral].r_bolinhas = bubbles[numeral].r_bolinhas + 0;
            siPlay = false;
            console.log("NOTA: Afinal não há som");
            console.log("index...");

        }

        //final dos sons


        setTimeout(Pararsom, dists);


    }
    else {
        console.log("NOTA: nao há som");
        console.log("index...");
        setTimeout(tocarSom, dists);

    }
}


function Bubbles(x, y) {

    this.x = x;
    this.y = y;
    this.over = false;
    this.locked = false;
    this.xoffset = 0;
    this.yoffset = 0;
    this.a = a;
    this.r_bolinhas = r_bolinhas;
    this.distancia = distancia;
    //oitava -3
    this.distancia_vermelho_Oitava_menos3 = distancia_vermelho_Oitava_menos3;//fá
    this.distancia_vermelho_sustenido_Oitava_menos3 = distancia_vermelho_sustenido_Oitava_menos3;//fá sustenido--> vermelho sustenido
    this.distancia_verde_Oitava_menos3 = distancia_verde_Oitava_menos3;//lá
    this.distancia_verde_sustenido_Oitava_menos3 = distancia_verde_sustenido_Oitava_menos3;//lá sustenido--> verde sustenido
    this.distancia_azul_Oitava_menos3 = distancia_azul_Oitava_menos3;//dó
    this.distancia_azul_sustenido_Oitava_menos3 = distancia_azul_sustenido_Oitava_menos3;//dó sustenido--> azul sustenido
    this.distancia_roxo_Oitava_menos3 = distancia_roxo_Oitava_menos3;//re
    this.distancia_roxo_sustenido_Oitava_menos3 = distancia_roxo_sustenido_Oitava_menos3;//ré sustenido--> roxo sustenido
    this.distancia_rosa_Oitava_menos3 = distancia_rosa_Oitava_menos3;//mi
    this.distancia_amarelo_Oitava_menos3 = distancia_amarelo_Oitava_menos3;//sol
    this.distancia_amarelo_sustenido_Oitava_menos3 = distancia_amarelo_sustenido_Oitava_menos3;//sol sustenido--> amarelo sustenido
    this.distancia_ciano_Oitava_menos3 = distancia_ciano_Oitava_menos3;//si
    //oitava -2
    this.distancia_vermelho_Oitava_menos2 = distancia_vermelho_Oitava_menos2;//fá
    this.distancia_vermelho_sustenido_Oitava_menos2 = distancia_vermelho_sustenido_Oitava_menos2;//fá sustenido--> vermelho sustenido
    this.distancia_verde_Oitava_menos2 = distancia_verde_Oitava_menos2;//lá
    this.distancia_verde_sustenido_Oitava_menos2 = distancia_verde_sustenido_Oitava_menos2;//lá sustenido--> verde sustenido
    this.distancia_azul_Oitava_menos2 = distancia_azul_Oitava_menos2;//dó
    this.distancia_azul_sustenido_Oitava_menos2 = distancia_azul_sustenido_Oitava_menos2;//dó sustenido--> azul sustenido
    this.distancia_roxo_Oitava_menos2 = distancia_roxo_Oitava_menos2;//re
    this.distancia_roxo_sustenido_Oitava_menos2 = distancia_roxo_sustenido_Oitava_menos2;//ré sustenido--> roxo sustenido
    this.distancia_rosa_Oitava_menos2 = distancia_rosa_Oitava_menos2;//mi
    this.distancia_amarelo_Oitava_menos2 = distancia_amarelo_Oitava_menos2;//sol
    this.distancia_amarelo_sustenido_Oitava_menos2 = distancia_amarelo_sustenido_Oitava_menos2;//sol sustenido--> amarelo sustenido
    this.distancia_ciano_Oitava_menos2 = distancia_ciano_Oitava_menos2;//si
    //oitava -1
    this.distancia_vermelho_Oitava_menos1 = distancia_vermelho_Oitava_menos1;//fá
    this.distancia_vermelho_sustenido_Oitava_menos1 = distancia_vermelho_sustenido_Oitava_menos1;//fá sustenido--> vermelho sustenido
    this.distancia_verde_Oitava_menos1 = distancia_verde_Oitava_menos1;//lá
    this.distancia_verde_sustenido_Oitava_menos1 = distancia_verde_sustenido_Oitava_menos1;//lá sustenido--> verde sustenido
    this.distancia_azul_Oitava_menos1 = distancia_azul_Oitava_menos1;//dó
    this.distancia_azul_sustenido_Oitava_menos1 = distancia_azul_sustenido_Oitava_menos1;//dó sustenido--> azul sustenido
    this.distancia_roxo_Oitava_menos1 = distancia_roxo_Oitava_menos1;//re
    this.distancia_roxo_sustenido_Oitava_menos1 = distancia_roxo_sustenido_Oitava_menos1;//ré sustenido--> roxo sustenido
    this.distancia_rosa_Oitava_menos1 = distancia_rosa_Oitava_menos1;//mi
    this.distancia_amarelo_Oitava_menos1 = distancia_amarelo_Oitava_menos1;//sol
    this.distancia_amarelo_sustenido_Oitava_menos1 = distancia_amarelo_sustenido_Oitava_menos1;//sol sustenido--> amarelo sustenido
    this.distancia_ciano_Oitava_menos1 = distancia_ciano_Oitava_menos1;//si
    //oitava meio
    this.distancia_vermelho = distancia_vermelho;//fá
    this.distancia_vermelho_sustenido = distancia_vermelho_sustenido;//fá sustenido
    this.distancia_verde = distancia_verde;//la
    this.distancia_verde_sustenido = distancia_verde_sustenido;//la sustenido
    this.distancia_azul = distancia_azul;//do
    this.distancia_azul_sustenido = distancia_azul_sustenido;//do sustenido
    this.distancia_roxo = distancia_roxo;//re
    this.distancia_roxo_sustenido = distancia_roxo_sustenido;//re sustenido
    this.distancia_rosa = distancia_rosa;//mi
    this.distancia_amarelo = distancia_amarelo;//sol
    this.distancia_amarelo_sustenido = distancia_amarelo_sustenido;//sol sustenido
    this.distancia_ciano = distancia_ciano;//si
    //oitava +1
    this.distancia_vermelho_Oitava_mais1 = distancia_vermelho_Oitava_mais1;//fá
    this.distancia_vermelho_sustenido_Oitava_mais1 = distancia_vermelho_sustenido_Oitava_mais1;//fá sustenido--> vermelho sustenido
    this.distancia_verde_Oitava_mais1 = distancia_verde_Oitava_mais1;//lá
    this.distancia_verde_sustenido_Oitava_mais1 = distancia_verde_sustenido_Oitava_mais1;//lá sustenido--> verde sustenido
    this.distancia_azul_Oitava_mais1 = distancia_azul_Oitava_mais1;//dó
    this.distancia_azul_sustenido_Oitava_mais1 = distancia_azul_sustenido_Oitava_mais1;//dó sustenido--> azul sustenido
    this.distancia_roxo_Oitava_mais1 = distancia_roxo_Oitava_mais1;//re
    this.distancia_roxo_sustenido_Oitava_mais1 = distancia_roxo_sustenido_Oitava_mais1;//ré sustenido--> roxo sustenido
    this.distancia_rosa_Oitava_mais1 = distancia_rosa_Oitava_mais1;//mi
    this.distancia_amarelo_Oitava_mais1 = distancia_amarelo_Oitava_mais1;//sol
    this.distancia_amarelo_sustenido_Oitava_mais1 = distancia_amarelo_sustenido_Oitava_mais1;//sol sustenido--> amarelo sustenido
    this.distancia_ciano_Oitava_mais1 = distancia_ciano_Oitava_mais1;//si
    //oitava +2
    this.distancia_vermelho_Oitava_mais2 = distancia_vermelho_Oitava_mais2;//fá
    this.distancia_vermelho_sustenido_Oitava_mais2 = distancia_vermelho_sustenido_Oitava_mais2;//fá sustenido--> vermelho sustenido
    this.distancia_verde_Oitava_mais2 = distancia_verde_Oitava_mais2;//lá
    this.distancia_verde_sustenido_Oitava_mais2 = distancia_verde_sustenido_Oitava_mais2;//lá sustenido--> verde sustenido
    this.distancia_azul_Oitava_mais2 = distancia_azul_Oitava_mais2;//dó
    this.distancia_azul_sustenido_Oitava_mais2 = distancia_azul_sustenido_Oitava_mais2;//dó sustenido--> azul sustenido
    this.distancia_roxo_Oitava_mais2 = distancia_roxo_Oitava_mais2;//re
    this.distancia_roxo_sustenido_Oitava_mais2 = distancia_roxo_sustenido_Oitava_mais2;//ré sustenido--> roxo sustenido
    this.distancia_rosa_Oitava_mais2 = distancia_rosa_Oitava_mais2;//mi
    this.distancia_amarelo_Oitava_mais2 = distancia_amarelo_Oitava_mais2;//sol
    this.distancia_amarelo_sustenido_Oitava_mais2 = distancia_amarelo_sustenido_Oitava_mais2;//sol sustenido--> amarelo sustenido
    this.distancia_ciano_Oitava_mais2 = distancia_ciano_Oitava_mais2;//si
    //oitava +2
    this.distancia_vermelho_Oitava_mais3 = distancia_vermelho_Oitava_mais3;//fá
    this.distancia_vermelho_sustenido_Oitava_mais3 = distancia_vermelho_sustenido_Oitava_mais3;//fá sustenido--> vermelho sustenido
    this.distancia_verde_Oitava_mais3 = distancia_verde_Oitava_mais3;//lá
    this.distancia_verde_sustenido_Oitava_mais3 = distancia_verde_sustenido_Oitava_mais3;//lá sustenido--> verde sustenido
    this.distancia_azul_Oitava_mais3 = distancia_azul_Oitava_mais3;//dó
    this.distancia_azul_sustenido_Oitava_mais3 = distancia_azul_sustenido_Oitava_mais3;//dó sustenido--> azul sustenido
    this.distancia_roxo_Oitava_mais3 = distancia_roxo_Oitava_mais3;//re
    this.distancia_roxo_sustenido_Oitava_mais3 = distancia_roxo_sustenido_Oitava_mais3;//ré sustenido--> roxo sustenido
    this.distancia_rosa_Oitava_mais3 = distancia_rosa_Oitava_mais3;//mi
    this.distancia_amarelo_Oitava_mais3 = distancia_amarelo_Oitava_mais3;//sol
    this.distancia_amarelo_sustenido_Oitava_mais3 = distancia_amarelo_sustenido_Oitava_mais3;//sol sustenido--> amarelo sustenido
    this.distancia_ciano_Oitava_mais3 = distancia_ciano_Oitava_mais3;//si
    this.clicar1 = clicar1;


    this.display = function () {


        if (mouseX > this.x - this.r_bolinhas / 2
            && mouseX < this.x + this.r_bolinhas / 2
            && mouseY > this.y - this.r_bolinhas / 2
            && mouseY < this.y + this.r_bolinhas / 2
            ||
            mouseX > x1 - r / 2
            && mouseX < x1 + r / 2
            && mouseY > y1 - r / 2
            && mouseY < y1 + r / 2) {
            this.over = true;
            if (mouseIsPressed === true) {
                this.clicar1++;
            }

            /* if (mouseIsPressed && this.over === true) {
                 noStroke();
             }
             else {
                 noStroke();
             }*/


        }
        else {
            this.over = false;
            noStroke();
        }

        stroke(255);
        strokeWeight(3);
        line(x1, y1, this.x - 4, this.y - 4);
        this.a = get(this.x, this.y);
        let r1 = red(this.a);
        let g1 = green(this.a);
        let b1 = blue(this.a);

        let fill_principal = color(r1, g1, b1);
        let opacity = 255;
        fill(red(fill_principal), green(fill_principal), blue(fill_principal), opacity);
        //fill();
        ellipse(this.x, this.y, this.r_bolinhas, this.r_bolinhas);

        console.log("cor:" + this.a);
        console.log("vermelho:" + r1);
        console.log("verde:" + g1);
        console.log("azul:" + b1);
        //cores base com q se vai comparar;
        //Oitava -3
        vermelho_Oitava_menos3 = color(112, 0, 0);//fá
        vermelho_sustenido_Oitava_menos3 = color(113, 34, 2);//fá sustenido--> vermelho sustenido
        verde_Oitava_menos3 = color(42, 87, 22);//lá
        verde_sustenido_Oitava_menos3 = color(0, 78, 74);//lá sustenido--> verde sustenido
        azul_Oitava_menos3 = color(8, 52, 92);//dó
        azul_sustenido_Oitava_menos3 = color(1, 10, 66);//dó sustenido--> azul sustenido
        roxo_Oitava_menos3 = color(44, 1, 73);//re
        roxo_sustenido_Oitava_menos3 = color(83, 0, 62);//ré sustenido--> roxo sustenido
        rosa_Oitava_menos3 = color(113, 1, 48);//mi
        amarelo_Oitava_menos3 = color(120, 114, 0);//sol
        amarelo_sustenido_Oitava_menos3 = color(84, 96, 8);//sol sustenido--> amarelo sustenido
        ciano_Oitava_menos3 = color(2, 85, 117);//si

        //VALORES SOZINHOS
        let r_vermelho_menos3 = red(vermelho_Oitava_menos3);
        let g_vermelho_menos3 = green(vermelho_Oitava_menos3);
        let b_vermelho_menos3 = blue(vermelho_Oitava_menos3);
        //valor do vermelho sustenido
        let r_vermelho_sustenido_menos3 = red(vermelho_sustenido_Oitava_menos3);
        let g_vermelho_sustenido_menos3 = green(vermelho_sustenido_Oitava_menos3);
        let b_vermelho_sustenido_menos3 = blue(vermelho_sustenido_Oitava_menos3);
        //valor do verde
        let r_verde_menos3 = red(verde_Oitava_menos3);
        let g_verde_menos3 = green(verde_Oitava_menos3);
        let b_verde_menos3 = blue(verde_Oitava_menos3);
        //valores de verde sustenido
        let r_verde_sustenido_menos3 = red(verde_sustenido_Oitava_menos3);
        let g_verde_sustenido_menos3 = green(verde_sustenido_Oitava_menos3);
        let b_verde_sustenido_menos3 = blue(verde_sustenido_Oitava_menos3);
        //valor do azul
        let r_azul_menos3 = red(azul_Oitava_menos3);
        let g_azul_menos3 = green(azul_Oitava_menos3);
        let b_azul_menos3 = blue(azul_Oitava_menos3);
        //valor do azull sustenido
        let r_azul_sustenido_menos3 = red(azul_sustenido_Oitava_menos3);
        let g_azul_sustenido_menos3 = green(azul_sustenido_Oitava_menos3);
        let b_azul_sustenido_menos3 = blue(azul_sustenido_Oitava_menos3);
        //valor de roxo
        let r_roxo_menos3 = red(roxo_Oitava_menos3);
        let g_roxo_menos3 = green(roxo_Oitava_menos3);
        let b_roxo_menos3 = blue(roxo_Oitava_menos3);
        //valores do roxo sustenido
        let r_roxo_sustenido_menos3 = red(roxo_sustenido_Oitava_menos3);
        let g_roxo_sustenido_menos3 = green(roxo_sustenido_Oitava_menos3);
        let b_roxo_sustenido_menos3 = blue(roxo_sustenido_Oitava_menos3);
        //valor do rosa
        let r_rosa_menos3 = red(rosa_Oitava_menos3);
        let g_rosa_menos3 = green(rosa_Oitava_menos3);
        let b_rosa_menos3 = blue(rosa_Oitava_menos3);
        //valor do amarelo
        let r_amarelo_menos3 = red(amarelo_Oitava_menos3);
        let g_amarelo_menos3 = green(amarelo_Oitava_menos3);
        let b_amarelo_menos3 = blue(amarelo_Oitava_menos3);
        //valores amarelo sustenido
        let r_amarelo_sustenido_menos3 = red(amarelo_sustenido_Oitava_menos3);
        let g_amarelo_sustenido_menos3 = green(amarelo_sustenido_Oitava_menos3);
        let b_amarelo_sustenido_menos3 = blue(amarelo_sustenido_Oitava_menos3);
        //VALOR DO CIAN0
        let r_ciano_menos3 = red(ciano_Oitava_menos3);
        let g_ciano_menos3 = green(ciano_Oitava_menos3);
        let b_ciano_menos3 = blue(ciano_Oitava_menos3);

        //Oitava -2
        vermelho_Oitava_menos2 = color(161, 10, 17);//fá
        vermelho_sustenido_Oitava_menos2 = color(158, 59, 13);//fá sustenido--> vermelho sustenido
        verde_Oitava_menos2 = color(75, 124, 40);//lá
        verde_sustenido_Oitava_menos2 = color(1, 109, 102);//lá sustenido--> verde sustenido
        azul_Oitava_menos2 = color(31, 78, 128);//dó
        azul_sustenido_Oitava_menos2 = color(15, 36, 91);//dó sustenido--> azul sustenido
        roxo_Oitava_menos2 = color(69, 16, 104);//re
        roxo_sustenido_Oitava_menos2 = color(113, 3, 92);//ré sustenido--> roxo sustenido
        rosa_Oitava_menos2 = color(161, 5, 76);//mi
        amarelo_Oitava_menos2 = color(171, 160, 10);//sol
        amarelo_sustenido_Oitava_menos2 = color(121, 134, 28);//sol sustenido--> amarelo sustenido
        ciano_Oitava_menos2 = color(2, 116, 158);//si

        //VALORES SOZINHOS
        let r_vermelho_menos2 = red(vermelho_Oitava_menos2);
        let g_vermelho_menos2 = green(vermelho_Oitava_menos2);
        let b_vermelho_menos2 = blue(vermelho_Oitava_menos2);
        //valor do vermelho sustenido
        let r_vermelho_sustenido_menos2 = red(vermelho_sustenido_Oitava_menos2);
        let g_vermelho_sustenido_menos2 = green(vermelho_sustenido_Oitava_menos2);
        let b_vermelho_sustenido_menos2 = blue(vermelho_sustenido_Oitava_menos2);
        //valor do verde
        let r_verde_menos2 = red(verde_Oitava_menos2);
        let g_verde_menos2 = green(verde_Oitava_menos2);
        let b_verde_menos2 = blue(verde_Oitava_menos2);
        //valores de verde sustenido
        let r_verde_sustenido_menos2 = red(verde_sustenido_Oitava_menos2);
        let g_verde_sustenido_menos2 = green(verde_sustenido_Oitava_menos2);
        let b_verde_sustenido_menos2 = blue(verde_sustenido_Oitava_menos2);
        //valor do azul
        let r_azul_menos2 = red(azul_Oitava_menos2);
        let g_azul_menos2 = green(azul_Oitava_menos2);
        let b_azul_menos2 = blue(azul_Oitava_menos2);
        //valor do azull sustenido
        let r_azul_sustenido_menos2 = red(azul_sustenido_Oitava_menos2);
        let g_azul_sustenido_menos2 = green(azul_sustenido_Oitava_menos2);
        let b_azul_sustenido_menos2 = blue(azul_sustenido_Oitava_menos2);
        //valor de roxo
        let r_roxo_menos2 = red(roxo_Oitava_menos2);
        let g_roxo_menos2 = green(roxo_Oitava_menos2);
        let b_roxo_menos2 = blue(roxo_Oitava_menos2);
        //valores do roxo sustenido
        let r_roxo_sustenido_menos2 = red(roxo_sustenido_Oitava_menos2);
        let g_roxo_sustenido_menos2 = green(roxo_sustenido_Oitava_menos2);
        let b_roxo_sustenido_menos2 = blue(roxo_sustenido_Oitava_menos2);
        //valor do rosa
        let r_rosa_menos2 = red(rosa_Oitava_menos2);
        let g_rosa_menos2 = green(rosa_Oitava_menos2);
        let b_rosa_menos2 = blue(rosa_Oitava_menos2);
        //valor do amarelo
        let r_amarelo_menos2 = red(amarelo_Oitava_menos2);
        let g_amarelo_menos2 = green(amarelo_Oitava_menos2);
        let b_amarelo_menos2 = blue(amarelo_Oitava_menos2);
        //valores amarelo sustenido
        let r_amarelo_sustenido_menos2 = red(amarelo_sustenido_Oitava_menos2);
        let g_amarelo_sustenido_menos2 = green(amarelo_sustenido_Oitava_menos2);
        let b_amarelo_sustenido_menos2 = blue(amarelo_sustenido_Oitava_menos2);
        //VALOR DO CIAN0
        let r_ciano_menos2 = red(ciano_Oitava_menos2);
        let g_ciano_menos2 = green(ciano_Oitava_menos2);
        let b_ciano_menos2 = blue(ciano_Oitava_menos2);
        //Oitava -1
        vermelho_Oitava_menos1 = color(197, 21, 31);//fá
        vermelho_sustenido_Oitava_menos1 = color(210, 74, 29);//fá sustenido--> vermelho sustenido
        verde_Oitava_menos1 = color(100, 156, 60);//lá
        verde_sustenido_Oitava_menos1 = color(1, 140, 127);//lá sustenido--> verde sustenido
        azul_Oitava_menos1 = color(42, 102, 157);//dó
        azul_sustenido_Oitava_menos1 = color(28, 48, 117);//dó sustenido--> azul sustenido
        roxo_Oitava_menos1 = color(82, 28, 120);//re
        roxo_sustenido_Oitava_menos1 = color(140, 21, 113);//ré sustenido--> roxo sustenido
        rosa_Oitava_menos1 = color(199, 1, 97);//mi
        amarelo_Oitava_menos1 = color(219, 199, 11);//sol
        amarelo_sustenido_Oitava_menos1 = color(157, 171, 36);//sol sustenido--> amarelo sustenido
        ciano_Oitava_menos1 = color(4, 149, 184);//si

        //VALORES SOZINHOS
        let r_vermelho_menos1 = red(vermelho_Oitava_menos1);
        let g_vermelho_menos1 = green(vermelho_Oitava_menos1);
        let b_vermelho_menos1 = blue(vermelho_Oitava_menos1);
        //valor do vermelho sustenido
        let r_vermelho_sustenido_menos1 = red(vermelho_sustenido_Oitava_menos1);
        let g_vermelho_sustenido_menos1 = green(vermelho_sustenido_Oitava_menos1);
        let b_vermelho_sustenido_menos1 = blue(vermelho_sustenido_Oitava_menos1);
        //valor do verde
        let r_verde_menos1 = red(verde_Oitava_menos1);
        let g_verde_menos1 = green(verde_Oitava_menos1);
        let b_verde_menos1 = blue(verde_Oitava_menos1);
        //valores de verde sustenido
        let r_verde_sustenido_menos1 = red(verde_sustenido_Oitava_menos1);
        let g_verde_sustenido_menos1 = green(verde_sustenido_Oitava_menos1);
        let b_verde_sustenido_menos1 = blue(verde_sustenido_Oitava_menos1);
        //valor do azul
        let r_azul_menos1 = red(azul_Oitava_menos1);
        let g_azul_menos1 = green(azul_Oitava_menos1);
        let b_azul_menos1 = blue(azul_Oitava_menos1);
        //valor do azull sustenido
        let r_azul_sustenido_menos1 = red(azul_sustenido_Oitava_menos1);
        let g_azul_sustenido_menos1 = green(azul_sustenido_Oitava_menos1);
        let b_azul_sustenido_menos1 = blue(azul_sustenido_Oitava_menos1);
        //valor de roxo
        let r_roxo_menos1 = red(roxo_Oitava_menos1);
        let g_roxo_menos1 = green(roxo_Oitava_menos1);
        let b_roxo_menos1 = blue(roxo_Oitava_menos1);
        //valores do roxo sustenido
        let r_roxo_sustenido_menos1 = red(roxo_sustenido_Oitava_menos1);
        let g_roxo_sustenido_menos1 = green(roxo_sustenido_Oitava_menos1);
        let b_roxo_sustenido_menos1 = blue(roxo_sustenido_Oitava_menos1);
        //valor do rosa
        let r_rosa_menos1 = red(rosa_Oitava_menos1);
        let g_rosa_menos1 = green(rosa_Oitava_menos1);
        let b_rosa_menos1 = blue(rosa_Oitava_menos1);
        //valor do amarelo
        let r_amarelo_menos1 = red(amarelo_Oitava_menos1);
        let g_amarelo_menos1 = green(amarelo_Oitava_menos1);
        let b_amarelo_menos1 = blue(amarelo_Oitava_menos1);
        //valores amarelo sustenido
        let r_amarelo_sustenido_menos1 = red(amarelo_sustenido_Oitava_menos1);
        let g_amarelo_sustenido_menos1 = green(amarelo_sustenido_Oitava_menos1);
        let b_amarelo_sustenido_menos1 = blue(amarelo_sustenido_Oitava_menos1);
        //VALOR DO CIAN0
        let r_ciano_menos1 = red(ciano_Oitava_menos1);
        let g_ciano_menos1 = green(ciano_Oitava_menos1);
        let b_ciano_menos1 = blue(ciano_Oitava_menos1);
        //Oitava do meio
        vermelho = color(241, 26, 41);//fá
        vermelho_sustenido = color(246, 86, 38);//fá sustenido
        verde = color(114, 182, 61);//lá
        verde_sustenido = color(2, 160, 155);//lá sustenido
        azul = color(2, 123, 196);//do
        azul_sustenido = color(25, 79, 129);//do sustenido
        roxo = color(98, 42, 148);//re
        roxo_sustenido = color(173, 33, 139);//re sustenido
        rosa = color(233, 12, 113);//mi
        amarelo = color(255, 239, 6);//sol
        amarelo_sustenido = color(186, 204, 40);//sol sustenido
        ciano = color(0, 172, 235);//si

        //VALORES SOZINHOS
        //valores do vermelho
        let r_vermelho = red(vermelho);
        let g_vermelho = green(vermelho);
        let b_vermelho = blue(vermelho);
        //valor do vermelho sustenido
        let r_vermelho_sustenido = red(vermelho_sustenido);
        let g_vermelho_sustenido = green(vermelho_sustenido);
        let b_vermelho_sustenido = blue(vermelho_sustenido);
        //valor do verde
        let r_verde = red(verde);
        let g_verde = green(verde);
        let b_verde = blue(verde);
        //valores de verde sustenido
        let r_verde_sustenido = red(verde_sustenido);
        let g_verde_sustenido = green(verde_sustenido);
        let b_verde_sustenido = blue(verde_sustenido);
        //valor do azul
        let r_azul = red(azul);
        let g_azul = green(azul);
        let b_azul = blue(azul);
        //valor do azull sustenido
        let r_azul_sustenido = red(azul_sustenido);
        let g_azul_sustenido = green(azul_sustenido);
        let b_azul_sustenido = blue(azul_sustenido);
        //valor de roxo
        let r_roxo = red(roxo);
        let g_roxo = green(roxo);
        let b_roxo = blue(roxo);
        //valores do roxo sustenido
        let r_roxo_sustenido = red(roxo_sustenido);
        let g_roxo_sustenido = green(roxo_sustenido);
        let b_roxo_sustenido = blue(roxo_sustenido);
        //valor do rosa
        let r_rosa = red(rosa);
        let g_rosa = green(rosa);
        let b_rosa = blue(rosa);
        //valor do amarelo
        let r_amarelo = red(amarelo);
        let g_amarelo = green(amarelo);
        let b_amarelo = blue(amarelo);
        //valores amarelo sustenido
        let r_amarelo_sustenido = red(amarelo_sustenido);
        let g_amarelo_sustenido = green(amarelo_sustenido);
        let b_amarelo_sustenido = blue(amarelo_sustenido);
        //VALOR DO CIAN0
        let r_ciano = red(ciano);
        let g_ciano = green(ciano);
        let b_ciano = blue(ciano);
        //Oitava +1
        vermelho_Oitava_mais1 = color(249, 107, 85);//fá
        vermelho_sustenido_Oitava_mais1 = color(242, 140, 82);//fá sustenido--> vermelho sustenido
        verde_Oitava_mais1 = color(158, 199, 116);//lá
        verde_sustenido_Oitava_mais1 = color(54, 180, 176);//lá sustenido--> verde sustenido
        azul_Oitava_mais1 = color(63, 150, 208);//dó
        azul_sustenido_Oitava_mais1 = color(97, 114, 162);//dó sustenido--> azul sustenido
        roxo_Oitava_mais1 = color(133, 95, 168);//re
        roxo_sustenido_Oitava_mais1 = color(185, 106, 165);//ré sustenido--> roxo sustenido
        rosa_Oitava_mais1 = color(239, 113, 149);//mi
        amarelo_Oitava_mais1 = color(253, 243, 112);//sol
        amarelo_sustenido_Oitava_mais1 = color(207, 216, 122);//sol sustenido--> amarelo sustenido
        ciano_Oitava_mais1 = color(1, 191, 238);//si

        //VALORES SOZINHOS
        let r_vermelho_mais1 = red(vermelho_Oitava_mais1);
        let g_vermelho_mais1 = green(vermelho_Oitava_mais1);
        let b_vermelho_mais1 = blue(vermelho_Oitava_mais1);
        //valor do vermelho sustenido
        let r_vermelho_sustenido_mais1 = red(vermelho_sustenido_Oitava_mais1);
        let g_vermelho_sustenido_mais1 = green(vermelho_sustenido_Oitava_mais1);
        let b_vermelho_sustenido_mais1 = blue(vermelho_sustenido_Oitava_mais1);
        //valor do verde
        let r_verde_mais1 = red(verde_Oitava_mais1);
        let g_verde_mais1 = green(verde_Oitava_mais1);
        let b_verde_mais1 = blue(verde_Oitava_mais1);
        //valores de verde sustenido
        let r_verde_sustenido_mais1 = red(verde_sustenido_Oitava_mais1);
        let g_verde_sustenido_mais1 = green(verde_sustenido_Oitava_mais1);
        let b_verde_sustenido_mais1 = blue(verde_sustenido_Oitava_mais1);
        //valor do azul
        let r_azul_mais1 = red(azul_Oitava_mais1);
        let g_azul_mais1 = green(azul_Oitava_mais1);
        let b_azul_mais1 = blue(azul_Oitava_mais1);
        //valor do azull sustenido
        let r_azul_sustenido_mais1 = red(azul_sustenido_Oitava_mais1);
        let g_azul_sustenido_mais1 = green(azul_sustenido_Oitava_mais1);
        let b_azul_sustenido_mais1 = blue(azul_sustenido_Oitava_mais1);//valor de roxo
        let r_roxo_mais1 = red(roxo_Oitava_mais1);
        let g_roxo_mais1 = green(roxo_Oitava_mais1);
        let b_roxo_mais1 = blue(roxo_Oitava_mais1);
        //valores do roxo sustenido
        let r_roxo_sustenido_mais1 = red(roxo_sustenido_Oitava_mais1);
        let g_roxo_sustenido_mais1 = green(roxo_sustenido_Oitava_mais1);
        let b_roxo_sustenido_mais1 = blue(roxo_sustenido_Oitava_mais1);
        //valor do rosa
        let r_rosa_mais1 = red(rosa_Oitava_mais1);
        let g_rosa_mais1 = green(rosa_Oitava_mais1);
        let b_rosa_mais1 = blue(rosa_Oitava_mais1);
        //valor do amarelo
        let r_amarelo_mais1 = red(amarelo_Oitava_mais1);
        let g_amarelo_mais1 = green(amarelo_Oitava_mais1);
        let b_amarelo_mais1 = blue(amarelo_Oitava_mais1);
        //valores amarelo sustenido
        let r_amarelo_sustenido_mais1 = red(amarelo_sustenido_Oitava_mais1);
        let g_amarelo_sustenido_mais1 = green(amarelo_sustenido_Oitava_mais1);
        let b_amarelo_sustenido_mais1 = blue(amarelo_sustenido_Oitava_mais1);
        //VALOR DO CIAN0
        let r_ciano_mais1 = red(ciano_Oitava_mais1);
        let g_ciano_mais1 = green(ciano_Oitava_mais1);
        let b_ciano_mais1 = blue(ciano_Oitava_mais1);
        //Oitava +2
        vermelho_Oitava_mais2 = color(254, 156, 131);//fá
        vermelho_sustenido_Oitava_mais2 = color(245, 177, 141);//fá sustenido--> vermelho sustenido
        verde_Oitava_mais2 = color(191, 220, 161);//lá
        verde_sustenido_Oitava_mais2 = color(138, 203, 200);//lá sustenido--> verde sustenido
        azul_Oitava_mais2 = color(139, 178, 217);//dó
        azul_sustenido_Oitava_mais2 = color(150, 158, 194);//dó sustenido--> azul sustenido
        roxo_Oitava_mais2 = color(172, 147, 193);//re
        roxo_sustenido_Oitava_mais2 = color(209, 156, 195);//ré sustenido--> roxo sustenido
        rosa_Oitava_mais2 = color(248, 161, 183);//mi
        amarelo_Oitava_mais2 = color(253, 246, 158);//sol
        amarelo_sustenido_Oitava_mais2 = color(226, 231, 168);//sol sustenido--> amarelo sustenido
        ciano_Oitava_mais2 = color(120, 208, 251);//si

        //VALORES SOZINHOS
        let r_vermelho_mais2 = red(vermelho_Oitava_mais2);
        let g_vermelho_mais2 = green(vermelho_Oitava_mais2);
        let b_vermelho_mais2 = blue(vermelho_Oitava_mais2);
        //valor do vermelho sustenido
        let r_vermelho_sustenido_mais2 = red(vermelho_sustenido_Oitava_mais2);
        let g_vermelho_sustenido_mais2 = green(vermelho_sustenido_Oitava_mais2);
        let b_vermelho_sustenido_mais2 = blue(vermelho_sustenido_Oitava_mais2);
        //valor do verde
        let r_verde_mais2 = red(verde_Oitava_mais2);
        let g_verde_mais2 = green(verde_Oitava_mais2);
        let b_verde_mais2 = blue(verde_Oitava_mais2);
        //valores de verde sustenido
        let r_verde_sustenido_mais2 = red(verde_sustenido_Oitava_mais2);
        let g_verde_sustenido_mais2 = green(verde_sustenido_Oitava_mais2);
        let b_verde_sustenido_mais2 = blue(verde_sustenido_Oitava_mais2);
        //valor do azul
        let r_azul_mais2 = red(azul_Oitava_mais2);
        let g_azul_mais2 = green(azul_Oitava_mais2);
        let b_azul_mais2 = blue(azul_Oitava_mais2);
        //valor do azull sustenido
        let r_azul_sustenido_mais2 = red(azul_sustenido_Oitava_mais2);
        let g_azul_sustenido_mais2 = green(azul_sustenido_Oitava_mais2);
        let b_azul_sustenido_mais2 = blue(azul_sustenido_Oitava_mais2);
        //valor de roxo
        let r_roxo_mais2 = red(roxo_Oitava_mais2);
        let g_roxo_mais2 = green(roxo_Oitava_mais2);
        let b_roxo_mais2 = blue(roxo_Oitava_mais2);
        //valores do roxo sustenido
        let r_roxo_sustenido_mais2 = red(roxo_sustenido_Oitava_mais2);
        let g_roxo_sustenido_mais2 = green(roxo_sustenido_Oitava_mais2);
        let b_roxo_sustenido_mais2 = blue(roxo_sustenido_Oitava_mais2);
        //valor do rosa
        let r_rosa_mais2 = red(rosa_Oitava_mais2);
        let g_rosa_mais2 = green(rosa_Oitava_mais2);
        let b_rosa_mais2 = blue(rosa_Oitava_mais2);
        //valor do amarelo
        let r_amarelo_mais2 = red(amarelo_Oitava_mais2);
        let g_amarelo_mais2 = green(amarelo_Oitava_mais2);
        let b_amarelo_mais2 = blue(amarelo_Oitava_mais2);
        //valores amarelo sustenido
        let r_amarelo_sustenido_mais2 = red(amarelo_sustenido_Oitava_mais2);
        let g_amarelo_sustenido_mais2 = green(amarelo_sustenido_Oitava_mais2);
        let b_amarelo_sustenido_mais2 = blue(amarelo_sustenido_Oitava_mais2);
        //VALOR DO CIAN0
        let r_ciano_mais2 = red(ciano_Oitava_mais2);
        let g_ciano_mais2 = green(ciano_Oitava_mais2);
        let b_ciano_mais2 = blue(ciano_Oitava_mais2);
        //Oitava +3
        vermelho_Oitava_mais3 = color(250, 204, 189);//fá
        vermelho_sustenido_Oitava_mais3 = color(251, 215, 193);//fá sustenido--> vermelho sustenido
        verde_Oitava_mais3 = color(224, 233, 205);//lá
        verde_sustenido_Oitava_mais3 = color(193, 225, 224);//lá sustenido--> verde sustenido
        azul_Oitava_mais3 = color(189, 212, 236);//dó
        azul_sustenido_Oitava_mais3 = color(194, 198, 216);//dó sustenido--> azul sustenido
        roxo_Oitava_mais3 = color(207, 194, 226);//re
        roxo_sustenido_Oitava_mais3 = color(229, 202, 224);//ré sustenido--> roxo sustenido
        rosa_Oitava_mais3 = color(250, 208, 217);//mi
        amarelo_Oitava_mais3 = color(253, 251, 211);//sol
        amarelo_sustenido_Oitava_mais3 = color(244, 245, 217);//sol sustenido--> amarelo sustenido
        ciano_Oitava_mais3 = color(191, 232, 252);//si

        //VALORES SOZINHOS
        let r_vermelho_mais3 = red(vermelho_Oitava_mais3);
        let g_vermelho_mais3 = green(vermelho_Oitava_mais3);
        let b_vermelho_mais3 = blue(vermelho_Oitava_mais3);
        //valor do vermelho sustenido
        let r_vermelho_sustenido_mais3 = red(vermelho_sustenido_Oitava_mais3);
        let g_vermelho_sustenido_mais3 = green(vermelho_sustenido_Oitava_mais3);
        let b_vermelho_sustenido_mais3 = blue(vermelho_sustenido_Oitava_mais3);
        //valor do verde
        let r_verde_mais3 = red(verde_Oitava_mais3);
        let g_verde_mais3 = green(verde_Oitava_mais3);
        let b_verde_mais3 = blue(verde_Oitava_mais3);
        //valores de verde sustenido
        let r_verde_sustenido_mais3 = red(verde_sustenido_Oitava_mais3);
        let g_verde_sustenido_mais3 = green(verde_sustenido_Oitava_mais3);
        let b_verde_sustenido_mais3 = blue(verde_sustenido_Oitava_mais3);
        //valor do azul
        let r_azul_mais3 = red(azul_Oitava_mais3);
        let g_azul_mais3 = green(azul_Oitava_mais3);
        let b_azul_mais3 = blue(azul_Oitava_mais3);
        //valor do azull sustenido
        let r_azul_sustenido_mais3 = red(azul_sustenido_Oitava_mais3);
        let g_azul_sustenido_mais3 = green(azul_sustenido_Oitava_mais3);
        let b_azul_sustenido_mais3 = blue(azul_sustenido_Oitava_mais3);
        //valor de roxo
        let r_roxo_mais3 = red(roxo_Oitava_mais3);
        let g_roxo_mais3 = green(roxo_Oitava_mais3);
        let b_roxo_mais3 = blue(roxo_Oitava_mais3);
        //valores do roxo sustenido
        let r_roxo_sustenido_mais3 = red(roxo_sustenido_Oitava_mais3);
        let g_roxo_sustenido_mais3 = green(roxo_sustenido_Oitava_mais3);
        let b_roxo_sustenido_mais3 = blue(roxo_sustenido_Oitava_mais3);
        //valor do rosa
        let r_rosa_mais3 = red(rosa_Oitava_mais3);
        let g_rosa_mais3 = green(rosa_Oitava_mais3);
        let b_rosa_mais3 = blue(rosa_Oitava_mais3);
        //valor do amarelo
        let r_amarelo_mais3 = red(amarelo_Oitava_mais3);
        let g_amarelo_mais3 = green(amarelo_Oitava_mais3);
        let b_amarelo_mais3 = blue(amarelo_Oitava_mais3);
        //valores amarelo sustenido
        let r_amarelo_sustenido_mais3 = red(amarelo_sustenido_Oitava_mais3);
        let g_amarelo_sustenido_mais3 = green(amarelo_sustenido_Oitava_mais3);
        let b_amarelo_sustenido_mais3 = blue(amarelo_sustenido_Oitava_mais3);
        //VALOR DO CIAN0
        let r_ciano_mais3 = red(ciano_Oitava_mais3);
        let g_ciano_mais3 = green(ciano_Oitava_mais3);
        let b_ciano_mais3 = blue(ciano_Oitava_mais3);


        //debugs
        console.log("r_vermelho:" + r_vermelho);
        console.log("g_vermelho:" + g_vermelho);
        console.log("b_vermelho:" + b_vermelho);
        //distancias
        //oitava -3
        this.distancia_vermelho_Oitava_menos3 = dist(r1, g1, b1, r_vermelho_menos3, g_vermelho_menos3, b_vermelho_menos3);
        this.distancia_vermelho_sustenido_Oitava_menos3 = dist(r1, g1, b1, r_vermelho_sustenido_menos3, g_vermelho_sustenido_menos3, b_vermelho_sustenido_menos3);
        this.distancia_verde_Oitava_menos3 = dist(r1, g1, b1, r_verde_menos3, g_verde_menos3, b_verde_menos3);
        this.distancia_verde_sustenido_Oitava_menos3 = dist(r1, g1, b1, r_verde_sustenido_menos3, g_verde_sustenido_menos3, b_verde_sustenido_menos3);
        this.distancia_azul_Oitava_menos3 = dist(r1, g1, b1, r_azul_menos3, g_azul_menos3, b_azul_menos3);
        this.distancia_azul_sustenido_Oitava_menos3 = dist(r1, g1, b1, r_azul_sustenido_menos3, g_azul_sustenido_menos3, b_azul_sustenido_menos3);
        this.distancia_roxo_Oitava_menos3 = dist(r1, g1, b1, r_roxo_menos3, g_roxo_menos3, b_roxo_menos3);
        this.distancia_roxo_sustenido_Oitava_menos3 = dist(r1, g1, b1, r_roxo_sustenido_menos3, g_roxo_sustenido_menos3, b_roxo_sustenido_menos3);
        this.distancia_rosa_Oitava_menos3 = dist(r1, g1, b1, r_rosa_menos3, g_rosa_menos3, b_rosa_menos3);
        this.distancia_amarelo_Oitava_menos3 = dist(r1, g1, b1, r_amarelo_menos3, g_amarelo_menos3, b_amarelo_menos3);
        this.distancia_amarelo_Oitava_menos3 = dist(r1, g1, b1, r_amarelo_sustenido_menos3, g_amarelo_sustenido_menos3, b_amarelo_sustenido_menos3);
        this.distancia_ciano_Oitava_menos3 = dist(r1, g1, b1, r_ciano_menos3, g_ciano_menos3, b_ciano_menos3);

        //oitava -2
        this.distancia_vermelho_Oitava_menos2 = dist(r1, g1, b1, r_vermelho_menos2, g_vermelho_menos2, b_vermelho_menos2);
        this.distancia_vermelho_sustenido_Oitava_menos2 = dist(r1, g1, b1, r_vermelho_sustenido_menos2, g_vermelho_sustenido_menos2, b_vermelho_sustenido_menos2);
        this.distancia_verde_Oitava_menos2 = dist(r1, g1, b1, r_verde_menos2, g_verde_menos2, b_verde_menos2);
        this.distancia_verde_sustenido_Oitava_menos2 = dist(r1, g1, b1, r_verde_sustenido_menos2, g_verde_sustenido_menos2, b_verde_sustenido_menos2);
        this.distancia_azul_Oitava_menos2 = dist(r1, g1, b1, r_azul_menos2, g_azul_menos2, b_azul_menos2);
        this.distancia_azul_sustenido_Oitava_menos2 = dist(r1, g1, b1, r_azul_sustenido_menos2, g_azul_sustenido_menos2, b_azul_sustenido_menos2);
        this.distancia_roxo_Oitava_menos2 = dist(r1, g1, b1, r_roxo_menos2, g_roxo_menos2, b_roxo_menos2);
        this.distancia_roxo_sustenido_Oitava_menos2 = dist(r1, g1, b1, r_roxo_sustenido_menos2, g_roxo_sustenido_menos2, b_roxo_sustenido_menos2);
        this.distancia_rosa_Oitava_menos2 = dist(r1, g1, b1, r_rosa_menos2, g_rosa_menos2, b_rosa_menos2);
        this.distancia_amarelo_Oitava_menos2 = dist(r1, g1, b1, r_amarelo_menos2, g_amarelo_menos2, b_amarelo_menos2);
        this.distancia_amarelo_Oitava_menos2 = dist(r1, g1, b1, r_amarelo_sustenido_menos2, g_amarelo_sustenido_menos2, b_amarelo_sustenido_menos2);
        this.distancia_ciano_Oitava_menos2 = dist(r1, g1, b1, r_ciano_menos2, g_ciano_menos2, b_ciano_menos2);

        //oitava -1
        this.distancia_vermelho_Oitava_menos1 = dist(r1, g1, b1, r_vermelho_menos1, g_vermelho_menos1, b_vermelho_menos1);
        this.distancia_vermelho_sustenido_Oitava_menos1 = dist(r1, g1, b1, r_vermelho_sustenido_menos1, g_vermelho_sustenido_menos1, b_vermelho_sustenido_menos1);
        this.distancia_verde_Oitava_menos1 = dist(r1, g1, b1, r_verde_menos1, g_verde_menos1, b_verde_menos1);
        this.distancia_verde_sustenido_Oitava_menos1 = dist(r1, g1, b1, r_verde_sustenido_menos1, g_verde_sustenido_menos1, b_verde_sustenido_menos1);
        this.distancia_azul_Oitava_menos1 = dist(r1, g1, b1, r_azul_menos1, g_azul_menos1, b_azul_menos1);
        this.distancia_azul_sustenido_Oitava_menos1 = dist(r1, g1, b1, r_azul_sustenido_menos1, g_azul_sustenido_menos1, b_azul_sustenido_menos1);
        this.distancia_roxo_Oitava_menos1 = dist(r1, g1, b1, r_roxo_menos1, g_roxo_menos1, b_roxo_menos1);
        this.distancia_roxo_sustenido_Oitava_menos1 = dist(r1, g1, b1, r_roxo_sustenido_menos1, g_roxo_sustenido_menos1, b_roxo_sustenido_menos1);
        this.distancia_rosa_Oitava_menos1 = dist(r1, g1, b1, r_rosa_menos1, g_rosa_menos1, b_rosa_menos1);
        this.distancia_amarelo_Oitava_menos1 = dist(r1, g1, b1, r_amarelo_menos1, g_amarelo_menos1, b_amarelo_menos1);
        this.distancia_amarelo_Oitava_menos1 = dist(r1, g1, b1, r_amarelo_sustenido_menos1, g_amarelo_sustenido_menos1, b_amarelo_sustenido_menos1);
        this.distancia_ciano_Oitava_menos1 = dist(r1, g1, b1, r_ciano_menos1, g_ciano_menos1, b_ciano_menos1);

        //oitava meio
        this.distancia_vermelho = dist(r1, g1, b1, r_vermelho, g_vermelho, b_vermelho);
        this.distancia_vermelho_sustenido = dist(r1, g1, b1, r_vermelho_sustenido, g_vermelho_sustenido, b_vermelho_sustenido);
        this.distancia_verde = dist(r1, g1, b1, r_verde, g_verde, b_verde);
        this.distancia_verde_sustenido = dist(r1, g1, b1, r_verde_sustenido, g_verde_sustenido, b_verde_sustenido);
        this.distancia_azul = dist(r1, g1, b1, r_azul, g_azul, b_azul);
        this.distancia_azul_sustenido = dist(r1, g1, b1, r_azul_sustenido, g_azul_sustenido, b_azul_sustenido);
        this.distancia_roxo = dist(r1, g1, b1, r_roxo, g_roxo, b_roxo);
        this.distancia_roxo_sustenido = dist(r1, g1, b1, r_roxo_sustenido, g_roxo_sustenido, b_roxo_sustenido);
        this.distancia_rosa = dist(r1, g1, b1, r_rosa, g_rosa, b_rosa);
        this.distancia_amarelo = dist(r1, g1, b1, r_amarelo, g_amarelo, b_amarelo);
        this.distancia_amarelo = dist(r1, g1, b1, r_amarelo_sustenido, g_amarelo_sustenido, b_amarelo_sustenido);
        this.distancia_ciano = dist(r1, g1, b1, r_ciano, g_ciano, b_ciano);

        //oitava +1
        this.distancia_vermelho_Oitava_mais1 = dist(r1, g1, b1, r_vermelho_mais1, g_vermelho_mais1, b_vermelho_mais1);
        this.distancia_vermelho_sustenido_Oitava_mais1 = dist(r1, g1, b1, r_vermelho_sustenido_mais1, g_vermelho_sustenido_mais1, b_vermelho_sustenido_mais1);
        this.distancia_verde_Oitava_mais1 = dist(r1, g1, b1, r_verde_mais1, g_verde_mais1, b_verde_mais1);
        this.distancia_verde_sustenido_Oitava_mais1 = dist(r1, g1, b1, r_verde_sustenido_mais1, g_verde_sustenido_mais1, b_verde_sustenido_mais1);
        this.distancia_azul_Oitava_mais1 = dist(r1, g1, b1, r_azul_mais1, g_azul_mais1, b_azul_mais1);
        this.distancia_azul_sustenido_Oitava_mais1 = dist(r1, g1, b1, r_azul_sustenido_mais1, g_azul_sustenido_mais1, b_azul_sustenido_mais1);
        this.distancia_roxo_Oitava_mais1 = dist(r1, g1, b1, r_roxo_mais1, g_roxo_mais1, b_roxo_mais1);
        this.distancia_roxo_sustenido_Oitava_mais1 = dist(r1, g1, b1, r_roxo_sustenido_mais1, g_roxo_sustenido_mais1, b_roxo_sustenido_mais1);
        this.distancia_rosa_Oitava_mais1 = dist(r1, g1, b1, r_rosa_mais1, g_rosa_mais1, b_rosa_mais1);
        this.distancia_amarelo_Oitava_mais1 = dist(r1, g1, b1, r_amarelo_mais1, g_amarelo_mais1, b_amarelo_mais1);
        this.distancia_amarelo_Oitava_mais1 = dist(r1, g1, b1, r_amarelo_sustenido_mais1, g_amarelo_sustenido_mais1, b_amarelo_sustenido_mais1);
        this.distancia_ciano_Oitava_mais1 = dist(r1, g1, b1, r_ciano_mais1, g_ciano_mais1, b_ciano_mais1);

        //oitava +2
        this.distancia_vermelho_Oitava_mais2 = dist(r1, g1, b1, r_vermelho_mais2, g_vermelho_mais2, b_vermelho_mais2);
        this.distancia_vermelho_sustenido_Oitava_mais2 = dist(r1, g1, b1, r_vermelho_sustenido_mais2, g_vermelho_sustenido_mais2, b_vermelho_sustenido_mais2);
        this.distancia_verde_Oitava_mais2 = dist(r1, g1, b1, r_verde_mais2, g_verde_mais2, b_verde_mais2);
        this.distancia_verde_sustenido_Oitava_mais2 = dist(r1, g1, b1, r_verde_sustenido_mais2, g_verde_sustenido_mais2, b_verde_sustenido_mais2);
        this.distancia_azul_Oitava_mais2 = dist(r1, g1, b1, r_azul_mais2, g_azul_mais2, b_azul_mais2);
        this.distancia_azul_sustenido_Oitava_mais2 = dist(r1, g1, b1, r_azul_sustenido_mais2, g_azul_sustenido_mais2, b_azul_sustenido_mais2);
        this.distancia_roxo_Oitava_mais2 = dist(r1, g1, b1, r_roxo_mais2, g_roxo_mais2, b_roxo_mais2);
        this.distancia_roxo_sustenido_Oitava_mais2 = dist(r1, g1, b1, r_roxo_sustenido_mais2, g_roxo_sustenido_mais2, b_roxo_sustenido_mais2);
        this.distancia_rosa_Oitava_mais2 = dist(r1, g1, b1, r_rosa_mais2, g_rosa_mais2, b_rosa_mais2);
        this.distancia_amarelo_Oitava_mais2 = dist(r1, g1, b1, r_amarelo_mais2, g_amarelo_mais2, b_amarelo_mais2);
        this.distancia_amarelo_Oitava_mais2 = dist(r1, g1, b1, r_amarelo_sustenido_mais2, g_amarelo_sustenido_mais2, b_amarelo_sustenido_mais2);
        this.distancia_ciano_Oitava_mais2 = dist(r1, g1, b1, r_ciano_mais2, g_ciano_mais2, b_ciano_mais2);

        //oitava +3
        this.distancia_vermelho_Oitava_mais3 = dist(r1, g1, b1, r_vermelho_mais3, g_vermelho_mais3, b_vermelho_mais3);
        this.distancia_vermelho_sustenido_Oitava_mais3 = dist(r1, g1, b1, r_vermelho_sustenido_mais3, g_vermelho_sustenido_mais3, b_vermelho_sustenido_mais3);
        this.distancia_verde_Oitava_mais3 = dist(r1, g1, b1, r_verde_mais3, g_verde_mais3, b_verde_mais3);
        this.distancia_verde_sustenido_Oitava_mais3 = dist(r1, g1, b1, r_verde_sustenido_mais3, g_verde_sustenido_mais3, b_verde_sustenido_mais3);
        this.distancia_azul_Oitava_mais3 = dist(r1, g1, b1, r_azul_mais3, g_azul_mais3, b_azul_mais3);
        this.distancia_azul_sustenido_Oitava_mais3 = dist(r1, g1, b1, r_azul_sustenido_mais3, g_azul_sustenido_mais3, b_azul_sustenido_mais3);
        this.distancia_roxo_Oitava_mais3 = dist(r1, g1, b1, r_roxo_mais3, g_roxo_mais3, b_roxo_mais3);
        this.distancia_roxo_sustenido_Oitava_mais3 = dist(r1, g1, b1, r_roxo_sustenido_mais3, g_roxo_sustenido_mais3, b_roxo_sustenido_mais3);
        this.distancia_rosa_Oitava_mais3 = dist(r1, g1, b1, r_rosa_mais3, g_rosa_mais3, b_rosa_mais3);
        this.distancia_amarelo_Oitava_mais3 = dist(r1, g1, b1, r_amarelo_mais3, g_amarelo_mais3, b_amarelo_mais3);
        this.distancia_amarelo_Oitava_mais3 = dist(r1, g1, b1, r_amarelo_sustenido_mais3, g_amarelo_sustenido_mais3, b_amarelo_sustenido_mais3);
        this.distancia_ciano_Oitava_mais3 = dist(r1, g1, b1, r_ciano_mais3, g_ciano_mais3, b_ciano_mais3);

        //distancia entre bolas

        this.distancia = dist(this.x, this.y, x1, y1);
//debug
        console.log("distancia entre os pontos: " + this.distancia);

        //debug
        console.log("distancia: " + this.distancia_vermelho / 10);

        //se a distancia é menor q 20 dá som


    }


}


function mousePressed() {


    if (displayVideo === true && menu_contar % 2 === 0) {
        clicar_ecra++;

        console.log("cliques_no_acra:" + clicar_ecra);
        if (executado===true) {
            if (mouseX < (innerWidth - (innerWidth / 5)) && mouseY < (innerHeight - (innerHeight / 10))) {
                if (mouseX > 55 && mouseY < (innerHeight - 55)) {

                    if (dist(x1, y1, mouseX, mouseY) > r / 2) {
                        //requestPointerLock();
                        for (var i = 0; i < bubbles.length; i++) {
                            //para não poder fazer bolas em cima de bolas já existentes
                            if (pode_clicar) {
                                if (dist(bubbles[i].x, bubbles[i].y, mouseX, mouseY) > bubbles[i].r_bolinhas / 2) {
                                    pode_clicar = true;

                                }
                                else if (dist(bubbles[i].x, bubbles[i].y, mouseX, mouseY) < bubbles[i].r_bolinhas / 2) {
                                    pode_clicar = false;

                                }
                            }
                            //tirar bolas
                            if (clicar_tirar) {
                                if (dist(bubbles[i].x, bubbles[i].y, mouseX, mouseY) > bubbles[i].r_bolinhas / 2) {

                                    clicar_tirar = true;
                                }
                                else if (dist(bubbles[i].x, bubbles[i].y, mouseX, mouseY) < bubbles[i].r_bolinhas / 2) {

                                    clicar_tirar = false;
                                }
                            }


                            //bolinhas pequenas

                            if (bubbles[i].over === true) {

//tirar bolas
                                console.log("offset numero cliques:" + bubbles[i].clicar1);
                                //tirar bubbles
                                if (bubbles[i].xoffset < 1 && bubbles[i].yoffset < 1 && bubbles[i].xoffset > -1 && bubbles[i].yoffset > -1) {
                                    if (bubbles[i].clicar1 > 1) {
                                        bubbles.slice(i, 1);
                                    }
                                }

                                console.log("offset X:" + bubbles[i].xoffset);
                                console.log("offset Y:" + bubbles[i].yoffset);

                                bubbles[i].locked = true;
                                bubbles[i].xoffset = mouseX - bubbles[i].x;
                                bubbles[i].yoffset = mouseY - bubbles[i].y;


                                console.log("mouse is pressed");
                            } else {
                                bubbles[i].locked = false;

                                console.log("mouse isn't pressed");
                            }

                        }
                        console.log("pode clicar:" + pode_clicar);
                        if (pode_clicar === true) {
                            bubbles.push(new Bubbles(mouseX, mouseY));
                            console.log("i= " + i);
                        }
                    }


                    //bola grande
                    if (dist(x1, y1, mouseX, mouseY) <= r / 2) {
                        dragging = true;
                        offsetX = x1 - mouseX;
                        offsetY = y1 - mouseY;
                    }
                }


            }
        }


    }


}

function mouseDragged() {

    if (displayVideo === true && menu_contar % 2 === 0) {
        if (executado===true) {
            if (mouseX < (innerWidth - (innerWidth / 5)) && mouseY < (innerHeight - (innerHeight / 10))) {
                if (mouseX > 55 && mouseY < (innerHeight - 55)) {

                    /*if(movedX>0 || movedY>0) {
                        remove=true;
                    }
    */

                    if (dist(x1, y1, mouseX, mouseY) > r / 2) {
                        for (var i = 0; i < bubbles.length; i++) {

                            if (bubbles[i].locked === true) {

//console.log("offset X:"+ bubbles[i].xoffset);
//console.log("offset Y:"+ bubbles[i].yoffset);
                                bubbles[i].x = mouseX - bubbles[i].xoffset;
                                bubbles[i].y = mouseY - bubbles[i].yoffset;


                            }
                        }
                    }

                }
            }
            if (dist(x1, y1, mouseX, mouseY) <= r / 2) {
                dragging = true;
                offsetX = x1 - mouseX;
                offsetY = y1 - mouseY;
            }


        }
    }

}

var executed = false;

function mouseReleased() {

    if (displayVideo === true && menu_contar % 2 === 0) {
        if (executado===true) {
            if (mouseX < (innerWidth - (innerWidth / 5)) && mouseY < (innerHeight - (innerHeight / 10))) {
                if (mouseX > 55 && mouseY < (innerHeight - 55)) {
                    contar_sons++;
                    console.log("contar sons:" + contar_sons);
                    for (var i = 0; i < bubbles.length; i++) {
                        console.log("offset X:" + bubbles[i].xoffset);
                        console.log("offset Y:" + bubbles[i].yoffset);
                        /*if(remove===true){
                            bubbles.splice(i, 1);
                            remove=false;
                        }*/
                        bubbles[i].locked = false;

                        distancia_1 = dist(bubbles[i].x, bubbles[i].y, x1, y1);
                        distancias.splice(i, 1, distancia_1);
                        arrayCopy(distancias, 0, copiadistancias, 0, distancias.length);
                        console.log("i=" + i);
                        if (bubbles.length === 1) {

//para correr só uma vez
                            if (executed === false) {

                                tocarSom();
                                executed = true;
                            }


                        }

                    }
                    dragging = false;
                    console.log("distancias: " + distancias);
                    console.log("Copia das distancias: " + copiadistancias);
                    pode_clicar = true;
                }
            }
        }

    }


}









