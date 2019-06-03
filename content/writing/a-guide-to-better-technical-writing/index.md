---
title: "A Guide to Better Technical Writing"
author: "Wade Christensen"
date: "2019-05-15"
summary: "With a focus on clarity and efficiency, this article is a starting place for anyone with the desire to improve as a technical writer."
keywords: "writing technology technical blog documentation"
---

## Outline

- [Introduction](#introduction)
- [Write Short](#write-short)
- [Be Explicit, Be Clear](#be-explicit-be-clear)
- [Avoid Assumptions](#avoid-assumptions)
- [A Preflight Checklist](#a-preflight-checklist)
- [Breaking the Rules](#breaking-the-rules)
- [Recommended Resources](#recommended-resources)
- [Citations](#citations)

## Introduction

Update the docs. Send that email. Would you like to submit a post to the company blog? Oh, and a conference talk—you would love to give a conference talk, right?

We write constantly, and whether we view it as a chore or a joy depends on the depth of our writers' toolboxes.

After nearly five years as a producer at Treehouse, an online school teaching web development, I have observed several patterns among new technical writers. This article, which is loosely based on training materials I've created in the past, is meant to help you break out of those common patterns and write confidently.

### Disclaimers

1. This article is not a thorough grammar lesson. If you are unclear on the difference between dependent and independent clauses, or you need an overview of punctuation rules, skip to the [Recommended Resources](#recommended-resources) section.
2. I created all the examples below. They are not sourced from anyone else's articles or documentation.

## Write Short

Writing succinctly is not an argument against long articles or comprehensive documentation—this article certainly isn't brief. I advocate for efficiency. Whether trained by school assignments with word minimums or just uncritical, most of us write too much. Beyond approaching each draft with a ruthless cutting mentality, there are several ways to write short from draft one.

### Avoid Redundant Phrases

Be mindful of needless transitional phrases. If _it goes without saying_, why say it? Leading with phrases such as _we're going to_ or _as you can see_ wastes real estate. Introductions are fertile territory when hunting for these redundancies.

#### Redundant Phrase Example

> "Hi, my name is Wade, and this article will cover the basics of JavaScript variables including the current let and const keywords."

This example begins with a name that is likely in the byline. It then states information that should be a title or heading: "basics of JavaScript variables." Cut it.

### Mind Prepositional Phrases

Prepositions are words "governing, and usually preceding, a noun or pronoun and expressing a relation to another word or element in the clause."[^1] Notice words such as about, after, around, at, before, for, from, in, of, on, and to. These words, among others, begin a prepositional phrase.

When struggling to tame an unwieldy sentence, identify your prepositional phrases, and ask if they are necessary. Is there another way to construct a sentence that is both short and clear?

#### Problematic Prepositional Phrase Example

> **On the screen**, you can see a bunch **of text from the author**, and, **for our purposes**, the article seems wordy **in multiple sections from the beginning to the end**.

#### What The Example Means

> The article seems wordy.

This example is intentionally exaggerated, but I hope you see the problem. Mine your sentences for prepositional phrases, and exorcise those that have not earned their place.

Are prepositional phrases always bad? No, the goal is to be intentional.

#### Neutral Prepositional Phrase Example

> "To get started, install the package from npm or yarn."

This sentence contains two prepositional phrases: "To get started" and "from npm or yarn." Cut the first. However, "from npm or yarn" adds necessary context.

### Use the Imperative Mood

A solution to both the redundant and prepositional phrase problems is to use the imperative mood. This grammatical construction is often used but rarely discussed. Think of imperative mood as a command.

#### Imperative Mood Examples

> 1. Pass the salt
> 2. Run the tests
> 3. Push the commit to GitHub

The directness of imperative mood might seem rude, but it doesn't have to. I use the imperative mood to axe most introductory phrases.

##### Before Imperative Mood

> We are going to press the up arrow in the console to see the previous command.

#### Imperative Mood

> Press the up arrow in the console to see the previous command.

This may not seem like a big win, but we saved four words in this single sentence without losing any meaning. As you review your writing, I am sure you'll encounter many uses for the imperative mood.

### Beware Run-on Sentences

Run-on sentences contain "two or more independent clauses that are not separated by a colon, semicolon, or appropriate conjunction."[^2]

#### Run-on Sentence Example

> Your JavaScript can be in the new ES2015 syntax and it will be compiled by Babel to code that is compatible with older browsers so you get the benefits of browser support and you get to write modern JavaScript.

#### Run-on Sentence Fix

> Your JavaScript can be in the new ES2015 syntax, and it will be compiled by Babel to code that is compatible with older browsers. You get the benefits of browser support, and you get to write modern JavaScript.

The fix separates independent clauses using either a period or comma and coordinating conjunction. Though we've fixed the run-on, the construction is still wordy and confusing. We can do better.

#### Better Run-on Sentence Fix

> Babel compiles JavaScript written in ES2015 syntax to JavaScript that is compatible with older browsers.

Is the second part of the original run-on necessary? I cut it. I then rewrote the sentence in active voice (more on that later). This second fix may be too sparse for some—there is never only one way to fix a sentence. The point is that run-on sentences create weak writing, and they must be corrected.

### Comma Splices

The comma splice occurs when "using a comma to link two independent clauses (which should instead be linked by a colon, semicolon, or conjunction)."[^3]

#### Comma Splice Example

> Python is a great programming language, it's easy to read because the syntax is so simple, I really like the language.

#### Comma Splice Fix

> Python is a great programming language. It's easy to read because the syntax is so simple. I really like it a lot.

In case you don't remember the coordinating conjunctions, memorize this acronym: FANBOYS (For, And, Nor, But, Or, Yet, So).

### Give Yourself a Word Limit

Be your own magazine editor and stick to a word limit. What if you had to fit all the information into 500 words? Working within a constraint reveals the best in us. You may be surprised by your efficiency once you abandon the freedom of an infinitely scrolling web page.

## Be Explicit, Be Clear

If your writing confuses people, or your docs leave the audience wanting, you likely need to be more explicit and thorough.

### Ambiguous Pronouns

Ambiguous pronouns are the first place to look when clarity is your issue. Look for words such as it, that, and this. When in doubt, explicitly refer to the subject.

#### Ambiguous Pronoun Example

> The client sends a GET request to the server. **It** processes **it** with middleware and generates a response, which includes HTTP headers and a response body. Then **that** is sent to the client.

What is it? What is that?

#### Ambiguous Pronoun Fix

> The client sends a GET request to the server. The server processes the request using middleware and generates a response object. The response object includes both the response body and any HTTP headers. The response is then sent to the client.

By being explicit, we eliminate potential confusion about the client, server, and response in this example. Explicitness is especially important for beginners, and, remember, everyone's a beginner.

Clarity is another reason to cut words elsewhere. Clarity may require verbosity, so regard your words as a finite resource to be spent on what matters most: clarity.

### Active and Passive Voice

Active voice is "a form or set of forms of a verb in which the subject is typically the person or thing performing the action and which can take a direct object."[^4]

#### Passive Voice Examples

> 1. The request is processed by the server.
> 2. The article was written by Wade.
> 3. Git blame says the commit was pushed by Wade.

#### Active Voice Examples

> 1. The server processes the request.
> 2. Wade wrote the article.
> 3. Git blame says Wade pushed the commit.

There are appropriate uses of passive voice, and some argue that active voice should apply only to animate actors and not inanimate objects. Use your judgement and be careful not to change meaning. However, I'm almost always in favor of rewriting in the active voice.

### Disagreement

Disagreement can be especially confusing in technical writing. Disagreement refers to a mismatch between singular and plural nouns, pronouns, and verbs.

#### Problematic Agreement Example

> The company of 20 members **are** midway through **their** new product release.

#### Agreement Fix

> The company of 20 members **is** midway through **its** new product release.

The subject is the singular "company." The prepositional phrase, "of 20 members" introduces the plural noun, "members," and the incorrect verb and pronoun follow.

Disagreement is another reason to be mindful of prepositional phrases. Your subject is never in a prepositional phrase. Find the subject of your sentence and conjugate appropriately.

### Verbs Add Impact

When you are tempted to use a meaningless adverb, such as really or very, examine your verb choice. The same goes for exclamation points. Adding energy or emphasis requires better verbs, not modifiers and punctuation.

#### Weak Verb Examples

> - Wade ate the pizza really really fast!
> - The water completely ruined my phone!

#### Stronger Verb Examples

> - Wade devoured the pizza.
> - The water destroyed my phone.

## Avoid Assumptions

Technical materials should shun words such as simply, obviously, and clearly in reference to the subject. These words, among other dismissive terms, add no meaning to your writing. Unfortunately, they do communicate that the topic should be easy, simple, or obvious.

Examine your use of these empty adverbs. You will find that cutting them not only does no harm but improves your work.

## A Preflight Checklist

### Proofread

Reading aloud catches most glaring errors. Reading aloud does not mean quietly murmuring to yourself. Find a private place, and read at full volume. Is that sentence too long? Well, you can't read it without running out of breath, so . . . .

In addition to reading aloud, I recommend a second type of proofreading practiced by one of my journalism professors, the late Tom Wheeler. He would read once at regular pace to ensure everything flowed well and made sense. He would then read slowly—word-by-word. This second proofread catches small typos and easily missed grammatical errors. Its tempting to rely on a spell checker, but theirs just to many things it can miss.

### Count Words Per Sentence

I learned one of my favorite pacing exercises from Mary-Kate Mackey, another one of my journalism professors. She had us count the number of words per sentence. This exercise quantifies the cadence of your writing. Are all your sentences between 17 and 20 words? Do you have any sentences longer than 30 words or shorter than 5 words? Consistently short, medium, or long sentences create monotony. Add variety so that a piece doesn't become too choppy or too drawn-out.

## Breaking the Rules

These guidelines and rules are meant to be broken. My writing on the Treehouse blog follows the above conventions, but I also break from them. The Treehouse audience is used to video, so the articles are written in a conversational tone. Sentences begin with "now" and "so." I attempt to _talk_ to the reader.

You will learn to match a publication's style and voice. However, the principles above still apply, and rules must be broken purposefully. Be honest. Are you writing in a style, or are you working from a limited toolbox. Break the rules, but build your skills first.

With that in mind, the recommendations that follow will help you along the way.

## Recommended Resources

I am not paid for any of these recommendations, and links to the resources are **not** affiliate links. However, in the interest of disclosure, I have taken courses and workshops from both Mary-Kate Mackey and Lauren Kessler, and I consider Mackey a mentor.

### For Non-professional and Aspiring Writers

- [_Write Better Right Now: The Reluctant Writer's Guide to Confident Communication and Self-Assured Style_ by Mary-Kate Mackey](https://www.goodreads.com/book/show/31548428-write-better-right-now)

If you found the above article helpful, _Write Better Right Now_ is my first recommendation. Consider it a one-stop-shop for those with no formal training.

### Grammar and Style

- ["Grammar Girl"](https://www.quickanddirtytips.com/grammar-girl)
- [_Mastering the Message_ by Lauren Kessler](https://www.goodreads.com/book/show/3585024-mastering-the-message)
- [_The Chicago Manual of Style_](https://www.chicagomanualofstyle.org/home.html)
- Any good dictionary

For those who need a better foundation in English grammar and style, the above resources are your friends. I am not a strong copy editor, and I regularly reference my style guides and dictionaries, so know that these books will serve you now and in the future. Think of them as your docs for writing.

Why the _Chicago Manual of Style_? I like it best. Also, it's opinionated and thorough. For folks trying to better understand English grammar, I prefer an opinionated guide that provides rules for most situations. When in doubt, have rules and follow them.

### For Those Looking to Go Further

- [_A Writer's Coach: An Editor's Guide to Words that Work_ by Jack Hart](https://www.goodreads.com/book/show/185202.A_Writer_s_Coach)
- [_The War of Art: Break Through the Blocks & Win Your Inner Creative Battles_ by Steven Pressfield](https://www.goodreads.com/book/show/1319.The_War_of_Art)

_A Writer's Coach_ was assigned to me by Mary-Kate Mackey during journalism school, and I still revisit sections. If you're looking for expanded guidance on writing powerfully or when to break rules (or what's really a _rule_), this book is wonderful.

_The War of Art_ speaks to the discipline required to write professionally. If you are struck with writer's block or trapped in the I-will-start-tomorrow loop, this book is worth the read.

## Citations

[^1]: “Preposition | Definition of Preposition in English by Oxford Dictionaries.” Oxford Dictionaries | English, Oxford Dictionaries, en.oxforddictionaries.com/definition/preposition.
[^2]: “Run-on | Definition of Run-on in English by Oxford Dictionaries.” Oxford Dictionaries | English, Oxford Dictionaries, en.oxforddictionaries.com/definition/run-on.
[^3]: “Comma Splice | Definition of Comma Splice in English by Oxford Dictionaries.” Oxford Dictionaries | English, Oxford Dictionaries, en.oxforddictionaries.com/comma_splice/comma-splice.
[^4]: “Active Voice | Definition of Active Voice in English by Oxford Dictionaries.” Oxford Dictionaries | English, Oxford Dictionaries, en.oxforddictionaries.com/definition/active_voice.
