
var model = {
    getDiceNumber: function(k, die) {
        var value = Math.floor((Math.random()*6)+1)
        $(die).text(value)
    }
}

var view = {
    createDice: function() {
        console.log("WAT")
        $('.dice').append('<div class="die">0</div>')
    }
}

var controller = {

}


$(document).ready(function() {
    $('#roller button.add').on('click', view.createDice)

    $('#roller button.roll').on('click', function() {
        $('.die').each(model.getDiceNumber)
    })
})