// 雛形
/*
{
    id:xxxx,
    grid: 'https://via.placeholder.com/300x200?text=grid',
    name: 'ゲーム1',
    // 46文字まで
    explanation:"text",
    likes: {
        count: 3,
        timestamps: []
    },
    purchaseLink: 'https://example.com/purchase1',
    shareLink: 'https://example.com/share1',
    slides: {
        thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+1',
        overview: 'https://via.placeholder.com/300x200?text=Overview+1',
        components: [
            'https://via.placeholder.com/300x200?text=Component+1-1',
            'https://via.placeholder.com/300x200?text=Component+1-2',
            'https://via.placeholder.com/300x200?text=Component+1-3'
        ]
    },
    rules: {
        description: [
            'https://via.placeholder.com/300x200?text=Description+1-1',
            'https://via.placeholder.com/300x200?text=Description+1-2'
        ],
        setup: [
            'https://via.placeholder.com/300x200?text=Setup+1-1',
            'https://via.placeholder.com/300x200?text=Setup+1-2'
        ],
        gameplay: [
            'https://via.placeholder.com/300x200?text=Gameplay+1-1',
            'https://via.placeholder.com/300x200?text=Gameplay+1-2'
        ],
        endgame: [
            'https://via.placeholder.com/300x200?text=Endgame+1-1',
            'https://via.placeholder.com/300x200?text=Endgame+1-2'
        ]
    }
},
*/
const games = [
    {
        id:1001,
        grid: '/pictures/ガイスター/grid/gaisuta_grid.webp',
        name: 'ガイスター',
        explanation:"大人と子供が互角に戦える！相手の心理を読んで戦略を立てよう！",
        likes: {
            count: 4,
            timestamps: []
        },
        purchaseLink: 'https://example.com/purchase2',
        shareLink: 'https://example.com/share2',
        slides: {
            thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+2',
            overview: 'https://via.placeholder.com/300x200?text=Overview+2',
            components: [
                '/pictures/ガイスター/rules/description/gaisuta_1.webp',
                '/pictures/ガイスター/rules/description/gaisuta_2.webp',
                '/pictures/ガイスター/grid/gaisuta_grid.webp',
                '/pictures/ガイスター/grid/box.png',
                '/pictures/ガイスター/grid/配置図.png'
            ]
        },
        rules: {
            description: [
                '/pictures/ガイスター/rules/description/gaisuta_1.webp',
                '/pictures/ガイスター/rules/description/gaisuta_2.webp',
            ],
            setup: [
                '/pictures/ガイスター/rules/description/gaisuta_3.webp',
               
            ],
            gameplay: [
                '/pictures/ガイスター/rules/description/gaisuta_4.webp',
                '/pictures/ガイスター/rules/description/gaisuta_5.webp',
            ],
            endgame: [
                '/pictures/ガイスター/rules/description/gaisuta_6.webp',
                '/pictures/ガイスター/rules/description/gaisuta_7.webp',
                '/pictures/ガイスター/rules/description/gaisuta_8.webp',
               
            ]
        }
    },
    {
        id:1002,
        grid: '/pictures/ごきぶり/grid/gokiburi_grid.webp',
        name: 'ごきぶりポーカー',
        explanation:'うそをついて害虫を押し付けよう！押し付けられすぎると負け！',
        likes: {
            count: 1,
            timestamps: []
        },
        purchaseLink: 'https://example.com/purchase3',
        shareLink: 'https://example.com/share3',
        slides: {
            thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+3',
            overview: 'https://via.placeholder.com/300x200?text=Overview+3',
            components: [
                '/pictures/ごきぶり/rules/description/gokiburi_1.webp',
                '/pictures/ごきぶり/grid/gokiburi_grid.webp',
                '/pictures/ごきぶり/pickup/components/box1.png',
                '/pictures/ごきぶり/pickup/components/準備1.png'
            ]
        },
        rules: {
            description: [
                '/pictures/ごきぶり/rules/description/gokiburi_1.webp',
            ],
            setup: [
                '/pictures/ごきぶり/rules/setup/gokiburi_2.webp',
            ],
            gameplay: [
                '/pictures/ごきぶり/rules/gameplay/gokiburi_3.webp',
                '/pictures/ごきぶり/rules/gameplay/gokiburi_4.webp',
                '/pictures/ごきぶり/rules/gameplay/gokiburi_5.webp',
                '/pictures/ごきぶり/rules/gameplay/gokiburi_6.webp',
                '/pictures/ごきぶり/rules/gameplay/gokiburi_7.webp',
            ],
            endgame: [
                '/pictures/ごきぶり/rules/endgame/gokiburi_8.webp',
                '/pictures/ごきぶり/rules/endgame/gokiburi_9.webp'
            ]
        }
    },
    {
        id:1003,
        grid: '/pictures/コヨーテ/grid/coyote_grid.webp',
        name: 'コヨーテ',
        explanation:"新感覚インディアンポーカー！予想が多すぎるとおもったら「コヨーテ」！",
        likes: {
            count: 2,
            timestamps: []
        },
        purchaseLink: 'https://example.com/purchase4',
        shareLink: 'https://example.com/share4',
        slides: {
            thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+4',
            overview: 'https://via.placeholder.com/300x200?text=Overview+4',
            components: [
                '/pictures/コヨーテ/rules/description/coyote_1.webp',
                '/pictures/コヨーテ/grid/coyote_grid.webp',
                '/pictures/コヨーテ/pickup/components/box.png',
                '/pictures/コヨーテ/pickup/components/準備2.png'
            ]
        },
        rules: {
            description: [
                '/pictures/コヨーテ/rules/description/coyote_1.webp',
                
            ],
            setup: [
                '/pictures/コヨーテ/rules/setup/coyote_2.webp',
            
            ],
            gameplay: [
                '/pictures/コヨーテ/rules/gameplay/coyote_3.webp',
                '/pictures/コヨーテ/rules/gameplay/coyote_4.webp',
                '/pictures/コヨーテ/rules/gameplay/coyote_5.webp',
                '/pictures/コヨーテ/rules/gameplay/coyote_6.webp',
                '/pictures/コヨーテ/rules/gameplay/coyote_7.webp',
                '/pictures/コヨーテ/rules/gameplay/coyote_8.webp',
            ],
            endgame: [
                '/pictures/コヨーテ/rules/endgame/coyote_9.webp',
                
            ]
        }
    },
    {
        id:1004,
        grid: '/pictures/ニムト/grid/nimmt_grid.webp',
        name: 'ニムト',
        explanation:"牛を引き取らないようにカードを出そう！ドイツNo.1カードゲーム！",
        likes: {
            count: 5,
            timestamps: []
        },
        purchaseLink: 'https://example.com/purchase5',
        shareLink: 'https://example.com/share5',
        slides: {
            thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+5',
            overview: 'https://via.placeholder.com/300x200?text=Overview+5',
            components: [
                '/pictures/ニムト/rules/description/nimmt_1.webp',
                '/pictures/ニムト/rules/description/nimmt_2.webp',
                '/pictures/ニムト/rules/description/nimmt_3.webp',
                '/pictures/ニムト/rules/description/nimmt_4.webp',
                '/pictures/ニムト/grid/nimmt_grid.webp',
                '/pictures/ニムト/pickup/components/共有box.png',
                '/pictures/ニムト/pickup/components/全体はいち.png'
            ]
        },
        rules: {
            description: [
                '/pictures/ニムト/rules/description/nimmt_1.webp',
                '/pictures/ニムト/rules/description/nimmt_2.webp',
                '/pictures/ニムト/rules/description/nimmt_3.webp',
                '/pictures/ニムト/rules/description/nimmt_4.webp',
            ],
            setup: [
                '/pictures/ニムト/rules/setup/nimmt_5.webp',
            
            ],
            gameplay: [
                '/pictures/ニムト/rules/gameplay/nimmt_6.webp',
                '/pictures/ニムト/rules/gameplay/nimmt_7.webp',
                '/pictures/ニムト/rules/gameplay/nimmt_8.webp',
                '/pictures/ニムト/rules/gameplay/nimmt_9.webp',
                '/pictures/ニムト/rules/gameplay/nimmt_10.webp',
                '/pictures/ニムト/rules/gameplay/nimmt_11.webp',
                '/pictures/ニムト/rules/gameplay/nimmt_12.webp',
                '/pictures/ニムト/rules/gameplay/nimmt_13.webp',
                '/pictures/ニムト/rules/gameplay/nimmt_14.webp',
            ],
            endgame: [
                '/pictures/ニムト/rules/endgame/nimmt_15.webp',
                
            ]
        }
    },
    {
        id:1005,
        grid: '/pictures/はぁ/grid/hatteiugame_grid.webp',
        name: 'はぁって言うゲーム',
        // 46文字まで
        explanation:"その「はぁ」なんの「はぁ」？演技を当てて得点！当ててもらっても得点！",
        likes: {
            count: 3,
            timestamps: []
        },
        purchaseLink: 'https://example.com/purchase1',
        shareLink: 'https://example.com/share1',
        slides: {
            thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+1',
            overview: 'https://via.placeholder.com/300x200?text=Overview+1',
            components: [
                '/pictures/はぁ/rules/description/hatteiugame_1.webp',
                '/pictures/はぁ/grid/hatteiugame_grid.webp',
                '/pictures/はぁ/pickup/components/box2.png',
                '/pictures/はぁ/pickup/components/準備.1.png',
                
            ]
        },
        rules: {
            description: [
                '/pictures/はぁ/rules/description/hatteiugame_1.webp',
                
            ],
            setup: [
                '/pictures/はぁ/rules/setup/hatteiugame_2.webp',
        
            ],
            gameplay: [
                '/pictures/はぁ/rules/gameplay/hatteiugame_3.webp',
                '/pictures/はぁ/rules/gameplay/hatteiugame_4.webp',
                '/pictures/はぁ/rules/gameplay/hatteiugame_5.webp',
            ],
            endgame: [
                '/pictures/はぁ/rules/endgame/hatteiugame_6.webp',
                '/pictures/はぁ/rules/endgame/hatteiugame_7.webp'
            ]
        }
    },
    {
        id:1006,
        grid: '/pictures/ボブジテン/grid/bobujitenn_grid.webp',
        name: 'ボブジテン',
        // 46文字まで
        explanation:"カタカナ語を日本語だけで説明しよう！伝われば得点！当てても得点！",
        likes: {
            count: 3,
            timestamps: []
        },
        purchaseLink: 'https://example.com/purchase1',
        shareLink: 'https://example.com/share1',
        slides: {
            thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+1',
            overview: 'https://via.placeholder.com/300x200?text=Overview+1',
            components: [
                '/pictures/ボブジテン/rules/description/bobujitenn_1.webp',
                '/pictures/ボブジテン/grid/bobujitenn_grid.webp',
                '/pictures/ボブジテン/pickup/components/box2.png',
                '/pictures/ボブジテン/pickup/components/準備2.png'
            ]
        },
        rules: {
            description: [
                '/pictures/ボブジテン/rules/description/bobujitenn_1.webp',
                
            ],
            setup: [
                '/pictures/ボブジテン/rules/setup/bobujitenn_2.webp',
                '/pictures/ボブジテン/rules/setup/bobujitenn_3.webp'
            ],
            gameplay: [
                '/pictures/ボブジテン/rules/gameplay/bobujitenn_4.webp',
                '/pictures/ボブジテン/rules/gameplay/bobujitenn_5.webp',
                '/pictures/ボブジテン/rules/gameplay/bobujitenn_6.webp',
            ],
            endgame: [
                '/pictures/ボブジテン/rules/endgame/bobujitenn_7.webp',
                '/pictures/ボブジテン/rules/endgame/bobujitenn_8.webp'
            ]
        }
    },
    {
        id:1007,
        grid: '/pictures/Ito/grid/ito_grid.webp',
        name: 'ito',
        // 46文字まで
        explanation:"80ならゾウ？3ならアリかな？テーマにあわせて数字を表現！",
        likes: {
            count: 3,
            timestamps: []
        },
        purchaseLink: 'https://example.com/purchase1',
        shareLink: 'https://example.com/share1',
        slides: {
            thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+1',
            overview: 'https://via.placeholder.com/300x200?text=Overview+1',
            components: [
                '/pictures/Ito/rules/description/ito_1.webp',
                '/pictures/Ito/grid/ito_grid.webp',
                '/pictures/Ito/pickup/components/grid1.png',
                '/pictures/Ito/pickup/components/準備5.png',
            ]
        },
        rules: {
            description: [
                '/pictures/Ito/rules/description/ito_1.webp',
                
            ],
            setup: [
                '/pictures/Ito/rules/setup/ito_2.webp',
                
            ],
            gameplay: [
                '/pictures/Ito/rules/gameplay/ito_3.webp',
                '/pictures/Ito/rules/gameplay/ito_4.webp',
                '/pictures/Ito/rules/gameplay/ito_5.webp',
                '/pictures/Ito/rules/gameplay/ito_6.webp',
                '/pictures/Ito/rules/gameplay/ito_7.webp',
                '/pictures/Ito/rules/gameplay/ito_8.webp',
                '/pictures/Ito/rules/gameplay/ito_9.webp',
            ],
            endgame: [
                '/pictures/Ito/rules/endgame/ito_10.webp',       
            ]
        }
    },
    {
        id:1008,
        grid: '/pictures/バトルライン/grid/battleline_grid.webp',
        name: 'バトルライン',
        // 46文字まで
        explanation:"戦略と駆け引きでフラッグを奪い合え！麻雀っぽいなんども遊びたくなる大作！",
        likes: {
            count: 3,
            timestamps: []
        },
        purchaseLink: 'https://example.com/purchase1',
        shareLink: 'https://example.com/share1',
        slides: {
            thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+1',
            overview: 'https://via.placeholder.com/300x200?text=Overview+1',
            components: [
                '/pictures/バトルライン/rules/description/battleline_1.webp',
                '/pictures/バトルライン/rules/description/battleline_2.webp',
                '/pictures/バトルライン/grid/battleline_grid.webp',
                '/pictures/バトルライン/pickup/components/box.webp',
                'https://via.placeholder.com/300x200?text=Component+1-3'
            ]
        },
        rules: {
            description: [
                '/pictures/バトルライン/rules/description/battleline_1.webp',
                '/pictures/バトルライン/rules/description/battleline_2.webp'
            ],
            setup: [
                '/pictures/バトルライン/rules/setup/battleline_3.webp',
                '/pictures/バトルライン/rules/setup/battleline_4.webp'
            ],
            gameplay: [
                '/pictures/バトルライン/rules/gameplay/battleline_5.webp',
                '/pictures/バトルライン/rules/gameplay/battleline_6.webp',
                '/pictures/バトルライン/rules/gameplay/battleline_7.webp',
                '/pictures/バトルライン/rules/gameplay/battleline_8.webp',
                '/pictures/バトルライン/rules/gameplay/battleline_9.webp',
                '/pictures/バトルライン/rules/gameplay/battleline_10.webp',
                '/pictures/バトルライン/rules/gameplay/battleline_11.webp',
                '/pictures/バトルライン/rules/gameplay/battleline_12.webp',
            ],
            endgame: [
                '/pictures/バトルライン/rules/endgame/battleline_13.webp',
                '/pictures/バトルライン/rules/endgame/battleline_14.webp'
            ]
        }
    },
    {
        id:1009,
        grid: '/pictures/Skull/grid/skull_grid.webp',
        name: 'SKULL',
        // 46文字まで
        explanation:"花で勝負か。ドクロの罠か。シンプルながら奥深い心理戦ゲームの傑作！",
        likes: {
            count: 3,
            timestamps: []
        },
        purchaseLink: 'https://example.com/purchase1',
        shareLink: 'https://example.com/share1',
        slides: {
            thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+1',
            overview: 'https://via.placeholder.com/300x200?text=Overview+1',
            components: [
                '/pictures/Skull/rules/description/skull_1.webp',
                '/pictures/Skull/rules/description/skull_2.webp',
                '/pictures/Skull/grid/skull_grid.webp',
                
            ]
        },
        rules: {
            description: [
                '/pictures/Skull/rules/description/skull_1.webp',
                '/pictures/Skull/rules/description/skull_2.webp'
            ],
            setup: [
                '/pictures/Skull/rules/setup/skull_3.webp',
                '/pictures/Skull/rules/setup/skull_4.webp'
            ],
            gameplay: [
                '/pictures/Skull/rules/gameplay/skull_5.webp',
                '/pictures/Skull/rules/gameplay/skull_6.webp',
                '/pictures/Skull/rules/gameplay/skull_7.webp',
                '/pictures/Skull/rules/gameplay/skull_8.webp',
                '/pictures/Skull/rules/gameplay/skull_9.webp',
                '/pictures/Skull/rules/gameplay/skull_10.webp',
                '/pictures/Skull/rules/gameplay/skull_11.webp',
                '/pictures/Skull/rules/gameplay/skull_12.webp',
                '/pictures/Skull/rules/gameplay/skull_13.webp',
            ],
            endgame: [
                '/pictures/Skull/rules/endgame/skull_14.webp',
                '/pictures/Skull/rules/endgame/skull_15.webp',
                '/pictures/Skull/rules/endgame/skull_16.webp'
            ]
        }
    },
];

// 現在の状態を管理する変数
// home=0,　ゲームid管理1001~


const routes = [
    { path: "/", view: () => renderPage(0) },
    { path: "/games/:id", view: (params) => renderPage(params.id) }
];
const matchRoute = (path) => {
    for (const route of routes) {
        const paramNames = [];
        const regexPath = route.path.replace(/:([^/]+)/g, (match, paramName) => {
            paramNames.push(paramName);
            return "([^/]+)";
        });

        const match = path.match(new RegExp(`^${regexPath}$`));
        if (match) {
            const params = match.slice(1).reduce((params, value, index) => {
                params[paramNames[index]] = value;
                return params;
            }, {});
            return { route, params };
        }
    }
    return null;
};
const handleRouting = (path) => {
    const matchedRoute = matchRoute(path);
    if (matchedRoute) {
        matchedRoute.route.view(matchedRoute.params);
    } else {
        app.innerHTML = "<h1>404 - Not Found</h1><p>Page not found!</p>";
    }
};
window.addEventListener("popstate", () => {
    
    handleRouting(window.location.pathname);
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 0);
});

//グリッドの表示順を規定して配列を返す関数
function gridSort(focusItem){
    if (focusItem=="home"){
        //homeが指定されたときはgamesのlikesの値によってsortをおこなってnameが格納された配列を返す
        // likes.count の値でソートし、name を返す
        return games.sort((a, b) => b.likes.count - a.likes.count).map(game => game.name);
    }else{
        //focusItemにはゲームの名前:nameが渡される。このときはfocusItem以外の要素をgamesからとりだして配列に格納して返す。
        // focusItem 以外のゲームの name を返す
        return games.filter(game => game.name !== focusItem).map(game => game.name);

    }
};

//gridSortの結果に沿って画面の表示を変更する。home指定で初期状態を呼び出す。
function createGridItems(focusItem) {
    let gridContainer;
    if (focusItem==="home"){
        gridContainer=document.getElementById("home-grid")
    }else{
        gridContainer = document.getElementById("game-grid");
    }

    // 既存のエレメントを把握
    const existingItems = {};
    gridContainer.childNodes.forEach(child => {
        if (child.className) {
            const gameName = child.className.replace('grid-item ', '');
            existingItems[gameName] = child;
        }
    });

    const sortedGames = gridSort(focusItem); // ソートされたゲーム名の配列を取得

    sortedGames.forEach(gameName => {
        const game = games.find(g => g.name === gameName);
        let gridItem;
        if (existingItems[gameName]) {
            gridItem = existingItems[gameName];
            gridItem.style.display = 'block';
        } else {
            gridBox = document.createElement("div");
            gridBox.classList.add('grid-box')
            gridItem = document.createElement('div');
            gridItem.className = `grid-item ${game.name}`;
            const img = document.createElement('img');
            img.src = game.grid;
            gridItem.appendChild(img);
            // gridBoxにgridItemを追加
            gridBox.appendChild(gridItem);

            // タイトルを作成して追加
            const gridTitle = document.createElement('h3');
            gridTitle.textContent = game.name;
            gridTitle.classList.add('grid-title');
            gridBox.appendChild(gridTitle);

            // 簡易説明を作成して追加
            const description = document.createElement('p');
            description.textContent = game.explanation;
            description.classList.add('grid-description'); 
            gridBox.appendChild(description);

            // クリックイベントの追加
            gridItem.addEventListener('click', () => {
                const path = `/games/${game.id}`;
                history.pushState({}, path, path);
                handleRouting(path);
            });

        }
        gridContainer.appendChild(gridBox)
    });

    // 配列に存在しないものは非表示にする
    Object.keys(existingItems).forEach(gameName => {
        if (!sortedGames.includes(gameName)) {
            existingItems[gameName].style.display = 'none';
        }
    });
}

class Carousel {
    constructor(carouselElement) {
        this.carouselElement = carouselElement;
        this.carouselImages = carouselElement.querySelector('.carousel-images');
        this.carouselDots = carouselElement.querySelector('.carousel-dots');
        this.images = this.carouselImages.querySelectorAll('img');
        this.totalImages = this.images.length;
        this.currentIndex = 0;
        this.startX = 0;
        this.endX = 0;

        this.initDots();
        this.updateCarousel();

        const leftArea = carouselElement.querySelector('.click-area.left');
        const rightArea = carouselElement.querySelector('.click-area.right');

        leftArea.addEventListener('click', () => this.prevImage());
        rightArea.addEventListener('click', () => this.nextImage());
        this.carouselDots.addEventListener('click', (e) => this.dotNavigation(e));

        this.carouselElement.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: true });
        this.carouselElement.addEventListener('touchend', (e) => this.handleTouchEnd(e), { passive: true });
    }

    initDots() {
        for (let i = 0; i < this.totalImages; i++) {
            const dot = document.createElement('span');
            if (i === this.currentIndex) {
                dot.classList.add('active');
            }
            this.carouselDots.appendChild(dot);
        }
    }

    updateCarousel() {
        const imageWidth=this.images[0].clientWidth;
        const offset = -this.currentIndex * imageWidth; 
        this.carouselImages.style.transform = `translateX(${offset}px)`;

        const dots = this.carouselDots.querySelectorAll('span');
        dots.forEach(dot => dot.classList.remove('active'));
        dots[this.currentIndex].classList.add('active');
    }

    prevImage() {
        this.currentIndex = (this.currentIndex - 1 + this.totalImages) % this.totalImages;
        this.updateCarousel();
    }

    nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.totalImages;
        this.updateCarousel();
    }

    dotNavigation(e) {
        if (e.target.tagName === 'SPAN') {
            const dots = Array.from(this.carouselDots.children);
            this.currentIndex = dots.indexOf(e.target);
            this.updateCarousel();
        }
    }

    handleTouchStart(e) {
        this.startX = e.touches[0].clientX;
    }

    handleTouchEnd(e) {
        this.endX = e.changedTouches[0].clientX;
        this.handleSwipe();
    }

    handleSwipe() {
        if (this.startX - this.endX > 50) {
            this.nextImage();
        } else if (this.endX - this.startX > 50) {
            this.prevImage();
        }
    }
}

class Accordion {
    constructor(element) {
        this.accordion = element;
        this.header = this.accordion.querySelector('.accordion-header');
        this.toggleButton = this.accordion.querySelector('.toggleButton');
        this.content = this.accordion.querySelector('.accordion-content');
        this.init();
    }

    init() {
        this.header.addEventListener('click', () => this.toggle());
        // this.toggleButton.addEventListener('click', () => this.toggle());
        
    }

    toggle() {
        if (this.accordion.classList.contains('closed')) {
            this.accordion.classList.remove('closed');
            this.accordion.classList.add('open');
            this.content.style.display = 'flex';
            this.toggleButton.style.backgroundImage = "url('/pictures/system_design/アコーディオン_close.png')"; // 開いた状態の画像URL
        } else {
            this.accordion.classList.remove('open');
            this.accordion.classList.add('closed');
            this.content.style.display = 'none';
            this.toggleButton.style.backgroundImage = "url('/pictures/system_design/アコーディオン_open.png')"; // 閉じた状態の画像URL
        }
    }
}

function createCarousel(gamename) {
    const game=games.find(game=>game.name===gamename);
    const carouselContainer = document.createElement('div');
    carouselContainer.classList.add('carousel');

    const carouselImages = document.createElement('div');
    carouselImages.classList.add('carousel-images');
    game.slides.components.forEach(imgSrc => {
        const img = document.createElement('img');
        img.src = imgSrc;
        carouselImages.appendChild(img);
    });

    const leftArea = document.createElement('div');
    leftArea.classList.add('click-area', 'left');
    const rightArea = document.createElement('div');
    rightArea.classList.add('click-area', 'right');

    const carouselDots = document.createElement('div');
    carouselDots.classList.add('carousel-dots');

    carouselContainer.appendChild(carouselImages);
    carouselContainer.appendChild(leftArea);
    carouselContainer.appendChild(rightArea);
    carouselContainer.appendChild(carouselDots);

    const gameInfo = document.createElement('div');
    gameInfo.classList.add('game-info');
    carouselContainer.appendChild(gameInfo);

    const gameName = document.createElement('h2');
    gameName.textContent = game.name;
    gameName.classList.add("gametitle")
    
    gameInfo.appendChild(gameName);

    const explanation = document.createElement('p');
    explanation.textContent=game.explanation;
    explanation.classList.add("explanation");
    gameInfo.appendChild(explanation);

    const gameControls = document.createElement('div');
    gameControls.classList.add('game-controls');

    // 購入ボタンを作成
    const purchaseButton = document.createElement('button');
    const purchaseIcon = document.createElement('img');
    purchaseIcon.src = '/pictures/system_design/purchase_icon.svg'; // 購入アイコンのパス
    purchaseIcon.classList.add('pickup-button-icon');
    purchaseButton.appendChild(purchaseIcon);
    purchaseButton.appendChild(document.createTextNode('ほしい'));
    purchaseButton.classList.add("purchaseButton");
    // 購入ボタンがクリックされた際のイベント処理

    // シェアボタンを作成
    const shareButton = document.createElement('button');
    const shareIcon = document.createElement('img');
    shareIcon.src = '/pictures/system_design/share_icon.svg'; // シェアアイコンのパス
    shareIcon.classList.add('pickup-button-icon');
    shareButton.appendChild(shareIcon);
    shareButton.appendChild(document.createTextNode('ひろめる'));
    shareButton.classList.add("shareButton");
    // シェアボタンがクリックされた際のイベント処理
    shareButton.addEventListener("click",copyToClipboard);

    gameControls.appendChild(purchaseButton);
    
    gameControls.appendChild(shareButton);

    carouselContainer.appendChild(gameControls);

    const carouselWrapper = document.createElement('div');
    carouselWrapper.classList.add("carousel-wrapper");
    // carouselWrapper.appendChild(gameName);
    carouselWrapper.appendChild(carouselContainer);
    // carouselWrapper.appendChild(gameControls);

    document.getElementById('pickup-carousels').appendChild(carouselWrapper);

    new Carousel(carouselContainer);
}

function createRuleCarousel(images) {
    const carouselContainer = document.createElement('div');
    carouselContainer.classList.add('carousel');

    const carouselImages = document.createElement('div');
    carouselImages.classList.add('carousel-images');
    images.forEach(imgSrc => {
        const img = document.createElement('img');
        img.src = imgSrc;
        carouselImages.appendChild(img);
    });

    const leftArea = document.createElement('div');
    leftArea.classList.add('click-area', 'left');
    const rightArea = document.createElement('div');
    rightArea.classList.add('click-area', 'right');

    const carouselDots = document.createElement('div');
    carouselDots.classList.add('carousel-dots');

    carouselContainer.appendChild(carouselImages);
    carouselContainer.appendChild(leftArea);
    carouselContainer.appendChild(rightArea);
    carouselContainer.appendChild(carouselDots);

    new Carousel(carouselContainer);

    return carouselContainer;
}

function createAccordion(gameName) {
    const titles = ["かんたん説明", "ゲームの準備", "ゲームの流れ", "ゲームの終了"];
    const container = document.getElementById('accordion-container');
    const game = games.find(g => g.name === gameName);

    titles.forEach((title, index) => {
        const accordion = document.createElement('div');
        accordion.classList.add('accordion', 'closed');

        const header = document.createElement('div');
        header.classList.add('accordion-header');

        const span = document.createElement('span');
        span.textContent = title;

        const button = document.createElement('button');
        button.classList.add('toggleButton');
        

        header.appendChild(span);
        header.appendChild(button);
        accordion.appendChild(header);

        const content = document.createElement('div');
        content.classList.add('accordion-content');

        let images;
        switch (index) {
            case 0:
                images = game.rules.description;
                break;
            case 1:
                images = game.rules.setup;
                break;
            case 2:
                images = game.rules.gameplay;
                break;
            case 3:
                images = game.rules.endgame;
                break;
        }

        const carousel = createRuleCarousel(images);
        content.appendChild(carousel);
        accordion.appendChild(content);
        container.appendChild(accordion);
        new Accordion(accordion);
    });
}

function renderPage(state){
    window.scrollTo(0, 0);
    // state=Number(state);
    if(state===0){
        const homeSection = document.querySelector('.Home');
        const pickUpSection = document.querySelector('.PickUp');
        homeSection.style.display = 'grid';
        pickUpSection.style.display = 'none';
    }else{
        
        // 現状.PickUpにあるコンテンツを消去
        const pickUpSection = document.querySelector('.PickUp');
        const homeSection=document.querySelector(".Home");
        document.querySelector('#pickup-carousels').innerHTML = '';
        document.querySelector('#accordion-container').innerHTML = '';
        document.querySelector('#game-grid').innerHTML = '';

        // stateで得たidからnameを取得
        state=Number(state);
        const game = games.find(game => game.id === state);
        console.log(game.name);
        const gameName = game.name;
        
        // pickUp画面をレンダー
        createCarousel(gameName);
        createAccordion(gameName);
        createGridItems(gameName);
        
        homeSection.style.display='none';
        pickUpSection.style.display = 'grid';
    }
}

function copyToClipboard() {
    const url = window.location.href;
    
    navigator.clipboard.writeText(url).then(() => {
        const notification = document.getElementById('notification');
        notification.classList.add('show');

        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
}

//homeに戻る関数
function screenRender(){
    const path = `/`;
    history.pushState({}, path, path);
    handleRouting(path);
}

//home画面
createGridItems("home");
handleRouting(window.location.pathname)
window.scrollTo(0, 0);
//pickUp画面
// createCarousel("ニムト");
// createAccordion("ニムト");
// createGridItems("ニムト");

