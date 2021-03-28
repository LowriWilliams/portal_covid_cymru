var dates = ['01-09-2020', '04-09-2020', '06-09-2020', '09-09-2020', '14-09-2020', '23-09-2020', '24-09-2020', '28-09-2020', '30-09-2020', '01-10-2020', '02-10-2020', '03-10-2020', '04-10-2020', '05-10-2020', '07-10-2020', '08-10-2020', '09-10-2020', '10-10-2020', '11-10-2020', '12-10-2020', '13-10-2020', '14-10-2020', '15-10-2020', '16-10-2020', '17-10-2020', '18-10-2020', '19-10-2020', '20-10-2020', '21-10-2020', '22-10-2020', '23-10-2020', '24-10-2020', '25-10-2020', '26-10-2020', '27-10-2020', '28-10-2020', '29-10-2020', '30-10-2020', '01-11-2020', '02-11-2020', '03-11-2020', '04-11-2020', '05-11-2020', '06-11-2020', '07-11-2020', '08-11-2020', '09-11-2020', '10-11-2020', '11-11-2020', '12-11-2020', '13-11-2020', '14-11-2020', '15-11-2020', '16-11-2020', '17-11-2020', '19-11-2020', '20-11-2020', '21-11-2020', '22-11-2020', '23-11-2020', '24-11-2020', '25-11-2020', '26-11-2020', '27-11-2020', '28-11-2020', '29-11-2020', '01-12-2020', '02-12-2020', '03-12-2020', '04-12-2020', '05-12-2020', '06-12-2020', '07-12-2020', '08-12-2020', '09-12-2020', '11-12-2020', '14-12-2020', '15-12-2020', '16-12-2020', '17-12-2020', '18-12-2020', '19-12-2020', '20-12-2020', '21-12-2020', '22-12-2020', '23-12-2020', '24-12-2020', '26-12-2020', '27-12-2020', '28-12-2020', '29-12-2020', '30-12-2020', '31-12-2020', '02-01-2021', '04-01-2021', '05-01-2021', '06-01-2021', '07-01-2021', '08-01-2021', '09-01-2021', '14-01-2021', '15-01-2021', '17-01-2021', '18-01-2021', '23-01-2021', '25-01-2021', '26-01-2021', '27-01-2021', '28-01-2021', '29-01-2021', '30-01-2021', '31-01-2021', '01-02-2021', '02-02-2021', '03-02-2021', '04-02-2021', '06-02-2021', '07-02-2021', '08-02-2021', '10-02-2021', '12-02-2021', '13-02-2021', '14-02-2021', '16-02-2021', '17-02-2021', '18-02-2021', '19-02-2021', '21-02-2021', '22-02-2021', '23-02-2021', '25-02-2021', '26-02-2021', '27-02-2021', '28-02-2021', '02-03-2021', '03-03-2021', '04-03-2021', '05-03-2021', '06-03-2021', '08-03-2021', '09-03-2021', '11-03-2021', '13-03-2021', '14-03-2021', '15-03-2021', '16-03-2021', '17-03-2021', '19-03-2021', '20-03-2021', '22-03-2021', '23-03-2021', '24-03-2021', '25-03-2021'];
var tmp_1 = [4, 11, 4, 22, 61, 76, 9, 61, 13, 12, 12, 12, 19, 8, 52, 14, 26, 16, 7, 21, 29, 22, 31, 30, 30, 0, 62, 43, 48, 18, 55, 38, 33, 54, 44, 45, 64, 47, 69, 35, 40, 52, 45, 29, 22, 43, 6, 41, 23, 26, 33, 57, 41, 28, 24, 90, 37, 53, 40, 18, 56, 71, 54, 80, 42, 77, 85, 70, 94, 111, 107, 122, 44, 300, 93, 250, 73, 13, 676, 124, 156, 119, 144, 138, 159, 0, 87, 156, 83, 105, 96, 62, 103, 138, 137, 79, 54, 110, 81, 57, 321, 42, 106, 46, 242, 30, 18, 26, 28, 38, 29, 29, 34, 15, 22, 7669, 0, 33, 7765, 99, 0, 20, 7912, 0, 12, 36, 7996, 85, 0, 25, 9, 8109, 0, 6, 21, 8202, 0, 9, 12, 8269, 0, 8342, 0, 29, 16, 8464, 0, 8553, 0, 8611, 0, 24, 26];
var tmp_2 = [15, 29, 23, 39, 117, 176, 36, 202, 62, 81, 96, 69, 101, 60, 190, 140, 108, 88, 99, 153, 245, 174, 183, 146, 188, 0, 360, 195, 188, 108, 191, 125, 140, 191, 183, 153, 181, 141, 212, 118, 118, 140, 127, 83, 75, 89, 34, 94, 65, 50, 78, 101, 84, 55, 44, 213, 116, 78, 71, 55, 92, 146, 119, 166, 80, 171, 168, 170, 154, 183, 237, 256, 80, 1265, 239, 558, 159, 33, 1219, 278, 263, 195, 215, 264, 249, 0, 166, 283, 147, 196, 151, 140, 210, 319, 367, 188, 123, 225, 207, 145, 624, 77, 184, 110, 416, 39, 34, 44, 38, 59, 29, 58, 66, 31, 40, 18042, 0, 39, 18166, 142, 0, 29, 18395, 0, 21, 40, 18496, 91, 0, 27, 21, 18648, 0, 16, 24, 18745, 0, 17, 13, 18877, 0, 18924, 0, 38, 14, 19032, 0, 19122, 0, 19156, 0, 18, 31];
var tmp_3 = [29, 62, 28, 83, 194, 469, 60, 349, 92, 93, 138, 86, 160, 100, 304, 187, 143, 102, 96, 176, 205, 133, 167, 136, 212, 0, 369, 206, 249, 142, 310, 242, 248, 271, 268, 284, 393, 235, 539, 221, 226, 217, 274, 189, 146, 147, 91, 181, 130, 135, 173, 248, 184, 118, 115, 427, 211, 141, 168, 113, 175, 233, 224, 234, 173, 230, 234, 272, 287, 275, 333, 392, 123, 1895, 394, 913, 330, 66, 2317, 523, 590, 438, 484, 539, 591, 0, 416, 796, 401, 476, 457, 331, 500, 761, 766, 413, 355, 523, 473, 344, 1541, 207, 441, 190, 1074, 120, 92, 139, 93, 138, 117, 111, 107, 75, 110, 36252, 0, 116, 36590, 260, 0, 74, 36965, 0, 41, 106, 37320, 261, 0, 47, 55, 37640, 0, 25, 27, 37821, 0, 17, 33, 37942, 0, 38047, 0, 41, 19, 38230, 0, 38343, 0, 38395, 0, 35, 37];
var tmp_4 = [16, 39, 19, 90, 150, 353, 57, 284, 53, 75, 89, 87, 71, 53, 204, 107, 76, 64, 61, 116, 122, 101, 106, 92, 132, 0, 213, 128, 162, 103, 212, 175, 214, 183, 237, 219, 285, 215, 352, 182, 222, 219, 199, 139, 127, 141, 52, 146, 115, 135, 144, 223, 140, 112, 98, 311, 181, 134, 136, 103, 149, 234, 187, 230, 174, 219, 269, 244, 234, 273, 303, 327, 141, 346, 304, 752, 285, 69, 2079, 443, 540, 397, 441, 433, 564, 406, 377, 740, 398, 462, 402, 299, 460, 683, 645, 396, 282, 388, 355, 248, 1298, 171, 420, 193, 989, 85, 110, 111, 76, 119, 101, 113, 106, 77, 75, 31551, 0, 118, 31861, 301, 0, 74, 32255, 0, 63, 99, 32602, 225, 0, 48, 65, 32927, 0, 28, 38, 33140, 0, 26, 32, 33277, 0, 33382, 0, 38, 22, 33548, 0, 33666, 0, 33716, 0, 37, 34];
var tmp_5 = [7, 31, 23, 62, 130, 308, 54, 266, 58, 53, 88, 47, 71, 60, 193, 100, 89, 66, 65, 84, 118, 79, 130, 80, 126, 0, 231, 139, 168, 106, 192, 162, 133, 162, 221, 201, 259, 231, 377, 175, 187, 192, 215, 139, 93, 134, 78, 134, 111, 119, 147, 210, 119, 103, 111, 324, 141, 127, 151, 111, 131, 182, 163, 210, 140, 206, 222, 244, 220, 258, 307, 276, 122, 2190, 348, 803, 240, 97, 2033, 473, 521, 398, 437, 473, 554, 0, 335, 689, 367, 406, 347, 292, 410, 556, 541, 293, 227, 316, 305, 217, 1122, 148, 342, 159, 845, 88, 84, 117, 70, 85, 76, 90, 71, 69, 72, 28901, 0, 95, 29138, 247, 0, 44, 29498, 0, 47, 66, 29726, 158, 0, 40, 35, 29949, 0, 28, 28, 30121, 0, 17, 15, 30205, 0, 30290, 0, 44, 22, 30435, 0, 30511, 0, 30570, 0, 22, 22];
var tmp_6 = [10, 27, 20, 59, 161, 329, 49, 287, 67, 72, 82, 64, 89, 73, 213, 103, 105, 55, 84, 101, 107, 88, 151, 87, 145, 0, 223, 122, 156, 115, 183, 161, 193, 176, 211, 214, 255, 210, 390, 177, 207, 216, 248, 174, 99, 124, 64, 146, 155, 128, 176, 233, 157, 110, 105, 307, 131, 125, 118, 82, 143, 185, 157, 179, 138, 220, 247, 236, 214, 239, 260, 283, 129, 0, 286, 684, 282, 81, 1824, 436, 489, 375, 408, 449, 478, 1307, 381, 622, 427, 444, 386, 308, 456, 636, 653, 395, 287, 366, 387, 280, 1278, 185, 421, 186, 994, 93, 99, 99, 97, 122, 103, 85, 87, 68, 81, 31572, 0, 95, 31822, 256, 0, 59, 32159, 0, 42, 91, 32492, 183, 0, 47, 44, 32746, 0, 29, 24, 32894, 0, 22, 26, 32997, 0, 33086, 0, 23, 21, 33223, 0, 33298, 0, 33349, 0, 33, 24];
var tmp_7 = [5, 13, 8, 29, 75, 173, 30, 156, 27, 40, 39, 32, 42, 44, 117, 58, 39, 34, 30, 52, 65, 40, 70, 44, 61, 0, 128, 66, 82, 63, 85, 90, 90, 66, 113, 129, 138, 98, 196, 81, 89, 106, 121, 87, 63, 73, 34, 85, 103, 58, 83, 114, 75, 71, 57, 155, 74, 58, 77, 40, 71, 87, 99, 130, 103, 125, 108, 99, 126, 151, 177, 174, 59, 676, 173, 499, 177, 56, 1154, 291, 320, 235, 234, 283, 334, 0, 204, 382, 251, 236, 225, 190, 270, 390, 420, 232, 157, 228, 218, 146, 767, 112, 238, 109, 554, 50, 41, 59, 46, 72, 67, 47, 60, 39, 52, 17511, 0, 60, 17674, 139, 0, 35, 17871, 0, 24, 33, 18030, 126, 0, 39, 33, 18203, 0, 21, 18, 18297, 0, 24, 17, 18382, 0, 18432, 0, 13, 16, 18499, 0, 18561, 0, 15101, 0, 10, 14];
var tmp_8 = [2, 7, 3, 21, 40, 74, 14, 80, 13, 21, 16, 15, 25, 10, 63, 34, 22, 29, 23, 27, 31, 38, 52, 20, 32, 0, 80, 33, 48, 47, 42, 47, 53, 58, 81, 68, 81, 55, 129, 55, 56, 61, 69, 55, 50, 60, 35, 42, 73, 49, 35, 63, 40, 51, 31, 116, 52, 45, 61, 29, 36, 63, 49, 95, 65, 93, 69, 74, 77, 82, 106, 109, 42, 1983, 143, 324, 198, 68, 610, 232, 235, 187, 203, 213, 154, 0, 138, 247, 112, 103, 102, 115, 188, 261, 225, 115, 103, 145, 134, 96, 482, 65, 139, 64, 350, 28, 26, 37, 33, 41, 38, 42, 27, 39, 34, 11047, 0, 21, 11113, 114, 0, 31, 11295, 0, 17, 26, 11414, 77, 0, 19, 27, 11521, 0, 8, 12, 11580, 0, 11, 6, 11600, 0, 11633, 0, 10, 5, 11669, 0, 8500, 0, 11711, 0, 3, 6];
var tmp_9 = [2, 4, 2, 8, 17, 45, 6, 57, 10, 12, 5, 11, 12, 11, 29, 16, 12, 10, 18, 23, 16, 24, 49, 27, 16, 0, 75, 21, 18, 47, 39, 39, 41, 21, 43, 49, 61, 50, 131, 40, 38, 48, 40, 38, 50, 79, 33, 42, 58, 67, 43, 67, 36, 41, 40, 85, 48, 35, 42, 30, 37, 40, 37, 87, 59, 100, 56, 45, 52, 50, 69, 62, 29, 9483, 244, 524, 377, 170, 523, 378, 274, 222, 285, 305, 213, 0, 96, 159, 73, 62, 76, 73, 125, 195, 158, 82, 92, 140, 142, 83, 459, 80, 142, 28, 356, 27, 21, 49, 44, 39, 32, 39, 39, 35, 37, 9235, 0, 27, 9322, 111, 0, 20, 9473, 0, 16, 19, 9588, 66, 0, 11, 12, 9665, 0, 6, 10, 7318, 0, 4, 7, 9744, 0, 7358, 0, 8, 5, 7004, 0, 8066, 0, 5655, 0, 5, 6];
var tmp_10 = [2, 1, 1, 2, 4, 11, 4, 27, 3, 3, 5, 2, 3, 0, 10, 2, 5, 2, 4, 9, 3, 8, 19, 12, 2, 0, 28, 6, 12, 13, 14, 24, 13, 25, 12, 13, 20, 18, 69, 29, 19, 18, 14, 25, 19, 41, 15, 17, 34, 28, 21, 17, 16, 15, 14, 38, 25, 9, 26, 14, 17, 7, 14, 32, 28, 28, 21, 16, 13, 22, 14, 19, 10, 11619, 163, 351, 475, 148, 254, 305, 227, 287, 324, 184, 223, 0, 35, 66, 13, 19, 38, 21, 41, 71, 54, 45, 37, 46, 70, 44, 211, 42, 69, 21, 162, 9, 12, 23, 21, 24, 13, 16, 17, 7, 21, 3909, 0, 6, 3932, 80, 0, 8, 4020, 0, 7, 16, 4070, 19, 0, 9, 7, 4099, 0, 3, 6, 4128, 0, 5, 3, 4146, 0, 4154, 0, 4, 1, 3, 2, 2950, 0, 4181, 0, 3, 1];
