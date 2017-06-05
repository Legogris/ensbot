status.addListener("init", 
 function (params, context) {
    status.sendMessage("Hey, msssan deu!");
    return {"text-message": "Hey, msssan deu!"};
});
status.addListener("on-message-send", function (params, context) {
    status.response({
        name: "confirmation-code",
        color: "#7099e6",
        description: 'xyz',
        sequentialParams: true,
        params: [{
            name: "code",
            type: status.types.NUMBER
        }],
        validator: function (params) {
            if (!/^[\d]{4}$/.test(params.code)) {
                var error = status.components.validationMessage(
                    I18n.t('confirm_validation_title'),
                    I18n.t('confirm_validation_description')
                );

                return {markup: error};
            }
        }
    });
    status.sendMessage("Hey, msssan deu!");
    const result = {
            err: null,
            data: null,
            messages: []
        };

    try {
        result["text-message"] = "hihihhhiikkki";
    } catch (e) {
        result.err = e;
    }

    return result;
});
