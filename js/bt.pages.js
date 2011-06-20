/**
 * Bruno Tarmann - Pages
 *
 * Depends:
 *	jquery.js
 *
 *	Pages:
 */

bt = window.bui || {};

bui.pages = (function($, h){

	var exports = {};
	
	/**
	* @public: sample_page
	* 
	*/

	exports.sample_page = function(){ }
	
	/**
	* @public: init
	* 
	*/
	exports.init = function(conf){
		var loaderId;
		$(function(){
			loaderId = $("body").attr("id");
			if(loaderId != "init") {
				(window.bui.sites.bf.pages[loaderId] || function(){ return null; })()
			}
		})
		return loaderId;
	}
	
	return exports;
})(jQuery);

bt.pages.init();