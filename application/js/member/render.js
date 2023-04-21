function create_list_table(userData) {
    $.ajax({
        url: `${API_URL}/getMemberDataField`,
        method: 'GET',
        dataType: 'JSON',

        success: function (res) {
            padding_table(userData, res.field);
        },
        error: function (err) {
            console.log(err)
        }


    });
}


function padding_table(userData, dataField) {
    let table_html = ``;
    table_html += `<table class="table"><tr>`;

    $.each(dataField, function (index, value) {
        table_html += `<td>${dataField[index]}</td>`;
    });
    table_html += `</tr>`;
    if (Array.isArray(userData)) {
        $.each(userData, function (index, value) {
            table_html += `<tr>`;
            $.each(userData[index], function (indexInArray, valueOfElement) {
                if (indexInArray === 'id') table_html += `<input class="form-check-input" type="radio" name="inlineRadioOptions" id="${valueOfElement}" value="option1">`;
                else
                    table_html += `<td>${valueOfElement}</td>`;
            });
            table_html += `</tr>`;

        });
    }
    table_html += `</table>`;
    $(".member_list").html(table_html);
}

function create_pagnition(current_page, total_page) {
    if (current_page > total_page) current_page = total_page;
    else if (current_page < 1) current_page = 1;

    let multiple = Math.floor(current_page / max_page_quantity);
    let start_page = max_page_quantity * multiple + 1;
    let end_page = max_page_quantity * (multiple + 1);

    let paginition_html = `<ul class="pagination">`;
    if (total_page != 1) {
        if (current_page > 1) {
            paginition_html += ` <li class="page-item pre">
                <a class="page-link" tabindex="-1">Previous</a>
            </li>`;
        }
        for (let index = start_page; index <= total_page && index <= end_page; index++) {
            if (index == current_page)
                paginition_html += `<li class="page-item active"><a class="page-link" >${index}</a></li>`;
            else
                paginition_html += `<li class="page-item"><a class="page-link" >${index}</a></li>`;

        }

        if (current_page != total_page) {
            paginition_html += `<li class="page-item next">
                <a class="page-link" href="#">Next</a>
            </li>`;
        }
    }
    else {
        paginition_html += `<li class="page-item active"><a class="page-link">${current_page}</a></li>`;
    }

    paginition_html += `</ul>`;

    $(".paginition").html(paginition_html);
}