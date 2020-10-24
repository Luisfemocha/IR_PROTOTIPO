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
    $("#modalDiag").attr("class", 'modal-dialog modal-dialog-centered');
    console.log(a);
    switch (a) {
        case 1: InsRep();// install repository
            break;
        case 2: WriCod();// write code
            break;
        case 3: ComAct();// commit activity
            break;
        case 4: ReaDoc(); // read documentation
            break;
        case 5: ExtReq();// extract requirement
            break;
        case 6: ExtTas(); // extract task
            break;
        case 7: DelTas(); // delegate task
            break;
        case 8:// evaluate activity
            break;
        case 9:// design rubric
            break;
        case 10:// evaluate sprint
            break;
        case 11:// provide feedback
            break;
        case 12:// design activity
            break;
        case 13:// select project
            break;
        case 14:// give template
            break;
        case 15:// realize task
            break;
        case 16:// present project
            break;
        case 17:// communicate industry_representative
            break;
        case 18:// Solve Inquiries
            break;
        case 19:// Supervise Team
            break;
        default: alert('ERROR EN EL NUMERO DE CASO DE USO');
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
} // UC01 - INSTALL REPOSITORY

function WriCod(){ // UC02 - WRITE CODE
    table.empty();
    but.show();
    tit.html('WRITE CODE');
    but.html('SAVE CODE');
    table.append($("<p>Write your code and when your ready to save it just push the 'SAVE CODE' button and it'll save it on the console.</p>"));
    table.append($("<textarea id='wc2' class='form-control'></textarea>"));
    but.off();
    but.click(function(){
        let a=$('#wc2').val();
        console.log('SAVING CODE...');
        setTimeout(() => { console.log(a); }, 2000);
        mod.modal('hide');
        setTimeout(() => { table.empty();} , 1000);
    });
} // UC02 - WRITE CODE

function ComAct(){ // UC03 - COMMIT ACTIVITY
    table.empty();
    but.show();
    tit.html('COMMIT ACTIVITY');
    table.append($("<p>Write the code or attach a file in order to commit the activity.</p>"));
    table.append($("<textarea id='ca31' class='form-control'></textarea>"));
    table.append($("<input type='file' class='form-control-file' id='ca32'>"));
    but.html('COMMIT');
    but.off();
    but.on('click', function(){
        let a= $('#ca31').val();
        let b= $('#ca32').val();
        console.log('COMMITTING ACTIVITY...\n');
        setTimeout(() => { console.log(a+' '+b); }, 2000);
        mod.modal('hide');
        setTimeout(() => { table.empty(); }, 1000);
    });
} // UC03 - COMMIT ACTIVITY

function ReaDoc(){ // UC04 - READ DOCUMENTATION
    table.empty();
    but.show();
    tit.html('READ DOCUMENTATION');
    $("#modalDiag").addClass('modal-lg');
    table.append($("<article class=\"container-fluid learning-path\" role=\"main\">\n" +
        "        \n" +
        "                                            <h1>Java Documentation</h1>\n" +
        "                                            \n" +
        "                                            <div class=\"description\"><p>Whether you are working on a new cutting edge app or simply ramping up on new technology, Java documentation has all the information you need to make your project a smashing success. Use the rich set of code samples, tutorials, developer guides, API documentation, and more to quickly develop your prototype and scale it up to a real world application.</p></div>\n" +
        "        \n" +
        "        \n" +
        "        \n" +
        "        \n" +
        "        \n" +
        "                                            \n" +
        "                                                <h2 id=\"JavaPlatform%2CStandardEdition(JavaSE)\">Java Platform, Standard Edition (Java SE)</h2>\n" +
        "                                            \n" +
        "                                                    <div style=\"display:table;width:100%;height:auto;\">\n" +
        "                                                    <div style=\"display:table-cell;width:100%;height:auto;vertical-align:top;\">\n" +
        "                                            \n" +
        "                                            \n" +
        "                                            \n" +
        "                                            <div class=\"description\">Java SE lets you develop and deploy Java applications on desktops and servers. Java SE and component technologies offer the rich user interface, performance, versatility, portability, and security that today's applications require.<p></p>\n" +
        "                                            <a href=\"https://www.oracle.com/pls/topic/lookup?ctx=en/java/javase&amp;id=javaselatest\"> Java SE documentation</a><p></p>\n" +
        "                                            Java SE related products enable you to monitor, profile, track usage, and centrally manage Java-based applications.<p></p>\n" +
        "                                            <a href=\"https://docs.oracle.com/javacomponents\"> Java SE Components documentation</a><p></p></div>\n" +
        "                                            \n" +
        "                                            <div class=\"section row\" style=\"visibility: visible;\">\n" +
        "                                            </div>\n" +
        "                                            \n" +
        "                                                </div>\n" +
        "                                                </div>\n" +
        "                                            \n" +
        "                                                <h2 id=\"JavaEmbedded\">Java Embedded</h2>\n" +
        "                                            \n" +
        "                                                    <div style=\"display:table;width:100%;height:auto;\">\n" +
        "                                                    <div style=\"display:table-cell;width:100%;height:auto;vertical-align:top;\">\n" +
        "                                            \n" +
        "                                            \n" +
        "                                            \n" +
        "                                            <div class=\"description\">Java ME Embedded is designed for resource-constrained devices like wireless modules for M2M, industrial control, smart-grid infrastructure, environmental sensors and tracking, and more.<p></p>\n" +
        "                                            <a href=\"http://docs.oracle.com/javame\">Java ME Embedded documentation</a><p></p>\n" +
        "                                            Oracle Java SE Embedded delivers a secure, optimized runtime environment ideal for network-based devices.<p></p>\n" +
        "                                            <a href=\"http://docs.oracle.com/javase/8/javase-embedded.htm\">Oracle Java SE Embedded and JDK for ARM documentation</a><p></p>\n" +
        "                                            Java Card technology provides a secure environment for applications that run on smart cards and other devices with very limited memory and processing capabilities.<p></p>\n" +
        "                                            <a href=\"https://docs.oracle.com/javacard/\">Java Card documentation</a></div>\n" +
        "                                            \n" +
        "                                            <div class=\"section row\" style=\"visibility: visible;\">\n" +
        "                                            </div>\n" +
        "                                            \n" +
        "                                                </div>\n" +
        "                                                </div>\n" +
        "                                            \n" +
        "                                                <h2 id=\"JavaPlatform%2CEnterpriseEdition(JavaEE)\">Java Platform, Enterprise Edition (Java EE)</h2>\n" +
        "                                            \n" +
        "                                                    <div style=\"display:table;width:100%;height:auto;\">\n" +
        "                                                    <div style=\"display:table-cell;width:100%;height:auto;vertical-align:top;\">\n" +
        "                                            \n" +
        "                                            \n" +
        "                                            \n" +
        "                                            <div class=\"description\">Java EE provides an API and runtime environment for developing and running large, multi-tiered, reliable, and secure enterprise applications that are portable and scalable and that integrate easily with legacy applications and data.<p></p>\n" +
        "                                            <a href=\"http://docs.oracle.com/javaee\">Java EE documentation</a></div>\n" +
        "                                                </div>\n" +
        "                                                </div>\n" +
        "        \n" +
        "        \n" +
        "                                    </article>"));
    but.html('DONE');
    but.off();
    but.on('click', function(){
        mod.modal('hide');
        setTimeout(() => { $("#modalDiag").attr("class", 'modal-dialog modal-dialog-centered');}, 1000);
        setTimeout(() => { table.empty(); }, 1000);
    });
} // UC04 - READ DOCUMENTATION

function ExtReq(){ // UC05 - EXTRACT REQUIREMENT
    table.empty();
    but.show();
    tit.html('EXTRACT REQUIREMENT');
    but.html('SAVE');
    table.append($("<p>Write the requirements and then push 'SAVE' in order to save them.</p>"));
    table.append($("<textarea id='er5' class='form-control'></textarea>"));
    but.off();
    but.click(function(){
        let a=$('#er5').val();
        console.log('SAVING THE REQUIREMENTS...');
        setTimeout(() => { console.log(a); }, 2000);
        mod.modal('hide');
        table.empty();
    });
} // UC05 - EXTRACT REQUIREMENT

function ExtTas(){ // UC06 - EXTRACT TASK
    table.empty();
    but.show();
    tit.html('EXTRACT TASK');
    but.html('SAVE');
    table.append($("<p>Write the tasks and then push 'SAVE' in order to save them.</p>"));
    table.append($("<textarea id='et6' class='form-control'></textarea>"));
    but.off();
    but.click(function(){
        let a=$('#et6').val();
        console.log('SAVING TASKS...');
        setTimeout(() => { console.log(a); }, 2000);
        mod.modal('hide');
        table.empty();
    });
} // UC06 - EXTRACT TASK

function DelTas(){ // UC07 - DELEGATE TASK
    table.empty();
    but.show();
    tit.html('DELEGATE TASK');
    but.html('DONE');

    var j=1
    let e=[['NAME','DIFFICULTY','TYPE'],['LOREM','Manageable','Critical'],['IPSUM','Manageable','Standard'],['DOLOR','Manageable','Standard'],['SI','Manageable','Critical'],['AMET','Unmanageable','Critical']];
    table.append($("<thead id='DelTaskHeader'><tr id='DelTaskHeaderInside'><td></td></tr></thead>"));
    e[0].forEach(function (r){
        $("#DelTaskHeaderInside").append($("<th scope='col'></th>").html(r));
    });
    e.slice(1).forEach(function(r){ // FILL THE TABLE AND DO A FORM IN IT. (filling each row)
        var row =$('<tr></tr>');
        var t= $("<td></td>").append($("<input class='form-check-input checkbox' type='checkbox'>").val(j).attr('id',j))
        row.append(t);
        row.dblclick(function(){console.log(this)});

        for(i=0; i<r.length; i++) {
            var td=$("<td class=''></td>").append("<p></p>").html(r[i]).attr('id',j+''+i)
            row.append(td);
        } // filling each column

        /*$("body").on("contextmenu", "table tr", function(e) { // // FUNCIONALIDAD EXTRA AL UNDIR CLICK DERECHO // //
            $bar.css({
                display: "block",
                left: e.pageX,
                top: e.pageY
            });
            return false;
        });
        $("body").on("click", function() { $bar.hide(); });*/

        table.append(row);
        j++;
    });
    $("#0").hide();
    but.off();
    but.on('click', function(){
        delegate(e);
        mod.modal('hide');
        table.empty();
    });
}// UC07 - DELEGATE TASK

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