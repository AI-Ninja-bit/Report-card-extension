/**
 * Report Card Configuration
 * Centralized configuration for all report card settings
 */

const REPORT_CONFIG = {
    // Academic Year
    academicYear: '2024-25',
    
    // School Information
    school: {
        name: 'School Name',
        udise: '',
        district: 'SONBHADRA',
        block: 'Ghorawal',
        board: 'Basic Education Department',
        government: 'Government of Uttar Pradesh'
    },
    
    // Class Settings
    class: 5,
    
    // Examination Settings
    exams: [
        { id: 'first', name: 'प्रथम सत्र परीक्षा', shortName: 'FA' },
        { id: 'half', name: 'अर्धवार्षिक परीक्षा', shortName: 'HA' },
        { id: 'second', name: 'द्वितीय परीक्षा', shortName: 'SA1' },
        { id: 'annual', name: 'वार्षिक परीक्षा', shortName: 'FA2' }
    ],
    
    // Subject Maximum Marks per Exam
    maxMarks: {
        perExam: 100,
        total: 700
    },
    
    // Attendance Settings
    attendance: {
        workingDays: 220,
        defaultPresent: 0
    },
    
    // Grading Scale
    grading: {
        A: { min: 90, label: 'Outstanding' },
        B: { min: 75, label: 'Excellent' },
        C: { min: 60, label: 'Good' },
        D: { min: 45, label: 'Satisfactory' },
        E: { min: 0, label: 'Needs Improvement' }
    },
    
    // Colors (CSS Variables Reference)
    colors: {
        primary: '#1F4E79',
        primaryDark: '#163b5c',
        secondary: '#2F5D82',
        accent: '#F2B705',
        accentLight: '#FFF6DA',
        background: '#F4F7FB',
        border: '#D6DCE5',
        text: '#222222',
        textLight: '#555555',
        textMuted: '#777777',
        success: '#28a745',
        danger: '#dc3545',
        warning: '#ffc107'
    }
};

/**
 * Get grade based on percentage
 * @param {number} percentage - Student percentage
 * @returns {object} Grade info with letter and label
 */
function getGrade(percentage) {
    for (const [letter, info] of Object.entries(REPORT_CONFIG.grading)) {
        if (percentage >= info.min) {
            return { letter, label: info.label };
        }
    }
    return { letter: 'E', label: 'Needs Improvement' };
}

/**
 * Get color by variable name
 * @param {string} colorName - Color key from config
 * @returns {string} Hex color code
 */
function getColor(colorName) {
    return REPORT_CONFIG.colors[colorName] || '#000000';
}

