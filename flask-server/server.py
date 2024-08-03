from flask_cors import CORS
import sqlite3
from flask import Flask, g, render_template, jsonify

app = Flask(__name__)
cors = CORS(app, origins='*')
def get_db():
    if "db" not in g:
        g.db = sqlite3.connect("item.db")
    return g.db

def close_db():
    db = g.pop("db", None)
    if db is not None:
        db.close()

@app.route("/recive_data", methods=["GET"])
def database():
    data_list = []
    # データリストの初期化．
    db = get_db()
    cur = db.execute("SELECT * FROM events")
    for item in cur.fetchall():
        tuple = list(item)
        # データベースのタプルをリスト化する．
        data_list.append(tuple)
        # タプルをデータリストに加える．
    name=[]
    i=0
    for i in range(len(data_list)):
            # ファイルから１行づつ読み出し，textに代入する
            name.append(data_list[i][0])
     
    return jsonify(
          name
	)


if __name__ == "__main__":
	app.run(debug=True, port=5000)