let mod=   $("#modal");
let bod=   $("#modalBody");
let table= $('#modalTable');
let tit=   $('#titModal');
let but=   $("#aceptarModal");

mod.on('keydown', function(){ if (event.keyCode==13)but.click()});
function modalIndex(a){
    table.empty();
    $("#modalDiag").attr("class", 'modal-dialog modal-dialog-centered');
    switch (a) {
        case 1: dowTas();
            break;
        case 2: wriCod();
            break;
        case 3: comAct();
            break;
        case 4: reaDoc();
            break;
        case 5: extReq();
            break;
        case 6: extTas();
            break;
        case 7: delTas();
            break;
        case 8: evaAct();
            break;
        case 9: desRub();
            break;
        case 10: evaSpr();
            break;
        case 11: proFee();
            break;
        case 12: desAct();
            break;
        case 13: selPro();
            break;
        case 14: givTem();
            break;
        case 15: reaTas();
            break;
        case 16: prePro();
            break;
        case 17: solInq();
            break;
        case 18: supTea();
            break;
        case 19: cheStL();
            break;
        case 20: crePro();
            break;
        case 21: cheTas();
            break;
        case 22: makInq();
            break;
        case 23: desCou();
            break;
        case 24: vieEva();
            break;
        case 25: vieTem();
            break;

        case 30: alert('RELATION DOES NOT HAVE A USER CASE OR KPI ASSOCIATED');console.log('RELATION DOES NOT HAVE A USER CASE OR KPI ASSOCIATED'); return false; //-BREAK CASE-//^ USER CASES UP ^//v KEEP PERFORMANCE INDICATOR DOWN v
            break;

        case 31: getCourseaverage();
            break; // grade                1. Knowledge increase
        case 32: getActivityPerformed();
            break; // activityPerformed    2. Skills increase
        case 33: getAverage();
            break; // majorAdvance         3. Student’s grades availability
        case 34: getCourseprogress();
            break; // activityAvailability 4. Activities availability
        case 35: getDeadline();
            break; // deadline             5. Project's deadline control
        case 36: getSprintsPerformed();
            break; // sprintsPerformed     6. Projects delivery
        case 37: getTeamSize();
            break; // teamSize             7. Team management

        default: alert('ERROR IN THE USER CASE // KPI NUMBER');
    }
    var b='UC0';
    if (a>20) {
        b='KPI-';
        a-=20;
    }
    else if (a>9) b='UC'
    console.log(b+a);
    $('#modal').modal('show');
}

function showTable(title, elements, bol){ /// *WITH CHECKBOXES OR RADIO*
    var j=1;
    table.append($("<caption style='caption-side: top;'></caption>").html(title));
    table.append($("<thead id='header'><tr id='headerInside'><td></td></tr></thead>"));
    elements[0].forEach(function (r){ $("#headerInside").append($("<th scope='col'></th>").html(r)); });

    elements.slice(1).forEach(function(r){ // FILL THE TABLE AND DO A FORM IN IT. (filling each row)
        var row =$('<tr></tr>');
        if      (bol=='check') row.append($("<td></td>").append($("<input name='checkbox' class='form-check-input checkbox' type='checkbox'>").val(j).attr('id',j)));
        else if (bol=='radio') row.append($("<td></td>").append($("<input name='radio' class='form-check-input radio' type='radio'>").val(j).attr('id',j)));
        else row.append($("<td></td>"));
        //row.dblclick(function(){console.log(this)});

        for(i=0; i<r.length; i++) {
            var td=$("<td class=''></td>").append("<p></p>").html(r[i]).attr('id',j+''+i)
            row.append(td);
        } // filling each column

        table.append(row);
        j++;
    });
} /// *WITH CHECKBOXES OR RADIO*
function showForm(title, elements, tip, type){
    var j=0;
    table.append($("<caption style='caption-side: top;'></caption>").html(title));

    elements.forEach(function(r){ // FILL THE TABLE AND DO A FORM IN IT. (filling each row)
        var row =$('<tr></tr>');
        row.append($("<td class=''></td>").append("<p></p>").html(r)); //.attr('id',j)
        if (type) {
            if      (tip == 1) row.append($("<input class='form-control' required>").attr('id', r).attr('type',type[j]));
            else if (tip == 2) row.append($("<textarea class='form-control' required></textarea>").attr('id', r).attr('type',type[j]));
        }
        else{
            if      (tip == 1) row.append($("<input class='form-control' required>").attr('id', r));
            else if (tip == 2) row.append($("<textarea class='form-control' required></textarea>").attr('id', r));
        }
        table.append(row);
        j++;
    });
}
function number_format(val, decimals){
    //Parse the value as a float value
    val = parseFloat(val);
    //Format the value w/ the specified number
    //of decimal places and return it.
    return val.toFixed(decimals);
}

// USER CASES V1.0 //
/*function InsRep(){ // UC01 - INSTALL REPOSITORY
    table.empty();
    tit.html('INSTALL REPOSITORY');
    but.hide();
    table.append($("<p>Push the 'Install' button in order to install the student's repository or 'see' to just watch it in the console.</p>"));
    table.append($("<a download='Repository.java' class='btn btn-success btn-lg'>Install</a>").attr('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent("import java.util.*;\nclass main{\n  public static void main(String[] args){\n       System.out.println('Hello world :D');\n  }\n}")).on('click', function (){ console.log("import java.util.*;\nclass main{\n  public static void main(String[] args){\n       System.out.println('Hello world :D');\n  }\n}")}));
    // table.append($("<button class='btn btn-primary btn-lg mx-3'>see</button>"));
    but.click(function(){
        mod.modal('hide');
        setTimeout(() => { table.empty();} , 1000);
    });
} // UC01 - INSTALL REPOSITORY
function WriCod(){ // UC02 - WRITE CODE
    table.empty();
    but.show();
    tit.html('WRITE CODE');
    but.html('SAVE CODE');
    table.append($("<p>Write your code and when your ready to save it just push the 'SAVE CODE' button and it'll save it on the console.</p>"));
    table.append($("<textarea id='wc1' class='form-control my-2' placeholder='CODE' required></textarea>"));
    var a= $("<select id='languages' class='form-control my-2' required></select>");
    let lan= ['Java', 'C++','Python','JavaScript'];
    lan.forEach(function (r){ a.append($("<option></option>").html(r).attr('id',r).attr('name','language')) });
    table.append(a);
    table.append($("<tr scope='row' class='form-inline my-2'></tr>").append($("<label>Documentation: </label><input type='file' class='form-control-file ml-3 w-50' id='wc2' required>")));
    //table.append($("<textarea id='wc3' class='form-control my-2' placeholder='MISTAKES' required></textarea>"));
    but.off();
    but.click(function(){
        let code= {
            'CODE': $('#wc1').val(),
            'LANGUAGE': $("#languages option:selected").text(),
            'DOCUMENTATION': $('#wc2').val(),
            //'MISTAKES': $('#wc3').val()
        }
        console.log('SAVING CODE...');
        setTimeout(() => { console.log(code); }, 2000);
        mod.modal('hide');
        setTimeout(() => { table.empty();} , 1000);
    });
} // UC02 - WRITE CODE
function ComAct(){ // UC03 - COMMIT ACTIVITY
    table.empty();
    but.show();
    $("#modalDiag").addClass('modal-lg');
    tit.html('COMMIT ACTIVITY');
    let e= [['id','name','time_range','theme','type','delivery_date','percentage'], [1,'User Stories', 'Weeks 1-2', 'Agile development', 'Modeling Activities', '24/10/2020','15%'], [2, 'Use case modeling', 'Weeks 2-3', 'Requirement analysis', 'Team Activities', '25/10/2020', '10%'], [3, 'Data flow diagram', 'Weeks 3-4', 'Structured modeling', 'Open Source Activities', '29/10/2020', '5%'], [4, 'Decomposition diagram', 'Weeks 4-5', 'Requirement modeling', 'Modeling Activities', '30/10/2020', '25%']]
    showTable("Select the activity to commit and write the code or attach a file in order to commit it.", e, 'radio');
    table.append($("<tr></tr>").append($("<td scope='row' colspan='8'><textarea id='ca1' class='form-control' placeholder='CODE'></textarea></td>")));
    table.append($("<tr></tr>").append($("<td scope='row' class='inline' colspan='8'><label>File: </label><input type='file' class='form-control-file' id='ca2'></td>")));
    but.html('COMMIT');
    but.off();
    but.on('click', function(){
        let a= $('#ca1').val();
        let b= $('#ca2').val();
        let c= $('input[name="radio"]:checked');
        var act;
        if (c.length) {
            c.each(function () {
                act= e[$(this).val()][1];
            });
        }
        else {
            console.log('No activity was selected.');
            return false;
        }
        console.log('COMMITTING ACTIVITY...\n');
        setTimeout(() => { console.log("The activity: '"+act+"' was submitted. \nCODE: "+a+' \nFILE: '+b); }, 2000);
        mod.modal('hide');
        setTimeout(() => { $("#modalDiag").attr("class", 'modal-dialog modal-dialog-centered');}, 1000);
        setTimeout(() => { table.empty(); }, 1000);
    });
} // UC03 - COMMIT ACTIVITY
function ReaDoc(){ // UC04 - READ DOCUMENTATION
    table.empty();
    but.show();
    tit.html('READ DOCUMENTATION');
    $("#modalDiag").addClass('modal-xl modal-dialog-scrollable');
    // 3051 CHARS OF JAVA DOCUMENTATION
    table.append($("<article class=\"container-fluid learning-path\" role=\"main\"><h1>Java Documentation</h1><div class=\"description\"><p>Whether you are working on a new cutting edge app or simply ramping up on new technology, Java documentation has all the information you need to make your project a smashing success. Use the rich set of code samples, tutorials, developer guides, API documentation, and more to quickly develop your prototype and scale it up to a real world application.</p></div><h2 id=\"JavaPlatform%2CStandardEdition(JavaSE)\">Java Platform, Standard Edition (Java SE)</h2><div style=\"display:table;width:100%;height:auto;\"><div style=\"display:table-cell;width:100%;height:auto;vertical-align:top;\"><div class=\"description\">Java SE lets you develop and deploy Java applications on desktops and servers. Java SE and component technologies offer the rich user interface, performance, versatility, portability, and security that today's applications require.<p></p><a href=\"https://www.oracle.com/pls/topic/lookup?ctx=en/java/javase&amp;id=javaselatest\"> Java SE documentation</a><p></p>Java SE related products enable you to monitor, profile, track usage, and centrally manage Java-based applications.<p></p><a href=\"https://docs.oracle.com/javacomponents\"> Java SE Components documentation</a><p></p></div><div class=\"section row\" style=\"visibility: visible;\"></div></div></div><h2 id=\"JavaEmbedded\">Java Embedded</h2><div style=\"display:table;width:100%;height:auto;\"><div style=\"display:table-cell;width:100%;height:auto;vertical-align:top;\"><div class=\"description\">Java ME Embedded is designed for resource-constrained devices like wireless modules for M2M, industrial control, smart-grid infrastructure, environmental sensors and tracking, and more.<p></p><a href=\"http://docs.oracle.com/javame\">Java ME Embedded documentation</a><p></p>Oracle Java SE Embedded delivers a secure, optimized runtime environment ideal for network-based devices.<p></p><a href=\"http://docs.oracle.com/javase/8/javase-embedded.htm\">Oracle Java SE Embedded and JDK for ARM documentation</a><p></p>Java Card technology provides a secure environment for applications that run on smart cards and other devices with very limited memory and processing capabilities.<p></p><a href=\"https://docs.oracle.com/javacard/\">Java Card documentation</a></div><div class=\"section row\" style=\"visibility: visible;\"></div></div></div><h2 id=\"JavaPlatform%2CEnterpriseEdition(JavaEE)\">Java Platform, Enterprise Edition (Java EE)</h2><div style=\"display:table;width:100%;height:auto;\"><div style=\"display:table-cell;width:100%;height:auto;vertical-align:top;\"><div class=\"description\">Java EE provides an API and runtime environment for developing and running large, multi-tiered, reliable, and secure enterprise applications that are portable and scalable and that integrate easily with legacy applications and data.<p></p><a href=\"http://docs.oracle.com/javaee\">Java EE documentation</a></div></div></div></article>"));
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
    table.append($("<td colspan='4'><p>Write the tasks of the requirement and then push 'SAVE' in order to save them.</p></td>"));
    table.append($("<tr class='mx-0 px-0'></tr>").append("<td class='pr-0'><input id='n1' placeholder='Name' class='form-control' name='nam'></td><td class='pr-0'><input id='d1' placeholder='Difficulty' class='form-control' name='dif' ></td><td class='pr-0'><input id='t1' placeholder='Type' class='form-control' name='typ'></td><td height='38.2px'></td>"));
    table.append($("<caption class='pt-3 m-0 p-0'><svg id='add' style='caption-side: bottom; color: #212529;' width=\"2.5em\" height=\"2.5em\" viewBox=\"0 0 16 16\" class=\"bi bi-file-plus-fill m-0 float-right\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z\"/></svg></caption>"))
    var i=1;
    $("#add").click(function () {
        i++;
        var tr= $("<tr class='mx-0 px-0'></tr>");
        tr.append($("<td class='pr-0'><input placeholder='Name' class='form-control pr-0' name='nam' ></td><td class='pr-0'><input placeholder='Difficulty' class='form-control pr-0' name='dif' ></td><td class='pr-0'><input placeholder='Type' class='form-control pr-0' name='typ' ></td>"));
        tr.append($("<td></td>").append($("<svg width='38px' height='38px' viewBox=\"0 0 16 16\" class='bi bi-file-minus-fill' fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 7.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z\"/></svg>").attr('id','rem'+i).on('click', function(){this.parentElement.parentElement.remove(); i-=1})));
        table.append(tr);
    });
    but.off();
    but.click(function(){
        var a=$("input[name ='nam']");
        var b=$("input[name ='dif']");
        var c=$("input[name ='typ']");
        var req=[];
        for(let i=0; i<a.length; i++) req.push({'Name': a[i].value, "Difficulty": b[i].value, 'Type':c[i].value});
        console.log('SAVING THE REQUIREMENTS...');
        setTimeout(() => { console.log(req); }, 2000);
        mod.modal('hide');
        table.empty();
    });
} // UC05 - EXTRACT REQUIREMENT
function ExtTas(){ // UC06 - EXTRACT TASK
    table.empty();
    but.show();
    tit.html('EXTRACT TASK');
    but.html('SAVE');
    table.append($("<caption style='caption-side: top; color: black;'>Write the tasks and then push 'SAVE' in order to save them.</caption>"));
    table.append($("<td class='pr-0'></td>").append("<input id='n1' placeholder='Name' class='form-control' name='nam'>"));
    table.append($("<td class='pr-0'></td>").append("<input id='d1' placeholder='Difficulty' class='form-control' name='dif' >"));
    table.append($("<td class='pr-0'></td>").append("<input id='t1' placeholder='Type' class='form-control' name='typ'>"));
    but.off();
    but.click(function(){
        var tas= {'Name': $("#n1").val(), "Difficulty": $("#d1").val(), 'Type':$("#t1").val()};
        console.log('SAVING TASKS...');
        setTimeout(() => { console.log(tas); }, 2000);
        mod.modal('hide');
        table.empty();
    });
} // UC06 - EXTRACT TASK
function DelTas(){ // UC07 - DELEGATE TASK
    table.empty();
    but.show();
    tit.html('DELEGATE TASK');
    but.html('DONE');
    let e=[['NAME','DIFFICULTY','TYPE'],['Realize the commit.','Manageable.','Critical.'],['Show the progress.','Manageable.','Standard.'],['Talk to the lazy one.','Manageable.','Standard.'],['Help the others with the quiz.','Manageable.','Critical.'],['DOLOR.','Unmanageable.','Critical.']];
    showTable("Check which tasks you'll like to delegate and then push 'DONE' to delegate them.", e, 'check');
    var a= $("<select id='students' class='form-control'></select>");
    let f= ['Jairo Andrés Cortés Roncancio.', 'Cristian Mejía Martínez.','María Paulina García Velásquez.','Luis Felipe Moreno Chamorro.'];
    f.forEach(function (r){ a.append($("<option></option>").html(r).attr('id',r).attr('name','student')) });
    table.append($("<td colspan='2'>Student to delegate task(s):</td>"))
    table.append($("<td colspan='2'></td>").html(a));
    but.off();
    but.on('click', function(){
        var deleg= $('input[name="checkbox"]:checked');
        var stu= $( "#students option:selected").text();
        if (deleg.length){
            var s='';
            deleg.each(function(){
                s+='\n -';
                e[$(this).val()].forEach(function (r){ s+=' '+r; }) });
            console.log("THE TASKS TO DELEGATE ARE: "+s+"\nThey are delegated to "+stu);
        }
        else console.log('THERE ARE NOT TASKS TO DELEGATE.')
        mod.modal('hide');
        setTimeout(() => {table.empty(); }, 2000);
    });
} // UC07 - DELEGATE TASK
function EvaAct(){ // UC08 - EVALUATE ACTIVITY
    table.empty();
    but.show();
    tit.html('EVALUATE ACTIVITY');
    but.html('DONE');
    table.append($("<caption style='caption-side: top;'><h6>Fill in every field in the form in order to evaluate the student's activity. In each field you'll be given a numeric and a text field to write the grade and the description of each field. Press 'DONE' to calculate the grade and save the form in console.</h6></caption>"));
    $("#modalDiag").addClass('modal-lg');
    table.append($("<thead><tr><th scope='col'>RUBRIC</th><th scope='col'>DESCRIPTION</th><th scope='col'>GRADE</th></tr></thead>"));
    table.append($("<tr><td>Code fullness:</td><td><textarea id='ea1' class='form-control mr-3' style='height: 200px;'>import java.util.*;\nclass main{\n  public static void main(String[] args){\n       System.out.println('Hello world :D');\n  }\n}</textarea></td><td><input id='ea1g' type='number' placeholder='code grade'></td></tr>"));
    table.append($("<tr><td>Presentation:</td><td><textarea id='ea2' class='form-control mr-3'></textarea></td><td><input id='ea2g' type='number' placeholder='presentation grade'></td></tr>"));
    table.append($("<tr><td>Progress report:</td><td><textarea id='ea3' class='form-control mr-3'></textarea></td><td><input id='ea3g' type='number' placeholder='prog. rep. grade'></td></tr>"));
    table.append($("<tr><td>Consistency:</td><td><textarea id='ea4' class='form-control mr-3'></textarea></td><td><input id='ea4g' type='number' placeholder='consistency grade'></td></tr>"));
    table.append($("<tr><td>Functions:</td><td><textarea id='ea5' class='form-control mr-3'></textarea></td><td><input id='ea5g' type='number' placeholder='function grade'></td></tr>"));

    but.off();
    but.click(function(){
        let a= (parseFloat($('#ea1g').val()) + parseFloat($('#ea2g').val()) + parseFloat($('#ea3g').val()) + parseFloat($('#ea4g').val()) + parseFloat($('#ea5g').val()))/5;
        let a1= $('#ea1').val();
        let a2= $('#ea2').val();
        let a3= $('#ea3').val();
        let a4= $('#ea4').val();
        let a5= $('#ea5').val();
        console.log('SAVING EVALUATION...');
        setTimeout(() => { alert("FINAL GRADE: "+a); console.log("Evaluation.\n\nFINAL GRADE: "+a+"\n\nCOMMENTS\n - Code: "+a1+"\n - Presentation: "+a2+"\n - Progress: "+a3+"\n - Consistency: "+a4+"\n - Functions: "+a5); }, 2000);
        mod.modal('hide');
        setTimeout(() => { $("#modalDiag").attr("class", 'modal-dialog modal-dialog-centered');}, 1000);
        setTimeout(() => { table.empty(); }, 1000);
    });
} // UC08 - EVALUATE ACTIVITY
function DesRub(){ // UC09 - DESIGN RUBRIC
    table.empty();
    but.show();
    tit.html('DESIGN RUBRIC');
    but.html('SAVE');
    table.append($("<p>Write the criterion for the rubric of the activity, you can push the '+' button to add more criterion. Push 'SAVE' in order to save it/them.</p>"));
    table.append($("<tr></tr>").append("<td class='pr-0' width='414.4px'><input id='dr' placeholder='Criterion' class='form-control pr-0' name='crit' ></td><td width='14.4px' height='38.2px'></td>"));
    table.append($("<caption class='m-0 p-0'><svg id='add' style='caption-side: bottom; color: #212529;' width=\"2.5em\" height=\"2.5em\" viewBox=\"0 0 16 16\" class=\"bi bi-file-plus-fill m-0 float-right\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z\"/></svg></caption>"))
    var i=1;
    $("#add").click(function () {
        i++;
        var t=$("<tr></tr>");
        t.append($("<td class='pr-0'></td>").append($("<input class='form-control' name='crit'>").attr('id','dr'+i).attr('placeholder', 'Criterion')));
        t.append($("<td class='py-auto px-0 m-0'></td>").append($("<svg width='38px' height='38px' viewBox=\"0 0 16 16\" class='bi bi-file-minus-fill' fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 7.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z\"/></svg>").attr('id','rem'+i).on('click', function(){this.parentElement.parentElement.remove(); i-=1})));
        table.append(t);
    });

    but.off();
    but.click(function(){
        var a=$("input[name ='crit']");
        var rubric=[];
        for(let i=0; i<a.length; i++) rubric.push(a[i].value);
        console.log('SAVING THE RUBRIC...');
        setTimeout(() => { console.log('Criterion: '+rubric)}, 2000);
        mod.modal('hide');
        setTimeout(() => { table.empty();} , 1000);
    });
} // UC09 - DESIGN RUBRIC
function EvaSpr(){ // UC10 - EVALUATE SPRINT
    table.empty();
    but.show();
    tit.html('EVALUATE SPRINT');
    but.html('SAVE');
    $("#modalDiag").addClass('modal-lg');
    let e= [['id','name','time_range','theme','type','delivery_date','percentage'], [1,'User Stories', 'Weeks 1-2', 'Agile development', 'Modeling Activities', '24/10/2020','15%'], [2, 'Use case modeling', 'Weeks 2-3', 'Requirement analysis', 'Team Activities', '25/10/2020', '10%'], [3, 'Data flow diagram', 'Weeks 3-4', 'Structured modeling', 'Open Source Activities', '29/10/2020', '5%'], [4, 'Decomposition diagram', 'Weeks 4-5', 'Requirement modeling', 'Modeling Activities', '30/10/2020', '25%']]
    showTable("Select which sprint and which team to evaluate and then fill the grade and description below. Push 'SAVE' to save the evaluation.", e, 'radio');

    table.append($("<td colspan='4'><textarea id='es1' class='form-control' placeholder='Commentaries' required></textarea></td>"));
    table.append($("<td colspan='2'><input id='es2' class='form-control' placeholder='Grade' type='number' required></td>"));
    let f= ['Team 1', 'Team 2','Team 3','Team 4'];
    var g= $("<select id='teams' class='form-control'></select>");
    f.forEach(function (r){ g.append($("<option></option>").html(r).attr('id',r).attr('name','team')) });
    table.append($("<td colspan='2'></td>").html(g));

    but.off();
    but.click(function(){
        let a=$('#es1').val();
        let b=$('#es2').val();
        let sel= $('input[name="radio"]:checked');
        var activity;
        if (sel.length) {
            sel.each(function () {
                activity= e[$(this).val()][1];
            });
        }
        else activity= null;
        let team= $( "#teams option:selected").text();
        console.log('SAVING EVALUATION...');
        setTimeout(() => { console.log('Evaluation of: '+team+'\nACTIVITY: '+activity+"\n\nGRADE: "+b+"\nCOMMENTARIES: "+a) }, 2000);
        mod.modal('hide');
        setTimeout(() => { $("#modalDiag").attr("class", 'modal-dialog modal-dialog-centered');}, 1000);
        setTimeout(() => { table.empty(); }, 1000);
    });
} // UC10 - EVALUATE SPRINT
function ProFee(){ // UC11 - PROVIDE FEEDBACK
    table.empty();
    but.show();
    tit.html('PROVIDE FEEDBACK');
    but.html('SAVE');
    table.append($("<p>Write the feedback and then push 'SAVE' in order to send it.</p>"));
    table.append($("<input id='pf1' class='form-control' placeholder='Author' required>"));
    table.append($("<textarea id='pf2' class='form-control' placeholder='Commentary' required></textarea>"));
    but.off();
    but.click(function(){
        let feedback= {'Author':$('#pf1').val(), 'Commentary':$('#pf2').val()}
        console.log('SAVING THE FEEDBACK...');
        setTimeout(() => { console.log("Feedback:\n\n- Author: "+a+"\n- Feedback: "+b); }, 2000);
        mod.modal('hide');
        table.empty();
    });
} // UC11 - PROVIDE FEEDBACK
function DesAct(){ // UC12 - DESIGN ACTIVITY
    table.empty();
    but.show();
    tit.html('DESIGN ACTIVITY');
    but.html('SAVE');
    let e=['id','name','time_range','theme','type','delivery_date','percentage'];
    let type=['number','text','text','text','text','date','number'];
    showForm('Complete the form in order to design the activity.', e, 1, type);
    but.off();
    but.click(function(){
        var activity={};
        e.forEach(function(r){
            activity[r]=document.getElementById(r).value;
        });
        console.log('SAVING THE ACTIVITY...');
        setTimeout(() => { console.log(activity); }, 2000);
        mod.modal('hide');
        table.empty();
    });
} // UC12 - DESIGN ACTIVITY
function SelPro(){ // UC13 - SELECT PROJECT
    table.empty();
    but.show();
    tit.html('SELECT PROJECT');
    but.html('SELECT');
    let e=[['NAME','DEADLINE'],['LOREM','Tuesday'],['IPSUM','Wednesday'],['DOLOR','August'],['SI','December'],['AMET','2021']];
    showTable("Select which project you'll like to select and then push 'DONE' to select it.", e, 'radio');
    but.off();
    but.on('click', function(){
        var sel= $('input[name="radio"]:checked');
        if (sel.length){
            console.log("THE PROJECT YOU SELECTED IS: ");
            sel.each(function(){
                var s='';
                e[$(this).val()].forEach(function (r){ s+=''+r+' '; })
                console.log(s);
            });
            mod.modal('hide');
            setTimeout(() => {table.empty(); }, 2000);
        }
        else console.log("THERE HASN'T BEEN A SELECTED PROJECT YET.");
    });
} // UC13 - SELECT PROJECT
function GivTem(){ // UC14 - GIVE TEMPLATE
    table.empty();
    but.show();
    tit.html('GIVE TEMPLATE');
    table.append($("<p>Write the template or attach a file in order to give it to the students.</p>"));
    table.append($("<textarea id='gt1' class='form-control'></textarea>"));
    table.append($("<input id='gt2' type='file' class='form-control-file'>"));
    but.html('COMMIT');
    but.off();
    but.on('click', function(){
        let a= $('#gt1').val();
        let b= $('#gt2').val();
        console.log('GIVING TEMPLATE...\n');
        setTimeout(() => { console.log(a+' '+b); }, 2000);
        mod.modal('hide');
        setTimeout(() => { table.empty(); }, 1000);
    });
} // UC14 - GIVE TEMPLATE
function ReaTas(){ // UC15 - REALIZE TASK
    table.empty();
    but.show();
    tit.html('REALIZE TASK');
    table.append($("<p>Select the task to realize and then write or attach the file to fulfill the task.</p>"));
    but.html('DONE');
    let e= ['Realize the commit.', 'Show the progress.','Talk to the lazy one.','Help the others with the quiz.'];
    var a= $("<select id='tasks' class='form-control'></select>");
    e.forEach(function (r){ a.append($("<option></option>").html(r).attr('id',r).attr('name','task')) });
    table.append(a);
    table.append($("<textarea id='rt1' class='form-control' placeholder='Write or code here.'></textarea>"));
    table.append($("<input id='rt2' type='file' class='form-control-file'>"));
    but.off();
    but.on('click', function(){
        var real= $( "#tasks option:selected").text();
        let a= $('#rt1').val();
        let b= $('#rt2').val();
        console.log('REALIZING TASK...\n');
        setTimeout(() => { console.log("The task "+real+" was made by submitting "+a+' and/or the file '+b); }, 2000);
        mod.modal('hide');
        setTimeout(() => { table.empty(); }, 1000);
    });
} // UC15 - REALIZE TASK
function PrePro(){ // UC16 - PRESENT PROJECT
    table.empty();
    but.show();
    tit.html('PRESENT PROJECT');
    table.append($("<p>In order to present the project attach a video in which you'll be presenting it. You can also write an introduction or notes in the textbox.</p>"));
    table.append($("<textarea id='pp1' class='form-control' placeholder='You can write here.'></textarea>"));
    table.append($("<input id='pp2' type='file' class='form-control-file'>"));
    but.html('PRESENT');
    but.off();
    but.on('click', function(){
        let a= $('#pp1').val();
        let b= $('#pp2').val();
        console.log('PRESENTING PROJECT...\n');
        setTimeout(() => { console.log(a+' '+b); }, 2000);
        mod.modal('hide');
        setTimeout(() => { table.empty(); }, 1000);
    });
} // UC16 - PRESENT PROJECT
function ComInd(){ // UC17 - COMMUNICATE INDUSTRY_REPRESENTATIVE
    table.empty();
    but.show();
    tit.html('COMMUNICATE INDUSTRY_REPRESENTATIVE');
    but.html('SEND');
    table.append($("<p>Write a message/mail to the Industry_Representative, your message will be saved in the console.</p>"));
    table.append($("<textarea id='ci1' class='form-control'></textarea>"));
    but.off();
    but.click(function(){
        let a=$('#ci1').val();
        console.log('SENDING MESSAGE...');
        setTimeout(() => { console.log(a); }, 2000);
        mod.modal('hide');
        setTimeout(() => { table.empty();} , 1000);
    });
} // UC17 - COMMUNICATE INDUSTRY_REPRESENTATIVE
function SolInq(){ // UC18 - SOLVE INQUIRIES
    table.empty();
    but.show();
    tit.html('SOLVE INQUIRIES');
    but.html('DONE');
    let e=["I can't seem to find the repository link, could you send it?","My code has this error: 'Main.java:9: error: cannot find symbol' but at that line there's only a comment...","My pc was stolen, I would appreciate if you could give me more time to send the activity.","How do I change the color of the code?","Am I still enrolled in this course? 'cause I wanted out."];
    showForm("Write in the textarea the solution to each inquiry and then press 'DONE' to save them in console.", e, 2);
    but.off();
    but.click(function(){
        var a=' INQUIRIES ';
        e.forEach(function(r){ a+= '\n'+r+': '+document.getElementById(r).value });
        console.log('SAVING THE ACTIVITY...');
        setTimeout(() => { console.log(a); }, 2000);
        mod.modal('hide');
        table.empty();
    });
} // UC18 - SOLVE INQUIRIES
function SupTea(){ // UC19 - SUPERVISE TEAM
    table.empty();
    but.show();
    tit.html('SUPERVISE TEAM');
    but.html('DONE');
    let e=[['ID','NAME','FINISHED_ACTIVITIES'],[1,'LOREM',['Install repository','Communicating with the representative']],[2,'IPSUM',['Managing stress','Standard deviation course']],[3,'DOLOR',[]],[4,'AMET',['Communicating with the representative']]];
    showTable("In this page you can look all the teams and which activities they have done.", e, 'none');
    but.off();
    but.on('click', function(){
        console.log('Closing table...');
        mod.modal('hide');
        setTimeout(() => {table.empty(); }, 2000);
    });
} // UC19 - SUPERVISE TEAM*/

// USER CASES V2.0
function dowTas(){ // UC01: Download Task
    table.empty();
    tit.html('UC01: DOWNLOAD TASK');
    table.append($("<p>Select the task in order to view its attributes. Push the 'DOWNLOAD' button to download the task.</p>"));

    var div= $("<div class='form-inline dropright'></div>");
    div.append($("<label class='col-sm-2'>Name:</label>"));
    var sel= $("<select class='form-control col-lg' id='exampleFormControlSelect1'></select>");
    sel.append($("<option>1</option>"));
    sel.append($("<option>2</option>"));
    sel.append($("<option>3</option>"));
    sel.append($("<option>4</option>"));
    sel.append($("<option>5</option>"));
    sel.append($("<option>6</option>"));
    sel.append($("<option>7</option>"));

    div.append(sel);

    /*
    <input id='n1' placeholder='Name' class='col-lg form-control dropdown-toggle' name='nam' data-toggle='dropdown' required>")
    var dropMenu= $("<ul class ='dropdown-menu'></ul>").attr('id', id+'drop').attr('aria-labelledby', id).attr('name', comboBox);

    //first time filling the comboBox
    var comboMenu= JSON.parse(localStorage.getItem('task'));
    comboMenu.forEach(function(r){ // r= codigo
        console.log(r);
        //var a= $("<a class='dropdown-item'></a>").html(r[1]+": "+r[2]).attr('name',id).attr('data-codigo',r[1]); // OTROS: ID	CODIGO	NOMBRE

        a.on('click', function(){
            $("#"+$(this).attr('name')).val($(this).attr('data-codigo'));
        });
        dropMenu.append(a);
    });

    div.append(inp);
    div.append(dropMenu);

    inp.on("keyup", function() {
        if (event.keyCode==13) but.click()
        else{
            var id= $(this)[0]['id'];
            var menu =  $("#"+id+"drop");
            var values= $(this).val();

            menu.empty(); //se hace de cero el dropdown.

            var r;
            var w=[];
            r= m[menu.attr('name')];

            r.forEach(function(s){ // mira cada campo y lo compara con el input
                if (typeof values!=='string') values=values.toString();

                if ((s[1]+": "+s[2]).toLowerCase().match(values.toLowerCase())){
                    w.push(s);
                }
            });

            w.forEach(function(c){ // vuelve a llenar el dropdown y le agrega los listeners
                var a= $("<a class='dropdown-item'></a>").html(c[1]+": "+c[2]).attr('name',id).attr('data-codigo',c[1]);
                menu.append(a);
                a.on('click', function(){
                    $("#"+$(this).attr('name')).val($(this).attr('data-codigo'));
                });
            });
        }
    });

    */
    table.append($("<tr class='pr-0'></tr>").append(div));

    div= $("<div class='form-inline'></div>");
    div.append($("<label class='col-sm-2'>Difficulty:</label>"));
    div.append($("<input id='n1' placeholder='SEARCH' class='col-lg form-control' readonly>"));
    table.append($("<tr class='pr-0'></tr>").append(div));

    div= $("<div class='form-inline'></div>");
    div.append($("<label class='col-sm-2'>Type:</label>"));
    div.append($("<input id='n1' placeholder='SEARCH' class='col-lg form-control' readonly>"));
    table.append($("<tr class='pr-0'></tr>").append(div));

    div= $("<div class='form-inline'></div>");
    div.append($("<label class='col-sm-2'>State:</label>"));
    div.append($("<input id='n1' placeholder='SEARCH' class='col-lg form-control' readonly>"));
    table.append($("<tr class='pr-0'></tr>").append(div));

    div= $("<div class='form-inline'></div>");
    div.append($("<label class='col-sm-2'>Submission:</label>"));
    div.append($("<input id='n1' placeholder='SEARCH' class='col-lg form-control' readonly>"));
    table.append($("<tr class='pr-0'></tr>").append(div));

    but.html('DOWNLOAD');

    but.click(function(){
        mod.modal('hide');

        //table.append($("<a id='download' download='task.json' style='display: none'></a>").attr('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent()));
        //$('#download').click()

        setTimeout(() => {
            table.empty();


            } , 1000);
    });
} // UC01: Download Task
function wriCod(){ // UC02: Write Code
    table.empty();
    tit.html('UC02: WRITE CODE');
    but.html('SAVE CODE');
    table.append($("<p>Submit your code and when your ready to save it just push the 'SAVE CODE' button and it'll save it.</p>"));

    //     lan.forEach(function (r){ a.append($("<option></option>").html(r).attr('id',r).attr('name','language')) });
    //     table.append(a);
    //     table.append($("<tr scope='row' class='form-inline my-2'></tr>").append($("<label>Documentation: </label><input type='file' class='form-control-file ml-3 w-50' id='wc2' required>")));

    var tr= $("<tr scope='row' class='form-inline my-2'></tr>");
    tr.append($("<label class='col-sm-3'>REQUIREMENT: </label>"));
    var sel= $("<select type='text' class='form-control col' id='requirement' required></select>");
    sel.append($("<option>1</option>"));
    sel.append($("<option>2</option>"));
    sel.append($("<option>3</option>"));
    sel.append($("<option>4</option>"));
    sel.append($("<option>5</option>"));
    sel.append($("<option>6</option>"));
    sel.append($("<option>7</option>"));
    tr.append(sel)
    table.append(tr);

    tr= $("<tr scope='row' class='form-inline my-2 text-right'></tr>");
    tr.append($("<label class='col-sm-3 text-right'>CODE: </label>"));
    tr.append($("<input id='code' class='form-control-file col' type='file' required>"));
    table.append(tr);

    tr= $("<tr scope='row' class='form-inline my-2 text-right'></tr>");
    tr.append($("<label class='col-sm-3 text-right'>NAME: </label>"));
    tr.append($("<input id='name' placeholder='Name' class='form-control col' required>"));
    table.append(tr);

    tr= $("<tr scope='row' class='form-inline my-2 text-right'></tr>");
    tr.append($("<label class='col-sm-3  text-right'>LANGUAGE: </label>"));
    tr.append($("<input id='languages' placeholder='Language' class='form-control  col' required>"));
    table.append(tr);

    tr= $("<tr scope='row' class='form-inline my-2 text-right'></tr>");
    tr.append($("<label class='col-sm-3 text-right'>TYPE: </label>"));
    tr.append($("<input id='type' placeholder='Type' class='form-control  col' required>"));
    table.append(tr);

    tr= $("<tr scope='row' class='form-inline my-2 text-right'></tr>");
    tr.append($("<label class='col-sm-3 text-right'>DOCUMENTATION: </label>"));
    tr.append($("<input id='doc' class='form-control-file col' type='file' required>"));
    table.append(tr);

    //table.append($("<textarea id='wc3' class='form-control my-2' placeholder='MISTAKES' required></textarea>"));
    but.off();
    but.click(function(){
        let code= {
            'CODE': $('#wc1').val(),
            'LANGUAGE': $("#languages option:selected").text(),
            'DOCUMENTATION': $('#wc2').val(),
            //'MISTAKES': $('#wc3').val()
        }
        console.log('SAVING CODE...');
        setTimeout(() => { console.log(code); }, 2000);
        mod.modal('hide');
        setTimeout(() => { table.empty();} , 1000);
    });
} // UC02: Write Code
function comAct(){ // UC03: Commit Activity
    table.empty();
    but.show();
    tit.html('UC03: COMMIT ACTIVITY');
    table.append($("<p>Select the activity to commit, your name and then attach the file to fulfill it.</p>"));
    but.html('COMMIT');

    let e= ['Realize the commit.', 'Show the progress.','Talk to the lazy one.','Help the others with the quiz.'];
    var a= $("<select id='tasks' class='form-control'></select>");

    //     lan.forEach(function (r){ a.append($("<option></option>").html(r).attr('id',r).attr('name','language')) });
    //     table.append(a);
    //     table.append($("<tr scope='row' class='form-inline my-2'></tr>").append($("<label>Documentation: </label><input type='file' class='form-control-file ml-3 w-50' id='wc2' required>")));

    var tr= $("<tr scope='row' class='form-inline my-2'></tr>");
    tr.append($("<label class='col-sm-3'>ACTIVITY: </label>"));
    var sel= $("<select type='text' class='form-control col' id='wc1' required></select>");
    sel.append($("<option>1</option>"));
    sel.append($("<option>2</option>"));
    sel.append($("<option>3</option>"));
    sel.append($("<option>4</option>"));
    sel.append($("<option>5</option>"));
    sel.append($("<option>6</option>"));
    sel.append($("<option>7</option>"));
    tr.append(sel)
    table.append(tr);

    tr= $("<tr scope='row' class='form-inline my-2 text-right'></tr>");
    a= $("<select id='students' class='form-control col-lg'></select>");
    f= ['Jairo Andrés Cortés Roncancio.', 'Cristian Mejía Martínez.','María Paulina García Velásquez.','Luis Felipe Moreno Chamorro.'];
    f.forEach(function (r){ a.append($("<option></option>").html(r).attr('id',r).attr('name','student')) });
    tr.append($("<label class='col-sm-3 text-right'>STUDENT: </label>"))
    tr.append(a);
    table.append(tr);

    tr= $("<tr scope='row' class='form-inline my-2 text-right'></tr>");
    tr.append($("<label class='col-sm-3 text-right'>COMMIT: </label>"));
    tr.append($("<input id='commit' class='form-control-file col' type='file' required>"));
    table.append(tr);

    but.off();
    but.on('click', function(){
        var real= $( "#tasks option:selected").text();
        let a= $('#rt1').val();
        let b= $('#rt2').val();
        console.log('REALIZING TASK...\n');
        setTimeout(() => { console.log("The task "+real+" was made by submitting "+a+' and/or the file '+b); }, 2000);
        mod.modal('hide');
        setTimeout(() => { table.empty(); }, 1000);
    });
} // UC03: Commit Activity
function reaDoc(){ // UC04: Read Documentation
    table.empty();
    but.show();
    tit.html('UC04: READ DOCUMENTATION');
    //     lan.forEach(function (r){ a.append($("<option></option>").html(r).attr('id',r).attr('name','language')) });
    //     table.append(a);
    //     table.append($("<tr scope='row' class='form-inline my-2'></tr>").append($("<label>Documentation: </label><input type='file' class='form-control-file ml-3 w-50' id='wc2' required>")));

    var tr= $("<tr scope='row' class='form-inline my-2'></tr>");
    tr.append($("<label>CODE: </label>"));
    var sel= $("<select type='text' class='form-control col' id='code' required></select>");
    sel.append($("<option>1</option>"));
    sel.append($("<option>2</option>"));
    sel.append($("<option>3</option>"));
    sel.append($("<option>4</option>"));
    sel.append($("<option>5</option>"));
    sel.append($("<option>6</option>"));
    sel.append($("<option>7</option>"));
    tr.append(sel)
    table.append(tr);

    table.append($("<textarea id='area' class='form-control col' placeholder='Select a code and the documentation will appear here.'></textarea>"));

    but.html('DONE');
    but.off();
    but.on('click', function(){
        mod.modal('hide');
        setTimeout(() => { $("#modalDiag").attr("class", 'modal-dialog modal-dialog-centered');}, 1000);
        setTimeout(() => { table.empty(); }, 1000);
    });
} // UC04: Read Documentation
function extReq(){ // UC05: Extract Requirement
    table.empty();
    but.show();
    tit.html('UC05: EXTRACT REQUIREMENT');
    but.html('SAVE');
    table.append($("<caption style='caption-side: top; color: black;'>Select a system, then write a name for a new requirement, then push 'SAVE' in order to save it.</caption>"));
    //     lan.forEach(function (r){ a.append($("<option></option>").html(r).attr('id',r).attr('name','language')) });
    //     table.append(a);
    //     table.append($("<tr scope='row' class='form-inline my-2'></tr>").append($("<label>Documentation: </label><input type='file' class='form-control-file ml-3 w-50' id='wc2' required>")));

    var tr= $("<tr scope='row' class='form-inline my-2'></tr>");
    tr.append($("<label class='col-sm-3'>SYSTEM: </label>"));
    var sel= $("<select type='text' class='form-control col' id='code' required></select>");
    sel.append($("<option>1</option>"));
    sel.append($("<option>2</option>"));
    sel.append($("<option>3</option>"));
    sel.append($("<option>4</option>"));
    sel.append($("<option>5</option>"));
    sel.append($("<option>6</option>"));
    sel.append($("<option>7</option>"));
    tr.append(sel)
    table.append(tr);

    tr= $("<tr scope='row' class='form-inline my-2 text-right'></tr>");
    tr.append($("<label class='col-sm-3 text-right'>NAME: </label>"));
    tr.append($("<input id='name' class='form-control col' type='text' required>"));
    table.append(tr);

    but.off();
    but.click(function(){
        var tas= {'Name': $("#n1").val(), "Difficulty": $("#d1").val(), 'Type':$("#t1").val()};
        console.log('SAVING TASKS...');
        setTimeout(() => { console.log(tas); }, 2000);
        mod.modal('hide');
        table.empty();
    });
} // UC05: Extract Requirement
function extTas(){ // UC06: Extract Task
    table.empty();
    but.show();
    tit.html('UC06: EXTRACT TASK');
    but.html('SAVE');
    table.append($("<caption style='caption-side: top; color: black;'>Write the tasks attributes and then push 'SAVE' in order to save it.</caption>"));

    tr= $("<tr scope='row' class='form-inline my-2 text-right'></tr>");
    tr.append($("<label class='col-sm-3 text-right'>NAME: </label>"));
    tr.append($("<input id='name' class='form-control col' type='text' required>"));
    table.append(tr);

    tr= $("<tr scope='row' class='form-inline my-2 text-right'></tr>");
    tr.append($("<label class='col-sm-3 text-right'>DIFFICULTY: </label>"));
    tr.append($("<input id='difficulty' class='form-control col' type='text' required>"));
    table.append(tr);

    tr= $("<tr scope='row' class='form-inline my-2 text-right'></tr>");
    tr.append($("<label class='col-sm-3 text-right'>TYPE: </label>"));
    tr.append($("<input id='type' class='form-control col' type='text' required>"));
    table.append(tr);

    //     lan.forEach(function (r){ a.append($("<option></option>").html(r).attr('id',r).attr('name','language')) });
    //     table.append(a);
    //     table.append($("<tr scope='row' class='form-inline my-2'></tr>").append($("<label>Documentation: </label><input type='file' class='form-control-file ml-3 w-50' id='wc2' required>")));

    var tr= $("<tr scope='row' class='form-inline my-2'></tr>");
    tr.append($("<label class='col-sm-3'>REQUIREMENT: </label>"));
    var sel= $("<select type='text' class='form-control-file col-sm-2' id='wc1' required></select>");
    sel.append($("<option>1</option>"));
    sel.append($("<option>2</option>"));
    sel.append($("<option>3</option>"));
    sel.append($("<option>4</option>"));
    sel.append($("<option>5</option>"));
    sel.append($("<option>6</option>"));
    sel.append($("<option>7</option>"));
    tr.append(sel)
    table.append(tr);

    but.off();
    but.click(function(){
        var tas= {'Name': $("#n1").val(), "Difficulty": $("#d1").val(), 'Type':$("#t1").val()};
        console.log('SAVING TASKS...');
        setTimeout(() => { console.log(tas); }, 2000);
        mod.modal('hide');
        table.empty();
    });
} // UC06: Extract Task
function delTas(){ // UC07: Delegate Task

    table.empty();
    but.show();
    tit.html('UC07: DELEGATE TASK');
    but.html('DONE');

    var tr= $("<tr scope='row' class='form-inline my-2 text-right'></tr>");

    var a= $("<select id='tasks' class='form-control col-lg'></select>");
    let f=['Realize the commit.','Show the progress.','Talk to the lazy one.','Help the others with the quiz.','DOLOR.'];
    f.forEach(function (r){ a.append($("<option></option>").html(r).attr('id',r).attr('name','task')) });
    tr.append($("<label class='col-sm-3 text-right'>TASK: </label>"))
    tr.append(a);
    table.append(tr);

    tr= $("<tr scope='row' class='form-inline my-2 text-right'></tr>");
    a= $("<select id='students' class='form-control col-lg'></select>");
    f= ['Jairo Andrés Cortés Roncancio.', 'Cristian Mejía Martínez.','María Paulina García Velásquez.','Luis Felipe Moreno Chamorro.'];
    f.forEach(function (r){ a.append($("<option></option>").html(r).attr('id',r).attr('name','student')) });
    tr.append($("<label class='col-sm-3 text-right'>STUDENT: </label>"))
    tr.append(a);
    table.append(tr);

    but.off();
    but.on('click', function(){
        var deleg= $('input[name="checkbox"]:checked');
        var stu= $( "#students option:selected").text();
        if (deleg.length){
            var s='';
            deleg.each(function(){
                s+='\n -';
                e[$(this).val()].forEach(function (r){ s+=' '+r; }) });
            console.log("THE TASKS TO DELEGATE ARE: "+s+"\nThey are delegated to "+stu);
        }
        else console.log('THERE ARE NOT TASKS TO DELEGATE.')
        mod.modal('hide');
        setTimeout(() => {table.empty(); }, 2000);
    });
} // UC07: Delegate Task
function evaAct(){ // UC08: Evaluate Activity
    table.empty();
    but.show();
    tit.html('UC08: EVALUATE ACTIVITY');
    but.html('DONE');
    table.append($("<caption style='caption-side: top;'><h6>Fill in every field in the form in order to evaluate the student's activity. In each field you'll be given a numeric and a text field to write the grade and the description of each field. Press 'DONE' to calculate the grade and save it.</h6></caption>"));
    $("#modalDiag").addClass('modal-lg');

    var cap= $("<caption style='caption-side: top; color: black;'></caption>")
    var tr= $("<tr scope='row' class='form-inline my-2'></tr>");
    tr.append($("<label class='col-sm-3'>ACTIVITY: </label>"));
    var sel= $("<select type='text' class='form-control-file col-sm-2' id='wc1' required></select>");
    sel.append($("<option>1</option>"));
    sel.append($("<option>2</option>"));
    sel.append($("<option>3</option>"));
    sel.append($("<option>4</option>"));
    sel.append($("<option>5</option>"));
    sel.append($("<option>6</option>"));
    sel.append($("<option>7</option>"));
    tr.append(sel)
    cap.append(tr);
    table.append(cap);

    cap= $("<caption style='caption-side: top; color: black;'></caption>")
    tr= $("<tr scope='row' class='form-inline my-2 text-right'></tr>");
    a= $("<select id='students' class='form-control col-lg'></select>");
    f= ['Jairo Andrés Cortés Roncancio.', 'Cristian Mejía Martínez.','María Paulina García Velásquez.','Luis Felipe Moreno Chamorro.'];
    f.forEach(function (r){ a.append($("<option></option>").html(r).attr('id',r).attr('name','student')) });
    tr.append($("<label class='col-sm-3 text-right'>STUDENT: </label>"))
    tr.append(a);
    cap.append(tr);
    table.append(cap);

    table.append($("<a id='download' download='activity.rar'>DOWNLOAD ACTIVITY</a>").attr('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent())); // SE MUESTRA EL SUBMISSION DEL ESTUDIANTE

    table.append($("<tr><th class='col-sm-3'>RUBRIC</th><th class='col-sm-3'>PERCENTAGE</th><th class='col' style='min-width: 100px;'>GRADE</th></tr>"));
    var rub= ['Code fullness','Presentation','Progress report','Consistency','Functions'];
    var per= [0.5, 0.1, 0.1, 0.2, 0.1];
    for (let i in rub){
        tr=$("<tr scope='row'></tr>");
        tr.append($("<td class='col-sm-3'></td>").html(rub[i]));
        tr.append($("<td class='col-sm-3'></td>").html(per[i]));
        tr.append($("<input type='number' class='form-control col' style='min-width: 100px;' required>"));
        table.append(tr);
    }
    //

    but.off();
    but.click(function(){
        let a= (parseFloat($('#ea1g').val()) + parseFloat($('#ea2g').val()) + parseFloat($('#ea3g').val()) + parseFloat($('#ea4g').val()) + parseFloat($('#ea5g').val()))/5;
        let a1= $('#ea1').val();
        let a2= $('#ea2').val();
        let a3= $('#ea3').val();
        let a4= $('#ea4').val();
        let a5= $('#ea5').val();
        console.log('SAVING EVALUATION...');
        setTimeout(() => { alert("FINAL GRADE: "+a); console.log("Evaluation.\n\nFINAL GRADE: "+a+"\n\nCOMMENTS\n - Code: "+a1+"\n - Presentation: "+a2+"\n - Progress: "+a3+"\n - Consistency: "+a4+"\n - Functions: "+a5); }, 2000);
        mod.modal('hide');
        setTimeout(() => { $("#modalDiag").attr("class", 'modal-dialog modal-dialog-centered');}, 1000);
        setTimeout(() => { table.empty(); }, 1000);
    });
} // UC08: Evaluate Activity
function desRub(){ // UC09: Design Rubric
    table.empty();
    but.show();
    tit.html('UC09: DESIGN RUBRIC');
    but.html('SAVE');
    table.append($("<p>Write the criterion for the rubric of the activity, you can push the '+' button to add more criterion. Push 'SAVE' in order to save it/them.</p>"));

    var tr= $("<tr scope='row' class='form-inline my-2'></tr>");
    tr.append($("<label class='col-sm-3'>ACTIVITY: </label>"));
    var sel= $("<select type='text' class='form-control-file col-sm-2' id='wc1' required></select>");
    sel.append($("<option>1</option>"));
    sel.append($("<option>2</option>"));
    sel.append($("<option>3</option>"));
    sel.append($("<option>4</option>"));
    sel.append($("<option>5</option>"));
    sel.append($("<option>6</option>"));
    sel.append($("<option>7</option>"));
    tr.append(sel)
    table.append(tr);

    table.append($("<tr></tr>").append("<td class='pr-0' width='414.4px'><input id='dr' placeholder='Criterion' class='form-control pr-0' name='crit' required><input id='pr' placeholder='Percentage' class='form-control pr-0' type='number' name='perc'></td>"));
    table.append($("<caption class='m-0 p-0'><svg id='add' style='caption-side: bottom; color: #212529;' width=\"2.5em\" height=\"2.5em\" viewBox=\"0 0 16 16\" class=\"bi bi-file-plus-fill m-0 float-right\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z\"/></svg></caption>"))
    var i=1;
    $("#add").click(function () {
        i++;
        var t=$("<tr></tr>");
        t.append($("<td class='pr-0'></td>").append($("<input class='form-control' name='crit' placeholder='Criterion' required>").attr('id','dr'+i)).append($("<input class='form-control' type='number' name='perc' placeholder='Percentage'>").attr('id','pr'+i)));

        t.append($("<td class='py-auto px-0 m-0'></td>").append($("<svg width='38px' height='38px' viewBox=\"0 0 16 16\" class='bi bi-file-minus-fill' fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 7.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z\"/></svg>").attr('id','rem'+i).on('click', function(){this.parentElement.parentElement.remove(); i-=1})));
        table.append(t);
    });

    but.off();
    but.click(function(){
        var a=$("input[name ='crit']");
        var rubric=[];
        for(let i=0; i<a.length; i++) rubric.push(a[i].value);
        console.log('SAVING THE RUBRIC...');
        setTimeout(() => { console.log('Criterion: '+rubric)}, 2000);
        mod.modal('hide');
        setTimeout(() => { table.empty();} , 1000);
    });
} // UC09: Design Rubric
function evaSpr(){// UC10: Evaluate Sprint
    table.empty();
    but.show();
    tit.html('UC10: Evaluate Sprint');
    but.html('DONE');
    table.append($("<caption style='caption-side: top;'><h6>Fill in every field in the form in order to evaluate the student's sprint. In each field you'll be given a numeric and a text field to write the grade and the description of each field. Press 'DONE' to calculate the grade and save it.</h6></caption>"));
    $("#modalDiag").addClass('modal-lg');

    var tr= $("<tr scope='row' class='form-inline my-2 text-right'></tr>");
    var a= $("<select id='students' class='form-control col-lg'></select>");
    var f= ['1. FIRST SPRINT.', '2. SECOND.'];
    f.forEach(function (r){ a.append($("<option></option>").html(r).attr('id',r).attr('name','sprint')) });
    tr.append($("<label class='col-sm-3 text-right'>SPRINT: </label>"))
    tr.append(a);
    table.append(tr);

    table.append($("<tr><th class='col-sm-3'>RUBRIC</th><th class='col-sm-3'>PERCENTAGE</th><th class='col' style='min-width: 100px;'>GRADE</th></tr>"));
    var rub= ['Code fullness','Presentation','Progress report','Consistency','Functions'];
    var per= [0.5, 0.1, 0.1, 0.2, 0.1];
    for (let i in rub){
        tr=$("<tr scope='row'></tr>");
        tr.append($("<td class='col-sm-3'></td>").html(rub[i]));
        tr.append($("<td class='col-sm-3'></td>").html(per[i]));
        tr.append($("<input type='number' class='form-control col' style='min-width: 100px;' required>"));
        table.append(tr);
    }
    //

    but.off();
    but.click(function(){
        let a= (parseFloat($('#ea1g').val()) + parseFloat($('#ea2g').val()) + parseFloat($('#ea3g').val()) + parseFloat($('#ea4g').val()) + parseFloat($('#ea5g').val()))/5;
        let a1= $('#ea1').val();
        let a2= $('#ea2').val();
        let a3= $('#ea3').val();
        let a4= $('#ea4').val();
        let a5= $('#ea5').val();
        console.log('SAVING EVALUATION...');
        setTimeout(() => { alert("FINAL GRADE: "+a); console.log("Evaluation.\n\nFINAL GRADE: "+a+"\n\nCOMMENTS\n - Code: "+a1+"\n - Presentation: "+a2+"\n - Progress: "+a3+"\n - Consistency: "+a4+"\n - Functions: "+a5); }, 2000);
        mod.modal('hide');
        setTimeout(() => { $("#modalDiag").attr("class", 'modal-dialog modal-dialog-centered');}, 1000);
        setTimeout(() => { table.empty(); }, 1000);
    });
} // UC10: Evaluate Sprint
function proFee(){ // UC11: Provide Feedback
    table.empty();
    but.show();
    tit.html('UC11: Provide Feedback');
    but.html('SAVE');
    table.append($("<p>Write the feedback and then push 'SAVE' in order to send it.</p>"));

    tr= $("<tr scope='row' class='form-inline my-2 text-right'></tr>");
    a= $("<select id='students' class='form-control col-lg'></select>");
    f= ['SprintRun1.', 'Cristian Mejía Martínez.','María Paulina García Velásquez.','Luis Felipe Moreno Chamorro.'];
    f.forEach(function (r){ a.append($("<option></option>").html(r).attr('id',r).attr('name','student')) });
    tr.append($("<label class='col-sm-3 text-right'>SPRINT: </label>"))
    tr.append(a);
    table.append(tr);

    table.append($("<input id='pf1' class='form-control' placeholder='Author' required>"));
    table.append($("<textarea id='pf2' class='form-control' placeholder='Commentary' required></textarea>"));
    but.off();
    but.click(function(){
        let feedback= {'Author':$('#pf1').val(), 'Commentary':$('#pf2').val()}
        console.log('SAVING THE FEEDBACK...');
        setTimeout(() => { console.log("Feedback:\n\n- Author: "+a+"\n- Feedback: "+b); }, 2000);
        mod.modal('hide');
        table.empty();
    });
} // UC11: Provide Feedback
function desAct(){ // UC12: Design Activity
    table.empty();
    but.show();
    tit.html('UC12: Design Activity');
    but.html('SAVE');
    let e=['id','name','time_range','theme','type','delivery_date','percentage'];
    let type=['number','text','text','text','text','date','number'];
    showForm('Complete the form in order to design the activity.', e, 1, type);
    but.off();
    but.click(function(){
        var activity={};
        e.forEach(function(r){
            activity[r]=document.getElementById(r).value;
        });
        console.log('SAVING THE ACTIVITY...');
        setTimeout(() => { console.log(activity); }, 2000);
        mod.modal('hide');
        table.empty();
    });
} // UC12: Design Activity
function selPro(){ // UC13: Select Project
    table.empty();
    but.show();
    tit.html('UC13: Select Project');
    but.html('SELECT');
    table.append($("<caption style='caption-side: top;'><h6>Select your name and then which project you select.</h6></caption>"));

    var tr= $("<tr scope='row' class='form-inline my-2'></tr>");
    tr.append($("<label class='col-sm-3'>PROJECT: </label>"));
    var sel= $("<select type='text' class='form-control-file col-sm-2' id='wc1' required></select>");
    sel.append($("<option>1</option>"));
    sel.append($("<option>2</option>"));
    sel.append($("<option>3</option>"));
    sel.append($("<option>4</option>"));
    sel.append($("<option>5</option>"));
    sel.append($("<option>6</option>"));
    sel.append($("<option>7</option>"));
    tr.append(sel)
    table.append(tr);

    tr= $("<tr scope='row' class='form-inline my-2 text-right'></tr>");
    a= $("<select id='students' class='form-control col-lg'></select>");
    f= ['Jairo Andrés Cortés Roncancio.', 'Cristian Mejía Martínez.','María Paulina García Velásquez.','Luis Felipe Moreno Chamorro.'];
    f.forEach(function (r){ a.append($("<option></option>").html(r).attr('id',r).attr('name','student')) });
    tr.append($("<label class='col-sm-3 text-right'>STUDENT: </label>"))
    tr.append(a);
    table.append(tr);

    but.off();
    but.on('click', function(){
        var sel= $('input[name="radio"]:checked');
        if (sel.length){
            console.log("THE PROJECT YOU SELECTED IS: ");
            sel.each(function(){
                var s='';
                e[$(this).val()].forEach(function (r){ s+=''+r+' '; })
                console.log(s);
            });
            mod.modal('hide');
            setTimeout(() => {table.empty(); }, 2000);
        }
        else console.log("THERE HASN'T BEEN A SELECTED PROJECT YET.");
    });
} // UC13: Select Project
function givTem(){ // UC14: Give Template
    table.empty();
    tit.html('UC14: Give Template');
    but.html('GIVE');
    table.append($("<p>Attach a file in order to give it to the students in the course.</p>"));

    //     lan.forEach(function (r){ a.append($("<option></option>").html(r).attr('id',r).attr('name','language')) });
    //     table.append(a);
    //     table.append($("<tr scope='row' class='form-inline my-2'></tr>").append($("<label>Documentation: </label><input type='file' class='form-control-file ml-3 w-50' id='wc2' required>")));

    var tr= $("<tr scope='row' class='form-inline my-2'></tr>");
    tr.append($("<label class='col-3'>COURSE: </label>"));
    var sel= $("<select type='text' class='form-control col-4' id='course' required></select>");
    sel.append($("<option>1</option>"));
    sel.append($("<option>2</option>"));
    sel.append($("<option>3</option>"));
    sel.append($("<option>4</option>"));
    sel.append($("<option>5</option>"));
    sel.append($("<option>6</option>"));
    sel.append($("<option>7</option>"));
    tr.append(sel);
    table.append(tr);

    tr= $("<tr scope='row' class='form-inline my-2 text-right'></tr>");
    tr.append($("<label class='col-sm-3 text-right'>FILE: </label>"));
    tr.append($("<input id='doc' class='form-control-file col' type='file' required>"));
    table.append(tr);

    //table.append($("<textarea id='wc3' class='form-control my-2' placeholder='MISTAKES' required></textarea>"));
    but.off();
    but.click(function(){
        let code= {
            'CODE': $('#wc1').val(),
            'LANGUAGE': $("#languages option:selected").text(),
            'DOCUMENTATION': $('#wc2').val(),
            //'MISTAKES': $('#wc3').val()
        }
        console.log('SAVING CODE...');
        setTimeout(() => { console.log(code); }, 2000);
        mod.modal('hide');
        setTimeout(() => { table.empty();} , 1000);
    });
} // UC14: Give Template
function reaTas(){ // UC15: Realize Task
    table.empty();
    but.show();
    tit.html('UC15: Realize Task');
    table.append($("<p>Select your name, the task to realize and then write or attach the file to fulfill the task.</p>"));

    tr= $("<tr scope='row' class='form-inline my-2 text-right'></tr>");
    a= $("<select id='students' class='form-control col-lg'></select>");
    f= ['Jairo Andrés Cortés Roncancio.', 'Cristian Mejía Martínez.','María Paulina García Velásquez.','Luis Felipe Moreno Chamorro.'];
    f.forEach(function (r){ a.append($("<option></option>").html(r).attr('id',r).attr('name','student')) });
    tr.append($("<label class='col-sm-3 text-right'>STUDENT: </label>"))
    tr.append(a);
    table.append(tr);

    but.html('DONE');
    let e= ['Realize the commit.', 'Show the progress.','Talk to the lazy one.','Help the others with the quiz.'];
    var a= $("<select id='tasks' class='form-control'></select>");
    e.forEach(function (r){ a.append($("<option></option>").html(r).attr('id',r).attr('name','task')) });

    var tr= $("<tr scope='row' class='form-inline my-2 text-right'></tr>");
    tr.append($("<label class='col-sm-3 text-right'>TASK: </label>"));
    tr.append(a);
    table.append(tr);

    tr= $("<tr scope='row' class='form-inline my-2 text-right'></tr>");
    tr.append($("<label class='col-sm-3 text-right'>FILE: </label>"));
    tr.append($("<input id='doc' class='form-control-file col' type='file' required>"));
    table.append(tr);

    but.off();
    but.on('click', function(){
        var real= $( "#tasks option:selected").text();
        let a= $('#rt1').val();
        let b= $('#rt2').val();
        console.log('REALIZING TASK...\n');
        setTimeout(() => { console.log("The task "+real+" was made by submitting "+a+' and/or the file '+b); }, 2000);
        mod.modal('hide');
        setTimeout(() => { table.empty(); }, 1000);
    });
} // UC15: Realize Task
function prePro(){ // UC16: Present Project
    table.empty();
    but.show();
    tit.html('UC16: Present Project');
    table.append($("<p>In order to present the project attach a video in which you'll be presenting it. </p>"));

    var tr= $("<tr scope='row' class='form-inline my-2 text-right'></tr>");
    tr.append($("<label class='col-sm-3 text-right'>PRESENTATION: </label>"))
    tr.append($("<input id='pp2' type='file' class='form-control-file col'>"));
    table.append(tr);

    tr= $("<tr scope='row' class='form-inline my-2 text-right'></tr>");
    var a= $("<select id='students' class='form-control col-lg'></select>");
    var f= ['Jairo Andrés Cortés Roncancio.', 'Cristian Mejía Martínez.','María Paulina García Velásquez.','Luis Felipe Moreno Chamorro.'];
    f.forEach(function (r){ a.append($("<option></option>").html(r).attr('id',r).attr('name','student')) });
    tr.append($("<label class='col-sm-3 text-right'>STUDENT: </label>"))
    tr.append(a);
    table.append(tr);

    but.html('PRESENT');
    but.off();
    but.on('click', function(){
        let a= $('#pp1').val();
        let b= $('#pp2').val();
        console.log('PRESENTING PROJECT...\n');
        setTimeout(() => { console.log(a+' '+b); }, 2000);
        mod.modal('hide');
        setTimeout(() => { table.empty(); }, 1000);
    });
} // UC16: Present Project
function solInq(){ // UC17: Solve Inquiries
    table.empty();
    but.show();
    tit.html('UC17: Solve Inquiries');
    but.html('DONE');
    let e=["I can't seem to find the repository link, could you send it?","My code has this error: 'Main.java:9: error: cannot find symbol' but at that line there's only a comment...","My pc was stolen, I would appreciate if you could give me more time to send the activity.","How do I change the color of the code?","Am I still enrolled in this course? 'cause I wanted out."];
    showForm("Write in the textarea the solution to each inquiry and then press 'DONE' to save them in console.", e, 2);
    but.off();
    but.click(function(){
        var a=' INQUIRIES ';
        e.forEach(function(r){ a+= '\n'+r+': '+document.getElementById(r).value });
        console.log('SAVING THE ACTIVITY...');
        setTimeout(() => { console.log(a); }, 2000);
        mod.modal('hide');
        table.empty();
    });
} // UC17: Solve Inquiries
function supTea(){ // UC18: Supervise Team
    table.empty();
    but.show();
    tit.html('UC18: Supervise Team');
    but.html('DONE');
    var cap= $("<caption style='caption-side: top; color: black;'></caption>")
    var tr= $("<tr scope='row' class='form-inline my-2 text-right'></tr>");
    var a= $("<select id='students' class='form-control col-lg'></select>");
    var f= ['Team1', 'Team2'];
    f.forEach(function (r){ a.append($("<option></option>").html(r).attr('id',r).attr('name','sprint')) });
    tr.append($("<label class='col-sm-3 text-right'>TEAM: </label>"));
    tr.append(a);
    cap.append(tr);
    table.append(cap);

    let e=[['NAME','DIFFICULTY','TYPE'],['Realize the commit.','Manageable.','Critical.'],['Show the progress.','Manageable.','Standard.'],['Talk to the lazy one.','Manageable.','Standard.'],['Help the others with the quiz.','Manageable.','Critical.'],['DOLOR.','Unmanageable.','Critical.']];
    showTable("Supervise the team's tasks.", e, 'none');

    but.off();
    but.on('click', function(){
        console.log('Closing table...');
        mod.modal('hide');
        setTimeout(() => {table.empty(); }, 2000);
    });
} // UC18: Supervise Team
function cheStL(){ // UC19: Check Student_List
    table.empty();
    but.show();
    $("#modalDiag").addClass('modal-xl modal-dialog-scrollable');

    var cap= $("<caption style='caption-side: top; color: black;'></caption>")
    var tr= $("<tr scope='row' class='form-inline my-2'></tr>");
    tr.append($("<label class='col-sm-3'>COURSE: </label>"));
    var sel= $("<select type='text' class='form-control-file col-sm-2' id='wc1' required></select>");
    sel.append($("<option>1</option>"));
    sel.append($("<option>2</option>"));
    sel.append($("<option>3</option>"));
    sel.append($("<option>4</option>"));
    sel.append($("<option>5</option>"));
    sel.append($("<option>6</option>"));
    sel.append($("<option>7</option>"));
    tr.append(sel)
    cap.append(tr);
    table.append(cap);

    tit.html('UC19: Check Student_List');
    but.html('DONE');
    let e=[['ID','NAME','EMAIL', 'SEMESTER', 'EXPERIENCE','KNOWLEDGE'],
        [1,'Maria Paulina', 'mapa@unal.edu.co',4, 5, 8],
        [2,'Jairo', 'jaiRon@unal.edu.co',3, 2, 2],
        [3,'Cristo', 'crimejia@unal.edu.co', 4, 5, 8],
        [4,'Chamo', 'cupcakesong@eeeee.ar',4,10,12]];
    showTable("", e, 'none');
    but.off();
    but.on('click', function(){
        console.log('Closing table...');
        mod.modal('hide');
        setTimeout(() => {table.empty(); }, 2000);
    });
} // UC19: Check Student_List
function crePro(){// UC20: Create Project
    table.empty();
    but.show();
    tit.html('UC20: Create Project');
    but.html('SAVE');

    var tr= $("<tr scope='row' class='form-inline my-2 text-right'></tr>");
    tr.append($("<label class='col-sm-3 text-right'>NAME: </label>"));
    tr.append($("<input id='name' class='form-control col' type='text' required>"));
    table.append(tr);

    tr= $("<tr scope='row' class='form-inline my-2 text-right'></tr>");
    tr.append($("<label class='col-sm-3 text-right'>DEADLINE: </label>"));
    tr.append($("<input id='deadline' class='form-control  col' type='date' required>"));
    table.append(tr);

    var tr= $("<tr scope='row' class='form-inline my-2'></tr>");
    tr.append($("<label class='col-sm-3'>COURSE: </label>"));
    var sel= $("<select type='text' class='form-control col' id='wc1' required></select>");
    sel.append($("<option>1</option>"));
    sel.append($("<option>2</option>"));
    sel.append($("<option>3</option>"));
    tr.append(sel)
    table.append(tr);

    but.off();
    but.click(function(){
        var activity={};
        e.forEach(function(r){
            activity[r]=document.getElementById(r).value;
        });
        console.log('SAVING THE ACTIVITY...');
        setTimeout(() => { console.log(activity); }, 2000);
        mod.modal('hide');
        table.empty();
    });
} // UC20: Create Project
function cheTas(){// UC21: Check Task
    table.empty();
    but.show();
    $("#modalDiag").addClass('modal-xl modal-dialog-scrollable');
    tit.html('UC21: Check Task');
    but.html('DONE');

    var cap= $("<caption style='caption-side: top; color: black;'></caption>")
    var tr= $("<tr scope='row' class='form-inline my-2'></tr>");
    tr.append($("<label class='col-sm-3'>TEAM: </label>"));
    var sel= $("<select type='text' class='form-control-file col-sm-2' id='wc1' required></select>");
    sel.append($("<option>1</option>"));
    sel.append($("<option>2</option>"));
    sel.append($("<option>3</option>"));
    sel.append($("<option>4</option>"));
    sel.append($("<option>5</option>"));
    sel.append($("<option>6</option>"));
    sel.append($("<option>7</option>"));
    tr.append(sel)
    cap.append(tr);
    table.append(cap);
    let e=[['NAME','DIFFICULTY','TYPE','STATE','STUDENT'],
        ['Realize the commit.','Easy','standard','finalized','Maria Paulina'],
        ['Show the progress.','Easy','standard','finalized','Jairo'],
        ['Talk to the lazy one.','Medium','critical','not finalized','Cristo'],
        ['Help the others with the quiz.','Hard', 'critical', 'not finalized','none']]
    showTable("Teams tasks", e, 'none');
    but.off();
    but.on('click', function(){
        console.log('Closing table...');
        mod.modal('hide');
        setTimeout(() => {table.empty(); }, 2000);
    });
} // UC21: Check Task
function makInq(){// UC22: Make Inquiry
    table.empty();
    but.show();
    tit.html('UC22: Make Inquiry');
    but.html('SAVE');
    table.append($("<p>Choose your name, write your feedback and then push 'SAVE' in order to send it.</p>"));

    var tr= $("<tr scope='row' class='form-inline my-2 text-right'></tr>");
    a= $("<select id='students' class='form-control col-lg'></select>");
    f= ['Jairo Andrés.', 'Cristian Mejía Martínez.','María Paulina García Velásquez.','Luis Felipe Moreno Chamorro.'];
    f.forEach(function (r){ a.append($("<option></option>").html(r).attr('id',r).attr('name','student')) });
    tr.append($("<label class='col-sm-3 text-right'>NAME: </label>"))
    tr.append(a);
    table.append(tr);

    table.append($("<textarea id='pf2' class='form-control' placeholder='Description' required></textarea>"));
    but.off();
    but.click(function(){
        let feedback= {'Author':$('#pf1').val(), 'Commentary':$('#pf2').val()}
        console.log('SAVING THE FEEDBACK...');
        setTimeout(() => { console.log("Feedback:\n\n- Author: "+a+"\n- Feedback: "+b); }, 2000);
        mod.modal('hide');
        table.empty();
    });
} // UC22: Make Inquiry
function desCou(){// UC23: Design Course
    table.empty();
    but.show();
    tit.html('UC23: Design Course');
    but.html('SAVE');

    var cap= $("<caption style='caption-side: top; color: black;'></caption>")
    var tr= $("<tr scope='row' class='form-inline my-2'></tr>");
    tr.append($("<label class='col-sm-3'>ACTIVITY: </label>"));
    var sel= $("<select type='text' class='form-control-file col-sm-2' id='wc1' required></select>");
    sel.append($("<option>Carlos Mario</option>"));
    sel.append($("<option>2</option>"));
    sel.append($("<option>3</option>"));
    sel.append($("<option>4</option>"));
    sel.append($("<option>5</option>"));
    sel.append($("<option>6</option>"));
    sel.append($("<option>7</option>"));
    tr.append(sel)
    cap.append(tr);
    table.append(cap);

    let e=['id','name','start_date','total_activities'];
    let type=['number','text','date','number'];
    showForm('Complete the form in order to design the course.', e, 1, type);
    but.off();
    but.click(function(){
        var activity={};
        e.forEach(function(r){
            activity[r]=document.getElementById(r).value;
        });
        console.log('SAVING THE ACTIVITY...');
        setTimeout(() => { console.log(activity); }, 2000);
        mod.modal('hide');
        table.empty();
    });
} // UC23: Design Course
function vieEva(){// UC24: Views Evaluation
    table.empty();
    but.show();
    tit.html('UC24: Views Evaluation');
    but.html('DONE');
    table.append($("<p>Select your name and the activity to see the evaluation.</p>"));
    $("#modalDiag").addClass('modal-xl modal-dialog-scrollable');

    var tr= $("<tr scope='row' class='form-inline my-2'></tr>");
    tr.append($("<label class='col-sm-3'>ACTIVITY: </label>"));
    var sel= $("<select type='text' class='form-control-file col-sm-2' id='wc1' required></select>");
    sel.append($("<option>1</option>"));
    sel.append($("<option>2</option>"));
    sel.append($("<option>3</option>"));
    sel.append($("<option>4</option>"));
    sel.append($("<option>5</option>"));
    sel.append($("<option>6</option>"));
    sel.append($("<option>7</option>"));
    tr.append(sel)
    table.append(tr);

    tr= $("<tr scope='row' class='form-inline my-2 text-right'></tr>");
    a= $("<select id='students' class='form-control col-lg'></select>");
    f= ['Jairo Andrés Cortés Roncancio.', 'Cristian Mejía Martínez.','María Paulina García Velásquez.','Luis Felipe Moreno Chamorro.'];
    f.forEach(function (r){ a.append($("<option></option>").html(r).attr('id',r).attr('name','student')) });
    tr.append($("<label class='col-sm-3 text-right'>STUDENT: </label>"))
    tr.append(a);
    table.append(tr);

    table.append($("<tr>EVALUATION</tr>"))
    table.append($("<tr><th class='col-sm-3'>RUBRIC</th><th class='col-sm-3'>PERCENTAGE</th><th class='col' style='min-width: 100px;'>GRADE</th></tr>"));
    var rub= ['Code fullness','Presentation','Progress report','Consistency','Functions'];
    var per= [0.5, 0.1, 0.1, 0.2, 0.1];
    var grad= [5, 3, 2, 4, 3, 5];
    for (let i in rub){
        tr=$("<tr scope='row'></tr>");
        tr.append($("<td class='col-sm-3'></td>").html(rub[i]));
        tr.append($("<td class='col-sm-3'></td>").html(per[i]));
        tr.append($("<td class='col-sm-3'></td>").html(grad[i]));
        table.append(tr);
    }
    var total= 4.3;
    table.append($("<tr scope='row' class='form-inline my-2 text-right'></tr>").html('Total: '+total));
    var feed= "Nice job!"
    table.append($("<tr scope='row' class='form-inline my-2 text-right'></tr>").html('Feedback: '+feed));
} // UC24: Views Evaluation
function vieTem(){// UC25: View Template
    table.empty();
    but.show();
    tit.html('UC25: View Template');
    //     lan.forEach(function (r){ a.append($("<option></option>").html(r).attr('id',r).attr('name','language')) });
    //     table.append(a);
    //     table.append($("<tr scope='row' class='form-inline my-2'></tr>").append($("<label>Documentation: </label><input type='file' class='form-control-file ml-3 w-50' id='wc2' required>")));

    var tr= $("<tr scope='row' class='form-inline my-2'></tr>");
    tr.append($("<label>COURSE: </label>"));
    var sel= $("<select type='text' class='form-control col' id='code' required></select>");
    sel.append($("<option>1</option>"));
    sel.append($("<option>2</option>"));
    sel.append($("<option>3</option>"));
    sel.append($("<option>4</option>"));
    sel.append($("<option>5</option>"));
    sel.append($("<option>6</option>"));
    sel.append($("<option>7</option>"));
    tr.append(sel)
    table.append(tr);

    table.append($("<textarea id='area' class='form-control col' placeholder='Select a course and the template will appear here.'></textarea>"));

    but.html('DONE');
    but.off();
    but.on('click', function(){
        mod.modal('hide');
        setTimeout(() => { $("#modalDiag").attr("class", 'modal-dialog modal-dialog-centered');}, 1000);
        setTimeout(() => { table.empty(); }, 1000);
    });
} // UC25: View Template

// KEEP PERFORMANCE INDICATORS //
function getCourseaverage() { // KPI-1. Knowledge increment
    table.empty();
    but.show();
    tit.html('KPI-1. Knowledge increment');
    but.html('Get courseaverage');
    table.append($("<p>Press '+' to add another student and write the grade of each one. Press 'Get Grade' to calculate the courseaverage.</p>"));
    table.append($("<p>Formula: sum (grade) / total students</p>"));
    table.append($("<tr></tr>").append("<td class='pr-0' width='414.4px'><input id='gr1' placeholder='Grade' class='form-control pr-0' name='grad' type='number' required></td><td width='14.4px' height='38.2px'></td>"));
    table.append($("<caption class='m-0 p-0'><svg id='add' style='caption-side: bottom; color: #212529;' width=\"2.5em\" height=\"2.5em\" viewBox=\"0 0 16 16\" class=\"bi bi-file-plus-fill m-0 float-right\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z\"/></svg></caption>"))
    var i=1;
    $("#add").click(function () {
        i++;
        var t=$("<tr></tr>");
        t.append($("<td class='pr-0'></td>").append($("<input class='form-control' name='grad' type='number' required>").attr('id','gr'+i).attr('placeholder', 'Grade')));
        t.append($("<td class='py-auto px-0 m-0'></td>").append($("<svg name='rem' width='38px' height='38px' viewBox=\"0 0 16 16\" class='bi bi-file-minus-fill' fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 7.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z\"/></svg>").attr('id','rem'+i).on('click', function(){this.parentElement.parentElement.remove(); i-=1})));
        table.append(t);
    });
    but.off();
    but.click(function(){ // this will be the future getGrade(), the outer is just design.
        let a=$("input[name ='grad']");
        var courseaverage=0;
        let l=a.length;
        for(let i=0; i<l; i++) courseaverage+=(a[i].value/l);
        console.log('courseaverage: '+number_format(courseaverage, 2));
        mod.modal('hide');
        setTimeout(() => { table.empty();} , 1000);
        return courseaverage;
    });
}               // KPI-1 - Knowledge increase
function getActivityPerformed(){ // KPI-2. Skill increment
    table.empty();
    but.show();
    tit.html('KPI-2. Skill increment');
    but.html('Get ActivityPerformed');
    table.append($("<p>Write the number of completed activities and the total of activities then push 'Get ActivityPerformed' to calculate activityPerformed.</p>"));
    table.append($("<p>Formula: (completed activities / total activities) * 100</p>"));
    table.append($("<input id='ap1' class='form-control' placeholder='completed activities' type='number' required>"));
    table.append($("<input id='ap2' class='form-control' placeholder='total activities' type='number' required>"));
    but.off();
    but.click(function(){
        let activityPerformed= ($('#ap1').val()/$('#ap2').val()) * 100;
        console.log('ActivityPerformed: '+number_format(activityPerformed, 2));
        mod.modal('hide');
        setTimeout(() => { table.empty();} , 1000);
        return activityPerformed;
    });
}    // KPI-2 - Skills increase
function getAverage(){ // KPI-3 - Grade´s history availability
    table.empty();
    but.show();
    tit.html('KP-Grade´s history availability');
    but.html('Get average');
    table.append($("<p>Press '+' to add another student and write the grade of each one. Press 'Get MajorAdvance' to calculate majorAdvance.</p>"));
    table.append($("<p>Formula: sum (student grade) / total students</p>"));
    table.append($("<tr></tr>").append("<td class='pr-0' width='414.4px'><input id='gr1' placeholder='Grade' class='form-control pr-0' name='grad' type='number' required></td><td width='14.4px' height='38.2px'></td>"));
    table.append($("<caption class='m-0 p-0'><svg id='add' style='caption-side: bottom; color: #212529;' width=\"2.5em\" height=\"2.5em\" viewBox=\"0 0 16 16\" class=\"bi bi-file-plus-fill m-0 float-right\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z\"/></svg></caption>"))
    var i=1;
    $("#add").click(function () {
        i++;
        var t=$("<tr></tr>");
        t.append($("<td class='pr-0'></td>").append($("<input class='form-control' name='grad' type='number' required>").attr('id','gr'+i).attr('placeholder', 'Grade')));
        t.append($("<td class='py-auto px-0 m-0'></td>").append($("<svg name='rem' width='38px' height='38px' viewBox=\"0 0 16 16\" class='bi bi-file-minus-fill' fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 7.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z\"/></svg>").attr('id','rem'+i).on('click', function(){this.parentElement.parentElement.remove(); i-=1})));
        table.append(t);
    });
    but.off();
    but.click(function(){ // this will be the future getMajorAdvance(), the outer is just design.
        let a=$("input[name ='grad']");
        var average=0;
        let l=a.length;
        for(let i=0; i<l; i++) average+=(a[i].value/l);
        console.log('average: '+number_format(average, 2));
        mod.modal('hide');
        setTimeout(() => { table.empty();} , 1000);
        return average;
    });
}         // KPI-3 - Student’s grades availability
function getCourseprogress(){ // KPI-4. Course progress
    table.empty();
    but.show();
    tit.html('KPI-4. Course progress');
    but.html('Get courseprogress');
    table.append($("<p>Write the number of finished activities and the total of activities then push 'Get ActivityAvailability' to calculate activityAvailability.</p>"));
    table.append($("<p>Formula: finished activities / total_activities </p>"));
    table.append($("<input id='a1' class='form-control' placeholder='finished activities' type='number' required>"));
    table.append($("<input id='a2' class='form-control' placeholder='total activities' type='number' required>"));
    but.off();
    but.click(function(){
        let courseprogress= $('#a1').val()/$('#a2').val();
        console.log('ActivityAvailability: '+number_format(courseprogress, 2));
        mod.modal('hide');
        setTimeout(() => { table.empty();} , 1000);
        return courseprogress;
    });
} // KPI-4 - Activities availability
function getDeadline(){ // KPI-5 - Project's deadline control
    table.empty();
    but.show();
    tit.html("KPI-5 - Project's deadline control");
    but.html('Get Deadline');
    table.append($("<p>Write the delivery activity (the due date) and the delivery date (when the team commits the activity) then push 'Get Deadline' to calculate deadline.</p>"));
    table.append($("<p>Formula: delivery_activity - delivery_date</p>"));
    table.append($("<label>delivery activity</label><input id='a1' class='form-control' placeholder='delivery activity' type='date' required>"));
    table.append($("<label>delivery date</label><input id='a2' class='form-control' placeholder='delivery date' type='date' required>"));
    but.off();
    but.click(function(){
        let deadline= new Date($('#a1').val()) - new Date($('#a2').val());
        console.log('Deadline: '+deadline);
        mod.modal('hide');
        setTimeout(() => { table.empty();} , 1000);
        return deadline;
    });
}             // KPI-5 - Project's deadline control
function getSprintsPerformed(){ // KPI-6. Course participation
    table.empty();
    but.show();
    tit.html('KPI-6. Course participation');
    but.html('Get SprintsPerformed');
    table.append($("<p>Write the number of commits and the total of sprints then push 'Get SprintsPerformed' to calculate sprintsPerformed.</p>"));
    table.append($("<p>Formula: (commits number / total sprint)*100</p>"));
    table.append($("<input id='a1' class='form-control' placeholder='commits number' type='number' required>"));
    table.append($("<input id='a2' class='form-control' placeholder='total sprints' type='number' required>"));
    but.off();
    but.click(function(){
        let sprintsPerformed= ($('#a1').val()/$('#a2').val()) * 100;
        console.log('SprintsPerformed: '+number_format(sprintsPerformed, 2));
        mod.modal('hide');
        setTimeout(() => { table.empty();} , 1000);
        return sprintsPerformed;
    });
}     // KPI-6 - Projects delivery
function getTeamSize(){ // KPI-7 - Team management
    table.empty();
    but.show();
    tit.html('KPI-7 - Team management');
    but.html('Get TeamSize');
    table.append($("<p>Write the total students and expected students then push 'Get TeamSize' to calculate teamSize.</p>"));
    table.append($("<p>Formula: total students - expected students</p>"));
    table.append($("<input id='a1' class='form-control' placeholder='total students' type='number' required>"));
    table.append($("<input id='a2' class='form-control' placeholder='expected students' type='number' required>"));
    but.off();
    but.click(function(){
        let teamSize= $('#a1').val() - $('#a2').val();
        console.log('TeamSize: '+teamSize);
        mod.modal('hide');
        setTimeout(() => { table.empty();} , 1000);
        return teamSize;
    });
}             // KPI-7 - Team management

// DATABASE 27
// objetos= [student, requirement, system, task, code, documentation, project, inquiry, team, tuition, industry_representative, major, university, teacher, evaluation, template, student_list, course, monitor, scrum_model, sprint, feedback, activity, rubric]

$(document).ready( loadData() );
function loadData(){
    // checks if each object is in database, if not it creates it.
    if (! localStorage.student) localStorage.setItem('student',JSON.stringify([]));
    if (! localStorage.requirement) localStorage.setItem('requirement',JSON.stringify([]));
    if (! localStorage.system) localStorage.setItem('system',JSON.stringify([]));
    if (! localStorage.task) localStorage.setItem('task',JSON.stringify([]));
    if (! localStorage.code) localStorage.setItem('code',JSON.stringify([]));
    if (! localStorage.documentation) localStorage.setItem('documentation',JSON.stringify([]));
    if (! localStorage.project) localStorage.setItem('project',JSON.stringify([]));
    if (! localStorage.inquiry) localStorage.setItem('inquiry',JSON.stringify([]));
    if (! localStorage.team) localStorage.setItem('team',JSON.stringify([]));
    if (! localStorage.tuition) localStorage.setItem('tuition',JSON.stringify([]));
    if (! localStorage.industry_representative) localStorage.setItem('industry_representative',JSON.stringify([]));
    if (! localStorage.major) localStorage.setItem('major',JSON.stringify([]));
    if (! localStorage.university) localStorage.setItem('university',JSON.stringify([]));
    if (! localStorage.teacher) localStorage.setItem('teacher',JSON.stringify([]));
    if (! localStorage.evaluation) localStorage.setItem('evaluation',JSON.stringify([]));
    if (! localStorage.template) localStorage.setItem('template',JSON.stringify([]));
    if (! localStorage.student_list) localStorage.setItem('student_list',JSON.stringify([]));
    if (! localStorage.course) localStorage.setItem('course',JSON.stringify([]));
    if (! localStorage.monitor) localStorage.setItem('monitor',JSON.stringify([]));
    if (! localStorage.scrum_model) localStorage.setItem('scrum_model',JSON.stringify([]));
    if (! localStorage.sprint) localStorage.setItem('sprint',JSON.stringify([]));
    if (! localStorage.feedback) localStorage.setItem('feedback',JSON.stringify([]));
    if (! localStorage.activity) localStorage.setItem('activity',JSON.stringify([]));
    if (! localStorage.rubric) localStorage.setItem('rubric',JSON.stringify([]));
}

// HARD-RESET
function resetValues(){ localStorage.clear(); };

// OOP - CRUD
class Student{
    constructor(id, name, address, email, cellphone, semester, average, experience, knowledge) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.email = email;
        this.cellphone = cellphone;
        this.semester = semester;
        this.average = average;
        this.experience = experience;
        this.knowledge = knowledge;

        var aux= JSON.parse(localStorage.getItem('student'));
        aux.push(this);
        localStorage.setItem('student',JSON.stringify(aux));
    }
}
class Requirement{
    constructor(name){
        this.name=name;

        var aux= JSON.parse(localStorage.getItem('requirement'));
        aux.push(this);
        localStorage.setItem('requirement',JSON.stringify(aux));
    }
    extracts= () => {} //TODO
}
class System{
    constructor(id, name){
        this.id=id;
        this.name=name;

        var aux= JSON.parse(localStorage.getItem('system'));
        aux.push(this);
        localStorage.setItem('system',JSON.stringify(aux));
    }
}
class Task{
    constructor(name, difficulty, type, state, submission, delegation_state){
        this.name=name;
        this.difficulty=difficulty;
        this.type=type;
        this.state=state;
        this.submission=submission;
        this.delegation_state=delegation_state;

        var aux= JSON.parse(localStorage.getItem('task'));
        aux.push(this);
        localStorage.setItem('task',JSON.stringify(aux));
    }
}
class Code{
    constructor() {
        this.name = name;
        this.login = (a) => {
            console.log(a);
            console.log(name);
        }

        var aux = JSON.parse(localStorage.getItem('code'));
        aux.push(this);
        localStorage.setItem('code', JSON.stringify(aux));
    }
}
/*
class Documentation(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('documentation'));
    aux.push(this);
    localStorage.setItem('documentation',JSON.stringify(aux));
}
class Project(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('project'));
    aux.push(this);
    localStorage.setItem('project',JSON.stringify(aux));
}
class Inquiry(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('inquiry'));
    aux.push(this);
    localStorage.setItem('inquiry',JSON.stringify(aux));
}
class Team(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('team'));
    aux.push(this);
    localStorage.setItem('team',JSON.stringify(aux));
}
class Tuition(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('tuition'));
    aux.push(this);
    localStorage.setItem('tuition',JSON.stringify(aux));
}
class Industry_representative(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('industry_representative'));
    aux.push(this);
    localStorage.setItem('industry_representative',JSON.stringify(aux));
}
class Major(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('major'));
    aux.push(this);
    localStorage.setItem('major',JSON.stringify(aux));
}
class University(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('university'));
    aux.push(this);
    localStorage.setItem('university',JSON.stringify(aux));
}
class Teacher(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('teacher'));
    aux.push(this);
    localStorage.setItem('teacher',JSON.stringify(aux));
}
class Evaluation(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('evaluation'));
    aux.push(this);
    localStorage.setItem('evaluation',JSON.stringify(aux));
}
class Template(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('template'));
    aux.push(this);
    localStorage.setItem('template',JSON.stringify(aux));
}
class Student_list(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('student_list'));
    aux.push(this);
    localStorage.setItem('student_list',JSON.stringify(aux));
}
class Course(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('course'));
    aux.push(this);
    localStorage.setItem('course',JSON.stringify(aux));
}
class Monitor(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('monitor'));
    aux.push(this);
    localStorage.setItem('monitor',JSON.stringify(aux));
}
class Scrum_model(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('scrum_model'));
    aux.push(this);
    localStorage.setItem('scrum_model',JSON.stringify(aux));
}
class Sprint(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('sprint'));
    aux.push(this);
    localStorage.setItem('sprint',JSON.stringify(aux));
}
class Feedback(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('feedback'));
    aux.push(this);
    localStorage.setItem('feedback',JSON.stringify(aux));
}
class Activity(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('activity'));
    aux.push(this);
    localStorage.setItem('activity',JSON.stringify(aux));
}
class Rubric(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('rubric'));
    aux.push(this);
    localStorage.setItem('rubric',JSON.stringify(aux));
}*/
// CREATE
var s1= new Student('Cristo');
s1.login('buenas');

// READ
// console.log(JSON.parse(localStorage.getItem('rubric')));

// UPDATE TODO FUNCTION INSIDE OOP

// DELETE TODO FUNCTION INDEXOF OR fsplit()?


/*$('#submit').on('click', () => {
    const user= JSON.parse(sessionStorage.getItem(('usuario')));

    if (!localStorage.cursos){
        //alert(dic.noexcur);
        return
    }
    else if ($('registra-curso').val() === "-1"){
        // alert(dic.noselcur);
        return;
    }
    else if (!localStorage.planes){
        //alert(dic.noexpla);
        return;
    }
});*/

//var archivo;

//reportes.push(formData);
//localStorage.setItem('reportes', JSON.stringify(reportes));

//const data= JSON.parse(localStorage.getItem('data'));
//localStorage.setItem('archivos',JSON.stringify(archivos.concat(archivo)));

//alert(dic.repreg);

console.log(" -- Guardado -- ");
//resetValues(); falta TODO