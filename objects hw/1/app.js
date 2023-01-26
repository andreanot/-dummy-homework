const animal = {
    name: "",
    kind: "",
    speak: function(message) {
        console.log(`${this.kind} says: '${message}'`);
    }
};

animal.name = "dog";
animal.kind = "Dog";

animal.speak("Hey bro!!!");