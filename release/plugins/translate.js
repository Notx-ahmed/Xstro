"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const src_1 = require("../src");
(0, src_1.Module)({
  name: 'trt',
  fromMe: false,
  type: 'tools',
  desc: 'Translate a text from one language to another with ease'
}, async (message, match) => {
  const langCode = match.trim();
  const targetLang = languages.find(lang => lang.toLowerCase().endsWith(`- ${langCode.toLowerCase()}`));
  if (!targetLang) return await message.reply(`Supported Languages:\n\nUsage: ${message.prefix}trt en\n\n\n${languages.join('\n')}`);
  if (!message.quoted || !message.quoted?.text) return message.reply('Reply to a text message to translate it.');
  const textToTranslate = message.quoted.text;
  const targetLangCode = targetLang.split(' - ')[1];
  const res = await src_1.XSTRO.translate(textToTranslate, targetLangCode);
  if (!res) return await message.reply('Translation failed');
  return await message.send(res);
});
const languages = ['Afrikaans - af', 'Albanian - sq', 'Amharic - am', 'Arabic - ar', 'Armenian - hy', 'Azerbaijani - az', 'Basque - eu', 'Belarusian - be', 'Bengali - bn', 'Bosnian - bs', 'Bulgarian - bg', 'Catalan - ca', 'Cebuano - ceb', 'Chichewa - ny', 'Chinese (Simplified) - zh-CN', 'Chinese (Traditional) - zh-TW', 'Corsican - co', 'Croatian - hr', 'Czech - cs', 'Danish - da', 'Dutch - nl', 'English - en', 'Esperanto - eo', 'Estonian - et', 'Filipino - tl', 'Finnish - fi', 'French - fr', 'Frisian - fy', 'Galician - gl', 'Georgian - ka', 'German - de', 'Greek - el', 'Gujarati - gu', 'Haitian Creole - ht', 'Hausa - ha', 'Hawaiian - haw', 'Hebrew - he', 'Hindi - hi', 'Hmong - hmn', 'Hungarian - hu', 'Icelandic - is', 'Igbo - ig', 'Indonesian - id', 'Irish - ga', 'Italian - it', 'Japanese - ja', 'Javanese - jw', 'Kannada - kn', 'Kazakh - kk', 'Khmer - km', 'Kinyarwanda - rw', 'Korean - ko', 'Kurdish (Kurmanji) - ku', 'Kyrgyz - ky', 'Lao - lo', 'Latin - la', 'Latvian - lv', 'Lithuanian - lt', 'Luxembourgish - lb', 'Macedonian - mk', 'Malagasy - mg', 'Malay - ms', 'Malayalam - ml', 'Maltese - mt', 'Maori - mi', 'Marathi - mr', 'Mongolian - mn', 'Myanmar (Burmese) - my', 'Nepali - ne', 'Norwegian - no', 'Odia (Oriya) - or', 'Pashto - ps', 'Persian - fa', 'Polish - pl', 'Portuguese - pt', 'Punjabi - pa', 'Romanian - ro', 'Russian - ru', 'Samoan - sm', 'Scots Gaelic - gd', 'Serbian - sr', 'Sesotho - st', 'Shona - sn', 'Sindhi - sd', 'Sinhala - si', 'Slovak - sk', 'Slovenian - sl', 'Somali - so', 'Spanish - es', 'Sundanese - su', 'Swahili - sw', 'Swedish - sv', 'Tajik - tg', 'Tamil - ta', 'Tatar - tt', 'Telugu - te', 'Thai - th', 'Turkish - tr', 'Turkmen - tk', 'Ukrainian - uk', 'Urdu - ur', 'Uyghur - ug', 'Uzbek - uz', 'Vietnamese - vi', 'Welsh - cy', 'Xhosa - xh', 'Yiddish - yi', 'Yoruba - yo', 'Zulu - zu'];