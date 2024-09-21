import React from 'react';
import RightSidebar from './RightSidebar'; // Assuming RightSidebar is your sidebar component

const LayoutWithSidebar = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      {/* Render the Sidebar */}
      <RightSidebar />
      
      {/* Render the page content */}
      <main
        style={{
          flexGrow: 1,
          padding: '16px',
          marginTop: '64px', 
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default LayoutWithSidebar;
