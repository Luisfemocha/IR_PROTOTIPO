let mod= $("#modal");
let table= $('#modalTable');
let tit= $('#titModal');
let but= $("#aceptarModal");

function modalIndex(a){
    table.empty();
    switch (a) {
        case 1: InsRep();// install repository
        case 2: WriCod();// write code
        case 3: // commit activity
        case 4: // read documentation
        case 5: // extract requirement
        case 6: // extract task
        case 7: // delegate task
        case 8: // evaluate activity
        case 9: // design rubric
        case 10: // evaluate sprint
        case 11: // provide feedback
        case 12: // design activity
        case 13: // select project
        case 14: // give template
        case 15: // realize task
        case 16: // present project
        case 17: // communicate industry_representative
    }
    mod.modal('show');
    but.show();
}
function InsRep(){ // UC01 - INSTALL REPOSITORY
    table.empty();
    tit.html('INSTALL REPOSITORY');
    but.hide();
    table.append($("<p>Push the 'pull' button in order to install the student's repository.</p>"));
    table.append($("<a download='Repository.java' class='btn btn-success btn-lg '>PULL</a>").attr('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent("import java.util.*;\nclass main{\n  public static void main(String[] args){\n       System.out.println('Hello world :D');\n  }\n}")));
    table.on('click', function (){ console.log("import java.util.*;\nclass main{\n  public static void main(String[] args){\n       System.out.println('Hello world :D');\n  }\n}")});
}

function WriCod(){ // UC02 - WRITE CODE
    tit.html('WRITE CODE');
    but.html('SAVE CODE');
    table.append($("<p>Write your code and when your ready to save it just push the 'SAVE CODE' button and it'll save it on the console.</p>"));
    table.append($("<textarea id='wc2' class='form-control'></textarea>"));
    but.on('click', function(){
        console.log('SAVING CODE...');
        console.log($('#wc2').val());
        table.empty();
        mod.modal('hide');
    })
}
/*function guardar(tabla, objeto){}
function modificar(tabla, objeto, mod){}*/