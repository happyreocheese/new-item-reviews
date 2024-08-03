-- sample.dbを開く
.open items.db

-- 表示モードをboxに変更
.mode box

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
    rate DOUBLE,
    intro TEXT
);

-- itemsテーブルにデータを挿入
INSERT INTO items (company, name, price, start, finish, image_path, rate,intro) 
VALUES ('test', 'test item', '400', '2024-01-01', '2025-01-01', './img/test.jpg', 5, 'これはテストです');
INSERT INTO items (company, name, price, start, finish, image_path, rate,intro) 
VALUES ('mac', 'すいかフラッペ', '490~', '2024-07-31', '2024-08-31', './img/suika.jpg', 5, 'すいか果汁を使用したスムージーベースに、ホイップクリームとキウイ＆ばななソースをトッピングしました。
すいかをそのままかじったような、見た目にも楽しいすっきりした甘さのフラッペです。');
INSERT INTO items (company, name, price, start, finish, image_path, rate,intro) 
VALUES ('mac', 'ゴールデンパインフラッペ', '490~', '2024-07-31', '2024-08-31', './img/pain.jpg', 5, 'ゴールデンパイン果汁を使用したスムージーベースに、ホイップクリームとゴールデンパインソースをトッピングした、トロピカルな香りと爽やかでジューシーな甘さのフラッペです 。');
INSERT INTO items (company, name, price, start, finish, image_path, rate,intro) 
VALUES ('mac', 'マカロン ばなな', '190~', '2024-07-31', '2025-01-01', './img/banana.jpg', 5, 'アーモンド入りのサクふわ生地に、 バナナピューレを配合したやさしい甘さが特長のクリームをサンドしたまろやかな味わいのマカロン。');

-- itemsテーブルの内容を表示
SELECT * FROM items;