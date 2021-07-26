var dates = ['07-06-2021', '08-06-2021', '09-06-2021', '10-06-2021', '11-06-2021', '12-06-2021', '13-06-2021', '14-06-2021', '15-06-2021', '16-06-2021', '17-06-2021', '18-06-2021', '19-06-2021', '20-06-2021', '21-06-2021', '22-06-2021', '23-06-2021', '24-06-2021', '25-06-2021', '26-06-2021', '27-06-2021', '28-06-2021', '29-06-2021', '30-06-2021', '01-07-2021', '02-07-2021', '03-07-2021', '04-07-2021', '05-07-2021', '06-07-2021', '07-07-2021', '08-07-2021', '09-07-2021', '10-07-2021', '11-07-2021', '12-07-2021', '13-07-2021', '14-07-2021', '15-07-2021', '16-07-2021', '17-07-2021', '18-07-2021', '19-07-2021', '20-07-2021', '21-07-2021', '22-07-2021', '23-07-2021', '24-07-2021', '25-07-2021', '26-07-2021', '27-07-2021', '28-07-2021', '29-07-2021', '30-07-2021', '31-07-2021', '01-08-2021', '02-08-2021'];
var predicted_cases = ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 749, 765, 786, 768, 761, 755, 747, 762, 763, 763];
var daily_cases = [105, 116, 129, 139, 130, 86, 112, 159, 194, 189, 222, 174, 195, 187, 342, 343, 413, 413, 376, 252, 364, 628, 637, 596, 645, 577, 496, 555, 777, 771, 777, 713, 778, 655, 714, 915, 1098, 1206, 1119, 954, 639, 619, 909, 819, 800, 811, 649, 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'];
var predicted_deaths = ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 1, 1, 1, 0, 0, 0, 0, 0, 0, 0];
var daily_deaths = [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 2, 1, 3, 1, 1, 2, 1, 1, 0, 1, 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'];
var forecast_start = "24-07-2021";
var predicted_tests = ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 6662, 6863, 7121, 6890, 6718, 6636, 6668, 6794, 6813, 6805];
var daily_tests = [5719, 5990, 4628, 4817, 5075, 3123, 2747, 6320, 7599, 6802, 6540, 6317, 4164, 4105, 9290, 9266, 8171, 8058, 7236, 4637, 4817, 10953, 10857, 10021, 9306, 8785, 5722, 5950, 11722, 11446, 9911, 9037, 8313, 5615, 5675, 10667, 10828, 10250, 9145, 7846, 5253, 5055, 8740, 8097, 7290, 6414, 5785, 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'];
