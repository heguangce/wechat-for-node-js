

/*
 * 文字消息
 */
exports.textTypeMsg = function (outPut) {
	outPut.text("这是文字消息"+this.Content);
};
/*
 * 地理位置消息
 */
exports.locationTypeMsg = function (outPut) {
	outPut.text("这是地理位置消息");
};
/*
 * 链接消息
 */
exports.linkTypeMsg = function (outPut) {
	outPut.text( "这是链接消息");
};
/*
 * 图片消息
 */
exports.imageTypeMsg = function (outPut) {
	outPut.text("这是图片消息");
};
/*
 * 语音消息
 */
exports.voiceTypeMsg = function (outPut) {
	outPut.text("这是语音消息");
};
/*
 * 事件
 */
exports.eventTypeMsg = function (outPut) {
	var event = this.Event;
	//订阅
	if (event == "subscribe") {
		outPut.text("亲爱的面试官，感谢关照小何的微信公众号，小何最近在用Node.js写一个微信机器人介绍本人的简历，");
	}
};
