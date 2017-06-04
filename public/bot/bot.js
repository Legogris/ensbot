status.addListener("on-message-send", function (params, context) {
    var result = {
            err: null,
            data: null,
            messages: []
        };

    try {
        result["text-message"] = "fu";
    } catch (e) {
        result.err = e;
    }

    return result;
});
