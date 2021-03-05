import * as ace from 'ace-builds';

ace.define('ace/snippets/chordpro', ['require', 'exports', 'module'], function (require, exports, module) {

    exports.snippetText = [
        // album tag
        'snippet album',
        '	{album: ${1:title}}',

        // arranger tag
        'snippet arranger',
        '	{arranger: ${1:name}}',

        // artist tag
        'snippet a',
        '	{artist: ${1:name}}',
        'snippet artist',
        '	{artist: ${1:name}}',

        // capo tag
        'snippet capo',
        '	{capo: ${1:5}}',

        // composer tag
        'snippet composer',
        '	{composer: ${1:name}}',

        // copyright tag
        'snippet copyright',
        '	{copyright: ${1:copryight}}',

        // duration tag
        'snippet duration',
        '	{duration: ${1:4}:${2:00}}',

        // key tag
        'snippet k',
        '	{key: ${1:Am}}',
        'snippet key',
        '	{key: ${1:Am}}',

        // lyricist tag
        'snippet lyricist',
        '	{lyricist: ${1:name}}',

        // tempo tag
        'snippet tempo',
        '	{tempo: ${1:120}}',

        // time tag
        'snippet time',
        '	{time: ${1:4}/${2:4}}',

        // title tag
        'snippet t',
        '	{title: ${1:title}}',
        'snippet title',
        '	{title: ${1:title}}',

        // subtitle tag
        'snippet st',
        '	{subtitle: ${1:name}}',
        'snippet subtitle',
        '	{subtitle: ${1:name}}',

        // year tag
        'snippet year',
        '	{year: ${1:2020}}',

        // meta tag
        'snippet meta',
        '	{meta: ${1:label} ${2:value}}',

        // comment tag
        'snippet c',
        '	{comment: ${1:description}}',
        'snippet comment',
        '	{comment: ${1:description}}',

        // chorus block
        'snippet soc',
        '	{start_of_chorus}',
        'snippet eoc',
        '	{end_of_chorus}',
        'snippet chorus',
        '	{start_of_chorus: ${1:Chorus}}',
        '	${2:lyrics}',
        '	{end_of_chorus}',

        // verse block
        'snippet sov',
        '	{start_of_verse}',
        'snippet eov',
        '	{end_of_verse}',
        'snippet verse',
        '	{start_of_verse: ${1:Verse} ${2:1}}',
        '	${3:lyrics}',
        '	{end_of_verse}',

        // bridge block
        'snippet sob',
        '	{start_of_bridge}',
        'snippet eob',
        '	{end_of_bridge}',
        'snippet bridge',
        '	{start_of_bridge: ${1:Bridge}}',
        '	${2:lyrics}',
        '	{end_of_bridge}',
        
        // tabs block
        'snippet sot',
        '	{start_of_tab}',
        'snippet eot',
        '	{end_of_tab}',
        'snippet tab',
        '	{start_of_tab}',
        '	e|-${1:-}---------------------------------|',
        '	B|----------------------------------|',
        '	G|---------------------------------|',
        '	D|----------------------------------|',
        '	A|----------------------------------|',
        '	E|----------------------------------|',
        '	{end_of_tab}',

        // define tag
        'snippet d',
        '	{define: ${1:Am} base-fret ${2:1} frets ${3:0 0 0 0 0 0} fingers ${4:0 0 0 0 0 0}}',
        'snippet define',
        '	{define: ${1:Am} base-fret ${2:1} frets ${3:0 0 0 0 0 0} fingers ${4:0 0 0 0 0 0}}',

        // single-liners
        'snippet cb',
        '	{column_break}',
        'snippet column',
        '	{column_break}',

        // that's all folks!
        // chord usage
        'snippet [',
        '	[${1:Am}]',

    ].join("\n");

    exports.scope = "chordpro";

});