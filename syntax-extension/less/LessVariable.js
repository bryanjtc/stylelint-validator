var TYPE = require('css-tree').Tokenizer.TYPE;
var ATKEYWORD = TYPE.AtKeyword;

module.exports = {
    name: 'LessVariable',
    structure: {
        name: 'Identifier'
    },
    parse: function LessVariable() {
        var start = this.scanner.tokenStart;

        this.scanner.eat(ATKEYWORD);

        return {
            type: 'LessVariable',
            loc: this.getLocation(start, this.scanner.tokenEnd),
            name: this.scanner.substrToCursor(start + 1)
        };
    }
};
