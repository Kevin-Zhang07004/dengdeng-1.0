console.log(">>> 最终完成版：进度条+飘字+烟花 <<<");

// 1. 增加 summary (总结语) 字段
const StoryData = {
    'school': {
        title: "多彩校园",
        brief: "大南分校的小主持人，从不敢说话到自信主持...",
        img: "assets/school/cover.jpg",
        score: 20,
        fullText: "以前的我，一站在大家面前说话心就怦怦跳。但现在，我已经是能在元旦晚会上拿着话筒主持的小小主持人啦！\n\n除了主持，我还是班级的值周生，每天站在校门口大声对同学们说‘早上好’。我还参加了啦啦操队，虽然训练很累，但和小伙伴们一起流汗真的很开心！",
        gallery: ["assets/school/cheer.jpg", "assets/school/duty.jpg", "assets/school/reading.jpeg", "assets/school/star.jpeg"],
        summary: "🎉 恭喜！你见证了我的自信蜕变。\n现在的我，敢于在舞台上闪闪发光！"
    },
    'sports': {
        title: "运动小健将",
        brief: "滑雪场上摔倒了怎么办？爬起来继续滑！",
        img: "assets/sports/ski.jpg",
        score: 20,
        fullText: "运动让我明白：害怕没关系，试试就能变厉害！\n\n记得第一次滑雪时，我摔得屁股都要裂开了，但我没有哭，拍拍雪继续滑。现在我不光会滑雪，还学会了游泳和踢足球。每一次跳跃，每一次奔跑，都让我感觉自己充满了能量！",
        gallery: ["assets/sports/ski2.jpg", "assets/sports/ski3.jpg", "assets/sports/swim.jpg", "assets/sports/football.jpg"],
        summary: "⚽ 太棒了！你感受到了运动的力量。\n跌倒不可怕，重要的是爬起来继续冲！"
    },
    'art': {
        title: "文武双全",
        brief: "静下心来练书法，一笔一划像盖房子。",
        img: "assets/calligraphy/work1.jpg",
        score: 20,
        fullText: "我的静心时间：书法让我学会耐心。写字就像盖房子，结构要稳，笔画要直。\n\n除了书法，美术也是我的最爱。我喜欢用画笔记录下我看到的五彩斑斓的世界。看，这些都是我的得意之作！",
        gallery: ["assets/calligraphy/award.jpg", "assets/art/draw2.jpg", "assets/art/draw3.jpg", "assets/art/draw4.jpg"],
        summary: "🎨 这一站完成！\n静心书写，多彩绘画，我学会了发现美。"
    },
    'robot': {
        title: "科技少年",
        brief: "搭建机器人是我的最爱！每一个零件的拼装...",
        img: "assets/robot/work2.jpg",
        score: 20,
        fullText: "机器人编程让我成了解决问题的小能手！\n\n面对一堆零散的积木，我需要脑子里先有图纸，然后动手搭建，最后写程序让它动起来。当看到机器人按照我的指令跑起来的那一刻，我觉得自己充满了成就感！",
        gallery: ["assets/robot/robot1.jpg", "assets/robot/robot2.jpg", "assets/robot/robot3.jpg", "assets/robot/work2.jpg"],
        summary: "🤖 任务完成！\n逻辑搭建，代码驱动，我是小小发明家！"
    },
    'travel': {
        title: "行万里路",
        brief: "从延安圣地到博物馆，世界是我最大的课堂。",
        img: "assets/travel/yanan.jpg",
        score: 20,
        fullText: "读万卷书，更要行万里路。\n\n在延安，我感受到了革命先辈的精神；在博物馆，我穿越时空与历史对话。每一次旅行，都让我的眼界变得更宽广。我希望长大后能去更多的地方，看更大的世界！",
        gallery: ["assets/travel/travel1.jpg", "assets/travel/travel2.jpg", "assets/museum/museum1.jpg", "assets/museum/museum2.jpg"],
        summary: "🌍 完美收官！\n读万卷书，行万里路，世界是我的课堂。"
    }
};

const Game = {
    score: 0,
    currentKey: null,
    progress: 0,
    
    start: function() {
        document.getElementById('scene-start').classList.remove('active');
        document.getElementById('scene-map').classList.add('active');
        document.getElementById('hud').style.display = 'block'; // 注意这里改成 block 以显示HUD
        var bgm = document.getElementById('bgm');
        bgm.play().catch(e => console.log("需交互后播放"));
    },

    showStory: function(key, targetElement) {
        this.currentKey = key;
        if (targetElement) this.moveAvatar(targetElement);
        setTimeout(() => {
            const data = StoryData[key];
            document.getElementById('m-title').innerText = data.title;
            document.getElementById('m-text').innerText = data.brief;
            document.getElementById('m-img').src = data.img;
            const modal = document.getElementById('modal-overlay');
            modal.style.display = 'flex';
            setTimeout(() => modal.classList.add('modal-open'), 10);
        }, 1200);
    },

    enterDetail: function() {
        const data = StoryData[this.currentKey];
        document.getElementById('modal-overlay').classList.remove('modal-open');
        setTimeout(() => document.getElementById('modal-overlay').style.display = 'none', 300);

        document.getElementById('scene-map').classList.remove('active');
        document.getElementById('hud').style.display = 'none'; 
        
        const detailScene = document.getElementById('scene-detail');
        detailScene.innerHTML = ""; // 清空
        detailScene.classList.add('active');
        detailScene.scrollTop = 0;

        const anims = ['anim-left', 'anim-right', 'anim-zoom', 'anim-rotate', 'anim-flip'];

        // 循环生成 PPT
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

        // 生成最后一页 (专属总结)
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
                <button class="back-btn" id="btn-back" onclick="Game.backToMap(this)">✨ 收取勇气能量</button>
            </div>
        `;
        detailScene.appendChild(lastSection);
    },

    backToMap: function(btnElement) {
        // 1. 获取点击位置 (为了生成飘字)
        const rect = btnElement.getBoundingClientRect();
        
        document.getElementById('scene-detail').classList.remove('active');
        document.getElementById('scene-map').classList.add('active');
        document.getElementById('hud').style.display = 'block';

        // 2. 加分 & 进度条
        const data = StoryData[this.currentKey];
        // 简单处理：每次都加
        if(this.score < 100) this.score += data.score;
        
        document.getElementById('score-val').innerText = this.score;
        document.getElementById('bar-fill').style.width = this.score + "%";

        // 3. 触发 +20 飘字特效
        this.createFloatingScore(rect.left, rect.top);

        // 4. 解锁下一关
        const keys = ['school', 'sports', 'art', 'robot', 'travel'];
        const finishedIndex = keys.indexOf(this.currentKey);
        if (finishedIndex === this.progress && this.progress < 4) {
            this.progress++; 
            const nextNode = document.querySelector(`.map-node[data-index='${this.progress}']`);
            if (nextNode) setTimeout(() => nextNode.classList.remove('locked'), 500);
        }

        // 5. 检查通关
        if (this.score >= 100) {
            setTimeout(() => {
                this.triggerFinale();
            }, 2000); // 飘字飞完后再庆祝
        }
    },

    // 生成飘字动画
    createFloatingScore: function(x, y) {
        const el = document.createElement('div');
        el.className = 'float-score';
        el.innerText = "+20";
        // 初始位置设在点击按钮的地方
        el.style.left = (x + 20) + "px";
        el.style.top = y + "px";
        document.body.appendChild(el);
        
        // 动画结束后删除元素
        setTimeout(() => el.remove(), 1500);
    },

    // 终极通关
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