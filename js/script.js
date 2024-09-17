// 雛形
/*
{
    id:xxxx,
    grid: 'https://via.placeholder.com/300x200?text=grid',
    name: 'ゲーム1',
    // 46文字まで
    explanation:"text",
    info:{
        num_players:"",
        playtime:"",
        price:"",
        system_tag:[],
        who:[],
        where:[]
    },
    details:{
        gameStory:"準備中です",
        basicInfo:{
            refPrice:"xxxx円",
            numPlayers:"x人",
            playTime:"x分",
            release:"xxxx年",
            difficulty:"xxx",
            ageRange:"x歳以上",
            gameSystem:"",
            size:"縦：横：高さ=20:20:4"
        },
        contents:["ルール説明書","舞台カード","フラッグ"],
        credits:{
            designer:["クニツィア","大塚健吾"],
            artwork:["ローレンス","ビーナ","マーク"],
            company:["クロノノーツゲームズ","GMT","ランドスリべングゲームズ"]
        }
    },
    qAndA:[
            {
                "question": "準備中です",
                "answer": ""
            },
            {
                "question": "",
                "answer": ""
            }
        ],

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
        grid: '/pictures/ガイスター/grid/gaisuta_grid_400.webp',
        name: 'ガイスター',
        explanation:"大人と子供が互角に戦える！相手の心理を読んで戦略を立てよう！",
        info:{
            num_players:"2人",
            playtime:"15分",
            price:"3000円",
            system_tag:["心理戦",],
            who:["恋人と","家族と"],
            where:["家で"]
        },
        details:{
            gameStory:"ガイスターはオバケを使って戦うボードゲームです。オバケには青色の良いオバケと赤色の悪いオバケがいます。しかし将棋やチェスなどとは異なり相手のコマがどちらであるのかがわかりません。プレイヤーは相手の性格や表情、コマの動きなどから役割を予想して戦うのが特徴です。",
            basicInfo:{
                refPrice:"3000円",
                numPlayers:"2人",
                playTime:"15分",
                release:"1982年",
                difficulty:"かんたん",
                ageRange:"6歳以上",
                gameSystem:"心理戦",
                size:"縦：横：高さ=22.3:22.3:5.1"
            },
            contents:["ルールシート","ゲームボード","お化けコマ16個"],
            credits:{
                designer:["アレックス・ランドルフ"],
                artwork:["ヨハン・リュッティンガー"],
                company:["メビウスゲームズ"]
            }
        },
        qAndA:[
                {
                    "question": "オバケコマは斜めに移動できますか？",
                    "answer": "斜めの移動はできません。前後左右に1マスずつ移動できます。"
                },
                {
                    "question": "矢印の脱出マスに到達したら勝ちですか？",
                    "answer": "脱出マスに到達したのちにボードの外にコマをだせたら勝ちです。"
                }
            ],
        likes: {
            count: 4,
            timestamps: []
        },
        purchaseLink: 'https://amzn.to/3zhMt1x',
        shareLink: 'https://example.com/share2',
        slides: {
            thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+2',
            overview: 'https://via.placeholder.com/300x200?text=Overview+2',
            components: [
                '/pictures/ガイスター/rules/description/gaisuta_1.webp',
                '/pictures/ガイスター/rules/description/gaisuta_2.webp',
                '/pictures/ガイスター/pickup/components/gaisuta_grid_800.webp',
                '/pictures/ガイスター/pickup/components/gaisuta_box.webp',
                '/pictures/ガイスター/pickup/components/gaisuta_setting.webp',
            ]
        },
        rules: {
            description: [
                '/pictures/ガイスター/rules/description/gaisuta_1.webp',
                '/pictures/ガイスター/rules/description/gaisuta_2.webp',
            ],
            setup: [
                '/pictures/ガイスター/rules/setup/gaisuta_3.webp',
            ],
            gameplay: [
                '/pictures/ガイスター/rules/gameplay/gaisuta_4.webp',
                '/pictures/ガイスター/rules/gameplay/gaisuta_5.webp',
            ],
            endgame: [
                '/pictures/ガイスター/rules/endgame/gaisuta_6.webp',
                '/pictures/ガイスター/rules/endgame/gaisuta_7.webp',
                '/pictures/ガイスター/rules/endgame/gaisuta_8.webp',
            ]
        }
    },
    {
        id:1002,
        grid: '/pictures/ごきぶり/grid/gokiburi_grid.webp',
        name: 'ごきぶりポーカー',
        explanation:'うそをついて害虫を押し付けよう！押し付けられすぎると負け！',
        info:{
            num_players:"2~6人",
            playtime:"20分",
            price:"1800円",
            system_tag:["心理戦","カードゲーム"],
            who:["ともだちと","先輩後輩"],
            where:["ホームパーティで"]
        },
        details:{
            gameStory:"ごきぶりポーカーは嫌な害虫を相手に押し付けあう心理戦ゲームです。プレイヤーは押し付けたい害虫カードを裏向きにしてだれかに差し出してその内容を宣言します。渡されたプレイヤーはその宣言がうそか本当かを見破ります。失敗してしまったら害虫を引き受けなければなりません。",
            basicInfo:{
                refPrice:"1800円",
                numPlayers:"2~6人",
                playTime:"20分",
                release:"2004年",
                difficulty:"かんたん",
                ageRange:"8歳以上",
                gameSystem:"心理戦",
                size:"縦：横：高さ=11:11:3.5"
            },
            contents:["ルール説明書","カード64枚"],
            credits:{
                designer:["ジャック・ゼメ"],
                artwork:["ロルフ・ヴォークト"],
                company:["メビウスゲームズ"]
            }
        },
        qAndA:[
                {
                    "question": "パスは何度でもできますか？",
                    "answer": "他の全員がパスをしている場合はパスをできません。"
                },
            ],
        likes: {
            count: 1,
            timestamps: []
        },
        purchaseLink: 'https://amzn.to/3z5whAu',
        shareLink: 'https://example.com/share3',
        slides: {
            thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+3',
            overview: 'https://via.placeholder.com/300x200?text=Overview+3',
            components: [
                '/pictures/ごきぶり/rules/description/gokiburi_1.webp',
                '/pictures/ごきぶり/pickup/components/gokiburi_grid_800.webp',
                '/pictures/ごきぶり/pickup/components/gokiburi_box.webp',
                '/pictures/ごきぶり/pickup/components/gokiburi_setting.webp',
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
        info:{
            num_players:"2~10人",
            playtime:"20分",
            price:"1700円",
            system_tag:["推測","心理戦"],
            who:["ともだちと","親戚と"],
            where:["パーティで"]
        },
        details:{
            gameStory:"コヨーテはみんなのもっているカードに描かれたコヨーテが何匹いるかを予想するゲームです。ただしプレイヤーは自分のカードを見れないので相手の表情やプレイから予想しなければなりません。ゲームは順番にコヨーテが何匹いるか数字を宣言して進みます。もし前の人の宣言が多すぎるとおもったらコヨーテといいましょう。",
            basicInfo:{
                refPrice:"1700円",
                numPlayers:"2~10人",
                playTime:"20分",
                release:"2003年",
                difficulty:"かんたん",
                ageRange:"10歳以上",
                gameSystem:"推測",
                size:"縦：横：高さ=12.4:9.5:2.5"
            },
            contents:["ルール説明書","ナンバーカード36枚","ライフカード10枚","仮面カード10枚"],
            credits:{
                designer:["スパルタコ・アルベルタレッリ"],
                artwork:["TANSANFABRIK"],
                company:["ニューゲームズオーダー"]
            }
        },
        qAndA:[
                {
                    "question": "1手番前の人以外に対しても「コヨーテ」と言えますか？",
                    "answer": "「コヨーテ」は常に前の手番の人に対してしかいうことはできません。"
                },
                
            ],
        likes: {
            count: 2,
            timestamps: []
        },
        purchaseLink: 'https://amzn.to/3XoJvjX',
        shareLink: 'https://example.com/share4',
        slides: {
            thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+4',
            overview: 'https://via.placeholder.com/300x200?text=Overview+4',
            components: [
                '/pictures/コヨーテ/rules/description/coyote_1.webp',
                '/pictures/コヨーテ/pickup/components/coyote_gird_800.webp',
                '/pictures/コヨーテ/pickup/components/coyote_box.webp',
                '/pictures/コヨーテ/pickup/components/coyote_setting.webp',
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
        info:{
            num_players:"2~10人",
            playtime:"30分",
            price:"1500円",
            system_tag:["バースト","ハンドマネージメント"],
            who:["ともだちと","先輩後輩と", ],
            where:["ともだちの家で"]
        },
        details:{
            gameStory:"ニムトは牛がモチーフのバースト（大減点）を回避するゲームです。プレイヤーは一斉にカードを出してそれらを小さい順に並べます。カードは小さいものから順に場にある列にどんどん蓄積されていきます。しかし各列、6枚目にだしてしまったプレイヤーはその列を引き取らなければなりません。カードには牛の減点が描かれており失点してしまいます。",
            basicInfo:{
                refPrice:"1500円",
                numPlayers:"2~10人",
                playTime:"30分",
                release:"1994年",
                difficulty:"ふつう",
                ageRange:"8歳以上",
                gameSystem:"バースト",
                size:"縦：横：高さ=12.2:9.6:2.1"
            },
            contents:["ルール説明書","牛カード104枚"],
            credits:{
                designer:["ヴォルフガング・クラマー"],
                artwork:["デザインエッジ","ビル・ハーリン","ガティス・スルカ"],
                company:["メビウスゲームズ"]
            }
        },
        qAndA:[
                {
                    "question": "ラウンド終了時に場に残ったカードは次のラウンドでも置いたままですか？",
                    "answer": "いいえ。すべてのカードをよく混ぜて再び4枚の場札をつくってスタートです。"
                },
            ],
        likes: {
            count: 5,
            timestamps: []
        },
        purchaseLink: 'https://amzn.to/3XAfE9j',
        shareLink: 'https://example.com/share5',
        slides: {
            thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+5',
            overview: 'https://via.placeholder.com/300x200?text=Overview+5',
            components: [
                '/pictures/ニムト/rules/description/nimmt_1.webp',
                '/pictures/ニムト/rules/description/nimmt_2.webp',
                '/pictures/ニムト/rules/description/nimmt_3.webp',
                '/pictures/ニムト/rules/description/nimmt_4.webp',
                '/pictures/ニムト/pickup/components/nimmt_grid_800.webp',
                '/pictures/ニムト/pickup/components/nimmt_box.webp',
                '/pictures/ニムト/pickup/components/nimmt_setting.webp',
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
        explanation:"その「はぁ」なんの「はぁ」？演技を当てて得点！当ててもらって得点！",
        info:{
            num_players:"3~8人",
            playtime:"15分",
            price:"1200円",
            system_tag:["表現","パーティ"],
            who:["ともだちと","こどもと",],
            where:["パーティで","飲み会で"]
        },
        details:{
            gameStory:"はぁって言うゲームは「はぁ」のような同じ一言を違ったシチュエーションで演じわけてどの演技であったかを当ててもらうゲームです。言葉だけでなく「ウインク」など表情による演技のお題もあります。",
            basicInfo:{
                refPrice:"1200円",
                numPlayers:"3~8人",
                playTime:"15分",
                release:"2018年",
                difficulty:"かんたん",
                ageRange:"8歳以上",
                gameSystem:"表現",
                size:"縦：横：高さ=14.8:10:2.7"
            },
            contents:["説明書","お題カード30枚","アクトカード8枚","投票用カード8枚","投票チップ64枚","得点チップ56枚"],
            credits:{
                designer:["米光一成"],
                artwork:["セキネシンイチ製作室"],
                company:["幻冬舎"]
            }
        },
        qAndA:[
                {
                    "question": "身振り手振りで表現してもいいですか？",
                    "answer": "禁止です。"
                },
                {
                    "question": "自分の演じたアルファベットも投票カードに裏向きにおきますか？",
                    "answer": "裏向きにおきます。得点計算時にその点も加算されます。"
                }
            ],
        likes: {
            count: 3,
            timestamps: []
        },
        purchaseLink: 'https://amzn.to/4dY71LA',
        shareLink: 'https://example.com/share1',
        slides: {
            thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+1',
            overview: 'https://via.placeholder.com/300x200?text=Overview+1',
            components: [
                '/pictures/はぁ/rules/description/hatteiugame_1.webp',
                '/pictures/はぁ/pickup/components/hatteiugame_grid_800.png',
                '/pictures/はぁ/pickup/components/hatteiugame_box.png',
                '/pictures/はぁ/pickup/components/hatteiugame_setting.png',
                
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
        info:{
            num_players:"3~8人",
            playtime:"30分",
            price:"1500円",
            system_tag:["表現"],
            who:["ともだちと","初対面の人と"],
            where:["カフェで"]
        },
        details:{
            gameStory:"ボブジテンは日本語が大好きなボブに協力してカタカナ語を日本語で説明した辞典をつくるゲームです。プレイヤーはお題のカタカナ語を日本語だけで説明してその内容をあててもらってポイントを集めます。もし間違ってカタカナ語を使った人がいれば指摘することでさらに得点することができます。",
            basicInfo:{
                refPrice:"1500円",
                numPlayers:"3~8人",
                playTime:"30分",
                release:"2017年",
                difficulty:"とてもかんたん",
                ageRange:"10歳以上",
                gameSystem:"表現",
                size:"縦：横：高さ=10:7:2"
            },
            contents:["説明書","お題カード36枚"],
            credits:{
                designer:["カズナ"],
                artwork:["でじ"],
                company:["TUKAPON"]
            }
        },
        qAndA:[
                {
                    "question": "カタカナの指摘をしたらお題の説明はおわりますか？",
                    "answer": "終わります。指摘した人は出題者のカードを受け取って1Ptです。"
                },
                {
                    "question": "カードの裏の数字は得点に関係ありますか？",
                    "answer": "ありません。カードは1枚で1Ptです。"
                }
            ],
        likes: {
            count: 3,
            timestamps: []
        },
        purchaseLink: 'https://a.r10.to/hNKt1n',
        shareLink: 'https://example.com/share1',
        slides: {
            thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+1',
            overview: 'https://via.placeholder.com/300x200?text=Overview+1',
            components: [
                '/pictures/ボブジテン/rules/description/bobujitenn_1.webp',
                '/pictures/ボブジテン/pickup/components/bobujitenn_grid_800.png',
                '/pictures/ボブジテン/pickup/components/bobujitenn_box.png',
                '/pictures/ボブジテン/pickup/components/bobujitenn_setting.png',
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
        info:{
            num_players:"2~10人",
            playtime:"30分",
            price:"2000円",
            system_tag:["表現","協力"],
            who:["ともだちと","初対面の人と"],
            where:["カフェで"]
        },
        details:{
            gameStory:"itoはお題にそって手札の数字の大きさを表現してみんなでカードを出していく協力ゲームです。みんなの価値観を読み取って適切にカードを出しましょう。",
            basicInfo:{
                refPrice:"2000円",
                numPlayers:"2~10人",
                playTime:"30分",
                release:"2019年",
                difficulty:"かんたん",
                ageRange:"8歳以上",
                gameSystem:"表現",
                size:"縦：横：高さ=13.5:9.5:2.5"
            },
            contents:["説明書2枚","ナンバーカード100枚","テーマカード50枚","ライフカード2枚","クモシート"],
            credits:{
                designer:["ナカムラミツル"],
                artwork:["ナカムラミツル"],
                company:["アークライト"]
            }
        },
        qAndA:[
                {
                    "question": "アカイイトとはなんですか？",
                    "answer": "itoはクモノイトとアカイイトの2種類のゲームが遊べます。Ruletteではクモノイトの解説をしております。ゲームに慣れてきたら協力と裏切りルールのアカイイトにも挑戦してみてください。"
                },
                {
                    "question": "ステージクリアしたら使用したナンバーカードはどうしますか？",
                    "answer": "すべて山札に混ぜて再びゲームを開始します。"
                },
            ],
        likes: {
            count: 3,
            timestamps: []
        },
        purchaseLink: 'https://amzn.to/47k72qL',
        shareLink: 'https://example.com/share1',
        slides: {
            thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+1',
            overview: 'https://via.placeholder.com/300x200?text=Overview+1',
            components: [
                '/pictures/Ito/rules/description/ito_1.webp',
                '/pictures/Ito/pickup/components/ito_grid_800.webp',
                '/pictures/Ito/pickup/components/ito_box.webp',
                '/pictures/Ito/pickup/components/ito_setting.webp',
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
        explanation:"戦略と駆け引きでフラッグを奪え！麻雀っぽい何度も遊びたくなる大作！",
        info:{
            num_players:"2人",
            playtime:"20分",
            price:"2700円",
            system_tag:["セットコレクション","ハンドマネージメント"],
            who:["恋人と","親友と"],
            where:["カフェで","家で"]
        },
        details:{
            gameStory:"バトルラインは古代の戦場をモチーフにした頭脳戦カードゲームです。プレイヤーはお互いに9つの「フラッグ」の支配を争い、各所に3枚ずつのカードを配置していきます。数値の高いセットを揃えることで相手より強い部隊を作り、フラッグを制圧していきます。カードを出す順番や組み合わせが重要なためタイミングや手札の管理が勝敗を左右します。",
            basicInfo:{
                refPrice:"2700円",
                numPlayers:"2人",
                playTime:"15~30分",
                release:"2000年",
                difficulty:"ふつう",
                ageRange:"12歳以上",
                gameSystem:"ハンドマネージメント",
                size:"縦：横：高さ=16:11.5:3"
            },
            contents:["ルールブック","部隊カード60枚（6色1~10）","フラッグコマ10個"],
            credits:{
                designer:["ライナー・クニツィア"],
                artwork:["ロジャー・マクゴワン","マーク・シモニッチ"],
                company:["クロノノーツゲームズ","GMTゲームズ","ランドズリベンジゲームズ"]
            }
        },
        qAndA:[
                {
                    "question": "お互いのプレイヤーが役なしのときはどちらが勝ちますか？",
                    "answer": "役があるときと同様に数字の合計値で比較して大きな方が勝ちます。"
                },
                
            ],
        likes: {
            count: 3,
            timestamps: []
        },
        purchaseLink: 'https://amzn.to/4gdrxcy',
        shareLink: 'https://example.com/share1',
        slides: {
            thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+1',
            overview: 'https://via.placeholder.com/300x200?text=Overview+1',
            components: [
                '/pictures/バトルライン/rules/description/battleline_1.webp',
                '/pictures/バトルライン/rules/description/battleline_2.webp',
                '/pictures/バトルライン/pickup/components/battleline_grid_800.webp',
                '/pictures/バトルライン/pickup/components/battleline_box.webp',
                '/pictures/バトルライン/pickup/components/battleline_setting.webp',
                
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
        info:{
            num_players:"3~6人",
            playtime:"20分",
            price:"3000円",
            system_tag:["心理戦","脱落"],
            who:["ともだちと","仕事仲間と"],
            where:["ホームパーティで"]
        },
        details:{
            gameStory:"SKULLはシンプルながらに奥深い心理戦がたのしめるゲームです。プレイヤーは全員で花かドクロのディスクを裏向きにセットし、任意でこれらのディスクに対して「チャレンジ」を行います。チャレンジとは場の花ディスクの枚数を予想して表向きにすることです。チャレンジに2回成功すると勝者となりますが罠のドクロをしのばせているプレイヤーもいるので相手の心理を読み取ってうまく立ち回りましょう。",
            basicInfo:{
                refPrice:"3000円",
                numPlayers:"3~6人",
                playTime:"15~30分",
                release:"2011年",
                difficulty:"ふつう",
                ageRange:"10歳以上",
                gameSystem:"心理戦",
                size:"縦：横：高さ=13.1:13.1:5.1"
            },
            contents:["説明書","花ディスク3枚（6種類）","ドクロディスク1枚（6種類）","プレイマット1枚（6種類）"],
            credits:{
                designer:["エルヴェ・マルリー"],
                artwork:["トーマス・ヴァーチクス"],
                company:["ホビージャパン"]
            }
        },
        qAndA:[
                {
                    "question": "ディスクが残り1枚となりマットに追加で置くディスクがないときどうなりますか？",
                    "answer": "ディスクを追加で置けない場合、プレイヤーはチャレンジを行うことしかできません。"
                },
            ],
        likes: {
            count: 3,
            timestamps: []
        },
        purchaseLink: 'https://amzn.to/3B8KfC0',
        shareLink: 'https://example.com/share1',
        slides: {
            thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+1',
            overview: 'https://via.placeholder.com/300x200?text=Overview+1',
            components: [
                '/pictures/Skull/rules/description/skull_1.webp',
                '/pictures/Skull/rules/description/skull_2.webp',
                '/pictures/Skull/pickup/components/skull_grid_800.webp',
                '/pictures/Skull/pickup/components/skull_box.webp',
                '/pictures/Skull/pickup/components/skull_setting.webp',
                
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
    {
        id:1010,
        grid: '/pictures/スカウト/grid/scout_grid_400.webp',
        name: 'SCOUT!',
        explanation:"新感覚の大富豪！だせなくなったらスカウト！",
        info:{
            num_players:"3~5人",
            playtime:"15分",
            price:"2200円",
            system_tag:["ハンドマネージメント","セットコレクション"],
            who:["ともだちと","仕事仲間と"],
            where:["カフェで"]
        },
        likes: {
            count: 4,
            timestamps: []
        },
        details:{
            gameStory:"SCOUT!は大富豪をベースにした得点制のカードゲームです。カードの出し方は123など連番か22などの同数です。カードを出すと前の手番で出されたカードをすべてポイントとして受け取ります。また、だせなくなったときや好みのカードがあったときは「スカウト」をすることで場のカードをもらって手札を調整することができます。スカウトを駆使して高得点を目指しましょう。",
            basicInfo:{
                refPrice:"3000円",
                numPlayers:"3~5人",
                playTime:"15分",
                release:"2019年",
                difficulty:"ふつう",
                ageRange:"9歳以上",
                gameSystem:"ハンドマネージメント",
                size:"縦：横：高さ=12.6:10:2.5"
            },
            contents:["説明書","カード45枚","得点チップ27枚","ダブルアクションマーカー5枚","強弱早見表2枚",],
            credits:{
                designer:["梶野桂"],
                artwork:["浅岡昇平"],
                company:["ワンモアゲーム！"]
            }
        },
        qAndA:[
                {
                    "question": "ラウンド開始時に手札を上下にまとめて回転できますが、プレイ中に回転をすることはできますか？",
                    "answer": "できません。ラウンド開始時に一度だけ回転することができます。"
                },
            ],
        purchaseLink: 'https://a.r10.to/hg95wM',
        shareLink: 'https://example.com/share2',
        slides: {
            thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+2',
            overview: 'https://via.placeholder.com/300x200?text=Overview+2',
            components: [
                "/pictures/スカウト/rules/description/scout!_1.webp",
                "/pictures/スカウト/rules/description/scout!_2.webp",
                "/pictures/スカウト/rules/description/scout!_3.webp",
                "/pictures/スカウト/rules/description/scout!_4.webp",
                "/pictures/スカウト/pickup/components/scout_grid_800.webp",
                "/pictures/スカウト/pickup/components/scout_box.webp",
                "/pictures/スカウト/pickup/components/scout_setting.webp",
                "/pictures/スカウト/pickup/components/scout_component.webp",

                
            ]
        },
        rules: {
            description: [
                "/pictures/スカウト/rules/description/scout!_1.webp",
                "/pictures/スカウト/rules/description/scout!_2.webp",
                "/pictures/スカウト/rules/description/scout!_3.webp",
                "/pictures/スカウト/rules/description/scout!_4.webp",
                
            ],
            setup: [
                "/pictures/スカウト/rules/setup/scout!_5.webp",
                "/pictures/スカウト/rules/setup/scout!_6.webp",
                "/pictures/スカウト/rules/setup/scout!_7.webp",
            ],
            gameplay: [
                "/pictures/スカウト/rules/gameplay/scout!_8.webp",
                "/pictures/スカウト/rules/gameplay/scout!_9.webp",
                "/pictures/スカウト/rules/gameplay/scout!_10.webp",
                "/pictures/スカウト/rules/gameplay/scout!_11.webp",
                "/pictures/スカウト/rules/gameplay/scout!_12.webp",
                "/pictures/スカウト/rules/gameplay/scout!_13.webp",
                "/pictures/スカウト/rules/gameplay/scout!_14.webp",
                "/pictures/スカウト/rules/gameplay/scout!_15.webp",
                "/pictures/スカウト/rules/gameplay/scout!_16.webp",
                "/pictures/スカウト/rules/gameplay/scout!_17.webp",
                "/pictures/スカウト/rules/gameplay/scout!_18.webp",
                "/pictures/スカウト/rules/gameplay/scout!_19.webp",
            ],
            endgame: [
                "/pictures/スカウト/rules/endgame/scout!_20.webp"

            ]
        }
    },
    {
        id:1011,
        grid: '/pictures/ラブレター/grid/loveletter_grid_400.webp',
        name: 'Love Letter',
        explanation:"手札は1枚！姫に恋文を届けるべく家臣たちの思惑が交錯する！",
        info:{
            num_players:"2~5人",
            playtime:"5分",
            price:"2000円",
            system_tag:["推測",],
            who:["ともだちと","家族と"],
            where:["カフェで"]
        },
        details:{
            gameStory:"Love Letterは姫へ恋文を届けるキャラクターたちをテーマにしたシンプルなカードゲームです。プレイヤーは手札を1枚だけもちこの札が城の協力者です。手番では新たな1枚をひいてどちらかを場に出します。場に出されたカードはさまざまな効果でゲームを動かします。あらゆる効果で他のプレイヤーを「脱落」させて恋文を渡す最後のひとりになりましょう。",
            basicInfo:{
                refPrice:"2000円",
                numPlayers:"2~5人",
                playTime:"5分",
                release:"2014年",
                difficulty:"かんたん",
                ageRange:"10歳以上",
                gameSystem:"推測",
                size:"縦：横：高さ=15.3:9.9:3.7"
            },
            contents:["説明書","ゲームカード38枚","ルールカード4枚","一覧カード10枚","トークン12個","羽ペンタイル",],
            credits:{
                designer:["カナイセイジ"],
                artwork:["杉浦のぼる"],
                company:["アークライト"]
            }
        },
        qAndA:[
                {
                    "question": "羽ペンタイルは何に使いますか？",
                    "answer": "スタートプレイヤーを決めるのに使います。先をつまんでテーブルの上30cmほどのところから落としてペン先が刺す方向に座っているひとがスタートプレイヤーです。"
                },
            ],
        likes: {
            count: 4,
            timestamps: []
        },
        purchaseLink: 'https://amzn.to/4dWAkxT',
        shareLink: 'https://example.com/share2',
        slides: {
            thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+2',
            overview: 'https://via.placeholder.com/300x200?text=Overview+2',
            components: [
                "/pictures/ラブレター/rules/description/loveletter_1.webp",
                "/pictures/ラブレター/rules/description/loveletter_2.webp",
                "/pictures/ラブレター/rules/description/loveletter_3.webp",
                "/pictures/ラブレター/pickup/components/loveletter_grid_800.webp",
                "/pictures/ラブレター/pickup/components/loveletter_box.webp",
                "/pictures/ラブレター/pickup/components/loveletter_component.webp",

                
            ]
        },
        rules: {
            description: [
                "/pictures/ラブレター/rules/description/loveletter_1.webp",
                "/pictures/ラブレター/rules/description/loveletter_2.webp",
                "/pictures/ラブレター/rules/description/loveletter_3.webp",
                
            ],
            setup: [
                "/pictures/ラブレター/rules/setup/loveletter_4.webp",
                "/pictures/ラブレター/rules/setup/loveletter_5.webp",

            ],
            gameplay: [
                "/pictures/ラブレター/rules/gameplay/loveletter_6.webp",
                "/pictures/ラブレター/rules/gameplay/loveletter_7.webp",
                "/pictures/ラブレター/rules/gameplay/loveletter_8.webp",
                "/pictures/ラブレター/rules/gameplay/loveletter_9.webp",
                "/pictures/ラブレター/rules/gameplay/loveletter_10.webp",
                "/pictures/ラブレター/rules/gameplay/loveletter_11.webp",

            ],
            endgame: [
                "/pictures/ラブレター/rules/endgame/loveletter_12.webp",
                "/pictures/ラブレター/rules/endgame/loveletter_13.webp",
                "/pictures/ラブレター/rules/endgame/loveletter_14.webp",

            ]
        }
    },
    {
        id:1012,
        grid: '/pictures/ナインタイル/grid/ninetile_grid400.webp',
        name: 'ナインタイル',
        // 46文字まで
        explanation:"すばやくタイルをそろえるスピードゲーム！ひっくり返して！動かして！",
        info:{
            num_players:"2~4人",
            playtime:"15分",
            price:"3000円",
            system_tag:["パズル","スピード"],
            who:["こどもと","家族と"],
            where:["家で"]
        },
        details:{
            gameStory:"ナインタイルは9つのタイルを自由に並び替えてお題の絵柄をいち早くそろえるゲームです。タイルには表と裏があり絵柄が異なるため裏返しも行いながらプレイしなければなりません。スピードと判断が試されるゲームです。",
            basicInfo:{
                refPrice:"3000円",
                numPlayers:"2~4人",
                playTime:"15分",
                release:"2015年",
                difficulty:"とてもかんたん",
                ageRange:"6歳以上",
                gameSystem:"パズル",
                size:"縦：横：高さ=11:6.5:3.7"
            },
            contents:["ルール説明書","ゲームタイル36枚","お題カード30枚",],
            credits:{
                designer:["ジーン・クラウデ・ペロン"],
                artwork:["佐々木隼"],
                company:["オインクゲームズ"]
            }
        },
        qAndA:[
                {
                    "question": "絵柄をそろえたとき回転したら同じものも正解となりますか？",
                    "answer": "正解となります。"
                },
                
            ],
        likes: {
            count: 3,
            timestamps: []
        },
        purchaseLink: 'https://amzn.to/3z3OSgl',
        shareLink: 'https://example.com/share1',
        slides: {
            thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+1',
            overview: 'https://via.placeholder.com/300x200?text=Overview+1',
            components: [
                "/pictures/ナインタイル/rules/description/ninetile_1.webp",
                "/pictures/ナインタイル/rules/description/ninetile_2.webp",
                "/pictures/ナインタイル/rules/description/ninetile_3.webp",
                '/pictures/ナインタイル/pickup/components/ninetile_grid800.webp',
                "/pictures/ナインタイル/pickup/components/ninetile_box800.webp",
                '/pictures/ナインタイル/pickup/components/ninetile_setting800.webp',
                "/pictures/ナインタイル/pickup/components/ninetile_comoponent800.webp"
            ]
        },
        rules: {
            description: [
                '/pictures/ナインタイル/rules/description/ninetile_1.webp',
                '/pictures/ナインタイル/rules/description/ninetile_2.webp',
                "/pictures/ナインタイル/rules/description/ninetile_3.webp"
            ],
            setup: [
                '/pictures/ナインタイル/rules/setup/ninetile_4.webp',
                '/pictures/ナインタイル/rules/setup/ninetile_5.webp'
            ],
            gameplay: [
                '/pictures/ナインタイル/rules/gameplay/ninetile_6.webp',
                '/pictures/ナインタイル/rules/gameplay/ninetile_7.webp',
                '/pictures/ナインタイル/rules/gameplay/ninetile_8.webp',
                '/pictures/ナインタイル/rules/gameplay/ninetile_9.webp',
            ],
            endgame: [
                '/pictures/ナインタイル/rules/endgame/ninetile_10.webp',
            
            ]
        }
    },
    {
        id:1013,
        grid: '/pictures/ジャイプル/grid/jaipur_grid400.webp',
        name: 'JAIPUR',
        // 46文字まで
        explanation:"インドの商人になってお金稼ぎ！勝利の鍵はラクダとまとめ売り！",
        info:{
            num_players:"2人",
            playtime:"30分",
            price:"3300円",
            system_tag:["ハンドマネージメント"],
            who:["ともだちと"],
            where:["カフェで"]
        },
        details:{
            gameStory:"JAIPURはインドの商人になって品物の売買や交換を通してお金稼ぎをするゲームです。プレイヤーは場にある品物を得たり、交換したりすることで仕入れ、まとめ売りをすることで大きく稼ぐことができます。また、ラクダを品物との交換に使うことでゲームを有利に進めることができます。上手に取引を行って大儲けをしましょう。",
            basicInfo:{
                refPrice:"3300円",
                numPlayers:"2人",
                playTime:"30分",
                release:"2009年",
                difficulty:"ふつう",
                ageRange:"12歳以上",
                gameSystem:"ハンドマネージメント",
                size:"縦：横：高さ=18:13:4"
            },
            contents:["ルール説明書","カード55枚","品物トークン38枚","ラクダトークン1枚","ボーナストークン18枚","優秀の証3枚"],
            credits:{
                designer:["セバスチャン・ポーション"],
                artwork:["ヴィンセント・デュトレイ"],
                company:["ホビージャパン"]
            }
        },
        qAndA:[
                {
                    "question": "手札の枚数に制限はありますか？",
                    "answer": "手札は7枚までしか持てません。"
                },
                {
                    "question": "ラクダも手札にふくみますか？",
                    "answer": "ふくみません。とったラクダは常に自分の前に並べます。手札としてカウントしません。"
                },
                {
                    "question": "交換のときに場のカードと同じものを交換することはできますか？",
                    "answer": "同じ種類の品物をふくんでの交換はできません。"
                },
                {
                    "question": "コインがなくなっても品物を売ることはできますか？",
                    "answer": "売ることができます。"
                },
                {
                    "question": "点数計算で引き分けのときはどちらのプレイヤーが勝ちますか？",
                    "answer": "ボーナスコインの多い方の勝ちです。ボーナスコインの枚数も同じ場合は品物コインの多い方が勝ちです。"
                },
                {
                    "question": "点数計算でラクダの枚数がお互いに同じ場合はラクダコインはどうなりますか？",
                    "answer": "どちらのプレイヤーもラクダコインは受け取れません。"
                }
            ],
        likes: {
            count: 3,
            timestamps: []
        },
        purchaseLink: 'https://amzn.to/3TqkWSq',
        shareLink: 'https://example.com/share1',
        slides: {
            thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+1',
            overview: 'https://via.placeholder.com/300x200?text=Overview+1',
            components: [
                "/pictures/ジャイプル/rules/description/jaipur_1.webp",
                "/pictures/ジャイプル/rules/description/jaipur_2.webp",
                "/pictures/ジャイプル/rules/description/jaipur_3.webp",
                '/pictures/ジャイプル/pickup/components/jaipur_grid800.webp',
                "/pictures/ジャイプル/pickup/components/jaipur_box800.webp",
                '/pictures/ジャイプル/pickup/components/jaipur_setting800.webp',
                "/pictures/ジャイプル/pickup/components/jaipur_component800.webp"
            ]
        },
        rules: {
            description: [
                "/pictures/ジャイプル/rules/description/jaipur_1.webp",
                "/pictures/ジャイプル/rules/description/jaipur_2.webp",
                "/pictures/ジャイプル/rules/description/jaipur_3.webp",
            ],
            setup: [
                '/pictures/ジャイプル/rules/setup/jaipur_4.webp',
                '/pictures/ジャイプル/rules/setup/jaipur_5.webp',
                '/pictures/ジャイプル/rules/setup/jaipur_6.webp',
                '/pictures/ジャイプル/rules/setup/jaipur_7.webp',
            ],
            gameplay: [
                '/pictures/ジャイプル/rules/gameplay/jaipur_8.webp',
                '/pictures/ジャイプル/rules/gameplay/jaipur_9.webp',
                '/pictures/ジャイプル/rules/gameplay/jaipur_10.webp',
                '/pictures/ジャイプル/rules/gameplay/jaipur_11.webp',
                '/pictures/ジャイプル/rules/gameplay/jaipur_12.webp',
                '/pictures/ジャイプル/rules/gameplay/jaipur_13.webp',
                '/pictures/ジャイプル/rules/gameplay/jaipur_14.webp',
                '/pictures/ジャイプル/rules/gameplay/jaipur_15.webp',
            ],
            endgame: [
                '/pictures/ジャイプル/rules/endgame/jaipur_16.webp',
                
            ]
        }
    },
    {
        id:1014,
        grid: '/pictures/プロポーズ/grid/propose_grid400.webp',
        name: 'たった今考えたプロポーズの言葉を君に捧ぐよ',
        // 46文字まで
        explanation:"愛を語れ！",
        info:{
            num_players:"3~6人",
            playtime:"15~30分",
            price:"3500円",
            system_tag:["表現","大喜利"],
            who:["ともだちと","恋人と"],
            where:["パーティで"]
        },
        details:{
            gameStory:"たった今考えたプロポーズの言葉を君に捧ぐよは配られたカードをつかって即興のプロポーズを披露するゲームです。プロポーズの最後には「結婚しよう」の一言をそえて指輪を渡します。いちばんグッとくるセリフでプロポーズを成功させましょう。",
            basicInfo:{
                refPrice:"3500円",
                numPlayers:"3~6人",
                playTime:"15~30分",
                release:"2017年",
                difficulty:"とてもかんたん",
                ageRange:"13歳以上",
                gameSystem:"表現",
                size:"縦：横：高さ=16:10:5"
            },
            contents:["ルール説明書","指輪カウンター18個","カード200枚"],
            credits:{
                designer:["ダイポ"],
                artwork:["ダイポ"],
                company:["クラグラ"]
            }
        },
        qAndA:[
                {
                    "question": "素敵なプロポーズが多くて一人に選べないときはどうしますか？",
                    "answer": "頑張って選びましょう。運命の人は一人だけです。"
                },
            ],
        likes: {
            count: 3,
            timestamps: []
        },
        purchaseLink: 'https://a.r10.to/hNXbBj',
        shareLink: 'https://example.com/share1',
        slides: {
            thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+1',
            overview: 'https://via.placeholder.com/300x200?text=Overview+1',
            components: [
                "/pictures/プロポーズ/rules/description/propose_1.webp",
                "/pictures/プロポーズ/rules/description/propose_2.webp",
                "/pictures/プロポーズ/rules/description/propose_3.webp",
                "/pictures/プロポーズ/pickup/components/propose_grid800.webp",
                "/pictures/プロポーズ/pickup/components/propose_box800.webp",
                "/pictures/プロポーズ/pickup/components/propose_setting800.webp",
                "/pictures/プロポーズ/pickup/components/propose_component800.webp",
            
            ]
        },
        rules: {
            description: [
                "/pictures/プロポーズ/rules/description/propose_1.webp",
                "/pictures/プロポーズ/rules/description/propose_2.webp",
                "/pictures/プロポーズ/rules/description/propose_3.webp",
            ],
            setup: [
                '/pictures/プロポーズ/rules/setup/propose_4.webp',
                '/pictures/プロポーズ/rules/setup/propose_5.webp',
            ],
            gameplay: [
                '/pictures/プロポーズ/rules/gameplay/propose_6.webp',
                '/pictures/プロポーズ/rules/gameplay/propose_7.webp',
                '/pictures/プロポーズ/rules/gameplay/propose_8.webp',
            ],
            endgame: [
                '/pictures/プロポーズ/rules/endgame/propose_9.webp',
            ]
        }
    },
    {
        id:1015,
        grid: '/pictures/モダンアート/grid/modernart_grid400.webp',
        name: 'MODERN Art',
        // 46文字まで
        explanation:"絵画のオークションで荒稼ぎ！価値の変動には注意して！",
        info:{
            num_players:"3~5人",
            playtime:"45~60分",
            price:"3300円",
            system_tag:["オークション"],
            who:["ともだちと","親友と"],
            where:["家で"]
        },
        details:{
            gameStory:"モダンアートは絵画をめぐったオークションゲームです。5人の画家の絵をさまざまな形式のオークションにかけることでその価値を上昇させます。相場感を見抜きながらうまく売り買いして多くの資産を得ましょう。",
            basicInfo:{
                refPrice:"3300円",
                numPlayers:"3~5人",
                playTime:"45~60分",
                release:"1992年",
                difficulty:"むずかしい",
                ageRange:"10歳以上",
                gameSystem:"オークション",
                size:"縦：横：高さ=15.6:21.3:5.3"
            },
            contents:["ルール説明書","ゲーム盤","絵画カード70枚","ついたて5枚","コイン152枚","市場価値表示チップ12枚"],
            credits:{
                designer:["ライナー・クニツィア"],
                artwork:["キャロル・キャリオン","マヌエル・カルバルホ","マイク・ドイル"],
                company:["ニューゲームズオーダー"]
            }
        },
        qAndA:[
                {
                    "question": "みんながパスをするとどうなりますか？",
                    "answer": "公開競り、入札、一声では競売人が無料で絵画をもらえます。指値では競売人がお金を箱に支払います。"
                },
                {
                    "question": "ダブルオークションで出品した絵画によって5枚目となったらどうなりますか？",
                    "answer": "その時点でラウンド終了です。2枚ともオークションは行いません。"
                },
                {
                    "question": "ラウンド終了時に絵画の枚数が同じ場合は価値はどのように決まりますか？",
                    "answer": "ゲーム盤の左側の絵画ほど価値が高くつきます。"
                },
                {
                    "question": "ラウンド終了時、4位以降の絵画はどうなりますか？",
                    "answer": "価値はゼロになります。"
                }
            ],
        likes: {
            count: 3,
            timestamps: []
        },
        purchaseLink: 'https://amzn.to/4eiIgtd',
        shareLink: 'https://example.com/share1',
        slides: {
            thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+1',
            overview: 'https://via.placeholder.com/300x200?text=Overview+1',
            components: [
                "/pictures/モダンアート/rules/description/modernart_1.webp",
                "/pictures/モダンアート/rules/description/modernart_2.webp",
                "/pictures/モダンアート/rules/description/modernart_3.webp",
                "/pictures/モダンアート/rules/description/modernart_4.webp",
                "/pictures/モダンアート/pickup/components/modernart_grid800.webp",
                "/pictures/モダンアート/pickup/components/modernart_box800.webp",
                "/pictures/モダンアート/pickup/components/modernart_setting800.webp",
                '/pictures/モダンアート/pickup/components/modernart_component800.webp',
            ]
        },
        rules: {
            description: [
                "/pictures/モダンアート/rules/description/modernart_1.webp",
                "/pictures/モダンアート/rules/description/modernart_2.webp",
                "/pictures/モダンアート/rules/description/modernart_3.webp",
                "/pictures/モダンアート/rules/description/modernart_4.webp",
            ],
            setup: [
                '/pictures/モダンアート/rules/setup/modernart_5.webp',
                '/pictures/モダンアート/rules/setup/modernart_6.webp',
                '/pictures/モダンアート/rules/setup/modernart_7.webp',
                '/pictures/モダンアート/rules/setup/modernart_8.webp',
                

            ],
            gameplay: [
                '/pictures/モダンアート/rules/gameplay/modernart_9.webp',
                '/pictures/モダンアート/rules/gameplay/modernart_10.webp',
                '/pictures/モダンアート/rules/gameplay/modernart_11.webp',
                '/pictures/モダンアート/rules/gameplay/modernart_12.webp',
                '/pictures/モダンアート/rules/gameplay/modernart_13.webp',
                '/pictures/モダンアート/rules/gameplay/modernart_14.webp',
                '/pictures/モダンアート/rules/gameplay/modernart_15.webp',
                '/pictures/モダンアート/rules/gameplay/modernart_16.webp',
                '/pictures/モダンアート/rules/gameplay/modernart_17.webp',
                '/pictures/モダンアート/rules/gameplay/modernart_18.webp',
                '/pictures/モダンアート/rules/gameplay/modernart_19.webp',
                '/pictures/モダンアート/rules/gameplay/modernart_20.webp',
                '/pictures/モダンアート/rules/gameplay/modernart_21.webp',
                '/pictures/モダンアート/rules/gameplay/modernart_22.webp',
                '/pictures/モダンアート/rules/gameplay/modernart_23.webp',
                '/pictures/モダンアート/rules/gameplay/modernart_24.webp',
                '/pictures/モダンアート/rules/gameplay/modernart_25.webp',
            ],
            endgame: [
                '/pictures/モダンアート/rules/endgame/modernart_26.webp',
            ]
        }
    },
    {
        id:1016,
        grid: '/pictures/ラマ/grid/lama_grid400.webp',
        name: 'ラマ',
        // 46文字まで
        explanation:"手札は残ると減点！だれよりもはやく捨てきれ！ラマには要注意...",
        info:{
            num_players:"2~6人",
            playtime:"20分",
            price:"1800円",
            system_tag:["ハンドマネージメント"],
            who:["ともだちと","親戚と"],
            where:["家で"]
        },
        details:{
            gameStory:"ラマは手札を出し切るとラウンド終了のポイント制カードゲームです。だれかがカードを出し切ったときに手札が残った人は減点してしまいます。数字は何枚持っていても数字の分だけの減点ですがラマは1枚10点もの減点があるので要注意です。また減点をおさえるために今の減点を引き受けてラウンドから降りることもできるのでシンプルながらに駆け引きがあるゲームです。",
            basicInfo:{
                refPrice:"1800円",
                numPlayers:"2~6人",
                playTime:"20分",
                release:"2019年",
                difficulty:"かんたん",
                ageRange:"8歳以上",
                gameSystem:"ハンドマネージメント",
                size:"縦：横：高さ=12:9.5:2"
            },
            contents:["ルール説明書","カード56枚","チップ70枚"],
            credits:{
                designer:["ライナー・クニツィア"],
                artwork:["レイ・サマーカンプ","バーバラ・スペルガー"],
                company:["メビウスゲームズ"]
            }
        },
        qAndA:[
                {
                    "question": "みんながラウンドからおりて1人だけになったとき手札を出せなくなったらどうなりますか？",
                    "answer": "ラウンドからおりることになります。ひとりになったらカードを山札からひくことはできませんがラウンドからおりることはできます。"
                },
            ],
        likes: {
            count: 3,
            timestamps: []
        },
        purchaseLink: 'https://a.r10.to/hkbsKo',
        shareLink: 'https://example.com/share1',
        slides: {
            thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+1',
            overview: 'https://via.placeholder.com/300x200?text=Overview+1',
            components: [
                "/pictures/ラマ/rules/description/lama_1.webp",
                "/pictures/ラマ/rules/description/lama_2.webp",
                "/pictures/ラマ/rules/description/lama_3.webp",
                "/pictures/ラマ/rules/description/lama_4.webp",
                "/pictures/ラマ/pickup/components/lama_grid800.webp",
                "/pictures/ラマ/pickup/components/lama_box800.webp",
                "/pictures/ラマ/pickup/components/lama_setting800.webp",
                '/pictures/ラマ/pickup/components/lama_component800.webp',
            ]
        },
        rules: {
            description: [
                "/pictures/ラマ/rules/description/lama_1.webp",
                "/pictures/ラマ/rules/description/lama_2.webp",
                "/pictures/ラマ/rules/description/lama_3.webp",
                "/pictures/ラマ/rules/description/lama_4.webp",
            ],
            setup: [
                '/pictures/ラマ/rules/setup/lama_5.webp',

            ],
            gameplay: [
                '/pictures/ラマ/rules/gameplay/lama_6.webp',
                '/pictures/ラマ/rules/gameplay/lama_7.webp',
                '/pictures/ラマ/rules/gameplay/lama_8.webp',
                '/pictures/ラマ/rules/gameplay/lama_9.webp',
                '/pictures/ラマ/rules/gameplay/lama_10.webp',
                '/pictures/ラマ/rules/gameplay/lama_11.webp',
                '/pictures/ラマ/rules/gameplay/lama_12.webp',
                '/pictures/ラマ/rules/gameplay/lama_13.webp',
                '/pictures/ラマ/rules/gameplay/lama_14.webp',
                '/pictures/ラマ/rules/gameplay/lama_15.webp',
            ],
            endgame: [
                '/pictures/ラマ/rules/endgame/lama_16.webp',
            ]
        }
    },
    {
        id:1017,
        grid: '/pictures/ナナ/grid/nana_grid400.webp',
        name: 'ナナ',
        // 46文字まで
        explanation:"手札ありの神経衰弱！「ナナ」をつくってあがり！",
        info:{
            num_players:"2~5人",
            playtime:"15分",
            price:"2000円",
            system_tag:["メモリー"],
            who:["こどもと","ともだちと"],
            where:["家で"]
        },
        details:{
            gameStory:"ナナは3枚ペアを当てる神経衰弱系のカードゲームです。ナナでは場札だけでなく、プレイヤーの手札もひらくことができます。ただし手札をひらくときには最大と最小のいずれかしかみることはできません。また、そろえた3枚ペアの和か差で7をつくるとすぐに勝つことができるためシンプルでありながら戦略的な面もあるゲームです。",
            basicInfo:{
                refPrice:"2000円",
                numPlayers:"2~5人",
                playTime:"15分",
                release:"2021年",
                difficulty:"かんたん",
                ageRange:"6歳以上",
                gameSystem:"メモリー",
                size:"縦：横：高さ=10:7:2.5"
            },
            contents:["ルール説明書","カード36枚"],
            credits:{
                designer:["宮野華也"],
                artwork:["別府さい"],
                company:["MoB+"]
            }
        },
        qAndA:[
                {
                    "question": "3枚ペアを取れたとき連続で挑戦することはできますか？",
                    "answer": "できません。ペアができたら手番が移ります。"
                },
                
            ],
        likes: {
            count: 3,
            timestamps: []
        },
        purchaseLink: 'https://amzn.to/4gzfnLx',
        shareLink: 'https://example.com/share1',
        slides: {
            thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+1',
            overview: 'https://via.placeholder.com/300x200?text=Overview+1',
            components: [
                "/pictures/ナナ/rules/description/nana_1.webp",
                "/pictures/ナナ/rules/description/nana_2.webp",
                "/pictures/ナナ/rules/description/nana_3.webp",
                "/pictures/ナナ/rules/description/nana_4.webp",
                "/pictures/ナナ/pickup/components/nana_grid800.webp",
                "/pictures/ナナ/pickup/components/nana_box800.webp",
                "/pictures/ナナ/pickup/components/nana_setting800.webp",
                "/pictures/ナナ/pickup/components/nana_component800.webp"
            ]
        },
        rules: {
            description: [
                "/pictures/ナナ/rules/description/nana_1.webp",
                "/pictures/ナナ/rules/description/nana_2.webp",
                "/pictures/ナナ/rules/description/nana_3.webp",
                "/pictures/ナナ/rules/description/nana_4.webp",
            ],
            setup: [
                '/pictures/ナナ/rules/setup/nana_5.webp',
                '/pictures/ナナ/rules/setup/nana_6.webp',

            ],
            gameplay: [
                '/pictures/ナナ/rules/gameplay/nana_10.webp',
                '/pictures/ナナ/rules/gameplay/nana_7.webp',
                '/pictures/ナナ/rules/gameplay/nana_8.webp',
                '/pictures/ナナ/rules/gameplay/nana_9.webp',
            ],
            endgame: [
                '/pictures/ナナ/rules/endgame/nana_11.webp',
                '/pictures/ナナ/rules/endgame/nana_12.webp',
                '/pictures/ナナ/rules/endgame/nana_13.webp',
            ]
        }
    },
    {
        id:1018,
        grid: '/pictures/fabfib/grid/fabfib_grid400.webp',
        name: 'FABFIB',
        // 46文字まで
        explanation:"3けたの数字を宣言！相手を騙してライフを削れ！お手軽ブラフゲーム！",
        info:{
            num_players:"3~10人",
            playtime:"20~30分",
            price:"1500円",
            system_tag:["ブラフ"],
            who:["ともだちと"],
            where:["家で","パーティで"]
        },
        details:{
            gameStory:"ただいま準備中です",
            basicInfo:{
                refPrice:"1500円",
                numPlayers:"3~10人",
                playTime:"20~30分",
                release:"2004年",
                difficulty:"かんたん",
                ageRange:"10歳以上",
                gameSystem:"ブラフ",
                size:"縦：横：高さ=12.4:9.5:2.3"
            },
            contents:["ルール説明書","数字カード50枚","プレイヤーライフカード10枚","死神カード10枚"],
            credits:{
                designer:["スパルタコ・アルバタレッリ"],
                artwork:["TANSANFABRIK"],
                company:["ニューゲームズオーダー"]
            }
        },
        qAndA:[
                {
                    "question": "プレイヤーはどうして嘘をつかなくてはいけないのですか？",
                    "answer": "「受け入れる」を続けると手札の交換はできるものの、より大きな数字を言う必要があるのでいつかは嘘をつくことになります。"
                },
                {
                    "question": "山札がなくなったらどうしますか？",
                    "answer": "捨て札をまぜて再び山札にします。"
                }
            ],
        
        likes: {
            count: 3,
            timestamps: []
        },
        purchaseLink: 'https://a.r10.to/hU4o2N',
        shareLink: 'https://example.com/share1',
        slides: {
            thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+1',
            overview: 'https://via.placeholder.com/300x200?text=Overview+1',
            components: [
                "/pictures/fabfib/rules/description/fabfib_1.webp",
                "/pictures/fabfib/rules/description/fabfib_2.webp",
                "/pictures/fabfib/rules/description/fabfib_3.webp",
                "/pictures/fabfib/pickup/components/fabfib_grid800.webp",
                "/pictures/fabfib/pickup/components/fabfib_box800.webp",
                "/pictures/fabfib/pickup/components/fabfib_setting800.webp",
                '/pictures/fabfib/pickup/components/fabfib_component800.webp',
            ]
        },
        rules: {
            description: [
                "/pictures/fabfib/rules/description/fabfib_1.webp",
                "/pictures/fabfib/rules/description/fabfib_2.webp",
                "/pictures/fabfib/rules/description/fabfib_3.webp",
            ],
            setup: [
                '/pictures/fabfib/rules/setup/fabfib_4.webp',
                '/pictures/fabfib/rules/setup/fabfib_5.webp',

            ],
            gameplay: [
                '/pictures/fabfib/rules/gameplay/fabfib_6.webp',
                '/pictures/fabfib/rules/gameplay/fabfib_7.webp',
                '/pictures/fabfib/rules/gameplay/fabfib_8.webp',
                '/pictures/fabfib/rules/gameplay/fabfib_9.webp',
                '/pictures/fabfib/rules/gameplay/fabfib_10.webp',
                '/pictures/fabfib/rules/gameplay/fabfib_11.webp',
                '/pictures/fabfib/rules/gameplay/fabfib_12.webp',
            ],
            endgame: [
                '/pictures/fabfib/rules/endgame/fabfib_13.webp',
            ]
        }
    },
    {
        id:1019,
        grid: '/pictures/シェフィ/grid/shephy_grid.400.webp',
        name: 'シェフィ',
        // 46文字まで
        explanation:"ひつじを産んで増やして1000匹目指せ！めずらしい1人用ゲーム！",
        info:{
            num_players:"1人",
            playtime:"20分",
            price:"1700円",
            system_tag:["ハンドマネージメント"],
            who:["ひとりで","恋人と"],
            where:["家で"]
        },
        details:{
            gameStory:"ただいま準備中です",
            basicInfo:{
                refPrice:"xxxx円",
                numPlayers:"x人",
                playTime:"x分",
                release:"xxxx年",
                difficulty:"xxx",
                ageRange:"x歳以上",
                gameSystem:"",
                size:"縦：横：高さ=xx:xx:x"
            },
            contents:["xxx","xxx","xxx"],
            credits:{
                designer:["xxx"],
                artwork:["xxx"],
                company:["xxx"]
            }
        },
        qAndA:[
                {
                    "question": "準備中です",
                    "answer": ""
                },
                {
                    "question": "",
                    "answer": ""
                }
            ],
        likes: {
            count: 3,
            timestamps: []
        },
        purchaseLink: 'https://amzn.to/47lXN9m',
        shareLink: 'https://example.com/share1',
        slides: {
            thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+1',
            overview: 'https://via.placeholder.com/300x200?text=Overview+1',
            components: [
                '/pictures/シェフィ/rules/description/shephy_1.webp',
                '/pictures/シェフィ/rules/description/shephy_2.webp',
                '/pictures/シェフィ/rules/description/shephy_3.webp',
                "/pictures/シェフィ/pickup/components/shephy_grid.800.webp",
                "/pictures/シェフィ/pickup/components/shephy_box800.webp",
                "/pictures/シェフィ/pickup/components/shephy_setting800.webp",
                "/pictures/シェフィ/pickup/components/shephy_component800.webp",
            
            ]
        },
        rules: {
            description: [
                '/pictures/シェフィ/rules/description/shephy_1.webp',
                '/pictures/シェフィ/rules/description/shephy_2.webp',
                '/pictures/シェフィ/rules/description/shephy_3.webp',
            ],
            setup: [
                '/pictures/シェフィ/rules/setup/shephy_4.webp',
                '/pictures/シェフィ/rules/setup/shephy_5.webp',
            ],
            gameplay: [
                '/pictures/シェフィ/rules/gameplay/shephy_6.webp',
                '/pictures/シェフィ/rules/gameplay/shephy_7.webp',
                '/pictures/シェフィ/rules/gameplay/shephy_8.webp',
                '/pictures/シェフィ/rules/gameplay/shephy_9.webp',
            ],
            endgame: [
                '/pictures/シェフィ/rules/endgame/shephy_10.webp',
                '/pictures/シェフィ/rules/endgame/shephy_11.webp',
                '/pictures/シェフィ/rules/endgame/shephy_12.webp',

            ]
        }
    },
    {
        id:1020,
        grid: '/pictures/ザマインド/grid/themind_grid400.webp',
        name: 'ザ・マインド',
        // 46文字まで
        explanation:"感覚を研ぎ澄ませ。「間」を駆使してカードを出し切る協力ゲーム",
        info:{
            num_players:"2~4人",
            playtime:"20分",
            price:"1500円",
            system_tag:["表現","協力"],
            who:["ともだちと","家族と"],
            where:["家で"]
        },
        details:{
            gameStory:"準備中です",
            basicInfo:{
                refPrice:"1500円",
                numPlayers:"2~4人",
                playTime:"20分",
                release:"2018年",
                difficulty:"かんたん",
                ageRange:"8歳以上",
                gameSystem:"表現",
                size:"縦：横：高さ=13:10:2"
            },
            contents:["ルール説明書","数字カード100枚","ヒットポイントカード5枚","手裏剣カード3枚",],
            credits:{
                designer:["ヴォルフガング・ヴァルシュ"],
                artwork:["オリバー・フロイデンライヒ",],
                company:["アークライト"]
            }
        },
        qAndA:[
                {
                    "question": "準備中です",
                    "answer": ""
                },
                {
                    "question": "",
                    "answer": ""
                }
            ],
    
        likes: {
            count: 3,
            timestamps: []
        },
        purchaseLink: 'https://amzn.to/3Zkkt81',
        shareLink: 'https://example.com/share1',
        slides: {
            thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+1',
            overview: 'https://via.placeholder.com/300x200?text=Overview+1',
            components: [
                '/pictures/ザマインド/rules/description/theminde_1.webp',
                '/pictures/ザマインド/rules/description/theminde_2.webp',
                '/pictures/ザマインド/rules/description/theminde_3.webp',
                "/pictures/ザマインド/pickup/components/themind_grid800.webp",
                "/pictures/ザマインド/pickup/components/themind_box800.webp",
                "/pictures/ザマインド/pickup/components/themind_setting800.webp",
                "/pictures/ザマインド/pickup/components/themind_component800.webp"
            ]
        },
        rules: {
            description: [
                '/pictures/ザマインド/rules/description/theminde_1.webp',
                '/pictures/ザマインド/rules/description/theminde_2.webp',
                '/pictures/ザマインド/rules/description/theminde_3.webp',
            ],
            setup: [
                '/pictures/ザマインド/rules/setup/theminde_4.webp',
                '/pictures/ザマインド/rules/setup/theminde_5.webp',
            ],
            gameplay: [
                '/pictures/ザマインド/rules/gameplay/theminde_6.webp',
                '/pictures/ザマインド/rules/gameplay/theminde_7.webp',
                '/pictures/ザマインド/rules/gameplay/theminde_8.webp',
                '/pictures/ザマインド/rules/gameplay/theminde_9.webp',
                '/pictures/ザマインド/rules/gameplay/theminde_10.webp',
                '/pictures/ザマインド/rules/gameplay/theminde_11.webp',
                '/pictures/ザマインド/rules/gameplay/theminde_12.webp',
            ],
            endgame: [
                '/pictures/ザマインド/rules/endgame/theminde_13.webp',
            ]
        }
    },
    {
        id:1021,
        grid: '/pictures/お邪魔者/grid/grid400.webp',
        name: 'お邪魔者',
        // 46文字まで
        explanation:"掘って進んで金をあてろ！お邪魔者には気をつけろ！",
        info:{
            num_players:"3~10人",
            playtime:"30分",
            price:"1800円",
            system_tag:["正体隠匿","カード配置"],
            who:["ともだちと"],
            where:["カフェで","家で"]
        },
        details:{
            gameStory:"準備中です",
            basicInfo:{
                refPrice:"1800円",
                numPlayers:"3~10人",
                playTime:"30分",
                release:"2004年",
                difficulty:"ふつう",
                ageRange:"8歳以上",
                gameSystem:"正体隠匿",
                size:"縦：横：高さ=12.2:9.6:2.1"
            },
            contents:["ルール説明書","通路カード44枚","アクションカード27枚","役割カード11枚","金カード28枚"],
            credits:{
                designer:["フレデリック・モイヤーセン"],
                artwork:["アンドレア・ボークホフ",],
                company:["メビウスゲームズ"]
            }
        },
        qAndA:[
                {
                    "question": "準備中です",
                    "answer": ""
                },
                {
                    "question": "",
                    "answer": ""
                }
            ],
    
        likes: {
            count: 3,
            timestamps: []
        },
        purchaseLink: 'https://a.r10.to/hYrben',
        shareLink: 'https://example.com/share1',
        slides: {
            thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+1',
            overview: 'https://via.placeholder.com/300x200?text=Overview+1',
            components: [
                '/pictures/お邪魔者/rules/description/ojamamono_1.webp',
                '/pictures/お邪魔者/rules/description/ojamamono_2.webp',
                '/pictures/お邪魔者/rules/description/ojamamono_3.webp',
                "/pictures/お邪魔者/pickup/components/grid800.webp",
                "/pictures/お邪魔者/pickup/components/box800.webp",
                "/pictures/お邪魔者/pickup/components/ojamamono_setting800.webp",
                "/pictures/お邪魔者/pickup/components/component800.webp"
            ]
        },
        rules: {
            description: [
                '/pictures/お邪魔者/rules/description/ojamamono_1.webp',
                '/pictures/お邪魔者/rules/description/ojamamono_2.webp',
                '/pictures/お邪魔者/rules/description/ojamamono_3.webp',
            ],
            setup: [
                '/pictures/お邪魔者/rules/setup/ojamamono_4.webp',
                '/pictures/お邪魔者/rules/setup/ojamamono_5.webp',
                '/pictures/お邪魔者/rules/setup/ojamamono_6.webp',
                '/pictures/お邪魔者/rules/setup/ojamamono_7.webp',
                '/pictures/お邪魔者/rules/setup/ojamamono_8.webp',
                '/pictures/お邪魔者/rules/setup/ojamamono_9.webp',
            ],
            gameplay: [
                '/pictures/お邪魔者/rules/gameplay/ojamamono_10.webp',
                '/pictures/お邪魔者/rules/gameplay/ojamamono_11.webp',
                '/pictures/お邪魔者/rules/gameplay/ojamamono_12.webp',
                '/pictures/お邪魔者/rules/gameplay/ojamamono_13.webp',
                '/pictures/お邪魔者/rules/gameplay/ojamamono_14.webp',
                '/pictures/お邪魔者/rules/gameplay/ojamamono_15.webp',
                '/pictures/お邪魔者/rules/gameplay/ojamamono_16.webp',
                '/pictures/お邪魔者/rules/gameplay/ojamamono_17.webp',
                '/pictures/お邪魔者/rules/gameplay/ojamamono_18.webp',
                '/pictures/お邪魔者/rules/gameplay/ojamamono_19.webp',
                '/pictures/お邪魔者/rules/gameplay/ojamamono_20.webp',
            ],
            endgame: [
                '/pictures/お邪魔者/rules/endgame/ojamamono_21.webp',
                '/pictures/お邪魔者/rules/endgame/ojamamono_22.webp',
                '/pictures/お邪魔者/rules/endgame/ojamamono_23.webp',
                '/pictures/お邪魔者/rules/endgame/ojamamono_24.webp',
                '/pictures/お邪魔者/rules/endgame/ojamamono_25.webp',
                
            ]
        }
    },
    {
        id:1022,
        grid: '/pictures/スプレンダー/grid/splender_grid400.webp',
        name: '宝石の煌き',
        // 46文字まで
        explanation:"宝石を集めて発展せよ！言わずと知れた傑作ボードゲーム！",
        info:{
            num_players:"2~4人",
            playtime:"30分",
            price:"5000円",
            system_tag:["拡大再生産","セットコレクション"],
            who:["ともだちと"],
            where:["カフェで"]
        },
        details:{
            gameStory:"準備中です",
            basicInfo:{
                refPrice:"5000円",
                numPlayers:"2~4人",
                playTime:"30分",
                release:"2014年",
                difficulty:"むずかしい",
                ageRange:"10歳以上",
                gameSystem:"拡大再生産",
                size:"縦：横：高さ=27.4:21.3:6.5"
            },
            contents:["ルール説明書","宝石トークン40枚","発展カード90枚 ","貴族タイル10枚"],
            credits:{
                designer:["マーク・アンドレ"],
                artwork:["パスカル・キノート",],
                company:["ホビージャパン"]
            }
        },
        qAndA:[
                {
                    "question": "準備中です",
                    "answer": ""
                },
                {
                    "question": "",
                    "answer": ""
                }
            ],
    
        likes: {
            count: 3,
            timestamps: []
        },
        purchaseLink: 'https://amzn.to/4dUPK5S',
        shareLink: 'https://example.com/share1',
        slides: {
            thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+1',
            overview: 'https://via.placeholder.com/300x200?text=Overview+1',
            components: [
                '/pictures/スプレンダー/rules/description/splender_1.webp',
                '/pictures/スプレンダー/rules/description/splender_2.webp',
                '/pictures/スプレンダー/rules/description/splender_3.webp',
                '/pictures/スプレンダー/rules/description/splender_4.webp',
                "/pictures/スプレンダー/pickup/components/splender_grid800.webp",
                "/pictures/スプレンダー/pickup/components/splender_box800.webp",
                "/pictures/スプレンダー/pickup/components/splender_setting800.webp",
                "/pictures/スプレンダー/pickup/components/splender_component800.webp"
            ]
        },
        rules: {
            description: [
                '/pictures/スプレンダー/rules/description/splender_1.webp',
                '/pictures/スプレンダー/rules/description/splender_2.webp',
                '/pictures/スプレンダー/rules/description/splender_3.webp',
                '/pictures/スプレンダー/rules/description/splender_4.webp',
            ],
            setup: [
                '/pictures/スプレンダー/rules/setup/splender_5.webp',
                '/pictures/スプレンダー/rules/setup/splender_6.webp',
                '/pictures/スプレンダー/rules/setup/splender_7.webp',
                '/pictures/スプレンダー/rules/setup/splender_8.webp',
                '/pictures/スプレンダー/rules/setup/splender_9.webp',
            ],
            gameplay: [
                '/pictures/スプレンダー/rules/gameplay/splender_10.webp',
                '/pictures/スプレンダー/rules/gameplay/splender_11.webp',
                '/pictures/スプレンダー/rules/gameplay/splender_12.webp',
                '/pictures/スプレンダー/rules/gameplay/splender_13.webp',
                '/pictures/スプレンダー/rules/gameplay/splender_14.webp',
                '/pictures/スプレンダー/rules/gameplay/splender_15.webp',
                '/pictures/スプレンダー/rules/gameplay/splender_16.webp',
                '/pictures/スプレンダー/rules/gameplay/splender_17.webp',
                '/pictures/スプレンダー/rules/gameplay/splender_18.webp',
                '/pictures/スプレンダー/rules/gameplay/splender_19.webp',
                '/pictures/スプレンダー/rules/gameplay/splender_20.webp',
                '/pictures/スプレンダー/rules/gameplay/splender_21.webp',
            ],
            endgame: [
                '/pictures/スプレンダー/rules/endgame/splender_22.webp',

                
            ]
        }
    },
    
];

// 現在の状態を管理する変数
// home=0,　ゲームid管理1001~


const routes = [
    { path: "/", view: () => renderPage(0), title: "Home - Rulette" },
    { 
        path: "/games/:id", 
        view: (params) => renderPage(params.id),
        title: (params) => {
            const game = games.find(game => game.id == params.id);
            return game ? `${game.name} - Rulette` : 'Game - Rulette';
        }
    }
];
function updateTitle(route, params) {
    if (typeof route.title === 'function') {
        document.title = route.title(params);
    } else {
        document.title = route.title;
    }
}

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
        updateTitle(matchedRoute.route, matchedRoute.params);
        matchedRoute.route.view(matchedRoute.params);
    } else {
        app.innerHTML = "<h1>404 - Not Found</h1><p>Page not found!</p>";
        document.title = "404 - Not Found - Rulette";
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
        //return games.sort((a, b) => b.likes.count - a.likes.count).map(game => game.name);
        return games.sort(() => Math.random() - 0.5).map(game => game.name);
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
        this.startY = 0; // Y座標もトラッキング
        this.endX = 0;
        this.endY = 0;   // Y座標もトラッキング

        this.initDots();
        this.updateCarousel();

        const leftArea = carouselElement.querySelector('.click-area.left');
        const rightArea = carouselElement.querySelector('.click-area.right');

        leftArea.addEventListener('click', () => this.prevImage());
        rightArea.addEventListener('click', () => this.nextImage());
        this.carouselDots.addEventListener('click', (e) => this.dotNavigation(e));

        this.carouselElement.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: false });
        this.carouselElement.addEventListener('touchend', (e) => this.handleTouchEnd(e), { passive: false });
        this.carouselElement.addEventListener('touchmove', (e) => this.handleTouchMove(e), { passive: false });
        
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
    handleTouchMove(e) {
        const deltaX = e.touches[0].clientX - this.startX;
        const deltaY = e.touches[0].clientY - this.startY;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // 水平方向の移動が垂直方向の移動よりも大きい場合のみデフォルトのスクロールを防ぐ
            e.preventDefault();
        }
    }
    handleTouchStart(e) {
        this.startX = e.touches[0].clientX;
        this.startY = e.touches[0].clientY;
    }

    handleTouchEnd(e) {
        this.endX = e.changedTouches[0].clientX;
        this.endY = e.changedTouches[0].clientY;
        this.handleSwipe();
    }

    handleSwipe() {
        // if (this.startX - this.endX > 50) {
            
        //     this.nextImage();
        //     e.preventDefault();
        // } else if (this.endX - this.startX > 50) {
            
        //     this.prevImage();
        //     e.preventDefault();
        // }
        if (Math.abs(this.startX - this.endX) > Math.abs(this.startY - this.endY)) {
            if (this.startX - this.endX > 50) {
                this.nextImage();
            } else if (this.endX - this.startX > 50) {
                this.prevImage();
            }
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
            this.toggleButton.style.backgroundImage = "url('/pictures/system_design/toggle_close.svg')"; // 開いた状態の画像URL
        } else {
            this.accordion.classList.remove('open');
            this.accordion.classList.add('closed');
            this.content.style.display = 'none';
            this.toggleButton.style.backgroundImage = "url('/pictures/system_design/toggle_open.svg')"; // 閉じた状態の画像URL
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

    // ゲーム情報アイコン
    const gameiconContainer= document.createElement("div");
    gameiconContainer.classList.add("game-icon-container");

    const peopleIcon=document.createElement("img");
    peopleIcon.src="/pictures/system_design/pickup_icons_people.svg"
    peopleIcon.classList.add("game-info-icons");
    const peopleText =document.createElement("p");
    peopleText.textContent=game.info.num_players;
    peopleText.classList.add("game-info-texts")

    const playtimeIcon=document.createElement("img");
    playtimeIcon.src="/pictures/system_design/pickup_icons_playtime.svg"
    playtimeIcon.classList.add("game-info-icons");
    const playtimeText =document.createElement("p");
    playtimeText.textContent=game.info.playtime;
    playtimeText.classList.add("game-info-texts")

    const priceIcon=document.createElement("img");
    priceIcon.src="/pictures/system_design/pickup_icons_price.svg"
    priceIcon.classList.add("game-info-icons");
    const priceText =document.createElement("p");
    priceText.textContent=game.info.price;
    priceText.classList.add("game-info-texts")

    gameiconContainer.appendChild(peopleIcon);
    gameiconContainer.appendChild(peopleText);
    gameiconContainer.appendChild(playtimeIcon);
    gameiconContainer.appendChild(playtimeText);
    gameiconContainer.appendChild(priceIcon);
    gameiconContainer.appendChild(priceText);

    gameInfo.appendChild(gameiconContainer);

    // 説明欄
    const explanation = document.createElement('p');
    explanation.textContent=game.explanation;
    explanation.classList.add("explanation");
    gameInfo.appendChild(explanation);

    // ゲームタグ
    const gametagContainer= document.createElement("div");
    gametagContainer.classList.add("game-tag-container");

    const systemtagContainer=document.createElement("div");
    systemtagContainer.classList.add("systemtag-container");
    const systemtagText=document.createElement("p");
    systemtagText.textContent="システム"
    systemtagText.classList.add("systemtag-text");
    systemtagContainer.appendChild(systemtagText);
    //システムタグのdivを追加
    game.info.system_tag.forEach(tag => {
        const tagElement = document.createElement("span");
        tagElement.textContent = `#${tag}`;
        tagElement.classList.add("tag");
        systemtagContainer.appendChild(tagElement);
    });

    const whowheretagContainer=document.createElement("div");
    whowheretagContainer.classList.add("whowheretag-container");
    const whowheretagText=document.createElement("p");
    whowheretagText.textContent="だれと/どこで"
    whowheretagText.classList.add("whowheretag-text");
    whowheretagContainer.appendChild(whowheretagText);
    //だれとどこでタグのdivを追加
    game.info.who.forEach(tag => {
        const tagElement = document.createElement("span");
        tagElement.textContent =`#${tag}`;
        tagElement.classList.add("tag");
        whowheretagContainer.appendChild(tagElement);
    });

    game.info.where.forEach(tag => {
        const tagElement = document.createElement("span");
        tagElement.textContent = `#${tag}`;
        tagElement.classList.add("tag");
        whowheretagContainer.appendChild(tagElement);
    });
    gametagContainer.appendChild(systemtagContainer);
    gametagContainer.appendChild(whowheretagContainer);
    gameInfo.appendChild(gametagContainer);

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
    purchaseButton.addEventListener('click', function() {
        window.location.href = game.purchaseLink;
    });
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
    
    const titles = ["詳しい情報","かんたん説明","ゲームの準備", "ゲームの流れ", "ゲームの終了","ルールQ＆A"];
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
            case 1:
                images = game.rules.description;
                break;
            case 2:
                images = game.rules.setup;
                break;
            case 3:
                images = game.rules.gameplay;
                break;
            case 4:
                images = game.rules.endgame;
                break;
        }
        if(title ==="詳しい情報" ){
            const detailsContainer = document.createElement("div");
            detailsContainer.classList.add("details-container");

            const gameDescription = document.createElement('div');
            gameDescription.classList.add('game-description');

            const descriptionTitle = document.createElement('div');
            descriptionTitle.classList.add('section-title');
            descriptionTitle.textContent = 'ゲームの記述';
            gameDescription.appendChild(descriptionTitle);

            const descriptionText = document.createElement('p');
            descriptionText.textContent = game.details.gameStory;
            gameDescription.appendChild(descriptionText);

            detailsContainer.appendChild(gameDescription);

            const basicInfo = document.createElement('div');
            basicInfo.classList.add('basic-info');

            const basicInfoTitle = document.createElement('div');
            basicInfoTitle.classList.add('section-title');
            basicInfoTitle.textContent = '基本情報';
            basicInfo.appendChild(basicInfoTitle);

            const basicInfoContainer = document.createElement('div');
            basicInfoContainer.classList.add('basic-info-container');

            const tableLeft = document.createElement('div');
            tableLeft.classList.add('basic-info-table-left');

            const tableLeftContent = `
                <table>
                    <tr><td>参考価格</td><td>${game.details.basicInfo.refPrice}</td></tr>
                    <tr><td>プレイ人数</td><td>${game.details.basicInfo.numPlayers}</td></tr>
                    <tr><td>プレイ時間</td><td>${game.details.basicInfo.playTime}</td></tr>
                    <tr><td>発売年</td><td>${game.details.basicInfo.release}</td></tr>
                </table>
            `;
            tableLeft.innerHTML = tableLeftContent;
            basicInfoContainer.appendChild(tableLeft);

            const tableRight = document.createElement('div');
            tableRight.classList.add('basic-info-table-right');

            const tableRightContent = `
                <table>
                    <tr><td>難易度</td><td>${game.details.basicInfo.difficulty}</td></tr>
                    <tr><td>対象年齢</td><td>${game.details.basicInfo.ageRange}</td></tr>
                    <tr><td>システム</td><td>${game.details.basicInfo.gameSystem}</td></tr>
                    <tr><td>大きさ(cm)</td><td>${game.details.basicInfo.size}</td></tr>
                </table>
            `;
            tableRight.innerHTML = tableRightContent;
            basicInfoContainer.appendChild(tableRight);

            basicInfo.appendChild(basicInfoContainer);
            detailsContainer.appendChild(basicInfo);

            const contents = document.createElement('div');
            contents.classList.add('contents');

            const contentsTitle = document.createElement('div');
            contentsTitle.classList.add('section-title');
            contentsTitle.textContent = '内容物';
            contents.appendChild(contentsTitle);

            const ul = document.createElement('ul');
            game.details.contents.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `・${item}`;
                ul.appendChild(li);
            });
            contents.appendChild(ul);
            detailsContainer.appendChild(contents);

            const credits = document.createElement('div');
            credits.classList.add('credits');

            const creditsTitle = document.createElement('div');
            creditsTitle.classList.add('section-title');
            creditsTitle.textContent = 'クレジット';
            credits.appendChild(creditsTitle);

            const creditsTable = document.createElement('table');
            let creditsContent = '';

            game.details.credits.designer.forEach((designer,index) => {
                creditsContent += `<tr><td>${index === 0 ? 'ゲームデザイン' : ''}</td><td>${designer}</td></tr>`;
            });
            game.details.credits.artwork.forEach((artist, index) => {
                creditsContent += `<tr><td>${index === 0 ? 'アートワーク' : ''}</td><td>${artist}</td></tr>`;
            });
            game.details.credits.company.forEach((company, index) => {
                creditsContent += `<tr><td>${index === 0 ? '企業/団体' : ''}</td><td>${company}</td></tr>`;
            });

            creditsTable.innerHTML = creditsContent;
            credits.appendChild(creditsTable);
            detailsContainer.appendChild(credits);
            content.insertBefore(detailsContainer, content.firstChild);

        }else if(title ==="ルールQ＆A"){
            //後ほど記述
            const qaContainer = document.createElement('div');
            qaContainer.classList.add('qa-container');

            game.qAndA.forEach((qa, index) => {
                const qaItem = document.createElement('div');
                qaItem.classList.add('qa-item');

                const qaQuestion = document.createElement('div');
                qaQuestion.classList.add('qa-question');

                const questionCircle = document.createElement('div');
                questionCircle.classList.add('circle', 'yellow');
                questionCircle.textContent = `Q${index + 1}`;

                const questionText = document.createElement('p');
                questionText.textContent = qa.question;

                qaQuestion.appendChild(questionCircle);
                qaQuestion.appendChild(questionText);
                qaItem.appendChild(qaQuestion);

                const qaAnswer = document.createElement('div');
                qaAnswer.classList.add('qa-answer');

                const answerCircle = document.createElement('div');
                answerCircle.classList.add('circle', 'red');
                answerCircle.textContent = `A${index + 1}`;

                const answerText = document.createElement('p');
                answerText.textContent = qa.answer;

                qaAnswer.appendChild(answerCircle);
                qaAnswer.appendChild(answerText);
                qaItem.appendChild(qaAnswer);

                qaContainer.appendChild(qaItem);

                if (index < game.qAndA.length - 1) {
                    const line = document.createElement('div');
                    line.classList.add('line');
                    qaContainer.appendChild(line);
                }
            });

            content.appendChild(qaContainer);
        }else{
            const carousel = createRuleCarousel(images);
            content.appendChild(carousel);
        }
            

        
        
        accordion.appendChild(content);
        container.appendChild(accordion);
        new Accordion(accordion);
    });

    // const textInfoTitles = ["詳しい情報","ルールQ＆A"];
    // textInfoTitles.forEach((title, index) => {
    //     const accordion = document.createElement('div');
    //     accordion.classList.add('accordion', 'closed');

    //     const header = document.createElement('div');
    //     header.classList.add('accordion-header');

    //     const span = document.createElement('span');
    //     span.textContent = title;

    //     const button = document.createElement('button');
    //     button.classList.add('toggleButton');
        

    //     header.appendChild(span);
    //     header.appendChild(button);
    //     accordion.appendChild(header);

    //     const content = document.createElement('div');
    //     content.classList.add('accordion-content');


    //     accordion.appendChild(content);
    //     container.appendChild(accordion);
    //     new Accordion(accordion);
    // });
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
    // URLからゲームのIDを抽出する
    const url = window.location.href;
    const idMatch = url.match(/\/games\/(\d+)/);
    if (!idMatch || idMatch.length < 2) {
        console.error('ゲームIDがURLから取得できませんでした');
        return;
    }
    const gameId = parseInt(idMatch[1], 10);

    // 対象ゲームの情報を探す
    const game = games.find(g => g.id === gameId);

    if (game) {
        // textsの内容を作成
        const texts = `『${game.name}』\nhttps://rulette.games/games/${game.id}\n\n${game.explanation}`;

        navigator.clipboard.writeText(texts).then(() => {
            const notification = document.getElementById('notification');
            notification.classList.add('show');

            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    } else {
        console.error('ゲームが見つかりませんでした');
    }
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


