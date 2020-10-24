/*let mod= document.getElementById("modal");
let table= document.getElementById('modalTable');
let tit= document.getElementById('titModal');
let but= document.getElementById("aceptarModal");*/

let mod= $("#modal");
let table= $('#modalTable');
let tit= $('#titModal');
let but= $("#aceptarModal");

function modalIndex(a){
    // while(table.firstChild) table.removeChild(table.firstChild);
    // if      (a==1) InsRep();
    // else if (a==2) WriCod();
    table.empty();
    switch (a) {
        case 1:
            console.log(1);
            InsRep();// install repository
            break;
        case 2:
            console.log(2);
            WriCod();// write code
            break;
        case 3: console.log(3);// commit activity
        case 4: console.log(4);// read documentation
        case 5: console.log(5);// extract requirement
        case 6: console.log(6);// extract task
        case 7: console.log(7);// delegate task
        case 8: console.log(8);// evaluate activity
        case 9: console.log(9);// design rubric
        case 10: console.log(10);// evaluate sprint
        case 11: console.log(11);// provide feedback
        case 12: console.log(12);// design activity
        case 13: console.log(13);// select project
        case 14: console.log(14);// give template
        case 15: console.log(15);// realize task
        case 16: console.log(16);// present project
        case 17: console.log(17);// communicate industry_representative
    }
    $('#modal').modal('show');
    //but.hidden='';
}
function InsRep(){ // UC01 - INSTALL REPOSITORY
    table.empty();
    tit.html('INSTALL REPOSITORY');
    but.hide();
    table.append($("<p>Push the 'pull' button in order to install the student's repository or 'see' to just watch it in the console.</p>"));
    table.append($("<a download='Repository.java' class='btn btn-success btn-lg'>pull</a>").attr('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent("import java.util.*;\nclass main{\n  public static void main(String[] args){\n       System.out.println('Hello world :D');\n  }\n}")));
    table.append($("<button class='btn btn-primary btn-lg mx-3'>see</button>").on('click', function (){ console.log("import java.util.*;\nclass main{\n  public static void main(String[] args){\n       System.out.println('Hello world :D');\n  }\n}")}));
}

function WriCod(){ // UC02 - WRITE CODE
    table.empty();
    but.show();
    tit.html('WRITE CODE');
    but.html('SAVE CODE');
    table.append($("<p>Write your code and when your ready to save it just push the 'SAVE CODE' button and it'll save it on the console.</p>"));
    table.append($("<textarea id='wc2' class='form-control'></textarea>"));
    but.on('click', function(){
        console.log('SAVING CODE...');
        console.log($('#wc2').val());
        mod.modal('hide');
        table.empty();
    })
}
/*function InsRep(){ // UC01 - INSTALL REPOSITORY
    while(table.firstChild) table.removeChild(table.firstChild);
    tit.innerHTML= 'INSTALL REPOSITORY';
    but.hidden= 'hidden';
    var p=document.createElement('p');
    p.innerHTML="Push the 'pull' button in order to install the student's repository or 'see' to just watch it in the console.";
    table.appendChild(p);
    var a= document.createElement('a');
    a.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(("import java.util.*;\nclass main{\n  public static void main(String[] args){\n       System.out.println('Hello world :D');\n  }\n}")));
    a.setAttribute('download', 'Repository.java');
    a.className= 'btn btn-success';
    a.innerHTML= 'pull';
    table.appendChild(a);
    var b= document.createElement('button');
    b.onclick= function(){console.log("import java.util.*;\nclass main{\n  public static void main(String[] args){\n       System.out.println('Hello world :D');\n  }\n}")};
    b.className= 'btn btn-primary mx-3';
    b.innerHTML= 'see';
    table.appendChild(b);
    //table.onclick= function (){ console.log("import java.util.*;\nclass main{\n  public static void main(String[] args){\n       System.out.println('Hello world :D');\n  }\n}")};
}

function WriCod(){ // UC02 - WRITE CODE
    while(table.firstChild) table.removeChild(table.firstChild);
    tit.innerHTML= 'WRITE CODE';
    but.innerHTML= 'SAVE CODE';
    but.hidden='';
    var p= document.createElement('p');
    p.innerHTML="Write your code and when your ready to save it just push the 'SAVE CODE' button and it'll save it on the console.";
    table.appendChild(p);
    var t= document.createElement('textarea');
    t.className= 'form-control';
    t.id= 'wc2';
    table.appendChild(t);
    but.onclick= function(){
        console.log('SAVING CODE...');
        console.log($('#wc2').val());
        $('#modal').modal('hide');
    };
}
function guardar(tabla, objeto){}
function modificar(tabla, objeto, mod){}*/