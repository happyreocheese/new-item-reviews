-- sample.dbを開く
.open items.db

-- 表示モードをboxに変更
.mode box

-- reviewsテーブルを削除（存在する場合）
DROP TABLE IF EXISTS reviews;

-- reviewsテーブルを削除（存在する場合）
DROP TABLE IF EXISTS reviews;
-- reviewsテーブルを作成
CREATE TABLE reviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    comment TEXT,
    rate INT
);

INSERT INTO reviews (name, comment, rate)
VALUES ('モス好き',  'センスないわマック', 5.0);

SELECT * FROM reviews;

-- itemsテーブルを削除（存在する場合）
DROP TABLE IF EXISTS items;

-- itemsテーブルを作成
CREATE TABLE items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    company TEXT,
    name TEXT,
    price TEXT,
    start DATE,
    finish DATE,
    image_path VARCHAR(255) NOT NULL, 
    rate INT,
    intro TEXT,
    rev_num INTEGER
);

INSERT INTO items (company, name, price, start, finish, image_path, rate,intro, rev_num) 
VALUES ('マクドナルド', 'すいかフラッペ', '490~', '2024-07-31', '2024-08-31', './img/suika.jpg', 5, 'すいか果汁を使用したスムージーベースに、ホイップクリームとキウイ＆ばななソースをトッピングしました。
すいかをそのままかじったような、見た目にも楽しいすっきりした甘さのフラッペです。', (SELECT COUNT(*) FROM reviews WHERE reviews.name = 'すいかフラッペ'));
INSERT INTO items (company, name, price, start, finish, image_path, rate,intro, rev_num) 
VALUES ('マクドナルド', 'ゴールデンパインフラッペ', '490~', '2024-07-31', '2024-08-31', './img/pain.jpg', 2.0, 'ゴールデンパイン果汁を使用したスムージーベースに、ホイップクリームとゴールデンパインソースをトッピングした、トロピカルな香りと爽やかでジューシーな甘さのフラッペです 。', (SELECT COUNT(*) FROM reviews WHERE reviews.name = 'ゴールデンパインフラッペ'));
INSERT INTO items (company, name, price, start, finish, image_path, rate,intro, rev_num) 
VALUES ('マクドナルド', 'マカロン ばなな', '190~', '2024-07-31', '2025-01-01', './img/banana.jpg', 3.5, 'アーモンド入りのサクふわ生地に、 バナナピューレを配合したやさしい甘さが特長のクリームをサンドしたまろやかな味わいのマカロン。', (SELECT COUNT(*) FROM reviews WHERE reviews.name = 'マカロン ばなな'));
INSERT INTO items (company, name, price, start, finish, image_path, rate,intro, rev_num) 
VALUES ('マクドナルド', 'チーズベーコンポテトパイ', '190', '2024-07-31', '2025-01-01', './img/cheesepai.png', 4.2, 'ホクホクのポテト、スモーキーなベーコンなどのたっぷりな具材と、とろ～りチーズをサクサクのパイで包んだやみつきになる一品です。', (SELECT COUNT(*) FROM reviews WHERE reviews.name = 'チーズベーコンポテトパイ'));
INSERT INTO items (company, name, price, start, finish, image_path, rate,intro, rev_num) 
VALUES ('スターバックス', 'ラブ & ピーチ フラペチーノ', '700', '2024-07-31', '2025-01-01', './img/love_and_peach.jpg', 4.5, '皮の華やかな香りや酸味、実のみずみずしさや甘さなど、完熟したような香り高い桃感を表現したフラペチーノ®です。', (SELECT COUNT(*) FROM reviews WHERE reviews.name = 'ラブ & ピーチ フラペチーノ'));
INSERT INTO items (company, name, price, start, finish, image_path, rate,intro, rev_num) 
VALUES ('スターバックス', 'イチゴ バナナ フラペチーノ', '690', '2024-07-31', '2025-01-01', './img/strawberyy_banana.jpg', 4.8, '甘酸っぱいイチゴと、バナナ果肉を組み合わせたフラペチーノ', (SELECT COUNT(*) FROM reviews WHERE reviews.name = 'イチゴ バナナ フラペチーノ'));
INSERT INTO items (company, name, price, start, finish, image_path, rate,intro, rev_num) 
VALUES ('スターバックス', 'ほうじ茶 ＆ クラシックティー ラテ', '510~', '2024-07-31', '2025-01-01', './img/Houji_tea.jpg', 3.0, '甘くクリーミーな味わいと、すっきりした味わいが楽しめるティー ラテ', (SELECT COUNT(*) FROM reviews WHERE reviews.name = 'ほうじ茶 ＆ クラシックティー ラテ'));
INSERT INTO items (company, name, price, start, finish, image_path, rate,intro, rev_num) 
VALUES ('スターバックス', 'スターバックス ストロベリー フラペチーノ', '680', '2024-07-31', '2025-01-01', './img/strawberry.jpg', 2.0, '甘酸っぱいストロベリーとミルクの絶妙なハーモニー', (SELECT COUNT(*) FROM reviews WHERE reviews.name = 'スターバックス ストロベリー フラペチーノ'));
INSERT INTO items (company, name, price, start, finish, image_path, rate,intro, rev_num) 
VALUES ('スターバックス', 'コーヒーエイド® オレンジ ディライト', '990', '2024-07-31', '2025-01-01', './img/coffee_orange.jpg', 3.6, '特殊な抽出方法を採用した透明感のあるコーヒーに、オレンジを加えてシェイクで仕上げるリフレッシュメント ビバレッジです。', (SELECT COUNT(*) FROM reviews WHERE reviews.name = 'コーヒーエイド® オレンジ ディライト'));
INSERT INTO items (company, name, price, start, finish, image_path, rate,intro, rev_num) 
VALUES ('スターバックス', 'グリーン チャイ ティー ラテ', '690', '2024-07-31', '2025-01-01', './img/green_chai.jpg', 4.0, '煎茶をベースにスパイス、青りんごの風味、ゆず、すだちを合わせた夏にぴったりな爽やかでフルーティーな香りのチャイです。スパイスはカルダモンとジンジャーを使用し、アクセントにはグリーンペッパーと青山椒を効かせました。', (SELECT COUNT(*) FROM reviews WHERE reviews.name = 'グリーン チャイ ティー ラテ'));
INSERT INTO items (company, name, price, start, finish, image_path, rate,intro, rev_num) 
VALUES ('スターバックス', 'ストロベリー & アール グレイ ティー', '630', '2024-07-31', '2025-01-01', './img/ichigo_tea.jpg', 2.0, '爽やかなアールグレイティーにストロベリー果肉とフリーズドライストロベリーを合わせました。ベルガモットの香りと華やかなストロベリーの組み合わせが楽しめます。', (SELECT COUNT(*) FROM reviews WHERE reviews.name = 'ストロベリー & アール グレイ ティー'));


INSERT INTO items (company, name, price, start, finish, image_path, rate,intro, rev_num) 
VALUES ('セブンイレブン','でかむすび　ガーリックライス＆ポークソテー', '291', '2024-07-31', '2024-08-31', './img/garic_rice.jpg', 4.7, 'コーンを混ぜ込んだにんにく風味の御飯とポークソテーを組み合わせた、大きなおむすびです。', (SELECT COUNT(*) FROM reviews WHERE reviews.name = 'でかむすび　ガーリックライス＆ポークソテー'));
INSERT INTO items (company, name, price, start, finish, image_path, rate,intro, rev_num) 
VALUES ('セブンイレブン','混ぜ飯おむすびカリカリ梅（紀州南高梅使用）', '138', '2024-07-31', '2024-08-31', './img/plum.jpg', 4.3, '紀州南高梅のカリカリ梅を混ぜ込んだ、さっぱりとした味付けの混ぜ飯おむすびです。', (SELECT COUNT(*) FROM reviews WHERE reviews.name = '混ぜ飯おむすびカリカリ梅（紀州南高梅使用）'));
INSERT INTO items (company, name, price, start, finish, image_path, rate,intro, rev_num) 
VALUES ('セブンイレブン','一番だしおむすび　わさびめし', '152', '2024-07-31', '2024-08-31', './img/wasabi.jpg', 4.2, 'だしを効かせたご飯に、ツーンとした辛味のわさびを組み合わせたおむすびです。「ストレスや疲労感を緩和する」効果を謳った、機能性表示食品です。', (SELECT COUNT(*) FROM reviews WHERE reviews.name = '一番だしおむすび　わさびめし'));
INSERT INTO items (company, name, price, start, finish, image_path, rate,intro, rev_num) 
VALUES ('セブンイレブン','幕の内３９８', '430', '2024-07-31', '2024-08-31', './img/398.jpg', 4.6, '定番のおかずをたっぷり盛りつけた、人気の幕の内弁当です。', (SELECT COUNT(*) FROM reviews WHERE reviews.name = '幕の内３９８'));

INSERT INTO items (company, name, price, start, finish, image_path, rate,intro, rev_num) 
VALUES ('ローソン', 'Uchi Café×猿田彦珈琲　カフェラテどらもっち', '235', '2024-07-31', '2025-01-01', './img/dorayaki.png', 1.0, '猿田彦珈琲コラボ商品。珈琲キャンディ入りの苦味が少ないカフェラテどらもっち。', (SELECT COUNT(*) FROM reviews WHERE reviews.name = 'Uchi Café×猿田彦珈琲　カフェラテどらもっち'));
INSERT INTO items (company, name, price, start, finish, image_path, rate,intro, rev_num) 
VALUES ('ローソン', '猿田彦珈琲　チョコミントカフェラテ', '218', '2024-07-31', '2025-01-01', './img/chocolate_mint.png', 4.9, '猿田彦珈琲共同開発。コク深いミルクにチョコレートとやさしいミントが香る味わい。', (SELECT COUNT(*) FROM reviews WHERE reviews.name = '猿田彦珈琲　チョコミントカフェラテ'));



-- itemsテーブルの内容を表示
SELECT * FROM items;

-- corporatesテーブルを削除（存在する場合）
DROP TABLE IF EXISTS corporates;
-- corporatesテーブルを作成
CREATE TABLE corporates (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    company TEXT,
    intro TEXT,
    image_path VARCHAR(255) NOT NULL, 
    item_num INTEGER
);

INSERT INTO corporates (company, intro, image_path, item_num) 
VALUES ('マクドナルド', 'ハンバーガー・レストラン・チェーンを中心とした飲食店。マクドナルドのおいしさの裏には、秘伝のルールあり。いつ食べても、どこで食べても、変わらないおいしさを届けられるように。数多くのこだわりの果てに辿り着いたゴールデンルールをご覧あれ。知ればきっと、もっとおいしく感じるはず。', './img/mad.jpg', (SELECT COUNT(*) FROM items WHERE items.company = 'マクドナルド'));
INSERT INTO corporates (company, intro, image_path, item_num) 
VALUES ('スターバックス', 'StarBucksは、世界一のコーヒーチェーン。世界90カ国、約32,000店を展開している。おしゃれな空間、音楽、写真映えするフラペチーノ。すべての世代に、自宅や職場以外の第3の場所「サードプレイス」を提供している。また、フレンドリーな接客でマニュアルがないことでも知られています。顧客第一を考え、Wifiやコンセントの導入、全席禁煙を一番最初にとりいれた。2021年4月~6月の売上は世界全体で前年比78％増加。日本でも47都道府県、1500店舗を展開し、各都道府県でオリジナルフラペチーノを販売するユニークな取り組みも行っている。', './img/sta.jpg', (SELECT COUNT(*) FROM items WHERE items.company = 'スターバックス'));
INSERT INTO corporates (company, intro, image_path, item_num) 
VALUES ('セブンイレブン', 'コンビニのシステムをさまざま立ち上げては、他社の見本となってきたセブン-イレブン。奇をてらうことなく王道を突き進むイメージだ。イトーヨーカ堂が米国発祥の小売店とライセンス契約を結び、1974年に日本で営業を開始（のちに米国セブン-イレブンを買収）。日本のコンビニの草分け的存在である。国内店舗数は約1万8000。スローガンは「近くて便利」。地域の人へのサービスを重視し、配達サービスにも力を入れている。', './img/sev.jpg', (SELECT COUNT(*) FROM items WHERE items.company = 'セブンイレブン'));
INSERT INTO corporates (company, intro, image_path, item_num) 
VALUES ('ローソン', '通常のローソンと、都内を中心とした関東に出店している「ナチュラルローソン」、ひとり暮らしの人がターゲットで、低価格な品が揃う生鮮コンビニ「ローソンストア100」の3種を軸に展開している。2013年から「マチの健康ステーション」をスローガンに掲げており、健康や美容に配慮した商品が豊富。おにぎりからお弁当、お菓子までヘルシーな商品が揃い、健康への意識が高い人からの支持が厚い。', './img/law.jpg', (SELECT COUNT(*) FROM items WHERE items.company = 'ローソン'));
INSERT INTO corporates (company, intro, image_path, item_num) 
VALUES ('ファミリーマート', 'ファミリーマートは日本発祥のコンビニエンスストアである。スローガンは「Fun＆Fresh」。ファミマはここまでやるか！と驚きやワクワク感を与えるべく、商品改革に取り組んでいる。店舗展開としては異業種と提携してさまざまなことにチャレンジしており、持ち込みOKのカラオケ店や、地域色の強いスーパーマーケット、ドラッグストア、外食店、農協などとの一体型店舗がある。「一緒に用事を済ませられる」というメリットを見据えて、人々の生活の不便解消を目的としている。そのほか、首都圏を中心に出店しているオシャレな印象の『ファミマ‼』なども。', './img/fam.jpg', (SELECT COUNT(*) FROM items WHERE items.company = 'ファミリーマート'));

SELECT * FROM corporates;