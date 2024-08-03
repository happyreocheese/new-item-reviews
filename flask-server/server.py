from flask_cors import CORS
import sqlite3
from flask import Flask, g, jsonify

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
            "intro": row[8]
        }
        for row in cur.fetchall()
    ]
    return jsonify(items)

if __name__ == "__main__":
    app.run(debug=True, port=5000)