import React from 'react';
import SkillBar from 'react-skillbars';

const SKILLS1 = [
    { type: 'HTML', level: 50, color: { bar: '#4288d0', title: { text: '#fff', background: '#124e8c' } } },
    { type: 'CSS', level: 30, color: { bar: '#4288d0', title: { text: '#fff', background: '#124e8c' } } },
    { type: 'Javascript', level: 25, color: { bar: '#2c3e50', title: { text: '#fff', background: '#2c3e50' } } },
    { type: 'PHP', level: 20, color: { bar: '#5a68a5', title: { text: '#fff', background: '#46465e' } } },
    
    { type: 'NodeJS', level: 15, color: { bar: '#2ecc71', title: { text: '#fff', background: '#27ae60' } } },
    { type: 'Codeigniter', level: 10, color: { bar: '#2ecc71', title: { text: '#fff', background: '#27ae60' } } }
   
  ];

  const SKILLS2 = [
    { type: 'mongoDB', level: 25, color: { bar: '#4288d0', title: { text: '#fff', background: '#124e8c' } } },
    { type: 'MySQL', level: 20, color: { bar: '#2c3e50', title: { text: '#fff', background: '#2c3e50' } } },
     ];

  const SKILLS3 = [
    { type: 'Bootstrap', level: 45, color: { bar: '#4288d0', title: { text: '#fff', background: '#124e8c' } } },
    { type: 'React', level: 35, color: { bar: '#4288d0', title: { text: '#fff', background: '#124e8c' } } },
    { type: 'Express', level: 35, color: { bar: '#2c3e50', title: { text: '#fff', background: '#2c3e50' } } },
    { type: 'GitHub', level: 30, color: { bar: '#5a68a5', title: { text: '#fff', background: '#46465e' } } },
    { type: 'jQuery', level: 10, color: { bar: '#2ecc71', title: { text: '#fff', background: '#27ae60' } } }
    
    
    ];
  const Skills = () => (
    <div className = "Skills">
  <div id="elementAllBarAllTextAllBg">
     
     <p>LANGUAGES & FRAMEWORKS</p>
      <SkillBar skills={SKILLS1} />
      <p>DATABASES</p>
      <SkillBar skills={SKILLS2} />
      <p>TOOLS & LIBRARIES</p>
      <SkillBar skills={SKILLS3} />
    </div>
    </div>
);


export default Skills;