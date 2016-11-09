from flask import Flask, jsonify, request
import pg
app = Flask('app')

db = pg.DB(dbname='practiceAjax')

@app.route('/')
def home():
    # this sends the contents of static/index.html
    return app.send_static_file('index.html')

@app.route('/search')
def search():
    # this sends the contents of static/results.json
    query= request.args.get('search')
    result = db.query('select * from website where title ilike $1', query).dictresult()
    return jsonify(result)

    # return app.send_static_file('results.json')


app.run(debug=True)
