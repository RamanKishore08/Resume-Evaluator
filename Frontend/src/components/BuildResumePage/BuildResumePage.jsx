import React, { useState, useRef } from "react";
import "./BuildResumePage.css";
import html2pdf from "html2pdf.js";

function BuildResumePage() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [location, setLocation] = useState("");
  const [summary, setSummary] = useState("");
  const [education, setEducation] = useState([{ school: "", degree: "", from: "", to: "" }]);
  const [workExperience, setWorkExperience] = useState([{ role: "", company: "", from: "", to: "", location: "", description: "" }]);
  const [skills, setSkills] = useState([""]);
  const [certifications, setCertifications] = useState([""]);
  const [languages, setLanguages] = useState([""]);
  const resumeRef = useRef();

  const handleAddWorkExperience = () => {
    setWorkExperience([...workExperience, { role: "", company: "", from: "", to: "", location: "", description: "" }]);
  };

  const handleAddEducation = () => {
    setEducation([...education, { school: "", degree: "", from: "", to: "" }]);
  };

  const handleAddSkill = () => {
    setSkills([...skills, ""]);
  };

  const handleAddCertification = () => {
    setCertifications([...certifications, ""]);
  };

  const handleAddLanguage = () => {
    setLanguages([...languages, ""]);
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
    <div className="build-resume-page">
      <h1>Build Your Resume</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-section">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-section">
          <label>Contact No:</label>
          <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} required />
        </div>
        <div className="form-section">
          <label>Email ID:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-section">
          <label>LinkedIn:</label>
          <input type="text" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} required />
        </div>
        <div className="form-section">
          <label>Location:</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
        </div>
        <div className="form-section">
          <label>Summary:</label>
          <textarea value={summary} onChange={(e) => setSummary(e.target.value)} required />
        </div>

        <div className="form-section">
          <h2>Education:</h2>
          {education.map((edu, index) => (
            <div key={index}>
              <label>School/College:</label>
              <input
                type="text"
                value={edu.school}
                onChange={(e) => {
                  const newEducation = [...education];
                  newEducation[index].school = e.target.value;
                  setEducation(newEducation);
                }}
                style={{ width: "300px" }} // Reduced form box size
              />
              <label>Degree/Course:</label>
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => {
                  const newEducation = [...education];
                  newEducation[index].degree = e.target.value;
                  setEducation(newEducation);
                }}
                style={{ width: "300px" }} // Reduced form box size
              />
              <label>From:</label>
              <input
                type="text"
                value={edu.from}
                onChange={(e) => {
                  const newEducation = [...education];
                  newEducation[index].from = e.target.value;
                  setEducation(newEducation);
                }}
                style={{ width: "150px" }}
              />
              <label>To:</label>
              <input
                type="text"
                value={edu.to}
                onChange={(e) => {
                  const newEducation = [...education];
                  newEducation[index].to = e.target.value;
                  setEducation(newEducation);
                }}
                style={{ width: "150px" }}
              />
            </div>
          ))}
          <button type="button" onClick={handleAddEducation}>Add Education</button>
        </div>

        <div className="form-section">
          <h2>Work Experience:</h2>
          {workExperience.map((experience, index) => (
            <div key={index}>
              <label>Role:</label>
              <input type="text" value={experience.role} onChange={(e) => {
                const newWorkExperience = [...workExperience];
                newWorkExperience[index].role = e.target.value;
                setWorkExperience(newWorkExperience);
              }} />
              <label>Company:</label>
              <input type="text" value={experience.company} onChange={(e) => {
                const newWorkExperience = [...workExperience];
                newWorkExperience[index].company = e.target.value;
                setWorkExperience(newWorkExperience);
              }} />
              <label>From:</label>
              <input type="text" value={experience.from} onChange={(e) => {
                const newWorkExperience = [...workExperience];
                newWorkExperience[index].from = e.target.value;
                setWorkExperience(newWorkExperience);
              }} />
              <label>To:</label>
              <input type="text" value={experience.to} onChange={(e) => {
                const newWorkExperience = [...workExperience];
                newWorkExperience[index].to = e.target.value;
                setWorkExperience(newWorkExperience);
              }} />
              <label>Location:</label>
              <input type="text" value={experience.location} onChange={(e) => {
                const newWorkExperience = [...workExperience];
                newWorkExperience[index].location = e.target.value;
                setWorkExperience(newWorkExperience);
              }} />
              <label>Description:</label>
              <textarea value={experience.description} onChange={(e) => {
                const newWorkExperience = [...workExperience];
                newWorkExperience[index].description = e.target.value;
                setWorkExperience(newWorkExperience);
              }} />
            </div>
          ))}
          <button type="button" onClick={handleAddWorkExperience}>Add Work Experience</button>
        </div>

        <div className="form-section">
          <h2>Skills:</h2>
          {skills.map((skill, index) => (
            <div key={index}>
              <input type="text" value={skill} onChange={(e) => {
                const newSkills = [...skills];
                newSkills[index] = e.target.value;
                setSkills(newSkills);
              }} />
            </div>
          ))}
          <button type="button" onClick={handleAddSkill}>Add Skill</button>
        </div>

        <div className="form-section">
          <h2>Certifications:</h2>
          {certifications.map((certification, index) => (
            <div key={index}>
              <input type="text" value={certification} onChange={(e) => {
                const newCertifications = [...certifications];
                newCertifications[index] = e.target.value;
                setCertifications(newCertifications);
              }} />
            </div>
          ))}
          <button type="button" onClick={handleAddCertification}>Add Certification</button>
        </div>

        <div className="form-section">
          <h2>Languages:</h2>
          {languages.map((language, index) => (
            <div key={index}>
              <input type="text" value={language} onChange={(e) => {
                const newLanguages = [...languages];
                newLanguages[index] = e.target.value;
                setLanguages(newLanguages);
              }} />
            </div>
          ))}
          <button type="button" onClick={handleAddLanguage}>Add Language</button>
        </div>
      </form>

      <div ref={resumeRef} className="resume">
        <div className="left-column">
          <h2>{name}</h2>
          <p className="contact-info">
            {contact} | {email} | {linkedin} | {location}
          </p>
          <hr />

          <h3>Summary</h3>
          <p>{summary}</p>
          <hr />

          <h3>Education</h3>
          {education.map((edu, index) => (
            <div key={index}>
              <h4>{edu.school}</h4>
              <h4>{edu.degree}</h4>
              <p>{edu.from} - {edu.to}</p>
            </div>
          ))}
          <hr />

          <h3>Work Experience</h3>
          {workExperience.map((experience, index) => (
            <div key={index}>
              <h4>{experience.role} - {experience.company}</h4>
              <p>{experience.from} - {experience.to}</p>
              <p>{experience.location}</p>
              <p>{experience.description}</p>
            </div>
          ))}
          <hr />

          <div className="right-column">
  <h3>Skills</h3>
  <ul className="horizontal-list">
    {skills.map((skill, index) => (
      <li key={index}>{skill}</li>
    ))}
  </ul>
  <hr />

  <h3>Certifications</h3>
  <ul className="horizontal-list">
    {certifications.map((certification, index) => (
      <li key={index}>{certification}</li>
    ))}
  </ul>
  <hr />

  <h3>Languages</h3>
  <ul className="horizontal-list">
    {languages.map((language, index) => (
      <li key={index}>{language}</li>
    ))}
  </ul>
</div>

        </div>
      </div>

      <button onClick={downloadResume}>Download Resume</button>
    </div>
  );
}

export default BuildResumePage;
