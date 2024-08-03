-- sample.dbを開く
.open item.db

-- 表示モードをboxに変更
.mode box

-- tigers2023テーブルを作成
DROP TABLE IF EXISTS events;
CREATE TABLE events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    price INT,
    start DATE,
    finish DATE,
    image_path VARCHAR(255) NOT NULL
);

-- tigers2023にデータを挿入
INSERT INTO  events (name, price,start,finish,image_path) VALUES ('test', '400','2024-01-01', '2025-01-01','./image/test.jpg');

-- tigers2023テーブルの内容を表示
SELECT * FROM events;