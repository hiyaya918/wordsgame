// 单词数据
const wordData = {
    unit1: [
        {en: "weigh", zh: "有......重，重"},
        {en: "kilogram", zh: "千克，公斤"},
        {en: "centimetre", zh: "厘米"},
        {en: "taller", zh: "更高的"},
        {en: "fan", zh: "迷，爱好者"},
        {en: "fantastic", zh: "极好的"},
        {en: "themselves", zh: "他们自己，她们自己，它们自己"},
        {en: "theatre", zh: "剧院"},
        {en: "go fishing", zh: "去钓鱼"},
        {en: "enjoy oneself", zh: "玩得愉快，得到乐趣"}
    ],
    unit2: [
        {en: "life", zh: "生活"},
        {en: "writer", zh: "作家"},
        {en: "photographer", zh: "摄影师"},
        {en: "film", zh: "胶卷"},
        {en: "digital", zh: "数码的"},
        {en: "street cleaner", zh: "环卫工人"},
        {en: "sweep", zh: "扫地"},
        {en: "broom", zh: "扫帚"},
        {en: "drive", zh: "驾驶"},
        {en: "street sweeper", zh: "扫地车"}
    ],
    unit3: [
        {en: "carry", zh: "背，提，拿"},
        {en: "online", zh: "在线地，在线的"},
        {en: "head teacher", zh: "校长"},
        {en: "PS", zh: "附言（用于信末）"},
        {en: "mountain", zh: "山，山脉"},
        {en: "even", zh: "甚至"},
        {en: "space", zh: "太空"},
        {en: "dinosaur", zh: "恐龙"},
        {en: "a piece of", zh: "一张，一片"},
        {en: "have a picnic", zh: "去野餐"}
    ],
    unit4: [
        {en: "oil", zh: "油"},
        {en: "oil painting", zh: "油画"},
        {en: "powerful", zh: "强有力的，力量大的"},
        {en: "ink", zh: "墨水，墨汁"},
        {en: "Chinese ink painting", zh: "中国水墨画"},
        {en: "brush", zh: "画笔，刷子，刷"},
        {en: "paints", zh: "绘画颜料"},
        {en: "artist", zh: "艺术家，（尤指）画家"},
        {en: "unhappy", zh: "不高兴的"},
        {en: "carefully", zh: "仔细地"}
    ],
    unit5: [
        {en: "craft", zh: "手艺，工艺"},
        {en: "crown", zh: "王冠，皇冠"},
        {en: "scissors", zh: "剪刀"},
        {en: "tape", zh: "胶带"},
        {en: "glue", zh: "胶水"},
        {en: "saw", zh: "锯"},
        {en: "craftsman", zh: "工匠，手艺人"},
        {en: "tool", zh: "工具"},
        {en: "easily", zh: "容易地"},
        {en: "model house", zh: "房子模型"}
    ],
    unit6: [
        {en: "long race", zh: "长跑"},
        {en: "short race", zh: "短跑"},
        {en: "win", zh: "获胜，赢"},
        {en: "long jump", zh: "跳远"},
        {en: "high jump", zh: "跳高"},
        {en: "swimsuit", zh: "游泳衣"},
        {en: "swimming cap", zh: "游泳帽"},
        {en: "swimming pool", zh: "游泳池"},
        {en: "warm-up", zh: "准备活动，热身练习"},
        {en: "swimming goggles", zh: "游泳镜"}
    ],
    unit7: [
        {en: "bell", zh: "铃铛"},
        {en: "neck", zh: "脖子"},
        {en: "ago", zh: "以前"},
        {en: "gatekeeper", zh: "门卫"},
        {en: "praise", zh: "赞扬，称赞"}
    ],
    unit8: [
        {en: "sign", zh: "标识"},
        {en: "middle", zh: "中间，中部，中心"},
        {en: "special", zh: "特别的"},
        {en: "path", zh: "小路，小径"},
        {en: "may", zh: "可能，可以"},
        {en: "lost", zh: "迷路的，迷失的"},
        {en: "worry", zh: "担心"},
        {en: "follow", zh: "跟随，跟着"},
        {en: "look out", zh: "小心，当心"},
        {en: "no smoking", zh: "禁止吸烟"}
    ],
    unit9: [
        {en: "reuse", zh: "重新利用"},
        {en: "can", zh: "金属罐"},
        {en: "rubber", zh: "橡皮"},
        {en: "vase", zh: "花瓶"},
        {en: "pen holder", zh: "笔筒"},
        {en: "envelope", zh: "信封"},
        {en: "plastic", zh: "塑料制的，塑料的"},
        {en: "rubbish bin", zh: "垃圾桶"},
        {en: "piece", zh: "碎片，碎块"},
        {en: "throw away", zh: "扔掉"}
    ],
    unit10: [
        {en: "fairy tale", zh: "童话（故事）"},
        {en: "adult", zh: "成年人"},
        {en: "well-known", zh: "众所周知的，著名的"},
        {en: "stronger", zh: "更强大的"},
        {en: "scarf", zh: "围巾"},
        {en: "blow off", zh: "吹掉"},
        {en: "take off", zh: "脱掉"}
    ],
    unit11: [
        {en: "Western", zh: "西方的"},
        {en: "turkey", zh: "火鸡"},
        {en: "moment", zh: "时光，时刻"},
        {en: "decorate", zh: "装饰，布置"},
        {en: "bright", zh: "明亮的，鲜艳的"},
        {en: "laugh at", zh: "嘲笑"}
    ],
    unit12: [
        {en: "pea", zh: "豌豆"},
        {en: "pod", zh: "豆荚"},
        {en: "forever", zh: "永远"},
        {en: "bigger", zh: "更大的"},
        {en: "excited", zh: "兴奋的"},
        {en: "bullet", zh: "子弹"},
        {en: "lazy", zh: "懒惰的"},
        {en: "roof", zh: "屋顶"},
        {en: "yard", zh: "院子"},
        {en: "hit", zh: "碰撞，撞击"}
    ]
};

// 全局变量
let currentUnit = null;
let currentGame = null;
const gameBoard = document.getElementById('gameBoard');
const gameStatus = document.getElementById('gameStatus');

// 更新游戏状态显示
function updateGameStatus(message) {
    gameStatus.textContent = message;
}

// 初始化单元选择按钮
function initUnitButtons() {
    const container = document.getElementById('unitButtons');
    
    // 清空现有按钮避免重复
    container.innerHTML = '';
    
    // 使用文档片段提高性能
    const fragment = document.createDocumentFragment();
    
    Object.keys(wordData).forEach(unit => {
        const btn = document.createElement('button');
        btn.className = 'btn';
        btn.id = `unit-btn-${unit}`; // 添加唯一ID便于后续查找
        btn.textContent = `Unit ${unit.replace('unit', '')}`;
        
        // 如果是当前选中的单元，添加active类
        if (currentUnit === unit) {
            btn.classList.add('active');
        }
        
        // 直接绑定事件
        btn.onclick = () => selectUnit(unit);
        
        fragment.appendChild(btn);
    });
    
    container.appendChild(fragment);
}

// 清理游戏资源
function cleanupCurrentGame() {
    gameBoard.innerHTML = '';
    currentGame = null;
}

// 选择单元
function selectUnit(unit) {
    cleanupCurrentGame();
    currentUnit = unit;
    
    // 清除所有单元按钮的active类
    const allUnitButtons = document.querySelectorAll('#unitButtons .btn');
    allUnitButtons.forEach(btn => btn.classList.remove('active'));
    
    // 为当前选中的按钮添加active类
    const selectedButton = document.getElementById(`unit-btn-${unit}`);
    if (selectedButton) {
        selectedButton.classList.add('active');
    }
    
    updateGameStatus(`已选择 Unit ${unit.replace('unit', '')}，请选择游戏模式`);
}

// 洗牌算法 - Fisher-Yates
function shuffleArray(array) {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

// 生成随机卡片形状
function getRandomCardShape() {
    const shapes = [
        '', // 默认形状 (矩形)
        'card-shape-oval', // 椭圆形
        'card-shape-droplet', // 水滴形
        'card-shape-pebble', // 鹅卵石形
        'card-shape-cloud' // 云形
    ];
    return shapes[Math.floor(Math.random() * shapes.length)];
}

// 获取随机位置，避免卡片重叠
function getRandomPosition(cardWidth, cardHeight, boardWidth, boardHeight, existingPositions) {
    // 使用网格布局而非完全随机位置
    const padding = 20; // 增加卡片间距
    const columns = Math.floor(boardWidth / (cardWidth + padding * 2));
    const rows = Math.ceil(existingPositions.length / columns) + 1;
    
    // 计算行和列索引
    const totalPositions = existingPositions.length;
    let row = Math.floor(totalPositions / columns);
    let col = totalPositions % columns;
    
    // 计算整个网格的总宽度
    const gridWidth = columns * (cardWidth + padding * 2);
    
    // 计算左侧留白，使卡片整体居中
    const leftMargin = (boardWidth - gridWidth) / 2 + padding;
    
    // 基本位置（网格布局），添加左侧居中偏移
    const baseX = leftMargin + col * (cardWidth + padding * 2);
    const baseY = row * (cardHeight + padding * 2) + padding;
    
    // 添加小幅度随机偏移（不超过20%的卡片尺寸）
    const offsetX = (Math.random() - 0.5) * cardWidth * 0.2;
    const offsetY = (Math.random() - 0.5) * cardHeight * 0.2;
    
    return {
        x: baseX + offsetX,
        y: baseY + offsetY
    };
}

// 应用随机旋转
function applyRandomRotation(element) {
    const rotation = Math.random() * 6 - 3; // -3 to 3 degrees
    element.style.transform += ` rotate(${rotation}deg)`;
}

// 加载页面控制
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    const loadingProgress = document.getElementById('loadingProgress');
    
    // 模拟加载进度
    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += 10;
        loadingProgress.textContent = `加载进度：${progress}%`;
        
        if (progress >= 100) {
            clearInterval(loadingInterval);
            loadingProgress.textContent = '加载完成，准备开始游戏！';
            
            // 淡出加载页面
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    // 初始化游戏
                    initGame();
                }, 500);
            }, 500);
        }
    }, 200);
});

// 初始化游戏
function initGame() {
    try {
        initUnitButtons();
        updateGameStatus('请选择单元开始游戏');
    } catch (error) {
        console.error('初始化游戏时出错:', error);
        updateGameStatus('加载游戏遇到错误，请刷新页面');
    }
}

// 优化触摸事件处理
function addCardEventListeners(card, callback) {
    // 支持点击和触摸
    card.addEventListener('click', function(e) {
        e.preventDefault();
        callback(this);
    });

    // 触摸开始时添加活跃状态
    card.addEventListener('touchstart', function(e) {
        e.preventDefault();
        this.classList.add('active');
    }, { passive: false });

    // 触摸结束时触发回调并移除活跃状态
    card.addEventListener('touchend', function(e) {
        e.preventDefault();
        this.classList.remove('active');
        callback(this);
    }, { passive: false });

    // 触摸移动到卡片外时取消操作
    card.addEventListener('touchmove', function(e) {
        const touch = e.touches[0];
        const target = document.elementFromPoint(touch.clientX, touch.clientY);
        if (target !== this) {
            this.classList.remove('active');
        }
    }, { passive: true });
}

// 单词配对游戏
function startMatchingGame() {
    if (!currentUnit) {
        alert('请先选择单元！');
        return;
    }
    
    cleanupCurrentGame();
    
    // 获取当前单元的单词
    const words = wordData[currentUnit];
    
    // 创建卡片
    let cards = [];
    words.forEach(word => {
        cards.push({id: 'en_' + word.en, text: word.en, type: 'en', matched: false, word: word});
        cards.push({id: 'zh_' + word.en, text: word.zh, type: 'zh', matched: false, word: word});
    });
    
    // 洗牌
    cards = shuffleArray(cards);
    
    // 创建游戏界面
    const container = document.createElement('div');
    container.className = 'cards-container';
    // 设置容器为相对定位，使内部卡片的绝对定位相对于容器
    container.style.position = 'relative';
    // 确保容器有足够的高度
    const cardHeight = 110;
    const cardWidth = 130;
    const padding = 20;
    const columns = Math.floor((gameBoard.clientWidth - padding * 2) / (cardWidth + padding * 2));
    const rows = Math.ceil(cards.length / columns);
    const containerHeight = rows * (cardHeight + padding * 2) + padding * 2;
    container.style.height = `${containerHeight}px`;
    container.style.width = '100%';
    
    gameBoard.appendChild(container);
    
    // 添加匹配对数显示
    const matchedPairsEl = document.createElement('div');
    matchedPairsEl.className = 'matched-pairs';
    matchedPairsEl.textContent = `0/${words.length}`;
    gameBoard.appendChild(matchedPairsEl);
    
    // 游戏状态变量
    let selected = null;
    let matchedCount = 0;
    let canClick = true;
    
    // 获取容器尺寸
    const boardRect = container.getBoundingClientRect();
    const boardWidth = boardRect.width;
    const boardHeight = containerHeight;
    
    // 卡片位置跟踪
    const cardPositions = [];
    
    // 为每个卡片添加随机特性
    cards.forEach(card => {
        // 创建卡片元素
        const cardElement = document.createElement('div');
        const cardShape = getRandomCardShape();
        cardElement.className = `card ${cardShape}`;
        
        // 对于特殊形状卡片，添加内部span确保文字正确显示
        if (cardShape === 'card-shape-diamond') {
            const span = document.createElement('span');
            span.textContent = card.text;
            cardElement.appendChild(span);
        } else {
            cardElement.textContent = card.text;
        }
        
        cardElement.dataset.id = card.id;
        cardElement.dataset.word = JSON.stringify(card.word); // 存储单词数据用于匹配
        
        // 根据类型添加不同样式
        if (card.type === 'en') {
            cardElement.style.fontFamily = 'Nunito, sans-serif';
            cardElement.style.fontSize = '130%'; // 放大英语单词字体30%
        }
        
        // 获取网格式布局位置，避免重叠
        const position = getRandomPosition(cardWidth, cardHeight, boardWidth, boardHeight, cardPositions);
        cardElement.style.position = 'absolute'; // 使用绝对定位
        cardElement.style.left = `${position.x}px`;
        cardElement.style.top = `${position.y}px`;
        cardElement.style.width = `${cardWidth}px`;
        cardElement.style.height = `${cardHeight}px`;
        
        // 记录位置用于后续检测
        cardPositions.push({
            x: position.x,
            y: position.y,
            width: cardWidth,
            height: cardHeight
        });
        
        // 应用随机旋转
        applyRandomRotation(cardElement);
        
        // 这里正确地添加事件监听器到每个卡片
        cardElement.addEventListener('click', function() {
            if (!canClick) return;
            if (selected === this) {
                // 点击了同一张牌，取消选择
                this.classList.remove('selected');
                selected = null;
                return;
            }
            
            if (this.classList.contains('matched')) return;
            
            if (!selected) {
                // 第一次点击
                selected = this;
                this.classList.add('selected');
                
                // 添加选中动画
                this.animate([
                    { transform: this.style.transform },
                    { transform: `${this.style.transform.replace('rotate', 'rotateZ')} scale(1.1)` },
                    { transform: `${this.style.transform.replace('rotate', 'rotateZ')} scale(1.05)` }
                ], {
                    duration: 300,
                    easing: 'ease-out',
                    fill: 'forwards'
                });
            } else {
                // 第二次点击，检查是否匹配
                canClick = false; // 防止连续快速点击
                const selectedWord = JSON.parse(selected.dataset.word);
                const currentWord = JSON.parse(this.dataset.word);
                const isMatch = selectedWord.en === currentWord.en;
                
                // 添加选中动画
                this.classList.add('selected');
                
                setTimeout(() => {
                    if (isMatch) {
                        // 匹配成功
                        this.classList.remove('selected');
                        this.classList.add('matched');
                        selected.classList.remove('selected');
                        selected.classList.add('matched');
                        
                        // 播放匹配成功动画，然后让卡片消失
                        [this, selected].forEach(el => {
                            el.animate([
                                { transform: el.style.transform },
                                { transform: `${el.style.transform.replace('rotate', 'rotateZ')} scale(1.2) rotate(5deg)` },
                                { transform: `${el.style.transform.replace('rotate', 'rotateZ')} scale(1.05)` }
                            ], {
                                duration: 500,
                                easing: 'ease-out'
                            }).onfinish = () => {
                                // 动画播放完成后淡出卡片
                                el.animate([
                                    { opacity: 1 },
                                    { opacity: 0 }
                                ], {
                                    duration: 300,
                                    easing: 'ease-out',
                                    fill: 'forwards'
                                });
                            };
                        });
                        
                        matchedCount++;
                        matchedPairsEl.textContent = `${matchedCount}/${words.length}`;
                        updateGameStatus(`太棒了！已匹配: ${matchedCount}/${words.length} 对`);
                        
                        if (matchedCount === words.length) {
                            // 所有卡片匹配成功，庆祝动画
                            const allCards = document.querySelectorAll('.card');
                            allCards.forEach((el, i) => {
                                setTimeout(() => {
                                    el.classList.add('celebrate');
                                }, i * 50);
                            });
                            
                            setTimeout(() => {
                                alert('恭喜你完成了本单元！');
                                startMatchingGame(); // 重新开始游戏
                            }, 1000);
                        }
                    } else {
                        // 不匹配
                        setTimeout(() => {
                            this.classList.remove('selected');
                            selected.classList.remove('selected');
                            updateGameStatus('不匹配，请重试');
                        }, 800);
                    }
                    
                    // 重置选择
                    selected = null;
                    canClick = true;
                }, 500);
            }
        });
        
        // 添加触摸事件支持
        cardElement.addEventListener('touchstart', function(e) {
            e.preventDefault(); // 防止滚动和缩放
            this.classList.add('active');
        }, { passive: false });
        
        cardElement.addEventListener('touchend', function(e) {
            e.preventDefault();
            this.classList.remove('active');
            this.click(); // 触发点击事件
        }, { passive: false });
        
        container.appendChild(cardElement);
    });
    
    updateGameStatus(`已匹配: ${matchedCount}/${words.length} 对`);
}

// 记忆翻牌游戏
function startMemoryGame() {
    if (!currentUnit) {
        alert('请先选择单元！');
        return;
    }

    cleanupCurrentGame();
    
    // 获取当前单元的单词
    const words = wordData[currentUnit];
    
    // 创建卡片
    let cards = [];
    words.forEach(word => {
        cards.push({id: 'en_' + word.en, text: word.en, type: 'en', flipped: false, matched: false, word: word});
        cards.push({id: 'zh_' + word.en, text: word.zh, type: 'zh', flipped: false, matched: false, word: word});
    });
    
    // 洗牌
    cards = shuffleArray(cards);
    
    // 创建游戏界面
    const container = document.createElement('div');
    container.className = 'cards-container';
    // 设置容器为相对定位，使内部卡片的绝对定位相对于容器
    container.style.position = 'relative';
    // 确保容器有足够的高度
    const cardHeight = 110;
    const cardWidth = 130;
    const padding = 20;
    const columns = Math.floor((gameBoard.clientWidth - padding * 2) / (cardWidth + padding * 2));
    const rows = Math.ceil(cards.length / columns);
    const containerHeight = rows * (cardHeight + padding * 2) + padding * 2;
    container.style.height = `${containerHeight}px`;
    container.style.width = '100%';
    
    gameBoard.appendChild(container);
    
    // 添加匹配对数显示
    const matchedPairsEl = document.createElement('div');
    matchedPairsEl.className = 'matched-pairs';
    matchedPairsEl.textContent = `0/${words.length}`;
    gameBoard.appendChild(matchedPairsEl);
    
    // 游戏状态
    let flipped = [];
    let matchedCount = 0;
    let canFlip = true;
    
    // 获取容器尺寸
    const boardRect = container.getBoundingClientRect();
    const boardWidth = boardRect.width;
    const boardHeight = containerHeight;
    
    // 卡片位置跟踪
    const cardPositions = [];
    
    // 为每个卡片添加随机特性
    cards.forEach(card => {
        // 创建卡片元素
        const cardElement = document.createElement('div');
        const cardShape = getRandomCardShape();
        cardElement.className = `card ${cardShape}`;
        cardElement.textContent = '?';
        cardElement.dataset.id = card.id;
        cardElement.dataset.text = card.text;
        cardElement.dataset.type = card.type;
        cardElement.dataset.word = JSON.stringify(card.word); // 存储单词数据用于匹配
        
        // 获取网格式布局位置，避免重叠
        const position = getRandomPosition(cardWidth, cardHeight, boardWidth, boardHeight, cardPositions);
        cardElement.style.position = 'absolute'; // 使用绝对定位
        cardElement.style.left = `${position.x}px`;
        cardElement.style.top = `${position.y}px`;
        cardElement.style.width = `${cardWidth}px`;
        cardElement.style.height = `${cardHeight}px`;
        
        // 记录位置用于后续检测
        cardPositions.push({
            x: position.x,
            y: position.y,
            width: cardWidth,
            height: cardHeight
        });
        
        // 应用随机旋转
        applyRandomRotation(cardElement);
        
        // 添加点击事件
        cardElement.addEventListener('click', function() {
            if (!canFlip || this.classList.contains('matched') || this.classList.contains('flipped')) {
                return;
            }
            
            // 翻开卡片
            this.textContent = card.text;
            this.classList.add('flipped');
            
            // 对于英语单词卡片设置字体
            if (card.type === 'en') {
                this.style.fontFamily = 'Nunito, sans-serif';
                this.style.fontSize = '130%'; // 放大英语单词字体30%
            }
            
            // 翻牌动画
            const originalTransform = this.style.transform;
            this.animate([
                { transform: originalTransform },
                { transform: `${originalTransform.replace('rotate', 'rotateZ')} rotateY(90deg)`, offset: 0.5 },
                { transform: `${originalTransform.replace('rotate', 'rotateZ')} scale(1.05)` }
            ], {
                duration: 400,
                easing: 'ease-out'
            });
            
            // 添加到已翻开卡片数组
            flipped.push({card: card, element: this});
            
            if (flipped.length === 2) {
                canFlip = false;
                const [first, second] = flipped;
                const isMatch = first.card.word.en === second.card.word.en;
                
                setTimeout(() => {
                    if (isMatch) {
                        // 匹配成功
                        first.element.classList.add('matched');
                        second.element.classList.add('matched');
                        
                        // 播放匹配成功动画，但不让卡片消失
                        [first.element, second.element].forEach(el => {
                            el.animate([
                                { transform: el.style.transform },
                                { transform: `${el.style.transform.replace('rotate', 'rotateZ')} scale(1.2) rotate(5deg)` },
                                { transform: `${el.style.transform.replace('rotate', 'rotateZ')} scale(1.05)` }
                            ], {
                                duration: 500,
                                easing: 'ease-out'
                            });
                        });
                        
                        matchedCount++;
                        matchedPairsEl.textContent = `${matchedCount}/${words.length}`;
                        updateGameStatus(`太棒了！已匹配: ${matchedCount}/${words.length} 对`);
                        
                        if (matchedCount === words.length) {
                            // 所有卡片匹配成功，庆祝动画
                            const allCards = document.querySelectorAll('.card');
                            allCards.forEach((el, i) => {
                                setTimeout(() => {
                                    el.classList.add('celebrate');
                                }, i * 50);
                            });
                            
                            setTimeout(() => {
                                alert('恭喜你完成了本单元！');
                                startMemoryGame(); // 重新开始游戏
                            }, 1000);
                        }
                    } else {
                        // 不匹配，翻回
                        // 翻回动画
                        [first.element, second.element].forEach(el => {
                            const transform = el.style.transform;
                            el.animate([
                                { transform: transform },
                                { transform: `${transform.replace('rotate', 'rotateZ')} rotateY(90deg)`, offset: 0.5 },
                                { transform: transform }
                            ], {
                                duration: 400,
                                easing: 'ease-in'
                            });
                        });
                        
                        setTimeout(() => {
                            first.element.textContent = second.element.textContent = '?';
                            first.element.classList.remove('flipped');
                            second.element.classList.remove('flipped');
                            updateGameStatus('不匹配，请重试');
                        }, 200);
                    }
                    
                    flipped = [];
                    canFlip = true;
                }, 800);
            }
        });
        
        // 添加触摸事件支持
        cardElement.addEventListener('touchstart', function(e) {
            e.preventDefault(); // 防止滚动和缩放
            this.classList.add('active');
        }, { passive: false });
        
        cardElement.addEventListener('touchend', function(e) {
            e.preventDefault();
            this.classList.remove('active');
            this.click(); // 触发点击事件
        }, { passive: false });
        
        container.appendChild(cardElement);
    });
    
    updateGameStatus(`已匹配: ${matchedCount}/${words.length} 对`);
}

// 拼写练习游戏
function startSpellingGame() {
    if (!currentUnit) {
        alert('请先选择单元！');
        return;
    }

    cleanupCurrentGame();
    
    // 获取当前单元的单词并洗牌
    const words = shuffleArray(wordData[currentUnit]);
    let currentWordIndex = 0;
    let correctCount = 0;
    
    // 创建游戏界面
    function renderGame() {
        gameBoard.innerHTML = '';
        const container = document.createElement('div');
        container.className = 'spelling-container';
        
        const prompt = document.createElement('div');
        prompt.className = 'spelling-prompt';
        prompt.textContent = words[currentWordIndex].zh;
        
        const input = document.createElement('input');
        input.className = 'spelling-input';
        input.type = 'text';
        input.placeholder = '请输入英文单词';
        input.autocomplete = 'off';
        input.spellcheck = false;
        
        // 提示区域
        const hint = document.createElement('div');
        hint.style.marginTop = '10px';
        hint.style.fontSize = '0.9rem';
        hint.style.color = 'var(--neutral-dark)';
        hint.textContent = `提示: ${words[currentWordIndex].en.charAt(0)}...`;
        
        // 按钮
        const submitBtn = document.createElement('button');
        submitBtn.className = 'btn';
        submitBtn.textContent = '检查';
        submitBtn.style.marginTop = '20px';
        
        // 进度显示
        const progress = document.createElement('div');
        progress.style.marginTop = '20px';
        progress.style.fontSize = '0.9rem';
        progress.textContent = `进度: ${currentWordIndex + 1}/${words.length}`;
        
        container.appendChild(prompt);
        container.appendChild(input);
        container.appendChild(hint);
        container.appendChild(submitBtn);
        container.appendChild(progress);
        gameBoard.appendChild(container);
        
        // 确保输入框获得焦点
        setTimeout(() => input.focus(), 100);
        
        // 检查答案函数
        function checkAnswer() {
            const userInput = input.value.trim().toLowerCase();
            if (!userInput) return;
            
            const currentWord = words[currentWordIndex];
            if (userInput === currentWord.en.toLowerCase()) {
                correctCount++;
                
                // 正确动画
                prompt.animate([
                    { transform: 'scale(1)', color: 'var(--primary-dark)' },
                    { transform: 'scale(1.1)', color: 'var(--success-color)' },
                    { transform: 'scale(1)', color: 'var(--primary-dark)' }
                ], {
                    duration: 500,
                    easing: 'ease-out'
                });
                
                updateGameStatus(`正确！`);
                
                if (currentWordIndex === words.length - 1) {
                    const percentCorrect = Math.round(correctCount/words.length*100);
                    
                    setTimeout(() => {
                        const resultMessage = `恭喜你完成了本单元！\n正确率: ${percentCorrect}%`;
                        alert(resultMessage);
                        
                        // 重新开始
                        currentWordIndex = 0;
                        correctCount = 0;
                        renderGame();
                    }, 500);
                } else {
                    currentWordIndex++;
                    setTimeout(() => renderGame(), 800);
                }
            } else {
                updateGameStatus(`错误！正确答案是: ${currentWord.en}`);
                
                // 错误动画
                input.animate([
                    { borderColor: 'var(--primary-light)' },
                    { borderColor: 'red' },
                    { borderColor: 'var(--primary-light)' }
                ], {
                    duration: 500,
                    easing: 'ease-out'
                });
                
                input.value = '';
                input.focus();
            }
        }
        
        // 键盘事件
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                checkAnswer();
            }
        });
        
        // 点击事件
        submitBtn.addEventListener('click', checkAnswer);
        
        // 触摸事件支持（针对移动设备）
        submitBtn.addEventListener('touchstart', function(e) {
            e.preventDefault(); // 防止滚动和缩放
        }, { passive: false });
        
        submitBtn.addEventListener('touchend', function(e) {
            e.preventDefault();
            checkAnswer();
        }, { passive: false });
        
        updateGameStatus(`请拼写单词（${currentWordIndex + 1}/${words.length}）`);
    }
    
    renderGame();
}

// 错误处理
window.addEventListener('error', function(event) {
    console.error('页面错误:', event.message);
    // 报告错误但允许页面继续运行
    event.preventDefault();
}); 