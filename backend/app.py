from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def calculate_tdee(gender, weight, height, age, activity_level):
    if gender.lower() == 'male':
        bmr = 10 * weight + 6.25 * height - 5 * age + 5
    else:
        bmr = 10 * weight + 6.25 * height - 5 * age - 161

    activity_factors = {
        "sedentary": 1.2,
        "light": 1.375,
        "moderate": 1.55,
        "active": 1.725,
        "very_active": 1.9
    }

    factor = activity_factors.get(activity_level.lower(), 1.2)
    return round(bmr * factor, 2)

@app.route('/tdee', methods=['POST'])
def tdee():
    data = request.json
    tdee_result = calculate_tdee(
        data['gender'], 
        data['weight'], 
        data['height'], 
        data['age'], 
        data['activity_level']
    )
    return jsonify({"tdee": tdee_result})

if __name__ == '__main__':
    app.run(debug=True)
