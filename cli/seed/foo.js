/***************************************************************************
 * 
 * Copyright (c) 2014 Baidu.com, Inc. All Rights Reserved
 * $Id$ 
 * 
 **************************************************************************/
 
 
 
/**
 * foo.js ~ 2014/04/01 11:10:53
 * @author leeight(liyubei@baidu.com)
 * @version $Revision$ 
 * @description 
 * edp seed foo command
 **/
exports.cli = {
    description: '这个是必须的，用来简单的描述命令所做的事情',
    options: [ 'hello', 'world:' ],
    main: function( args, opts ) {
        console.log( 'Arguments = ' + JSON.stringify( args ) );
        console.log( 'Options = ' + JSON.stringify( opts ) );
    }
}




















/* vim: set ts=4 sw=4 sts=4 tw=100: */
