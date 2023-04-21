function registValidate() {
    $("#add_member_form").validate({
        rules: {
            account: {
                required: true,
                rangelength: [2, 15]

            },
            name: {
                required: true,
                rangelength: [2, 15],
            },

            gender: {
                required: true,
                minlength: 1
            },
            birthday: {
                required: true,
                date: true
            },
            email: {
                required: true,
                email: true,
                rangelength: [3, 40]
            },
            remark: {
                require: false,
            }
        },
        messages: {
            account: {
                required: "帳號為必填",
                rangelength: $.validator.format("帳號必須 1 到 15 個字元")
            },
            name: {
                required: "姓名為必填",
                rangelength: $.validator.format(`姓名必須 1 到 15 個字元`)
            },

            birthday: {
                required: "生日為必填",
                date: $.validator.format(`生日格式錯誤`)
            },
            email: {
                required: "電子信箱為必填",
                rangelength: $.validator.format(`電子信箱必須 3 到 30 個字元`),
            },
            remark: {

            }
        }
    })

}


