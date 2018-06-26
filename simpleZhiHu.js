// ==UserScript==
// @name            极简知乎
// @version         18.6.26
// @author          hceasy
// @namespace       https://hceasy.com
// @supportURL      https://github.com/hceasy/simpleZhiHu/issues
// @description     有些时候看知乎不是那么方便,你懂的.
// @match           *://www.zhihu.com/question/*
// @run-at          document-idle
// ==/UserScript==
( function() {
	'use strict';
	var fake_title = 'GitHub'
	var fake_icon = 'https://assets-cdn.github.com/favicon.ico'

	//改下标题
	window.document.title = fake_title

	//icon也改了.(IE邪教,凉了,没的治)
	var link = document.querySelector( "link[rel*='icon']" ) || document.createElement( 'link' );
	link.type = 'image/x-icon';
	link.rel = 'shortcut icon';
	link.href = fake_icon;
	document.getElementsByTagName( 'head' )[ 0 ].appendChild( link );

	var cssFix = document.createElement( 'style' )
	//吸底的评论栏
	cssFix.innerHTML += ".RichContent-actions{bottom:auto !important;}"
	//问题评论
	cssFix.innerHTML += ".QuestionHeader-footer{display:none !important;}"
	//顶部关键词
	cssFix.innerHTML += ".QuestionHeader-tags{display:none !important;}"
	//问题相关撑满
	cssFix.innerHTML += ".QuestionHeader-content{width:100% !important;}"
  cssFix.innerHTML += ".QuestionHeader{min-width:auto !important;}"
	//内容图片最大100px
	cssFix.innerHTML += ".origin_image{max-width:100px;}"
  //内容链接去特征
  cssFix.innerHTML += ".LinkCard{margin:auto !important;display:inline !important;}.LinkCard-content{background-color: transparent;}.LinkCard-title{color:#999 !important}"
  // 点赞
  cssFix.innerHTML += ".VoteButton{color:#999 !important;background: none; !important}"
	document.getElementsByTagName( 'head' )[ 0 ].appendChild( cssFix );
	//右侧问题相关
	document.getElementsByClassName( 'QuestionHeader-side' )[ 1 ].style.display = 'none';
	document.getElementsByClassName( 'Question-sideColumn' )[ 0 ].style.display = 'none';
	//顶部问题标题
	document.getElementsByTagName( 'header' )[ 0 ].style.display = 'none';
	//内容撑满
	document.getElementsByClassName( 'Question-main' )[ 0 ].style.width = 'auto'
	document.getElementsByClassName( 'Question-main' )[ 0 ].style.padding = '0'
	document.getElementsByClassName( 'Question-mainColumn' )[ 0 ].style.width = '100%'
	//
} )()
