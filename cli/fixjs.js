/***************************************************************************
 *
 * Copyright (c) 2014 Baidu.com, Inc. All Rights Reserved
 * $Id$
 *
 **************************************************************************/

/**
 * seed.js ~ 2014/04/01 11:12:59
 * @author shaoshuai02@baidu.com
 * @version $Revision$
 * @description
 * edp seed
 */
exports.cli = {
    options: [
        'replace'
    ],
    description: 'edp fix js style',
    main: function (args, opts) {
        var fs = require('fs');
        if (args[0] === 'clean') {
            require('../lib/util').getCandidates([], [
                '**/*.formatted.js',
                '!**/{output,test,node_modules,asset,dist,release,doc,dep,report}/**'
            ]).forEach(function (path) {
                console.log(path + ' removed.');
                fs.unlinkSync(path);
            });
        } else {
            var patterns = [
                '**/*.js',
                '!**/{output,test,node_modules,asset,dist,release,doc,dep,report}/**'
            ];
            var candidates = require('../lib/util').getCandidates(args, patterns);
            if (candidates.length) {
                candidates.forEach(function (path) {
                    var log = path;
                    var formattedString = require('jformatter').formatFile(path);
                    if (!opts.replace) {
                        path = path.substr(0, path.length - 2) + 'formatted.js';
                        log += ' --> ' + path;
                    }
                    fs.writeFileSync(path, formattedString);
                    console.log(log + ' formatted.');
                });
            }
        }
    }
};
/* vim: set ts=4 sw=4 sts=4 tw=100: */
