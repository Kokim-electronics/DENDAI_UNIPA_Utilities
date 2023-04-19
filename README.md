## DENDAI_UNIPA_Utilities-v3.0.1

### Ⅰ.機能
1. 自動ログイン
   - 毎度毎度の「ログイン」ボタン押下の必要が無くなる
2. 未読タブの自動選択
   - ログイン直後に未読掲示が見れるようになる
3. 「学生時間割表」「授業時間割表」のスタイル変更
   - 修得科目を設定することで、あの見にくい授業時間割から修得済み科目を非表示にすることが可能
   - 各科目をタブ化することですっきりした見た目に
4. 「シラバス照会」「成績照会」のボタン位置変更
5. 後期期間中、前期の時間割を非表示に（学生時間割表）
6. (v2.1.0からの変更点)添付資料のプレビューを廃止
7. (v2.2.0から長時間・別タブの再ログインを一部実装
8. (v3.0.0から軽微な変更)

### Ⅱ.導入

参考 : <br>[カスタムの Chrome アプリと拡張機能を作成して公開する - Chrome Enterprise and Education ヘルプ](https://support.google.com/chrome/a/answer/2714278?hl=ja)

1. [Releases](https://github.com/Kokim-electronics/DENDAI_UNIPA_Utilities/releases) - Assets - `DENDAI_UNIPA_Utilities-vx.x.x.zip`からDL

3. `chrome://extensions/` or `edge://extensions/`へアクセス、デベロッパーモード(Chrome)・開発者モード(Edge)、オン

4. `C:\Users\hoge\Documents\Github`あたりにでも解凍し`DENDAI_UNIPA_Utilities-vx.x.x`フォルダ(manifest.jsonが入っているフォルダ以外はエラーを吐きます)をD&D

5. 設定画面にて学籍番号と共通パスワードを設定
6. 前期後期を設定
7. 科目名は時間割から消したい科目名をカンマ区切りで入力
   - 指定した科目名から始まる科目を非表示にします
   - 「微分積分学および演習」を指定すると、「微分積分学および演習I」「微分積分学および演習II」共に非表示になります。ご留意ください。

### Ⅲ.備考
- **授業アンケートや履修登録時には拡張機能をオフにしてください。**
- ブラウザ右上のパズルピースアイコンから本拡張機能をピン止めするとアクセスが楽に。
- サポートは[#DENDAI_UNIPA_Utilities](https://twitter.com/search?q=%23DENDAI_UNIPA_Utilities)にてツイート

### Ⅳ.参考資料
BearOffice/WebClass-Extension: ウェブクラス(WebClass)の利便性を向上できるChrome拡張機能． https://github.com/BearOffice/WebClass-Extension 

更新日:2023/4/19 11:10