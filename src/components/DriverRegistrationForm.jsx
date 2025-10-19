import React, { useState } from "react";
import {
  X,
  Upload,
  User,
  Car,
  FileText,
  CreditCard,
  Check,
  Phone,
  MapPin,
  Calendar,
  Shield,
  Award,
} from "lucide-react";
import "./DriverRegistrationForm.css";

const DriverRegistrationForm = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Details
    fullName: "",
    dateOfBirth: "",
    gender: "",
    contactNumber: "",
    email: "",
    aadharNumber: "",
    panNumber: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    emergencyContactName: "",
    emergencyContactNumber: "",
    emergencyContactRelation: "",

    // Driving Details
    licenseNumber: "",
    licenseType: "",
    licenseIssueDate: "",
    licenseExpiryDate: "",
    drivingExperience: "",
    vehicleExpertise: [],
    languages: [],
    workTime: "",
    shortNotice: "",
    preferredAreas: [],

    // Upload Documents
    photo: null,
    aadharFront: null,
    aadharBack: null,
    licenseFront: null,
    licenseBack: null,
    panCard: null,
    policeVerification: null,

    // Payment Details
    upiId: "",
    bankAccount: "",
    ifscCode: "",
    accountHolderName: "",
    bankName: "",

    // Declaration
    agreeTerms: false,
    eSignature: "",
    otpVerified: false,
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const steps = [
    { number: 1, title: "Personal Details", icon: <User size={20} /> },
    { number: 2, title: "Driving Details", icon: <Car size={20} /> },
    { number: 3, title: "Upload Documents", icon: <Shield size={20} /> },
    { number: 4, title: "Payment Details", icon: <CreditCard size={20} /> },
    { number: 5, title: "Declaration", icon: <Award size={20} /> },
  ];

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Puducherry",
  ];

  const indianLanguages = [
    "Hindi",
    "English",
    "Bengali",
    "Telugu",
    "Marathi",
    "Tamil",
    "Urdu",
    "Gujarati",
    "Kannada",
    "Odia",
    "Punjabi",
    "Malayalam",
    "Assamese",
    "Maithili",
    "Sanskrit",
  ];

  const vehicleTypes = [
    "Hatchback",
    "Sedan",
    "SUV/MUV",
    "Luxury Cars",
    "Commercial Vehicles",
    "Two-Wheeler",
    "Three-Wheeler",
    "Heavy Vehicles",
  ];

  const preferredAreas = [
    "Delhi NCR",
    "Mumbai",
    "Bangalore",
    "Chennai",
    "Hyderabad",
    "Pune",
    "Kolkata",
    "Ahmedabad",
    "Jaipur",
    "Surat",
    "Lucknow",
    "Kanpur",
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleLanguageChange = (language) => {
    setFormData((prev) => ({
      ...prev,
      languages: prev.languages.includes(language)
        ? prev.languages.filter((item) => item !== language)
        : [...prev.languages, language],
    }));
  };

  const handleVehicleExpertiseChange = (expertise) => {
    setFormData((prev) => ({
      ...prev,
      vehicleExpertise: prev.vehicleExpertise.includes(expertise)
        ? prev.vehicleExpertise.filter((item) => item !== expertise)
        : [...prev.vehicleExpertise, expertise],
    }));
  };

  const handleAreaChange = (area) => {
    setFormData((prev) => ({
      ...prev,
      preferredAreas: prev.preferredAreas.includes(area)
        ? prev.preferredAreas.filter((item) => item !== area)
        : [...prev.preferredAreas, area],
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
      <div className="driver-form-modal">
        <div className="form-header">
          <h2>Driver Enrollment Form - India</h2>
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
              <div className="step-header">
                <User size={32} color="#3b82f6" />
                <h3>Personal Details</h3>
              </div>
              <p className="step-description">
                Please provide your basic personal information as per your
                official documents
              </p>
              <div className="form-grid">
                <div className="form-group">
                  <label>Full Name (as per Aadhar) *</label>
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
                  <label>Mobile Number * (OTP verification)</label>
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
                <div className="form-group">
                  <label>Aadhar Number *</label>
                  <input
                    type="text"
                    value={formData.aadharNumber}
                    onChange={(e) =>
                      handleInputChange("aadharNumber", e.target.value)
                    }
                    placeholder="12-digit Aadhar number"
                    maxLength="12"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>PAN Number (Optional)</label>
                  <input
                    type="text"
                    value={formData.panNumber}
                    onChange={(e) =>
                      handleInputChange("panNumber", e.target.value)
                    }
                    placeholder="PAN number (ABCDE1234F)"
                    maxLength="10"
                  />
                </div>
                <div className="form-group">
                  <label>State *</label>
                  <select
                    value={formData.state}
                    onChange={(e) => handleInputChange("state", e.target.value)}
                    required
                  >
                    <option value="">Select State</option>
                    {indianStates.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>City *</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    placeholder="Enter your city"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Pincode *</label>
                  <input
                    type="text"
                    value={formData.pincode}
                    onChange={(e) =>
                      handleInputChange("pincode", e.target.value)
                    }
                    placeholder="6-digit pincode"
                    maxLength="6"
                    required
                  />
                </div>
                <div className="form-group full-width">
                  <label>Complete Address *</label>
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
                  <label>Emergency Contact Relation *</label>
                  <select
                    value={formData.emergencyContactRelation}
                    onChange={(e) =>
                      handleInputChange(
                        "emergencyContactRelation",
                        e.target.value
                      )
                    }
                    required
                  >
                    <option value="">Select Relation</option>
                    <option value="father">Father</option>
                    <option value="mother">Mother</option>
                    <option value="spouse">Spouse</option>
                    <option value="brother">Brother</option>
                    <option value="sister">Sister</option>
                    <option value="friend">Friend</option>
                    <option value="other">Other</option>
                  </select>
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

          {/* Step 2: Driving Details */}
          {currentStep === 2 && (
            <div className="form-step">
              <div className="step-header">
                <Car size={32} color="#3b82f6" />
                <h3>Driving Details</h3>
              </div>
              <p className="step-description">
                Share your driving experience and license information
              </p>
              <div className="form-grid">
                <div className="form-group">
                  <label>Driving License Number *</label>
                  <input
                    type="text"
                    value={formData.licenseNumber}
                    onChange={(e) =>
                      handleInputChange("licenseNumber", e.target.value)
                    }
                    placeholder="DL-XXXX-XXXXXXXXXX"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>License Type *</label>
                  <select
                    value={formData.licenseType}
                    onChange={(e) =>
                      handleInputChange("licenseType", e.target.value)
                    }
                    required
                  >
                    <option value="">Select License Type</option>
                    <option value="LMV">LMV (Light Motor Vehicle)</option>
                    <option value="LMV-NT">LMV-NT (Non-Transport)</option>
                    <option value="MCWG">MCWG (Motorcycle with Gear)</option>
                    <option value="HMV">HMV (Heavy Motor Vehicle)</option>
                    <option value="HTV">HTV (Heavy Transport Vehicle)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>License Issue Date *</label>
                  <input
                    type="date"
                    value={formData.licenseIssueDate}
                    onChange={(e) =>
                      handleInputChange("licenseIssueDate", e.target.value)
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label>License Expiry Date *</label>
                  <input
                    type="date"
                    value={formData.licenseExpiryDate}
                    onChange={(e) =>
                      handleInputChange("licenseExpiryDate", e.target.value)
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Years of Driving Experience *</label>
                  <select
                    value={formData.drivingExperience}
                    onChange={(e) =>
                      handleInputChange("drivingExperience", e.target.value)
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
                <div className="form-group full-width">
                  <label>Vehicle Expertise * (Select multiple)</label>
                  <div className="checkbox-group">
                    {vehicleTypes.map((type) => (
                      <label key={type} className="checkbox-label">
                        <input
                          type="checkbox"
                          checked={formData.vehicleExpertise.includes(type)}
                          onChange={() => handleVehicleExpertiseChange(type)}
                        />
                        <span className="checkmark"></span>
                        {type}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="form-group full-width">
                  <label>Languages Known * (Select multiple)</label>
                  <div className="checkbox-group">
                    {indianLanguages.map((language) => (
                      <label key={language} className="checkbox-label">
                        <input
                          type="checkbox"
                          checked={formData.languages.includes(language)}
                          onChange={() => handleLanguageChange(language)}
                        />
                        <span className="checkmark"></span>
                        {language}
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
                        label: "Full Time – 24/7 (All Days)",
                      },
                      {
                        value: "part-time",
                        label: "Part Time – 6 PM to 3 AM (All Days)",
                      },
                      {
                        value: "weekends",
                        label: "Weekends – Saturday & Sunday",
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
                  <label>Available on Short Notice *</label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="shortNotice"
                        value="yes"
                        checked={formData.shortNotice === "yes"}
                        onChange={(e) =>
                          handleInputChange("shortNotice", e.target.value)
                        }
                      />
                      <span className="radio-mark"></span>
                      Yes
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="shortNotice"
                        value="no"
                        checked={formData.shortNotice === "no"}
                        onChange={(e) =>
                          handleInputChange("shortNotice", e.target.value)
                        }
                      />
                      <span className="radio-mark"></span>
                      No
                    </label>
                  </div>
                </div>
                <div className="form-group full-width">
                  <label>Preferred Service Areas (Select multiple)</label>
                  <div className="checkbox-group">
                    {preferredAreas.map((area) => (
                      <label key={area} className="checkbox-label">
                        <input
                          type="checkbox"
                          checked={formData.preferredAreas.includes(area)}
                          onChange={() => handleAreaChange(area)}
                        />
                        <span className="checkmark"></span>
                        {area}
                      </label>
                    ))}
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
                <div className="upload-item">
                  <label>PAN Card (Optional)</label>
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
                  <label>Police Verification Certificate (Optional)</label>
                  <div className="file-upload">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleFileUpload(
                          "policeVerification",
                          e.target.files[0]
                        )
                      }
                      id="policeVerification"
                    />
                    <label
                      htmlFor="policeVerification"
                      className="upload-label"
                    >
                      <Upload size={24} />
                      {formData.policeVerification
                        ? formData.policeVerification.name
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
                  <label>Bank Account Number *</label>
                  <input
                    type="text"
                    value={formData.bankAccount}
                    onChange={(e) =>
                      handleInputChange("bankAccount", e.target.value)
                    }
                    placeholder="Bank account number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>IFSC Code *</label>
                  <input
                    type="text"
                    value={formData.ifscCode}
                    onChange={(e) =>
                      handleInputChange("ifscCode", e.target.value)
                    }
                    placeholder="IFSC Code (e.g., SBIN0001234)"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Account Holder Name *</label>
                  <input
                    type="text"
                    value={formData.accountHolderName}
                    onChange={(e) =>
                      handleInputChange("accountHolderName", e.target.value)
                    }
                    placeholder="Account holder name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Bank Name *</label>
                  <input
                    type="text"
                    value={formData.bankName}
                    onChange={(e) =>
                      handleInputChange("bankName", e.target.value)
                    }
                    placeholder="e.g., State Bank of India"
                    required
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
                    I hereby declare that all information provided is true and
                    correct to the best of my knowledge. I agree to follow Road
                    Buddy's professional conduct standards, accept terms for
                    insurance and liability coverage. I consent to GPS tracking
                    during service and emergency contact use. I understand that
                    any false information may result in termination of services
                    and legal action.
                  </p>
                  <p>
                    I also agree to comply with all applicable Indian laws
                    including Motor Vehicles Act, 1988, and other relevant
                    regulations for commercial vehicle operations.
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

export default DriverRegistrationForm;
