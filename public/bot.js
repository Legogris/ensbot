function getNameSuggestions() {
    // TODO: Get previously started or bidded auctions
    return [];
}
// Kudos to @makoto
function browse(command, params){
  var host = 'http://192.168.43.94:3000/'
  // var host = 'http://genesis-token-tracker.s3-website-us-west-2.amazonaws.com/'
  var url = host + command + '?';
  for(var key in params) {
      url += key + '=' + params[key] + '&';
  }
  return {
    title: 'Browser',
    dynamicTitle: true,
    singleLineInput: true,
    actions: [ { type: status.actions.FULLSCREEN } ],
    markup: status.components.bridgedWebView(url)
  };
}

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

status.command({
     name: 'check',
     title: 'check',
     description: 'Check the status of a domain',
     color: 'black',
     params: [{
        name: 'domain',
        type: status.types.TEXT,
        placeholder: 'vitalik.eth'
      }],
     preview: function (params) {
       status.sendMessage('Searching for your domain ' + params.domain + '...');
       return(browse('check', { domain: params.domain }));
     }
 });

status.command({
     name: 'startAuction',
     title: 'Start auction',
     description: 'Start auction for name',
     color: 'black',
     params: [{
        name: 'domain',
        type: status.types.TEXT,
        placeholder: 'vitalik.eth'
      }],
     preview: function (params) {
       status.sendMessage('Starting auction for domain' + params.domain + '...');
       return(browse('startauction', { domain: params.domain }));
     }
 });

status.command({
     name: 'bid',
     title: 'Bid on auction',
     description: 'Bid on name',
     color: 'black',
     params: [{
        name: 'domain',
        type: status.types.TEXT,
        suggestions: getNameSuggestions(),
        placeholder: 'vitalik.eth'
      }, {
        name: 'price',
        type: status.types.NUMBER,
        placeholder: 1
      }],
     preview: function (params) {
       status.sendMessage('Bidding ' + params.price + ' for ' + params.domain + '...');
       return(browse('bid', { domain: params.domain, price: params.price }));
     }
 });
 