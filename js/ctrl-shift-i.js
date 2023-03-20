// desativando atalho para inspecionar elementos (ctrl + shift + i)

$(document).keyup(function(evtobj) {
    if (!(evtobj.altKey || evtobj.ctrlKey || evtobj.shiftKey)) {
        if (evtobj.keyCode == 16) {
            return false;
        }

        if (evtobj.keyCode == 17) {
            return false;
        }

        $("body").append(
            evtobj.keyCode + " "
        );
    }
});