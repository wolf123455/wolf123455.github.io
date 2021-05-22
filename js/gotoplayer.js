function gotoplayer(video_address){
    var videoObject = {  
    container: '.videosamplex',//��#������������ID����.���򡰡�����������class  
variable: 'player',//�����Ա������ã�ֵ���������new chplayer()�Ķ���  
poster: 'pic/wdm.jpg',  
mobileCkControls: true,//�Ƿ����ƶ��ˣ�����ios����������ʾ������  
mobileAutoFull: false,//���ƶ��˲��ź��Ƿ�ϵͳ���õ�ȫ������  
h5container: '#videoplayer',//h5������ʹ���Զ�������  
video: video_address//��Ƶ��ַ  
};  
var player = new ckplayer(videoObject);  
}