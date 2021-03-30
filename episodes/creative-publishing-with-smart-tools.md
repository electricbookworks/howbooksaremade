---
---

## Transcript

**Arthur Attwell**  0:03  
Hello, and welcome to How Books Are Made, a podcast about the art and science of making books. I'm Arthur Attwell.

**Arthur Attwell**  0:21  
Several years ago, a friend started a publishing company that only sold ebooks. He was a smart guy. But I couldn't see how this was a good idea. It was widely accepted that publishing companies made their money from print, and that despite the early promise, ebooks still barely made back their production costs. That company has just been shortlisted for Independent Publisher of the Year at the British Book Awards. They have repeatedly shown that sensible innovations in how you commission books, how you make them, how you market them, and how you pay authors can completely change the publishing game. I have never been happier to be proven wrong. 

**Arthur Attwell**  1:04  
That company is Canelo, a fiction publisher based in London. They're a team we should all be learning from. I'm going to do my best to rope their leaders in to chat to me here one by one. I'm starting out by talking to Nick Barreto, Canelos Chief Technology Officer. Like me, Nick is a tinkerer. We love building little machines that do the drudge work of book-making for us, so that we can put our brains to more creative things. We'll dig into some technical bits and pieces, and we'll do our best to keep it all accessible. Certainly, if you've ever worked in any part of book production before, you'll be right at home. 

**Arthur Attwell**  1:44  
Nick, it is such a pleasure to chat to you today. I'm especially excited about this episode, because we get to talk about some real technical nitty gritty, which is one of my happy places. Thanks for taking some time to join me on the podcast. 

**Nick Barreto**  1:57  
Oh, thanks very much. It's my pleasure. I mean, it's not often I get to talk about those sort of things either, so it should be a lot of fun.

**Arthur Attwell**  2:03  
From where I stand, I reckon you're one of the most inventive and successful technical leaders in commercial publishing right now. I'm looking forward to digging into some of those details, what you built at Canelo. To start, I wanted to ask about one of your earliest roles. Once upon a time you worked at Snowbooks, where one of my favorite people, Emma Barnes, was a co-founder and would soon start building the amazing Consonance publishing management software. Did you and she have an inkling back then that you both go on to become these pioneering role models for publishing tech?

**Nick Barreto**  2:41  
I don't know that I had any I had any inkling about anything at all back then. But yeah, Emma's absolutely one of my favorite people. We use Consonance at Canelo and it absolutely is a big part of how we're able to do a lot of what we do. I like to embarrass Emma when when we're doing like events together and stuff. Because, you know, it's not too much of a stretch of the truth when I say that she's one of the reasons I'm a programmer nowadays. 

**Arthur Attwell**  2:42  
Wow.

**Nick Barreto**  2:42  
You know, it was my first ever sort of job. Yeah, I think, I think on my very first day, I just had a book on XSLT thrown at me and said, ‘Can you take some of this onyx XML data and parse it so that InDesign will understand it’ as … InDesign didn't really understand nested XML very well. What we wanted to do was, you know, flow the data in so that you could create a catalogue. So you just needed to design, you know, a few pages and flow the data in but yeah, it has certainly come a long way from …  The two of us were sitting in the room and her son who was like, three years old or something at the time walking around, playing in between, between the two of us. Yeah, it's wonderful to watch Consonance grow and grow. The team there is wonderful as well.

**Arthur Attwell**  3:48  
That's amazing. It just goes to show if you just work alongside those people, what can happen, you know, in your mind how things get shared, but not just skills, but just the drive to do these kind of innovative, automated processes in publishing.

**Nick Barreto**  4:03  
Oh absolutely. I mean, that, the mindset, I think, was instilled in me from, from then on. I think I did a little bit of dabbling with automation at the time, but certainly, it absolutely came from Emma. The idea that, you know, there's so much admin, right? In publishing. There's so many things that you do, over, and over, and over, and actually, a lot of the time, this is what programmers do. If you find yourself doing something three or four times in a row, hmm, maybe I should automate that. The concept Emma talks about is, you know, you automate away everything, to free up your brain, to free up your time to do the things that matter. 

**Arthur Attwell**  4:38  
Yeah. 

**Nick Barreto**  4:39  
That's certainly been, you know, a really key thing at Canelo, you know, we don't want to spend time doing something, you know, sort of menial. We want to have the brain space to think and be innovative and make the decisions that matter.

**Arthur Attwell**  4:51  
Yeah, absolutely. So you've been automating publishing tasks pretty much your whole career? I know you were at Penguin working in some automation there.

**Nick Barreto**  5:00  
I wasn't at Penguin for very long, it was my placement because I did a Masters in publishing and so very early on in that it became clear that I was often the only person in the room, and sometimes the only person in the building, who had any sort of technical aptitude. You know, I don't have a programming background, you know, at all. Like most people in publishing, I've got, you know, a literature degree. I've become a programmer over time, just being self-taught. But, but there, you know, certainly I had an aptitude and the more I think back, probably, I don't know why people weren't advising me as a sort of a 17, 18 year old saying, hmm, maybe you should consider doing Computer Science at university. 

**Arthur Attwell**  5:37  
Yeah, that, well that placement at Penguin was funny, because I remember very clearly, somebody said, Oh, God, you know, the interns. Interns are potentially quite hard work for a company and a lot of, you know, drain, because you've got to give them something to do, you've got to give them something useful to do that's useful for you as well as for them. And, you know, it's the classic thing where people just think of a very time consuming, very menial task for an intern to do and think, okay, well, I don't have to worry about them for X number of hours it'll take them to deal with this. 

**Nick Barreto**  6:05  
Somebody must have really hated me, because they, the editor asked, was explaining how it was, it was a co-edition book, it was a book about dinosaurs, and the book was split into two parts. You know, the first part of it was all about, like, the different time periods that the Earth went through, right, geological ages, right. The second half of the book, which was actually two thirds of the book, but was about specific dinosaurs. The German co-edition partners decided that they didn't care about time periods of the earth, this is boring stuff, we want to, we want to see the dinosaurs. This is the cool stuff.

**Nick Barreto**  5:14  
Yeah, get to the pictures of the T-Rex. Yeah.

**Nick Barreto**  6:36  
Quite. The problem was that they lost however many it was, you know, I'm going to say 72 pages of the start of the book, which meant all of the index references would be incorrect for the page numbers. The editor told me, hey, go through the index, and, you know, update all the page references, please. And you know, they thought this is going to take me like a week, right? I mean, there's hundreds and hundreds of index entries. I very quickly started doing it like that, going through each one. I realised that, huh, hang on a second, the numbers are changing by the same amount every time. We've lost the same number of pages. Can I perform math to numbers in InDesign? And so I, you know, googled a bit and there was a, you know, you can you can automate stuff in InDesign. Somebody had done just that, written a little script that I downloaded and it let me perform math on numbers. It was actually really great because it actually let you do it, specifically, not just on any numerals, but numbers that were of a particular paragraph style. So I was able to target just the index entries and say, okay, don't touch the page numbers, don't touch, whatever, when somebody says 100,000 years ago, but in the style that is in the index, subtract, subtract 72 from everything.

**Arthur Attwell**  7:45  
Yeah.

**Nick Barreto**  7:46  
I came back, you know, whatever, two or three hours later, yeah, and said, here you go, I'm done. They looked at me like I was insane.

**Arthur Attwell**  7:52  
[LAUGHS] But that's the magic, right? That is what we're trying to do. Yeah.

**Nick Barreto**  7:57  
I use this example a lot when I give learn to code talks and stuff like that, because particularly in publishing, I feel that you don't have to, you don't have to necessarily write the code yourself, you just need to teach yourself to think like a programmer a little bit. More often than not, somebody else has already built something that will do what you want. A little bit of googling goes a very long way, or just the willingness to muck in and run a script will take you a really long way. You don't actually need to learn, you know, I probably hadn't written anything that you'd actually call a programme at the time at all. You know, I knew a little bit of know how HTML markup worked. But HTML isn't programming, right? It's just a document.

**Arthur Attwell**  8:32  
For sure. Yeah, it comes naturally to most editors, HTML. From there, you just need a little gateway drug to the automation step, some little thing that you managed to pull off yourself that can then grow to the next more challenging automated task. From there on, it can really grow. You went on to use those skills at Bloomsbury and Kirkus, and then about six years ago, you co-founded Canelo. That's gone on to become a real publishing force. At the time, I got to admit, I thought that Canelo sounded marvelous, but totally harebrained, because it was an ebook-only publishing company. I couldn't imagine how you were going to make that work financially, because I had seen that most publishers were barely making back their production money on ebooks. All the money was really coming from print. So for you as the CTO is that, in that co-founding team, what was the problem that you knew you had to solve in order to make that whole business work? 

**Nick Barreto**  9:31  
Well, I mean, it's a problem that we solved partially because we had a totally different model in the sense that we weren't paying advances and we were giving authors a much higher royalty, you know, and that, that model is, is true to this day. I'm not aware of any other publisher, anywhere in the world, that pays royalties as high as we do for authors on ebooks. Once certain escalators are hit, we'll pay 60% of the revenue that we received from an ebook to an author. 

**Arthur Attwell**  9:58  
That's amazing. 

**Nick Barreto**  9:59  
We know we can do that because after, you know, an ebook has covered its cost, right, you're talking about once the escalators have been hit, every single sales is sort of pure profit, because there's no marginal cost to produce an ebook. It's a digital file, you know, so the economics of that were clear to us. But definitely the other part of the thing, which is really what you're getting at, the cost to produce ebooks being high for publishers mostly is a result of the fact that they're working backwards from print. 

**Arthur Attwell**  10:27  
Right.

**Nick Barreto**  10:28  
When you're designing for print, you're designing sort of visual things. Typesetting has very long standing semantics that are communicated purely in a visual sort of way. But to work backwards from that to get to good quality semantic HTML can be quite hard work. All of the publishing tools that we're used to using, I was talking about InDesign earlier, are actually pretty terrible at generating good quality semantic HTML. Certainly, you know, if you're sort of designing for a print page. So you know, I knew that we were going to have to do things a little bit differently, because we were sort of skipping that step. We didn't, we didn't need to make a print book. 

**Nick Barreto**  11:06  
Word is also part of the problem, right. I mean, it suffers from the same issue that InDesign does, in that it's a presentational software, it sort of mimics a printed page. There's a lot of stuff that can go wrong with Word. Docx is actually XML in the background, but there's a lot of metadata that you can't necessarily see when you paste in or you copy and paste somewhere that can cause all kinds of problems, and that metadata carries through when you're trying to output HTML from Word. Word is terrible at making HTML, as is InDesign. The solution we eventually arrived at was markdown. Markdown was going to be how we were going to generate good quality, clean semantic HTML for our books.

**Arthur Attwell**  11:47  
For people who haven't come across markdown before, we're talking about plain text, but it's just structured in such a way that it's easy for humans to write, but it's also regular enough that a computer can then turn that into nice clean HTML very easily. Is that a fair description?

**Nick Barreto**  12:03  
That's about right. I mean, it's intended to be very, very simple indeed. Even plain text, which really was the key for us, because I knew that as soon as we were in markdown, there wasn't going to be anything else creeping in. Right? You can only see that, that's there. It's not like Word where if you copy and paste something, it might look like you wanted to. But secretly, there's an XML lang, you know, Arabic in there, that's gonna flip around the order of the, you know, the character is going left to right, suddenly. 

**Nick Barreto**  12:34  
We couldn't get away from using Word because authors use Word and we can't tell, we couldn't tell, our authors to author in a different way. We just needed to build a tool chain, around the things that we couldn't change, so that by the time an author delivered to us what they would normally deliver to anybody else, we could take that through our workflow and produce a really, really good quality, beautiful ebook, at relatively low cost. The transformation that we were sort of relying on from Word into into markdown from us is through a wonderful, wonderful tool, an open source one called Pandoc.

**Arthur Attwell**  13:08  
Then at that point, you're getting Word docs in from authors, because that's just the reality of our authors, right? 

**Nick Barreto**  13:13  
Yeah.

**Arthur Attwell**  13:13  
You're getting that into markdown with Pandoc immediately. So now you've got this nice, clean text. I suppose from that point, the jump from the text you have to an epub is entirely automated, right? So there's just no typesetting stage that needs to go to and fro between a designer via PDF to an editor.

**Nick Barreto**  13:33  
That's right. I mean, again, so ebooks are, you know, zipped containers of HTML, right. That's why I was, I started off talking about HTML is because that needed to be our end product. Markup within an ebook is the very same markup that you see on the web. There's great tools for building websites, but there are very few tools in the world for building ebooks, which is why we sort of had to work a way around that, but benefit from those wonderful tools that are sort of already out there.

**Arthur Attwell**  13:58  
The first publishing system you built on top of, Atavist, is that right? It was an online magazine publishing platform.

**Nick Barreto**  14:03  
That's sort of the final step in what I was just describing. When we'd started out with that Word document, and we'd take it through into into markdown, generate some nice, clean, good quality HTML, and Atavist, you know, was a magazine publishing tool. The key thing for us was they had the ability for you to output an epub right out of your, your projects. And so, you know, we were able to create a project in Atavist, load all of the HTML text in, had great template thing stuff and extensions, we could, we could write so that given the appropriate metadata, our copyright pages, because it's generated automatically, you didn't need to include that in the document. 

**Arthur Attwell**  14:41  
Nice.

**Nick Barreto**  14:42  
You know, all our title pages, everything was, was just generated, which was great because it meant that if say, the company moved address, to change all of our, you know, of our address in all our copyright pages, well, just to change it in one place and then output a new ebook was … It was a great tool and had the functionality really that we needed to output at the time, both an epub and a mobi file, which is what the format that Amazon uses for their ebooks, from that Atavist project source. We were also able to make changes in that one place and output both of those ebook files. We were able to do a little bit of tweaking in between for different retailers with our files, so that you know, the internal links, if we were trying to, you know, link to a store, would link to the specific store that the customer was already on. That kind of thing.

**Arthur Attwell**  15:28  
Oh, nice. Yeah, I just thought it was so clever to build it on top of Atavist. Because as someone smarter than me once told me, if you can get something off the shelf that does what you need, then absolutely. Get it off the shelf. That's what you did, which I thought was really, really smart. Of course, a couple of years ago, Canelo decided to venture into print publishing. I think it's kind of poetic, hilarious and wonderful to think of print as a risky move for a company. It's kind of totally opposite to the traditional world of publishing. 

**Nick Barreto**  16:01  
Oh, yeah. I mean, like, I talk about how we do publishing as a whole sort of totally backwards all the time. You know, we started off producing ebooks, we now produce mass market paperbacks, at some point we'll get to hardbacks, and we'll sort of completed the circle of instead of starting with the premium edition and working our way down, right, you know, starting with the mass market stuff and working our way up.

**Arthur Attwell**  16:25  
Of course, it meant you had to build something new because Atavist didn't get you high quality print layout, I believe. Getting high quality print lsyout from HTML is not as simple as getting an epub. So how did, how did you tackle that problem? What, what came next?

**Nick Barreto**  16:41  
Yeah, no, I mean, you're right, that, so Atavist had no concept of print, you know, it was something really built for the web. The ebooks were sort of a side part of it, actually. I mean, it was a wonderful tool for publishing, a lot of the longform articles in the in *The New York Times* were built with Atavist. 

**Arthur Attwell**  16:56  
Wow.

**Nick Barreto**  16:56  
You know, that's sort of what it was for. To start, start doing things in print was definitely an interesting journey. It was again, as far as I was aware, nobody had really done that before, started with an ebook and said, how do we take this into high quality, professionally, commercially viable, typeset PDF? The answer actually just came from Pandoc again, because Pandoc will transform documents from just about anything to just about anything else, frankly. There's a graph in the Pandoc project homepage, which is just this like preposterous jumble of lines, but one of those output formats was LaTeX. That proved to be more than enough to produce really, really wonderful, beautifully typeset books, at no cost at all, because it is entirely open source. For those who aren't familiar, you know, LaTeX is a typesetting engine that was broadly created for scientific publishing. There's a legendary computer programmer called Donald Knuth, who was unhappy with how mathematics and so on just looked awful. Fundamentally, you know, good typesetting is, is just math, right? You know, the number of lines you want to put on a page and the number of words per line, and so on, to get an aesthetic, pleasing layout was, yeah, this is just math. That's what InDesign is doing in the background, when you lay out some text, you know, all of that kerning and line lengths and lines per page, and so on. 

**Nick Barreto**  18:28  
So, you know, Donald Knuth knows way more about typesetting than I, he's probably forgotten way more about typesetting than I'll ever know. So, you know, to be able to benefit from the decades of typesetting expertise that are in LaTeX and open source community was wonderful, because and again, our books are simple, right? That helps. Our books are commercial fiction. At best there's a newspaper article snippet, or some characters sending text messages to each other or something. But we're not talking about figures with captions, or too many footnotes or pull out tables or anything like that, which LaTeX is also able to do because it is designed for that sort of scientific publications and it's one of the best ways for laying out equations, right, on the page as well. We don't even have to get anywhere near any of those more complex layouts. We really just needed very, very simple conversion from our epubs back into LaTeX.

**Arthur Attwell**  17:29  
Just automating what is traditionally the typesetting phase.

**Nick Barreto**  19:27  
That's absolutely right. Yeah, I mean, once we kind of got it working, I typeset the first 32 books we released in print all in a couple of hours.

**Arthur Attwell**  19:37  
Now that you've added print to your catalogue, if you can say, what's the sales impact been? How's print stood up to the ebook history that Canelo had?

**Nick Barreto**  19:45  
I mean it's been pretty transformative. We we always knew, well, the reason we started getting into is we knew there had to be some latent demand for our books in print. Right? We knew that there were readers of ours or potential readers of ours that wanted to read our books, but wanted to read them in print. And so, you know, like I said, we did 32 when we first started out, and you know, you were talking about print being a risk, and the reality is that it was because Canelo was almost entirely, you know, self-funded company. We didn't have big swathes of cash sitting around to pay for big print runs that we were going to maybe or not make a return on. And, you know, we grew organically from from our ebook sales, because as you say the marginal cost was nothing. So you know, the more we sold, the more money we had to spend. To move into print was sort of quite risky, especially when you start taking into account sale or return, which is how most books are sold in the UK. I mean, I don't know whether it's like that in South Africa. 

**Arthur Attwell**  20:39  
Yep, same thing. Just for those who don't know, in a sale or return situation, the bookshop will stock your books and put them on the shelf. But if they don't sell them, they're gonna send it back to you and you've got to credit that purchase, which means … It can be a nasty surprise, a few months after publication, to suddenly get a bunch of books back and you don't have the cash you thought you had. 

**Nick Barreto**  20:59  
That's right. And you know, and with, you know, the kinds of books that we sell or with other sorts of more mass market retailers, like, say, supermarkets, no they'll take your book, and they'll say, yeah, we'll stock 10,000 copies, but then they'll happily return 9000. You have to then give them all that money back, and you've got 9000 books, but what are you going to do with those? 

**Arthur Attwell**  21:18  
Absolutely.

**Nick Barreto**  21:19  
It's very difficult to do if you're, if you're a small business like ours. Which meant that we decided we weren't going to go down that road at all, you know, when we first did those first books, we exclusively did them from sale. We are working only with retailers that publishers in the UK calls sort of special sales or firm sale retailers. We were working with an agent who represents various publishers for special sales outlets. We thought, Oh, you know, there was 40 books that we sort of pitched that we said, okay, try and shop these around, see what the retail interests is, for these ones. 

**Nick Barreto**  21:52  
We thought they were gonna pick one, we thought they were gonna pick one book, and they'll say, okay, and we'll take, you know, I don't know, 10,000 copies or something like that. Of this one book. Instead, as I said, he came back and they wanted 32 out of those 40, and they wanted, I think, 370,000 or so I mean, across all those 32 units. So yeah, I mean, you know, we went from publishing no books, no books in print at all, to, you know, this was sort of late 2018 when when we released the first ones. To, you know, by the end of 2019 we'd sold a million paperbacks. 

**Arthur Attwell**  22:24  
That's extraordinary. 

**Nick Barreto**  22:26  
Yeah. We sold another million paperbacks in 2020. So yeah, it's been a wonderful surprise. You know, and it's still not, we're not going to become a print-focus business anytime soon. It's still a part of our business.

**Arthur Attwell**  22:38  
Now that print is also part of the output, what has changed about the workflow of how a book moves through the company now? What does the workflow look like, step by step?

**Nick Barreto**  22:47  
Yeah, so, when we first started doing print, you know, we were still working, you know, the way we were doing before, and the two sort of outputs were divergent, I suppose. They were unaware of one another, right? I mean, we just sort of needed a finished ebook to produce a print file. But once we'd done that, really, we had a LaTeX file, which we'd use to compile a PDF with, and an ebook, and they were sort of entirely separate entities.

**Arthur Attwell**  23:10  
Okay, then you've got a problem, because if you've got two master versions, which one do you make corrections to, you've got more to manage … So I assume that was a bit tricky.

**Nick Barreto**  23:17  
That's right. That's how most publishers function anyway, in that they've got, you know, an InDesign file, which is where they produce the PDF from, but they've also got an ebook file that if they're going to make corrections, they make corrections in both of those places. 

**Arthur Attwell**  23:28  
Yep. 

**Nick Barreto**  23:29  
Which is, you know, wasteful, and time consuming.

**Arthur Attwell**  23:32  
Absolutely.

**Nick Barreto**  23:32  
And potentially introduces more errors. I, you know, I wanted to move to a different way of working where, you know, we would be able to have a single source file for both our ebooks and our print versions, and that, that is exactly what we did. I built us, but on top of the input source technologies that we were already using, a tool chain, that meant that we don't, we don't actually use Atavist anymore. We've instead got our own software, where we rely on things like Pandoc and LaTeX, in the background, to produce both formats of our editions from the same single source file, which is now a markdown file in the first instance.

**Arthur Attwell**  24:14  
So you would store that markdown file on your computer, and then you would run your software on that markdown file, and in a matter of presumably seconds or minutes, you get an epub and a, or a PDF saved to your machine. Is that essentially the summary?

**Nick Barreto**  24:30  
That's essentially it. Definitely seconds. PDF compilation sometimes take a little bit longer, but certainly not running into minutes, a couple of minutes at most. You know, it's some software, but it's also like more like a framework or a tool chain. Naming things is really hard. I sort of started off with a joke name of Bukr - B, U, K, R - and never really came up with anything better. So it's called Bukr and …

**Arthur Attwell**  24:52  
That sort of name sticks. 

**Nick Barreto**  24:54  
Yeah, and that's the command you need to invoke and, let's say, it's a framework. So every book is its own sort of folder. They have a common structure to them. There's that markdown file, which is sort of the main source. We also store various different types of metadata in another file, which is sort of YAML, which is just an easy way of having a key value pair. Then and then, when you're in one of those directories in the command line, because of that structure, software is able to recognise, okay, this is a book project, this is where I need to look for these particular pieces of information that I need to compile whatever output format is being being requested.

**Arthur Attwell**  25:30  
Right, yeah.

**Nick Barreto**  25:31  
The other thing is, because markdown is just plain text, we're able to store and keep track of any changes using Git, which makes life very, very easy indeed, to, you know, not just store but then keep track of any changes, back things up in the cloud, to whoever it is needs, sharing, and so on and versioning. All of that becomes very, very easy. Indeed. 

**Arthur Attwell**  25:52  
Absolutely, yeah, we use Git for version control like that. It is an absolute godsend both when you want to see the history of a document, when you want to roll back to something, but also, as you say, for collaboration. Different people can work on the document, with very little risk of there being, you know, mismatched versions. You just never have a problem where two people work on the document at the same time and then you don't know, which is the latest version. Those problems just disappear, which is a big win. 

**Arthur Attwell**  26:19  
At Electric Book Works, my team, we've come to realise that technical publishing tools like this are incredibly powerful, but you do need some technical confidence to use them. I know that our team, none of us are originally developers, we're all literary people who found our way into this techie way of publishing. Nonetheless we've had to learn some skills. What kinds of skills do your team have or need to have to be able to actually use these tools?

**Nick Barreto**  26:47  
Well, that is an interesting question. It's true that the barrier to entry for making a book with Bukr is sort of higher than it would have been with Atavist, say, which had a web interface, you had to click a button and say, download ebook. That was one of the draws of us using Atavist  in the first instance, we thought, okay, well, this has an online editor. Our editing team can feel comfortable, if they want to update somewhere where somebody spotted a mistake in a book they can go in, and it's very, very familiar. It's a, you know, what-you-see-is-what-you-get editor. You say, Actually, no, I want this word bold, or that or whatever. 

**Nick Barreto**  27:18  
In practice, once we started working with that, it was, we found that none of our editors ever actually went in and did that. It was always always one of our production colleagues who did it instead, and so we decided that that was a feature we could probably live, live without. The technical skill necessary to use Bukr is actually probably not huge. I mean, it requires a certain degree of familiarity with command line, you need to be able to be comfortable typing in a command, and knowing sort of what directory you're in. 

**Arthur Attwell**  27:47  
Yeah. 

**Nick Barreto**  27:48  
Beyond that, it's more about understanding how Bukr itself works, and sort of, you know, where different settings live, and so on, and that's just about about communication, because well, I'm the one building it. We talk all the time between us in the production team about what features we might need, or currently don't support, that we're going to put into place, or what changes we might make to make our lives easier.

**Arthur Attwell**  28:09  
I know that with those kinds of tools, there must be a whole bunch of little helper scripts that are built into it. Can you give me an example of something that the tool can do that makes people's lives a little easier in the production process? 

**Nick Barreto**  28:20  
Oh, yeah, I mean, you know, we were sort of doing this a little bit already to our markdown files. You know, before we generated our HTML, but we've now made it a more fully formed feature of Bukr. We had these sort of quite long list of regular expressions we were searching for, to find common mistakes in manuscripts. This came out of the fact that, you know, a lot of the books we produced to begin with at Canelo were books that had been published in the past, which were, you know, quite successful, but we had never had a digital edition before. Talk about working backwards, you know, quite literally having to take pictures of a page and optical character recognition, to turn that picture into text, to then be able to produce an ebook out of this book, because it was originally published in the 80s, say. 

**Nick Barreto**  29:07  
Obviously, optical character recognition is great and computers are pretty good at recognising that on A on a page is an A, but it can make mistakes, especially with you know, on older texts, where the typesetting is maybe a little bit fuzzy, and you know, it was set in metal or something like that back then. And you know, digital files don't exist for this book at all, so you know, the thing might get, say, a quote mark turned the wrong way round. And so you know, the regular expression is for, you know, people who isn't who aren't too familiar with the term, is a set of programming markup that you can use to do very, very advanced find. You can search for patterns, rather than searching for the exact literal string of these three characters in that order. You can search for, for example, a close quote mark followed directly by a capital letter. That's probably meant to be an open quote mark, and so you can spot mistakes that are really, really hard for a proofreader to find, because it's like a needle in a haystack, but a computer will find that in seconds. 

**Nick Barreto**  30:07  
We had quite a long list of these regular expressions we were using to, you know, spot check and look out for errors. We sort of built that into, into Bukr now, so the moment that you ingest a new file, because the source is still Word, right, we're still working with authors. The moment you ingest that first file and create a new Bukr project, it'll run all of those regular expressions and give you a list of okay, these are the ones that I've found a match for. So you need to run these for yourself and see, because they're false positives. It might be that, you know, sure, there was an a close quote mark, and followed by a capital letter, well, maybe there's somebody with a compound name, O'Grady, or something, and so that was correct. So you know, you still need somebody to take a look at it. But it tells you what to look out for. It saves lots of lots of time.

**Arthur Attwell**  30:51  
Yeah, that's a huge headstart for a proofreader, just to have that, that reference list.

**Nick Barreto**  30:56  
Yeah, I mean, we don't even need to pass it on to the proofreader. We just mop up anything that might have been missed. The production team will just, you know, know to make those fixes.

**Arthur Attwell**  31:03  
I think that also speaks to another advantage of this kind of approach, which is that more than just one person can get involved in making the book better and fixing things up. You know, one of the drawbacks with a traditional approach is that all corrections get implemented by this one person, the typesetter, and all corrections are found and marked up by this one person, the proofreader. It's a far more collaborative process, this way of doing things.

**Nick Barreto**  31:26  
Yeah, yeah, it is. It creates some … A little bit of friction sometimes with colleagues who were used to working in other places, because obviously, we need to have a much more final version of the text in manuscript form, you know, we're not laying the text out on the page, then doing three, four rounds of corrections to that layed out page. We want the text to be much more final in the manuscript than perhaps other publishers do. But it certainly means that we make lots of gains, as well. 

**Arthur Attwell**  31:56  
Absolutely. I think that, you know, when I was starting out in publishing 20 years ago, it was unheard of that we would go to more than two or three sets of page proofs. Page proofs being the PDF that a typesetter produces. There was a huge pressure on us as editors to make sure that our MS Word manuscripts were so clean that the first typeset version of the book would already be almost error free. Somehow that pressure lessened over the years. Until now we're in an absurd situation where, I have friends in traditional publishing companies who regularly see six or seven rounds of page proofs, which essentially means that the manuscript wasn't clean in the first place when it was in MS Word. Seems kind of absurd.

**Nick Barreto**  32:37  
Yeah.

**Arthur Attwell**  32:38  
I think that that pressure to get the clean manuscript before it goes into production is always a good thing, irrespective of the technology you're using.

**Nick Barreto**  32:45  
No, I totally agree. Yeah, it can cause some, as I said, some friction, colleagues who … I mean, yeah, everybody adapts, but people are just used to working in a different way sometimes.

**Arthur Attwell**  32:54  
Zooming out as we get to time here … It's striking to me thinking about what you've achieved at Canelo, Emma Barnes with Snowbooks, building Consonance and Dave Cramer at Hachette USA, it's amazing what technically minded leadership can achieve. In a recent episode as well, I spoke to Raghunandan Malik, at EBC, who is now the director of a 500 person company, but just a few years ago, was coding their first ecommerce store himself. 

**Nick Barreto**  33:25  
That's wonderful.

**Arthur Attwell**  33:25  
Do you think this kind of innovation is possible in companies whose leadership are not technically skilled? How important do you think it is to be able to make both technical and leadership decisions at the same time, kind of in the same brain?

**Nick Barreto**  33:39  
Well, I mean, obviously, I think that's very important, because I do it all the time. I think it's really important for a company, well, I think it's important for a company to do it. I think if you're able to do that, you gain the ability to massively punch above your weight as a company. You can achieve things that only a much larger company would have been able to do otherwise. I think the thing that's most important, and it kind of circles back to what I said at the beginning, the thing that's most important isn't actually to be necessarily a programmer yourself. 

**Arthur Attwell**  34:11  
Sure. 

**Nick Barreto**  34:12  
But if you were to at least be sort of able to think like a programmer, to be just conversant enough to understand what might influence the technical decision. I mean, … it's quite difficult, I think, for people who aren't very familiar with technology to understand what's an easy problem to solve with computer science, and what's a hard problem to solve with computer science. 

**Arthur Attwell**  34:35  
Right. Yeah, and certainly what you've achieved that Canelo, I don't know, I think you've tackled some hard problems. That's, that's great to see. But also, you've tackled the interface between the technology and the people. I think to see what your small team has achieved just shows what you mean by punching above your weight if you can make those technical and leadership decisions at the same time. So yeah, well done for that.

**Nick Barreto**  34:59  
Aw, thanks, yeah. I mean, I certainly, like I said, I don't know, the a publisher of our size, that benefits from, from the sort of single source, you know, outputs. You know, I certainly know big companies and you know, Dave at Hachette was working on this all the time, but they have … They've got a wonderful workflow, but it's just, would be, you know, not affordable for a company of our size and scale. 

**Arthur Attwell**  35:19  
Right. 

**Nick Barreto**  35:20  
You know, what we have probably isn't quite as fully featured or quite as capable as how they're working. But it but it certainly gives us much, much more of capacity in that regard than than other companies our size, for sure.

**Arthur Attwell**  35:30  
Well, I continue to follow Canelo just amazed at what you guys have pulled off despite my early doubts. I've been thrilled to be proved completely wrong about what you can achieve with ebooks and now with print, so well done. Nick, thanks so much for spending all this time with me. I really enjoy talking about the technical nitty gritties, so thanks for sharing that.

**Nick Barreto**  35:50  
Yeah, so do I. Thank you very much, Arthur.

**Arthur Attwell**  35:53  
Thank you for listening. If you enjoyed this, it would be such a help if you would take a moment to share that with a friend or on social media. You'd be amazed at the effect that every share has on our downloads. So, thanks for that too. You can point people to [howbooksaremade.com](https://howbooksaremade.com), where I'll also post links to things we talked about today. We'll also add a transcript of this conversation there. 

**Arthur Attwell**  36:16  
How Books Are Made is supported by Electric Book Works, where my team and I make books all day, every day in sunny Cape Town, South Africa.


