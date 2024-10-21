import React from 'react';
import './LearningStats.css'; // Make sure the file name matches

function LearningStats() {
  return (
    <div className='learning-stats'>
        <div className='statistic'>
            <div className='stat-left'>
                <div className='stat-info'>
                    <h4>Learning online is</h4>
                    <h1>EASIER</h1>
                    <h3>Than ever before</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
                    <p>tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    <button>Learn More</button>
                </div>
            </div>
            <div className='stat-right'>
                
                <div className='stat-row'>
                    <div className='stat-card'>
                        <h4>5789</h4>
                        <p>Online Students</p>
                    </div>
                    <div className='stat-card'>
                        <h4>5789</h4>
                        <p>Learning Videos</p>
                    </div>
                </div>
                
                <div className='stat-row'>
                    <div className='stat-card'>
                        <h4>5789</h4>
                        <p>Courses Available</p>
                    </div>
                    <div className='stat-card'>
                        <h4>5789</h4>
                        <p>Certifications Awarded</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LearningStats;
