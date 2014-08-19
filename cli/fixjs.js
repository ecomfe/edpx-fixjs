/***************************************************************************
 *
 * Copyright (c) 2014 Baidu.com, Inc. All Rights Reserved
 * $Id$
 *
 **************************************************************************/

/**
 * edp fix js style command
 * @author shaoshuai02@baidu.com
 * @version $Revision$
 * @description
 */
exports.cli = {
    options: [
        'replace', // replace source file directly, default false
        'clean'
    ],
    description: 'edp fix js style',
    main: function (args, opts) {
        var fs = require('fs');

        // edp fixjs clean tool to remove *.formatted.js
        if (opts.clean) {
            require('../lib/util').getCandidates([], [
                '**/*.formatted.js',
                '!**/{output,test,node_modules,asset,dist,release,doc,dep,report}/**'
            ]).forEach(function (path) {
                console.log(path + ' removed.');
                fs.unlinkSync(path);
            });
        }
        else {
            var patterns = [
                '**/*.js',
                '!**/{output,test,node_modules,asset,dist,release,doc,dep,report}/**'
            ];
            var candidates = require('../lib/util').getCandidates(args, patterns);
            if (candidates.length) {
                candidates.forEach(function (path) {
                    var log = path;
                    var sourceCode = require('fs').readFileSync(path, 'utf-8');
                    var fixedCode = require('fixmyjs').fix(sourceCode, jshintConfig);
                    var formattedCode = require('jformatter').format(fixedCode);
                    if (!opts.replace) {
                        path = path.substr(0, path.length - 2) + 'formatted.js';
                        log += ' --> ' + path;
                    }
                    fs.writeFileSync(path, formattedCode);
                    console.log(log + ' formatted.');
                });
            }
        }
    }
};

/* jslint quotmark: true */
var jshintConfig = {
    "indent": 4, //fixmyjs 依赖这个配置，不然生成的代码indent == 2
    "bitwise": false,
    "camelcase": true,
    "curly": true,
    "es3": true,
    "eqeqeq": false,
    "forin": false,
    "immed": true,
    "latedef": false,
    "newcap": true,
    "noarg": false,
    "noempty": true,
    "nonew": true,
    "plusplus": false,
    "quotmark": "single",
    "regexp": false,
    "undef": false,
    "unused": "vars",
    "strict": false,
    "trailing": false,
    "maxparams": 20,
    "maxdepth": 6,
    "maxlen": 120,

    "asi": false,
    "boss": false,
    "debug": false,
    "eqnull": true,
    "esnext": false,
    "evil": true,
    "expr": true,
    "funcscope": false,
    "globalstrict": false,
    "iterator": false,
    "lastsemic": false,
    "laxbreak": true,
    "laxcomma": false,
    "loopfunc": false,
    "multistr": false,
    "onecase": false,
    "proto": false,
    "regexdash": false,
    "scripturl": false,
    "smarttabs": false,
    "shadow": true,
    "sub": true,
    "supernew": false,
    "validthis": true,

    "browser": true,
    "couch": false,
    "devel": true,
    "dojo": false,
    "jquery": true,
    "mootools": false,
    "node": false,
    "nonstandard": false,
    "prototypejs": false,
    "rhino": false,
    "wsh": false,

    "nomen": false,
    "onevar": false,
    "passfail": false,
    "white": false
};
/* vim: set ts=4 sw=4 sts=4 tw=100: */
