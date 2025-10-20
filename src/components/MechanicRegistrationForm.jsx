import React, { useState } from "react";
import {
  X,
  Upload,
  User,
  Wrench,
  FileText,
  CreditCard,
  Check,
  Phone,
} from "lucide-react";
import "./MechanicRegistrationForm.css";

const MechanicRegistrationForm = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Details
    fullName: "",
    dateOfBirth: "",
    gender: "",
    contactNumber: "",
    email: "",
    address: "",
    emergencyContactName: "",
    emergencyContactNumber: "",

    // Professional Details
    experience: "",
    specializations: [],
    certifications: [],
    languages: "",
    workTime: "",
    ownTools: "",

    // Upload Documents
    photo: null,
    aadharFront: null,
    aadharBack: null,
    panCard: null,
    licenseFront: null,
    licenseBack: null,

    // Payment Details
    upiId: "",
    bankAccount: "",
    ifscCode: "",
    accountHolderName: "",

    // Declaration
    agreeTerms: false,
    eSignature: "",
    otpVerified: false,
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const steps = [
    { number: 1, title: "Personal Details", icon: <User size={20} /> },
    { number: 2, title: "Professional Details", icon: <Wrench size={20} /> },
    { number: 3, title: "Upload Documents", icon: <Upload size={20} /> },
    { number: 4, title: "Payment Details", icon: <CreditCard size={20} /> },
    { number: 5, title: "Declaration", icon: <FileText size={20} /> },
  ];

  const specializations = [
    "Engine Repair",
    "Transmission",
    "Brake Systems",
    "Electrical/Electronics",
    "Air Conditioning",
    "Suspension",
    "Hybrid/Electric Vehicles",
    "Diesel Engines",
  ];

  const certifications = [
    "ASE A1 - Engine Repair",
    "ASE A2 - Automatic Transmission",
    "ASE A3 - Manual Drive Train",
    "ASE A4 - Suspension & Steering",
    "ASE A5 - Brakes",
    "ASE A6 - Electrical/Electronic",
    "ASE A7 - Heating & AC",
    "ASE A8 - Engine Performance",
    "State Inspection License",
    "Manufacturer Certifications",
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSpecializationChange = (specialization) => {
    setFormData((prev) => ({
      ...prev,
      specializations: prev.specializations.includes(specialization)
        ? prev.specializations.filter((item) => item !== specialization)
        : [...prev.specializations, specialization],
    }));
  };

  const handleCertificationChange = (certification) => {
    setFormData((prev) => ({
      ...prev,
      certifications: prev.certifications.includes(certification)
        ? prev.certifications.filter((item) => item !== certification)
        : [...prev.certifications, certification],
    }));
  };

  const handleFileUpload = (field, file) => {
    setFormData((prev) => ({
      ...prev,
      [field]: file,
    }));
  };

  const sendOTP = () => {
    if (formData.contactNumber.length === 10) {
      setOtpSent(true);
      // Simulate OTP sending
      alert("OTP sent to your mobile number!");
    }
  };

  const verifyOTP = () => {
    if (otp === "123456") {
      // Mock verification
      setFormData((prev) => ({ ...prev, otpVerified: true }));
      alert("OTP Verified Successfully!");
    } else {
      alert("Invalid OTP. Try 123456 for demo.");
    }
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    if (formData.agreeTerms && formData.otpVerified && formData.eSignature) {
      // Validate required fields
      const requiredFields = {
        1: [
          "fullName",
          "dateOfBirth",
          "gender",
          "contactNumber",
          "address",
          "emergencyContactName",
          "emergencyContactNumber",
        ],
        2: [
          "experience",
          "specializations",
          "languages",
          "workTime",
          "ownTools",
        ],
        3: [
          "photo",
          "aadharFront",
          "aadharBack",
          "panCard",
          "licenseFront",
          "licenseBack",
        ],
        4: ["upiId"],
      };

      const currentRequired = requiredFields[currentStep] || [];
      const missingFields = currentRequired.filter((field) => {
        if (Array.isArray(formData[field])) {
          return formData[field].length === 0;
        }
        return !formData[field] || formData[field] === "";
      });

      if (missingFields.length > 0) {
        alert(
          `Please fill in all required fields: ${missingFields.join(", ")}`
        );
        return;
      }

      alert(
        "Thank you for enrolling! We will verify your profile and you will get a confirmation call. Share our Buddy ID and access. Ready to Onboard."
      );
      onClose();
    } else {
      alert("Please complete all required fields and verify OTP.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="mechanic-form-modal">
        <div className="form-header">
          <h2>Mechanic Enrollment Form</h2>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="progress-steps">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`step ${currentStep === step.number ? "active" : ""} ${
                currentStep > step.number ? "completed" : ""
              }`}
            >
              <div className="step-icon">
                {currentStep > step.number ? <Check size={16} /> : step.icon}
              </div>
              <div className="step-info">
                <span className="step-number">Step {step.number}</span>
                <span className="step-title">{step.title}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="form-content">
          {/* Step 1: Personal Details */}
          {currentStep === 1 && (
            <div className="form-step">
              <h3>Personal Details</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      handleInputChange("fullName", e.target.value)
                    }
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Date of Birth *</label>
                  <input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) =>
                      handleInputChange("dateOfBirth", e.target.value)
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Gender *</label>
                  <select
                    value={formData.gender}
                    onChange={(e) =>
                      handleInputChange("gender", e.target.value)
                    }
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Contact Number * (OTP verification)</label>
                  <div className="otp-group">
                    <input
                      type="tel"
                      value={formData.contactNumber}
                      onChange={(e) =>
                        handleInputChange("contactNumber", e.target.value)
                      }
                      placeholder="10-digit mobile number"
                      maxLength="10"
                      required
                    />
                    <button
                      type="button"
                      className="btn btn-outline"
                      onClick={sendOTP}
                    >
                      <Phone size={16} />
                      Send OTP
                    </button>
                  </div>
                  {otpSent && (
                    <div className="otp-verification">
                      <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Enter OTP"
                        maxLength="6"
                      />
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={verifyOTP}
                      >
                        Verify
                      </button>
                      {formData.otpVerified && (
                        <span className="verified">✓ Verified</span>
                      )}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label>Email ID (Optional)</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group full-width">
                  <label>Address *</label>
                  <textarea
                    value={formData.address}
                    onChange={(e) =>
                      handleInputChange("address", e.target.value)
                    }
                    placeholder="Enter your complete address"
                    rows="3"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Emergency Contact Name *</label>
                  <input
                    type="text"
                    value={formData.emergencyContactName}
                    onChange={(e) =>
                      handleInputChange("emergencyContactName", e.target.value)
                    }
                    placeholder="Emergency contact name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Emergency Contact Number *</label>
                  <input
                    type="tel"
                    value={formData.emergencyContactNumber}
                    onChange={(e) =>
                      handleInputChange(
                        "emergencyContactNumber",
                        e.target.value
                      )
                    }
                    placeholder="Emergency contact number"
                    maxLength="10"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Professional Details */}
          {currentStep === 2 && (
            <div className="form-step">
              <h3>Professional Details</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>Years of Experience *</label>
                  <select
                    value={formData.experience}
                    onChange={(e) =>
                      handleInputChange("experience", e.target.value)
                    }
                    required
                  >
                    <option value="">Select Experience</option>
                    <option value="1-2">1-2 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Languages Known *</label>
                  <input
                    type="text"
                    value={formData.languages}
                    onChange={(e) =>
                      handleInputChange("languages", e.target.value)
                    }
                    placeholder="e.g., Hindi, English, Regional languages"
                    required
                  />
                </div>
                <div className="form-group full-width">
                  <label>Specializations * (Select multiple)</label>
                  <div className="checkbox-group">
                    {specializations.map((spec) => (
                      <label key={spec} className="checkbox-label">
                        <input
                          type="checkbox"
                          checked={formData.specializations.includes(spec)}
                          onChange={() => handleSpecializationChange(spec)}
                        />
                        <span className="checkmark"></span>
                        {spec}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="form-group full-width">
                  <label>Certifications (Select all that apply)</label>
                  <div className="checkbox-group">
                    {certifications.map((cert) => (
                      <label key={cert} className="checkbox-label">
                        <input
                          type="checkbox"
                          checked={formData.certifications.includes(cert)}
                          onChange={() => handleCertificationChange(cert)}
                        />
                        <span className="checkmark"></span>
                        {cert}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="form-group full-width">
                  <label>Preferred Work Time *</label>
                  <div className="radio-group">
                    {[
                      {
                        value: "full-time",
                        label: "Full Time – Available for all service requests",
                      },
                      {
                        value: "part-time",
                        label: "Part Time – Available during specific hours",
                      },
                      {
                        value: "flexible",
                        label: "Flexible – Accept jobs as per my schedule",
                      },
                    ].map((option) => (
                      <label key={option.value} className="radio-label">
                        <input
                          type="radio"
                          name="workTime"
                          value={option.value}
                          checked={formData.workTime === option.value}
                          onChange={(e) =>
                            handleInputChange("workTime", e.target.value)
                          }
                        />
                        <span className="radio-mark"></span>
                        {option.label}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="form-group">
                  <label>Do you own tools and equipment? *</label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="ownTools"
                        value="yes"
                        checked={formData.ownTools === "yes"}
                        onChange={(e) =>
                          handleInputChange("ownTools", e.target.value)
                        }
                      />
                      <span className="radio-mark"></span>
                      Yes
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="ownTools"
                        value="no"
                        checked={formData.ownTools === "no"}
                        onChange={(e) =>
                          handleInputChange("ownTools", e.target.value)
                        }
                      />
                      <span className="radio-mark"></span>
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Upload Documents */}
          {currentStep === 3 && (
            <div className="form-step">
              <h3>Upload Documents</h3>
              <div className="upload-grid">
                <div className="upload-item">
                  <label>Passport Size Photo *</label>
                  <div className="file-upload">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleFileUpload("photo", e.target.files[0])
                      }
                      id="photo"
                    />
                    <label htmlFor="photo" className="upload-label">
                      <Upload size={24} />
                      {formData.photo ? formData.photo.name : "Choose File"}
                    </label>
                  </div>
                </div>
                <div className="upload-item">
                  <label>Aadhar Card (Front) *</label>
                  <div className="file-upload">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleFileUpload("aadharFront", e.target.files[0])
                      }
                      id="aadharFront"
                    />
                    <label htmlFor="aadharFront" className="upload-label">
                      <Upload size={24} />
                      {formData.aadharFront
                        ? formData.aadharFront.name
                        : "Choose File"}
                    </label>
                  </div>
                </div>
                <div className="upload-item">
                  <label>Aadhar Card (Back) *</label>
                  <div className="file-upload">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleFileUpload("aadharBack", e.target.files[0])
                      }
                      id="aadharBack"
                    />
                    <label htmlFor="aadharBack" className="upload-label">
                      <Upload size={24} />
                      {formData.aadharBack
                        ? formData.aadharBack.name
                        : "Choose File"}
                    </label>
                  </div>
                </div>
                <div className="upload-item">
                  <label>PAN Card *</label>
                  <div className="file-upload">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleFileUpload("panCard", e.target.files[0])
                      }
                      id="panCard"
                    />
                    <label htmlFor="panCard" className="upload-label">
                      <Upload size={24} />
                      {formData.panCard ? formData.panCard.name : "Choose File"}
                    </label>
                  </div>
                </div>
                <div className="upload-item">
                  <label>Driving License (Front) *</label>
                  <div className="file-upload">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleFileUpload("licenseFront", e.target.files[0])
                      }
                      id="licenseFront"
                    />
                    <label htmlFor="licenseFront" className="upload-label">
                      <Upload size={24} />
                      {formData.licenseFront
                        ? formData.licenseFront.name
                        : "Choose File"}
                    </label>
                  </div>
                </div>
                <div className="upload-item">
                  <label>Driving License (Back) *</label>
                  <div className="file-upload">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleFileUpload("licenseBack", e.target.files[0])
                      }
                      id="licenseBack"
                    />
                    <label htmlFor="licenseBack" className="upload-label">
                      <Upload size={24} />
                      {formData.licenseBack
                        ? formData.licenseBack.name
                        : "Choose File"}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Payment Details */}
          {currentStep === 4 && (
            <div className="form-step">
              <h3>Payment & Payout Details</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>UPI ID *</label>
                  <input
                    type="text"
                    value={formData.upiId}
                    onChange={(e) => handleInputChange("upiId", e.target.value)}
                    placeholder="example@upi"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Bank Account Number</label>
                  <input
                    type="text"
                    value={formData.bankAccount}
                    onChange={(e) =>
                      handleInputChange("bankAccount", e.target.value)
                    }
                    placeholder="Bank account number"
                  />
                </div>
                <div className="form-group">
                  <label>IFSC Code</label>
                  <input
                    type="text"
                    value={formData.ifscCode}
                    onChange={(e) =>
                      handleInputChange("ifscCode", e.target.value)
                    }
                    placeholder="IFSC Code"
                  />
                </div>
                <div className="form-group">
                  <label>Account Holder Name</label>
                  <input
                    type="text"
                    value={formData.accountHolderName}
                    onChange={(e) =>
                      handleInputChange("accountHolderName", e.target.value)
                    }
                    placeholder="Account holder name"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Declaration */}
          {currentStep === 5 && (
            <div className="form-step">
              <h3>Declaration</h3>
              <div className="declaration-content">
                <div className="declaration-text">
                  <p>
                    I agree to follow Road Buddy's professional conduct
                    standards, accept terms for insurance and liability
                    coverage. Consent to GPS tracking and emergency contact use.
                    I confirm that I own the necessary tools and equipment for
                    automotive repairs.
                  </p>
                </div>
                <div className="form-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={formData.agreeTerms}
                      onChange={(e) =>
                        handleInputChange("agreeTerms", e.target.checked)
                      }
                    />
                    <span className="checkmark"></span>I agree to all terms and
                    conditions *
                  </label>
                </div>
                <div className="form-group">
                  <label>e-Signature * (Type your full name)</label>
                  <input
                    type="text"
                    value={formData.eSignature}
                    onChange={(e) =>
                      handleInputChange("eSignature", e.target.value)
                    }
                    placeholder="Type your full name as digital signature"
                    required
                  />
                </div>
                {!formData.otpVerified && (
                  <div className="warning-message">
                    <p>⚠️ Please verify your OTP in Step 1 before submitting</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="form-navigation">
          <button
            type="button"
            className="btn btn-outline"
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            Previous
          </button>
          <div className="step-indicator">Step {currentStep} of 5</div>
          {currentStep < 5 ? (
            <button
              type="button"
              className="btn btn-primary"
              onClick={nextStep}
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-success"
              onClick={handleSubmit}
              disabled={
                !formData.agreeTerms ||
                !formData.otpVerified ||
                !formData.eSignature
              }
            >
              Submit Application
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MechanicRegistrationForm;
