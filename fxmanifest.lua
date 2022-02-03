fx_version 'cerulean'

game 'gta5'

author 'Atlas Developers'
description 'Atl Loading Screen'

loadscreen 'html/loading.html'

files { 
	'html/loading.html',
	'html/assets/img/bg/*.png',
	'html/assets/img/bg/*.jpg',
	'html/assets/img/*.png',
	'html/assets/img/*.jpg',
	'html/assets/css/*.css',
	'html/assets/js/*.js',
	'html/assets/audio/*.mp3',
	'html/assets/audio/*.mp4'
}


client_scripts {
	'Client/*.lua'
}

server_scripts {
	'Server/*.lua'
}

shared_scripts {
	'Config.lua'
}