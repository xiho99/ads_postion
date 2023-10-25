import { createI18n } from 'vue-i18n';
import allLang from './all_lang';
import { Local } from '../utils/storage';

// 定义语言国际化内容
/**
 * 说明：
 * /src/i18n/lang 下的 ts 为框架的国际化内容
 * /src/i18n/pages 下的 ts 为各界面的国际化内容
 */
const messages = {
	'zh': allLang.zh,
	'en': allLang.en,
};

let lang = Local.get('lang');
// 导出语言国际化
export const i18n = createI18n({
	silentTranslationWarn: true,
	missingWarn: false,
	silentFallbackWarn: true,
	fallbackWarn: false,
	locale: lang || 'zh',
	fallbackLocale: 'zh',
	messages,
});
export const changeToLang = (e: string) => {
	if (!e) return;
	let index = langList.findIndex(i => i.key == e);
	if (index < 0) return;
	i18n.global.locale = e;
	Local.set('lang', e);
}

export const langList = [
	{ name: '中文', key: 'zh', coin: 'RMB' },
	{ name: 'English', key: 'en', coin: 'USD' },
]
