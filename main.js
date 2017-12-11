/*
* @Author: Marte
* @Date:   2017-12-11 17:04:02
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-11 18:00:11
*/

'use strict';

$(document).ready(function(){
    $(".sz_1").click(function(){
        $(".nr_1").css("display","none");
        $(".nr_1").css("position","absolute");
        $(".ship").css("display","inline");
    })

    $(".sz_2").click(function(){
        $(".nr_1").css("display","none");
        $(".nr_1").css("position","absolute");
        $(".ship").css("display","inline");
        $(".wz").attr("src",'http://player.youku.com/embed/XMzE1MTk3ODY3Ng==');
    })

    $(".sz_3").click(function(){
        $(".nr_1").css("display","none");
        $(".nr_1").css("position","absolute");
        $(".ship").css("display","inline");
        $(".wz").attr("src",'http://player.youku.com/player.php/sid/XMzE4MDM2NTgwNA==/v.swf');
    })
    $(".sz").click(function(){
        $(".nr_1").css("display","inline");
        $(".nr_1").css("position","static");
        $(".ship").css("display","none");
    })
})
// $(document).ready(function(){
//     $(".szcaidan").click(function(){
//         $(".nr_1").css("display","inline");
//         $(".nr_1").css("position","static");
//         $(".ship").css("display","none");

// })