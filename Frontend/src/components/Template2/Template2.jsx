import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import './Template2.css';

const ResumeBuilderClassic = () => {
  const resumeRef = useRef();

  const [form, setForm] = useState({
    name: '',
    phone: '',
    linkedin: '',
    summary: '',
    experience: '',
    education: '',
    skills: '',
    languages: '',
    certifications: '',
    projects: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const downloadResume = () => {
    const element = resumeRef.current;
    const opt = {
      margin: 0,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="resume-builder-container">
      <h1>CLASSIC TEMPLATE</h1>
      <div className="resume-builder">
        <div className="resume-form">
          <form>
            <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
            <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
            <input name="linkedin" placeholder="LinkedIn" value={form.linkedin} onChange={handleChange} />
            <textarea name="summary" placeholder="Summary" value={form.summary} onChange={handleChange} />
            <textarea name="experience" placeholder="Experience" value={form.experience} onChange={handleChange} />
            <textarea name="education" placeholder="Education" value={form.education} onChange={handleChange} />
            <textarea name="skills" placeholder="Skills" value={form.skills} onChange={handleChange} />
            <textarea name="languages" placeholder="Languages Known" value={form.languages} onChange={handleChange} />
            <textarea name="certifications" placeholder="Certifications" value={form.certifications} onChange={handleChange} />
            <textarea name="projects" placeholder="Projects" value={form.projects} onChange={handleChange} />
          </form>
          <button onClick={downloadResume}>Download PDF</button>
        </div>
        <div className="resume-preview" ref={resumeRef} style={{ width: '100%', minHeight: 'max', padding: '90px' }}>
  <h2>{form.name}</h2>
  <p><strong>Phone:</strong> {form.phone}</p>
  <p><strong>LinkedIn:</strong> {form.linkedin}</p>
  <p><strong>Summary:</strong> {form.summary}</p>
  <p><strong>Experience:</strong> {form.experience}</p>
  <p><strong>Education:</strong> {form.education}</p>
  <p><strong>Skills:</strong> {form.skills}</p>
  <p><strong>Languages:</strong> {form.languages}</p>
  <p><strong>Certifications:</strong> {form.certifications}</p>
  <p><strong>Projects:</strong> {form.projects}</p>
</div>

      </div>
    </div>
  );
};

export default ResumeBuilderClassic;
