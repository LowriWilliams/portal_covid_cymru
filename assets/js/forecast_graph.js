var dates = ['22-02-2021', '23-02-2021', '24-02-2021', '25-02-2021', '26-02-2021', '27-02-2021', '28-02-2021', '01-03-2021', '02-03-2021', '03-03-2021', '04-03-2021', '05-03-2021', '06-03-2021', '07-03-2021', '08-03-2021', '09-03-2021', '10-03-2021', '11-03-2021', '12-03-2021', '13-03-2021', '14-03-2021', '15-03-2021', '16-03-2021', '17-03-2021', '18-03-2021', '19-03-2021', '20-03-2021', '21-03-2021', '22-03-2021', '23-03-2021', '24-03-2021', '25-03-2021', '26-03-2021', '27-03-2021', '28-03-2021', '29-03-2021', '30-03-2021', '31-03-2021', '01-04-2021', '02-04-2021', '03-04-2021', '04-04-2021', '05-04-2021', '06-04-2021', '07-04-2021', '08-04-2021', '09-04-2021', '10-04-2021', '11-04-2021', '12-04-2021', '13-04-2021', '14-04-2021', '15-04-2021', '16-04-2021', '17-04-2021', '18-04-2021', '19-04-2021'];
var predicted_cases = ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 81, 84, 86, 88, 85, 83, 82, 84, 85, 85];
var daily_cases = [336, 288, 264, 225, 202, 139, 207, 244, 237, 209, 199, 131, 169, 146, 258, 165, 202, 228, 206, 190, 158, 196, 183, 183, 219, 177, 152, 139, 198, 163, 190, 199, 152, 87, 103, 124, 137, 108, 94, 63, 58, 76, 72, 105, 103, 90, 67, 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'];
var predicted_deaths = ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 0, 0, 1, 1, 1, 1, 1, 1, 1, 1];
var daily_deaths = [13, 14, 12, 14, 13, 12, 3, 10, 13, 6, 8, 4, 8, 6, 6, 4, 7, 2, 4, 4, 8, 4, 3, 5, 2, 7, 0, 3, 3, 1, 2, 1, 1, 1, 1, 2, 0, 0, 2, 5, 0, 0, 1, 2, 0, 1, 2, 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'];
var forecast_start = "10-04-2021";
var predicted_tests = ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 4102, 4311, 4594, 4730, 4481, 4406, 4378, 4429, 4476, 4499];
var daily_tests = [5774, 5490, 5001, 4667, 4391, 2709, 2500, 5417, 5506, 4712, 4818, 4725, 3048, 2974, 6214, 6257, 5650, 5485, 5424, 3452, 3254, 7412, 7113, 6159, 6292, 5675, 3884, 3860, 8627, 8618, 7569, 6696, 6140, 3692, 3399, 6563, 5639, 4902, 5218, 2760, 2638, 2334, 3639, 6475, 5008, 4601, 4023, 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'];
