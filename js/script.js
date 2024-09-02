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
        gameStory:"",
        basicInfo:{
            refPrice:"2000円",
            numPlayers:"4人",
            playTime:"20分",
            release:"2010年",
            difficulty:"ふつう",
            ageRange:"8歳以上",
            gameSystem:"セットコレクション",
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
                "question": "ストレートやストレートフラッシュにおいて1,3,2などだした順番がずれていても役になりますか。",
                "answer": "順番がずれていても、正しいカードの組み合わせであれば役になります。"
            },
            {
                "question": "プレイヤー数が多い場合の対策はありますか？",
                "answer": "プレイヤー数が多い場合、ゲームのバランスを保つために特定のルール変更を推奨します。"
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
        likes: {
            count: 4,
            timestamps: []
        },
        purchaseLink: 'https://mobiusgames.shop-pro.jp/?pid=144929015',
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
        likes: {
            count: 1,
            timestamps: []
        },
        purchaseLink: 'https://mobiusgames.shop-pro.jp/?pid=144935408',
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
        likes: {
            count: 2,
            timestamps: []
        },
        purchaseLink: 'https://www.amazon.co.jp/%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%B2%E3%83%BC%E3%83%A0%E3%82%BA%E3%82%AA%E3%83%BC%E3%83%80%E3%83%BC-New-Games-Order/dp/B00RVVSTVI/ref=sr_1_5?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dib=eyJ2IjoiMSJ9._RZEKVZdNrz23KIKY4XiZiti12F7dT7x6Deo6Ude--DFRPHrqfZjM81qumKpBbenAEp6i80EnI2VgWmeNfNhDM7HXkclNmt15RZmbHpbpuPbFTZRPLqKsXU7w5lt-9qMN7UOO_94D5FktLFpyx7jeSuWseuJUkdUqEq7i3dUY8DQpFD-D9MIPs8vh7KJShudqga0svQxSS8w2HMbrq4K7vDr9NBHTtvwT5FVloZ8PZ0_ukgu784-rhmroX0nwgpJYXLnpN2TMK9QxtjvZBtWNgXoID0ZwpQjtLewtfrc3ww.VyHaCCeV4U5epYF4RjTMi5830Vqvw1vdaPPzYGvRX2U&dib_tag=se&keywords=%E3%82%B3%E3%83%A8%E3%83%BC%E3%83%86&qid=1722588843&sr=8-5',
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
        likes: {
            count: 5,
            timestamps: []
        },
        purchaseLink: 'https://www.amazon.co.jp/%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%B2%E3%83%BC%E3%83%A0%E3%82%BA%E3%82%AA%E3%83%BC%E3%83%80%E3%83%BC-New-Games-Order/dp/B00RVVSTVI/ref=sr_1_5?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dib=eyJ2IjoiMSJ9._RZEKVZdNrz23KIKY4XiZiti12F7dT7x6Deo6Ude--DFRPHrqfZjM81qumKpBbenAEp6i80EnI2VgWmeNfNhDM7HXkclNmt15RZmbHpbpuPbFTZRPLqKsXU7w5lt-9qMN7UOO_94D5FktLFpyx7jeSuWseuJUkdUqEq7i3dUY8DQpFD-D9MIPs8vh7KJShudqga0svQxSS8w2HMbrq4K7vDr9NBHTtvwT5FVloZ8PZ0_ukgu784-rhmroX0nwgpJYXLnpN2TMK9QxtjvZBtWNgXoID0ZwpQjtLewtfrc3ww.VyHaCCeV4U5epYF4RjTMi5830Vqvw1vdaPPzYGvRX2U&dib_tag=se&keywords=%E3%82%B3%E3%83%A8%E3%83%BC%E3%83%86&qid=1722588843&sr=8-5',
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
            system_tag:["言葉遊び","パーティ"],
            who:["ともだちと","こどもと",],
            where:["パーティで","飲み会で"]
        },
        likes: {
            count: 3,
            timestamps: []
        },
        purchaseLink: 'https://www.amazon.co.jp/%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%B2%E3%83%BC%E3%83%A0%E3%82%BA%E3%82%AA%E3%83%BC%E3%83%80%E3%83%BC-New-Games-Order/dp/B00RVVSTVI/ref=sr_1_5?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dib=eyJ2IjoiMSJ9._RZEKVZdNrz23KIKY4XiZiti12F7dT7x6Deo6Ude--DFRPHrqfZjM81qumKpBbenAEp6i80EnI2VgWmeNfNhDM7HXkclNmt15RZmbHpbpuPbFTZRPLqKsXU7w5lt-9qMN7UOO_94D5FktLFpyx7jeSuWseuJUkdUqEq7i3dUY8DQpFD-D9MIPs8vh7KJShudqga0svQxSS8w2HMbrq4K7vDr9NBHTtvwT5FVloZ8PZ0_ukgu784-rhmroX0nwgpJYXLnpN2TMK9QxtjvZBtWNgXoID0ZwpQjtLewtfrc3ww.VyHaCCeV4U5epYF4RjTMi5830Vqvw1vdaPPzYGvRX2U&dib_tag=se&keywords=%E3%82%B3%E3%83%A8%E3%83%BC%E3%83%86&qid=1722588843&sr=8-5',
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
            system_tag:["言葉遊び"],
            who:["ともだちと","初対面の人と"],
            where:["カフェで"]
        },
        likes: {
            count: 3,
            timestamps: []
        },
        purchaseLink: 'https://www.amazon.co.jp/%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%B2%E3%83%BC%E3%83%A0%E3%82%BA%E3%82%AA%E3%83%BC%E3%83%80%E3%83%BC-New-Games-Order/dp/B00RVVSTVI/ref=sr_1_5?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dib=eyJ2IjoiMSJ9._RZEKVZdNrz23KIKY4XiZiti12F7dT7x6Deo6Ude--DFRPHrqfZjM81qumKpBbenAEp6i80EnI2VgWmeNfNhDM7HXkclNmt15RZmbHpbpuPbFTZRPLqKsXU7w5lt-9qMN7UOO_94D5FktLFpyx7jeSuWseuJUkdUqEq7i3dUY8DQpFD-D9MIPs8vh7KJShudqga0svQxSS8w2HMbrq4K7vDr9NBHTtvwT5FVloZ8PZ0_ukgu784-rhmroX0nwgpJYXLnpN2TMK9QxtjvZBtWNgXoID0ZwpQjtLewtfrc3ww.VyHaCCeV4U5epYF4RjTMi5830Vqvw1vdaPPzYGvRX2U&dib_tag=se&keywords=%E3%82%B3%E3%83%A8%E3%83%BC%E3%83%86&qid=1722588843&sr=8-5',
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
            system_tag:["言葉遊び","協力"],
            who:["ともだちと","初対面の人と"],
            where:["カフェで"]
        },
        likes: {
            count: 3,
            timestamps: []
        },
        purchaseLink: 'https://www.amazon.co.jp/%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%B2%E3%83%BC%E3%83%A0%E3%82%BA%E3%82%AA%E3%83%BC%E3%83%80%E3%83%BC-New-Games-Order/dp/B00RVVSTVI/ref=sr_1_5?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dib=eyJ2IjoiMSJ9._RZEKVZdNrz23KIKY4XiZiti12F7dT7x6Deo6Ude--DFRPHrqfZjM81qumKpBbenAEp6i80EnI2VgWmeNfNhDM7HXkclNmt15RZmbHpbpuPbFTZRPLqKsXU7w5lt-9qMN7UOO_94D5FktLFpyx7jeSuWseuJUkdUqEq7i3dUY8DQpFD-D9MIPs8vh7KJShudqga0svQxSS8w2HMbrq4K7vDr9NBHTtvwT5FVloZ8PZ0_ukgu784-rhmroX0nwgpJYXLnpN2TMK9QxtjvZBtWNgXoID0ZwpQjtLewtfrc3ww.VyHaCCeV4U5epYF4RjTMi5830Vqvw1vdaPPzYGvRX2U&dib_tag=se&keywords=%E3%82%B3%E3%83%A8%E3%83%BC%E3%83%86&qid=1722588843&sr=8-5',
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
        likes: {
            count: 3,
            timestamps: []
        },
        purchaseLink: 'https://amzn.asia/d/0bMw9FTq',
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
            price:"2800円",
            system_tag:["心理戦","脱落"],
            who:["ともだちと","仕事仲間と"],
            where:["ホームパーティで"]
        },
        likes: {
            count: 3,
            timestamps: []
        },
        purchaseLink: 'https://amzn.asia/d/iqGxDcO',
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
        purchaseLink: 'https://example.com/purchase2',
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
            num_players:"2~4人",
            playtime:"5分",
            price:"2000円",
            system_tag:["推測",],
            who:["ともだちと","家族と"],
            where:["カフェで"]
        },
        likes: {
            count: 4,
            timestamps: []
        },
        purchaseLink: 'https://amzn.asia/d/02y7HDwF',
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
        likes: {
            count: 3,
            timestamps: []
        },
        purchaseLink: 'https://amzn.asia/d/3sW8S5x',
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
            price:"2700円",
            system_tag:["ハンドマネージメント"],
            who:["ともだちと"],
            where:["カフェで"]
        },
        likes: {
            count: 3,
            timestamps: []
        },
        purchaseLink: 'https://amzn.asia/d/70UYl5m',
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
                '/pictures/ジャイプル/rules/endgame/jaipur_18.webp',
            ]
        }
    },
    {
        id:1014,
        grid: '/pictures/プロポーズ/grid/puropo-zu _grid.webp',
        name: 'たった今考えたプロポーズの言葉を君に捧ぐよ',
        // 46文字まで
        explanation:"愛を語れ！",
        info:{
            num_players:"3~6人",
            playtime:"15~30分",
            price:"3500円",
            system_tag:["パーティゲーム","大喜利"],
            who:["ともだちと","恋人と"],
            where:["パーティで"]
        },
        likes: {
            count: 3,
            timestamps: []
        },
        purchaseLink: 'https://www.clagla.jp/propose-series.html',
        shareLink: 'https://example.com/share1',
        slides: {
            thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+1',
            overview: 'https://via.placeholder.com/300x200?text=Overview+1',
            components: [
                "/pictures/プロポーズ/pickup/components/puropo-zu _box800.webp",
                "/pictures/プロポーズ/pickup/components/puropo-zu _setting800.webp",
                "/pictures/プロポーズ/pickup/components/puropo-zu _compoment.webp",
            
            ]
        },
        rules: {
            description: [
                '/pictures/system_design/rulette_prepare.webp',
                '/pictures/system_design/rulette_prepare.webp',
            ],
            setup: [
                '/pictures/system_design/rulette_prepare.webp',
                '/pictures/system_design/rulette_prepare.webp',
            ],
            gameplay: [
                '/pictures/system_design/rulette_prepare.webp',
                '/pictures/system_design/rulette_prepare.webp',
            ],
            endgame: [
                '/pictures/system_design/rulette_prepare.webp',
                '/pictures/system_design/rulette_prepare.webp',
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
        likes: {
            count: 3,
            timestamps: []
        },
        purchaseLink: '',
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
                '/pictures/モダンアート/rules/endgame/modernart_27.webp',
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
        likes: {
            count: 3,
            timestamps: []
        },
        purchaseLink: '',
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
            price:"1500円",
            system_tag:["メモリー"],
            who:["こどもと","ともだちと"],
            where:["家で"]
        },
        likes: {
            count: 3,
            timestamps: []
        },
        purchaseLink: '',
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
            gameStory:"古代の戦争は隊列を組んだ軍団同士の間で戦われました。古代の指揮官たちは自国の隊列を敵よりも優位に動かすことにより敵隊列の分断、または側面からの包囲を試みる戦術の熟練を競ってきたのです。あなたはこの古代の戦術をマスターできるでしょうか？",
            basicInfo:{
                refPrice:"2000円",
                numPlayers:"4人",
                playTime:"20分",
                release:"2010年",
                difficulty:"ふつう",
                ageRange:"8歳以上",
                gameSystem:"セットコレクション",
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
                    "question": "ストレートやストレートフラッシュにおいて1,3,2などだした順番がずれていても役になりますか。",
                    "answer": "順番がずれていても、正しいカードの組み合わせであれば役になります。"
                },
                {
                    "question": "プレイヤー数が多い場合の対策はありますか？",
                    "answer": "プレイヤー数が多い場合、ゲームのバランスを保つために特定のルール変更を推奨します。"
                }
            ],
        likes: {
            count: 3,
            timestamps: []
        },
        purchaseLink: '',
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
        likes: {
            count: 3,
            timestamps: []
        },
        purchaseLink: '',
        shareLink: 'https://example.com/share1',
        slides: {
            thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+1',
            overview: 'https://via.placeholder.com/300x200?text=Overview+1',
            components: [
                "/pictures/シェフィ/pickup/components/shephy_grid.800.webp",
                "/pictures/シェフィ/pickup/components/shephy_box800.webp",
                "/pictures/シェフィ/pickup/components/shephy_setting800.webp",
                "/pictures/シェフィ/pickup/components/shephy_component800.webp",
            
            ]
        },
        rules: {
            description: [
                '/pictures/system_design/rulette_prepare.webp',
                '/pictures/system_design/rulette_prepare.webp',
            ],
            setup: [
                '/pictures/system_design/rulette_prepare.webp',
                '/pictures/system_design/rulette_prepare.webp',
            ],
            gameplay: [
                '/pictures/system_design/rulette_prepare.webp',
                '/pictures/system_design/rulette_prepare.webp',
            ],
            endgame: [
                '/pictures/system_design/rulette_prepare.webp',
                '/pictures/system_design/rulette_prepare.webp',
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
    const titles = ["かんたん説明","詳しい情報", "ゲームの準備", "ゲームの流れ", "ゲームの終了","ルールQ＆A"];
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
        if(title ==="詳しい情報" ){
            const gameDescription = document.createElement('div');
            gameDescription.classList.add('game-description');

            const descriptionTitle = document.createElement('div');
            descriptionTitle.classList.add('section-title');
            descriptionTitle.textContent = 'ゲームの記述';
            gameDescription.appendChild(descriptionTitle);

            const descriptionText = document.createElement('p');
            descriptionText.textContent = game.details.gameStory;
            gameDescription.appendChild(descriptionText);

            content.appendChild(gameDescription);

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
                    <tr><td>メカニクス</td><td>${game.details.basicInfo.gameSystem}</td></tr>
                    <tr><td>大きさ (cm)</td><td>${game.details.basicInfo.size}</td></tr>
                </table>
            `;
            tableRight.innerHTML = tableRightContent;
            basicInfoContainer.appendChild(tableRight);

            basicInfo.appendChild(basicInfoContainer);
            content.appendChild(basicInfo);

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
            content.appendChild(contents);

            const credits = document.createElement('div');
            credits.classList.add('credits');

            const creditsTitle = document.createElement('div');
            creditsTitle.classList.add('section-title');
            creditsTitle.textContent = 'クレジット';
            credits.appendChild(creditsTitle);

            const creditsTable = document.createElement('table');
            let creditsContent = '';

            game.details.credits.designer.forEach(designer => {
                creditsContent += `<tr><td>ゲームデザイン</td><td>${designer}</td></tr>`;
            });
            game.details.credits.artwork.forEach((artist, index) => {
                creditsContent += `<tr><td>${index === 0 ? 'アートワーク' : ''}</td><td>${artist}</td></tr>`;
            });
            game.details.credits.company.forEach((company, index) => {
                creditsContent += `<tr><td>${index === 0 ? '企業/団体' : ''}</td><td>${company}</td></tr>`;
            });

            creditsTable.innerHTML = creditsContent;
            credits.appendChild(creditsTable);
            content.appendChild(credits);
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

                // Add line divider
                const line = document.createElement('div');
                line.classList.add('line');
                qaContainer.appendChild(line);
            });

            content.appendChild(qaContainer);
        }else{
            
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
        }
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


