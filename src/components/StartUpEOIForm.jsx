import React from 'react';
import DynamicForm from './DynamicForm';

const StartupEOIForm = () => {
  const startupEOIFields = [
    // Grid 1: Two Column Layout - Personal/Ticket Info
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      placeholder: 'Your name',
      required: true,
      disabled: true,
      maxLength: 255
    },
    {
      name: 'category',
      label: 'Category',
      type: 'text',
      placeholder: 'Category',
      required: true,
      disabled: true,
      maxLength: 255
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'your.email@example.com',
      required: true,
      disabled: true
    },
    {
      name: 'phone',
      label: 'Phone',
      type: 'tel',
      placeholder: 'Enter phone number',
      required: true,
      disabled: true,
      validation: 'phone'
    },
    {
      name: 'startupName',
      label: 'Startup Name',
      type: 'text',
      placeholder: 'Enter startup name',
      required: false,
      disabled: true,
      maxLength: 255
    },
    {
      name: 'dippNumber',
      label: 'DIPP Number',
      type: 'text',
      placeholder: 'Enter DIPP number',
      required: false,
      maxLength: 255
    },
    
    // Grid 2: Company & Product Details
    {
      name: 'aboutCompany',
      label: 'About the Company',
      type: 'textarea',
      placeholder: 'Describe your company...',
      required: true,
      rows: 6,
      maxLength: 65535
    },
    {
      name: 'productName',
      label: 'Product Name',
      type: 'text',
      placeholder: 'Enter product name',
      required: true,
      maxLength: 255
    },
    {
      name: 'website',
      label: 'Website',
      type: 'url',
      placeholder: 'https://example.com',
      required: false,
      maxLength: 2083
    },
    {
      name: 'productDetails',
      label: 'Product Details',
      type: 'textarea',
      placeholder: 'Describe your product in detail...',
      required: true,
      rows: 6,
      maxLength: 250,
      description: 'Maximum 250 words'
    },
    {
      name: 'stage',
      label: 'Stage',
      type: 'text',
      placeholder: 'e.g., Prototype, MVP, Market Ready',
      required: true,
      maxLength: 255
    },
    {
      name: 'sector',
      label: 'Sector',
      type: 'text',
      placeholder: 'e.g., EdTech, HealthTech, FinTech',
      required: true,
      maxLength: 255
    },
    
    // Grid 3: Media Upload
    {
      name: 'productVideo',
      label: 'Product Video',
      type: 'url',
      placeholder: 'https://youtube.com/... or drive link',
      required: true,
      maxLength: 255,
      description: 'Give drive or youtube URL to access product video'
    },
    {
      name: 'pitchDeck',
      label: 'Pitch Deck',
      type: 'file',
      required: true,
      accept: '.pdf',
      description: 'Upload your pitch deck (PDF only)'
    }
  ];

  const handleSubmit = async (formData) => {
    console.log('Startup EOI Form submitted:', formData);
    
    // Here you would send data to your backend
    // For file upload, you'd need to use FormData
    // const formDataObj = new FormData();
    // Object.keys(formData).forEach(key => {
    //   formDataObj.append(key, formData[key]);
    // });
    
    // const response = await fetch('/api/startup-eoi', {
    //   method: 'POST',
    //   body: formDataObj
    // });
  };

  return (
    <DynamicForm
      title="Startup EOI - IEDC Summit 2025"
      subtitle="Express your interest to showcase your innovation"
      fields={startupEOIFields}
      submitButtonText="Submit"
      successMessage="Thank you! Your Startup EOI has been submitted successfully."
      onSubmit={handleSubmit}
      logoSrc="/iedc-summit-25-logo.png"
      backToHome={true}
    />
  );
};

export default StartupEOIForm;