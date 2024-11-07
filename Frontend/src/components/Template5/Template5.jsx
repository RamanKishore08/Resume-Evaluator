import React from 'react';
import './Template5.css';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const ElegantResumeBuilder = () => {
  const [form, setForm] = React.useState({
    name: '',
    photo: null,
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

  const handleFileChange = (e) => {
    setForm({ ...form, photo: e.target.files[0] });
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
    const input = document.getElementById('elegant-resume-preview');
  
    html2canvas(input, { scale: 1.5 }).then((canvas) => {  // Adjust scale to control the image clarity
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
  
      const pdfWidth = 210; // A4 page width in mm
      const pageHeight = pdf.internal.pageSize.height;
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio
  
      let position = 0;
      let heightLeft = imgHeight;
  
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
  
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
  
      pdf.save('resume.pdf');
    });
  };
  

  return (
    <div className="elegant-resume-builder-container">
      <h1>ELEGANT TEMPLATE</h1>
      <div className="elegant-resume-builder">
        <div className="elegant-resume-form">
          <form>
            <h3>Personal Information</h3>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
            <h3>Experience</h3>
            {form.experience.map((exp, index) => (
              <div key={index} className="elegant-experience-entry">
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
              <div key={index} className="elegant-education-entry">
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
              <div key={index} className="elegant-skill-entry">
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
              <div key={index} className="elegant-language-entry">
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
              <div key={index} className="elegant-certification-entry">
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
              <div key={index} className="elegant-project-entry">
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
            <button type="button" className="button-gap" onClick={addProject}>Add Project</button>
            <button type="button" className="button-gap" onClick={downloadResume}>Download Resume</button>

          </form>
        </div>

        {/* Preview Resume */}
        <div className="elegant-resume-preview" id="elegant-resume-preview">
  <div className="profile-container">
    {form.photo && (
      <img
        src={URL.createObjectURL(form.photo)}
        alt="Profile"
        className="profile-photo"
      />
    )}
    <h2 className="profile-name">{form.name || "Your Name"}</h2>
  </div>
  
  <div className="elegant-resume-segments">
    {/* Experience, Education, Skills, Languages, Certifications, and Projects sections */}
  </div>


  <div className="elegant-resume-segments">
    <div className="elegant-resume-section">
      <h3>Experience</h3>
      {form.experience.map((exp, index) => (
        <div key={index} className="elegant-experience-entry">
          <strong>{exp.role || "Role"}</strong> at {exp.company || "Company"} ({exp.from || "From"} - {exp.to || "To"})
        </div>
      ))}
    </div>

    <div className="elegant-resume-section">
      <h3>Education</h3>
      {form.education.map((edu, index) => (
        <div key={index} className="elegant-education-entry">
          {edu.degree || "Degree"} from {edu.college || "College"} ({edu.from || "From"} - {edu.to || "To"})
        </div>
      ))}
    </div>
  </div>

          <div className="elegant-resume-segments">
            <div className="elegant-resume-section">
              <h3>Skills</h3>
              {form.skills.map((skill, index) => (
                <div key={index} className="elegant-skill-entry">
                  {skill || "Skill"}
                </div>
              ))}
            </div>

            <div className="elegant-resume-section">
              <h3>Languages</h3>
              {form.languages.map((language, index) => (
                <div key={index} className="elegant-language-entry">
                  {language || "Language"}
                </div>
              ))}
            </div>
          </div>

          <div className="elegant-resume-segments">
            <div className="elegant-resume-section">
              <h3>Certifications</h3>
              {form.certifications.map((certification, index) => (
                <div key={index} className="elegant-certification-entry">
                  {certification || "Certification"}
                </div>
              ))}
            </div>

            <div className="elegant-resume-section">
              <h3>Projects</h3>
              {form.projects.map((proj, index) => (
                <div key={index} className="elegant-project-entry">
                  <strong>{proj.title || "Project Title"}</strong>: {proj.description || "Description"}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElegantResumeBuilder;
