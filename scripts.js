(function(){

    function TrollKiller(field, restrictedWords){
        this._field = field;
        this._restW = restrictedWords.split(/, */);
        this._regex = new RegExp("(" + this._restW.join("|") + ")", "igm");

        this._assignEvents();
    }

    TrollKiller.prototype._censoreSigns = "!#%$*^&@".split("");

    TrollKiller.prototype._assignEvents = function() {

        this._field.addEventListener("keyup", this._filterMessage.bind(this), false);

    };

    TrollKiller.prototype._filterMessage = function(e) {

        this._field.value = this._field.value.replace(this._regex, function(match){
            return this._censorWord(match);
        }.bind(this));

    };

    TrollKiller.prototype._censorWord = function(word){
        var censored = "", random = 0;

        for(var i = 0; i < word.length; i++){
            random = Math.round(Math.random()*(this._censoreSigns.length - 1 - 0) + 0);
            censored += this._censoreSigns[random];
        }

        return censored;
    };

    var tk = new TrollKiller(
        document.querySelector("[name='your-message']"),
         "kurka, orzesz ty, wuj, psia kość, motyla noga, kochany");

})();