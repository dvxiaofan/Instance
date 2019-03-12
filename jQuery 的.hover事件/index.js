/*
 * @Author: ZhangYanKun 
 * @Date: 2019-03-12 10:26:29 
 * @Last Modified by: ZhangYanKun
 * @Last Modified time: 2019-03-12 14:55:26
 */


var differentIndex = 999;

$(document).ready(function () {
    for (let i = 0; i < $('.item').length; i++) {
        const element = $('.item')[i].id;
        $("#" + element).hover(function () {
            openMsg(element);
        }, function () {
            layer.close(differentIndex);
        });
    }
});

function openMsg(eleId) {
    
    let id = "#" + eleId;
    let showTitle = $(id)[0].innerText;

    differentIndex = layer.tips(showTitle, id, {
        tips: [1, '#888'],
        time: 30000
    });
}