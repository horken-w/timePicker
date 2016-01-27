var tz='AM', $inputbox=$('.reservationTime');

var setTimearea=function(meridian){
    var $div=$('<div/>'), $input=$('<input type="text"/>');
    var lists=['hour', 'min', 'sec'];
    $div.clone().addClass('timepicker_wrap').insertAfter($inputbox);
    for(var i=0; i< lists.length; i++){
        $div.clone().addClass(lists[i]).appendTo('.timepicker_wrap');
        $div.clone().addClass('btn prev').appendTo('.'+lists[i]);
        $div.clone().addClass('ti_tx').append($input.clone().addClass('in_txt')).appendTo('.'+lists[i]);
        $div.clone().addClass('btn next').appendTo('.'+lists[i]);
    }
    if(meridian){
        $div.clone().addClass('meridian').appendTo('.timepicker_wrap');
        $div.clone().addClass('btn prev').appendTo('.meridian');
        $div.clone().addClass('ti_tx').append($input.clone().addClass('in_txt')).appendTo('.meridian');
        $div.clone().addClass('btn next').appendTo('.meridian');
    }
};
var checkTime=function(tnum, place){
    var $area=$(place.parentElement.parentElement).find('.in_txt'), m, h;
    switch(place.parentElement.className){
        case 'hour':
            if(place.classList[1] === 'prev') {
                h=resuceNum(tnum);
                $area.eq(0).val(addZero(h, true));
            }
            else if(place.classList[1] === 'next'){
                h=addNum(tnum);
                $area.eq(0).val(addZero(h, true));
            }
            break;
        case 'min':
            if(place.classList[1] === 'prev') {
                m=resuceNum(tnum);
                $area.eq(1).val(addZero(m));
            }
            else if(place.classList[1] === 'next'){
                m=addNum(tnum);
                $area.eq(1).val(addZero(m));
            }
            break;
        case 'sec':
            if(place.classList[1] === 'prev') {
                sec=resuceNum(tnum);
                $area.eq(2).val(addZero(sec));
            }
            else if(place.classList[1] === 'next'){
                sec=addNum(tnum);
                $area.eq(2).val(addZero(sec));
            }
            break;
        case 'meridian':
            if($area.eq(3).val() === 'AM') $area.eq(3).val('PM');
            else $area.eq(3).val('AM');
            break;
        default:
            alert('get fail');
    }
};
function addZero(i, hours) {
    if(hours){
        if(i>24) i=1;
        else if (i<1) i=24;
    }
    else{
        if(i>59) i=0;
        else if(i < 1) i=59;
    }
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
function setInit(inputbox){
    var $area=$(inputbox[0].nextElementSibling).find('.in_txt');
    var date=new Date();
    var list=[addZero(date.getHours(), true), addZero(date.getMinutes()), addZero(date.getSeconds())];
    if(inputbox.val().length===0){
        for(var i=0; i<$area.length; i++)	$($area[i]).val(list[i]);
        setValue(inputbox, $area);
    }else {
        var formateTime=inputbox.val().split(':');
        for(var i=0; i<$area.length; i++)   $($area[i]).val(formateTime[i]);
    }
}
function isSetTimeArea(dom){
    return $.contains($('body').find('.timepicker_wrap')[0],dom)|| $inputbox.is(dom);
}
function setValue(inputbox, area){
    area.eq(3).val()===undefined ?
        inputbox.val(area.eq(0).val()+':'+area.eq(1).val()+':'+area.eq(2).val()) :
        inputbox.val(area.eq(0).val()+':'+area.eq(1).val()+':'+area.eq(2).val()+':'+area.eq(3).val());
}
function addNum(i){
    return ++i;
}
function resuceNum(i){
    return --i;
}
function closeIt() {
    $tab=$('.timepicker_wrap');
    $tab.stop().fadeOut(1000);
}

window.onLoad=setTimearea(true); //show merdian or not; Empty to hide merdian select

!function (){
    'use strict';
    var $submit=$('input[type=submit]');
    $inputbox.on('focus', function(){
        var input = $(this),$tab=$(this.nextElementSibling);
        if (input.is($inputbox)) input.select();
        $tab.stop().fadeIn(1000);
        setInit(input);
    });
    $(document).on('click', function(e){
        var _this=e.target;
        setTimeout(function(){
            var focused_element = $(document.activeElement);
            (!focused_element.is(':input') && !isSetTimeArea(_this)) ? closeIt(): '';
        }, 0);
    });
    $('.prev').on('click', function(e){
        var $area=$(this.parentElement.parentElement).find('.in_txt');
        checkTime($(e.target.nextElementSibling.children).val(), e.target);
        setValue($(this.parentNode.parentElement.previousElementSibling), $area);
    });
    $('.next').on('click', function(e){
        var $area=$(this.parentElement.parentElement).find('.in_txt');
        checkTime($(e.target.previousElementSibling.children).val(), e.target);
        setValue($(this.parentNode.parentElement.previousElementSibling), $area);
    });
}(window, document);
