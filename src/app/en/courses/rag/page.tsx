import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "RAG Course | Oliver Huang", description: "An introductory RAG workshop covering PDFs, chunking, embeddings, vector retrieval, and hands-on materials.", alternates: { languages: { en: "/en/courses/rag", "zh-Hant": "/courses/rag" } } };

const lessons = ["Why RAG is useful: ground answers in selected documents", "The RAG pipeline: load PDFs, split text, and build an index", "Vector retrieval: embeddings, cosine similarity, and Top-k", "Hands-on practice: retrieve relevant passages with LangChain and ChromaDB", "Next steps: combining RAG with external tools"];

export default function EnglishRagCoursePage() {
  return (
    <article className="course-detail" lang="en">
      <p className="course-back"><Link href="/en/courses">← All courses</Link> · <Link href="/courses/rag" hrefLang="zh-Hant">中文版</Link></p>
      <span className="exp-date"><time dateTime="2026-10-19">Oct. 19, 2026</time> · NTU AI Club · RAG workshop</span>
      <h1>Let AI Find the Evidence Before Answering</h1>
      <p className="subtitle">Understand Retrieval-Augmented Generation from scratch, then use a PDF to build a document-retrieval pipeline.</p>
      <section className="course-section" aria-labelledby="rag-overview-en"><h2 className="section-title" id="rag-overview-en">What this course covers</h2><p>A general-purpose AI model does not automatically know the documents in your hands. This course begins with a simple idea: retrieve relevant passages first, then provide those passages to the AI. Students build PDF loading, text chunking, vector indexing, and retrieval step by step. The key is to inspect what the system retrieved and decide whether it truly supports the answer.</p></section>
      <section className="course-section" aria-labelledby="rag-topics-en"><h2 className="section-title" id="rag-topics-en">Topics</h2><ol className="course-topics">{lessons.map((lesson) => <li key={lesson}>{lesson}</li>)}</ol></section>
      <section className="course-section" aria-labelledby="rag-materials-en"><h2 className="section-title" id="rag-materials-en">Materials</h2><div className="course-resources"><div className="course-resource"><h3>Slides</h3><p>Read the RAG concepts, diagrams, and implementation steps in your browser.</p><a href="/course-materials/rag/slides.html" target="_blank" rel="noopener noreferrer">Open slides ↗</a></div><div className="course-resource"><h3>Student practice pack</h3><p>Includes a practice notebook, eight sample PDFs, slides, and setup instructions.</p><a href="/course-materials/rag/rag_course_student.zip" download>Download ZIP ↓</a></div></div><p className="course-note">The exercises use VS Code, Python 3.13, and uv. Retrieval runs locally. The final OpenAI API example is optional and disabled by default.</p></section>
    </article>
  );
}
