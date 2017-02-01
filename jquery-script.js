(function($) {

    $.fn.changeColor = function() {
        this.css("color", "red");
        this.next('p').css("display", "none");
        return this;
    };

    $.fn.resetColor = function() {
        this.css("color", "black");
        this.next('p').css("display", "block");
        return this;
    }

}(jQuery));
$('.myplugin').click(function() {
    $("h1").changeColor();
})
$('.reset').click(function() {
    $("h1").resetColor();
});