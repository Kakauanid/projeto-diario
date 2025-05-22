from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__)
app.secret_key = 'sua_chave_secreta'

@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        return redirect(url_for('diario', user=username))
    return render_template('login.html')
    
@app.route('/diario/<user>')
def diario(user):
    return render_template('diario.html', user=user)

if __name__ == '__main__':
    app.run(debug=True)