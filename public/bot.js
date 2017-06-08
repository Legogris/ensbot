status.addListener('on-message-send', function (params, context) {
    status.sendMessage('onmessagesend');
    var result = { 
            err: null,
            data: null,
            messages: []
    };  

    try {
        result['text-message'] = 'hello';
    } catch (e) {
        result.err = e;
    }   

    return result;
});
