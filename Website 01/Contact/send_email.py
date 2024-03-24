from flask import Flask, render_template, request
from email.message import EmailMessage
import ssl
import smtplib

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/send_email', methods=['POST'])
def send_email():
    email_sender = ""
    email_password = password  # Assuming you have defined password somewhere

    email_receiver = request.form['email']
    subject = "Thanks For Your Call..!"
    body = request.form['message']

    em = EmailMessage()
    em['From'] = email_sender
    em['To'] = email_receiver
    em['subject'] = subject
    em.set_content(body)

    context = ssl.create_default_context()

    with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
        smtp.login(email_sender, email_password)
        smtp.sendmail(email_sender, email_receiver, em.as_string())

    return 'Email sent successfully!'

if __name__ == '__main__':
    app.run(debug=True)
