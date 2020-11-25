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
        case 1: InsRep(); // install repository
            break;
        case 2: WriCod(); // write code
            break;
        case 3: ComAct(); // commit activity
            break;
        case 4: ReaDoc(); // read documentation
            break;
        case 5: ExtReq(); // extract requirement
            break;
        case 6: ExtTas(); // extract task
            break;
        case 7: DelTas(); // delegate task
            break;
        case 8: EvaAct(); // evaluate activity
            break;
        case 9: DesRub(); // design rubric
            break;
        case 10: EvaSpr(); // evaluate sprint
            break;
        case 11: ProFee(); // provide feedback
            break;
        case 12: DesAct(); // design activity
            break;
        case 13: SelPro(); // select project
            break;
        case 14: GivTem(); // give template
            break;
        case 15: ReaTas(); // realize task
            break;
        case 16: PrePro(); // present project
            break;
        case 17: ComInd(); // communicate industry_representative
            break;
        case 18: SolInq();// solves Inquiries
            break;
        case 19: SupTea(); // Supervise Team
            break;
        case 20: alert('RELATION DOES NOT HAVE A USER CASE OR KPI ASSOCIATED');console.log('RELATION DOES NOT HAVE A USER CASE OR KPI ASSOCIATED'); return false; //-BREAK CASE-//^ USER CASES UP ^//v KEEP PERFORMANCE INDICATOR DOWN v
            break;
        case 21: getGrade();
            break; // grade                1. Knowledge increase
        case 22: getActivityPerformed();
            break; // activityPerformed    2. Skills increase
        case 23: getMajorAdvance();
            break; // majorAdvance         3. Student’s grades availability
        case 24: getActivityAvailability();
            break; // activityAvailability 4. Activities availability
        case 25: getDeadline();
            break; // deadline             5. Project's deadline control
        case 26: getSprintsPerformed();
            break; // sprintsPerformed     6. Projects delivery
        case 27: getTeamSize();
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

// USER CASES //
function InsRep(){ // UC01 - INSTALL REPOSITORY
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
} // UC19 - SUPERVISE TEAM

// KEEP PERFORMANCE INDICATORS //
function getGrade() { // KPI-1 - Knowledge increase
    table.empty();
    but.show();
    tit.html('KPI-1 - Knowledge increase');
    but.html('Get Grade');
    table.append($("<p>Press '+' to add another student and write the grade of each one. Press 'Get Grade' to calculate the grade.</p>"));
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
        var grade=0;
        let l=a.length;
        for(let i=0; i<l; i++) grade+=(a[i].value/l);
        console.log('Grade: '+number_format(grade, 2));
        mod.modal('hide');
        setTimeout(() => { table.empty();} , 1000);
        return grade;
    });
}               // KPI-1 - Knowledge increase
function getActivityPerformed(){ // KPI-2 - Skills increase
    table.empty();
    but.show();
    tit.html('KPI-2 - Skills increase');
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
function getMajorAdvance(){ // KPI-3 - Student’s grades availability
    table.empty();
    but.show();
    tit.html('KP-3 - Student’s grades availability');
    but.html('Get MajorAdvance');
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
        var majorAdvance=0;
        let l=a.length;
        for(let i=0; i<l; i++) majorAdvance+=(a[i].value/l);
        console.log('MajorAdvance: '+number_format(majorAdvance, 2));
        mod.modal('hide');
        setTimeout(() => { table.empty();} , 1000);
        return majorAdvance;
    });
}         // KPI-3 - Student’s grades availability
function getActivityAvailability(){ // KPI-4 - Activities availability
    table.empty();
    but.show();
    tit.html('KPI-4 - Activities availability');
    but.html('Get ActivityAvailability');
    table.append($("<p>Write the number of finished activities and the total of activities then push 'Get ActivityAvailability' to calculate activityAvailability.</p>"));
    table.append($("<p>Formula: finished activities / total_activities </p>"));
    table.append($("<input id='a1' class='form-control' placeholder='finished activities' type='number' required>"));
    table.append($("<input id='a2' class='form-control' placeholder='total activities' type='number' required>"));
    but.off();
    but.click(function(){
        let activityAvailability= $('#a1').val()/$('#a2').val();
        console.log('ActivityAvailability: '+number_format(activityAvailability, 2));
        mod.modal('hide');
        setTimeout(() => { table.empty();} , 1000);
        return activityAvailability;
    });
} // KPI-4 - Activities availability
function getDeadline(){ // KPI-5 - Project's deadline control
    table.empty();
    but.show();
    tit.html('KPI-5 - Project\'s deadline control');
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
function getSprintsPerformed(){ // KPI-6 - Projects delivery
    table.empty();
    but.show();
    tit.html('KPI-6 - Projects delivery');
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
// objetos= [student, requirement, design, system, repository, task, code, documentation, project, inquiry, team, tuition, skill, industry_representative, major, university, teacher, evaluation, template, student_list, course, monitor, scrum_model, sprint, feedback, activity, rubric]

var data={};

$(document).ready( loadData() );
function loadData(){
    // checks if each object is in database, if not it creates it.
    if (! localStorage.student) localStorage.setItem('student',JSON.stringify([]));
    if (! localStorage.requirement) localStorage.setItem('requirement',JSON.stringify([]));
    if (! localStorage.design) localStorage.setItem('design',JSON.stringify([]));
    if (! localStorage.system) localStorage.setItem('system',JSON.stringify([]));
    if (! localStorage.repository) localStorage.setItem('repository',JSON.stringify([]));
    if (! localStorage.task) localStorage.setItem('task',JSON.stringify([]));
    if (! localStorage.code) localStorage.setItem('code',JSON.stringify([]));
    if (! localStorage.documentation) localStorage.setItem('documentation',JSON.stringify([]));
    if (! localStorage.project) localStorage.setItem('project',JSON.stringify([]));
    if (! localStorage.inquiry) localStorage.setItem('inquiry',JSON.stringify([]));
    if (! localStorage.team) localStorage.setItem('team',JSON.stringify([]));
    if (! localStorage.tuition) localStorage.setItem('tuition',JSON.stringify([]));
    if (! localStorage.skill) localStorage.setItem('skill',JSON.stringify([]));
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

    // adds each element to the object 'data' for easier usage.
    data['student']=JSON.parse(localStorage.getItem('student'));
    data['requirement']=JSON.parse(localStorage.getItem('requirement'));
    data['design']=JSON.parse(localStorage.getItem('design'));
    data['system']=JSON.parse(localStorage.getItem('system'));
    data['repository']=JSON.parse(localStorage.getItem('repository'));
    data['task']=JSON.parse(localStorage.getItem('task'));
    data['code']=JSON.parse(localStorage.getItem('code'));
    data['documentation']=JSON.parse(localStorage.getItem('documentation'));
    data['project']=JSON.parse(localStorage.getItem('project'));
    data['inquiry']=JSON.parse(localStorage.getItem('inquiry'));
    data['team']=JSON.parse(localStorage.getItem('team'));
    data['tuition']=JSON.parse(localStorage.getItem('tuition'));
    data['skil']=JSON.parse(localStorage.getItem('skill'));
    data['industry_representative']=JSON.parse(localStorage.getItem('industry_representative'));
    data['major']=JSON.parse(localStorage.getItem('major'));
    data['university']=JSON.parse(localStorage.getItem('university'));
    data['teacher']=JSON.parse(localStorage.getItem('teacher'));
    data['evaluation']=JSON.parse(localStorage.getItem('evaluation'));
    data['template']=JSON.parse(localStorage.getItem('template'));
    data['student_list']=JSON.parse(localStorage.getItem('student_list'));
    data['course']=JSON.parse(localStorage.getItem('course'));
    data['monitor']=JSON.parse(localStorage.getItem('monitor'));
    data['scrum_model']=JSON.parse(localStorage.getItem('scrum_model'));
    data['sprint']=JSON.parse(localStorage.getItem('sprint'));
    data['feedback']=JSON.parse(localStorage.getItem('feedback'));
    data['activity']=JSON.parse(localStorage.getItem('activity'));
}

// HARD-RESET
function resetValues(){ localStorage.clear(); };

// OOP - CRUD
function Student(name){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('student'));
    aux.push(this);
    localStorage.setItem('student',JSON.stringify(aux));
}

function Requirement(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('requirement'));
    aux.push(this);
    localStorage.setItem('requirement',JSON.stringify(aux));
}

function Design(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('design'));
    aux.push(this);
    localStorage.setItem('design',JSON.stringify(aux));
}

function System(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('system'));
    aux.push(this);
    localStorage.setItem('system',JSON.stringify(aux));
}

function Repository(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('repository'));
    aux.push(this);
    localStorage.setItem('repository',JSON.stringify(aux));
}

function Task(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('task'));
    aux.push(this);
    localStorage.setItem('task',JSON.stringify(aux));
}

function Code(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('code'));
    aux.push(this);
    localStorage.setItem('code',JSON.stringify(aux));
}

function Documentation(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('documentation'));
    aux.push(this);
    localStorage.setItem('documentation',JSON.stringify(aux));
}

function Project(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('project'));
    aux.push(this);
    localStorage.setItem('project',JSON.stringify(aux));
}

function Inquiry(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('inquiry'));
    aux.push(this);
    localStorage.setItem('inquiry',JSON.stringify(aux));
}

function Team(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('team'));
    aux.push(this);
    localStorage.setItem('team',JSON.stringify(aux));
}

function Tuition(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('tuition'));
    aux.push(this);
    localStorage.setItem('tuition',JSON.stringify(aux));
}

function Skill(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('skill'));
    aux.push(this);
    localStorage.setItem('skill',JSON.stringify(aux));
}

function Industry_representative(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('industry_representative'));
    aux.push(this);
    localStorage.setItem('industry_representative',JSON.stringify(aux));
}

function Major(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('major'));
    aux.push(this);
    localStorage.setItem('major',JSON.stringify(aux));
}

function University(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('university'));
    aux.push(this);
    localStorage.setItem('university',JSON.stringify(aux));
}

function Teacher(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('teacher'));
    aux.push(this);
    localStorage.setItem('teacher',JSON.stringify(aux));
}

function Evaluation(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('evaluation'));
    aux.push(this);
    localStorage.setItem('evaluation',JSON.stringify(aux));
}

function Template(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('template'));
    aux.push(this);
    localStorage.setItem('template',JSON.stringify(aux));
}

function Student_list(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('student_list'));
    aux.push(this);
    localStorage.setItem('student_list',JSON.stringify(aux));
}

function Course(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('course'));
    aux.push(this);
    localStorage.setItem('course',JSON.stringify(aux));
}

function Monitor(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('monitor'));
    aux.push(this);
    localStorage.setItem('monitor',JSON.stringify(aux));
}

function Scrum_model(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('scrum_model'));
    aux.push(this);
    localStorage.setItem('scrum_model',JSON.stringify(aux));
}

function Sprint(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('sprint'));
    aux.push(this);
    localStorage.setItem('sprint',JSON.stringify(aux));
}

function Feedback(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('feedback'));
    aux.push(this);
    localStorage.setItem('feedback',JSON.stringify(aux));
}

function Activity(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('activity'));
    aux.push(this);
    localStorage.setItem('activity',JSON.stringify(aux));
}

function Rubric(){
    this.name=name;
    this.login= (a) => {
        console.log(a);
        console.log(name);
    }

    var aux= JSON.parse(localStorage.getItem('rubric'));
    aux.push(this);
    localStorage.setItem('rubric',JSON.stringify(aux));
}

// CREATE
var s1= new Student('Ricado');
//s1.login('buenas');

// READ
// data['rubric']=JSON.parse(localStorage.getItem('rubric'));

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