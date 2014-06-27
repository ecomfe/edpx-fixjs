/**
 * @file lib/main.js ~ 2014/06/27 09:45:40
 * @author leeight(liyubei@baidu.com)
 **/
var fs = require('fs');

var esprima = require('esprima');
var escodegen = require('escodegen');

/**
 * 按照规范格式化输入的文件
 *
 * @param {string} file 输入文件
 */
function main(file) {
    var code = fs.readFileSync(file, 'utf-8');
    var options = {
        attachComment: true,
        range: true,
        loc: true,
        tolerant: false
    };
    var tree = esprima.parse(code, options);
    var outputOptions = {
        comment: true,
        format: {
            indent: {
                adjustMultilineComment: true
            },
            json: true,
        }
    };
    console.log(escodegen.generate(tree, outputOptions));
}

if (require.main === module) {
    main(__filename);
}









/* vim: set ts=4 sw=4 sts=4 tw=120: */
