module.exports = {
  name: 'Pulley',
  website: 'https://pulley.com',
  logo: 'logo.svg',
  available: [
    {
      category: 'equity_management',
      features: [
        'cap_table_management',
        'document_storage',
        'financing_round_modelling',
      ],
      price: ([stakeholders]) => (stakeholders < 25 ? 0 : stakeholders * 10),
    },
    {
      category: 'equity_management',
      features: ['409a_valuations'],
      price: ([stakeholders]) => stakeholders * 10,
    },
  ],
};
