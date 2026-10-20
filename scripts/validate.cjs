const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
const root=path.join(__dirname,'..');
let ctx={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,'data.js'),'utf8'),ctx);let hs=ctx.window.HADITHS;
assert.equal(hs.length,40);
let words=0,quiz=0;
for(let [i,h]of hs.entries()){
 assert.equal(h.id,i+1);for(let k of ['title','category','source','translation','explanation','example','action','syntax'])assert(h[k]&&h[k].trim(),`${i+1}: missing ${k}`);
 assert(h.page>=3&&h.page<=8);assert(h.words.length);assert.equal(h.arabic,h.words.map(w=>w.ar).join(' '));
 for(let w of h.words){for(let k of ['ar','ur','en','grammar'])assert(w[k]&&w[k].trim());assert(/[\u064B-\u0652]/.test(w.ar),`Unvocalized token: ${w.ar}`);words++}
 assert.equal(h.quiz.length,3);for(let q of h.quiz){assert(q.q&&q.why);assert.equal(q.options.length,4);assert.equal(new Set(q.options).size,4,`duplicate options at ${h.id}`);assert(q.answer>=0&&q.answer<4);quiz++}
 assert.equal(h.qa.length,8);assert.equal(h.goals.length,3);assert(h.starter&&h.summary&&h.misconception);for(let q of h.qa)assert(q.q&&q.a&&q.kind);assert.equal(new Set(h.qa.map(q=>q.q)).size,8);
}
for(let f of ['index.html','app.js','style.css','assets/fonts/JameelNooriNastaleeq.woff2','assets/fonts/Amiri-Regular.woff2'])assert(fs.existsSync(path.join(root,f)),f);
let extra={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,'supplement.js'),'utf8'),extra);assert.equal(extra.window.SUPPLEMENT.length,30);for(let r of extra.window.SUPPLEMENT){assert(r.start<=r.end);assert(r.text&&r.example&&r.activity);assert.equal(r.qa.length,4);assert(hs[r.related-1]);}assert.equal(words,309);assert.equal(quiz,120);
console.log(`PASS: ${hs.length} complete lessons, ${words} vocalized word entries, ${quiz} MCQs with distinct options, local fonts and complete source references.`);

let palettes={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,'palette.js'),'utf8'),palettes);assert.equal(new Set(palettes.window.LESSON_COLORS.map(c=>c.accent)).size,70);console.log('PASS: 70 unique lesson palettes; 440 short question-and-answer entries.');
