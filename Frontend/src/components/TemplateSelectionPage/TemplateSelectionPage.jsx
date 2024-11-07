import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TemplateSelectionPage.css'; // Import the styles for the template selection page

// Ensure images are imported correctly if they're in the src folder
import template1 from '../../images/template1.jpg';
import template2 from '../../images/template2.jpg';
import template3 from '../../images/template3.jpg';
import template4 from '../../images/template4.jpg';
import template5 from '../../images/template5.jpg';

const TemplateSelection = () => {
  const navigate = useNavigate();

  const selectTemplate = (templateId) => {
    navigate(`/build-resume/${templateId}`); // Redirect to build-resume page with the selected templateId
  };

  return (
    <div className="template-selection">
      <h1>Choose a Resume Template</h1>
      <div className="templates">
        <div onClick={() => selectTemplate(1)}>
          <img src={template1} alt="Template 1" />
          <p>Template 1</p>
        </div>
        <div onClick={() => selectTemplate(2)}>
          <img src={template2} alt="Template 2" />
          <p>Template 2</p>
        </div>
        <div onClick={() => selectTemplate(3)}>
          <img src={template3} alt="Template 3" />
          <p>Template 3</p>
        </div>
        <div onClick={() => selectTemplate(4)}>
          <img src={template4} alt="Template 4" />
          <p>Template 4</p>
        </div>
        <div onClick={() => selectTemplate(5)}>
          <img src={template5} alt="Template 5" />
          <p>Template 5</p>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelection;
