let mod= $("#modal");
let tabla= $('#modalTable')
let but= $("#aceptarModal");

function modalIndex(a){
    tabla.empty();
    switch (a) {
        case 1: InsRep();// install repository
        case 2: // write code
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
}
function InsRep(){ // install repository
    but.hidden='hidden';
    tabla.append($("<a download='Repository.java'>PULL</a>").attr('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent("import java.util.*;\nclass main{\n  public static void main(String[] args){\n       System.out.println('Hello world :D');\n  }\n}")));
    tabla.on('click', function (){
        console.log("import java.util.*;\nclass main{\n  public static void main(String[] args){\n       System.out.println('Hello world :D');\n  }\n}");
        mod.modal('hide');
    });
}
function guardar(tabla, objeto){}
function modificar(tabla, objeto, mod){}