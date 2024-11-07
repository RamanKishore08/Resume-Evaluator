import React from 'react';
import './Template4.css';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const VintageResumeBuilder = () => {
  const [form, setForm] = React.useState({
    name: '',
    experience: [{ role: '', company: '', from: '', to: '' }],
    education: [{ college: '', from: '', to: '', degree: '' }],
    skills: [''],
    languages: [''],
    certifications: [''],
    projects: [{ title: '', description: '' }],
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleExperienceChange = (index, e) => {
    const newExperience = [...form.experience];
    newExperience[index][e.target.name] = e.target.value;
    setForm({ ...form, experience: newExperience });
  };

  const handleEducationChange = (index, e) => {
    const newEducation = [...form.education];
    newEducation[index][e.target.name] = e.target.value;
    setForm({ ...form, education: newEducation });
  };

  const handleProjectChange = (index, e) => {
    const newProjects = [...form.projects];
    newProjects[index][e.target.name] = e.target.value;
    setForm({ ...form, projects: newProjects });
  };

  const handleSkillsChange = (index, e) => {
    const newSkills = [...form.skills];
    newSkills[index] = e.target.value;
    setForm({ ...form, skills: newSkills });
  };

  const handleLanguagesChange = (index, e) => {
    const newLanguages = [...form.languages];
    newLanguages[index] = e.target.value;
    setForm({ ...form, languages: newLanguages });
  };

  const handleCertificationsChange = (index, e) => {
    const newCertifications = [...form.certifications];
    newCertifications[index] = e.target.value;
    setForm({ ...form, certifications: newCertifications });
  };

  const addExperience = () => {
    setForm({
      ...form,
      experience: [...form.experience, { role: '', company: '', from: '', to: '' }],
    });
  };

  const addEducation = () => {
    setForm({
      ...form,
      education: [...form.education, { college: '', from: '', to: '', degree: '' }],
    });
  };

  const addProject = () => {
    setForm({
      ...form,
      projects: [...form.projects, { title: '', description: '' }],
    });
  };

  const addSkill = () => {
    setForm({ ...form, skills: [...form.skills, ''] });
  };

  const addLanguage = () => {
    setForm({ ...form, languages: [...form.languages, ''] });
  };

  const addCertification = () => {
    setForm({ ...form, certifications: [...form.certifications, ''] });
  };

  const downloadResume = () => {
    const input = document.getElementById('vintage-resume-preview');

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 210;
      const pageHeight = pdf.internal.pageSize.height;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('resume.pdf');
    });
  };

  return (
    <div className="vintage-resume-builder-container">
      <h1>VINTAGE TEMPLATE</h1>
      <div className="vintage-resume-builder">
        <div className="vintage-resume-form">
          <form>
            <h3>Personal Information</h3>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />
            <h3>Experience</h3>
            {form.experience.map((exp, index) => (
              <div key={index} className="vintage-experience-entry">
                <input
                  type="text"
                  name="role"
                  placeholder="Role"
                  value={exp.role}
                  onChange={(e) => handleExperienceChange(index, e)}
                  required
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={exp.company}
                  onChange={(e) => handleExperienceChange(index, e)}
                  required
                />
                <input
                  type="text"
                  name="from"
                  placeholder="From (YYYY)"
                  value={exp.from}
                  onChange={(e) => handleExperienceChange(index, e)}
                  required
                />
                <input
                  type="text"
                  name="to"
                  placeholder="To (YYYY)"
                  value={exp.to}
                  onChange={(e) => handleExperienceChange(index, e)}
                  required
                />
              </div>
            ))}
            <button type="button" onClick={addExperience}>Add Experience</button>

            <h3>Education</h3>
            {form.education.map((edu, index) => (
              <div key={index} className="vintage-education-entry">
                <input
                  type="text"
                  name="college"
                  placeholder="College Name"
                  value={edu.college}
                  onChange={(e) => handleEducationChange(index, e)}
                  required
                />
                <input
                  type="text"
                  name="from"
                  placeholder="From (YYYY)"
                  value={edu.from}
                  onChange={(e) => handleEducationChange(index, e)}
                  required
                />
                <input
                  type="text"
                  name="to"
                  placeholder="To (YYYY)"
                  value={edu.to}
                  onChange={(e) => handleEducationChange(index, e)}
                  required
                />
                <input
                  type="text"
                  name="degree"
                  placeholder="Degree"
                  value={edu.degree}
                  onChange={(e) => handleEducationChange(index, e)}
                  required
                />
              </div>
            ))}
            <button type="button" onClick={addEducation}>Add Education</button>

            <h3>Skills</h3>
            {form.skills.map((skill, index) => (
              <div key={index} className="vintage-skill-entry">
                <input
                  type="text"
                  placeholder="Skill"
                  value={skill}
                  onChange={(e) => handleSkillsChange(index, e)}
                  required
                />
              </div>
            ))}
            <button type="button" onClick={addSkill}>Add Skill</button>

            <h3>Languages</h3>
            {form.languages.map((language, index) => (
              <div key={index} className="vintage-language-entry">
                <input
                  type="text"
                  placeholder="Language"
                  value={language}
                  onChange={(e) => handleLanguagesChange(index, e)}
                  required
                />
              </div>
            ))}
            <button type="button" onClick={addLanguage}>Add Language</button>

            <h3>Certifications</h3>
            {form.certifications.map((certification, index) => (
              <div key={index} className="vintage-certification-entry">
                <input
                  type="text"
                  placeholder="Certification"
                  value={certification}
                  onChange={(e) => handleCertificationsChange(index, e)}
                  required
                />
              </div>
            ))}
            <button type="button" onClick={addCertification}>Add Certification</button>

            <h3>Projects</h3>
            {form.projects.map((proj, index) => (
              <div key={index} className="vintage-project-entry">
                <input
                  name="title"
                  placeholder="Project Title"
                  value={proj.title}
                  onChange={(e) => handleProjectChange(index, e)}
                  required
                />
                <textarea
                  name="description"
                  placeholder="Project Description"
                  value={proj.description}
                  onChange={(e) => handleProjectChange(index, e)}
                  required
                />
              </div>
            ))}
            <button type="button" onClick={addProject}>Add Project</button>

            <button type="button" onClick={downloadResume}>Download Resume</button>
          </form>
        </div>
        <div className="vintage-resume-preview" id="vintage-resume-preview">
          <h2>{form.name || "Your Name"}</h2>
          <div className="vintage-resume-section">
            <h3>Experience</h3>
            {form.experience.map((exp, index) => (
              <div key={index}>
                <strong>{exp.role || "Role"}</strong> at {exp.company || "Company"} ({exp.from || "From"} - {exp.to || "To"})
              </div>
            ))}
          </div>
          <div className="vintage-resume-section">
            <h3>Education</h3>
            {form.education.map((edu, index) => (
              <div key={index}>
                {edu.degree || "Degree"} from {edu.college || "College"} ({edu.from || "From"} - {edu.to || "To"})
              </div>
            ))}
          </div>
          <div className="vintage-resume-section">
            <h3>Skills</h3>
            {form.skills.map((skill, index) => (
              <div key={index}>{skill || "Skill"}</div>
            ))}
          </div>
          <div className="vintage-resume-section">
            <h3>Languages</h3>
            {form.languages.map((language, index) => (
              <div key={index}>{language || "Language"}</div>
            ))}
          </div>
          <div className="vintage-resume-section">
            <h3>Certifications</h3>
            {form.certifications.map((certification, index) => (
              <div key={index}>{certification || "Certification"}</div>
            ))}
          </div>
          <div className="vintage-resume-section">
            <h3>Projects</h3>
            {form.projects.map((proj, index) => (
              <div key={index}>
                <strong>{proj.title || "Project Title"}</strong>: {proj.description || "Description"}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VintageResumeBuilder;
