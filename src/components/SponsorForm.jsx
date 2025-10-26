import DynamicForm from './DynamicForm';

export const SponsorForm = () => {
  const sponsorFields = [
    {
      name: 'organizationName',
      label: 'Company/Organization Name',
      type: 'text',
      placeholder: 'Enter your organization name',
      required: true,
      maxLength: 100
    },
    {
      name: 'contactName',
      label: 'Contact Person Name',
      type: 'text',
      placeholder: 'Enter your name',
      required: true,
      maxLength: 50
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'Enter your email address',
      required: true
    },
    {
      name: 'phone',
      label: 'Contact Number',
      type: 'tel',
      placeholder: 'Enter your contact number',
      required: true,
      validation: 'phone'
    },
    {
      name: 'website',
      label: 'Website / LinkedIn URL',
      type: 'url',
      placeholder: 'https://example.com',
      required: false,
      showOptional: true
    },
    {
      name: 'partnershipType',
      label: 'Select Partnership / Sponsorship Type',
      type: 'select',
      required: true,
      options: [
            { value: 'INNOVATION_PARTNER_OF_THE_YEAR', label: 'INNOVATION PARTNER OF THE YEAR : 25 LAKHS' },
            { value: 'INNOVATION_CATALYST', label: 'INNOVATION CATALYST : 15 LAKHS x 2' },
            { value: 'TECHNOLOGY_ENABLER', label: 'TECHNOLOGY ENABLER : 10 LAKHS x 3' },
            { value: 'STARTUP_ENABLER', label: 'STARTUP ENABLER : 5 LAKHS x 6' },
            { value: 'INNOVATION_SUPPORTER', label: 'INNOVATION SUPPORTER : 2.5 LAKHS x 4' },
            { value: 'ECOSYSTEM_PARTNER', label: 'ECOSYSTEM PARTNER : 2 LAKHS x 2' },
            { value: 'EVENT_COLLABORATOR', label: 'EVENT COLLABORATOR : 1 LAKHS x 20' },
            { value: 'CAMPUS_INNOVATOR_PARTNER', label: 'CAMPUS INNOVATOR PARTNER : 0.5 LAKHS x 4' },
            { value: 'SPECIAL_PATRON_PARTNER', label: 'SPECIAL PATRON PARTNER : 0.5 LAKHS x 2' },
            { value: 'OTHER', label: 'OTHER' },
      ]
    },
    {
      name: 'remarks',
      label: 'Remarks',
      type: 'textarea',
      placeholder: 'Add any additional remarks or requirements...',
      rows: 5,
      required: false,
      showOptional: true,
      maxLength: 500
    }
  ];

  const handleSubmit = async (formData) => {
    console.log('Form submitted:', formData);
    // Send to your backend API here
    // await fetch('/api/sponsor', { method: 'POST', body: JSON.stringify(formData) });
  };

  return (
    <DynamicForm
      title="Sponsorship IEDC Summit 2025"
      subtitle="Join us as a partner in this exciting journey"
      fields={sponsorFields}
      submitButtonText="Submit Application"
      onSubmit={handleSubmit}
    />
  );
};