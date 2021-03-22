var dates = ['31/08/2020', '01/09/2020', '04/09/2020', '06/09/2020', '09/09/2020', '14/09/2020', '23/09/2020', '24/09/2020', '28/09/2020', '30/09/2020', '01/10/2020', '02/10/2020', '03/10/2020', '04/10/2020', '05/10/2020', '07/10/2020', '08/10/2020', '09/10/2020', '10/10/2020', '11/10/2020', '12/10/2020', '13/10/2020', '14/10/2020', '15/10/2020', '16/10/2020', '17/10/2020', '18/10/2020', '19/10/2020', '20/10/2020', '21/10/2020', '22/10/2020', '23/10/2020', '24/10/2020', '25/10/2020', '26/10/2020', '27/10/2020', '28/10/2020', '29/10/2020', '30/10/2020', '01/11/2020', '02/11/2020', '03/11/2020', '04/11/2020', '05/11/2020', '06/11/2020', '07/11/2020', '08/11/2020', '09/11/2020', '10/11/2020', '11/11/2020', '12/11/2020', '13/11/2020', '14/11/2020', '15/11/2020', '16/11/2020', '17/11/2020', '19/11/2020', '20/11/2020', '21/11/2020', '22/11/2020', '23/11/2020', '24/11/2020', '25/11/2020', '26/11/2020', '27/11/2020', '28/11/2020', '29/11/2020', '01/12/2020', '02/12/2020', '03/12/2020', '04/12/2020', '05/12/2020', '06/12/2020', '07/12/2020', '08/12/2020', '09/12/2020', '11/12/2020', '14/12/2020', '15/12/2020', '16/12/2020', '17/12/2020', '18/12/2020', '19/12/2020', '20/12/2020', '21/12/2020', '22/12/2020', '23/12/2020', '24/12/2020', '26/12/2020', '27/12/2020', '28/12/2020', '29/12/2020', '30/12/2020', '31/12/2020', '02/01/2021', '04/01/2021', '05/01/2021', '06/01/2021', '07/01/2021', '08/01/2021', '09/01/2021', '14/01/2021', '15/01/2021', '17/01/2021', '18/01/2021', '23/01/2021', '25/01/2021', '26/01/2021', '27/01/2021', '28/01/2021', '29/01/2021', '30/01/2021', '31/01/2021', '01/02/2021', '02/02/2021', '03/02/2021', '04/02/2021', '06/02/2021', '07/02/2021', '08/02/2021', '10/02/2021', '12/02/2021', '13/02/2021', '14/02/2021', '16/02/2021', '17/02/2021', '18/02/2021', '19/02/2021', '21/02/2021', '22/02/2021', '23/02/2021', '25/02/2021', '26/02/2021', '27/02/2021', '28/02/2021', '02/03/2021', '03/03/2021', '04/03/2021', '05/03/2021', '06/03/2021', '08/03/2021', '09/03/2021', '11/03/2021', '13/03/2021', '14/03/2021', '15/03/2021', '16/03/2021', '17/03/2021', '19/03/2021'];
var df_0_9_f = [73, 75, 81, 83, 94, 122, 156, 162, 184, 191, 199, 205, 213, 224, 229, 253, 259, 269, 276, 277, 286, 301, 311, 328, 341, 356, 356, 392, 410, 435, 441, 469, 491, 508, 532, 550, 569, 597, 621, 653, 671, 692, 716, 744, 759, 766, 784, 786, 803, 815, 827, 843, 870, 897, 909, 922, 960, 975, 1000, 1021, 1033, 1066, 1099, 1133, 1166, 1182, 1217, 1260, 1297, 1341, 1390, 1453, 1512, 1529, 1671, 1717, 1837, 1870, 1874, 2198, 2259, 2334, 2387, 2455, 2525, 2601, 2506, 2558, 2628, 2668, 2716, 2766, 2802, 2856, 2927, 2996, 3042, 3063, 3118, 3156, 3185, 3336, 3361, 3412, 3427, 3541, 3557, 3564, 3581, 3597, 3615, 3629, 3641, 3661, 3665, 3673, 7369, 3701, 3710, 7448, 7495, 3762, 3773, 7583, 3802, 3807, 3820, 7661, 7708, 3867, 3884, 3888, 7794, 3906, 3909, 3915, 7865, 3944, 3946, 3953, 7932, 3985, 8010, 4026, 4039, 4048, 8115, 4079, 8199];
var df_0_9_m = [79, 81, 86, 88, 99, 132, 174, 177, 216, 222, 226, 232, 236, 244, 247, 275, 283, 299, 308, 314, 326, 340, 352, 366, 383, 398, 398, 424, 449, 472, 484, 511, 527, 543, 573, 599, 625, 661, 684, 721, 738, 757, 785, 802, 816, 831, 856, 860, 884, 895, 909, 926, 956, 970, 986, 997, 1049, 1071, 1099, 1118, 1124, 1147, 1185, 1205, 1252, 1278, 1320, 1362, 1395, 1445, 1507, 1551, 1614, 1641, 1799, 1846, 1976, 2016, 2025, 2377, 2440, 2521, 2587, 2663, 2731, 2814, 2718, 2753, 2839, 2882, 2939, 2985, 3011, 3060, 3127, 3195, 3228, 3261, 3316, 3359, 3387, 3557, 3574, 3629, 3660, 3788, 3802, 3813, 3822, 3834, 3854, 3869, 3886, 3900, 3911, 3925, 7898, 3979, 4003, 8030, 8082, 4061, 4070, 8172, 4099, 4106, 4129, 8284, 8322, 4171, 4179, 4184, 8387, 4204, 4207, 4222, 8474, 4251, 4258, 4263, 8553, 4290, 8607, 4327, 4343, 4350, 8747, 4394, 8827];
var df_10_19_f = [195, 197, 213, 224, 246, 305, 386, 403, 512, 552, 592, 644, 682, 739, 768, 874, 943, 995, 1045, 1094, 1170, 1309, 1413, 1515, 1597, 1708, 1708, 1921, 2033, 2134, 2193, 2292, 2362, 2441, 2550, 2664, 2746, 2836, 2909, 3020, 3087, 3153, 3230, 3299, 3348, 3396, 3451, 3466, 3505, 3544, 3570, 3617, 3675, 3725, 3758, 3782, 3885, 3957, 4003, 4045, 4072, 4107, 4184, 4258, 4346, 4385, 4469, 4538, 4618, 4694, 4795, 4935, 5061, 5098, 5903, 6028, 6295, 6374, 6396, 7037, 7192, 7321, 7419, 7533, 7677, 7813, 7003, 7092, 7242, 7329, 7437, 7512, 7592, 7717, 7895, 8094, 8199, 8274, 8403, 8527, 8604, 8934, 8982, 9089, 9152, 9376, 9394, 9411, 9433, 9455, 9490, 9507, 9536, 9570, 9583, 9607, 19266, 9665, 9688, 19425, 19499, 9775, 9791, 19637, 9832, 9845, 9872, 19780, 19845, 9944, 9956, 9966, 19968, 10003, 10012, 10024, 20072, 10051, 10062, 10068, 20193, 10112, 20263, 10152, 10166, 10175, 20378, 10206, 20456];
var df_10_19_m = [186, 199, 212, 224, 241, 299, 394, 413, 506, 528, 569, 613, 644, 688, 719, 803, 874, 930, 968, 1018, 1095, 1201, 1271, 1352, 1416, 1493, 1493, 1640, 1723, 1810, 1859, 1951, 2006, 2067, 2149, 2218, 2289, 2380, 2448, 2549, 2600, 2652, 2715, 2773, 2807, 2834, 2868, 2887, 2942, 2968, 2992, 3023, 3066, 3100, 3122, 3142, 3252, 3296, 3328, 3357, 3385, 3442, 3511, 3556, 3634, 3675, 3762, 3861, 3951, 4029, 4111, 4208, 4338, 4381, 4841, 4955, 5246, 5326, 5337, 5915, 6038, 6172, 6269, 6370, 6490, 6603, 6229, 6306, 6439, 6499, 6587, 6663, 6723, 6808, 6949, 7117, 7200, 7248, 7344, 7427, 7495, 7789, 7818, 7895, 7942, 8134, 8155, 8172, 8194, 8210, 8234, 8246, 8275, 8307, 8325, 8341, 16724, 8382, 8398, 16827, 16895, 8478, 8491, 17040, 8539, 8547, 8560, 17148, 17174, 8603, 8618, 8629, 17275, 8648, 8655, 8667, 17364, 8693, 8699, 8706, 17458, 8745, 17518, 8770, 8794, 8799, 17628, 8832, 17704];
var df_20_29_f = [1651, 1665, 1698, 1712, 1756, 1855, 2087, 2119, 2293, 2322, 2366, 2434, 2474, 2553, 2600, 2765, 2863, 2928, 2980, 3030, 3125, 3242, 3318, 3410, 3481, 3591, 3591, 3789, 3896, 4016, 4083, 4241, 4377, 4512, 4671, 4812, 4953, 5146, 5269, 5558, 5682, 5806, 5924, 6067, 6178, 6272, 6364, 6408, 6515, 6604, 6679, 6774, 6916, 7018, 7089, 7160, 7382, 7497, 7576, 7675, 7739, 7841, 7981, 8112, 8243, 8337, 8470, 8595, 8729, 8886, 9037, 9216, 9425, 9501, 10911, 11122, 11654, 11848, 11893, 13153, 13467, 13793, 14049, 14314, 14625, 14972, 13526, 13740, 14161, 14373, 14649, 14906, 15092, 15365, 15779, 16192, 16405, 16617, 16890, 17127, 17322, 18179, 18296, 18518, 18620, 19224, 19297, 19345, 19424, 19476, 19560, 19617, 19670, 19730, 19776, 19833, 39800, 19984, 20045, 40200, 40353, 20245, 20284, 40659, 20371, 20396, 20456, 41024, 41161, 20607, 20632, 20660, 41398, 20733, 20749, 20763, 41601, 20832, 20837, 20861, 41756, 20911, 41869, 20963, 20990, 21002, 42060, 21066, 42193];
var df_20_29_m = [750, 765, 794, 808, 847, 942, 1179, 1207, 1382, 1445, 1494, 1564, 1610, 1691, 1744, 1883, 1972, 2050, 2100, 2146, 2227, 2315, 2372, 2447, 2512, 2614, 2614, 2785, 2884, 3013, 3088, 3240, 3346, 3459, 3571, 3698, 3841, 4041, 4153, 4403, 4500, 4602, 4701, 4832, 4910, 4962, 5017, 5064, 5138, 5179, 5239, 5317, 5423, 5505, 5552, 5596, 5801, 5897, 5959, 6028, 6077, 6150, 6243, 6336, 6439, 6518, 6615, 6724, 6862, 6992, 7116, 7270, 7453, 7500, 7985, 8168, 8549, 8685, 8706, 9763, 9972, 10236, 10418, 10637, 10865, 11109, 10891, 11093, 11468, 11657, 11857, 12057, 12202, 12429, 12776, 13129, 13329, 13472, 13722, 13958, 14107, 14791, 14881, 15100, 15188, 15658, 15705, 15749, 15809, 15850, 15904, 15964, 16022, 16069, 16098, 16151, 32436, 16287, 16342, 32777, 32884, 16481, 16516, 33106, 16592, 16608, 16654, 33406, 33530, 16790, 16812, 16839, 33741, 16903, 16912, 16925, 33908, 16986, 16998, 17007, 34054, 17052, 34141, 17086, 17100, 17107, 34279, 17172, 34388];
var df_30_39_f = [1634, 1645, 1667, 1678, 1726, 1796, 1969, 1999, 2143, 2168, 2206, 2255, 2302, 2344, 2373, 2481, 2530, 2569, 2603, 2636, 2695, 2766, 2832, 2891, 2937, 3020, 3020, 3128, 3208, 3299, 3355, 3444, 3535, 3635, 3747, 3881, 4004, 4161, 4291, 4499, 4604, 4727, 4855, 4971, 5044, 5116, 5203, 5238, 5325, 5391, 5471, 5546, 5686, 5772, 5833, 5878, 6052, 6145, 6227, 6312, 6364, 6443, 6585, 6689, 6812, 6910, 7050, 7198, 7330, 7445, 7591, 7758, 7941, 8024, 8278, 8441, 8844, 9002, 9047, 10174, 10407, 10693, 10928, 11183, 11423, 11725, 11830, 12039, 12448, 12666, 12916, 13140, 13307, 13552, 13934, 14294, 14513, 14656, 14874, 15079, 15217, 15955, 16047, 16261, 16365, 16901, 16944, 17003, 17065, 17104, 17169, 17218, 17274, 17327, 17356, 17386, 34906, 17525, 17589, 35263, 35412, 17770, 17808, 35682, 17895, 17931, 17989, 36062, 36183, 18131, 18154, 18191, 36432, 18245, 18262, 18278, 36648, 18353, 18368, 18388, 36828, 18444, 36943, 18507, 18526, 18535, 37115, 18587, 37231];
var df_30_39_m = [883, 888, 905, 913, 955, 1035, 1215, 1242, 1382, 1410, 1447, 1487, 1527, 1556, 1580, 1676, 1734, 1771, 1801, 1829, 1886, 1937, 1972, 2019, 2065, 2114, 2114, 2219, 2267, 2338, 2385, 2508, 2592, 2706, 2777, 2880, 2976, 3104, 3189, 3333, 3410, 3509, 3600, 3683, 3749, 3804, 3858, 3875, 3934, 3983, 4038, 4107, 4190, 4244, 4295, 4348, 4485, 4573, 4625, 4676, 4727, 4797, 4889, 4972, 5079, 5155, 5234, 5355, 5467, 5586, 5713, 5849, 5993, 6051, 6143, 6284, 6633, 6760, 6784, 7736, 7946, 8200, 8362, 8548, 8741, 9003, 9304, 9472, 9803, 9983, 10195, 10373, 10505, 10720, 11021, 11306, 11483, 11622, 11792, 11942, 12052, 12612, 12691, 12897, 12986, 13439, 13481, 13532, 13581, 13618, 13672, 13724, 13781, 13834, 13882, 13927, 27958, 14041, 14095, 28282, 28434, 14268, 14304, 28685, 14381, 14408, 14449, 28978, 29082, 14576, 14601, 14629, 29315, 14685, 14696, 14718, 29488, 14765, 14776, 14788, 29625, 14832, 29715, 14887, 14906, 14919, 29887, 14971, 29993];
var df_40_49_f = [1917, 1919, 1933, 1942, 1974, 2048, 2210, 2236, 2379, 2406, 2434, 2479, 2501, 2536, 2567, 2660, 2708, 2759, 2796, 2832, 2879, 2942, 2979, 3060, 3109, 3174, 3174, 3300, 3377, 3469, 3528, 3637, 3735, 3814, 3907, 4023, 4132, 4275, 4412, 4616, 4723, 4828, 4927, 5035, 5118, 5165, 5227, 5278, 5356, 5414, 5482, 5576, 5694, 5768, 5823, 5884, 6069, 6155, 6234, 6305, 6372, 6450, 6542, 6623, 6733, 6813, 6944, 7079, 7200, 7311, 7452, 7632, 7782, 7854, 8998, 9190, 9630, 9764, 9822, 10901, 11159, 11452, 11670, 11912, 12192, 12500, 11357, 11528, 11900, 12080, 12309, 12494, 12651, 12880, 13206, 13501, 13663, 13787, 13978, 14140, 14263, 14883, 14978, 15161, 15252, 15716, 15763, 15801, 15864, 15902, 15936, 15971, 16011, 16050, 16083, 16123, 32353, 16247, 16294, 32648, 32781, 16460, 16482, 33035, 16556, 16583, 16621, 33306, 33396, 16727, 16749, 16768, 33576, 16808, 16821, 16833, 33732, 16892, 16899, 16908, 33850, 16954, 33948, 16999, 17017, 17032, 34108, 17074, 34185];
var df_40_49_m = [906, 911, 928, 942, 972, 1028, 1174, 1202, 1325, 1356, 1381, 1424, 1449, 1485, 1514, 1614, 1666, 1704, 1733, 1762, 1799, 1854, 1896, 1945, 1976, 2037, 2037, 2142, 2204, 2280, 2327, 2410, 2474, 2528, 2597, 2702, 2794, 2910, 3004, 3177, 3245, 3327, 3420, 3527, 3583, 3629, 3701, 3728, 3784, 3837, 3888, 3941, 4033, 4078, 4126, 4176, 4315, 4370, 4418, 4498, 4542, 4595, 4685, 4767, 4867, 4927, 5002, 5089, 5212, 5321, 5438, 5565, 5691, 5741, 6787, 6943, 7306, 7412, 7451, 8405, 8620, 8848, 9028, 9223, 9416, 9662, 8585, 8749, 9066, 9253, 9430, 9592, 9727, 9908, 10138, 10384, 10515, 10618, 10743, 10886, 10980, 11482, 11535, 11694, 11762, 12143, 12184, 12230, 12284, 12316, 12367, 12408, 12458, 12490, 12526, 12558, 25229, 12673, 12721, 25505, 25619, 12859, 12881, 25826, 12942, 12962, 12990, 26031, 26099, 13077, 13095, 13111, 26252, 13139, 13154, 13170, 26392, 13214, 13224, 13230, 26493, 13261, 26557, 13297, 13323, 13330, 26689, 13371, 26771];
var df_50_59_f = [2274, 2277, 2291, 2301, 2336, 2429, 2599, 2627, 2764, 2795, 2836, 2881, 2915, 2957, 3000, 3114, 3170, 3228, 3263, 3309, 3361, 3418, 3471, 3555, 3605, 3693, 3693, 3815, 3886, 3967, 4022, 4108, 4196, 4308, 4399, 4509, 4617, 4746, 4861, 5081, 5179, 5300, 5422, 5560, 5655, 5710, 5778, 5821, 5895, 5985, 6059, 6167, 6310, 6409, 6467, 6522, 6681, 6752, 6822, 6888, 6930, 7008, 7108, 7194, 7292, 7363, 7487, 7609, 7743, 7861, 7990, 8120, 8267, 8330, 7935, 8082, 8438, 8598, 8648, 9584, 9828, 10110, 10308, 10535, 10763, 11020, 11985, 12182, 12500, 12744, 12964, 13177, 13345, 13595, 13960, 14305, 14506, 14653, 14860, 15087, 15247, 15911, 16024, 16261, 16358, 16893, 16937, 16979, 17030, 17087, 17150, 17207, 17258, 17300, 17338, 17380, 34873, 17506, 17557, 35180, 35308, 17709, 17738, 35542, 17806, 17831, 17879, 35867, 35961, 18011, 18038, 18068, 36208, 18129, 18144, 18157, 36366, 18203, 18214, 18224, 36483, 18262, 36578, 18314, 18325, 18336, 36709, 18379, 36798];
var df_50_59_m = [1142, 1149, 1162, 1172, 1196, 1264, 1423, 1444, 1594, 1630, 1661, 1698, 1728, 1775, 1805, 1904, 1951, 1998, 2018, 2056, 2105, 2155, 2190, 2257, 2294, 2351, 2351, 2452, 2503, 2578, 2638, 2735, 2808, 2889, 2974, 3075, 3181, 3307, 3402, 3572, 3651, 3737, 3831, 3941, 4020, 4064, 4120, 4141, 4213, 4278, 4332, 4400, 4490, 4548, 4600, 4650, 4798, 4858, 4913, 4965, 5005, 5070, 5155, 5226, 5307, 5374, 5470, 5595, 5697, 5793, 5903, 6033, 6169, 6235, 6290, 6429, 6757, 6879, 6910, 7798, 7990, 8197, 8374, 8555, 8776, 8997, 9339, 9523, 9827, 10010, 10234, 10407, 10547, 10753, 11024, 11332, 11526, 11666, 11825, 11985, 12105, 12719, 12791, 12975, 13064, 13523, 13572, 13629, 13677, 13717, 13776, 13822, 13856, 13901, 13931, 13970, 28049, 14065, 14109, 28308, 28436, 14271, 14301, 28656, 14365, 14382, 14425, 28929, 29018, 14542, 14562, 14576, 29182, 14611, 14625, 14636, 29321, 14678, 14689, 14705, 29443, 14740, 29510, 14778, 14790, 14800, 29650, 14849, 29728];
var df_60_69_f = [952, 955, 961, 968, 985, 1020, 1102, 1116, 1194, 1207, 1226, 1250, 1260, 1278, 1297, 1353, 1379, 1397, 1420, 1438, 1464, 1506, 1528, 1564, 1587, 1618, 1618, 1683, 1713, 1754, 1779, 1821, 1862, 1906, 1938, 1992, 2064, 2133, 2180, 2294, 2335, 2374, 2430, 2498, 2537, 2576, 2612, 2630, 2670, 2719, 2749, 2786, 2842, 2881, 2922, 2954, 3035, 3068, 3102, 3146, 3168, 3205, 3249, 3292, 3353, 3410, 3477, 3533, 3582, 3649, 3722, 3812, 3881, 3914, 4137, 4219, 4460, 4538, 4571, 5154, 5309, 5477, 5601, 5709, 5869, 6022, 5952, 6059, 6240, 6358, 6476, 6585, 6681, 6819, 7035, 7242, 7357, 7448, 7573, 7687, 7765, 8171, 8224, 8336, 8391, 8690, 8713, 8727, 8753, 8783, 8818, 8853, 8871, 8898, 8916, 8944, 17954, 9008, 9040, 18122, 18190, 9126, 9144, 18319, 9185, 9198, 9215, 18474, 18542, 9287, 9307, 9327, 18681, 9358, 9369, 9378, 18785, 9407, 9421, 9425, 18877, 9451, 18927, 9473, 9481, 9488, 19005, 9517, 19072];
var df_60_69_m = [719, 721, 728, 729, 741, 781, 872, 888, 966, 980, 1001, 1016, 1038, 1062, 1087, 1148, 1180, 1201, 1212, 1224, 1250, 1273, 1291, 1325, 1346, 1376, 1376, 1439, 1475, 1516, 1554, 1597, 1646, 1692, 1726, 1785, 1842, 1911, 1962, 2044, 2084, 2134, 2184, 2237, 2285, 2309, 2346, 2362, 2407, 2461, 2489, 2535, 2593, 2629, 2659, 2684, 2758, 2799, 2823, 2856, 2874, 2908, 2951, 3007, 3076, 3122, 3180, 3232, 3282, 3341, 3419, 3506, 3611, 3637, 4090, 4181, 4439, 4538, 4561, 5132, 5268, 5420, 5531, 5657, 5780, 5961, 5577, 5674, 5875, 6008, 6126, 6242, 6336, 6468, 6642, 6855, 6972, 7038, 7141, 7245, 7313, 7674, 7733, 7859, 7913, 8168, 8195, 8222, 8255, 8271, 8308, 8340, 8369, 8402, 8423, 8447, 16948, 8513, 8541, 17133, 17204, 8632, 8649, 17345, 8699, 8710, 8726, 17497, 17555, 8792, 8811, 8824, 17673, 8849, 8859, 8868, 17758, 8894, 8904, 8917, 17847, 8932, 17888, 8951, 8956, 8965, 17947, 8985, 17991];
var df_70_79_f = [707, 707, 711, 712, 721, 742, 784, 790, 818, 823, 835, 842, 849, 862, 866, 897, 916, 924, 936, 946, 962, 976, 997, 1022, 1030, 1043, 1043, 1083, 1098, 1123, 1145, 1162, 1189, 1216, 1240, 1288, 1321, 1357, 1382, 1450, 1475, 1500, 1533, 1573, 1600, 1624, 1659, 1676, 1697, 1736, 1761, 1773, 1811, 1831, 1856, 1867, 1921, 1952, 1977, 2013, 2030, 2052, 2078, 2107, 2162, 2190, 2244, 2269, 2307, 2337, 2378, 2422, 2470, 2489, 3245, 3303, 3456, 3549, 3584, 3864, 3975, 4083, 4174, 4273, 4392, 4463, 3575, 3641, 3770, 3831, 3887, 3935, 3993, 4100, 4236, 4355, 4409, 4464, 4543, 4615, 4662, 4918, 4956, 5027, 5061, 5239, 5251, 5265, 5284, 5302, 5325, 5343, 5362, 5374, 5392, 5409, 10857, 5448, 5460, 10951, 11008, 5526, 5545, 11126, 5585, 5593, 5608, 11244, 11280, 5655, 5663, 5675, 11369, 5691, 5696, 5702, 11427, 5722, 5724, 5727, 11461, 5738, 11489, 5750, 5753, 5755, 11521, 5771, 11551];
var df_70_79_m = [898, 900, 903, 905, 917, 936, 968, 976, 1028, 1036, 1045, 1054, 1062, 1074, 1080, 1112, 1127, 1141, 1158, 1171, 1182, 1199, 1216, 1243, 1255, 1274, 1274, 1314, 1332, 1355, 1380, 1405, 1425, 1451, 1485, 1518, 1553, 1598, 1628, 1689, 1719, 1750, 1778, 1807, 1835, 1861, 1886, 1904, 1925, 1959, 1983, 2006, 2031, 2051, 2077, 2097, 2159, 2180, 2200, 2225, 2237, 2251, 2288, 2308, 2348, 2385, 2424, 2468, 2504, 2551, 2592, 2654, 2715, 2738, 3965, 4050, 4221, 4326, 4359, 4689, 4810, 4937, 5033, 5137, 5231, 5314, 3857, 3929, 4047, 4098, 4145, 4199, 4256, 4337, 4462, 4568, 4629, 4677, 4743, 4805, 4854, 5080, 5107, 5175, 5205, 5377, 5393, 5405, 5423, 5438, 5456, 5476, 5499, 5514, 5535, 5552, 11151, 5591, 5600, 11222, 11279, 5661, 5673, 11387, 5710, 5719, 5730, 11508, 11549, 5788, 5799, 5814, 11641, 5827, 5830, 5836, 11691, 5849, 5858, 5861, 11727, 5868, 11750, 5882, 5889, 5892, 11795, 5903, 8623];
var df_80_89_f = [1095, 1096, 1097, 1097, 1101, 1108, 1132, 1134, 1168, 1173, 1182, 1186, 1192, 1201, 1206, 1221, 1229, 1234, 1237, 1249, 1262, 1276, 1293, 1316, 1329, 1337, 1337, 1379, 1393, 1400, 1426, 1448, 1478, 1500, 1508, 1529, 1557, 1594, 1617, 1697, 1721, 1739, 1772, 1800, 1821, 1850, 1892, 1915, 1937, 1976, 2021, 2048, 2087, 2108, 2129, 2150, 2193, 2225, 2246, 2271, 2284, 2302, 2324, 2345, 2398, 2428, 2484, 2519, 2538, 2565, 2591, 2626, 2659, 2675, 6911, 7050, 7289, 7475, 7555, 7819, 8009, 8147, 8289, 8422, 8585, 8699, 3466, 3530, 3621, 3665, 3703, 3754, 3800, 3877, 3990, 4073, 4119, 4170, 4263, 4355, 4399, 4686, 4731, 4828, 4842, 5048, 5063, 5072, 5100, 5127, 5152, 5172, 5195, 5213, 5230, 5252, 10564, 5306, 5324, 10685, 10742, 5397, 5407, 10847, 5446, 5455, 5467, 10982, 11024, 5527, 5535, 5542, 11098, 5555, 5558, 5564, 11154, 5584, 5586, 5591, 11199, 5609, 11226, 5621, 5626, 5629, 8473, 5637, 11284];
var df_80_89_m = [902, 903, 906, 908, 912, 922, 943, 947, 970, 975, 978, 979, 984, 987, 993, 1007, 1015, 1022, 1029, 1035, 1045, 1047, 1054, 1080, 1094, 1102, 1102, 1135, 1142, 1153, 1174, 1191, 1200, 1219, 1232, 1254, 1275, 1299, 1326, 1377, 1393, 1413, 1428, 1440, 1457, 1478, 1515, 1525, 1545, 1564, 1586, 1602, 1630, 1645, 1665, 1684, 1726, 1742, 1756, 1773, 1790, 1809, 1827, 1843, 1877, 1906, 1950, 1971, 1997, 2022, 2046, 2080, 2109, 2122, 7369, 7474, 7759, 7950, 8040, 8299, 8487, 8623, 8703, 8855, 8997, 9096, 2688, 2720, 2788, 2817, 2841, 2866, 2893, 2941, 3023, 3098, 3134, 3175, 3222, 3272, 3311, 3483, 3518, 3563, 3577, 3727, 3739, 3751, 3772, 3789, 3803, 3815, 3831, 3852, 3870, 3885, 7808, 3925, 3934, 7895, 7949, 3992, 4002, 8035, 4033, 4040, 4047, 8120, 8144, 4080, 4083, 4088, 8197, 4104, 4107, 4111, 5839, 4121, 4123, 4125, 8261, 4137, 5878, 4149, 4152, 4154, 8314, 4161, 6580];
var df_90_f = [671, 673, 673, 673, 673, 675, 683, 686, 705, 706, 709, 712, 713, 715, 715, 721, 722, 725, 726, 730, 738, 739, 744, 757, 766, 767, 767, 788, 794, 806, 815, 822, 839, 847, 868, 874, 886, 902, 914, 960, 975, 986, 1000, 1011, 1024, 1040, 1071, 1080, 1089, 1116, 1135, 1147, 1157, 1164, 1175, 1187, 1217, 1233, 1241, 1264, 1274, 1284, 1286, 1296, 1319, 1341, 1358, 1371, 1383, 1392, 1406, 1415, 1431, 1438, 6982, 7073, 7279, 7558, 7644, 7774, 7904, 7976, 8129, 8350, 8451, 8561, 1796, 1826, 1875, 1884, 1895, 1922, 1934, 1961, 2017, 2059, 2092, 2119, 2145, 2200, 2236, 2395, 2425, 2479, 2496, 2611, 2619, 2627, 2645, 2660, 2677, 2688, 2699, 2710, 2716, 2734, 5503, 2767, 2770, 5557, 5606, 2812, 2818, 5662, 2837, 2843, 2855, 5738, 5752, 2880, 2886, 2889, 5789, 2905, 2907, 2912, 5834, 2924, 2927, 2928, 5860, 2932, 5866, 2935, 2938, 2938, 2941, 2943, 5893];
var df_90_m = [303, 303, 304, 305, 307, 309, 312, 313, 321, 323, 323, 325, 326, 327, 327, 331, 332, 334, 335, 335, 336, 338, 341, 347, 350, 351, 351, 358, 358, 358, 362, 369, 376, 381, 385, 391, 392, 396, 402, 425, 439, 447, 451, 454, 466, 469, 479, 485, 493, 500, 509, 518, 525, 534, 538, 540, 548, 557, 558, 561, 565, 572, 577, 581, 590, 596, 607, 615, 619, 623, 631, 636, 639, 642, 6717, 6789, 6934, 7130, 7192, 7316, 7491, 7646, 7780, 7883, 7966, 8079, 791, 796, 813, 817, 825, 836, 845, 859, 874, 886, 898, 908, 928, 943, 951, 1003, 1015, 1030, 1034, 1081, 1082, 1086, 1091, 1097, 1104, 1106, 1111, 1117, 1118, 1121, 2261, 1137, 1140, 2285, 2316, 1163, 1165, 2341, 1177, 1178, 1182, 2369, 2374, 1189, 1192, 1196, 2395, 1198, 1199, 1200, 2406, 1205, 1207, 1209, 2423, 1214, 2434, 1218, 1219, 1220, 1220, 1220, 1220];
