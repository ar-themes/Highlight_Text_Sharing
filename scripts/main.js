require(['twitter']);
require(['facebook']);
require(['email']);
require(['copy']);
require(['linked-in']);
require(['facebook-messenger']);
require(['highlight-share'], function () {
	const highlightShare = require('highlight-share');
	const twitterSharer = require('twitter');
	const facebookSharer = require('facebook');
	const emailSharer = require('email');
	const copySharer = require('copy');
	const linkedInSharer = require('linked-in');
	const facebookMessengerSharer  = require('facebook-messenger');
	const messengerShare = new facebookMessengerSharer.FacebookMessenger('882886091786435');
	const selectionShare = highlightShare({
	    selector: '#shareable',
	    sharers: [twitterSharer, facebookSharer, emailSharer, linkedInSharer, messengerShare, copySharer]
	});
	selectionShare.init();
});