from flask_cors import CORS
import sqlite3
from flask import Flask, g, jsonify, request

app = Flask(__name__)
CORS(app)

DATABASE = 'items.db'

def get_db():
    if 'db' not in g:
        g.db = sqlite3.connect(DATABASE)
    return g.db

def close_db():
    db = g.pop('db', None)
    if db is not None:
        db.close()

@app.teardown_appcontext
def teardown_db(exception):
    close_db()

# 商品一覧表示
@app.route("/api/items", methods=["GET"])
def get_items():
    db = get_db()
    cur = db.execute("SELECT * FROM items")
    items = [
        {
            "id": row[0],
            "company": row[1],
            "name": row[2],
            "price": row[3],
            "start": row[4],
            "finish": row[5],
            "image_path": row[6],
            "rate": row[7],
            "intro": row[8],
            "rev_num": row[9]  # ここを追加
        }
        for row in cur.fetchall()
    ]
    return jsonify(items)

# 提出
@app.route("/api/submit", methods=["POST"])
def submit():
    try:
        data = request.json
        db = get_db()
        db.execute("INSERT INTO reviews (name, comment, rate,pname) VALUES (?, ?, ?,?);", (data['name'], data['message'], data['rate'],data['pname']))
        db.commit()
        return jsonify({'message': 'Data received successfully'}), 200
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': 'An error occurred'}), 500

# レビューの一覧表示
@app.route("/api/reviews", methods=["GET"])
def get_reviews():
    try:
        db = get_db()
        cur = db.execute("SELECT * FROM reviews")
        reviews = [
            {
                "id": row[0],
                "name": row[1],
                "comment": row[2],
                "rate": row[3],
                "pname": row[4]
            }
            for row in cur.fetchall()
        ]
        return jsonify(reviews), 200
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': 'An error occurred'}), 500

# 企業一覧表示
@app.route("/api/corporates", methods=["GET"])
def get_corporates():
    db = get_db()
    cur = db.execute("SELECT * FROM corporates")
    corporates = [
        {
            "id": row[0],
            "company": row[1],
            "intro": row[2],
            "image_path": row[3],
            "item_num": row[4]
        }
        for row in cur.fetchall()
    ]
    return jsonify(corporates)

if __name__ == "__main__":
    app.run(debug=True, port=5000)