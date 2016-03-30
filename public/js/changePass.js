//模块配置信息
require.config({
	//baseUrl: "./",
	paths: {
		//工具模块
		'jquery': 'tools/jquery.min',

		//功能模块
		'config': 'modules/config',
		'cookie': 'modules/cookie',
		'changePassword': 'modules/user'
	},
	waitSeconds: 0
});

require(['changePassword'], function(changePassword){
	changePassword();
});	

