// かわいい買い物メモ 紹介ページ
// 言語切替 (ja / en) ／ scroll ヘッダ ／ fade-in ／ ripple ／ lazy load ／ parallax
// （パズルちゃんの紹介ページ tsudatech/puzzle_chan_web・かわいい体重きろくの web/script.js を踏襲）
//
// 日本語は index.html に直接書いたものと同じ（言語を切りかえて戻すため）。文言を変えたら両方を直すこと。
// 英語の呼び名（Shopping Memo / Buddy / Faces / Running low? など）は、アプリの Shared/en.lproj/Localizable.strings に合わせてある。

const translations = {
  ja: {
    page_title: "かわいい買い物メモ - かうものメモを、ねこと いっしょに。",
    meta_description: "かわいい買い物メモは、白ねこのキャラといっしょに使う、iPhone 向けの買い物リストアプリです。かうものを入れて、おみせでチェックしていくと、キャラがいっしょによろこんでくれます。まとめて入れる・こえで入れる・そろそろ切れそうなもののおしらせ・テンプレート・かいわすれチェック・ホーム画面ウィジェットつき。ログインは不要です。",
    app_name: "かわいい買い物メモ",
    nav_faces: "キャラ",
    nav_features: "機能",
    nav_download: "ダウンロード",
    nav_privacy: "プライバシー",
    nav_contact: "お問い合わせ",
    hero_eyebrow: "ねこといっしょの買い物リスト",
    hero_title_line1: "かうものメモを、",
    hero_title_line2: "ねこと いっしょに。",
    hero_description: "かうものをメモして、おみせでチェックしていくだけ。メモするとうなずいて、かごに入れるとよろこんで、かいわすれがあると教えてくれる。ちいさな相棒といっしょに、まいにちのお買い物を。",
    hero_cta_download: "ダウンロード",
    hero_cta_faces: "キャラを見る",
    hero_bubble: "あと 2こ！ もうすこし",
    hero_item1: "たまご",
    hero_qty1: "1パック",
    hero_item2: "ぎゅうにゅう",
    hero_qty2: "1本",
    hero_item3: "キャベツ",
    hero_item4: "とりむね",
    hero_qty4: "2パック",
    faces_title: "キャラが いっしょに 反応",
    faces_lead: "かうものを入れたとき、かごに入れたとき、ぜんぶそろったとき。そのときどきで、白ねこの表情とセリフが変わります。",
    face_memo_title: "メモする",
    face_memo_text: "かうものを入れたとき",
    face_basketIn_title: "かごにいれた",
    face_basketIn_text: "チェックして、かごに入れたとき",
    face_cheer_title: "おうえん",
    face_cheer_text: "のこりが2こ以下になったとき",
    face_basketFull_title: "かごいっぱい",
    face_basketFull_text: "ぜんぶそろったとき",
    face_happy_title: "るんるん",
    face_happy_text: "さいしょのひとつを入れたとき、テンプレートを使ったとき",
    face_doya_title: "どやっ",
    face_doya_text: "まとめて5こ以上入れたとき、スタンプをもらったとき",
    face_surprise_title: "びっくり",
    face_surprise_text: "そろそろ切れそうなものがあるとき、かごが予算をこえたとき",
    face_trouble_title: "こまった",
    face_trouble_text: "まだかっていないものがあるのに、おわろうとしたとき",
    face_cozy_title: "ぬくぬく",
    face_cozy_text: "のこりを次にまわして、おわったとき",
    face_sleepy_title: "ねむい",
    face_sleepy_text: "朝（5〜10時）に開いたとき",
    face_nightcap_title: "ねぶそく",
    face_nightcap_text: "夜（22〜5時）に開いたとき",
    face_lonely_title: "さみしい",
    face_lonely_text: "3日以上あいて、ひさしぶりに開いたとき",
    faces_note: "ぜんぶで14の表情。キャラタブの「ひょうじょうずかん」で、どの顔を何回みせたか見られます。キャラに名前もつけられます。",
    features_title: "主な機能",
    feature_list_title: "カテゴリに じどうで ふりわけ",
    feature_list_text: "たまご・キャベツ・ティッシュなど、入れたものを売り場ごとにならべます。カテゴリをなおすと次からそこに入り、おみせごとに売り場の順番も変えられます。",
    feature_bulk_title: "まとめて・こえで いれる",
    feature_bulk_text: "LINE のメモなどを貼りつけると、「、」や改行でわけて一度に入れます。「2パック」「×2」「300g」もよみとります。iPhone の音声認識で、こえでも入れられます。",
    feature_soon_title: "そろそろ かも？",
    feature_soon_text: "いつも買う間隔から、そろそろ切れそうなものを教えてくれます。タップひとつでリストへ。",
    feature_tpl_title: "テンプレート",
    feature_tpl_text: "カレーの日・いつもの朝ごはんなど、いつものセットをタップひとつでリストへ。いまのリストからも作れます。",
    feature_finish_title: "かいわすれチェック",
    feature_finish_text: "「おかいもの おわり」で、のこっているものを確認。つぎも買うものは、次のリストにのこせます。",
    feature_stores_title: "おみせごとの リストと よさん",
    feature_stores_text: "スーパー・ドラッグストアなど、おみせごとにリストをわけられます。ねだんを入れると、かごの合計と予算までのこりがわかります。",
    feature_history_title: "りれきと しなもの いちらん",
    feature_history_text: "今月のお買い物の回数・使ったお金・よく買うもの。前のお買い物を、もう一度リストに入れることもできます。",
    feature_stamps_title: "スタンプちょう",
    feature_stamps_text: "はじめてのお買い物、かいわすれゼロ、予算内でおわった…など、12のスタンプがたまります。",
    feature_remind_title: "おかいものの日の おしらせ",
    feature_remind_text: "えらんだ曜日と時間に、キャラのことばで、のこりのリストをおしらせします。",
    feature_widget_title: "ホーム画面ウィジェット",
    feature_widget_text: "のこりの数・リストのなかみ・そろそろ切れそうなものが、アプリを開かなくても見られます。",
    feature_icloud_title: "iCloud に預けられる",
    feature_icloud_text: "リストやりれきを iCloud に置いておけば、機種を変えても続きから使えます。使うかどうかは選べます。",
    feature_privacy_title: "ログインなしですぐ使える",
    feature_privacy_text: "アカウントの登録はいりません。日本語と英語に対応し、データは端末の中に保存されます。",
    download_title: "ダウンロード",
    download_heading: "App Store で今すぐダウンロード",
    download_subheading: "iOS 18.0 以降の iPhone に対応しています。",
    download_button: "App Store でダウンロード",
    download_requirements_title: "システム要件",
    download_requirements_ios: "iOS 18.0 以降",
    download_requirements_devices: "iPhone／縦向き",
    download_requirements_language: "日本語・英語",
    download_requirements_iap: "App内課金なし（広告あり）",
    privacy_title: "プライバシーポリシー",
    privacy_handling_heading: "個人情報の取り扱いについて",
    privacy_handling_text: "かわいい買い物メモ（以下「本アプリ」）は、利用者のプライバシーを尊重し、個人情報の保護に努めます。本アプリはアカウント登録を必要とせず、開発者のサーバーを持ちません。",
    privacy_collect_heading: "扱う情報",
    privacy_collect_text: "本アプリが扱うのは、利用者が入力したかうもの（なまえ・かず・ねだん・メモ）、リスト・カテゴリ・テンプレート、お買い物のりれき、キャラの名前、スタンプの達成状況、および各種設定だけで、これらはすべて端末の中に留まります。開発者が氏名・メールアドレス・位置情報を収集することはありません。開発者自身は利用状況の解析（アナリティクス）を行いません。ただし、広告の表示のために、下記「広告について」のとおり Google が情報を扱います。",
    privacy_storage_heading: "情報の保存",
    privacy_storage_text: "データと設定は、端末内のアプリ専用の領域に保存されます。ホーム画面ウィジェットに表示するため、いまのリストの名前・のこりの品物・そろそろ切れそうなものなどを、同じ端末の中でアプリとウィジェットが共有する領域（App Group）にも保存します。",
    privacy_icloud_heading: "iCloud について",
    privacy_icloud_text: "設定で iCloud バックアップを有効にした場合に限り、リスト・カテゴリ・テンプレート・りれき・しなもの・スタンプ・キャラが iCloud のキーバリューストアに保存され、同じ Apple アカウントの端末間で同期されます。この同期は Apple の iCloud 上で完結し、開発者がその内容を参照することはできません。設定（表示・おしらせ）は同期されず、その端末にだけ残ります。",
    privacy_voice_heading: "マイクと音声認識について",
    privacy_voice_text: "「こえで いれる」を使うときだけ、マイクと iPhone の音声認識を使います。認識はできるかぎり端末の中で行い、端末が対応していない場合は、Apple の音声認識サービスに音声が送られることがあります（Apple のプライバシーポリシーに従って扱われます）。開発者が音声や認識した文字を受け取ることはありません。許可はあとから iOS の「設定」で変えられます。",
    privacy_notification_heading: "通知について",
    privacy_notification_text: "「おかいものの日の おしらせ」は、端末の中で予約するローカル通知です。通知のために情報を外部へ送ることはありません。通知を使うかどうかは、アプリの設定と iOS の「設定」で変えられます。",
    privacy_ads_heading: "広告について",
    privacy_ads_text: "本アプリは、Google LLC の広告配信サービス「Google AdMob」を使って、画面の下のバナー広告と、「おかいもの おわり」のあとの全画面広告を表示します。広告の配信のため、Google は端末の広告識別子（IDFA）、IP アドレスから推定されるおおよその位置、広告の表示やタップの状況、端末の情報などを収集・利用することがあります。IDFA を使うのは、アプリの中で表示される確認（App Tracking Transparency）で利用者が許可した場合だけです。許可しなかった場合も広告は表示されますが、利用者に合わせた広告にはなりません。許可はあとから iOS の「設定」の「プライバシーとセキュリティ」→「トラッキング」で変更できます。かうものやリスト・りれきなど、利用者が入力した内容が広告に使われることはありません。Google による情報の扱いは、Google のプライバシーポリシー（https://policies.google.com/privacy）と、Google のサービスを使うサイトやアプリから収集した情報の Google による使用（https://policies.google.com/technologies/partner-sites）をご覧ください。",
    privacy_network_heading: "外部との通信",
    privacy_network_text: "本アプリは、開発者のサーバーへ利用者のデータを送信しません。ネットワークを使うのは、広告の表示のための Google との通信と、利用者が iCloud バックアップを有効にした場合の Apple のサービスとの通信、上記のとおり音声認識で Apple のサービスを使う場合だけです。かうものやリストの内容が Google に送られることはありません。",
    privacy_delete_heading: "データの削除",
    privacy_delete_text: "アプリを削除すると、端末内に保存されたデータと設定が削除されます。iCloud バックアップを使っている場合、iCloud 上のデータは iOS の「設定」の iCloud の項目から削除できます。",
    privacy_children_heading: "お子さまの利用について",
    privacy_children_text: "本アプリは年齢を問わず利用できます。開発者は個人情報を収集せず、アプリ内購入もありません。広告は表示されます。",
    privacy_contact_heading: "お問い合わせ",
    privacy_contact_text_before: "プライバシーポリシーに関するご質問は、",
    privacy_contact_link: "お問い合わせ",
    privacy_contact_text_after: "までご連絡ください。",
    privacy_update: "最終更新: 2026 年 11 月",
    contact_title: "お問い合わせ",
    contact_intro: "アプリに関するご質問、バグ報告、機能要望などがございましたら、お気軽にお問い合わせください。",
    contact_email_heading: "📧 メール",
    contact_bug_heading: "🐛 バグ報告",
    contact_bug_text: "リストが消えた、キャラの表情がおかしいといった不具合を見つけたら、上記メールアドレスまで詳細をお送りください。",
    contact_feature_heading: "💡 機能要望",
    contact_feature_text: "こんな表情やスタンプがほしい、といったご要望もお待ちしています。",
    footer_copyright: "© 2026 かわいい買い物メモ. All rights reserved.",
  },
  en: {
    page_title: "Shopping Memo - Your shopping list, with a cat buddy.",
    meta_description: "Shopping Memo is an iPhone shopping list app with a white cat buddy. Add what you need and check things off at the store while your buddy cheers you on. Includes adding several items at once, voice input, running-low tips, templates, a forgot-something check and Home Screen widgets. No sign-in required.",
    app_name: "Shopping Memo",
    nav_faces: "Buddy",
    nav_features: "Features",
    nav_download: "Download",
    nav_privacy: "Privacy",
    nav_contact: "Contact",
    hero_eyebrow: "A shopping list with a cat buddy",
    hero_title_line1: "Your shopping list,",
    hero_title_line2: "with a cat buddy.",
    hero_description: "Jot down what you need and check it off at the store. Your little buddy nods when you add something, cheers when it goes in the basket, and lets you know if you forgot anything.",
    hero_cta_download: "Download",
    hero_cta_faces: "Meet the buddy",
    hero_bubble: "2 more! Almost there",
    hero_item1: "eggs",
    hero_qty1: "1 pk",
    hero_item2: "milk",
    hero_qty2: "1 btl",
    hero_item3: "cabbage",
    hero_item4: "chicken breast",
    hero_qty4: "2 pk",
    faces_title: "Your buddy reacts with you",
    faces_lead: "When you add something, put it in the basket, or get everything on your list, your white cat’s face and words change.",
    face_memo_title: "Taking notes",
    face_memo_text: "When you add something",
    face_basketIn_title: "In the basket",
    face_basketIn_text: "When you check something off",
    face_cheer_title: "Cheering",
    face_cheer_text: "When 2 or fewer items are left",
    face_basketFull_title: "Full basket",
    face_basketFull_text: "When you’ve got everything",
    face_happy_title: "Cheerful",
    face_happy_text: "Your first item, or using a template",
    face_doya_title: "Proud",
    face_doya_text: "Adding 5 or more at once, or earning a stamp",
    face_surprise_title: "Surprised",
    face_surprise_text: "Something’s running low, or the basket went over budget",
    face_trouble_title: "Troubled",
    face_trouble_text: "Trying to finish with things still left",
    face_cozy_title: "Cozy",
    face_cozy_text: "Finishing and keeping leftovers for next time",
    face_sleepy_title: "Sleepy",
    face_sleepy_text: "Opening the app in the morning (5–10 am)",
    face_nightcap_title: "Drowsy",
    face_nightcap_text: "Opening the app at night (10 pm–5 am)",
    face_lonely_title: "Lonely",
    face_lonely_text: "Opening the app after 3 or more days away",
    faces_note: "14 faces in all. The Faces collection in the Buddy tab shows how many times each one appeared. You can give your buddy a name, too.",
    features_title: "Features",
    feature_list_title: "Auto-sorted by category",
    feature_list_text: "Items like eggs, cabbage and tissues are grouped by aisle. Change a category once and it’s remembered next time. You can set the aisle order for each store.",
    feature_bulk_title: "Add several or by voice",
    feature_bulk_text: "Paste a note and items are split by commas or new lines and added at once. “2 packs”, “×2” and “300g” are read too. You can also add items by voice with iPhone speech recognition.",
    feature_soon_title: "Running low?",
    feature_soon_text: "Based on how often you buy things, it tells you what’s probably running low. Add it to your list in one tap.",
    feature_tpl_title: "Templates",
    feature_tpl_text: "Add your usual sets, like curry night or breakfast, in one tap. You can also make one from your current list.",
    feature_finish_title: "Forgot-something check",
    feature_finish_text: "Tap “Done shopping” to review what’s left, and keep anything you still need for next time.",
    feature_stores_title: "Lists and budgets per store",
    feature_stores_text: "Keep separate lists for the supermarket, drugstore and more. Enter prices to see your basket total and how much is left in your budget.",
    feature_history_title: "History and all items",
    feature_history_text: "See this month’s trips, spending and what you buy most. Put a past trip back on your list in one tap.",
    feature_stamps_title: "Stamp book",
    feature_stamps_text: "Collect 12 stamps for things like your first trip, forgetting nothing, and staying within budget.",
    feature_remind_title: "Shopping day reminders",
    feature_remind_text: "On the days and at the time you choose, your buddy reminds you what’s left on your list.",
    feature_widget_title: "Home Screen widgets",
    feature_widget_text: "See how many items are left, your list, and what’s running low without opening the app.",
    feature_icloud_title: "Back up to iCloud",
    feature_icloud_text: "Keep your lists and history in iCloud and pick up where you left off on a new phone. Backup is optional.",
    feature_privacy_title: "No sign-in needed",
    feature_privacy_text: "No account required. Available in Japanese and English, and your data is stored on your device.",
    download_title: "Download",
    download_heading: "Get it on the App Store",
    download_subheading: "For iPhone with iOS 18.0 or later.",
    download_button: "Download on the App Store",
    download_requirements_title: "Requirements",
    download_requirements_ios: "iOS 18.0 or later",
    download_requirements_devices: "iPhone / portrait",
    download_requirements_language: "Japanese and English",
    download_requirements_iap: "No in-app purchases (with ads)",
    privacy_title: "Privacy Policy",
    privacy_handling_heading: "How we handle your information",
    privacy_handling_text: "Shopping Memo (“the app”) respects your privacy and works to protect your personal information. The app does not require an account, and the developer does not operate any servers.",
    privacy_collect_heading: "Information the app handles",
    privacy_collect_text: "The app only handles the items you enter (names, quantities, prices and notes), your lists, categories and templates, your shopping history, your buddy’s name, your stamp progress, and your settings. All of this stays on your device. The developer does not collect your name, email address or location, and does not run its own analytics. However, Google handles some information to show ads, as described in “About ads” below.",
    privacy_storage_heading: "Where information is stored",
    privacy_storage_text: "Your data and settings are stored in the app’s private area on your device. To show the Home Screen widgets, the current list’s name, the items left, what’s running low and similar details are also saved to an area shared by the app and its widgets on the same device (App Group).",
    privacy_icloud_heading: "About iCloud",
    privacy_icloud_text: "Only if you turn on iCloud backup in Settings, your lists, categories, templates, history, items, stamps and buddy are saved to iCloud key-value storage and synced across devices signed in with the same Apple Account. This sync happens entirely within Apple’s iCloud, and the developer cannot see its contents. Settings (display and reminders) are not synced and stay on each device.",
    privacy_voice_heading: "About the microphone and speech recognition",
    privacy_voice_text: "The microphone and iPhone speech recognition are used only when you use “Add by voice”. Recognition happens on your device whenever possible. If your device doesn’t support it, your voice may be sent to Apple’s speech recognition service and handled under Apple’s privacy policy. The developer never receives your voice or the recognized text. You can change these permissions later in the iOS Settings app.",
    privacy_notification_heading: "About notifications",
    privacy_notification_text: "Shopping day reminders are local notifications scheduled on your device. No information is sent anywhere for notifications. You can turn reminders on or off in the app’s settings and in the iOS Settings app.",
    privacy_ads_heading: "About ads",
    privacy_ads_text: "The app uses Google AdMob, an ad service from Google LLC, to show a banner ad at the bottom of the screen and a full-screen ad after “Done shopping”. To deliver ads, Google may collect and use your device’s advertising identifier (IDFA), your approximate location estimated from your IP address, how ads are shown and tapped, and device information. The IDFA is used only if you allow it in the in-app prompt (App Tracking Transparency). If you don’t allow it, ads are still shown but are not personalized. You can change this later in iOS Settings under Privacy & Security → Tracking. The items, lists and history you enter are never used for ads. For how Google handles information, see Google’s Privacy Policy (https://policies.google.com/privacy) and How Google uses information from sites or apps that use our services (https://policies.google.com/technologies/partner-sites).",
    privacy_network_heading: "Network communication",
    privacy_network_text: "The app never sends your data to the developer’s servers. The only network communication is with Google to show ads, with Apple’s services when you turn on iCloud backup, and with Apple’s speech recognition service as described above. Your items and lists are never sent to Google.",
    privacy_delete_heading: "Deleting your data",
    privacy_delete_text: "Deleting the app removes the data and settings stored on your device. If you use iCloud backup, you can delete the data in iCloud from the iCloud section of the iOS Settings app.",
    privacy_children_heading: "Use by children",
    privacy_children_text: "The app can be used by people of any age. The developer collects no personal information, and there are no in-app purchases. The app shows ads.",
    privacy_contact_heading: "Contact",
    privacy_contact_text_before: "If you have any questions about this privacy policy, please ",
    privacy_contact_link: "contact us",
    privacy_contact_text_after: ".",
    privacy_update: "Last updated: November 2026",
    contact_title: "Contact",
    contact_intro: "If you have questions about the app, bug reports or feature requests, please feel free to get in touch.",
    contact_email_heading: "📧 Email",
    contact_bug_heading: "🐛 Bug reports",
    contact_bug_text: "If you find a problem, such as a list disappearing or a face that looks wrong, please send the details to the email address above.",
    contact_feature_heading: "💡 Feature requests",
    contact_feature_text: "We’d love to hear ideas for new faces or stamps, too.",
    footer_copyright: "© 2026 Shopping Memo. All rights reserved.",
  },
};

// ── Language ─────────────────────────────────────────────────────────────────

function detectLanguage() {
  const params = new URLSearchParams(window.location.search);
  if (params.has("lang")) return params.get("lang");
  const stored = localStorage.getItem("lang");
  if (stored) return stored;
  const browser = navigator.language || navigator.userLanguage || "ja";
  return browser.startsWith("ja") ? "ja" : "en";
}

function applyLanguage(lang) {
  const t = translations[lang] || translations["ja"];

  document.title = t["page_title"] || document.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", t["meta_description"] || "");

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n-key]").forEach((el) => {
    const key = el.getAttribute("data-i18n-key");
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  document.querySelectorAll("img[data-src-ja]").forEach((img) => {
    const src = lang === "ja" ? img.dataset.srcJa : img.dataset.srcEn;
    if (src) img.src = src;
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  localStorage.setItem("lang", lang);
}

// ── Scroll & Header ───────────────────────────────────────────────────────────

function initHeader() {
  const header = document.querySelector(".header");
  if (!header) return;

  let lastScrollY = window.scrollY;

  window.addEventListener(
    "scroll",
    () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        header.style.transform = "translateY(-100%)";
      } else {
        header.style.transform = "translateY(0)";
      }
      lastScrollY = currentScrollY;
    },
    { passive: true },
  );

  header.style.transition = "transform 0.3s ease";
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const headerHeight = document.querySelector(".header")?.offsetHeight ?? 70;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

// ── Intersection Observer (fade-in) ──────────────────────────────────────────

function initFadeIn() {
  const targets = document.querySelectorAll(
    ".face-card, .feature-card, .download-info, .download-requirements, .privacy-content, .contact-method",
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-up");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  // 最初から見えている範囲は隠さない。
  // 隠してしまうと、監視が働かない場面（プレビュー、拡張機能、古い環境）で
  // 画面の先頭から真っ白になってしまう。
  targets.forEach((el) => {
    if (el.getBoundingClientRect().top <= window.innerHeight) return;
    el.style.opacity = "0";
    observer.observe(el);
  });

  document.addEventListener("animationstart", (e) => {
    if (e.animationName === "fadeInUp") {
      e.target.style.opacity = "";
    }
  });

  // 保険。何らかの理由で監視が働かなくても、必ず見える状態に戻す
  setTimeout(() => {
    targets.forEach((el) => {
      if (el.style.opacity === "0") el.style.opacity = "";
    });
  }, 4000);
}

// ── Ripple on buttons ─────────────────────────────────────────────────────────

function initRipple() {
  document.querySelectorAll(".btn, .app-store-placeholder").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement("span");
      const size = Math.max(rect.width, rect.height);
      ripple.style.cssText = `
        position:absolute;width:${size}px;height:${size}px;
        left:${e.clientX - rect.left - size / 2}px;
        top:${e.clientY - rect.top - size / 2}px;
        background:rgba(255,255,255,0.35);border-radius:50%;
        transform:scale(0);animation:ripple 0.5s linear;pointer-events:none;
      `;
      btn.style.position = "relative";
      btn.style.overflow = "hidden";
      btn.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove());
    });
  });

  const style = document.createElement("style");
  style.textContent = `@keyframes ripple{to{transform:scale(2.5);opacity:0}}`;
  document.head.appendChild(style);
}

// ── Lazy images ───────────────────────────────────────────────────────────────

function initLazyImages() {
  const images = document.querySelectorAll("img.lazy");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.remove("lazy");
          observer.unobserve(img);
        }
      });
    });
    images.forEach((img) => observer.observe(img));
  }
}

// ── Parallax (hero) ───────────────────────────────────────────────────────────

function initParallax() {
  const hero = document.querySelector(".hero");
  if (!hero) return;
  window.addEventListener(
    "scroll",
    () => {
      const offset = window.scrollY * 0.3;
      hero.style.backgroundPositionY = `${offset}px`;
    },
    { passive: true },
  );
}

// ── Init ──────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  const lang = detectLanguage();
  applyLanguage(lang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });

  initHeader();
  initSmoothScroll();
  initFadeIn();
  initRipple();
  initLazyImages();
  initParallax();
});
