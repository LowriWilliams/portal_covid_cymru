var dates = ['31-01-2021', '01-02-2021', '02-02-2021', '03-02-2021', '04-02-2021', '05-02-2021', '06-02-2021', '07-02-2021', '08-02-2021', '09-02-2021', '10-02-2021', '11-02-2021', '12-02-2021', '13-02-2021', '14-02-2021', '15-02-2021', '16-02-2021', '17-02-2021', '18-02-2021', '19-02-2021', '20-02-2021', '21-02-2021', '22-02-2021', '23-02-2021', '24-02-2021', '25-02-2021', '26-02-2021', '27-02-2021', '28-02-2021', '01-03-2021', '02-03-2021', '03-03-2021', '04-03-2021', '05-03-2021', '06-03-2021', '07-03-2021', '08-03-2021', '09-03-2021', '10-03-2021', '11-03-2021', '12-03-2021', '13-03-2021', '14-03-2021', '15-03-2021', '16-03-2021', '17-03-2021', '18-03-2021', '19-03-2021', '20-03-2021', '21-03-2021', '22-03-2021', '23-03-2021', '24-03-2021', '25-03-2021', '26-03-2021', '27-03-2021', '28-03-2021'];
var predicted_cases = ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 189, 187, 186, 190, 190, 191, 192, 189, 189, 190];
var daily_cases = [460, 612, 599, 583, 501, 501, 359, 284, 492, 469, 450, 377, 407, 282, 289, 453, 442, 373, 343, 310, 267, 273, 336, 288, 264, 225, 202, 139, 207, 244, 237, 209, 199, 131, 169, 146, 258, 165, 202, 228, 206, 190, 158, 196, 182, 181, 214, 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'];
var predicted_deaths = ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 3, 3, 3, 3, 2, 2, 2, 3, 3, 3];
var daily_deaths = [22, 29, 33, 26, 22, 23, 27, 18, 17, 18, 20, 16, 25, 19, 21, 18, 12, 13, 11, 18, 15, 15, 12, 14, 12, 14, 13, 12, 3, 9, 13, 6, 8, 4, 8, 6, 6, 4, 7, 2, 4, 4, 8, 4, 3, 3, 0, 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'];
var forecast_start = "19-03-2021";
var predicted_tests = ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 5499, 5507, 5798, 6160, 5977, 5822, 5784, 5792, 5834, 5881];
var daily_tests = [3320, 6380, 6965, 6783, 6028, 5785, 3442, 2989, 6091, 5890, 5574, 5297, 4926, 3246, 3159, 6221, 6378, 5541, 5432, 5317, 3371, 3186, 5784, 5497, 5008, 4679, 4394, 2709, 2503, 5423, 5521, 4718, 4833, 4739, 3051, 2976, 6236, 6270, 5671, 5502, 5441, 3467, 3267, 7439, 7064, 6092, 5723, 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'];
