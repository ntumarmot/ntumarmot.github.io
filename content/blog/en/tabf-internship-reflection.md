---
title: Two Months at TABF: What Comes After AI Can Do It?
date: 2026-08-25
description: Reflections on AI customer service, FinTutor, aptitude-test clustering, and an internal workshop—and on approval, validation, and handover after a system works.
---

From June to August 2026, I interned at the FinTech Development Center of the Taiwan Academy of Banking and Finance's Financial Research Institute.

Before the internship, I assumed the most important questions in an AI project would be whether the model was powerful enough, whether its answers were intelligent enough, or whether we could add more features. After two months of actual work, I began paying attention to what happens after a system is built: do people truly trust it enough to use it?

How do we notice a wrong answer? Who updates the system when a regulation changes? Will the AI make something up when it is uncertain? After the project is handed to someone else, can that person continue maintaining it?

These questions may not sound like AI, but they largely determine whether an AI project remains a demo or becomes something people can genuinely use.

## Four projects that looked very different

During the internship, I mainly worked on four topics: an AI customer-service system, the FinTutor financial-certificate practice platform, aptitude-test clustering, and an internal IdeaLab session about ChatGPT Work.

### AI customer service: the model is not always the problem

When I first examined the AI customer-service system, I assumed that replacing the model with a smarter one would improve the answers. After reviewing hundreds of FAQ entries, I found that the system could often retrieve the correct information. The actual problem was that its RAG architecture did not carry the business rules that determined which content must not be changed. Fixing that required redesigning the response flow; changing the model alone would not solve it.

Some answers had already been approved by the business team and therefore needed to be returned word for word. Some questions lacked enough information, so the system needed to ask a follow-up question or transfer the case to a person. Only some questions were suitable for an LLM to compose an answer. If every question was sent to a model for regeneration, even correct source material could be rephrased incorrectly.

We therefore revisited where response rules should live. The direction for the new design was to use business rules first to decide whether an answer should be returned verbatim, generated within constraints, or transferred to a person. Each stage also needed to be traceable.

One part of the architecture came from a suggestion I made during our discussions and was later adopted. Before retrieval, a smaller model first breaks down the user's question and extracts the intent and fields required for an answer. Program rules then check whether the information is complete. If something is missing, the system asks the user to provide it. Only after the follow-up limit is exceeded does it transfer the case to a person; retrieval begins only when the required information is complete. I proposed this because, while reviewing the FAQs, I found that many questions were incomplete to begin with. Sending them directly to retrieval only produced content that looked relevant but could not actually answer the question.

Now, when an AI system gives a poor answer, I first ask: who maintains the knowledge? Where are the rules written? Has anyone approved the answer? I consider changing the model only after checking those questions.

### FinTutor: sometimes removing things is progress

When I took over FinTutor, it was closer to a display shell than a finished product. The interface contained many features that looked complete, but the official data, actual policies, and product positioning did not support them.

I first confirmed what truly existed and what fit the intended use case. We ultimately removed designs that current conditions could not support, replaced placeholder content with the official question bank, focused the AI tutor on explaining one question at a time, and added basic safeguards, mobile support, and handover documentation.

At first, removing features did not feel like an accomplishment. However, if a feature lacks supporting data and does not match the actual rules, keeping it only makes the product look more complete than it is. I began checking whether an interface could truly deliver what it promised instead of looking only at how many features it had.

### Aptitude-test clustering: the requested method also needs validation

The aptitude-test task was to see whether hierarchical clustering could improve the existing five-cluster result. I tested three requested methods, but all of them were less stable than the original result.

Only after running the experiments did I step back and notice that many traits moved together very strongly. The original clusters, which appeared to represent five personality types, were largely separating people by their overall score level. Even after trying three methods, the middle clusters still could not be distinguished clearly, so I returned to inspect the data itself.

I then separated each person's overall level from the relative shape of their traits. For example, one person's average percentile across nine traits might be 85 while another person's is only 45. However, both may have listening and empathy seven points above their own average and prudence seven points below it. After subtracting each person's average, both produce the same `+7, 0, -7` shape. Their overall levels are very different, but their relative strengths and weaknesses are the same.

After separating level from shape, I first removed people without a clear shape. The resulting clusters were more stable and easier to explain.

This task taught me that instead of trying different models blindly, understanding the properties of the data first may lead to a better result.

### IdeaLab: helping a non-technical audience truly understand

During the internship, I also led an internal IdeaLab session on ChatGPT Work. IdeaLab is a monthly activity in which our department shares recent AI knowledge and ways to integrate it into other departments' workflows. Most participants did not have technical backgrounds, so I needed to avoid excessive terminology and explain the topic in language everyone could understand.

I reframed the session around two situations close to the academy's work: preparing for an external visit and producing a quick course profit-and-loss report. I used these examples to show how people and AI can divide the work. A person approves the plan first; AI then organizes and calculates information across files. When AI cannot make a reliable judgment, it must flag the issue, and a person still performs the final review.

After the first session, my only thought was, “I finally made it through.” A few days later, the second session went much more smoothly. I also became clearer about the order of explanation: first explain what the tool can help with, where it can go wrong, and when a person is needed, and only then introduce the concepts behind it.

## Results and handover

During those two months, I sometimes worked at the Nanhai Road office and sometimes discussed architecture in meeting rooms at headquarters. I ate a lunchbox at noon, continued revising projects in the afternoon, and often left work thinking only, “Work was exhausting today.” When I finally organized the internship results, however, I realized that the way I viewed AI projects had changed considerably in two months.

Previously, I may have focused only on models and algorithms. I can now better appreciate how necessary data preparation is to the entire process.

I am very grateful to the managers and colleagues at the Taiwan Academy of Banking and Finance. They let me work on several different types of projects and were willing to listen when an intern raised questions, tested methods, or suggested rethinking an existing approach.
