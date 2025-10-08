import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { CALCULATOR_DATA } from '../utils/constants.js';

// Import the step components
import ProgressBar from '../components/calculator/ProgressBar';
import PropertyTypeStep from '../components/calculator/PropertyTypeStep';
import RoomSelectionStep from '../components/calculator/RoomSelectionStep';
import PackageSelectionStep from '../components/calculator/PackageSelectionStep';
import LeadCaptureStep from '../components/calculator/LeadCaptureStep';
import ResultsStep from '../components/calculator/ResultsStep';

const Calculator = () => {
  const [step, setStep] = useState(1);
  const [propertyType, setPropertyType] = useState(null);
  const [selectedRooms, setSelectedRooms] = useState({});
  const [packageChoices, setPackageChoices] = useState({});
  const [totalCost, setTotalCost] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- START: CORRECTED SCROLLING LOGIC ---
  const calculatorCardRef = useRef(null);

  // This effect now only scrolls if the step is greater than 1.
  // It will NOT scroll on the initial page load (when step is 1).
  useEffect(() => {
    if (step > 1) {
      calculatorCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [step]);
  // --- END: CORRECTED SCROLLING LOGIC ---


  const handlePropertySelect = (type) => { setPropertyType(type); setSelectedRooms({}); setPackageChoices({}); };
  const handleRoomToggle = (room) => {
    setSelectedRooms(prev => {
      const newSelection = { ...prev, [room]: !prev[room] };
      if (!newSelection[room]) {
        const newPackageChoices = { ...packageChoices };
        delete newPackageChoices[room];
        setPackageChoices(newPackageChoices);
      }
      return newSelection;
    });
  };
  const handlePackageSelect = (room, pkg) => { setPackageChoices(prev => ({ ...prev, [room]: pkg })); };
  const handleBack = () => setStep(prev => prev - 1);
  const handleReset = () => { setStep(1); setPropertyType(null); setSelectedRooms({}); setPackageChoices({}); setTotalCost(0); };

  const calculateTotal = () => {
    let cost = 0;
    const { packages, basePrices } = CALCULATOR_DATA;
    for (const room in packageChoices) {
      const selectedPackage = packageChoices[room];
      if (basePrices[room] && packages[selectedPackage]) {
        cost += basePrices[room] * packages[selectedPackage].multiplier;
      }
    }
    setTotalCost(cost);
    return cost;
  };

  const handleFormSubmit = async (formData) => {
    setIsSubmitting(true);
    const calculatedCost = calculateTotal();

    const costLowerBound = calculatedCost * 0.9;
    const costUpperBound = calculatedCost * 1.1;

    let estimateDetails = `Property Type: ${CALCULATOR_DATA.propertyTypes[propertyType].name}\n\n`;
    estimateDetails += "Selected Rooms & Packages:\n";
    Object.entries(packageChoices).forEach(([room, pkg]) => {
      estimateDetails += `- ${room}: ${pkg}\n`;
    });
    
    const templateParams = {
      user_name: `${formData.firstName} ${formData.lastName}`,
      user_email: formData.email,
      user_phone: formData.phone,
      property_name: formData.propertyName || 'Not Provided',
      whatsapp_updates: formData.whatsappUpdates ? 'Yes' : 'No',
      estimate_range: `₹${costLowerBound.toLocaleString()} - ₹${costUpperBound.toLocaleString()}`,
      estimate_details: estimateDetails,
    };

    try {
      await emailjs.send(
        'service_z0sxmsp', 
        'template_yqq39br', 
        templateParams, 
        'xkLsSVlNKa-DLWhK2'
      );
      setStep(prev => prev + 1);
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Sorry, there was an error submitting your details. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const canProceed = () => {
    if (step === 1) return propertyType !== null;
    if (step === 2) return Object.values(selectedRooms).some(v => v);
    if (step === 3) {
      const roomsToDesign = Object.keys(selectedRooms).filter(r => selectedRooms[r]);
      return roomsToDesign.length > 0 && roomsToDesign.every(r => packageChoices[r]);
    }
    return true;
  };

  const stepVariants = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -50 } };

  return (
    <div className="overflow-hidden bg-white dark:bg-gray-800">
      <div className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 via-white to-primary-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-primary-600 dark:text-primary-400 font-semibold text-sm sm:text-base lg:text-lg tracking-wide uppercase mb-4 px-3 sm:px-4 py-1 sm:py-2 bg-primary-50 dark:bg-primary-900/30 rounded-full">
              Interior Cost Calculator
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
              Get an Instant Estimate for Your 
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent block mt-2">
                Dream Interior
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Answer a few simple questions to get a customized price estimate for your home interior project.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 -mt-12 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={calculatorCardRef} className="card-modern p-6 sm:p-8 lg:p-12 shadow-modern-lg">
            
            {step < 5 && <ProgressBar currentStep={step} totalSteps={5} />}

            <div className="calculator-content min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div key={step} variants={stepVariants} initial="hidden" animate="visible" exit="exit" transition={{ duration: 0.3 }}>
                  {step === 1 && <PropertyTypeStep selected={propertyType} onSelect={handlePropertySelect} />}
                  {step === 2 && <RoomSelectionStep propertyType={propertyType} selectedRooms={selectedRooms} onToggleRoom={handleRoomToggle} />}
                  {step === 3 && <PackageSelectionStep selectedRooms={selectedRooms} packageChoices={packageChoices} onSelectPackage={handlePackageSelect} />}
                  {step === 4 && <LeadCaptureStep onSubmit={handleFormSubmit} isSubmitting={isSubmitting} />}
                  {step === 5 && <ResultsStep totalCost={totalCost} onReset={handleReset} />}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div>
                {step > 1 && step < 5 && (
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleBack} className="btn-secondary px-6 py-3">
                    Back
                  </motion.button>
                )}
              </div>
              <div>
                {step < 4 && (
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setStep(s => s + 1)} disabled={!canProceed()} 
                  className="btn-primary w-full sm:w-auto px-6 py-3 disabled:opacity-50">
                    Next
                  </motion.button>
                )}
                {step === 4 && (
                   <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" form="lead-form" disabled={isSubmitting} 
                   className="btn-primary w-full sm:w-auto px-6 py-3 disabled:opacity-50">
                     {isSubmitting ? 'Submitting...' : 'Submit'}
                   </motion.button>
                )}
                {step === 5 && (
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleReset} className="btn-secondary px-6 py-3">
                    Start Over
                  </motion.button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;