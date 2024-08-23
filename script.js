const doc = document;

// 歌曲信息数组
const songsList = [
    {
        id: 'xxx-01',
        title: '失恋无罪',
        author: '孤独万岁！！',
        path: './music/失恋无罪.mp3',
        bgPath: './image/1.jpg',
        time: 0
    },
    {
        id: 'xxx-02',
        title: '滥俗的歌',
        author: '这是汉堡黄！不是蛋黄堡不是蟹黄堡不是汉堡包',
        path: './music/滥俗的歌.mp3',
        bgPath: './image/2.jpg',
        time: 0
    },
    {
        id: 'xxx-03',
        title: '痴人说梦',
        author: '一曲痴人说梦,道尽天下痴人心',
        path: './music/痴人说梦.mp3',
        bgPath: './image/3.jpg',
        time: 0
    }
];

// DOM元素
const audio = doc.querySelector('#audio'); // 播放器
const bgImg = doc.querySelector('#bg-img'); // 插图
const controls = doc.querySelector('#controls'); // 按钮区域
const title = doc.querySelector('#title'); // 歌曲标题
const author = doc.querySelector('#author'); // 歌曲作者
const playBtn = doc.querySelector('#play'); // 播放按钮
const voiceBtn = doc.querySelector('#voice'); // 声音开关

// 当前播放歌曲
let curSongIndex = 1;
// 是否在播放
let isPlay = false;


// 初始化
function init() {
    render(songsList[curSongIndex]);
}


// 按钮事件
controls.addEventListener('click', e => {
    switch (e.target?.id) {
        case 'list': // 歌曲列表
            // TODO
            break;
        case 'voice': // 声音开关
            voiceControl();
            break;
        case 'pre': // 上一首
            preSong();
            break;
        case 'play': // 播放/暂停
            togglePlay();
            break;
        case 'next': // 下一首
            nextSong();
            break;
        case 'mode': // 播放模式
            // TODO
            break;
        default:
            break;
    }
});

// 播放 / 暂停 切换
function togglePlay() {
    if (!isPlay) {
        // 暂停 图标切换
        songPlay();
    } else {
        // 播放 图标切换
        songPause();
    }
}

// 播放
function songPlay() {
    isPlay = true;
    playBtn.classList.remove('icon-24gf-play');
    playBtn.classList.add('icon-iconstop');
    audio.play();
}

// 暂停
function songPause() {
    isPlay = false;
    playBtn.classList.remove('icon-iconstop');
    playBtn.classList.add('icon-24gf-play');
    audio.pause();
}

// 上一首
function preSong() {
    if (curSongIndex > 0) {
        curSongIndex--;
        render(songsList[curSongIndex]);
        songPlay();
    }
}

// 下一首
function nextSong() {
    if (curSongIndex < songsList.length - 1) {
        curSongIndex++;
        render(songsList[curSongIndex]);
        songPlay();
    }
}

// 声音控制
function voiceControl() {
    if (audio.volume > 0) {
        voiceOff();
    } else {
        voiceOn();
    }
}

// 声音开
function voiceOn() {
    audio.volume = 1;
    voiceBtn.classList.remove('icon-volume-mute-fill');
    voiceBtn.classList.add('icon-shengyin_shiti');
}

// 声音关
function voiceOff() {
    audio.volume = 0;
    voiceBtn.classList.remove('icon-shengyin_shiti');
    voiceBtn.classList.add('icon-volume-mute-fill');
}


// 内容渲染到页面
function render(song) {
    title.innerHTML = song.title;
    author.innerHTML = song.author;
    bgImg.src = song.bgPath; // 插图
    audio.volume = 1; // 音量 0 ~ 1
    audio.src = song.path; // 音乐资源路径
}


init();