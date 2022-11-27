AFRAME.registerComponent("log", {
    schema: {
        message: {type: "string", default: "Hello world"}
    },
    init: function(){
        console.log(this.data.message)
    }
})