/**
 * 回答页
 */

$(function(){
  if(pageIs.Answer){

var $lblQuestionMeta=$('#zh-question-meta-wrap')//question_meta
;

    var $questionWrap=$('#zh-question-meta-wrap');
    $questionWrap.children('.panel-container').bind('DOMNodeInserted',function(event){
        processComment($(event.target));
    });
    if(izhRightComment){
        $questionWrap.children('.meta-item[name=addcomment]')
        	.css({'display':'block','float':'right','margin-left':7})
        	.insertBefore($questionWrap.children().first());
        if(!$('#izh_QuestionShadow').length){
            $('<div>',{'class':'izh_boxShadow',id:'izh_QuestionShadow'}).css({
                'z-index': '-1'
              , 'position': 'relative'
              , 'top': -25
              , 'margin-left': -32
            }).prependTo('#zh-single-question').hide();
        }   
    }
    processComment($('.zm-comment-box',$questionWrap));

    //process each answer
    var $listAnswers=$('.zm-item-answer','#zh-single-question');
    if($listAnswers&&$listAnswers.length){
        $listAnswers.each(function(i,e){
            processAnswer($(e),null
              , izhAuthorRear
              , false
              , izhRightComment
              , izhQuickBlock);
        });
    }
  }
})