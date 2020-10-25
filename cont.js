let mod=   $("#modal");
let bod=   $("#modalBody");
let table= $('#modalTable');
let tit=   $('#titModal');
let but=   $("#aceptarModal");

function modalIndex(a){
    // while(table.firstChild) table.removeChild(table.firstChild);
    // if      (a==1) InsRep();
    // else if (a==2) WriCod();
    table.empty();
    $("#modalDiag").attr("class", 'modal-dialog modal-dialog-centered');
    console.log(a);
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
        default: alert('ERROR EN EL NUMERO DE CASO DE USO');
    }
    $('#modal').modal('show');
    //but.hidden='';
}

function showTable(title, elements, bol){ /// *WITH CHECKBOXES OR RADIOS*
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
} /// *WITH CHECKBOXES*

function showForm(title, elements, tip){
    var j=1;
    table.append($("<caption style='caption-side: top;'></caption>").html(title));

    elements.forEach(function(r){ // FILL THE TABLE AND DO A FORM IN IT. (filling each row)
        var row =$('<tr></tr>');
        row.append($("<td class=''></td>").append("<p></p>").html(r)); //.attr('id',j)
        if      (tip==1) row.append($("<input class='form-control'>").attr('id',r));
        else if (tip==2) row.append($("<textarea class='form-control'></textarea>").attr('id',r));

        table.append(row);
        j++;
    });
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
    let e=[['NAME','DIFFICULTY','TYPE'],['LOREM','Manageable','Critical'],['IPSUM','Manageable','Standard'],['DOLOR','Manageable','Standard'],['SI','Manageable','Critical'],['AMET','Unmanageable','Critical']];
    showTable("Check which tasks you'll like to delegate and then push 'DONE' to delegate them.", e, 'check');
    but.off();
    but.on('click', function(){
        var deleg= $('input[name="checkbox"]:checked');
        if (deleg.length){
            console.log("THE TASKS TO DELEGATE ARE: ");
            deleg.each(function(){
                var s='';
                e[$(this).val()].forEach(function (r){ s+=''+r+' '; })
                console.log(s);
            });
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
    table.append($("<thead><tr><th scope='col'>PARAMETER</th><th scope='col'>DESCRIPTION</th><th scope='col'>GRADE</th></tr></thead>"));
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
        setTimeout(() => { console.log("Evaluation.\n\nFINAL GRADE: "+a+"\n\nCOMMENTS\n - Code: "+a1+"\n - Presentation: "+a2+"\n - Progress: "+a3+"\n - Consistency: "+a4+"\n - Functions: "+a5); }, 2000);
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
    table.append($("<p>Write the rubric of the activity and then push 'SAVE' in order to save it.</p>"));
    table.append($("<textarea id='dr9' class='form-control'></textarea>"));
    but.off();
    but.click(function(){
        let a=$('#dr9').val();
        console.log('SAVING THE RUBRIC...');
        setTimeout(() => { console.log(a); }, 2000);
        mod.modal('hide');
        table.empty();
    });
} // UC09 - DESIGN RUBRIC

function EvaSpr(){ // UC10 - EVALUATE SPRINT
    table.empty();
    but.show();
    tit.html('EVALUATE SPRINT');
    but.html('SAVE');
    table.append($("<p>Write the evaluation of the sprint and then push 'SAVE' in order to save it.</p>"));
    table.append($("<textarea id='ev10' class='form-control'></textarea>"));
    but.off();
    but.click(function(){
        let a=$('#ev10').val();
        console.log('SAVING THE EVALUATION...');
        setTimeout(() => { console.log(a); }, 2000);
        mod.modal('hide');
        table.empty();
    });
} // UC10 - EVALUATE SPRINT

function ProFee(){ // UC11 - PROVIDE FEEDBACK
    table.empty();
    but.show();
    tit.html('PROVIDE FEEDBACK');
    but.html('SAVE');
    table.append($("<p>Write the feedback and then push 'SAVE' in order to send it.</p>"));
    table.append($("<textarea id='pf11' class='form-control'></textarea>"));
    but.off();
    but.click(function(){
        let a=$('#pf11').val();
        console.log('SAVING THE FEEDBACK...');
        setTimeout(() => { console.log(a); }, 2000);
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
    showForm('Complete the form in order to design the activity.', e, 1);
    but.off();
    but.click(function(){
        var a=' ACTIVITY ';
        e.forEach(function(r){
            a+= '\n'+r+': '+document.getElementById(r).value;
        });
        console.log('SAVING THE ACTIVITY...');
        setTimeout(() => { console.log(a); }, 2000);
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
        var deleg= $('input[name="radio"]:checked');
        if (deleg.length){
            console.log("THE PROJECT YOU SELECTED IS: ");
            deleg.each(function(){
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
        var deleg= $( "#tasks option:selected").text();
        let a= $('#rt1').val();
        let b= $('#rt2').val();
        console.log('REALIZING TASK...\n');
        setTimeout(() => { console.log("The task "+deleg+" was made by submitting "+a+' and/or the file '+b); }, 2000);
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