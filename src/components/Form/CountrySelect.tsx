import { FormType } from '@/lib/type';
import { cn } from '@/lib/utils';
import { Autocomplete, AutocompleteItem, Avatar } from '@nextui-org/react';
import React, { memo } from 'react';
import { Controller, FieldValues, UseFormSetValue } from 'react-hook-form';

type Props = {
  field: FormType;
  control: any;
  errors: any;
  setValue: UseFormSetValue<any>;
};

type PhoneProps = {
  code: string;
  value: string;
  label: string;
};

const listCodePhone: PhoneProps[] = [
  {
    code: 'af',
    value: '93',
    label: 'Afghanistan (‫افغانستان‬‎)',
  },
  {
    code: 'al',
    value: '355',
    label: 'Albania (Shqipëri)',
  },
  {
    code: 'dz',
    value: '213',
    label: 'Algeria (‫الجزائر‬‎)',
  },
  {
    code: 'as',
    value: '1684',
    label: 'American Samoa',
  },
  {
    code: 'ad',
    value: '376',
    label: 'Andorra',
  },
  {
    code: 'ao',
    value: '244',
    label: 'Angola',
  },
  {
    code: 'ai',
    value: '1264',
    label: 'Anguilla',
  },
  {
    code: 'ag',
    value: '1268',
    label: 'Antigua and Barbuda',
  },
  {
    code: 'ar',
    value: '54',
    label: 'Argentina',
  },
  {
    code: 'am',
    value: '374',
    label: 'Armenia (Հայաստան)',
  },
  {
    code: 'aw',
    value: '297',
    label: 'Aruba',
  },
  {
    code: 'au',
    value: '61',
    label: 'Australia',
  },
  {
    code: 'at',
    value: '43',
    label: 'Austria (Österreich)',
  },
  {
    code: 'az',
    value: '994',
    label: 'Azerbaijan (Azərbaycan)',
  },
  {
    code: 'bs',
    value: '1242',
    label: 'Bahamas',
  },
  {
    code: 'bh',
    value: '973',
    label: 'Bahrain (‫البحرين‬‎)',
  },
  {
    code: 'bd',
    value: '880',
    label: 'Bangladesh (বাংলাদেশ)',
  },
  {
    code: 'bb',
    value: '1246',
    label: 'Barbados',
  },
  {
    code: 'by',
    value: '375',
    label: 'Belarus (Беларусь)',
  },
  {
    code: 'be',
    value: '32',
    label: 'Belgium (België)',
  },
  {
    code: 'bz',
    value: '501',
    label: 'Belize',
  },
  {
    code: 'bj',
    value: '229',
    label: 'Benin (Bénin)',
  },
  {
    code: 'bm',
    value: '1441',
    label: 'Bermuda',
  },
  {
    code: 'bt',
    value: '975',
    label: 'Bhutan (འབྲུག)',
  },
  {
    code: 'bo',
    value: '591',
    label: 'Bolivia',
  },
  {
    code: 'ba',
    value: '387',
    label: 'Bosnia and Herzegovina (Босна и Херцеговина)',
  },
  {
    code: 'bw',
    value: '267',
    label: 'Botswana',
  },
  {
    code: 'br',
    value: '55',
    label: 'Brazil (Brasil)',
  },
  {
    code: 'io',
    value: '246',
    label: 'British Indian Ocean Territory',
  },
  {
    code: 'vg',
    value: '1284',
    label: 'British Virgin Islands',
  },
  {
    code: 'bn',
    value: '673',
    label: 'Brunei',
  },
  {
    code: 'bg',
    value: '359',
    label: 'Bulgaria (България)',
  },
  {
    code: 'bf',
    value: '226',
    label: 'Burkina Faso',
  },
  {
    code: 'bi',
    value: '257',
    label: 'Burundi (Uburundi)',
  },
  {
    code: 'kh',
    value: '855',
    label: 'Cambodia (កម្ពុជា)',
  },
  {
    code: 'cm',
    value: '237',
    label: 'Cameroon (Cameroun)',
  },
  {
    code: 'ca',
    value: '1',
    label: 'Canada',
  },
  {
    code: 'cv',
    value: '238',
    label: 'Cape Verde (Kabu Verdi)',
  },
  {
    code: 'bq',
    value: '599',
    label: 'Caribbean Netherlands',
  },
  {
    code: 'ky',
    value: '1345',
    label: 'Cayman Islands',
  },
  {
    code: 'cf',
    value: '236',
    label: 'Central African Republic (République centrafricaine)',
  },
  {
    code: 'td',
    value: '235',
    label: 'Chad (Tchad)',
  },
  {
    code: 'cl',
    value: '56',
    label: 'Chile',
  },
  {
    code: 'cn',
    value: '86',
    label: 'China (中国)',
  },
  {
    code: 'cx',
    value: '61',
    label: 'Christmas Island',
  },
  {
    code: 'cc',
    value: '61',
    label: 'Cocos (Keeling) Islands',
  },
  {
    code: 'co',
    value: '57',
    label: 'Colombia',
  },
  {
    code: 'km',
    value: '269',
    label: 'Comoros (‫جزر القمر‬‎)',
  },
  {
    code: 'cd',
    value: '243',
    label: 'Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)',
  },
  {
    code: 'cg',
    value: '242',
    label: 'Congo (Republic) (Congo-Brazzaville)',
  },
  {
    code: 'ck',
    value: '682',
    label: 'Cook Islands',
  },
  {
    code: 'cr',
    value: '506',
    label: 'Costa Rica',
  },
  {
    code: 'ci',
    value: '225',
    label: 'Côte d’Ivoire',
  },
  {
    code: 'hr',
    value: '385',
    label: 'Croatia (Hrvatska)',
  },
  {
    code: 'cu',
    value: '53',
    label: 'Cuba',
  },
  {
    code: 'cw',
    value: '599',
    label: 'Curaçao',
  },
  {
    code: 'cy',
    value: '357',
    label: 'Cyprus (Κύπρος)',
  },
  {
    code: 'cz',
    value: '420',
    label: 'Czech Republic (Česká republika)',
  },
  {
    code: 'dk',
    value: '45',
    label: 'Denmark (Danmark)',
  },
  {
    code: 'dj',
    value: '253',
    label: 'Djibouti',
  },
  {
    code: 'dm',
    value: '1767',
    label: 'Dominica',
  },
  {
    code: 'do',
    value: '1',
    label: 'Dominican Republic (República Dominicana)',
  },
  {
    code: 'ec',
    value: '593',
    label: 'Ecuador',
  },
  {
    code: 'eg',
    value: '20',
    label: 'Egypt (‫مصر‬‎)',
  },
  {
    code: 'sv',
    value: '503',
    label: 'El Salvador',
  },
  {
    code: 'gq',
    value: '240',
    label: 'Equatorial Guinea (Guinea Ecuatorial)',
  },
  {
    code: 'er',
    value: '291',
    label: 'Eritrea',
  },
  {
    code: 'ee',
    value: '372',
    label: 'Estonia (Eesti)',
  },
  {
    code: 'et',
    value: '251',
    label: 'Ethiopia',
  },
  {
    code: 'fk',
    value: '500',
    label: 'Falkland Islands (Islas Malvinas)',
  },
  {
    code: 'fo',
    value: '298',
    label: 'Faroe Islands (Føroyar)',
  },
  {
    code: 'fj',
    value: '679',
    label: 'Fiji',
  },
  {
    code: 'fi',
    value: '358',
    label: 'Finland (Suomi)',
  },
  {
    code: 'fr',
    value: '33',
    label: 'France',
  },
  {
    code: 'gf',
    value: '594',
    label: 'French Guiana (Guyane française)',
  },
  {
    code: 'pf',
    value: '689',
    label: 'French Polynesia (Polynésie française)',
  },
  {
    code: 'ga',
    value: '241',
    label: 'Gabon',
  },
  {
    code: 'gm',
    value: '220',
    label: 'Gambia',
  },
  {
    code: 'ge',
    value: '995',
    label: 'Georgia (საქართველო)',
  },
  {
    code: 'de',
    value: '49',
    label: 'Germany (Deutschland)',
  },
  {
    code: 'gh',
    value: '233',
    label: 'Ghana (Gaana)',
  },
  {
    code: 'gi',
    value: '350',
    label: 'Gibraltar',
  },
  {
    code: 'gr',
    value: '30',
    label: 'Greece (Ελλάδα)',
  },
  {
    code: 'gl',
    value: '299',
    label: 'Greenland (Kalaallit Nunaat)',
  },
  {
    code: 'gd',
    value: '1473',
    label: 'Grenada',
  },
  {
    code: 'gp',
    value: '590',
    label: 'Guadeloupe',
  },
  {
    code: 'gu',
    value: '1671',
    label: 'Guam',
  },
  {
    code: 'gt',
    value: '502',
    label: 'Guatemala',
  },
  {
    code: 'gg',
    value: '44',
    label: 'Guernsey',
  },
  {
    code: 'gn',
    value: '224',
    label: 'Guinea (Guinée)',
  },
  {
    code: 'gw',
    value: '245',
    label: 'Guinea-Bissau (Guiné Bissau)',
  },
  {
    code: 'gy',
    value: '592',
    label: 'Guyana',
  },
  {
    code: 'ht',
    value: '509',
    label: 'Haiti',
  },
  {
    code: 'hn',
    value: '504',
    label: 'Honduras',
  },
  {
    code: 'hk',
    value: '852',
    label: 'Hong Kong (香港)',
  },
  {
    code: 'hu',
    value: '36',
    label: 'Hungary (Magyarország)',
  },
  {
    code: 'is',
    value: '354',
    label: 'Iceland (Ísland)',
  },
  {
    code: 'in',
    value: '91',
    label: 'India (भारत)',
  },
  {
    code: 'id',
    value: '62',
    label: 'Indonesia',
  },
  {
    code: 'ir',
    value: '98',
    label: 'Iran (‫ایران‬‎)',
  },
  {
    code: 'iq',
    value: '964',
    label: 'Iraq (‫العراق‬‎)',
  },
  {
    code: 'ie',
    value: '353',
    label: 'Ireland',
  },
  {
    code: 'im',
    value: '44',
    label: 'Isle of Man',
  },
  {
    code: 'it',
    value: '39',
    label: 'Italy (Italia)',
  },
  {
    code: 'jm',
    value: '1',
    label: 'Jamaica',
  },
  {
    code: 'jp',
    value: '81',
    label: 'Japan (日本)',
  },
  {
    code: 'je',
    value: '44',
    label: 'Jersey',
  },
  {
    code: 'jo',
    value: '962',
    label: 'Jordan (‫الأردن‬‎)',
  },
  {
    code: 'kz',
    value: '7',
    label: 'Kazakhstan (Казахстан)',
  },
  {
    code: 'ke',
    value: '254',
    label: 'Kenya',
  },
  {
    code: 'ki',
    value: '686',
    label: 'Kiribati',
  },
  {
    code: 'xk',
    value: '383',
    label: 'Kosovo',
  },
  {
    code: 'kw',
    value: '965',
    label: 'Kuwait (‫الكويت‬‎)',
  },
  {
    code: 'kg',
    value: '996',
    label: 'Kyrgyzstan (Кыргызстан)',
  },
  {
    code: 'la',
    value: '856',
    label: 'Laos (ລາວ)',
  },
  {
    code: 'lv',
    value: '371',
    label: 'Latvia (Latvija)',
  },
  {
    code: 'lb',
    value: '961',
    label: 'Lebanon (‫لبنان‬‎)',
  },
  {
    code: 'ls',
    value: '266',
    label: 'Lesotho',
  },
  {
    code: 'lr',
    value: '231',
    label: 'Liberia',
  },
  {
    code: 'ly',
    value: '218',
    label: 'Libya (‫ليبيا‬‎)',
  },
  {
    code: 'li',
    value: '423',
    label: 'Liechtenstein',
  },
  {
    code: 'lt',
    value: '370',
    label: 'Lithuania (Lietuva)',
  },
  {
    code: 'lu',
    value: '352',
    label: 'Luxembourg',
  },
  {
    code: 'mo',
    value: '853',
    label: 'Macau (澳門)',
  },
  {
    code: 'mk',
    value: '389',
    label: 'Macedonia (FYROM) (Македонија)',
  },
  {
    code: 'mg',
    value: '261',
    label: 'Madagascar (Madagasikara)',
  },
  {
    code: 'mw',
    value: '265',
    label: 'Malawi',
  },
  {
    code: 'my',
    value: '60',
    label: 'Malaysia',
  },
  {
    code: 'mv',
    value: '960',
    label: 'Maldives',
  },
  {
    code: 'ml',
    value: '223',
    label: 'Mali',
  },
  {
    code: 'mt',
    value: '356',
    label: 'Malta',
  },
  {
    code: 'mh',
    value: '692',
    label: 'Marshall Islands',
  },
  {
    code: 'mq',
    value: '596',
    label: 'Martinique',
  },
  {
    code: 'mr',
    value: '222',
    label: 'Mauritania (‫موريتانيا‬‎)',
  },
  {
    code: 'mu',
    value: '230',
    label: 'Mauritius (Moris)',
  },
  {
    code: 'yt',
    value: '262',
    label: 'Mayotte',
  },
  {
    code: 'mx',
    value: '52',
    label: 'Mexico (México)',
  },
  {
    code: 'fm',
    value: '691',
    label: 'Micronesia',
  },
  {
    code: 'md',
    value: '373',
    label: 'Moldova (Republica Moldova)',
  },
  {
    code: 'mc',
    value: '377',
    label: 'Monaco',
  },
  {
    code: 'mn',
    value: '976',
    label: 'Mongolia (Монгол)',
  },
  {
    code: 'me',
    value: '382',
    label: 'Montenegro (Crna Gora)',
  },
  {
    code: 'ms',
    value: '1664',
    label: 'Montserrat',
  },
  {
    code: 'ma',
    value: '212',
    label: 'Morocco (‫المغرب‬‎)',
  },
  {
    code: 'mz',
    value: '258',
    label: 'Mozambique (Moçambique)',
  },
  {
    code: 'mm',
    value: '95',
    label: 'Myanmar (Burma) (မြန်မာ)',
  },
  {
    code: 'na',
    value: '264',
    label: 'Namibia (Namibië)',
  },
  {
    code: 'nr',
    value: '674',
    label: 'Nauru',
  },
  {
    code: 'np',
    value: '977',
    label: 'Nepal (नेपाल)',
  },
  {
    code: 'nl',
    value: '31',
    label: 'Netherlands (Nederland)',
  },
  {
    code: 'nc',
    value: '687',
    label: 'New Caledonia (Nouvelle-Calédonie)',
  },
  {
    code: 'nz',
    value: '64',
    label: 'New Zealand',
  },
  {
    code: 'ni',
    value: '505',
    label: 'Nicaragua',
  },
  {
    code: 'ne',
    value: '227',
    label: 'Niger (Nijar)',
  },
  {
    code: 'ng',
    value: '234',
    label: 'Nigeria',
  },
  {
    code: 'nu',
    value: '683',
    label: 'Niue',
  },
  {
    code: 'nf',
    value: '672',
    label: 'Norfolk Island',
  },
  {
    code: 'kp',
    value: '850',
    label: 'North Korea (조선 민주주의 인민 공화국)',
  },
  {
    code: 'mp',
    value: '1670',
    label: 'Northern Mariana Islands',
  },
  {
    code: 'no',
    value: '47',
    label: 'Norway (Norge)',
  },
  {
    code: 'om',
    value: '968',
    label: 'Oman (‫عُمان‬‎)',
  },
  {
    code: 'pk',
    value: '92',
    label: 'Pakistan (‫پاکستان‬‎)',
  },
  {
    code: 'pw',
    value: '680',
    label: 'Palau',
  },
  {
    code: 'ps',
    value: '970',
    label: 'Palestine (‫فلسطين‬‎)',
  },
  {
    code: 'pa',
    value: '507',
    label: 'Panama (Panamá)',
  },
  {
    code: 'pg',
    value: '675',
    label: 'Papua New Guinea',
  },
  {
    code: 'py',
    value: '595',
    label: 'Paraguay',
  },
  {
    code: 'pe',
    value: '51',
    label: 'Peru (Perú)',
  },
  {
    code: 'ph',
    value: '63',
    label: 'Philippines',
  },
  {
    code: 'pl',
    value: '48',
    label: 'Poland (Polska)',
  },
  {
    code: 'pt',
    value: '351',
    label: 'Portugal',
  },
  {
    code: 'pr',
    value: '1',
    label: 'Puerto Rico',
  },
  {
    code: 'qa',
    value: '974',
    label: 'Qatar (‫قطر‬‎)',
  },
  {
    code: 're',
    value: '262',
    label: 'Réunion (La Réunion)',
  },
  {
    code: 'ro',
    value: '40',
    label: 'Romania (România)',
  },
  {
    code: 'ru',
    value: '7',
    label: 'Russia (Россия)',
  },
  {
    code: 'rw',
    value: '250',
    label: 'Rwanda',
  },
  {
    code: 'bl',
    value: '590',
    label: 'Saint Barthélemy',
  },
  {
    code: 'sh',
    value: '290',
    label: 'Saint Helena',
  },
  {
    code: 'kn',
    value: '1869',
    label: 'Saint Kitts and Nevis',
  },
  {
    code: 'lc',
    value: '1758',
    label: 'Saint Lucia',
  },
  {
    code: 'mf',
    value: '590',
    label: 'Saint Martin (Saint-Martin (partie française))',
  },
  {
    code: 'pm',
    value: '508',
    label: 'Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)',
  },
  {
    code: 'vc',
    value: '1784',
    label: 'Saint Vincent and the Grenadines',
  },
  {
    code: 'ws',
    value: '685',
    label: 'Samoa',
  },
  {
    code: 'sm',
    value: '378',
    label: 'San Marino',
  },
  {
    code: 'st',
    value: '239',
    label: 'São Tomé and Príncipe (São Tomé e Príncipe)',
  },
  {
    code: 'sa',
    value: '966',
    label: 'Saudi Arabia (‫المملكة العربية السعودية‬‎)',
  },
  {
    code: 'sn',
    value: '221',
    label: 'Senegal (Sénégal)',
  },
  {
    code: 'rs',
    value: '381',
    label: 'Serbia (Србија)',
  },
  {
    code: 'sc',
    value: '248',
    label: 'Seychelles',
  },
  {
    code: 'sl',
    value: '232',
    label: 'Sierra Leone',
  },
  {
    code: 'sg',
    value: '65',
    label: 'Singapore',
  },
  {
    code: 'sx',
    value: '1721',
    label: 'Sint Maarten',
  },
  {
    code: 'sk',
    value: '421',
    label: 'Slovakia (Slovensko)',
  },
  {
    code: 'si',
    value: '386',
    label: 'Slovenia (Slovenija)',
  },
  {
    code: 'sb',
    value: '677',
    label: 'Solomon Islands',
  },
  {
    code: 'so',
    value: '252',
    label: 'Somalia (Soomaaliya)',
  },
  {
    code: 'za',
    value: '27',
    label: 'South Africa',
  },
  {
    code: 'kr',
    value: '82',
    label: 'South Korea (대한민국)',
  },
  {
    code: 'ss',
    value: '211',
    label: 'South Sudan (‫جنوب السودان‬‎)',
  },
  {
    code: 'es',
    value: '34',
    label: 'Spain (España)',
  },
  {
    code: 'lk',
    value: '94',
    label: 'Sri Lanka (ශ්‍රී ලංකාව)',
  },
  {
    code: 'sd',
    value: '249',
    label: 'Sudan (‫السودان‬‎)',
  },
  {
    code: 'sr',
    value: '597',
    label: 'Suriname',
  },
  {
    code: 'sj',
    value: '47',
    label: 'Svalbard and Jan Mayen',
  },
  {
    code: 'sz',
    value: '268',
    label: 'Swaziland',
  },
  {
    code: 'se',
    value: '46',
    label: 'Sweden (Sverige)',
  },
  {
    code: 'ch',
    value: '41',
    label: 'Switzerland (Schweiz)',
  },
  {
    code: 'sy',
    value: '963',
    label: 'Syria (‫سوريا‬‎)',
  },
  {
    code: 'tw',
    value: '886',
    label: 'Taiwan (台灣)',
  },
  {
    code: 'tj',
    value: '992',
    label: 'Tajikistan',
  },
  {
    code: 'tz',
    value: '255',
    label: 'Tanzania',
  },
  {
    code: 'th',
    value: '66',
    label: 'Thailand (ไทย)',
  },
  {
    code: 'tl',
    value: '670',
    label: 'Timor-Leste',
  },
  {
    code: 'tg',
    value: '228',
    label: 'Togo',
  },
  {
    code: 'tk',
    value: '690',
    label: 'Tokelau',
  },
  {
    code: 'to',
    value: '676',
    label: 'Tonga',
  },
  {
    code: 'tt',
    value: '1868',
    label: 'Trinidad and Tobago',
  },
  {
    code: 'tn',
    value: '216',
    label: 'Tunisia (‫تونس‬‎)',
  },
  {
    code: 'tr',
    value: '90',
    label: 'Turkey (Türkiye)',
  },
  {
    code: 'tm',
    value: '993',
    label: 'Turkmenistan',
  },
  {
    code: 'tc',
    value: '1649',
    label: 'Turks and Caicos Islands',
  },
  {
    code: 'tv',
    value: '688',
    label: 'Tuvalu',
  },
  {
    code: 'vi',
    value: '1340',
    label: 'U.S. Virgin Islands',
  },
  {
    code: 'ug',
    value: '256',
    label: 'Uganda',
  },
  {
    code: 'ua',
    value: '380',
    label: 'Ukraine (Україна)',
  },
  {
    code: 'ae',
    value: '971',
    label: 'United Arab Emirates (‫الإمارات العربية المتحدة‬‎)',
  },
  {
    code: 'gb',
    value: '44',
    label: 'United Kingdom',
  },
  {
    code: 'us',
    value: '1',
    label: 'United States',
  },
  {
    code: 'uy',
    value: '598',
    label: 'Uruguay',
  },
  {
    code: 'uz',
    value: '998',
    label: 'Uzbekistan (Oʻzbekiston)',
  },
  {
    code: 'vu',
    value: '678',
    label: 'Vanuatu',
  },
  {
    code: 'va',
    value: '39',
    label: 'Vatican City (Città del Vaticano)',
  },
  {
    code: 've',
    value: '58',
    label: 'Venezuela',
  },
  {
    code: 'vn',
    value: '84',
    label: 'Vietnam (Việt Nam)',
  },
  {
    code: 'wf',
    value: '681',
    label: 'Wallis and Futuna (Wallis-et-Futuna)',
  },
  {
    code: 'eh',
    value: '212',
    label: 'Western Sahara (‫الصحراء الغربية‬‎)',
  },
  {
    code: 'ye',
    value: '967',
    label: 'Yemen (‫اليمن‬‎)',
  },
  {
    code: 'zm',
    value: '260',
    label: 'Zambia',
  },
  {
    code: 'zw',
    value: '263',
    label: 'Zimbabwe',
  },
  {
    code: 'ax',
    value: '358',
    label: 'Åland Islands',
  },
];

const CountrySelect = (props: Props) => {
  const { field, control, errors, setValue } = props;

  return (
    <div className={cn('col-span-2 lg:col-span-1')}>
      <Controller
        name={`${field.name}_name`}
        control={control}
        render={({ field: { value, onChange } }) => (
          <Autocomplete
            allowsCustomValue
            variant="bordered"
            defaultItems={listCodePhone}
            label={field.label}
            labelPlacement="outside"
            placeholder="Select an Option"
            size="lg"
            value={value ?? ''}
            errorMessage={errors[field.name]?.message}
            isInvalid={Boolean(errors[field.name])}
            onSelectionChange={(key: React.Key) => {
              if (key) {
                const filterList = listCodePhone.filter(
                  (value) => value.label === key
                );
                setValue('country', filterList[0].label);
                setValue('code', filterList[0].value);
              } else {
                setValue('country', '');
                setValue('code', '');
              }
              onChange(key);
            }}
          >
            {(item) => (
              <AutocompleteItem key={item.label} textValue={item.label}>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center justify-between">
                    <Avatar
                      alt={item.code}
                      //   className="flex-shrink-0"
                      className="w-6 h-6"
                      src={`https://flagcdn.com/${item.code}.svg`}
                    />
                    <div className="flex flex-col">
                      <span className="text-small">{item.label}</span>
                    </div>
                  </div>
                  <div className="flex flex-col  self-end ">
                    <span className="text-small">+{item.value}</span>
                  </div>
                </div>
              </AutocompleteItem>
            )}
          </Autocomplete>
        )}
      />
    </div>
  );
};

export default memo(CountrySelect);
