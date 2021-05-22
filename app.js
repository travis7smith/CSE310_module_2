//(function() {
    
    // Initialize Firesbase
    var config = {
        apiKey: "AIzaSyB33M5jO9g5PssWYXQU7ZWW4RZ0FJ_J8p0",
        authDomain: "test-web-app-a2561.firebaseapp.com",
        databaseURL: "test-web-app-a2561.firebaseio.com",
        projectId: "test-web-app-a2561",
        storageBucket: "test-web-app-a2561.appspot.com",
        messagingSenderId: "759724331279",
        appId: "1:759724331279:web:69332526664a026d93ae7a",
        measurementId: "G-D27H0HSRX4"
    };
    firebase.initializeApp(config);
    var firestore = firebase.firestore();

    const docRef = firestore.doc("samples/sandwichData");
    const outputHeader = document.querySelector("#hotDogOutput");
    const inputTextField = document.querySelector("#latestHotDogStatus");
    const saveButton = document.querySelector("#saveButton");

    saveButton.addEventListener("click", function() {
        const textToSave = inputTextField.value;
        console.log("I am going to save " + textToSave + " to Firestore");
        docRef.set({
            hotDogsStatus: textToSave
        }).then(function()  {
            console.log("Status saved!");
        }).catch(function (error)   {
            console.log("Got an error: ", error);
        })
    })
//})();