var dates = ['01/04/2020', '02/04/2020', '03/04/2020', '04/04/2020', '05/04/2020', '06/04/2020', '07/04/2020', '08/04/2020', '09/04/2020', '10/04/2020', '11/04/2020', '12/04/2020', '13/04/2020', '14/04/2020', '15/04/2020', '16/04/2020', '17/04/2020', '18/04/2020', '19/04/2020', '20/04/2020', '21/04/2020', '22/04/2020', '23/04/2020', '24/04/2020', '25/04/2020', '26/04/2020', '27/04/2020', '28/04/2020', '29/04/2020', '30/04/2020', '01/05/2020', '02/05/2020', '03/05/2020', '04/05/2020', '05/05/2020', '06/05/2020', '07/05/2020', '08/05/2020', '09/05/2020', '10/05/2020', '11/05/2020', '12/05/2020', '13/05/2020', '14/05/2020', '15/05/2020', '16/05/2020', '17/05/2020', '18/05/2020', '19/05/2020', '20/05/2020', '21/05/2020', '22/05/2020', '23/05/2020', '24/05/2020', '25/05/2020', '26/05/2020', '27/05/2020', '28/05/2020', '29/05/2020', '30/05/2020', '31/05/2020', '01/06/2020', '02/06/2020', '03/06/2020', '04/06/2020', '05/06/2020', '06/06/2020', '07/06/2020', '08/06/2020', '09/06/2020', '10/06/2020', '11/06/2020', '12/06/2020', '13/06/2020', '14/06/2020', '15/06/2020', '16/06/2020', '17/06/2020', '18/06/2020', '19/06/2020', '20/06/2020', '21/06/2020', '22/06/2020', '23/06/2020', '24/06/2020', '25/06/2020', '26/06/2020', '27/06/2020', '28/06/2020', '29/06/2020', '30/06/2020', '01/07/2020', '02/07/2020', '03/07/2020', '04/07/2020', '05/07/2020', '06/07/2020', '07/07/2020', '08/07/2020', '09/07/2020', '10/07/2020', '11/07/2020', '12/07/2020', '13/07/2020', '14/07/2020', '15/07/2020', '16/07/2020', '17/07/2020', '18/07/2020', '19/07/2020', '20/07/2020', '21/07/2020', '22/07/2020', '23/07/2020', '24/07/2020', '25/07/2020', '26/07/2020', '27/07/2020', '28/07/2020', '29/07/2020', '30/07/2020', '31/07/2020', '01/08/2020', '02/08/2020', '03/08/2020', '04/08/2020', '05/08/2020', '06/08/2020', '07/08/2020', '08/08/2020', '09/08/2020', '10/08/2020', '11/08/2020', '12/08/2020', '13/08/2020', '14/08/2020', '15/08/2020', '16/08/2020', '17/08/2020', '18/08/2020', '19/08/2020', '20/08/2020', '21/08/2020', '22/08/2020', '23/08/2020', '24/08/2020', '25/08/2020', '26/08/2020', '27/08/2020', '28/08/2020', '29/08/2020', '30/08/2020', '31/08/2020', '01/09/2020', '02/09/2020', '03/09/2020', '04/09/2020', '05/09/2020', '06/09/2020', '07/09/2020', '08/09/2020', '09/09/2020', '10/09/2020', '11/09/2020', '12/09/2020', '13/09/2020', '14/09/2020', '15/09/2020', '16/09/2020', '17/09/2020', '18/09/2020', '19/09/2020', '20/09/2020', '21/09/2020', '22/09/2020', '23/09/2020', '24/09/2020', '25/09/2020', '26/09/2020', '27/09/2020', '28/09/2020', '29/09/2020', '30/09/2020', '01/10/2020', '02/10/2020', '03/10/2020', '04/10/2020', '05/10/2020', '06/10/2020', '07/10/2020', '08/10/2020', '09/10/2020', '10/10/2020', '11/10/2020', '12/10/2020', '13/10/2020', '14/10/2020', '15/10/2020', '16/10/2020', '17/10/2020', '18/10/2020', '19/10/2020', '20/10/2020', '21/10/2020', '22/10/2020', '23/10/2020', '24/10/2020', '25/10/2020', '26/10/2020', '27/10/2020', '28/10/2020', '29/10/2020', '30/10/2020', '31/10/2020', '01/11/2020', '02/11/2020', '03/11/2020', '04/11/2020', '05/11/2020', '06/11/2020', '07/11/2020', '08/11/2020', '09/11/2020', '10/11/2020', '11/11/2020', '12/11/2020', '13/11/2020', '14/11/2020', '15/11/2020', '16/11/2020', '17/11/2020', '18/11/2020', '19/11/2020', '20/11/2020', '21/11/2020', '22/11/2020', '23/11/2020', '24/11/2020', '25/11/2020', '26/11/2020', '27/11/2020', '28/11/2020', '29/11/2020', '30/11/2020', '01/12/2020', '02/12/2020', '03/12/2020', '04/12/2020', '05/12/2020', '06/12/2020', '07/12/2020', '08/12/2020', '09/12/2020', '10/12/2020', '11/12/2020', '12/12/2020', '13/12/2020', '14/12/2020', '15/12/2020', '16/12/2020', '17/12/2020', '18/12/2020', '19/12/2020', '20/12/2020', '21/12/2020', '22/12/2020', '23/12/2020', '24/12/2020', '25/12/2020', '26/12/2020', '27/12/2020', '28/12/2020', '29/12/2020', '30/12/2020', '31/12/2020', '01/01/2021', '02/01/2021', '03/01/2021', '04/01/2021', '07/01/2021', '08/01/2021', '11/01/2021', '18/01/2021', '19/01/2021', '20/01/2021', '22/01/2021', '29/01/2021', '12/02/2021', '18/02/2021', '19/02/2021', '23/02/2021', '26/02/2021', '11/03/2021', '12/03/2021', '15/03/2021', '17/03/2021', '26/03/2021', '31/03/2021', '09/04/2021', '12/04/2021', '14/04/2021', '26/04/2021', '29/04/2021', '21/05/2021', '26/05/2021', '09/07/2021', '12/07/2021', '23/07/2021', '27/07/2021', '30/07/2021', '28/10/2021', '29/10/2021', '13/12/2021', '12/01/2022'];
var df_all_covid = [414, 692, 912, 1180, 1448, 1694, 2086, 2402, 2654, 2912, 3124, 3460, 3720, 3932, 4234, 4442, 4744, 5002, 5206, 5434, 5668, 5922, 6196, 6490, 6742, 6940, 7130, 7426, 7698, 7994, 8238, 8532, 8732, 8982, 9262, 9494, 9756, 10044, 10268, 10504, 10744, 10940, 11184, 11408, 11610, 11860, 12058, 12226, 12454, 12670, 12906, 13090, 13336, 13498, 13678, 13876, 14110, 14370, 14594, 14800, 14950, 15104, 15328, 15616, 15830, 16006, 16208, 16370, 16492, 16674, 16880, 17108, 17304, 17558, 17674, 17810, 18002, 18218, 18420, 18590, 18734, 18870, 19012, 19178, 19388, 19522, 19714, 19876, 19976, 20074, 20284, 20418, 20546, 20678, 20838, 20964, 21064, 21192, 21318, 21468, 21604, 21756, 21838, 21938, 22064, 22162, 22258, 22376, 22484, 22586, 22672, 22764, 22908, 23084, 23206, 23302, 23392, 23478, 23576, 23704, 23810, 23920, 24066, 24136, 24194, 24324, 24472, 24562, 24668, 24778, 24880, 24942, 25036, 25126, 25252, 25330, 25434, 25508, 25584, 25710, 25800, 25878, 25986, 26064, 26116, 26188, 26286, 26424, 26564, 26730, 26834, 26900, 26958, 27096, 27214, 27354, 27492, 27546, 27630, 27722, 27852, 27964, 28062, 28202, 28312, 28422, 28540, 28646, 28776, 28860, 28942, 29010, 29066, 29184, 29270, 29410, 29598, 29732, 29854, 29966, 30108, 30288, 30410, 30568, 30756, 30914, 31098, 31216, 31376, 31546, 31698, 31818, 32024, 32182, 32354, 32550, 32796, 33000, 33210, 33434, 33610, 33730, 33884, 34068, 34282, 34528, 34724, 34880, 35032, 35260, 35426, 35598, 35792, 35952, 36104, 36254, 36462, 36720, 36924, 37092, 37316, 37468, 37596, 37804, 37996, 38196, 38344, 38526, 38664, 38808, 38954, 39114, 39248, 39402, 39576, 39700, 39842, 40004, 40146, 40346, 40522, 40666, 40812, 40936, 41140, 41310, 41410, 41532, 41700, 41824, 41950, 42146, 42298, 42508, 42742, 42946, 43074, 43208, 43386, 43650, 43906, 44146, 44366, 44548, 44734, 44984, 45272, 45578, 45798, 45944, 46138, 46388, 46662, 46994, 47280, 47606, 47776, 47948, 48120, 48264, 48423, 48519, 48612, 48719, 48851, 48967, 49099, 49205, 49291, 49369, 49414, 49483, 49513, 49561, 49601, 49640, 49659, 49676, 49692, 49706, 49726, 49743, 49755, 49770, 49790, 49795, 49812, 49833, 49843, 49855, 49903, 49942, 49969, 50065];
var df_all_nocovid = [1010, 2069, 3217, 4184, 4824, 5631, 6785, 7960, 9114, 10071, 10881, 11550, 12184, 13003, 14097, 15300, 16588, 17757, 18431, 19210, 20546, 21853, 23159, 24491, 25577, 26387, 27269, 28637, 30101, 31535, 32895, 34115, 34929, 35847, 37463, 38979, 40585, 42049, 43065, 44001, 45101, 46731, 48233, 49865, 51377, 52995, 54053, 55111, 56853, 58529, 60257, 61879, 63527, 64525, 65475, 66509, 68157, 69827, 71433, 72975, 74017, 75169, 77005, 78843, 80657, 82365, 83945, 84955, 86027, 88023, 89875, 91769, 93595, 95205, 96243, 97221, 99191, 101111, 103103, 105101, 106981, 108055, 109139, 111347, 113347, 115507, 117381, 119321, 120425, 121485, 123529, 125481, 127575, 129529, 131195, 132135, 133165, 135253, 137245, 139253, 141247, 142913, 143991, 145151, 147253, 149245, 151447, 153433, 155451, 156625, 157749, 159775, 161779, 163961, 165977, 168087, 169305, 170579, 172671, 174655, 176831, 178835, 180735, 181857, 183007, 185221, 187257, 189427, 191509, 193501, 194587, 195781, 198185, 200337, 202631, 204715, 206747, 207963, 209235, 211495, 213745, 216007, 218359, 220475, 221621, 222861, 224997, 227209, 229341, 231489, 233611, 234867, 235941, 237083, 239343, 241519, 243691, 245797, 246945, 248049, 250291, 252459, 254485, 256679, 258813, 259981, 261175, 263407, 265607, 267941, 270041, 272139, 273361, 274411, 276441, 278531, 280557, 282659, 284547, 285591, 286759, 288751, 290935, 293061, 295083, 296989, 297979, 299075, 301215, 303327, 305295, 307289, 309235, 310127, 311119, 313157, 315097, 317115, 319125, 320859, 321861, 322883, 325057, 327161, 329059, 330929, 332845, 333819, 334837, 336595, 338671, 340609, 342463, 344233, 345269, 346199, 348291, 350299, 352285, 354143, 355859, 356743, 357629, 359447, 361419, 363447, 365405, 367051, 367913, 368927, 370883, 372923, 374945, 376945, 378829, 379819, 380643, 382627, 384769, 386869, 388705, 390605, 391565, 392589, 394537, 396549, 398555, 400735, 402651, 403683, 404647, 406645, 408623, 410697, 412489, 414175, 414997, 415851, 417755, 419713, 421615, 423489, 425157, 426069, 426881, 428723, 430449, 432143, 433437, 434167, 434955, 435757, 436719, 438605, 440577, 442083, 442923, 443839, 444685, 444829, 444988, 445084, 445177, 445284, 445416, 445532, 445664, 445770, 445856, 445934, 445979, 446048, 446078, 446126, 446166, 446205, 446224, 446241, 446257, 446271, 446291, 446308, 446320, 446335, 446355, 446360, 446377, 446398, 446408, 446420, 446468, 446507, 446534, 446630];
var betsi_covid = [28, 51, 60, 90, 113, 132, 160, 192, 208, 224, 236, 272, 296, 317, 351, 373, 408, 430, 448, 471, 493, 523, 554, 592, 622, 642, 657, 686, 714, 743, 778, 804, 832, 870, 912, 928, 968, 1020, 1046, 1077, 1121, 1141, 1178, 1212, 1232, 1278, 1301, 1323, 1347, 1379, 1406, 1422, 1455, 1465, 1486, 1498, 1523, 1542, 1572, 1594, 1601, 1612, 1633, 1681, 1706, 1730, 1758, 1780, 1788, 1800, 1830, 1854, 1878, 1912, 1919, 1926, 1942, 1977, 2009, 2028, 2042, 2051, 2065, 2079, 2097, 2105, 2129, 2144, 2152, 2166, 2181, 2193, 2208, 2224, 2250, 2269, 2271, 2279, 2287, 2298, 2305, 2330, 2334, 2349, 2357, 2363, 2378, 2387, 2395, 2407, 2419, 2426, 2439, 2474, 2490, 2501, 2510, 2528, 2536, 2561, 2577, 2594, 2609, 2623, 2636, 2650, 2675, 2681, 2709, 2719, 2747, 2761, 2766, 2772, 2804, 2815, 2817, 2828, 2839, 2854, 2861, 2862, 2879, 2886, 2892, 2901, 2923, 2947, 2964, 3003, 3013, 3016, 3021, 3064, 3079, 3093, 3113, 3113, 3125, 3140, 3155, 3169, 3185, 3201, 3205, 3221, 3239, 3242, 3261, 3264, 3269, 3274, 3277, 3289, 3301, 3319, 3328, 3331, 3334, 3337, 3341, 3345, 3350, 3359, 3368, 3382, 3400, 3410, 3426, 3442, 3465, 3480, 3496, 3519, 3530, 3549, 3580, 3592, 3607, 3620, 3633, 3645, 3650, 3662, 3670, 3676, 3689, 3719, 3726, 3738, 3741, 3745, 3754, 3757, 3762, 3766, 3777, 3811, 3820, 3824, 3831, 3835, 3841, 3849, 3858, 3876, 3884, 3892, 3902, 3909, 3910, 3915, 3918, 3921, 3933, 3937, 3942, 3947, 3949, 3957, 3967, 3973, 3979, 3986, 3995, 4005, 4007, 4023, 4029, 4035, 4040, 4051, 4059, 4064, 4069, 4079, 4086, 4092, 4097, 4104, 4111, 4119, 4125, 4134, 4141, 4152, 4169, 4191, 4202, 4210, 4214, 4219, 4230, 4259, 4278, 4289, 4303, 4318, 4333, 4357, 4381, 4393, 4407, 4433, 4452, 4484, 4510, 4528, 4536, 4544, 4550, 4559, 4563, 4568, 4572, 4577, 4582, 4588, 4593, 4595, 4596, 4598, 4600, 4601, 4603, 4605, 4611, 4617, 4621, 4626, 4629, 4634, 4640, 4652];
var betsi_nocovid = [98, 185, 267, 354, 409, 491, 590, 681, 777, 890, 945, 996, 1051, 1123, 1197, 1315, 1421, 1509, 1573, 1627, 1754, 1855, 2000, 2112, 2230, 2307, 2380, 2544, 2672, 2800, 2930, 3024, 3091, 3176, 3357, 3502, 3680, 3848, 3951, 4027, 4120, 4283, 4410, 4576, 4709, 4864, 4966, 5045, 5245, 5403, 5608, 5780, 5965, 6058, 6136, 6249, 6416, 6624, 6785, 6975, 7101, 7229, 7445, 7597, 7792, 7973, 8107, 8192, 8297, 8517, 8686, 8915, 9088, 9229, 9301, 9375, 9576, 9752, 9948, 10144, 10310, 10413, 10530, 10788, 11007, 11243, 11434, 11617, 11715, 11814, 12040, 12222, 12435, 12599, 12732, 12833, 12918, 13122, 13311, 13524, 13719, 13841, 13941, 14041, 14297, 14476, 14715, 14920, 15120, 15222, 15324, 15487, 15648, 15865, 16067, 16260, 16362, 16472, 16645, 16800, 16991, 17166, 17339, 17444, 17548, 17771, 17965, 18184, 18380, 18572, 18670, 18787, 19027, 19217, 19455, 19619, 19784, 19899, 20038, 20268, 20474, 20672, 20902, 21080, 21203, 21346, 21563, 21749, 21946, 22158, 22363, 22494, 22589, 22719, 22932, 23161, 23392, 23598, 23718, 23857, 24113, 24304, 24501, 24737, 24928, 25010, 25124, 25361, 25597, 25841, 26049, 26269, 26380, 26472, 26563, 26746, 26968, 27210, 27436, 27538, 27678, 27896, 28119, 28333, 28556, 28762, 28856, 28972, 29206, 29431, 29642, 29835, 30020, 30101, 30229, 30448, 30619, 30849, 31078, 31261, 31363, 31482, 31709, 31944, 32165, 32378, 32578, 32663, 32785, 32945, 33144, 33363, 33623, 33830, 33950, 34073, 34304, 34537, 34767, 34989, 35152, 35241, 35319, 35538, 35777, 35997, 36224, 36384, 36469, 36556, 36780, 36971, 37136, 37331, 37521, 37595, 37708, 37981, 38167, 38370, 38593, 38759, 38824, 38904, 39104, 39290, 39474, 39753, 39955, 40070, 40202, 40420, 40649, 40847, 41042, 41191, 41251, 41331, 41536, 41725, 41929, 42143, 42314, 42426, 42517, 42724, 42929, 43114, 43301, 43410, 43471, 43543, 43623, 43852, 44069, 44236, 44312, 44377, 44444, 44468, 44492, 44504, 44518, 44544, 44563, 44595, 44621, 44639, 44647, 44655, 44661, 44670, 44674, 44679, 44683, 44688, 44693, 44699, 44704, 44706, 44707, 44709, 44711, 44712, 44714, 44716, 44722, 44728, 44732, 44737, 44740, 44745, 44751, 44763];
var hywel_covid = [16, 31, 41, 48, 63, 80, 94, 109, 123, 139, 158, 175, 196, 205, 224, 235, 250, 263, 274, 296, 309, 328, 342, 351, 360, 367, 376, 395, 417, 439, 451, 470, 491, 503, 517, 523, 539, 545, 554, 568, 583, 596, 609, 624, 634, 647, 660, 671, 684, 697, 710, 722, 740, 754, 769, 785, 800, 809, 822, 836, 842, 865, 883, 894, 898, 914, 932, 951, 954, 971, 985, 1004, 1019, 1031, 1041, 1050, 1060, 1072, 1082, 1095, 1105, 1116, 1129, 1139, 1154, 1169, 1177, 1200, 1212, 1219, 1226, 1243, 1252, 1262, 1268, 1283, 1294, 1305, 1318, 1335, 1346, 1356, 1356, 1361, 1374, 1386, 1391, 1399, 1409, 1417, 1420, 1425, 1437, 1456, 1466, 1473, 1480, 1483, 1483, 1489, 1492, 1500, 1508, 1509, 1509, 1515, 1524, 1533, 1536, 1543, 1549, 1555, 1556, 1556, 1557, 1566, 1578, 1580, 1587, 1591, 1596, 1607, 1613, 1619, 1625, 1642, 1646, 1657, 1673, 1688, 1694, 1700, 1708, 1709, 1713, 1721, 1726, 1730, 1736, 1743, 1743, 1749, 1752, 1760, 1765, 1771, 1785, 1794, 1800, 1803, 1809, 1815, 1822, 1825, 1829, 1837, 1842, 1851, 1861, 1865, 1873, 1888, 1891, 1901, 1911, 1922, 1933, 1938, 1949, 1955, 1960, 1967, 1977, 1981, 1990, 1997, 2005, 2016, 2018, 2026, 2045, 2052, 2061, 2079, 2096, 2114, 2121, 2129, 2138, 2157, 2172, 2184, 2192, 2204, 2217, 2229, 2243, 2256, 2266, 2274, 2285, 2306, 2315, 2333, 2340, 2348, 2353, 2369, 2377, 2385, 2394, 2402, 2406, 2411, 2420, 2429, 2436, 2444, 2452, 2459, 2472, 2479, 2488, 2495, 2506, 2518, 2527, 2535, 2548, 2553, 2559, 2573, 2583, 2599, 2611, 2625, 2635, 2638, 2649, 2670, 2679, 2694, 2702, 2709, 2721, 2731, 2743, 2752, 2761, 2767, 2775, 2793, 2803, 2815, 2829, 2840, 2848, 2857, 2864, 2872, 2882, 2895, 2904, 2917, 2932, 2944, 2957, 2963, 2964, 2967, 2972, 2974, 2976, 2978, 2981, 2985, 2986, 2992, 2995, 2998, 3002, 3002, 3004, 3005, 3006, 3007, 3009, 3012, 3013, 3013, 3019, 3023, 3026, 3044];
var hywel_nocovid = [63, 130, 185, 224, 247, 274, 338, 410, 490, 547, 596, 647, 674, 706, 788, 885, 974, 1053, 1083, 1116, 1182, 1276, 1329, 1387, 1444, 1512, 1574, 1641, 1713, 1781, 1840, 1919, 1972, 2038, 2117, 2199, 2289, 2371, 2415, 2461, 2513, 2592, 2651, 2722, 2803, 2868, 2939, 3011, 3091, 3170, 3245, 3336, 3425, 3490, 3561, 3620, 3700, 3782, 3852, 3911, 3967, 4013, 4105, 4203, 4290, 4358, 4447, 4502, 4571, 4672, 4777, 4870, 4958, 5049, 5116, 5185, 5282, 5362, 5448, 5534, 5622, 5683, 5754, 5857, 5948, 6050, 6117, 6205, 6270, 6319, 6419, 6498, 6614, 6718, 6795, 6846, 6910, 7003, 7080, 7170, 7270, 7389, 7477, 7563, 7684, 7772, 7897, 8010, 8125, 8223, 8303, 8419, 8522, 8627, 8722, 8833, 8934, 9033, 9154, 9263, 9399, 9521, 9640, 9739, 9830, 9938, 10036, 10154, 10271, 10402, 10489, 10572, 10714, 10832, 10958, 11067, 11163, 11233, 11323, 11426, 11550, 11664, 11769, 11881, 11953, 12036, 12139, 12261, 12350, 12452, 12575, 12682, 12776, 12860, 12955, 13051, 13172, 13282, 13364, 13442, 13553, 13687, 13796, 13898, 14015, 14111, 14199, 14301, 14401, 14506, 14632, 14736, 14823, 14914, 15017, 15124, 15227, 15321, 15425, 15495, 15573, 15669, 15789, 15899, 15986, 16092, 16181, 16261, 16372, 16478, 16602, 16716, 16821, 16890, 16964, 17077, 17188, 17288, 17405, 17494, 17563, 17626, 17726, 17828, 17920, 18025, 18145, 18230, 18315, 18397, 18494, 18561, 18652, 18757, 18846, 18898, 19015, 19121, 19208, 19276, 19372, 19424, 19476, 19544, 19622, 19725, 19829, 19920, 19998, 20077, 20181, 20277, 20375, 20481, 20588, 20675, 20745, 20828, 20944, 21037, 21125, 21218, 21288, 21360, 21445, 21549, 21619, 21710, 21782, 21860, 21931, 22009, 22099, 22203, 22293, 22369, 22435, 22496, 22580, 22670, 22768, 22867, 22960, 23028, 23089, 23177, 23264, 23354, 23424, 23496, 23562, 23625, 23702, 23802, 23901, 23985, 24064, 24128, 24196, 24204, 24214, 24227, 24236, 24249, 24264, 24276, 24289, 24295, 24296, 24299, 24304, 24306, 24308, 24310, 24313, 24317, 24318, 24324, 24327, 24330, 24334, 24334, 24336, 24337, 24338, 24339, 24341, 24344, 24345, 24345, 24351, 24355, 24358, 24376];
var powys_covid = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
var powys_nocovid = [0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, 120, 136, 153, 171, 190, 210, 231, 256, 259, 262, 262, 266, 269, 274, 276, 280, 284, 291, 291, 294, 297, 302, 309, 311, 312, 315, 320, 325, 328, 334, 338, 340, 341, 344, 349, 352, 355, 360, 361, 362, 362, 366, 372, 374, 382, 384, 384, 385, 388, 390, 396, 400, 401, 401, 404, 407, 411, 414, 420, 420, 420, 424, 430, 434, 441, 444, 445, 445, 449, 455, 461, 469, 476, 479, 481, 484, 489, 492, 500, 502, 502, 502, 508, 509, 513, 517, 525, 527, 529, 531, 540, 548, 552, 557, 558, 560, 562, 568, 574, 582, 587, 588, 588, 594, 599, 603, 611, 615, 615, 615, 620, 623, 627, 634, 637, 637, 637, 641, 644, 647, 654, 658, 658, 658, 661, 665, 669, 672, 677, 677, 677, 682, 685, 690, 695, 696, 697, 701, 701, 705, 710, 718, 723, 724, 724, 727, 731, 733, 736, 743, 745, 745, 750, 753, 755, 761, 765, 765, 765, 769, 778, 780, 786, 792, 793, 793, 795, 799, 806, 808, 814, 814, 814, 818, 821, 826, 831, 837, 841, 841, 842, 849, 851, 856, 859, 859, 859, 867, 869, 875, 878, 881, 881, 881, 883, 887, 888, 890, 894, 896, 897, 901, 907, 915, 920, 926, 926, 926, 932, 937, 940, 943, 949, 950, 951, 951, 953, 959, 960, 962, 964, 964, 964, 964, 967, 970, 973, 974, 975, 978, 981, 982, 986, 989, 990, 990, 995, 997, 1002, 1004, 1011, 1011, 1011, 1015, 1020, 1023, 1028, 1032, 1033, 1033, 1037, 1043, 1048, 1049, 1049, 1050, 1050, 1053, 1056, 1062, 1068, 1070, 1075, 1075, 1075, 1075, 1076, 1076, 1076, 1076, 1076, 1076, 1076, 1076, 1076, 1076, 1076, 1076, 1076, 1076, 1076, 1076, 1076, 1076, 1076, 1076, 1076, 1076, 1076, 1076, 1076, 1076, 1076, 1076, 1076, 1076, 1076, 1076, 1076];
var swansea_covid = [20, 45, 68, 92, 107, 124, 151, 187, 219, 238, 249, 282, 287, 303, 314, 326, 352, 367, 379, 388, 413, 425, 443, 466, 479, 503, 516, 532, 554, 566, 575, 598, 613, 631, 643, 659, 671, 683, 708, 714, 727, 734, 742, 756, 765, 778, 788, 805, 819, 828, 845, 851, 863, 875, 887, 897, 915, 929, 942, 958, 967, 973, 982, 998, 1009, 1022, 1028, 1031, 1043, 1049, 1057, 1065, 1074, 1087, 1097, 1105, 1116, 1124, 1129, 1134, 1140, 1143, 1147, 1157, 1164, 1166, 1175, 1177, 1183, 1190, 1198, 1204, 1214, 1222, 1227, 1230, 1234, 1240, 1246, 1251, 1254, 1260, 1262, 1263, 1266, 1270, 1270, 1272, 1278, 1283, 1286, 1295, 1302, 1309, 1314, 1318, 1326, 1327, 1327, 1330, 1332, 1339, 1340, 1341, 1345, 1353, 1355, 1360, 1365, 1369, 1371, 1372, 1378, 1380, 1382, 1383, 1383, 1389, 1392, 1398, 1400, 1404, 1409, 1411, 1412, 1414, 1416, 1418, 1420, 1424, 1431, 1433, 1434, 1436, 1444, 1445, 1448, 1450, 1452, 1453, 1458, 1458, 1459, 1466, 1472, 1472, 1472, 1475, 1478, 1479, 1482, 1482, 1487, 1491, 1495, 1497, 1502, 1505, 1506, 1512, 1518, 1523, 1528, 1533, 1536, 1538, 1542, 1546, 1554, 1559, 1568, 1574, 1584, 1587, 1593, 1602, 1613, 1625, 1631, 1638, 1640, 1647, 1651, 1660, 1667, 1680, 1685, 1691, 1696, 1706, 1716, 1723, 1731, 1742, 1751, 1756, 1764, 1773, 1786, 1796, 1803, 1808, 1813, 1824, 1834, 1844, 1850, 1858, 1866, 1875, 1881, 1885, 1895, 1906, 1913, 1915, 1920, 1926, 1931, 1942, 1948, 1963, 1967, 1973, 1984, 1995, 1997, 2003, 2011, 2024, 2031, 2034, 2042, 2049, 2061, 2069, 2077, 2086, 2099, 2113, 2132, 2140, 2151, 2160, 2167, 2178, 2191, 2204, 2221, 2229, 2238, 2264, 2289, 2303, 2308, 2323, 2329, 2334, 2344, 2361, 2373, 2380, 2385, 2388, 2392, 2398, 2406, 2406, 2411, 2412, 2415, 2419, 2419, 2419, 2422, 2423, 2426, 2428, 2428, 2428, 2428, 2428, 2428, 2428, 2430, 2430, 2430, 2431, 2432, 2432, 2436, 2441, 2444, 2450];
var swansea_nocovid = [66, 109, 148, 218, 252, 290, 329, 356, 405, 426, 468, 482, 506, 540, 605, 650, 704, 749, 776, 818, 871, 926, 975, 1028, 1073, 1102, 1150, 1185, 1240, 1311, 1378, 1408, 1445, 1489, 1569, 1619, 1693, 1758, 1816, 1870, 1928, 2004, 2069, 2141, 2195, 2256, 2308, 2369, 2450, 2529, 2618, 2676, 2737, 2788, 2842, 2893, 2954, 3028, 3105, 3182, 3224, 3299, 3384, 3489, 3551, 3629, 3708, 3773, 3816, 3901, 4004, 4097, 4195, 4260, 4307, 4357, 4447, 4544, 4656, 4749, 4835, 4907, 4972, 5075, 5150, 5250, 5336, 5418, 5467, 5523, 5606, 5699, 5792, 5870, 5933, 5976, 6024, 6114, 6192, 6244, 6309, 6372, 6423, 6491, 6542, 6611, 6697, 6735, 6813, 6865, 6924, 7002, 7095, 7178, 7251, 7344, 7411, 7470, 7529, 7589, 7664, 7733, 7770, 7790, 7854, 7948, 8026, 8087, 8161, 8233, 8269, 8326, 8438, 8533, 8596, 8648, 8710, 8772, 8823, 8906, 8956, 9031, 9110, 9177, 9226, 9270, 9312, 9413, 9482, 9559, 9638, 9690, 9734, 9771, 9841, 9893, 9947, 10003, 10034, 10067, 10116, 10190, 10248, 10313, 10395, 10445, 10489, 10562, 10613, 10690, 10768, 10834, 10886, 10911, 10970, 11025, 11073, 11131, 11182, 11215, 11249, 11315, 11379, 11443, 11510, 11597, 11636, 11685, 11745, 11821, 11877, 11944, 12046, 12066, 12095, 12151, 12225, 12286, 12344, 12412, 12457, 12506, 12591, 12658, 12708, 12753, 12805, 12844, 12891, 12931, 13000, 13064, 13107, 13164, 13214, 13243, 13297, 13353, 13423, 13487, 13547, 13578, 13610, 13648, 13714, 13795, 13844, 13884, 13916, 13958, 14020, 14095, 14166, 14250, 14302, 14330, 14366, 14417, 14498, 14576, 14592, 14664, 14720, 14793, 14845, 14895, 14984, 15077, 15165, 15218, 15254, 15326, 15377, 15436, 15482, 15557, 15608, 15648, 15690, 15745, 15828, 15866, 15907, 15964, 15994, 16047, 16102, 16138, 16181, 16207, 16245, 16281, 16335, 16408, 16476, 16564, 16604, 16648, 16682, 16699, 16711, 16718, 16723, 16726, 16730, 16736, 16744, 16744, 16749, 16750, 16753, 16757, 16757, 16757, 16760, 16761, 16764, 16766, 16766, 16766, 16766, 16766, 16766, 16766, 16768, 16768, 16768, 16769, 16770, 16770, 16774, 16779, 16782, 16788];
var cardiff_covid = [16, 36, 49, 79, 95, 109, 131, 157, 178, 206, 224, 255, 278, 299, 318, 341, 359, 387, 408, 424, 446, 469, 492, 522, 544, 559, 578, 604, 628, 662, 680, 703, 713, 736, 758, 783, 807, 836, 864, 886, 900, 920, 947, 961, 979, 994, 1014, 1025, 1046, 1070, 1094, 1118, 1133, 1145, 1160, 1185, 1204, 1224, 1241, 1254, 1275, 1290, 1316, 1340, 1358, 1376, 1394, 1401, 1416, 1431, 1445, 1466, 1487, 1525, 1530, 1551, 1563, 1575, 1594, 1617, 1633, 1649, 1655, 1681, 1710, 1728, 1753, 1772, 1782, 1785, 1819, 1829, 1842, 1853, 1865, 1872, 1880, 1897, 1906, 1921, 1936, 1948, 1953, 1958, 1973, 1984, 1991, 2003, 2016, 2021, 2030, 2038, 2047, 2056, 2071, 2081, 2083, 2089, 2102, 2117, 2130, 2138, 2151, 2159, 2164, 2187, 2206, 2221, 2228, 2247, 2250, 2254, 2262, 2286, 2300, 2311, 2325, 2331, 2335, 2344, 2357, 2369, 2379, 2396, 2401, 2404, 2413, 2438, 2461, 2474, 2490, 2497, 2502, 2505, 2514, 2531, 2544, 2551, 2564, 2571, 2588, 2602, 2609, 2624, 2640, 2644, 2648, 2662, 2678, 2692, 2705, 2714, 2717, 2733, 2744, 2760, 2773, 2791, 2807, 2822, 2833, 2845, 2858, 2883, 2890, 2899, 2907, 2919, 2932, 2951, 2959, 2967, 2980, 2988, 2999, 3015, 3037, 3058, 3083, 3101, 3117, 3123, 3138, 3153, 3185, 3210, 3224, 3227, 3245, 3260, 3271, 3285, 3302, 3322, 3330, 3339, 3368, 3390, 3416, 3441, 3461, 3471, 3481, 3507, 3529, 3558, 3576, 3589, 3596, 3600, 3622, 3642, 3653, 3670, 3695, 3709, 3719, 3742, 3755, 3778, 3793, 3811, 3826, 3836, 3858, 3877, 3894, 3905, 3925, 3935, 3950, 3979, 3996, 4030, 4063, 4086, 4104, 4124, 4139, 4175, 4210, 4236, 4262, 4279, 4298, 4331, 4367, 4405, 4430, 4448, 4471, 4494, 4525, 4564, 4602, 4643, 4662, 4680, 4701, 4734, 4777, 4798, 4827, 4848, 4881, 4910, 4942, 4979, 5006, 5025, 5034, 5060, 5064, 5068, 5073, 5076, 5079, 5081, 5082, 5087, 5097, 5102, 5108, 5112, 5124, 5126, 5130, 5136, 5137, 5141, 5161, 5175, 5183, 5211];
var cardiff_nocovid = [177, 367, 536, 675, 761, 857, 1010, 1194, 1334, 1451, 1557, 1662, 1760, 1895, 2045, 2194, 2383, 2525, 2612, 2721, 2877, 3050, 3216, 3396, 3512, 3611, 3719, 3889, 4083, 4258, 4399, 4550, 4644, 4755, 4944, 5154, 5339, 5496, 5614, 5741, 5885, 6097, 6288, 6483, 6664, 6868, 6983, 7102, 7295, 7502, 7686, 7873, 8061, 8162, 8256, 8365, 8561, 8738, 8922, 9096, 9197, 9307, 9485, 9675, 9892, 10065, 10239, 10351, 10462, 10689, 10914, 11123, 11333, 11525, 11640, 11731, 11971, 12209, 12405, 12646, 12852, 12953, 13067, 13297, 13545, 13774, 13995, 14209, 14321, 14449, 14658, 14916, 15180, 15440, 15663, 15762, 15882, 16112, 16374, 16640, 16892, 17070, 17154, 17266, 17498, 17758, 18007, 18263, 18474, 18598, 18724, 18974, 19217, 19471, 19712, 19949, 20066, 20194, 20448, 20698, 20948, 21207, 21427, 21546, 21654, 21907, 22184, 22457, 22698, 22918, 23011, 23113, 23369, 23628, 23913, 24184, 24430, 24527, 24651, 24894, 25146, 25444, 25723, 25957, 26033, 26140, 26386, 26627, 26895, 27152, 27375, 27483, 27576, 27681, 27939, 28218, 28475, 28722, 28801, 28898, 29156, 29437, 29654, 29919, 30166, 30268, 30370, 30635, 30912, 31187, 31420, 31665, 31792, 31892, 32169, 32450, 32713, 32940, 33143, 33241, 33361, 33578, 33823, 34075, 34341, 34539, 34654, 34769, 35041, 35327, 35605, 35847, 36042, 36143, 36247, 36483, 36717, 36986, 37224, 37406, 37507, 37619, 37891, 38176, 38435, 38668, 38897, 39015, 39113, 39347, 39622, 39902, 40117, 40318, 40419, 40527, 40818, 41116, 41383, 41655, 41890, 41985, 42095, 42347, 42654, 42974, 43254, 43491, 43573, 43685, 43953, 44265, 44568, 44863, 45096, 45182, 45276, 45533, 45827, 46144, 46394, 46633, 46732, 46831, 47072, 47329, 47640, 47896, 48134, 48226, 48309, 48569, 48846, 49145, 49383, 49584, 49659, 49755, 50019, 50306, 50531, 50806, 51023, 51101, 51176, 51413, 51626, 51852, 51990, 52037, 52120, 52215, 52313, 52512, 52733, 52874, 52950, 53029, 53123, 53156, 53199, 53220, 53249, 53270, 53303, 53332, 53364, 53401, 53428, 53447, 53456, 53482, 53486, 53490, 53495, 53498, 53501, 53503, 53504, 53509, 53519, 53524, 53530, 53534, 53546, 53548, 53552, 53558, 53559, 53563, 53583, 53597, 53605, 53633];
var cwmtaf_covid = [53, 80, 103, 133, 168, 197, 238, 263, 288, 311, 324, 355, 383, 406, 438, 454, 480, 502, 519, 538, 552, 572, 594, 618, 641, 655, 674, 696, 719, 745, 768, 801, 812, 830, 861, 893, 915, 944, 958, 990, 1010, 1029, 1041, 1064, 1090, 1108, 1131, 1143, 1170, 1184, 1211, 1235, 1261, 1283, 1302, 1326, 1351, 1405, 1434, 1462, 1484, 1495, 1515, 1542, 1572, 1585, 1603, 1621, 1637, 1658, 1682, 1703, 1719, 1739, 1748, 1764, 1796, 1824, 1845, 1859, 1869, 1887, 1912, 1929, 1948, 1958, 1973, 1985, 1993, 2004, 2033, 2044, 2055, 2068, 2080, 2093, 2114, 2123, 2142, 2165, 2188, 2200, 2219, 2231, 2248, 2255, 2267, 2282, 2288, 2296, 2306, 2320, 2343, 2357, 2364, 2375, 2386, 2393, 2408, 2415, 2420, 2425, 2445, 2453, 2457, 2464, 2473, 2477, 2481, 2486, 2491, 2497, 2516, 2523, 2523, 2523, 2535, 2542, 2544, 2560, 2573, 2577, 2586, 2592, 2596, 2600, 2607, 2613, 2618, 2624, 2626, 2629, 2633, 2642, 2654, 2668, 2685, 2690, 2694, 2702, 2714, 2726, 2741, 2759, 2770, 2781, 2796, 2814, 2828, 2842, 2846, 2856, 2866, 2880, 2887, 2908, 2958, 2978, 2991, 3006, 3027, 3058, 3073, 3086, 3103, 3125, 3133, 3135, 3137, 3158, 3161, 3172, 3187, 3197, 3205, 3221, 3245, 3271, 3298, 3322, 3336, 3345, 3364, 3387, 3412, 3450, 3480, 3491, 3505, 3536, 3556, 3571, 3598, 3611, 3625, 3641, 3654, 3672, 3694, 3709, 3726, 3742, 3767, 3785, 3804, 3819, 3839, 3866, 3880, 3907, 3924, 3941, 3961, 3979, 3996, 4013, 4045, 4063, 4086, 4106, 4125, 4136, 4148, 4163, 4187, 4205, 4214, 4223, 4233, 4249, 4263, 4280, 4290, 4303, 4329, 4355, 4369, 4375, 4397, 4421, 4441, 4472, 4506, 4531, 4558, 4589, 4624, 4667, 4682, 4697, 4720, 4750, 4783, 4820, 4859, 4906, 4929, 4947, 4963, 4996, 5030, 5051, 5061, 5085, 5118, 5137, 5164, 5177, 5181, 5185, 5191, 5196, 5196, 5196, 5200, 5200, 5200, 5200, 5200, 5202, 5203, 5204, 5204, 5204, 5204, 5204, 5206, 5209, 5210, 5212, 5222, 5229, 5231, 5247];
var cwmtaf_nocovid = [40, 117, 192, 244, 264, 324, 372, 427, 490, 547, 599, 634, 660, 693, 736, 788, 834, 891, 931, 982, 1047, 1105, 1159, 1227, 1282, 1313, 1354, 1434, 1507, 1579, 1647, 1715, 1757, 1798, 1879, 1955, 2035, 2092, 2145, 2203, 2256, 2322, 2412, 2506, 2572, 2651, 2707, 2766, 2839, 2928, 2997, 3073, 3149, 3204, 3261, 3310, 3388, 3455, 3542, 3603, 3670, 3730, 3805, 3894, 3968, 4060, 4131, 4188, 4249, 4350, 4423, 4498, 4581, 4651, 4711, 4778, 4863, 4942, 5042, 5149, 5256, 5327, 5372, 5482, 5578, 5690, 5751, 5855, 5919, 5982, 6086, 6185, 6293, 6389, 6473, 6529, 6587, 6703, 6801, 6901, 6992, 7081, 7165, 7237, 7358, 7479, 7598, 7702, 7821, 7896, 7973, 8098, 8209, 8321, 8452, 8564, 8627, 8703, 8826, 8938, 9072, 9144, 9259, 9340, 9415, 9531, 9628, 9751, 9878, 9985, 10065, 10139, 10257, 10381, 10510, 10654, 10786, 10910, 11008, 11145, 11291, 11420, 11560, 11725, 11822, 11900, 12022, 12146, 12290, 12402, 12511, 12596, 12665, 12738, 12897, 13012, 13103, 13228, 13330, 13392, 13508, 13631, 13734, 13858, 13986, 14095, 14184, 14328, 14440, 14558, 14677, 14782, 14866, 14932, 15065, 15178, 15246, 15354, 15445, 15533, 15603, 15684, 15792, 15908, 15997, 16064, 16113, 16164, 16214, 16279, 16314, 16386, 16470, 16528, 16572, 16635, 16691, 16746, 16831, 16918, 16973, 17009, 17096, 17172, 17233, 17296, 17350, 17394, 17452, 17545, 17627, 17704, 17765, 17828, 17885, 17929, 17995, 18055, 18105, 18171, 18247, 18309, 18352, 18414, 18486, 18548, 18628, 18680, 18724, 18779, 18847, 18914, 18992, 19064, 19138, 19183, 19216, 19296, 19378, 19454, 19538, 19622, 19682, 19715, 19785, 19860, 19933, 20005, 20089, 20150, 20203, 20284, 20353, 20447, 20511, 20606, 20657, 20705, 20785, 20866, 20935, 20999, 21054, 21094, 21126, 21185, 21238, 21319, 21366, 21404, 21439, 21471, 21508, 21590, 21670, 21706, 21744, 21810, 21852, 21885, 21919, 21940, 21950, 21974, 22007, 22026, 22053, 22066, 22070, 22074, 22080, 22085, 22085, 22085, 22089, 22089, 22089, 22089, 22089, 22091, 22092, 22093, 22093, 22093, 22093, 22093, 22095, 22098, 22099, 22101, 22111, 22118, 22120, 22136];
var aneurin_covid = [74, 103, 134, 147, 177, 204, 267, 291, 309, 336, 369, 389, 418, 434, 470, 490, 521, 550, 573, 598, 619, 642, 671, 693, 721, 740, 760, 796, 813, 838, 863, 886, 901, 917, 936, 957, 974, 990, 1000, 1013, 1027, 1046, 1070, 1082, 1099, 1119, 1129, 1140, 1155, 1171, 1181, 1191, 1210, 1221, 1229, 1241, 1256, 1270, 1280, 1290, 1298, 1309, 1326, 1344, 1363, 1367, 1380, 1392, 1399, 1419, 1432, 1452, 1465, 1474, 1491, 1498, 1513, 1526, 1540, 1551, 1567, 1578, 1587, 1593, 1610, 1624, 1639, 1649, 1655, 1662, 1674, 1685, 1691, 1699, 1717, 1723, 1727, 1740, 1748, 1752, 1761, 1772, 1783, 1795, 1802, 1811, 1820, 1833, 1844, 1857, 1863, 1866, 1874, 1878, 1886, 1891, 1899, 1907, 1920, 1928, 1942, 1952, 1968, 1971, 1974, 1981, 1991, 1997, 2003, 2013, 2020, 2020, 2028, 2034, 2048, 2055, 2067, 2072, 2083, 2096, 2101, 2108, 2115, 2116, 2120, 2121, 2126, 2127, 2134, 2140, 2151, 2163, 2169, 2180, 2191, 2207, 2218, 2227, 2232, 2240, 2256, 2266, 2273, 2279, 2292, 2310, 2318, 2324, 2331, 2338, 2348, 2352, 2352, 2362, 2367, 2372, 2384, 2398, 2416, 2429, 2450, 2473, 2493, 2510, 2558, 2579, 2622, 2648, 2678, 2696, 2724, 2737, 2776, 2807, 2848, 2879, 2906, 2926, 2956, 2998, 3022, 3041, 3066, 3081, 3099, 3122, 3151, 3171, 3194, 3221, 3245, 3279, 3307, 3328, 3355, 3384, 3413, 3446, 3468, 3489, 3539, 3559, 3568, 3591, 3620, 3640, 3657, 3676, 3698, 3715, 3733, 3759, 3778, 3801, 3818, 3834, 3846, 3867, 3887, 3918, 3943, 3958, 3985, 4002, 4027, 4042, 4053, 4064, 4091, 4103, 4119, 4143, 4166, 4193, 4222, 4243, 4250, 4273, 4296, 4326, 4364, 4396, 4421, 4445, 4466, 4495, 4525, 4552, 4585, 4603, 4633, 4656, 4683, 4717, 4745, 4783, 4798, 4819, 4836, 4865, 4901, 4922, 4948, 4968, 4996, 5014, 5040, 5072, 5113, 5156, 5172, 5195, 5215, 5252, 5273, 5299, 5306, 5307, 5314, 5316, 5320, 5329, 5331, 5340, 5343, 5343, 5346, 5348, 5350, 5351, 5356, 5360, 5365, 5381];
var aneurin_nocovid = [55, 116, 268, 358, 451, 549, 716, 867, 1003, 1108, 1198, 1270, 1348, 1443, 1562, 1685, 1832, 1990, 2068, 2154, 2337, 2493, 2658, 2844, 2988, 3081, 3178, 3342, 3536, 3733, 3933, 4110, 4213, 4321, 4508, 4692, 4877, 5064, 5188, 5290, 5430, 5642, 5848, 6055, 6279, 6516, 6644, 6780, 7014, 7231, 7463, 7680, 7895, 8025, 8142, 8276, 8505, 8718, 8933, 9125, 9251, 9405, 9669, 9941, 10200, 10442, 10677, 10801, 10948, 11203, 11442, 11681, 11929, 12161, 12317, 12453, 12712, 12991, 13288, 13546, 13823, 13949, 14079, 14369, 14631, 14918, 15211, 15491, 15651, 15783, 16073, 16324, 16572, 16834, 17076, 17196, 17336, 17641, 17931, 18207, 18496, 18745, 18873, 19013, 19276, 19545, 19816, 20089, 20367, 20500, 20616, 20895, 21178, 21488, 21745, 22044, 22201, 22366, 22669, 22964, 23255, 23543, 23815, 23947, 24078, 24380, 24645, 24930, 25203, 25469, 25618, 25780, 26101, 26382, 26680, 26962, 27264, 27404, 27538, 27863, 28201, 28508, 28842, 29131, 29287, 29452, 29778, 30099, 30388, 30692, 31007, 31150, 31284, 31425, 31749, 32055, 32371, 32670, 32824, 32962, 33286, 33558, 33880, 34175, 34464, 34606, 34764, 35049, 35367, 35706, 35984, 36289, 36434, 36583, 36927, 37215, 37513, 37821, 38081, 38209, 38351, 38660, 38982, 39279, 39549, 39825, 39933, 40069, 40398, 40688, 40957, 41253, 41545, 41658, 41775, 42101, 42409, 42693, 42958, 43204, 43333, 43464, 43766, 44044, 44296, 44562, 44850, 44966, 45065, 45328, 45631, 45888, 46136, 46375, 46474, 46582, 46857, 47091, 47363, 47588, 47801, 47914, 48042, 48302, 48516, 48738, 48970, 49198, 49306, 49437, 49683, 49953, 50236, 50480, 50754, 50927, 50993, 51237, 51543, 51817, 52070, 52363, 52491, 52642, 52958, 53281, 53552, 53843, 54113, 54229, 54336, 54610, 54877, 55154, 55409, 55643, 55745, 55847, 56113, 56382, 56645, 56880, 57128, 57227, 57343, 57611, 57848, 58067, 58225, 58298, 58408, 58511, 58643, 58892, 59177, 59408, 59517, 59650, 59768, 59797, 59833, 59854, 59880, 59900, 59928, 59946, 59972, 60004, 60045, 60088, 60104, 60127, 60147, 60184, 60205, 60231, 60238, 60239, 60246, 60248, 60252, 60261, 60263, 60272, 60275, 60275, 60278, 60280, 60282, 60283, 60288, 60292, 60297, 60313];
