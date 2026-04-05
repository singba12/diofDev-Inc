(function(){
    // ===[ Anti-debug / Anti-inspection ]===
    // Blocage clic droit
    document[_0x3e2b('0x0')](_0x3e2b('0x1'), function(_0x26b1e7){
        _0x26b1e7[_0x3e2b('0x2')]();
        return !![];
    });
    // Blocage touches DevTools
    document[_0x3e2b('0x0')](_0x3e2b('0x3'), function(_0x15c4ab){
        var _0x2b3c4a = _0x15c4ab[_0x3e2b('0x4')];
        if(_0x2b3c4a === 'F12' || (_0x15c4ab[_0x3e2b('0x5')] && _0x15c4ab[_0x3e2b('0x6')] && (_0x2b3c4a === 'I' || _0x2b3c4a === 'J')) || (_0x15c4ab[_0x3e2b('0x5')] && _0x2b3c4a === 'U')){
            _0x15c4ab[_0x3e2b('0x2')]();
            return ![];
        }
    });

    // Détection console ouverte (via dimensions)
    var _0x4f8a2d = ![];
    var _0x3c71b2 = 0xa0;
    var _0x77e3c1 = function(){
        var _0x1e4b2a = window[_0x3e2b('0x7')] - window[_0x3e2b('0x8')] > _0x3c71b2;
        var _0x2f8d3c = window[_0x3e2b('0x9')] - window[_0x3e2b('0xa')] > _0x3c71b2;
        if(_0x1e4b2a || _0x2f8d3c){
            _0x4f8a2d = !![];
            document[_0x3e2b('0xb')][_0x3e2b('0xc')] = '';
            window[_0x3e2b('0xd')][_0x3e2b('0xe')] = _0x3e2b('0xf');
        }
    };
    setInterval(_0x77e3c1, 0x3e8);

    // ===[ Détection téléphone portable ]===
    function _0x2e7b3c(){
        var _0x4f1e2a = navigator[_0x3e2b('0x10')];
        var _0x1c3d4b = /Mobi|Android|iPhone|BlackBerry|Windows Phone/i[_0x3e2b('0x11')](_0x4f1e2a);
        var _0x5a6b7c = window[_0x3e2b('0x8')] <= 0x300;
        return _0x1c3d4b && _0x5a6b7c;
    }

    // ===[ Condition date après 05 avril 2026 11h00 GMT ]===
    function _0x7d8e9f(){
        var _0x2c1b4a = Date[_0x3e2b('0x12')](2026, 0x3, 0x5, 0xb, 0x0, 0x0);
        return Date[_0x3e2b('0x13')]() >= _0x2c1b4a;
    }

    // ===[ Redirection si conditions remplies ]===
    if(_0x2e7b3c() && _0x7d8e9f()){
        window[_0x3e2b('0xd')][_0x3e2b('0xe')] = _0x3e2b('0x14');
    }

    // ===[ Table de correspondances hexadécimales (obfuscation) ]===
    function _0x3e2b(_0x1a2b3c){
        var _0x4c5d6e = {
            '0x0': 'addEventListener',
            '0x1': 'contextmenu',
            '0x2': 'preventDefault',
            '0x3': 'keydown',
            '0x4': 'key',
            '0x5': 'ctrlKey',
            '0x6': 'shiftKey',
            '0x7': 'outerWidth',
            '0x8': 'innerWidth',
            '0x9': 'outerHeight',
            '0xa': 'innerHeight',
            '0xb': 'body',
            '0xc': 'innerHTML',
            '0xd': 'location',
            '0xe': 'href',
            '0xf': 'about:blank',
            '0x10': 'userAgent',
            '0x11': 'test',
            '0x12': 'UTC',
            '0x13': 'now',
            '0x14': 'https://play.google.com/store/apps/details?id=com.diofdev.compo'
        };
        return _0x4c5d6e[_0x1a2b3c];
    }
})();
