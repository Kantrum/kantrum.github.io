---
title: "Recognition and Reconstruction of Elements in Scanned Page"
collection: research
permalink: /academic/research_04
excerpt: 'This paper is about the number 3. The number 4 is left for future work.'
date: 2023-12-31
---


**Project Duration:** January 2023 – March 2023  
**Role:** Team Leader  
**Advisor:** Prof. José Miguel Hernández-Lobato, University of Cambridge  

## Project Overview  
The project focused on developing a robust system for recognizing and reconstructing various elements in scanned pages. The goal was to improve the extraction of textual and structural information from digitized documents, particularly those with distortions, low resolution, and varying layouts. This was achieved using state-of-the-art deep learning models for Optical Character Recognition (OCR) and layout analysis.  

## Project Objectives  
1. **Text Detection and Recognition:** Accurately identify and extract text from scanned pages, even under challenging conditions such as noise, low resolution, and distortions.  
2. **Layout Analysis:** Identify and classify different page components (e.g., paragraphs, tables, images, headers, footnotes) to reconstruct the logical structure of the document.  
3. **Scalability and Robustness:** Ensure high accuracy across diverse document formats and varying levels of quality, making the approach suitable for large-scale document digitization.  

---

## Technical Implementation  

### 1. Text Detection and Recognition  
We employed **PaddleOCR**, an open-source OCR system optimized for high-precision text detection and recognition. Specifically, we utilized the **DBNet (Differentiable Binarization Network)** model for text detection due to its efficiency in handling irregular text and noisy backgrounds.  

- **Model Selection:**
  - DBNet was chosen for its superior ability to detect text with complex shapes, such as curved or rotated text.
  - The model was trained and fine-tuned on a large dataset containing scanned documents, handwritten text, and printed materials from various sources.

- **Performance Metrics:**
  - Achieved **96% precision** and **94% recall** on a validation dataset of 10,000 scanned document images.
  - Maintained robustness even in **low-resolution and distorted images**, ensuring reliable text extraction.

---

### 2. Layout Analysis and Element Classification  
To reconstruct the logical structure of scanned pages, we utilized **Mask R-CNN** along with the **LayoutParser** toolkit:  

- **Mask R-CNN (Region-Based Convolutional Neural Network):**
  - Used for **object detection and segmentation**, allowing us to classify different structural components of a scanned page.
  - Trained on a diverse dataset comprising **1,500 multi-format documents**, including books, articles, reports, and newspapers.
  - Achieved a **95% accuracy** in recognizing and categorizing document elements such as paragraphs, headings, tables, and images.

- **LayoutParser Toolkit:**
  - Integrated with Mask R-CNN to streamline **document structure analysis**.
  - Enabled fine-grained recognition of elements, including footnotes, captions, and multi-column layouts.
  - Allowed for **automated document segmentation**, reducing manual preprocessing efforts.

---

### 3. Performance Evaluation and Dataset  
- **Dataset:**  
  - A collection of **10,000 scanned images** was used for testing, consisting of **distorted, handwritten, printed, and low-resolution text** from various document types.  
  - The dataset included **documents in multiple languages and different page layouts**, ensuring model generalizability.

- **Results:**  
  - The system maintained an **overall accuracy of 97%**, even when applied to **low-quality scanned pages**.  
  - The OCR pipeline successfully extracted text from **historical documents** and **damaged pages**, demonstrating robustness in real-world applications.

---

## Challenges and Solutions  

| Challenge | Solution |
|-----------|----------|
| **Distorted and low-resolution text** | Used DBNet’s differentiable binarization mechanism to enhance text extraction in noisy images. |
| **Variability in document layouts** | Integrated LayoutParser for precise element classification, improving adaptability to different formats. |
| **Complex page structures (e.g., tables, multi-column layouts)** | Leveraged Mask R-CNN’s segmentation capabilities to distinguish various structural components. |
| **Multilingual text recognition** | Trained PaddleOCR on multilingual datasets to improve accuracy across different languages. |

---

## Key Contributions and Impact  
✅ **High-precision OCR system:** Successfully implemented DBNet with **96% precision** for reliable text recognition.  
✅ **Automated document segmentation:** Utilized Mask R-CNN and LayoutParser for **95% accurate** layout classification.  
✅ **Robust document processing:** Maintained **97% accuracy** across **10,000 real-world scanned images**.  
✅ **Scalability:** The model is adaptable for **large-scale document digitization**, benefiting applications such as **archival research, legal document processing, and historical text preservation**.  

---

## Conclusion and Future Work  
This project demonstrated the effectiveness of combining **deep learning-based OCR and layout analysis** for enhancing document digitization. Future improvements may include:  
- Enhancing **multimodal learning** to incorporate handwriting recognition.  
- Integrating **natural language processing (NLP)** for **context-aware text extraction** and document summarization.  
- Optimizing for **mobile and edge devices** to enable real-time document scanning and processing.  

This work contributes significantly to the field of **document image analysis** and has potential applications in **digital archiving, automated document processing, and intelligent information retrieval**.
