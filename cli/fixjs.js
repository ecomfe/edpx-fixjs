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
    options: ['replace'],
    description: 'edp fix js style',
    main: function (args, opts) {
        console.log('Arguments = ' + JSON.stringify(args));
        console.log('Options = ' + JSON.stringify(opts));
        var patterns = [
            '**/*.js',
            '!**/{output,test,node_modules,asset,dist,release,doc,dep,report}/**'
        ];

        var candidates = require('../lib/util').getCandidates(args, patterns);

        if (candidates.length) {
            candidates.forEach(function (path) {
                console.log(require('jformatter').formatFile(path));
            });
        }
    }
};

/* vim: set ts=4 sw=4 sts=4 tw=100: */
