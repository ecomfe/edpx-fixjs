/**
 * @file lib/main.js ~ 2014/06/27 09:45:40
 * @author leeight(liyubei@baidu.com)
 **/


var fs = require('fs');

var esprima = require('esprima');
var escodegen = require('./escodegen');


1;


/**
 * 按照规范格式化输入的文件
 *
 * @param {string} file 输入文件
 */
function main(file) {
    var code = fs.readFileSync(file, 'utf-8');
    var options = {
        // attachComment: true,
        range: true,
        tokens: true,
        comment: true,
        loc: true,
        tolerant: false
    };
    var tree = esprima.parse(code, options);
    tree = escodegen.attachComments(tree, tree.comments, tree.tokens);

    var outputOptions = {
        comment: true,
        format: {
            indent: {
                adjustMultilineComment: true
            }
        }
    };
    // console.log(JSON.stringify(tree, null, 2));
    console.log(escodegen.generate(tree, outputOptions));
}

var foo = {
  bar: 10,
  k: 20,
  e: 30
};

if (require.main === module) {
    // main('jquery-converted.js');
    //
    // main(__filename);
    //main('a.js');

    console.log(require('./pretty-fast')(fs.readFileSync('./test/a.js', 'utf-8'), {indent:'    '}).code);

    // main('/Volumes/HDD/Users/leeight/local/case/bec-web/src/alarm/CreateModel.js');
}









/* vim: set ts=4 sw=4 sts=4 tw=120: */
