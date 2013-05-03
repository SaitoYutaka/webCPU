/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'memory0',
            type:'rect',
            rect:['319px','178px','93px','35px','auto','auto'],
            fill:["rgba(254,116,116,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'memory0Copy',
            type:'rect',
            rect:['319px','178px','93px','35px','auto','auto'],
            fill:["rgba(254,116,116,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'memory1',
            type:'rect',
            rect:['319px','213px','93px','35px','auto','auto'],
            fill:["rgba(62,200,255,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'memory1Copy',
            type:'rect',
            rect:['319px','213px','93px','35px','auto','auto'],
            fill:["rgba(62,200,255,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'memory2',
            type:'rect',
            rect:['319px','248px','93px','35px','auto','auto'],
            fill:["rgba(159,255,75,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'memory2Copy',
            type:'rect',
            rect:['319px','248px','93px','35px','auto','auto'],
            fill:["rgba(159,255,75,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Frame',
            type:'rect',
            rect:['315px','135px','93px','35px','auto','auto'],
            fill:["rgba(254,116,116,0.00)"],
            stroke:[4,"rgba(0,0,0,1)","solid"]
         },
         {
            id:'CPU',
            type:'rect',
            rect:['104px','135px','93px','35px','auto','auto'],
            fill:["rgba(254,116,116,0.00)"],
            stroke:[4,"rgba(0,0,0,1)","solid"]
         },
         {
            id:'Text',
            type:'text',
            rect:['104px','97px','101px','35px','auto','auto'],
            text:"CPU",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', \'メイリオ\', Meiryo, \'ＭＳＰゴシック\', MS PGothic, sans-serif',24,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'Text2',
            type:'text',
            rect:['319px','100px','93px','30px','auto','auto'],
            text:"Memory",
            align:"center",
            font:['\'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, Meiryo, ＭＳＰゴシック, \'MS PGothic\', sans-serif',24,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'koshigaya0_001',
            type:'image',
            rect:['-60px','200px','200px','200px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"koshigaya0_001.png",'0px','0px']
         },
         {
            id:'koshigaya1_001',
            display:'none',
            type:'image',
            rect:['-60px','200px','200px','200px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"koshigaya1_001.png",'0px','0px']
         },
         {
            id:'hukidasi0_001',
            type:'image',
            rect:['84px','192px','95px','41px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"hukidasi0_001.png",'0px','0px']
         },
         {
            id:'hukidasi1_001',
            display:'none',
            type:'image',
            rect:['84px','192px','95px','41px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"hukidasi1_001.png",'0px','0px']
         },
         {
            id:'cimi0_001',
            type:'image',
            rect:['166px','223px','200px','200px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"cimi0_001.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_memory0Copy}": [
            ["color", "background-color", 'rgba(254,116,116,1)'],
            ["style", "height", '35px'],
            ["style", "top", '178px'],
            ["style", "left", '319px'],
            ["style", "width", '93px']
         ],
         "${_Text2}": [
            ["style", "top", '100px'],
            ["style", "left", '319px']
         ],
         "${_hukidasi0_001}": [
            ["style", "top", '192px'],
            ["style", "left", '84px'],
            ["style", "display", 'block']
         ],
         "${_hukidasi1_001}": [
            ["style", "top", '192px'],
            ["style", "left", '84px'],
            ["style", "display", 'none']
         ],
         "${_memory0}": [
            ["style", "top", '178px'],
            ["style", "left", '319px'],
            ["color", "background-color", 'rgba(254,116,116,1.00)']
         ],
         "${_koshigaya1_001}": [
            ["style", "top", '200px'],
            ["style", "left", '-60px'],
            ["style", "display", 'none']
         ],
         "${_cimi0_001}": [
            ["style", "left", '166px'],
            ["style", "top", '223px']
         ],
         "${_memory1Copy}": [
            ["style", "top", '213px'],
            ["style", "height", '35px'],
            ["color", "background-color", 'rgba(62,200,255,1.00)'],
            ["style", "left", '319px'],
            ["style", "width", '93px']
         ],
         "${_memory2Copy}": [
            ["style", "top", '248px'],
            ["style", "height", '35px'],
            ["color", "background-color", 'rgba(159,255,75,1)'],
            ["style", "left", '319px'],
            ["style", "width", '93px']
         ],
         "${_CPU}": [
            ["color", "background-color", 'rgba(254,116,116,0)'],
            ["style", "top", '135px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '104px'],
            ["style", "border-width", '4px']
         ],
         "${_Text}": [
            ["style", "top", '97px'],
            ["style", "left", '104px'],
            ["style", "text-align", 'center']
         ],
         "${_koshigaya0_001}": [
            ["style", "top", '200px'],
            ["style", "left", '-60px'],
            ["style", "display", 'block']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '400px'],
            ["style", "width", '550px']
         ],
         "${_Frame}": [
            ["color", "background-color", 'rgba(254,116,116,0.00)'],
            ["style", "border-width", '4px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '315px'],
            ["style", "top", '135px']
         ],
         "${_memory2}": [
            ["color", "background-color", 'rgba(159,255,75,1.00)'],
            ["style", "left", '319px'],
            ["style", "top", '248px']
         ],
         "${_memory1}": [
            ["color", "background-color", 'rgba(62,200,255,1.00)'],
            ["style", "left", '319px'],
            ["style", "top", '213px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 7000,
         autoPlay: true,
         labels: {
            "loop": 0
         },
         timeline: [
            { id: "eid88", tween: [ "style", "${_hukidasi1_001}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid91", tween: [ "style", "${_hukidasi1_001}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid92", tween: [ "style", "${_hukidasi1_001}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid95", tween: [ "style", "${_hukidasi1_001}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid96", tween: [ "style", "${_hukidasi1_001}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid99", tween: [ "style", "${_hukidasi1_001}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
            { id: "eid55", tween: [ "style", "${_memory2Copy}", "width", '62px', { fromValue: '93px'}], position: 6000, duration: 367, easing: "easeOutBounce" },
            { id: "eid56", tween: [ "style", "${_memory2Copy}", "width", '93px', { fromValue: '62px'}], position: 6367, duration: 383, easing: "easeOutBounce" },
            { id: "eid59", tween: [ "style", "${_memory2Copy}", "width", '93px', { fromValue: '93px'}], position: 7000, duration: 0, easing: "easeOutBounce" },
            { id: "eid35", tween: [ "style", "${_memory1Copy}", "left", '223px', { fromValue: '319px'}], position: 4000, duration: 388, easing: "easeOutBounce" },
            { id: "eid37", tween: [ "style", "${_memory1Copy}", "left", '108px', { fromValue: '223px'}], position: 4388, duration: 362, easing: "easeOutBounce" },
            { id: "eid26", tween: [ "style", "${_memory0Copy}", "width", '59px', { fromValue: '93px'}], position: 2000, duration: 366 },
            { id: "eid30", tween: [ "style", "${_memory0Copy}", "width", '97px', { fromValue: '59px'}], position: 2366, duration: 384 },
            { id: "eid15", tween: [ "style", "${_memory0Copy}", "top", '174px', { fromValue: '178px'}], position: 2000, duration: 366, easing: "easeOutBounce" },
            { id: "eid28", tween: [ "style", "${_memory0Copy}", "top", '139px', { fromValue: '174px'}], position: 2366, duration: 384, easing: "easeOutBounce" },
            { id: "eid36", tween: [ "style", "${_memory1Copy}", "top", '200px', { fromValue: '213px'}], position: 4000, duration: 388, easing: "easeOutBounce" },
            { id: "eid38", tween: [ "style", "${_memory1Copy}", "top", '139px', { fromValue: '200px'}], position: 4388, duration: 362, easing: "easeOutBounce" },
            { id: "eid79", tween: [ "style", "${_koshigaya0_001}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid81", tween: [ "style", "${_koshigaya0_001}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid82", tween: [ "style", "${_koshigaya0_001}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid85", tween: [ "style", "${_koshigaya0_001}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid86", tween: [ "style", "${_koshigaya0_001}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
            { id: "eid1", tween: [ "style", "${_Frame}", "left", '315px', { fromValue: '315px'}], position: 1000, duration: 0 },
            { id: "eid4", tween: [ "style", "${_Frame}", "left", '315px', { fromValue: '315px'}], position: 3000, duration: 0 },
            { id: "eid7", tween: [ "style", "${_Frame}", "left", '315px', { fromValue: '315px'}], position: 5000, duration: 0 },
            { id: "eid89", tween: [ "style", "${_hukidasi0_001}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid90", tween: [ "style", "${_hukidasi0_001}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid93", tween: [ "style", "${_hukidasi0_001}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid94", tween: [ "style", "${_hukidasi0_001}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid97", tween: [ "style", "${_hukidasi0_001}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid98", tween: [ "style", "${_hukidasi0_001}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
            { id: "eid77", tween: [ "style", "${_koshigaya1_001}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid78", tween: [ "style", "${_koshigaya1_001}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid80", tween: [ "style", "${_koshigaya1_001}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid83", tween: [ "style", "${_koshigaya1_001}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid84", tween: [ "style", "${_koshigaya1_001}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid87", tween: [ "style", "${_koshigaya1_001}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
            { id: "eid39", tween: [ "style", "${_memory1Copy}", "height", '18px', { fromValue: '35px'}], position: 4000, duration: 388, easing: "easeOutBounce" },
            { id: "eid41", tween: [ "style", "${_memory1Copy}", "height", '35px', { fromValue: '18px'}], position: 4388, duration: 362, easing: "easeOutBounce" },
            { id: "eid48", tween: [ "style", "${_memory2Copy}", "top", '211px', { fromValue: '248px'}], position: 6000, duration: 367, easing: "easeOutBounce" },
            { id: "eid52", tween: [ "style", "${_memory2Copy}", "top", '139px', { fromValue: '211px'}], position: 6367, duration: 383, easing: "easeOutBounce" },
            { id: "eid58", tween: [ "style", "${_memory2Copy}", "top", '139px', { fromValue: '139px'}], position: 7000, duration: 0, easing: "easeOutBounce" },
            { id: "eid3", tween: [ "style", "${_Frame}", "top", '174px', { fromValue: '135px'}], position: 1000, duration: 1000 },
            { id: "eid6", tween: [ "style", "${_Frame}", "top", '209px', { fromValue: '174px'}], position: 3000, duration: 1000 },
            { id: "eid9", tween: [ "style", "${_Frame}", "top", '244px', { fromValue: '209px'}], position: 5000, duration: 1000 },
            { id: "eid47", tween: [ "style", "${_memory2Copy}", "left", '222px', { fromValue: '319px'}], position: 6000, duration: 367, easing: "easeOutBounce" },
            { id: "eid51", tween: [ "style", "${_memory2Copy}", "left", '108px', { fromValue: '222px'}], position: 6367, duration: 383, easing: "easeOutBounce" },
            { id: "eid57", tween: [ "style", "${_memory2Copy}", "left", '108px', { fromValue: '108px'}], position: 7000, duration: 0, easing: "easeOutBounce" },
            { id: "eid53", tween: [ "style", "${_memory2Copy}", "height", '17px', { fromValue: '35px'}], position: 6000, duration: 367, easing: "easeOutBounce" },
            { id: "eid54", tween: [ "style", "${_memory2Copy}", "height", '35px', { fromValue: '17px'}], position: 6367, duration: 383, easing: "easeOutBounce" },
            { id: "eid60", tween: [ "style", "${_memory2Copy}", "height", '35px', { fromValue: '35px'}], position: 7000, duration: 0, easing: "easeOutBounce" },
            { id: "eid14", tween: [ "style", "${_memory0Copy}", "left", '231px', { fromValue: '319px'}], position: 2000, duration: 366, easing: "easeOutBounce" },
            { id: "eid27", tween: [ "style", "${_memory0Copy}", "left", '108px', { fromValue: '231px'}], position: 2366, duration: 384, easing: "easeOutBounce" },
            { id: "eid25", tween: [ "style", "${_memory0Copy}", "height", '15px', { fromValue: '35px'}], position: 2000, duration: 366 },
            { id: "eid29", tween: [ "style", "${_memory0Copy}", "height", '35px', { fromValue: '15px'}], position: 2366, duration: 384 },
            { id: "eid40", tween: [ "style", "${_memory1Copy}", "width", '63px', { fromValue: '93px'}], position: 4000, duration: 388, easing: "easeOutBounce" },
            { id: "eid42", tween: [ "style", "${_memory1Copy}", "width", '97px', { fromValue: '63px'}], position: 4388, duration: 362, easing: "easeOutBounce" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-86911870");
