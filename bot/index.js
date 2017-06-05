
//var registrar = Registrar.at("0x1234...")
//var registry = Registry.at("0x...")
// function checkName(name){
//   return Registrar.entries(web3.sha3('name'))
//     .then(entries =>  entries[0])
//     .then(avail => {
//       switch(avail){
//         case: 0
//           return "available"
//         case: 1
//           return 'up for auction'
//         case: 5
//           return "not yet available for auction"
//         default:
//           return 'name is already taken'
//       }
//     })
// }


status.addListener("on-message-send", function (params, context) {
    var result = {
            err: null,
            data: null,
            messages: []
        };

    try {
        //async request and set result to
        result["text-message"] = "Try one of the commands to check, bid or reveal a domain hello";
    } catch (e) {
        result.err = e;
    }

    return result;
});

status.command({
 name: "hello",
 title: "HelloBot",
 description: "Helps you say hello",
 color: "#7099e6",
 preview: function () {
 return status.components.text({}, "you’re saying hello");
 }
});

// status.command({
//      name: "check",
//      title: "check",
//      description: "Check the status of a domain",
//      color: "black",
//      params: [{
//         name: "domain",
//         type: status.types.TEXT,
//         placeholder: "vitalik.eth"
//       }],
//      preview: function (params) {
//              var text = status.components.text(
//                  {
//                      style: {
//                          marginTop: 20,
//                          marginHorizontal: 0,
//                          fontSize: 15,
//                          fontFamily: "font",
//                          color: "black"
//                      }
//                  }, "Searching for your domain something" + params.domain);
//
//              return {markup: status.components.view({}, [text])};
//          },
//     // onSend: searchDomain
//  });


  // status.command({
  //      name: "greet",
  //      title: "Greeter",
  //      description: "Helps you choose greetings",
  //      color: "#0000ff",
  //      params: [{
  //               name: "greet",
  //               type: status.types.TEXT,
  //               suggestions: helloSuggestions
  //              }]
  //  })
  //
  // function suggestionsContainerStyle(suggestionsCount) {
  //     return {
  //         marginVertical: 1,
  //         marginHorizontal: 0,
  //         keyboardShouldPersistTaps: "always",
  //         height: Math.min(150, (56 * suggestionsCount)),
  //         backgroundColor: "white",
  //         borderRadius: 5,
  //         flexGrow: 1
  //     };
  // }
  // var suggestionSubContainerStyle = {
  //     height: 56,
  //     borderBottomWidth: 1,
  //     borderBottomColor: "#0000001f"
  // };
  //
  // var valueStyle = {
  //     marginTop: 9,
  //     fontSize: 14,
  //     fontFamily: "font",
  //     color: "#000000de"
  // };
  //
  // function helloSuggestions() {
  //     var suggestions = ["Hello", "Goodbye"].map(function(entry) {
  //         return status.components.touchable(
  //             {onPress: status.components.dispatch([status.events.SET_VALUE, entry])},
  //             status.components.view(
  //                 suggestionsContainerStyle,
  //                 [status.components.view(
  //                     suggestionSubContainerStyle,
  //                     [
  //                         status.components.text(
  //                             {style: valueStyle},
  //                             entry
  //                         )
  //                     ]
  //                 )]
  //             )
  //         );
  //     });
  //
  //     // Let's wrap those two touchable buttons in a scrollView
  //     var view = status.components.scrollView(
  //         suggestionsContainerStyle(2),
  //         suggestions
  //     );
  //
  //     // Give back the whole thing inside an object.
  //     return {markup: view};
  // }

//status-dev-cli add '{"whisper-identity": "botler",  "name": "Botler" ,"bot-url": "http://192.168.2.95:8080/bots/bot.js"}' --ip 192.168.2.64

//status-dev-cli watch /Users/jefflau/Projects/dapps/statusTest botler --ip 192.168.2.64
