console.log(">>> 终极融合版：PPT模式 + 进度条 + 烟花 <<<");

// --- 1. 游戏数据 (PPT结构 + 总结语) ---
const StoryData = {
    'school': {
        title: "多彩校园",
        brief: "大南分校的小主持人，从不敢说话到自信主持...",
        img: "assets/school/cover.jpg",
        score: 20,
        // PPT 每一页的内容
        slides: [
            { img: "assets/school/cover.jpg", text: "大家好！我是大南分校的李昱宸。以前的我，一站在大家面前说话心就怦怦跳。" },
            { img: "assets/school/cheer.jpg", text: "为了锻炼胆量，我参加了啦啦操队。虽然训练很累，汗水湿透了衣服，但和小伙伴们一起在阳光下跳跃，让我变得更开朗了！" },
            { img: "assets/school/duty.jpg", text: "我是班级的值周生！每天站在校门口大声对老师和同学们说‘早上好’。原来，声音洪亮地服务大家，是一件这么自豪的事。" },
            { img: "assets/school/reading.jpeg", text: "在书香校园里，我还是‘阅读之星’。书本里的故事给了我智慧，也给了我走上舞台的底气。" },
            { img: "assets/school/star.jpeg", text: "终于，在2025年元旦晚会上，我拿起了话筒，成为了一名自信的小主持人！这就是我的蜕变故事。" }
        ],
        // 最后一页的总结
        summary: "🎉 恭喜！你见证了我的自信蜕变。\n现在的我，敢于在舞台上闪闪发光！"
    },
    'sports': {
        title: "运动小健将",
        brief: "滑雪场上摔倒了怎么办？爬起来继续滑！",
        img: "assets/sports/ski.jpg",
        score: 20,
        slides: [
            { img: "assets/sports/ski.jpg", text: "运动让我明白：害怕没关系，试试就能变厉害！这是我在滑雪场上的帅气瞬间。" },
            { img: "assets/sports/ski2.jpg", text: "记得第一次滑雪时，看着陡峭的坡道，我腿都软了。摔得屁股都要裂开了，但我没有哭，拍拍雪继续滑。" },
            { img: "assets/sports/swim.jpg", text: "在泳池里，我从不敢把头埋进水里，到学会换气，像条小鱼一样自由自在。" },
            { img: "assets/sports/football.jpg", text: "绿茵场上，我是奔跑的足球少年。每一次跌倒后的爬起，都让我变得更加强壮！" }
        ],
        summary: "⚽ 太棒了！你感受到了运动的力量。\n跌倒不可怕，重要的是爬起来继续冲！"
    },
    'art': {
        title: "文武双全",
        brief: "静下心来练书法，一笔一划像盖房子。",
        img: "assets/calligraphy/work1.jpg",
        score: 20,
        slides: [
            { img: "assets/calligraphy/work1.jpg", text: "我的静心时间：书法让我学会耐心。写字就像盖房子，结构要稳，笔画要直。" },
            { img: "assets/calligraphy/award.jpg", text: "坚持练习让我也收获了荣誉。这张奖状告诉我：一分耕耘，一分收获。" },
            { img: "assets/art/draw2.jpg", text: "除了书法，我还喜欢用画笔记录五彩斑斓的世界。这是我笔下的奇妙童话。" },
            { img: "assets/art/draw4.jpg", text: "艺术让我拥有了发现美的眼睛。每一幅画，都是我心里最美的梦。" }
        ],
        summary: "🎨 这一站完成！\n静心书写，多彩绘画，我学会了发现美。"
    },
    'robot': {
        title: "科技少年",
        brief: "搭建机器人是我的最爱！每一个零件的拼装...",
        img: "assets/robot/work2.jpg",
        score: 20,
        slides: [
            { img: "assets/robot/work2.jpg", text: "机器人编程让我成了解决问题的小能手！看，这是我自己设计的机械臂。" },
            { img: "assets/robot/robot1.jpg", text: "面对一堆零散的积木，我需要脑子里先有图纸，然后动手搭建。" },
            { img: "assets/robot/robot2.jpg", text: "连接电路、编写程序，当看到机器人按照我的指令动起来那一刻，我觉得自己像个魔法师！" },
            { img: "assets/robot/robot3.jpg", text: "科技改变生活，我要继续探索，做未来的发明家！" }
        ],
        summary: "🤖 任务完成！\n逻辑搭建，代码驱动，我是小小发明家！"
    },
    'travel': {
        title: "行万里路",
        brief: "从延安圣地到博物馆，世界是我最大的课堂。",
        img: "assets/travel/yanan.jpg",
        score: 20,
        slides: [
            { img: "assets/travel/yanan.jpg", text: "读万卷书，更要行万里路。在延安宝塔山下，我感受到了革命先辈的伟大精神。" },
            { img: "assets/museum/museum1.jpg", text: "在博物馆里，我穿越时空与历史对话。每一件文物都在讲故事。" },
            { img: "assets/travel/travel1.jpg", text: "大自然也是最好的老师。看山、看水、看世界。" },
            { img: "assets/travel/travel2.jpg", text: "每一次旅行，都让我的眼界变得更宽广。我希望长大后能去更多的地方，看更大的世界！" }
        ],
        summary: "🌍 完美收官！\n读万卷书，行万里路，世界是我的课堂。"
    }
};

// --- 2. 游戏逻辑 ---
const Game = {
    score: 0,
    currentKey: null,
    progress: 0,
    
    start: function() {
        document.getElementById('scene-start').classList.remove('active');
        document.getElementById('scene-map').classList.add('active');
        document.getElementById('hud').style.display = 'block';
        var bgm = document.getElementById('bgm');
        bgm.play().catch(e => console.log("需交互后播放"));
    },

    showStory: function(key, targetElement) {
        this.currentKey = key;
        if (targetElement) this.moveAvatar(targetElement);
        setTimeout(() => {
            const data = StoryData[key];
            if(!data) return;
            document.getElementById('m-title').innerText = data.title;
            document.getElementById('m-text').innerText = data.brief;
            document.getElementById('m-img').src = data.img;
            const modal = document.getElementById('modal-overlay');
            modal.style.display = 'flex';
            setTimeout(() => modal.classList.add('modal-open'), 10);
        }, 1200);
    },

    // 核心修改：使用 slides 生成 PPT
    enterDetail: function() {
        const data = StoryData[this.currentKey];
        
        // 关闭弹窗
        document.getElementById('modal-overlay').classList.remove('modal-open');
        setTimeout(() => document.getElementById('modal-overlay').style.display = 'none', 300);

        // 切换场景
        document.getElementById('scene-map').classList.remove('active');
        document.getElementById('hud').style.display = 'none'; 
        
        const detailScene = document.getElementById('scene-detail');
        detailScene.innerHTML = ""; // 清空
        detailScene.classList.add('active');
        detailScene.scrollTop = 0;

        const anims = ['anim-left', 'anim-right', 'anim-zoom', 'anim-rotate', 'anim-flip'];

        // 1. 循环生成 PPT 页面 (修复报错的关键在这里：用 data.slides 而不是 data.gallery)
        if(data.slides) {
            data.slides.forEach((slide, index) => {
                const randomAnim = anims[Math.floor(Math.random() * anims.length)];
                const section = document.createElement('section');
                section.className = 'detail-slide';
                section.innerHTML = `
                    <div class="slide-content center">
                        <div class="slide-img-box"><img src="${slide.img}" class="${randomAnim}"></div>
                        <div class="slide-text-box"><p>${slide.text}</p></div>
                        ${index === 0 ? '<div class="scroll-hint">⬇️ 下滑继续</div>' : ''}
                    </div>`;
                detailScene.appendChild(section);
            });
        }

        // 2. 生成最后一页 (专属总结 + 收取能量按钮)
        const lastSection = document.createElement('section');
        lastSection.className = 'detail-slide';
        lastSection.style.background = '#fcf8e3'; // 金色背景
        lastSection.innerHTML = `
            <div class="slide-content center">
                <div style="font-size:3rem; margin-bottom:20px;">🏆</div>
                <h2 style="color:#d35400">本站探险完成</h2>
                <div style="background:white; padding:20px; border-radius:15px; margin:20px 0; border:2px dashed #d35400; width:90%">
                    <p style="color:#555; line-height:1.6; text-align:center">${data.summary}</p>
                </div>
                <button class="back-btn" onclick="Game.backToMap(this)">✨ 收取勇气能量</button>
            </div>
        `;
        detailScene.appendChild(lastSection);
    },

    backToMap: function(btnElement) {
        // 获取按钮位置用于飘字
        let rect = { left: window.innerWidth/2, top: window.innerHeight/2 };
        if(btnElement) rect = btnElement.getBoundingClientRect();

        document.getElementById('scene-detail').classList.remove('active');
        document.getElementById('scene-map').classList.add('active');
        document.getElementById('hud').style.display = 'block';

        // 加分 & 进度条
        const data = StoryData[this.currentKey];
        if(this.score < 100) this.score += data.score;
        
        document.getElementById('score-val').innerText = this.score;
        document.getElementById('bar-fill').style.width = this.score + "%";

        // 触发特效
        this.createFloatingScore(rect.left, rect.top);

        // 解锁下一关
        const keys = ['school', 'sports', 'art', 'robot', 'travel'];
        const finishedIndex = keys.indexOf(this.currentKey);
        if (finishedIndex === this.progress && this.progress < 4) {
            this.progress++; 
            const nextNode = document.querySelector(`.map-node[data-index='${this.progress}']`);
            if (nextNode) setTimeout(() => nextNode.classList.remove('locked'), 500);
        }

        // 检查通关
        if (this.score >= 100) {
            setTimeout(() => {
                this.triggerFinale();
            }, 2000);
        }
    },

    createFloatingScore: function(x, y) {
        const el = document.createElement('div');
        el.className = 'float-score';
        el.innerText = "+20";
        el.style.left = (x) + "px"; // 修正位置
        el.style.top = (y - 50) + "px";
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 1500);
    },

    triggerFinale: function() {
        document.getElementById('scene-map').classList.remove('active');
        document.getElementById('hud').style.display = 'none';
        document.getElementById('scene-finale').classList.add('active');
    },

    moveAvatar: function(target) {
        const avatar = document.getElementById('player-avatar');
        avatar.style.top = target.style.top;
        avatar.style.left = target.style.left;
    }
};