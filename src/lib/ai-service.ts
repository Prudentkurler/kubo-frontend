/**
 * AI Service for medical image analysis and report generation
 * Uses Google Generative AI (Gemini) to simulate radiology analysis
 */

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_AI_API_KEY;
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

export interface CTRAnalysisResult {
  ctrValue: number;
  status: 'Normal' | 'Warning' | 'Abnormal';
  confidence: number;
  findings: string[];
  recommendation: string;
}

export interface ChestXRayAnalysis {
  patientId: string;
  imageId: string;
  timestamp: string;
  ctr: CTRAnalysisResult;
  findings: {
    category: string;
    severity: 'Normal' | 'Mild' | 'Moderate' | 'Severe';
    confidence: number;
    description: string;
    location?: string;
  }[];
  impressions: string;
  recommendations: string[];
}

export interface ReportGenerationRequest {
  patientName: string;
  patientId: string;
  age: number;
  gender: string;
  studyDate: string;
  clinicalHistory: string;
  analysis: ChestXRayAnalysis;
}

export interface GeneratedReport {
  reportId: string;
  generatedAt: string;
  sections: {
    clinicalHistory: string;
    technique: string;
    findings: string;
    impression: string;
    recommendations: string;
  };
  rawText: string;
}

/**
 * Simulate CTR measurement analysis
 */
export async function analyzeCTR(imageData?: string): Promise<CTRAnalysisResult> {
  // Simulate realistic CTR values
  const mockCTRValue = 0.45 + Math.random() * 0.15; // Range: 0.45 - 0.60
  
  let status: 'Normal' | 'Warning' | 'Abnormal';
  let findings: string[] = [];
  let recommendation: string;

  if (mockCTRValue < 0.5) {
    status = 'Normal';
    findings = ['Cardiac silhouette within normal limits'];
    recommendation = 'No immediate action required. Routine follow-up.';
  } else if (mockCTRValue < 0.55) {
    status = 'Warning';
    findings = [
      'Mild cardiomegaly detected',
      'Heart size at upper limit of normal'
    ];
    recommendation = 'Consider clinical correlation. Follow-up in 3-6 months if symptomatic.';
  } else {
    status = 'Abnormal';
    findings = [
      'Significant cardiomegaly present',
      'Cardiac silhouette enlarged',
      'CTR exceeds normal threshold'
    ];
    recommendation = 'Urgent cardiology consultation recommended. Consider echocardiography.';
  }

  return {
    ctrValue: Math.round(mockCTRValue * 100) / 100,
    status,
    confidence: 0.89 + Math.random() * 0.1, // 89-99% confidence
    findings,
    recommendation
  };
}

/**
 * Perform comprehensive chest X-ray analysis using AI
 */
export async function analyzeChestXRay(
  patientId: string,
  imageId: string,
  imageData?: string
): Promise<ChestXRayAnalysis> {
  try {
    // Get CTR analysis
    const ctr = await analyzeCTR(imageData);

    // Simulate common chest X-ray findings
    const possibleFindings: ChestXRayAnalysis['findings'] = [
      {
        category: 'Cardiac',
        severity: (ctr.status === 'Abnormal' ? 'Moderate' : ctr.status === 'Warning' ? 'Mild' : 'Normal') as 'Normal' | 'Mild' | 'Moderate' | 'Severe',
        confidence: ctr.confidence,
        description: ctr.status === 'Normal' 
          ? 'Cardiac silhouette is within normal limits'
          : `Cardiomegaly noted with CTR of ${ctr.ctrValue}`,
        location: 'Central mediastinum'
      },
      {
        category: 'Lungs',
        severity: (Math.random() > 0.7 ? 'Mild' : 'Normal') as 'Normal' | 'Mild' | 'Moderate' | 'Severe',
        confidence: 0.92,
        description: Math.random() > 0.7 
          ? 'Subtle increased opacity in right lower lobe, possibly infectious/inflammatory'
          : 'Lung fields are clear bilaterally. No focal consolidation or infiltrate.',
        location: Math.random() > 0.7 ? 'Right lower lobe' : undefined
      },
      {
        category: 'Pleura',
        severity: 'Normal',
        confidence: 0.95,
        description: 'No pleural effusion or pneumothorax identified',
        location: 'Bilateral'
      },
      {
        category: 'Mediastinum',
        severity: 'Normal',
        confidence: 0.91,
        description: 'Mediastinal contours are within normal limits. No widening or masses.',
        location: 'Central'
      }
    ];

    // Generate impression based on findings
    let impressions = '';
    if (ctr.status === 'Normal' && possibleFindings.every(f => f.severity === 'Normal')) {
      impressions = 'No acute cardiopulmonary abnormality detected. Study within normal limits.';
    } else if (ctr.status === 'Warning') {
      impressions = 'Borderline cardiomegaly noted. Clinical correlation advised. Otherwise unremarkable chest radiograph.';
    } else {
      impressions = 'Cardiomegaly present. Recommend further cardiac evaluation. Additional findings as detailed above.';
    }

    // Generate recommendations
    const recommendations: string[] = [];
    if (ctr.status === 'Abnormal') {
      recommendations.push('Cardiology consultation recommended');
      recommendations.push('Consider echocardiography for cardiac function assessment');
    } else if (ctr.status === 'Warning') {
      recommendations.push('Clinical correlation with patient symptoms');
      recommendations.push('Follow-up imaging in 3-6 months if symptomatic');
    }

    if (possibleFindings.some(f => f.severity !== 'Normal' && f.category === 'Lungs')) {
      recommendations.push('Consider follow-up chest X-ray in 2-4 weeks if symptomatic');
    }

    if (recommendations.length === 0) {
      recommendations.push('Routine follow-up as clinically indicated');
    }

    return {
      patientId,
      imageId,
      timestamp: new Date().toISOString(),
      ctr,
      findings: possibleFindings,
      impressions,
      recommendations
    };
  } catch (error) {
    console.error('Error analyzing chest X-ray:', error);
    throw new Error('Failed to analyze chest X-ray');
  }
}

/**
 * Generate a professional radiology report using AI
 */
export async function generateReport(
  request: ReportGenerationRequest
): Promise<GeneratedReport> {
  try {
    const prompt = `You are an expert radiologist. Generate a professional chest X-ray radiology report based on the following information:

Patient Information:
- Name: ${request.patientName}
- ID: ${request.patientId}
- Age: ${request.age} years
- Gender: ${request.gender}
- Study Date: ${request.studyDate}

Clinical History:
${request.clinicalHistory}

AI Analysis Results:
- CTR: ${request.analysis.ctr.ctrValue} (${request.analysis.ctr.status})
- Confidence: ${Math.round(request.analysis.ctr.confidence * 100)}%

Findings:
${request.analysis.findings.map(f => `- ${f.category}: ${f.description} (${f.severity}, ${Math.round(f.confidence * 100)}% confidence)`).join('\n')}

Impression:
${request.analysis.impressions}

Recommendations:
${request.analysis.recommendations.map(r => `- ${r}`).join('\n')}

Please generate a complete, professional radiology report with the following sections:
1. CLINICAL HISTORY
2. TECHNIQUE
3. FINDINGS
4. IMPRESSION
5. RECOMMENDATIONS

Format it professionally as it would appear in a medical record.`;

    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 2048,
        }
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    const data = await response.json();
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

    // Parse the generated text into sections
    const sections = parseReportSections(generatedText, request);

    return {
      reportId: `RPT-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      generatedAt: new Date().toISOString(),
      sections,
      rawText: generatedText
    };
  } catch (error) {
    console.error('Error generating report:', error);
    
    // Fallback to template-based report if API fails
    return generateFallbackReport(request);
  }
}

/**
 * Parse generated report text into structured sections
 */
function parseReportSections(
  text: string,
  request: ReportGenerationRequest
): GeneratedReport['sections'] {
  const sections = {
    clinicalHistory: '',
    technique: '',
    findings: '',
    impression: '',
    recommendations: ''
  };

  // Try to extract sections using common headers
  const clinicalMatch = text.match(/CLINICAL HISTORY[:\s]*([\s\S]*?)(?=TECHNIQUE|FINDINGS|$)/i);
  const techniqueMatch = text.match(/TECHNIQUE[:\s]*([\s\S]*?)(?=FINDINGS|IMPRESSION|$)/i);
  const findingsMatch = text.match(/FINDINGS[:\s]*([\s\S]*?)(?=IMPRESSION|RECOMMENDATIONS|$)/i);
  const impressionMatch = text.match(/IMPRESSION[:\s]*([\s\S]*?)(?=RECOMMENDATIONS|$)/i);
  const recommendationsMatch = text.match(/RECOMMENDATIONS[:\s]*([\s\S]*?)$/i);

  sections.clinicalHistory = clinicalMatch?.[1]?.trim() || request.clinicalHistory;
  sections.technique = techniqueMatch?.[1]?.trim() || 'Single frontal view chest radiograph obtained.';
  sections.findings = findingsMatch?.[1]?.trim() || request.analysis.findings.map(f => f.description).join('\n');
  sections.impression = impressionMatch?.[1]?.trim() || request.analysis.impressions;
  sections.recommendations = recommendationsMatch?.[1]?.trim() || request.analysis.recommendations.join('\n');

  return sections;
}

/**
 * Generate fallback report if API fails
 */
function generateFallbackReport(request: ReportGenerationRequest): GeneratedReport {
  const { patientName, patientId, age, gender, studyDate, clinicalHistory, analysis } = request;

  const sections = {
    clinicalHistory: clinicalHistory || 'Routine chest X-ray evaluation.',
    
    technique: 'Single frontal view chest radiograph obtained in the upright position.',
    
    findings: `
CARDIAC: Cardiothoracic ratio measures ${analysis.ctr.ctrValue}. ${analysis.ctr.findings.join('. ')}.

${analysis.findings.map(f => 
  `${f.category.toUpperCase()}: ${f.description}${f.location ? ` Location: ${f.location}.` : ''}`
).join('\n\n')}
    `.trim(),
    
    impression: analysis.impressions,
    
    recommendations: analysis.recommendations.join('\n')
  };

  return {
    reportId: `RPT-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    generatedAt: new Date().toISOString(),
    sections,
    rawText: Object.values(sections).join('\n\n')
  };
}

/**
 * Get AI suggestions for differential diagnosis
 */
export async function getDifferentialDiagnosis(findings: string[]): Promise<string[]> {
  // Simulate differential diagnosis based on findings
  const diagnoses: string[] = [];

  if (findings.some(f => f.toLowerCase().includes('cardiomegaly'))) {
    diagnoses.push('Congestive heart failure');
    diagnoses.push('Dilated cardiomyopathy');
    diagnoses.push('Pericardial effusion');
  }

  if (findings.some(f => f.toLowerCase().includes('opacity') || f.toLowerCase().includes('infiltrate'))) {
    diagnoses.push('Community-acquired pneumonia');
    diagnoses.push('Atelectasis');
    diagnoses.push('Pulmonary edema');
  }

  if (diagnoses.length === 0) {
    diagnoses.push('No significant pathology identified');
  }

  return diagnoses;
}
