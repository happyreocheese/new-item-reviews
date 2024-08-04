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
VALUES ('すいかフラッペ',  'センスないわマック', 5.0);

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

-- itemsテーブルにデータを挿入
INSERT INTO items (company, name, price, start, finish, image_path, rate,intro, rev_num) 
VALUES ('test', 'test item', '400', '2024-01-01', '2025-01-01', './img/test.jpg', 5, 'これはテストです', (SELECT COUNT(*) FROM reviews WHERE reviews.name = 'test'));
INSERT INTO items (company, name, price, start, finish, image_path, rate,intro, rev_num) 
VALUES ('マクドナルド', 'すいかフラッペ', '490~', '2024-07-31', '2024-08-31', './img/suika.jpg', 5, 'すいか果汁を使用したスムージーベースに、ホイップクリームとキウイ＆ばななソースをトッピングしました。
すいかをそのままかじったような、見た目にも楽しいすっきりした甘さのフラッペです。', (SELECT COUNT(*) FROM reviews WHERE reviews.name = 'すいかフラッペ'));
INSERT INTO items (company, name, price, start, finish, image_path, rate,intro, rev_num) 
VALUES ('マクドナルド', 'ゴールデンパインフラッペ', '490~', '2024-07-31', '2024-08-31', './img/pain.jpg', 5, 'ゴールデンパイン果汁を使用したスムージーベースに、ホイップクリームとゴールデンパインソースをトッピングした、トロピカルな香りと爽やかでジューシーな甘さのフラッペです 。', (SELECT COUNT(*) FROM reviews WHERE reviews.name = 'ゴールデンパインフラッペ'));
INSERT INTO items (company, name, price, start, finish, image_path, rate,intro, rev_num) 
VALUES ('マクドナルド', 'マカロン ばなな', '190~', '2024-07-31', '2025-01-01', './img/banana.jpg', 5, 'アーモンド入りのサクふわ生地に、 バナナピューレを配合したやさしい甘さが特長のクリームをサンドしたまろやかな味わいのマカロン。', (SELECT COUNT(*) FROM reviews WHERE reviews.name = 'マカロン ばなな'));

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
VALUES ('マクドナルド', 'チキンクリスプ2個ください', './img/mac.jpg', (SELECT COUNT(*) FROM items WHERE items.company = 'マクドナルド'));
INSERT INTO corporates (company, intro, image_path, item_num) 
VALUES ('スターバックス', 'チキンクリスプ1個ください', 'https://www.mcdonalds.co.jp/assets/images/mcd-logo.svg', (SELECT COUNT(*) FROM items WHERE items.company = 'スターバックス'));
INSERT INTO corporates (company, intro, image_path, item_num) 
VALUES ('セブンイレブン', 'チキンクリスプ1個ください', 'https://www.mcdonalds.co.jp/assets/images/mcd-logo.svg', (SELECT COUNT(*) FROM items WHERE items.company = 'セブンイレブン'));
INSERT INTO corporates (company, intro, image_path, item_num) 
VALUES ('ローソン', 'チキンクリスプ1個ください', 'https://www.mcdonalds.co.jp/assets/images/mcd-logo.svg', (SELECT COUNT(*) FROM items WHERE items.company = 'ローソン'));
INSERT INTO corporates (company, intro, image_path, item_num) 
VALUES ('ファミリーマート', 'チキンクリスプ1個ください', 'https://www.mcdonalds.co.jp/assets/images/mcd-logo.svg', (SELECT COUNT(*) FROM items WHERE items.company = 'ファミリーマート'));

SELECT * FROM corporates;
