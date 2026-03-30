export const languages = {
  en: 'English',
  ja: '日本語',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'en';

export const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.howItWorks': 'How It Works',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.pricing': 'Pricing',
    'nav.support': 'Support',
    'nav.download': 'Download',
    'nav.signIn': 'Sign In',

    // Hero
    'hero.tagline': 'Your recipes, finally organized.',
    'hero.headline': 'Save any recipe. Cook without the chaos.',
    'hero.subheadline': 'Paste a URL, snap a photo, or scan a handwritten card. Kitchenote keeps your recipes clean, organized, and ready to cook—online or off.',
    'hero.cta': 'Download Free',
    'hero.cta.secondary': 'See How It Works',

    // Pain Points
    'pain.title': 'Sound familiar?',
    'pain.subtitle': 'Recipe chaos is real. We built Kitchenote to fix it.',
    'pain.bookmark': 'You saved it somewhere. But where?',
    'pain.scroll': '2,000 words before the ingredients',
    'pain.screenshots': 'Screenshots lost in your camera roll',
    'pain.tabs': '"I\'ll definitely make this" (you won\'t find it again)',

    // Features
    'features.title': 'More cooking, less searching',
    'features.subtitle': 'Everything you need to save, organize, and actually cook.',
    'features.import.title': 'Save any recipe in seconds',
    'features.import.desc': 'URL, photo, or handwritten card—it all works. We grab just the good stuff: ingredients, steps, photos. No ads, no life stories.',
    'features.organize.title': 'Find any recipe instantly',
    'features.organize.desc': 'Folders, tags, and search that actually works. Your Tuesday taco recipe? Two seconds to find it.',
    'features.cook.title': 'Cook without distractions',
    'features.cook.desc': 'Big text, one step at a time, screen stays on. Timers built in. Your phone becomes your sous chef.',
    'features.scale.title': 'Cooking for 2? Or 12?',
    'features.scale.desc': 'Tap to adjust servings. Every ingredient recalculates instantly. No mental math with floury hands.',

    // How It Works
    'how.title': 'Ridiculously simple',
    'how.subtitle': 'Three steps. That\'s it.',
    'how.step1.title': 'Find a recipe',
    'how.step1.desc': 'Anywhere on the web. Food blog, YouTube, wherever.',
    'how.step2.title': 'Share to Kitchenote',
    'how.step2.desc': 'Tap share, select Kitchenote. Or just paste the URL.',
    'how.step3.title': 'Cook and enjoy',
    'how.step3.desc': 'Your recipe is saved, organized, and ready whenever you are.',

    // Testimonials
    'testimonials.title': 'People seem to like it',
    'testimonials.subtitle': 'But don\'t just take our word for it.',

    // Differentiators
    'diff.title': 'What makes Kitchenote different',
    'diff.subtitle': 'Built for home cooks who collect recipes from everywhere.',
    'diff.offline.title': 'Works offline. Always.',
    'diff.offline.desc': 'Every recipe lives on your device. No WiFi in the kitchen? No problem.',
    'diff.units.title': 'Units that make sense',
    'diff.units.desc': 'Smart conversion—weights go metric, but tablespoons stay tablespoons. Japanese units work too.',
    'diff.ocr.title': 'Scan handwritten recipes',
    'diff.ocr.desc': 'Point your camera at grandma\'s recipe card. We\'ll digitize it.',
    'diff.versions.title': 'Your version, their version',
    'diff.versions.desc': 'Share a cookbook with family. Everyone can tweak recipes their way without changing the original.',
    'diff.focus.title': 'Real cooking mode',
    'diff.focus.desc': 'Not just bigger text. Step-by-step focus, built-in timers, progress that saves when you leave.',
    'diff.free.title': 'Actually free',
    'diff.free.desc': 'No 8-recipe limit. No premium paywall for basic features. Just use it.',

    // International
    'intl.title': 'Recipes from anywhere',
    'intl.subtitle': 'Import from English and Japanese sites. Units convert automatically.',
    'intl.en': 'English Recipes',
    'intl.ja': 'Japanese Recipes (日本語)',

    // CTA
    'cta.title': 'Ready to actually find your recipes?',
    'cta.subtitle': 'Join home cooks who\'ve escaped bookmark chaos.',
    'cta.button': 'Download for Free',
    'cta.note': 'Free forever. No account required.',

    // Footer
    'footer.tagline': 'Making home cooking a little less chaotic.',
    'footer.product': 'Product',
    'footer.company': 'Company',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.copyright': '© 2026 Boldoath KK. Made with love (and lots of recipe testing).',

    // About
    'about.title': 'About Kitchenote',
    'about.story.title': 'The story',
    'about.mission.title': 'Our mission',

    // Support
    'support.title': 'Support',
    'support.faq.title': 'Frequently Asked Questions',
    'support.contact.title': 'Still need help?',
    'support.contact.desc': 'We\'re here for you. Drop us a line and we\'ll get back to you soon.',
    'support.contact.button': 'Contact Us',

    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'Tips, recipes, and musings on cooking from home.',
    'blog.readMore': 'Read more',

    // Common
    'common.learnMore': 'Learn more',
    'common.getStarted': 'Get started',
    'common.backHome': 'Back to home',
  },

  ja: {
    // Navigation
    'nav.home': 'ホーム',
    'nav.features': '機能',
    'nav.howItWorks': '使い方',
    'nav.about': 'About',
    'nav.blog': 'ブログ',
    'nav.pricing': '料金',
    'nav.support': 'サポート',
    'nav.download': 'ダウンロード',
    'nav.signIn': 'ログイン',

    // Hero
    'hero.tagline': 'レシピ、やっと整理できます。',
    'hero.headline': 'どんなレシピも保存。すぐに料理。',
    'hero.subheadline': 'URLを貼る、写真を撮る、手書きをスキャン。どんな方法でも、Kitchenoteがきれいに整理。オフラインでもいつでも使えます。',
    'hero.cta': '無料ダウンロード',
    'hero.cta.secondary': '使い方を見る',

    // Pain Points
    'pain.title': 'こんな経験ありませんか？',
    'pain.subtitle': 'レシピの混乱、Kitchenoteが解決します。',
    'pain.bookmark': '保存したはず。でもどこ？',
    'pain.scroll': '材料まで2,000文字スクロール',
    'pain.screenshots': 'スクショがカメラロールで行方不明',
    'pain.tabs': '「いつか作る」タブ、もう見つからない',

    // Features
    'features.title': '探す時間を減らして、料理の時間を増やす',
    'features.subtitle': '保存、整理、調理に必要なすべてが揃っています。',
    'features.import.title': '秒で保存',
    'features.import.desc': 'URL、写真、手書きメモ、何でもOK。材料と手順だけを抽出。広告もエッセイも一切なし。',
    'features.organize.title': 'すぐ見つかる',
    'features.organize.desc': 'フォルダ、タグ、ちゃんと動く検索。火曜のタコスレシピ？2秒で見つかります。',
    'features.cook.title': '集中して料理',
    'features.cook.desc': '大きな文字、一度に1ステップ、画面は常にオン。タイマーも内蔵。スマホが頼れる相棒に。',
    'features.scale.title': '2人分？12人分？',
    'features.scale.desc': 'タップで人数を変更。全材料が自動計算。小麦粉まみれの手で暗算する必要なし。',

    // How It Works
    'how.title': 'びっくりするほどかんたん',
    'how.subtitle': 'たった3ステップ。それだけです。',
    'how.step1.title': 'レシピを見つける',
    'how.step1.desc': 'ウェブのどこからでも。料理ブログ、YouTube、どこでもOK。',
    'how.step2.title': 'Kitchenoteにシェア',
    'how.step2.desc': '共有ボタンをタップして、Kitchenoteを選択。またはURLをコピペ。',
    'how.step3.title': '料理を楽しむ',
    'how.step3.desc': 'レシピは保存・整理され、いつでもすぐに使えます。',

    // Testimonials
    'testimonials.title': '使っている方の声',
    'testimonials.subtitle': '実際に使っている方からの感想です。',

    // Differentiators
    'diff.title': 'Kitchenoteが選ばれる理由',
    'diff.subtitle': 'あらゆるところからレシピを集める料理好きのために。',
    'diff.offline.title': 'オフラインでも。いつでも。',
    'diff.offline.desc': 'すべてのレシピがデバイスに保存。キッチンにWiFiがなくても大丈夫。',
    'diff.units.title': '単位も賢く変換',
    'diff.units.desc': '重さはメートル法、でも大さじはそのまま。日本の単位も正しく対応。',
    'diff.ocr.title': '手書きレシピもスキャン',
    'diff.ocr.desc': 'おばあちゃんのレシピカードにカメラを向けるだけ。デジタル化します。',
    'diff.versions.title': 'それぞれのアレンジ',
    'diff.versions.desc': '家族でレシピブックを共有。オリジナルを変えずに、各自がアレンジ可能。',
    'diff.focus.title': '本当のクックモード',
    'diff.focus.desc': '文字が大きいだけじゃない。ステップ集中表示、タイマー内蔵、途中で離れても進捗を保存。',
    'diff.free.title': '本当に無料',
    'diff.free.desc': '8レシピ制限なし。基本機能に課金なし。普通に使えます。',

    // International
    'intl.title': 'どこのレシピでも',
    'intl.subtitle': '日本語・英語サイトからインポート。単位も自動変換。',
    'intl.en': '英語レシピ',
    'intl.ja': '日本語レシピ',

    // CTA
    'cta.title': 'レシピ、ちゃんと見つけたくないですか？',
    'cta.subtitle': 'ブックマーク地獄から抜け出した料理好きの仲間入りを。',
    'cta.button': '無料でダウンロード',
    'cta.note': 'ずっと無料。アカウント登録も不要。',

    // Footer
    'footer.tagline': '家庭料理を、もうちょっとラクに。',
    'footer.product': 'プロダクト',
    'footer.company': '会社情報',
    'footer.legal': '法的情報',
    'footer.privacy': 'プライバシーポリシー',
    'footer.terms': '利用規約',
    'footer.copyright': '© 2026 Boldoath KK. 愛情込めて作りました（レシピのテストもたくさん）。',

    // About
    'about.title': 'Kitchenoteについて',
    'about.story.title': 'ストーリー',
    'about.mission.title': 'ミッション',

    // Support
    'support.title': 'サポート',
    'support.faq.title': 'よくある質問',
    'support.contact.title': 'まだお困りですか？',
    'support.contact.desc': 'お気軽にお問い合わせください。できるだけ早くお返事いたします。',
    'support.contact.button': 'お問い合わせ',

    // Blog
    'blog.title': 'ブログ',
    'blog.subtitle': '料理のコツ、レシピ、家庭料理についてのあれこれ。',
    'blog.readMore': '続きを読む',

    // Common
    'common.learnMore': '詳しく見る',
    'common.getStarted': 'はじめる',
    'common.backHome': 'ホームに戻る',
  },
} as const;

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: keyof typeof translations.en): string {
    return translations[lang][key] || translations.en[key] || key;
  };
}

export function getLocalizedPath(path: string, lang: Language): string {
  const cleanPath = path.replace(/^\/(en|ja)/, '');
  return `/${lang}${cleanPath || '/'}`;
}
