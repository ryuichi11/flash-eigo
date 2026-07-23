const questions = [
{
emoji:"🧑🎓🏫",
english:"I am a student.",
japanese:"私は学生です。"
},
{
emoji:"👦🤝😊",
english:"You are my friend.",
japanese:"あなたは私の友達です。"
},
{
emoji:"👨📏⬆️",
english:"He is tall.",
japanese:"彼は背が高いです。"
},
{
emoji:"👩😊❤️",
english:"She is happy.",
japanese:"彼女は幸せです。"
},
{
emoji:"🐱👉",
english:"It is a cat.",
japanese:"それは猫です。"
},
{
emoji:"👨‍👩‍👧💼😅",
english:"We are busy.",
japanese:"私たちは忙しいです。"
},
{
emoji:"👥👨‍🏫🏫",
english:"They are teachers.",
japanese:"彼らは先生です。"
},
{
emoji:"😋🍔🍟",
english:"I am hungry.",
japanese:"私はお腹が空いています。"
},
{
emoji:"👨😴💤",
english:"He is tired.",
japanese:"彼は疲れています。"
},
{
emoji:"👩❤️🌸",
english:"She is kind.",
japanese:"彼女は親切です。"
},
{
emoji:"👨🩺❓",
english:"Is he a doctor?",
japanese:"彼は医者ですか。"
},
{
emoji:"😊✅❓",
english:"Are you ready?",
japanese:"準備はできていますか。"
},
{
emoji:"👨💼❌",
english:"He isn't busy.",
japanese:"彼は忙しくありません。"
},
{
emoji:"👩😢❌",
english:"She isn't sad.",
japanese:"彼女は悲しくありません。"
},
{
emoji:"👨‍👩‍👧⏰✅",
english:"We aren't late.",
japanese:"私たちは遅れていません。"
},
{
emoji:"👥🏠❌",
english:"They aren't here.",
japanese:"彼らはここにいません。"
},
{
emoji:"😊👍✨",
english:"I'm fine.",
japanese:"私は元気です。"
},
{
emoji:"😄❤️👍",
english:"You're nice.",
japanese:"あなたは親切です。"
},
{
emoji:"☀️🌤️😎",
english:"It's sunny.",
japanese:"晴れています。"
},
{
emoji:"🤝😊👫",
english:"We're friends.",
japanese:"私たちは友達です。"
}
,
{
emoji:"👦⚽",
english:"I play soccer.",
japanese:"私はサッカーをします。"
},
{
emoji:"👧📚🇬🇧",
english:"You study English.",
japanese:"あなたは英語を勉強します。"
},
{
emoji:"👨⚾",
english:"He plays baseball.",
japanese:"彼は野球をします。"
},
{
emoji:"👩🎵❤️",
english:"She likes music.",
japanese:"彼女は音楽が好きです。"
},
{
emoji:"👨‍👩‍👧🍽️",
english:"We eat lunch.",
japanese:"私たちは昼食を食べます。"
},
{
emoji:"👥📺",
english:"They watch TV.",
japanese:"彼らはテレビを見ます。"
},
{
emoji:"📖😊",
english:"I read books.",
japanese:"私は本を読みます。"
},
{
emoji:"👨🏃💨",
english:"He runs fast.",
japanese:"彼は速く走ります。"
},
{
emoji:"👩🥤💧",
english:"She drinks water.",
japanese:"彼女は水を飲みます。"
},
{
emoji:"👨‍🍳🍳",
english:"We cook dinner.",
japanese:"私たちは夕食を作ります。"
},
{
emoji:"🎾❓",
english:"Do you play tennis?",
japanese:"あなたはテニスをしますか。"
},
{
emoji:"👨🍕❓",
english:"Does he like pizza?",
japanese:"彼はピザが好きですか。"
},
{
emoji:"🤷❌",
english:"I don't know.",
japanese:"私は知りません。"
},
{
emoji:"👨🥩❌",
english:"He doesn't eat meat.",
japanese:"彼は肉を食べません。"
},
{
emoji:"👩🚗❌",
english:"She doesn't drive.",
japanese:"彼女は運転しません。"
},
{
emoji:"🚭🙅",
english:"We don't smoke.",
japanese:"私たちはたばこを吸いません。"
},
{
emoji:"🏊❌",
english:"They don't swim.",
japanese:"彼らは泳ぎません。"
},
{
emoji:"✍️💌",
english:"I write letters.",
japanese:"私は手紙を書きます。"
},
{
emoji:"👨🚪➡️",
english:"He opens the door.",
japanese:"彼はドアを開けます。"
},
{
emoji:"👩🪟⬅️",
english:"She closes the window.",
japanese:"彼女は窓を閉めます。"
}
,
{
emoji:"🚶🏠⬅️",
english:"I went home.",
japanese:"私は家に帰りました。"
},
{
emoji:"👨🍳🍞",
english:"He ate breakfast.",
japanese:"彼は朝食を食べました。"
},
{
emoji:"👩🎾",
english:"She played tennis.",
japanese:"彼女はテニスをしました。"
},
{
emoji:"👨‍👩‍👧📺",
english:"We watched TV.",
japanese:"私たちはテレビを見ました。"
},
{
emoji:"👥🗼",
english:"They visited Tokyo.",
japanese:"彼らは東京を訪れました。"
},
{
emoji:"📚🇬🇧",
english:"I studied English.",
japanese:"私は英語を勉強しました。"
},
{
emoji:"👨🚗💴",
english:"He bought a car.",
japanese:"彼は車を買いました。"
},
{
emoji:"👩🚶⏰",
english:"She came early.",
japanese:"彼女は早く来ました。"
},
{
emoji:"👨‍👩‍👧🤝📅",
english:"We met yesterday.",
japanese:"私たちは昨日会いました。"
},
{
emoji:"👥🎬🍿",
english:"They saw a movie.",
japanese:"彼らは映画を見ました。"
},
{
emoji:"😴❓",
english:"Did you sleep well?",
japanese:"よく眠れましたか。"
},
{
emoji:"📞👨❓",
english:"Did he call you?",
japanese:"彼はあなたに電話しましたか。"
},
{
emoji:"🚶❌",
english:"I didn't go.",
japanese:"私は行きませんでした。"
},
{
emoji:"👨🚪❌",
english:"He didn't come.",
japanese:"彼は来ませんでした。"
},
{
emoji:"👩📚❌",
english:"She didn't study.",
japanese:"彼女は勉強しませんでした。"
},
{
emoji:"🏆❌",
english:"We didn't win.",
japanese:"私たちは勝ちませんでした。"
},
{
emoji:"🤔❌",
english:"They didn't know.",
japanese:"彼らは知りませんでした。"
},
{
emoji:"⏰🌅",
english:"I woke up early.",
japanese:"私は早起きしました。"
},
{
emoji:"👨🔑😊",
english:"He found a key.",
japanese:"彼は鍵を見つけました。"
},
{
emoji:"👩👜❌",
english:"She lost her bag.",
japanese:"彼女はバッグをなくしました。"
}
,
{
emoji:"🙋❤️🤝",
english:"I will help you.",
japanese:"私はあなたを助けます。"
},
{
emoji:"👨🚶➡️",
english:"He will come.",
japanese:"彼は来るでしょう。"
},
{
emoji:"👩📚✨",
english:"She will study.",
japanese:"彼女は勉強するでしょう。"
},
{
emoji:"✈️👨‍👩‍👧",
english:"We will travel.",
japanese:"私たちは旅行します。"
},
{
emoji:"🏆👥🎉",
english:"They will win.",
japanese:"彼らは勝つでしょう。"
},
{
emoji:"🙋❓🤝",
english:"Will you join us?",
japanese:"私たちと一緒に来ますか。"
},
{
emoji:"📞👨❓",
english:"Will he call?",
japanese:"彼は電話するでしょうか。"
},
{
emoji:"🧠❌",
english:"I won't forget.",
japanese:"私は忘れません。"
},
{
emoji:"👨⏰✅",
english:"He won't be late.",
japanese:"彼は遅れないでしょう。"
},
{
emoji:"👩😢❌",
english:"She won't cry.",
japanese:"彼女は泣かないでしょう。"
},
{
emoji:"🍣👨‍👩‍👧",
english:"We will eat sushi.",
japanese:"私たちは寿司を食べます。"
},
{
emoji:"🗾👥✈️",
english:"They will visit Japan.",
japanese:"彼らは日本を訪れるでしょう。"
},
{
emoji:"🎹📖💪",
english:"I will practice.",
japanese:"私は練習します。"
},
{
emoji:"👨🎤🎶",
english:"He will sing.",
japanese:"彼は歌うでしょう。"
},
{
emoji:"👩💃🎵",
english:"She will dance.",
japanese:"彼女は踊るでしょう。"
},
{
emoji:"▶️⏰",
english:"We will start now.",
japanese:"私たちは今始めます。"
},
{
emoji:"🏁⌛",
english:"They will finish soon.",
japanese:"彼らはもうすぐ終わります。"
},
{
emoji:"📖👀",
english:"I will read it.",
japanese:"私はそれを読みます。"
},
{
emoji:"🛒👨",
english:"He will buy it.",
japanese:"彼はそれを買うでしょう。"
},
{
emoji:"👩🍳🍽️",
english:"She will make dinner.",
japanese:"彼女は夕食を作るでしょう。"
}
,
{
emoji:"🙏😊",
english:"Thank you.",
japanese:"ありがとうございます。"
},
{
emoji:"😊👍",
english:"You're welcome.",
japanese:"どういたしまして。"
},
{
emoji:"🙋❗",
english:"Excuse me.",
japanese:"すみません。"
},
{
emoji:"😔🙏",
english:"I'm sorry.",
japanese:"ごめんなさい。"
},
{
emoji:"👋📅",
english:"See you tomorrow.",
japanese:"また明日。"
},
{
emoji:"🌅😊",
english:"Good morning.",
japanese:"おはようございます。"
},
{
emoji:"🌙😴",
english:"Good night.",
japanese:"おやすみなさい。"
},
{
emoji:"🤝😊",
english:"Nice to meet you.",
japanese:"はじめまして。"
},
{
emoji:"😊❓",
english:"How are you?",
japanese:"お元気ですか。"
},
{
emoji:"💪😊",
english:"I'm fine.",
japanese:"元気です。"
},
{
emoji:"👤❓",
english:"What's your name?",
japanese:"あなたの名前は何ですか。"
},
{
emoji:"👤📝",
english:"My name is Tom.",
japanese:"私の名前はトムです。"
},
{
emoji:"🌏❓",
english:"Where are you from?",
japanese:"どちらの出身ですか。"
},
{
emoji:"🇯🇵😊",
english:"I'm from Japan.",
japanese:"私は日本出身です。"
},
{
emoji:"🎵❤️",
english:"I like music.",
japanese:"私は音楽が好きです。"
},
{
emoji:"☕❓",
english:"Do you like coffee?",
japanese:"コーヒーは好きですか。"
},
{
emoji:"👍😊",
english:"Yes, I do.",
japanese:"はい、好きです。"
},
{
emoji:"👎😊",
english:"No, I don't.",
japanese:"いいえ、好きではありません。"
},
{
emoji:"☀️🍀",
english:"Have a nice day.",
japanese:"良い一日を。"
},
{
emoji:"👋⏰",
english:"See you later.",
japanese:"また後で。"
}
];
