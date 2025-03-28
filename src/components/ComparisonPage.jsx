import React from 'react';

const ComparisonPage = () => {
  // Styles object to replace external CSS
  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Inter, sans-serif',
      backgroundColor: '#f4f6f7',
      color: '#2c3e50',
      lineHeight: 1.6
    },
    comparisonTable: {
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      marginBottom: '30px'
    },
    tableHeader: {
      backgroundColor: '#3498db',
      color: 'white',
      padding: '12px',
      textAlign: 'left'
    },
    tableRow: {
      borderBottom: '1px solid #ecf0f1'
    },
    tableRowHover: {
      ':hover': {
        backgroundColor: '#f1f4f6'
      }
    },
    swotAnalysis: {
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '20px'
    },
    swotContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '20px'
    },
    swotItem: {
      borderRadius: '12px',
      padding: '20px',
      transition: 'transform 0.3s ease'
    },
    strength: {
      backgroundColor: 'rgba(46, 204, 113, 0.1)',
      border: '2px solid #2ecc71'
    },
    weakness: {
      backgroundColor: 'rgba(231, 76, 60, 0.1)',
      border: '2px solid #e74c3c'
    },
    opportunity: {
      backgroundColor: 'rgba(52, 152, 219, 0.1)',
      border: '2px solid #3498db'
    },
    threat: {
      backgroundColor: 'rgba(241, 196, 15, 0.1)',
      border: '2px solid #f1c40f'
    },
    heading: {
      color: '#3498db',
      textAlign: 'center',
      marginBottom: '20px'
    },
    listItem: {
      listStyleType: 'none',
      paddingLeft: '20px',
      position: 'relative',
      marginBottom: '10px'
    },
    listItemBefore: {
      content: '•',
      color: '#2c3e50',
      position: 'absolute',
      left: '0'
    }
  };

  const companyData = [
    {
      name: 'CSR2Life',
      audience: 'Indian Companies & NGOs',
      features: 'NGO Discovery, CSR Matchmaking',
      region: 'India',
      pricing: 'Commission-based'
    },
    {
      name: 'Benevity',
      audience: 'Large Global Corporations',
      features: 'Employee Donation & Tracking',
      region: 'Global',
      pricing: 'Subscription-based'
    },
    {
      name: 'Millie',
      audience: 'Mid-Sized Global Companies',
      features: 'Analytics & Employee Engagement',
      region: 'Global (Mostly US)',
      pricing: 'Subscription & Commission'
    }
  ];

  const swotAnalysis = {
    strengths: [
      'Unique platform addressing a specific market need.',
      'Alignment with CSR policies in India.',
      'Focus on transparency & impact measurement.'
    ],
    weaknesses: [
      'Dependence on regulatory support.',
      'High resource requirements for vetting projects.'
    ],
    opportunities: [
      'Growing emphasis on CSR globally.',
      'Potential expansion to other markets.'
    ],
    threats: [
      'New competitors with similar offerings.',
      'Regulatory changes affecting CSR spending.'
    ]
  };

  return (
    <div style={styles.container}>
      {/* Comparison Table */}
      <section style={styles.comparisonTable}>
        <h2 style={styles.heading}>Company Comparison</h2>
        <table style={{width: '100%', borderCollapse: 'separate'}}>
          <thead>
            <tr>
              {['Company', 'Target Audience', 'Features', 'Region', 'Pricing Model'].map((header, index) => (
                <th key={index} style={styles.tableHeader}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {companyData.map((company, index) => (
              <tr key={index} style={{...styles.tableRow, ...styles.tableRowHover}}>
                {Object.values(company).map((value, colIndex) => (
                  <td key={colIndex} style={{padding: '12px'}}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* SWOT Analysis */}
      <section style={styles.swotAnalysis}>
        <h2 style={styles.heading}>SWOT Analysis</h2>
        <div style={styles.swotContainer}>
          {[
            { title: 'Strengths', items: swotAnalysis.strengths, style: styles.strength },
            { title: 'Weaknesses', items: swotAnalysis.weaknesses, style: styles.weakness },
            { title: 'Opportunities', items: swotAnalysis.opportunities, style: styles.opportunity },
            { title: 'Threats', items: swotAnalysis.threats, style: styles.threat }
          ].map((section, index) => (
            <div key={index} style={{...styles.swotItem, ...section.style}}>
              <h3 style={{...styles.heading, margin: 0}}>{section.title}</h3>
              <ul style={{padding: 0}}>
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} style={styles.listItem}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ComparisonPage;