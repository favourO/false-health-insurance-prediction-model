const fields = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    90,
    91,
    92,
    93,
    94,
    95,
    96,
    97,
    98,
    99,
    100,
    101,
    102,
    103,
    104,
    105,
    106,
    107,
    108,
    109,
    110,
    111,
    112,
    113,
    114,
    115,
    116,
    117,
    118,
    119,
    120,
    121,
    122,
    123,
    124,
    125,
    126,
    127,
    128,
    129,
    130,
    131,
    132,
    133,
    134,
    135,
    136,
    137,
    138,
    139,
    140,
    141,
    142,
    143,
    144,
    145,
    146,
    147,
    148,
    149,
    150,
    151,
    152,
    153,
    154,
    155
 ]

 const input = ['InscClaimAmtReimbursed_30',
 'InscClaimAmtReimbursed_40',
 'NoOfDaysAdmitted_1',
 'NoOfDaysAdmitted_2',
 'NoOfDaysAdmitted_3',
 'ChronicCond_Alzheimer',
 'ChronicCond_Heartfailure',
 'ChronicCond_KidneyDisease',
 'ChronicCond_Cancer',
 'ChronicCond_ObstrPulmonary',
 'ChronicCond_Depression',
 'ChronicCond_Diabetes',
 'ChronicCond_IschemicHeart',
 'ChronicCond_Osteoporasis',
 'ChronicCond_rheumatoidarthritis',
 'ChronicCond_stroke',
 'IPAnnualReimbursementAmt',
 'IPAnnualDeductibleAmt',
 'OPAnnualReimbursementAmt',
 'OPAnnualDeductibleAmt',
 'NoOfDaysAdmitted_5',
 'NoOfDaysAdmitted_6',
 'NoOfDaysAdmitted_4',
 'NoOfDaysAdmitted_7',
 'NoOfDaysAdmitted_10',
 'NoOfDaysAdmitted_15',
 'NoOfDaysAdmitted_30',
 'NoOfDaysAdmitted_45',
 'NoOfDaysAdmitted_50',
 'NoOfDaysAdmitted_60',
 'NoOfDaysAdmitted_65',
 'InscClaimAmtReimbursed_80',
 'InscClaimAmtReimbursed_10',
 'InscClaimAmtReimbursed_40',
 'InscClaimAmtReimbursed_200',
 'InscClaimAmtReimbursed_300',
 'InscClaimAmtReimbursed_700',
 'InscClaimAmtReimbursed_500',
 'InscClaimAmtReimbursed_15000',
 'InscClaimAmtReimbursed_5000',
 'InscClaimAmtReimbursed_3000',
 'AttendingPhysician_PHY319565',
 'AttendingPhysician_PHY365497',
 'AttendingPhysician_PHY345332',
 'AttendingPhysician_PHY342806',
 'AttendingPhysician_PHY423220',
 'AttendingPhysician_PHY353156',
 'AttendingPhysician_PHY431177',
 'AttendingPhysician_PHY352941',
 'AttendingPhysician_PHY332752',
 'AttendingPhysician_PHY372623',
 'AttendingPhysician_PHY394597',
 'AttendingPhysician_PHY409445',
 'AttendingPhysician_PHY385446',
 'AttendingPhysician_PHY396851',
 'PerAttendingPhysicianAvg_IPAnnualDeductibleAmt',
 'PerAttendingPhysicianAvg_OPAnnualReimbursementAmt',
 'PerAttendingPhysicianAvg_OPAnnualDeductibleAmt',
 'PerAttendingPhysicianAvg_AdmitForDays',
 'PerDiagnosisGroupCodeAvg_InscClaimAmtReimbursed',
 'PerDiagnosisGroupCodeAvg_DeductibleAmtPaid',
 'PerDiagnosisGroupCodeAvg_IPAnnualReimbursementAmt',
 'State_London',
 'State_Belfast',
 'State_Edinburgh',
 'State_Cardiff',
 'DeductibleAmtPaid_3050',
 'DeductibleAmtPaid_7000',
 'DeductibleAmtPaid_34000',
 'DeductibleAmtPaid_4500',
 'DeductibleAmtPaid_5000',
 'DeductibleAmtPaid_1000',
 'DeductibleAmtPaid_900',
 'DeductibleAmtPaid_700',
 'DeductibleAmtPaid_2000',
 'County_Scalloway',
 'County_Salisburg',
 'County_Porthleven',
 'County_Oxford',
 'County_Nothingham',
 'County_Newcastle',
 'County_Manchester',
 'County_Llangollen',
 'County_Liverpool',
 'County_Leeds',
 'County_Ironbridge',
 'County_Greenwich',
 'County_Glenfinnan',
 'County_Glasgow',
 'County_Falmouth',
 'County_Edinburgh',
 'County_Dorchester',
 'County_Cotswolds',
 'County_Conwy',
 'County_Belfast',
 'County_Bath',
 'County_Anglesey',
 'County_Aberystwyth',
 'ClmProcedureCode_71988',
 'ClmProcedureCode_51388',
 'ClmProcedureCode_21980',
 'ClmProcedureCode_2723',
 'ClmProcedureCode_82382',
 'ClmProcedureCode_78943',
 'ClmProcedureCode_6115',
 'IPAnnualReimbursementAmt_2500',
 'IPAnnualReimbursementAmt_1500',
 'IPAnnualReimbursementAmt_9000',
 'IPAnnualReimbursementAmt_14500',
 'IPAnnualReimbursementAmt_7500',
 'IPAnnualReimbursementAmt_6500',
 'IPAnnualReimbursementAmt_400',
 'IPAnnualReimbursementAmt_4500',
 'Age_70',
 'Age_65',
 'Age_62',
 'Age_60',
 'Age_57',
 'Age_53',
 'Age_50',
 'Age_45',
 'Age_40',
 'Age_39',
 'Age_38',
 'Age_37',
 'Age_36',
 'Age_35',
 'Age_34',
 'Age_33',
 'Age_32',
 'Age_31',
 'Age_30',
 'Age_29',
 'Age_28',
 'Age_27',
 'Age_26',
 'Age_25',
 'Age_24',
 'Age_23',
 'Age_22',
 'Age_21',
 'Age_20',
 'Age_19',
 'Age_18',
 'Age_17',
 'Age_16',
 'Age_15',
 'Age_14',
 'Age_13',
 'Age_12',
 'Gender_Male',
 'Gender_Female',
 'Race_White',
 'Race_Black',
 'Race_Latinos'];



 module.exports.fields = fields;
 module.exports.input = input