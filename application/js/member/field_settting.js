// 0.div class input-group mb-3
// 1.name
// 2.中文欄位名稱
// 3.input type
// 4.input value
// 5.input attribute ex.radio,checkbox checked

let field_setting = [
    ['input-group mb-3','account','帳號','text'],
    ['input-group mb-3','name','名字','text'],
    ['input-group mb-3','gender','性別','radio',['male','female'],['checked','']],
    ['input-group mb-3','birthday','生日','date'],
    ['input-group mb-3','email','信箱','email'],
    ['input-group mb-3','remark','備註','remark']   
];

function gernerateForm(field_setting){
    let form_html = ``;

    for (let index = 0; index < field_setting.length; index++) {
        const element = field_setting[index];
        
    }

    return form_html ;
}