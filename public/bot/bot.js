

status.addListener("on-message-send", function (params, context) {
    var result = {
            err: null,
            data: null,
            messages: []
        };

    try {
        result["text-message"] = "Someone else likes balls";
        if(params.message.toLowerCase() === 'but i like jason') {
          result["text-message"] = "Fuck off"
        } else if(params.message.toLowerCase() === 'fuck you too'){
          result["text-message"] = "You shall die puny human"
        }
    } catch (e) {
        result.err = e;
    }

    return result;
});

status.command({
     name: "check",
     title: "check",
     description: "Check the status of a domain",
     color: "black",
     params: [{
        name: "domain",
        type: status.types.TEXT,
        placeholder: "vitalik.eth"
      }],
     preview: function (params) {
             var text = status.components.text(
                 {
                     style: {
                         marginTop: 20,
                         marginHorizontal: 0,
                         fontSize: 15,
                         fontFamily: "font",
                         color: "black"
                     }
                 }, "Searching for your domain name now");

             return {markup: status.components.view({}, [text])};
         }
    onSend: searchDomain
 });

 function searchDomain(){

 }


  status.command({
       name: "greet",
       title: "Greeter",
       description: "Helps you choose greetings",
       color: "#0000ff",
       params: [{
                name: "greet",
                type: status.types.TEXT,
                suggestions: helloSuggestions
               }]
   })

  function suggestionsContainerStyle(suggestionsCount) {
      return {
          marginVertical: 1,
          marginHorizontal: 0,
          keyboardShouldPersistTaps: "always",
          height: Math.min(150, (56 * suggestionsCount)),
          backgroundColor: "white",
          borderRadius: 5,
          flexGrow: 1
      };
  }
  var suggestionSubContainerStyle = {
      height: 56,
      borderBottomWidth: 1,
      borderBottomColor: "#0000001f"
  };

  var valueStyle = {
      marginTop: 9,
      fontSize: 14,
      fontFamily: "font",
      color: "#000000de"
  };

  function helloSuggestions() {
      var suggestions = ["Hello", "Goodbye"].map(function(entry) {
          return status.components.touchable(
              {onPress: status.components.dispatch([status.events.SET_VALUE, entry])},
              status.components.view(
                  suggestionsContainerStyle,
                  [status.components.view(
                      suggestionSubContainerStyle,
                      [
                          status.components.text(
                              {style: valueStyle},
                              entry
                          )
                      ]
                  )]
              )
          );
      });

      // Let's wrap those two touchable buttons in a scrollView
      var view = status.components.scrollView(
          suggestionsContainerStyle(2),
          suggestions
      );

      // Give back the whole thing inside an object.
      return {markup: view};
  }

//status-dev-cli add '{"whisper-identity": "botler",  "name": "Botler" ,"bot-url": "http://192.168.2.95:8080/bots/bot.js"}' --ip 192.168.2.64

//status-dev-cli watch /Users/jefflau/Projects/dapps/statusTest botler --ip 192.168.2.64
