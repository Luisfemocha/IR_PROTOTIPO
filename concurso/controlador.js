let mod=   $("#modal");
let bod=   $("#modalBody");
let table= $('#modalTable');
let tit=   $('#titModal');
let but=   $("#aceptarModal");

var data={};

data.phase= (localStorage.phase)? JSON.parse(localStorage.phase) : [];
data.practice= (localStorage.practice)? JSON.parse(localStorage.practice) : [];
data.method= (localStorage.method)? JSON.parse(localStorage.method) : [];
data.area_of_concern= (localStorage.area_of_concern)? JSON.parse(localStorage.area_of_concern) : [];
data.activity_space= (localStorage.activity_space)? JSON.parse(localStorage.activity_space) : [];
data.activity= (localStorage.activity)? JSON.parse(localStorage.activity) : [];
data.competency= (localStorage.competency)? JSON.parse(localStorage.competency) : [];
data.role= (localStorage.role)? JSON.parse(localStorage.role) : [];
data.work_product= (localStorage.work_product)? JSON.parse(localStorage.work_product) : [];
data.alpha= (localStorage.alpha)? JSON.parse(localStorage.alpha) : [];

$("#downloadData").attr('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(data)));

function modalIndex(a){
    but.off();
    but= $("#aceptarModal");
    table.empty();
    $("#modalDiag").attr("class", 'modal-dialog modal-dialog-centered');
    switch (a) {
        case 1: tabPhas();
            break;
        case 2: tabPrac();
            break;
        case 3: tabMeth();
            break;
        case 4: tabArea();
            break;
        case 5: tabAcSp();
            break;
        case 6: tabActi();
            break;
        case 7: tabComp();
            break;
        case 8: tabRole();
            break;
        case 9: tabWork();
            break;
        case 10: tabAlph();
            break;
        case 11: manifes();
            break;

        default: alert('OPTION ERROR');
            break;
    }
    console.log(a);
    $('#modal').modal('show');

    mod.off();
    mod= $('#modal');
}

// DATAREAD
$("#dataFile").on('change', function(){
    var files = document.getElementById('dataFile').files;
    console.log(files);
    if (files.length <= 0) return false;

    var fr = new FileReader();
    fr.onload = function(e) {
        data = JSON.parse(e.target.result);
        JSONtoLocal();
    }
    fr.readAsText(files.item(0));
});

//$(document).ready( JSONtoLocal())

function JSONtoLocal() {
    sessionStorage.clear();
    console.log(data);
    if (data.area_of_concern){
        localStorage.setItem('area_of_concern',JSON.stringify(data.area_of_concern));
        // if (!localStorage.area_of_concern)
        // else localStorage.setItem('area_of_concern',JSON.stringify(JSON.parse(localStorage.getItem('area_of_concern')).concat(data.area_of_concern)));
    }
    //else console.log("There isn't data for area_of_concern");

    if (data.phase) {
        localStorage.setItem('phase', JSON.stringify(data.phase));
        // if (!localStorage.phase)
        // else localStorage.setItem('phase',JSON.stringify(JSON.parse(localStorage.getItem('phase')).concat(data.phase)));
    }
    //else console.log("There isn't data for phase");

    if (data.sequence) {
        localStorage.setItem('sequence', JSON.stringify(data.sequence));
        // if (!localStorage.sequence)
        // else localStorage.setItem('sequence',JSON.stringify(JSON.parse(localStorage.getItem('sequence')).concat(data.sequence)));
    }
    //else console.log("There isn't data for sequence");

    if (data.activity_space){
        localStorage.setItem('activity_space',JSON.stringify(data.activity_space));
        // if (!localStorage.activity_space)
        // else localStorage.setItem('activity_space',JSON.stringify(JSON.parse(localStorage.getItem('activity_space')).concat(data.activity_space)));
    }
    //else console.log("There isn't data for activity_space");

    if (data.activity){
        localStorage.setItem('activity',JSON.stringify(data.activity));
        // if (!localStorage.activity)
        // else localStorage.setItem('activity',JSON.stringify(JSON.parse(localStorage.getItem('activity')).concat(data.activity)));
    }
    //else console.log("There isn't data for activity");

    if (data.competency) {
        localStorage.setItem('competency',JSON.stringify(data.competency));
        // if (!localStorage.competency)
        // else localStorage.setItem('competency',JSON.stringify(JSON.parse(localStorage.getItem('competency')).concat(data.competency)));

    }
    //else console.log("There isn't data for competency");

    if (data.capability) {
        localStorage.setItem('capability',JSON.stringify(data.capability));
        // if (!localStorage.capability)
        // else localStorage.setItem('capability',JSON.stringify(JSON.parse(localStorage.getItem('capability')).concat(data.capability)));
    }
    //else console.log("There isn't data for capability");

    if (data.alpha) {
        localStorage.setItem('alpha',JSON.stringify(data.alpha));
        // if (!localStorage.alpha)
        // else localStorage.setItem('alpha',JSON.stringify(JSON.parse(localStorage.getItem('alpha')).concat(data.alpha)));
    }
    //else console.log("There isn't data for alpha");

    if (data.role) {
        localStorage.setItem('role',JSON.stringify(data.role));
        // if (!localStorage.role)
        // else localStorage.setItem('role',JSON.stringify(JSON.parse(localStorage.getItem('role')).concat(data.role)));
    }
    //else console.log("There isn't data for role");

    if (data.practice){
        localStorage.setItem('practice',JSON.stringify(data.practice));
        // if (!localStorage.practice)
        // else localStorage.setItem('practice',JSON.stringify(JSON.parse(localStorage.getItem('practice')).concat(data.practice)));
    }
    //else console.log("There isn't data for practice");

    if (data.method) {
        localStorage.setItem('method',JSON.stringify(data.method));
        // if (!localStorage.method)
        // else localStorage.setItem('method',JSON.stringify(JSON.parse(localStorage.getItem('method')).concat(data.method)));
    }
    //else console.log("There isn't data for method");

    if (data.composition) {
        localStorage.setItem('composition',JSON.stringify(data.composition));
        // if (!localStorage.composition)
        // else localStorage.setItem('composition',JSON.stringify(JSON.parse(localStorage.getItem('composition')).concat(data.composition)));
    }
    //else console.log("There isn't data for composition");

    if (data.responsibility) {
        localStorage.setItem('responsibility',JSON.stringify(data.responsibility));
        // if (!localStorage.responsibility)
        // else localStorage.setItem('responsibility',JSON.stringify(JSON.parse(localStorage.getItem('responsibility')).concat(data.responsibility)));
    }
    //else console.log("There isn't data for responsibility");

    if (data.work_product) {
        localStorage.setItem('work_product',JSON.stringify(data.work_product));
        // if (!localStorage.work_product)
        // else localStorage.setItem('work_product',JSON.stringify(JSON.parse(localStorage.getItem('work_product')).concat(data.work_product)));
    }
    //else console.log("There isn't data for work_product");

    if (data.manifest) {
        localStorage.setItem('manifest',JSON.stringify(data.manifest));
        // if (!localStorage.manifest)
        // else localStorage.setItem('manifest',JSON.stringify(JSON.parse(localStorage.getItem('manifest')).concat(data.manifest)));
    }
    //else console.log("There isn't data for manifest");

    $("#downloadData").attr('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(data)));
}

// HARD-RESET
function resetValues(){
    localStorage.clear();
    sessionStorage.clear();
};

//GET
// JSON.parse(localStorage.getItem('estudiante'));

// JAVASCRIPT

// function showTable(title, elements, bol){ /// *WITH CHECKBOXES OR RADIO*
//     var j=1;
//     table.append($("<caption style='caption-side: top;'></caption>").html(title));
//     table.append($("<thead id='header'><tr id='headerInside'><td></td></tr></thead>"));
//     elements.shift.forEach(function (r){ $("#headerInside").append($("<th scope='col'></th>").html(r)); });
//
//     elements.forEach(function(r){ // FILL THE TABLE AND DO A FORM IN IT. (filling each row)
//         var row =$('<tr></tr>');
//         if      (bol=='check') row.append($("<td></td>").append($("<input name='checkbox' class='form-check-input checkbox' type='checkbox'>").val(j).attr('id',j)));
//         else if (bol=='radio') row.append($("<td></td>").append($("<input name='radio' class='form-check-input radio' type='radio'>").val(j).attr('id',j)));
//         else row.append($("<td></td>"));
//         //row.dblclick(function(){console.log(this)});
//
//         for(i=0; i<r.length; i++) {
//             var td=$("<td class=''></td>").append("<p></p>").html(r[i]).attr('id',j+''+i)
//             row.append(td);
//         } // filling each column
//
//         table.append(row);
//         j++;
//     });
// } /// *WITH CHECKBOXES OR RADIO*

function tabPhas(){ // 1. phase
    table.empty();
    tit.html('Phase.');
    let phases = JSON.parse(localStorage.getItem('phase'));
    let head=['name','area_of_concern']

    table.append($("<caption style='caption-side: top'>Check each phase to filter the manifest.</caption>"));

    table.append($("<thead id='header'><tr id='headerInside'><td></td></tr></thead>"));
    head.forEach(function (r){ $("#headerInside").append($("<th scope='col'></th>").html(r)); });

    for (j in phases){
        var row =$('<tr></tr>');
        row.append($("<td></td>").append($("<input name='checkbox' class='form-check-input checkbox' type='checkbox'>").val(j).attr('id',phases[j].name)));

        for(i=0; i<head.length; i++) {
            var td=$("<td class=''></td>").append("<p></p>").html(phases[j][head[i]]).attr('id',j+''+i)
            row.append(td);
        } // filling each column

        table.append(row);
    };
    but.html('SELECT');

    but.show();
    but.on('click',function(){
        let id= $('input[name="checkbox"]:checked');
        var filter=[];
        for (let i=0; i<id.length; i++) filter.push((id[i].id))
        sessionStorage.setItem('phase', JSON.stringify(filter))
        console.log(filter);
        mod.modal('hide');
        setTimeout(() => {
            table.empty();
        } , 1000);
        but.off();
    });
} // 1. phase
function tabPrac(){ // 2. practice
    table.empty();
    tit.html('Practice.');
    let practices = JSON.parse(localStorage.getItem('practice'));
    let head=['name','area_of_concern']

    table.append($("<caption style='caption-side: top'>Check each practice to filter the manifest.</caption>"));

    table.append($("<thead id='header'><tr id='headerInside'><td></td></tr></thead>"));
    head.forEach(function (r){ $("#headerInside").append($("<th scope='col'></th>").html(r)); });

    for (j in practices){
        var row =$('<tr></tr>');
        row.append($("<td></td>").append($("<input name='checkbox' class='form-check-input checkbox' type='checkbox'>").val(j).attr('id',practices[j].name)));

        for(i=0; i<head.length; i++) {
            var td=$("<td class=''></td>").append("<p></p>").html(practices[j][head[i]]).attr('id',j+''+i)
            row.append(td);
        } // filling each column

        table.append(row);
    };
    but.html('SELECT');

    but.show();
    but.on('click',function(){
        let id= $('input[name="checkbox"]:checked');
        var filter=[];
        for (let i=0; i<id.length; i++) filter.push((id[i].id))
        sessionStorage.setItem('practice', JSON.stringify(filter))
        console.log(filter);
        mod.modal('hide');
        setTimeout(() => {
            table.empty();
        } , 1000);
        but.off();
    });
} // 2. practice
function tabMeth(){ // 3. method
    table.empty();
    tit.html('Method.');
    let methods = JSON.parse(localStorage.getItem('method'));
    let head=['name']

    table.append($("<caption style='caption-side: top'>Check each method to filter the manifest.</caption>"));

    table.append($("<thead id='header'><tr id='headerInside'><td></td></tr></thead>"));
    head.forEach(function (r){ $("#headerInside").append($("<th scope='col'></th>").html(r)); });

    for (j in methods){
        var row =$('<tr></tr>');
        row.append($("<td></td>").append($("<input name='checkbox' class='form-check-input checkbox' type='checkbox'>").val(j).attr('id',methods[j].name)));

        for(i=0; i<head.length; i++) {
            var td=$("<td class=''></td>").append("<p></p>").html(methods[j][head[i]]).attr('id',j+''+i)
            row.append(td);
        } // filling each column

        table.append(row);
    };
    but.html('SELECT');

    but.show();
    but.on('click',function(){
        let id= $('input[name="checkbox"]:checked');
        var filter=[];
        for (let i=0; i<id.length; i++) filter.push((id[i].id))
        sessionStorage.setItem('method', JSON.stringify(filter))
        console.log(filter);
        mod.modal('hide');
        setTimeout(() => {
            table.empty();
        } , 1000);
        but.off();
    });
} // 3. method
function tabArea(){ // 4. area_of_concern
    table.empty();
    tit.html('Area_of_concern.');
    let area_of_concerns = JSON.parse(localStorage.getItem('area_of_concern'));
    let head=['name','color']

    table.append($("<caption style='caption-side: top'>Check each area_of_concerns to filter the manifest.</caption>"));

    table.append($("<thead id='header'><tr id='headerInside'><td></td></tr></thead>"));
    head.forEach(function (r){ $("#headerInside").append($("<th scope='col'></th>").html(r)); });

    for (j in area_of_concerns){
        var row =$('<tr></tr>');
        row.append($("<td></td>").append($("<input name='checkbox' class='form-check-input checkbox' type='checkbox'>").val(j).attr('id',area_of_concerns[j].name)));

        for(i=0; i<head.length; i++) {
            var td=$("<td class=''></td>").append("<p></p>").html(area_of_concerns[j][head[i]]).attr('id',j+''+i)
            row.append(td);
        } // filling each column

        table.append(row);
    };
    but.html('SELECT');

    but.show();
    but.on('click',function(){
        let id= $('input[name="checkbox"]:checked');
        var filter=[];
        for (let i=0; i<id.length; i++) filter.push((id[i].id))
        sessionStorage.setItem('area_of_concern', JSON.stringify(filter))
        console.log(filter);
        mod.modal('hide');
        setTimeout(() => {
            table.empty();
        } , 1000);
        but.off();
    });
} // 4. area_of_concern
function tabAcSp(){ // 5. activity_space
    table.empty();
    tit.html('Activity_space.');
    let activity_spaces = JSON.parse(localStorage.getItem('activity_space'));
    let head=['name','area_of_concern']

    table.append($("<caption style='caption-side: top'>Check each activity_space to filter the manifest.</caption>"));

    table.append($("<thead id='header'><tr id='headerInside'><td></td></tr></thead>"));
    head.forEach(function (r){ $("#headerInside").append($("<th scope='col'></th>").html(r)); });

    for (j in activity_spaces){
        var row =$('<tr></tr>');
        row.append($("<td></td>").append($("<input name='checkbox' class='form-check-input checkbox' type='checkbox'>").val(j).attr('id',activity_spaces[j].name)));

        for(i=0; i<head.length; i++) {
            var td=$("<td class=''></td>").append("<p></p>").html(activity_spaces[j][head[i]]).attr('id',j+''+i)
            row.append(td);
        } // filling each column

        table.append(row);
    };
    but.html('SELECT');

    but.show();
    but.on('click',function(){
        let id= $('input[name="checkbox"]:checked');
        var filter=[];
        for (let i=0; i<id.length; i++) filter.push((id[i].id))
        sessionStorage.setItem('activity_space', JSON.stringify(filter))
        console.log(filter);
        mod.modal('hide');
        setTimeout(() => {
            table.empty();
        } , 1000);
        but.off();
    });
} // 5. activity_space
function tabActi(){ // 6. activity
    table.empty();
    tit.html('Activity.');
    let activities = JSON.parse(localStorage.getItem('activity'));
    let head=['name','area_of_concern']

    table.append($("<caption style='caption-side: top'>Check each activity to filter the manifest.</caption>"));

    table.append($("<thead id='header'><tr id='headerInside'><td></td></tr></thead>"));
    head.forEach(function (r){ $("#headerInside").append($("<th scope='col'></th>").html(r)); });

    for (j in activities){
        var row =$('<tr></tr>');
        row.append($("<td></td>").append($("<input name='checkbox' class='form-check-input checkbox' type='checkbox'>").val(j).attr('id',activities[j].name)));

        for(i=0; i<head.length; i++) {
            var td=$("<td class=''></td>").append("<p></p>").html(activities[j][head[i]]).attr('id',j+''+i)
            row.append(td);
        } // filling each column

        table.append(row);
    };
    but.html('SELECT');

    but.show();
    but.on('click',function(){
        let id= $('input[name="checkbox"]:checked');
        var filter=[];
        for (let i=0; i<id.length; i++) filter.push((id[i].id))
        sessionStorage.setItem('activity', JSON.stringify(filter))
        console.log(filter);
        mod.modal('hide');
        setTimeout(() => {
            table.empty();
        } , 1000);
        but.off();
    });
} // 6. activity
function tabComp(){ // 7. competency
    table.empty();
    tit.html('Competency.');
    let competencies = JSON.parse(localStorage.getItem('competency'));
    let head=['name','area_of_concern']

    table.append($("<caption style='caption-side: top'>Check each competency to filter the manifest.</caption>"));

    table.append($("<thead id='header'><tr id='headerInside'><td></td></tr></thead>"));
    head.forEach(function (r){ $("#headerInside").append($("<th scope='col'></th>").html(r)); });

    for (j in competencies){
        var row =$('<tr></tr>');
        row.append($("<td></td>").append($("<input name='checkbox' class='form-check-input checkbox' type='checkbox'>").val(j).attr('id',competencies[j].name)));

        for(i=0; i<head.length; i++) {
            var td=$("<td class=''></td>").append("<p></p>").html(competencies[j][head[i]]).attr('id',j+''+i)
            row.append(td);
        } // filling each column

        table.append(row);
    };
    but.html('SELECT');

    but.show();
    but.on('click',function(){
        let id= $('input[name="checkbox"]:checked');
        var filter=[];
        for (let i=0; i<id.length; i++) filter.push((id[i].id))
        sessionStorage.setItem('competency', JSON.stringify(filter))
        console.log(filter);
        mod.modal('hide');
        setTimeout(() => {
            table.empty();
        } , 1000);
        but.off();
    });
} // 7. competency
function tabRole(){ // 8. role
    table.empty();
    tit.html('Role.');
    let roles = JSON.parse(localStorage.getItem('role'));
    let head=['name','area_of_concern']

    table.append($("<caption style='caption-side: top'>Check each role to filter the manifest.</caption>"));

    table.append($("<thead id='header'><tr id='headerInside'><td></td></tr></thead>"));
    head.forEach(function (r){ $("#headerInside").append($("<th scope='col'></th>").html(r)); });

    for (j in roles){
        var row =$('<tr></tr>');
        row.append($("<td></td>").append($("<input name='checkbox' class='form-check-input checkbox' type='checkbox'>").val(j).attr('id',roles[j].name)));

        for(i=0; i<head.length; i++) {
            var td=$("<td class=''></td>").append("<p></p>").html(roles[j][head[i]]).attr('id',j+''+i)
            row.append(td);
        } // filling each column

        table.append(row);
    };
    but.html('SELECT');

    but.show();
    but.on('click',function(){
        let id= $('input[name="checkbox"]:checked');
        var filter=[];
        for (let i=0; i<id.length; i++) filter.push((id[i].id))
        sessionStorage.setItem('role', JSON.stringify(filter))
        console.log(filter);
        mod.modal('hide');
        setTimeout(() => {
            table.empty();
        } , 1000);
        but.off();
    });
} // 8. role
function tabWork(){ // 9. Work_Product
    table.empty();
    tit.html('Work_Product.');
    let work_Products = JSON.parse(localStorage.getItem('work_product'));
    let head=['name','image']

    table.append($("<caption style='caption-side: top'>Check each phase to work_Product the manifest.</caption>"));

    table.append($("<thead id='header'><tr id='headerInside'><td></td></tr></thead>"));
    head.forEach(function (r){ $("#headerInside").append($("<th scope='col'></th>").html(r)); });

    for (j in work_Products){
        var row =$('<tr></tr>');
        row.append($("<td></td>").append($("<input name='checkbox' class='form-check-input checkbox' type='checkbox'>").val(j).attr('id',work_Products[j].name)));

        var td=$("<td class=''></td>").append("<p></p>").html(work_Products[j].name);
        row.append(td);

        var td=$("<td class=''></td>").append($("<a target='_blank'></a>").html(work_Products[j].image).attr('href','work_product/'+work_Products[j].image));
        row.append(td);

        table.append(row);
    };
    but.html('SELECT');

    but.show();
    but.on('click',function(){
        let id= $('input[name="checkbox"]:checked');
        var filter=[];
        for (let i=0; i<id.length; i++) filter.push((id[i].id))
        sessionStorage.setItem('work_product', JSON.stringify(filter))
        console.log(filter);
        mod.modal('hide');
        setTimeout(() => {
            table.empty();
        } , 1000);
        but.off();
    });
} // 9. Work_Product
function tabAlph(){ // 10. alpha
    table.empty();
    tit.html('Alpha.');
    let alphas = JSON.parse(localStorage.getItem('alpha'));
    let head=['name','area_of_concern']

    table.append($("<caption style='caption-side: top'>Check each alpha to filter the manifest.</caption>"));

    table.append($("<thead id='header'><tr id='headerInside'><td></td></tr></thead>"));
    head.forEach(function (r){ $("#headerInside").append($("<th scope='col'></th>").html(r)); });

    for (j in alphas){
        var row =$('<tr></tr>');
        row.append($("<td></td>").append($("<input name='checkbox' class='form-check-input checkbox' type='checkbox'>").val(j).attr('id',alphas[j].name)));

        for(i=0; i<head.length; i++) {
            var td=$("<td class=''></td>").append("<p></p>").html(alphas[j][head[i]]).attr('id',j+''+i)
            row.append(td);
        } // filling each column

        table.append(row);
    };
    but.html('SELECT');

    but.show();
    but.on('click',function(){
        let id= $('input[name="checkbox"]:checked');
        var filter=[];
        for (let i=0; i<id.length; i++) filter.push((id[i].id))
        sessionStorage.setItem('alpha', JSON.stringify(filter))
        console.log(filter);
        mod.modal('hide');
        setTimeout(() => {
            table.empty();
        } , 1000);
        but.off();
    });
} // 10. alpha
function manifes(){ // 11. manifest
    table.empty();
    let manifests = JSON.parse(localStorage.getItem('manifest'));
    var aux=[];
    $("#modalDiag").attr('class', "modal-dialog mx-0")

    if (sessionStorage.area_of_concern){ // THIS FILTER DOES NOT AFFECT THE MANIFEST ITSELF BUT THE COMPETENCY FILTER WHICH DOES.
        let competencies = JSON.parse(localStorage.getItem('competency'));
        if (sessionStorage.competency){
            var aux1=JSON.parse(sessionStorage.competency);
            competencies.forEach( (c) =>{
                if (sessionStorage.area_of_concern.indexOf(c.area_of_concern)>=0) aux1.push(c.name);
            })
            console.log(aux1);
            sessionStorage.setItem('competency', JSON.stringify(aux1))
        }
        else{
            var aux1=[];
            competencies.forEach( (c) =>{
                if (sessionStorage.area_of_concern.indexOf(c.area_of_concern)>=0) aux1.push(c.name);
            })
            console.log(aux1);
            sessionStorage.setItem('competency', JSON.stringify(aux1))
        }
    }

    manifests.forEach((r)=>{
        if (sessionStorage.phase && sessionStorage.phase!="[]"){
            if (sessionStorage.phase.indexOf(r.sequence.phase)<0) return false;
        }
        if (sessionStorage.practice && sessionStorage.practice!="[]"){
            if (sessionStorage.practice.indexOf(r.composition.practice)<0) return false;
        }
        if (sessionStorage.method && sessionStorage.method!="[]"){
            if (sessionStorage.method.indexOf(r.composition.method)<0) return false;
        }
        if (sessionStorage.activity_space && sessionStorage.activity_space!="[]"){
            if (sessionStorage.activity_space.indexOf(r.sequence.activity_space)<0) return false;
        }
        if (sessionStorage.activity && sessionStorage.activity!="[]"){
            if (sessionStorage.activity.indexOf(r.capability.activity)<0) return false;
        }
        if (sessionStorage.competency && sessionStorage.competency!="[]"){
            if (sessionStorage.competency.indexOf(r.capability.competency)<0) return false;
        }
        if (sessionStorage.role && sessionStorage.role!="[]"){
            if (sessionStorage.role.indexOf(r.responsibility.role)<0) return false;
        }
        if (sessionStorage.work_prodct && sessionStorage.work_prodct!="[]"){
            if (sessionStorage.work_prodct.indexOf(r.responsibility.work_prodct.name)<0) return false;
        }
        if (sessionStorage.alpha && sessionStorage.alpha!="[]"){
            if (sessionStorage.alpha.indexOf(r.alpha)<0) return false;
        }
        aux.push(r);
    });
    console.log(manifests);
    console.log(aux);

    tit.html('MANIFEST.');
    let head=['alpha', 'activity', 'competency', 'method', 'practice', 'role', 'work_product name', 'work_product image', 'activity_space', 'phase'];

    table.append($("<caption style='caption-side: top'>Here you can see the manifests that were filtered.</caption>"));

    table.append($("<thead id='header'><tr id='headerInside'></thead>"));
    head.forEach(function (r){ $("#headerInside").append($("<th scope='col'></th>").html(r)); });

    let area_of_concern = JSON.parse(localStorage.getItem('area_of_concern'));

    let phase = JSON.parse(localStorage.getItem('phase'));
    let practice = JSON.parse(localStorage.getItem('practice'));
    let activity_space = JSON.parse(localStorage.getItem('activity_space'));
    let activity = JSON.parse(localStorage.getItem('activity'));
    let competency = JSON.parse(localStorage.getItem('competency'));
    let role = JSON.parse(localStorage.getItem('role'));
    let alpha = JSON.parse(localStorage.getItem('alpha'));
    var color;
    var colorAtr;

    for (j in aux){
        var row =$('<tr></tr>');
        var a1=aux[j].alpha;
        if (a1){
            alpha.forEach((r)=>{
                if (r.name == a1){
                    var a2= r.area_of_concern;
                    area_of_concern.forEach((h)=>{
                        if (h.name == a2) {
                            color= h.color;
                        }
                    });
                }
            });
            colorAtr= 'background-color: '+color;
            var td=$("<td></td>").append("<p></p>").html(a1).addClass(color).attr('style',colorAtr);
            row.append(td);
        }
        else{
            var td;
            row.append($("<td></td>").append("<p></p>"));
        }

        var c1=aux[j].capability.activity;
        if (c1) {
            activity.forEach((r) => {
                if (r.name == c1) {
                    var c2 = r.area_of_concern;
                    area_of_concern.forEach((h) => {
                        if (h.name == c2) {
                            color = h.color;
                        }
                    });
                }
            });
            colorAtr = 'background-color: ' + color;
            td = $("<td></td>").append("<p></p>").html(c1).addClass(color).attr('style', colorAtr);
            row.append(td);
        }
        else{
            row.append($("<td></td>").append("<p></p>"));
        }

        var comp1=aux[j].capability.competency;
        if (comp1) {
            competency.forEach((r) => {
                if (r.name == comp1) {
                    var comp2 = r.area_of_concern;
                    area_of_concern.forEach((h) => {
                        if (h.name == comp2) {
                            color = h.color;
                        }
                    });
                }
            });
            colorAtr = 'background-color: ' + color;
            td = $("<td></td>").append("<p></p>").html(comp1).addClass(color).attr('style', colorAtr);
            row.append(td);
        }
        else{
            row.append($("<td></td>").append("<p></p>"));
        }

        td=$("<td class=''></td>").append("<p></p>").html(aux[j].composition.method);
        row.append(td);

        var p1=aux[j].composition.practice;
        if (p1) {
            practice.forEach((r) => {
                if (r.name == p1) {
                    var p2 = r.area_of_concern;
                    area_of_concern.forEach((h) => {
                        if (h.name == p2) {
                            color = h.color;
                        }
                    });
                }
            });
            colorAtr = 'background-color: ' + color;
            td = $("<td class=''></td>").append("<p></p>").html(p1).addClass(color).attr('style', colorAtr);
            row.append(td);
        }
        else{
            row.append($("<td></td>").append("<p></p>"));
        }

        var r1=aux[j].responsibility.role;
        if (r1) {
            role.forEach((r) => {
                if (r.name == r1) {
                    var r2 = r.area_of_concern;
                    area_of_concern.forEach((h) => {
                        if (h.name == r2) {
                            color = h.color;
                        }
                    });
                }
            });
            colorAtr = 'background-color: ' + color;
            td = $("<td class=''></td>").append("<p></p>").html(r1).addClass(color).attr('style', colorAtr);
            row.append(td);
        }
        else{
            row.append($("<td></td>").append("<p></p>"));
        }

        td=$("<td class=''></td>").append("<p></p>").html(aux[j].responsibility.work_product.name);
        row.append(td);

        td=$("<td class=''></td>").append($("<a target='_blank'></a>").html(aux[j].responsibility.work_product.image).attr('href','work_product/'+aux[j].responsibility.work_product.image));
        row.append(td);

        var s1=aux[j].sequence.activity_space;
        if (s1) {
            activity_space.forEach((r) => {
                if (r.name == s1) {
                    var s2 = r.area_of_concern;
                    area_of_concern.forEach((h) => {
                        if (h.name == s2) {
                            color = h.color;
                        }
                    });
                }
            });
            colorAtr = 'background-color: ' + color;
            td = $("<td class=''></td>").append("<p></p>").html(s1).addClass(color).attr('style', colorAtr);
            row.append(td);
        }
        else{
            row.append($("<td></td>").append("<p></p>"));
        }

        var ph1=aux[j].sequence.phase;
        if (ph1) {
            phase.forEach((r) => {
                if (r.name == ph1) {
                    var ph2 = r.area_of_concern;
                    area_of_concern.forEach((h) => {
                        if (h.name == ph2) {
                            color = h.color;
                        }
                    });
                }
            });
            colorAtr = 'background-color: ' + color;
            td = $("<td class=''></td>").append("<p></p>").html(ph1).addClass(color).attr('style', colorAtr);
            row.append(td);
        }
        else{
            row.append($("<td></td>").append("<p></p>"));
        }

        table.append(row);
    };

    but.hide();
} // 11. manifest
