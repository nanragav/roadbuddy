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
  MapPin,
  Clock,
  Camera,
} from "lucide-react";
import "./MechanicRegistrationForm.css";

const MechanicRegistrationForm = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal & Workshop Details
    fullName: "",
    workshopName: "",
    workshopType: "two-wheeler",
    contactNumber: "",
    email: "",
    aadharNumber: "",
    gstNumber: "",
    address: "",

    // Work & Service Details
    yearsOfExperience: "",
    servicesOffered: [],
    vehicleTypes: [],
    openingTime: "",
    closingTime: "",
    workingDays: [],
    available24x7: false,
    workshopLocation: "",
    travelToCustomer: false,
    serviceRadius: "",

    // Document Upload
    photo: null,
    aadharFront: null,
    aadharBack: null,
    mechanicCertification: null,
    workshopPhoto: null,

    // Payment Details
    upiId: "",
    bankAccount: "",
    ifscCode: "",
    accountHolderName: "",

    // Declaration
    agreeTerms: false,
    eSignature: "",
    paymentCompleted: false,
  });

  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const steps = [
    {
      number: 1,
      title: "Personal & Workshop Details",
      icon: <User size={20} />,
    },
    { number: 2, title: "Work & Service Details", icon: <Wrench size={20} /> },
    { number: 3, title: "Document Upload", icon: <FileText size={20} /> },
    { number: 4, title: "Payment Details", icon: <CreditCard size={20} /> },
    { number: 5, title: "Payment & Declaration", icon: <Check size={20} /> },
  ];

  const twoWheelerServices = [
    "General Maintenance",
    "Mechanical Repairs",
    "Electrical & Electronics",
    "Tyre & Wheel Services",
    "Body & Paint Services",
    "Cleaning & Detailing",
    "Performance & Custom Work",
  ];

  const fourWheelerServices = [
    "General Maintenance",
    "Mechanical Repairs",
    "Electrical & Electronics",
    "Tyre & Wheel Services",
    "AC Services",
    "Body & Paint Services",
    "Cleaning & Detailing",
    "Performance & Custom Work",
  ];

  const vehicleTypeOptions = [
    "Hatchbacks",
    "Sedan",
    "SUV",
    "Luxury",
    "Commercial",
  ];

  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleMultiSelect = (name, value, isChecked) => {
    setFormData((prev) => ({
      ...prev,
      [name]: isChecked
        ? [...prev[name], value]
        : prev[name].filter((item) => item !== value),
    }));
  };

  const handleFileUpload = (field, file) => {
    setFormData((prev) => ({
      ...prev,
      [field]: file,
    }));
  };

  const handlePaymentClick = () => {
    setShowPaymentModal(true);
  };

  const processPayment = () => {
    // Simulate payment processing - will implement Razorpay later
    setFormData((prev) => ({ ...prev, paymentCompleted: true }));
    setShowPaymentModal(false);
    alert("Payment of ₹99 completed successfully! (Demo mode)");
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.paymentCompleted) {
      alert("Please complete payment first!");
      return;
    }
    if (!formData.agreeTerms) {
      alert("Please agree to terms and conditions!");
      return;
    }
    if (!formData.eSignature) {
      alert("Please provide your e-signature!");
      return;
    }

    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Mechanic enrollment submitted successfully!");
    onClose();
  };

  const renderStep1 = () => (
    <div className="form-step">
      <h3 className="step-title">
        <User className="step-icon" />
        Personal & Workshop Details
      </h3>

      <div className="form-row">
        <div className="form-group">
          <label>Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label>Workshop / Business Name *</label>
          <input
            type="text"
            name="workshopName"
            value={formData.workshopName}
            onChange={handleInputChange}
            placeholder="Enter workshop name"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Workshop Type *</label>
          <select
            name="workshopType"
            value={formData.workshopType}
            onChange={handleInputChange}
            required
          >
            <option value="two-wheeler">Two-Wheeler</option>
            <option value="four-wheeler">Four-Wheeler</option>
            <option value="both">Both</option>
          </select>
        </div>

        <div className="form-group">
          <label>Contact Number *</label>
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            placeholder="Enter mobile number"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Email ID</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter email address (optional)"
          />
        </div>

        <div className="form-group">
          <label>Aadhar Number *</label>
          <input
            type="text"
            name="aadharNumber"
            value={formData.aadharNumber}
            onChange={handleInputChange}
            placeholder="Enter Aadhar number"
            maxLength="12"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>GST Number</label>
          <input
            type="text"
            name="gstNumber"
            value={formData.gstNumber}
            onChange={handleInputChange}
            placeholder="Enter GST number (if available)"
          />
        </div>
      </div>

      <div className="form-group">
        <label>Full Address *</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="Enter complete address"
          rows="3"
          required
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="form-step">
      <h3 className="step-title">
        <Wrench className="step-icon" />
        Work & Service Details
      </h3>

      <div className="form-row">
        <div className="form-group">
          <label>Years of Experience *</label>
          <select
            name="yearsOfExperience"
            value={formData.yearsOfExperience}
            onChange={handleInputChange}
            required
          >
            <option value="">Select experience</option>
            <option value="0-1">0-1 years</option>
            <option value="2-5">2-5 years</option>
            <option value="6-10">6-10 years</option>
            <option value="11-15">11-15 years</option>
            <option value="15+">15+ years</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label>Services Offered *</label>
        <div className="checkbox-grid">
          {(formData.workshopType === "four-wheeler"
            ? fourWheelerServices
            : twoWheelerServices
          ).map((service) => (
            <label key={service} className="checkbox-item">
              <input
                type="checkbox"
                checked={formData.servicesOffered.includes(service)}
                onChange={(e) =>
                  handleMultiSelect(
                    "servicesOffered",
                    service,
                    e.target.checked
                  )
                }
              />
              <span className="checkmark"></span>
              {service}
            </label>
          ))}
        </div>
      </div>

      {formData.workshopType === "four-wheeler" && (
        <div className="form-group">
          <label>Vehicle Types *</label>
          <div className="checkbox-grid">
            {vehicleTypeOptions.map((type) => (
              <label key={type} className="checkbox-item">
                <input
                  type="checkbox"
                  checked={formData.vehicleTypes.includes(type)}
                  onChange={(e) =>
                    handleMultiSelect("vehicleTypes", type, e.target.checked)
                  }
                />
                <span className="checkmark"></span>
                {type}
              </label>
            ))}
          </div>
        </div>
      )}

      <div className="form-group">
        <label>Service Hours</label>
        <div className="form-row">
          <div className="form-group">
            <label>Opening Time</label>
            <input
              type="time"
              name="openingTime"
              value={formData.openingTime}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Closing Time</label>
            <input
              type="time"
              name="closingTime"
              value={formData.closingTime}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div className="form-group">
        <label>Working Days</label>
        <div className="checkbox-grid">
          {weekDays.map((day) => (
            <label key={day} className="checkbox-item">
              <input
                type="checkbox"
                checked={formData.workingDays.includes(day)}
                onChange={(e) =>
                  handleMultiSelect("workingDays", day, e.target.checked)
                }
              />
              <span className="checkmark"></span>
              {day}
            </label>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label className="checkbox-item large">
          <input
            type="checkbox"
            name="available24x7"
            checked={formData.available24x7}
            onChange={handleInputChange}
          />
          <span className="checkmark"></span>
          24×7 Available
        </label>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Workshop Location</label>
          <div className="location-input-group">
            <input
              type="text"
              name="workshopLocation"
              value={formData.workshopLocation}
              onChange={handleInputChange}
              placeholder="Enter location or coordinates"
            />
            <button type="button" className="map-btn">
              <MapPin size={16} />
              Pin Location
            </button>
          </div>
        </div>
      </div>

      <div className="form-group">
        <label className="checkbox-item large">
          <input
            type="checkbox"
            name="travelToCustomer"
            checked={formData.travelToCustomer}
            onChange={handleInputChange}
          />
          <span className="checkmark"></span>
          Willing to travel to customer's location
        </label>
      </div>

      {formData.travelToCustomer && (
        <div className="form-group">
          <label>Service Radius (in km)</label>
          <input
            type="number"
            name="serviceRadius"
            value={formData.serviceRadius}
            onChange={handleInputChange}
            placeholder="Enter service radius"
            min="1"
            max="100"
          />
        </div>
      )}
    </div>
  );

  const renderStep3 = () => (
    <div className="form-step">
      <h3 className="step-title">
        <FileText className="step-icon" />
        Document Upload
      </h3>

      <div className="upload-grid">
        <div className="upload-item">
          <label>Passport Size Photo *</label>
          <div className="file-upload">
            <input
              type="file"
              id="photo"
              accept="image/*"
              onChange={(e) => handleFileUpload("photo", e.target.files[0])}
            />
            <label htmlFor="photo" className="upload-btn">
              <Camera size={20} />
              {formData.photo ? formData.photo.name : "Upload Photo"}
            </label>
          </div>
        </div>

        <div className="upload-item">
          <label>Aadhar Card (Front) *</label>
          <div className="file-upload">
            <input
              type="file"
              id="aadharFront"
              accept="image/*"
              onChange={(e) =>
                handleFileUpload("aadharFront", e.target.files[0])
              }
            />
            <label htmlFor="aadharFront" className="upload-btn">
              <Upload size={20} />
              {formData.aadharFront
                ? formData.aadharFront.name
                : "Upload Aadhar Front"}
            </label>
          </div>
        </div>

        <div className="upload-item">
          <label>Aadhar Card (Back) *</label>
          <div className="file-upload">
            <input
              type="file"
              id="aadharBack"
              accept="image/*"
              onChange={(e) =>
                handleFileUpload("aadharBack", e.target.files[0])
              }
            />
            <label htmlFor="aadharBack" className="upload-btn">
              <Upload size={20} />
              {formData.aadharBack
                ? formData.aadharBack.name
                : "Upload Aadhar Back"}
            </label>
          </div>
        </div>

        <div className="upload-item">
          <label>Mechanic Certification</label>
          <div className="file-upload">
            <input
              type="file"
              id="certification"
              accept="image/*,.pdf"
              onChange={(e) =>
                handleFileUpload("mechanicCertification", e.target.files[0])
              }
            />
            <label htmlFor="certification" className="upload-btn">
              <FileText size={20} />
              {formData.mechanicCertification
                ? formData.mechanicCertification.name
                : "Upload Certificate"}
            </label>
          </div>
        </div>

        <div className="upload-item">
          <label>Workshop Photo *</label>
          <div className="file-upload">
            <input
              type="file"
              id="workshopPhoto"
              accept="image/*"
              onChange={(e) =>
                handleFileUpload("workshopPhoto", e.target.files[0])
              }
            />
            <label htmlFor="workshopPhoto" className="upload-btn">
              <Camera size={20} />
              {formData.workshopPhoto
                ? formData.workshopPhoto.name
                : "Upload Workshop Photo"}
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="form-step">
      <h3 className="step-title">
        <CreditCard className="step-icon" />
        Payment Details
      </h3>

      <div className="form-row">
        <div className="form-group">
          <label>UPI ID *</label>
          <input
            type="text"
            name="upiId"
            value={formData.upiId}
            onChange={handleInputChange}
            placeholder="Enter UPI ID (e.g., 9876543210@paytm)"
            required
          />
        </div>

        <div className="form-group">
          <label>Bank Account Number *</label>
          <input
            type="text"
            name="bankAccount"
            value={formData.bankAccount}
            onChange={handleInputChange}
            placeholder="Enter bank account number"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>IFSC Code *</label>
          <input
            type="text"
            name="ifscCode"
            value={formData.ifscCode}
            onChange={handleInputChange}
            placeholder="Enter IFSC Code"
            required
          />
        </div>

        <div className="form-group">
          <label>Account Holder Name *</label>
          <input
            type="text"
            name="accountHolderName"
            value={formData.accountHolderName}
            onChange={handleInputChange}
            placeholder="Enter account holder name"
            required
          />
        </div>
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div className="form-step">
      <h3 className="step-title">
        <Check className="step-icon" />
        Payment & Declaration
      </h3>

      {/* Payment Section */}
      <div className="payment-section">
        <div className="payment-header">
          <CreditCard size={24} className="payment-icon" />
          <h4>Registration Fee Payment</h4>
        </div>

        <div className="payment-info">
          <div className="fee-display">
            <span className="fee-label">Registration Fee:</span>
            <span className="fee-amount">₹99</span>
          </div>
          <div className="fee-description">
            One-time registration fee to join RoadBuddy network
          </div>
        </div>

        <div className="payment-methods">
          <label className="payment-method-label">Select Payment Method</label>
          <div className="payment-options">
            <button
              type="button"
              onClick={() => setPaymentMethod("upi")}
              className={`payment-option ${
                paymentMethod === "upi" ? "active" : ""
              }`}
            >
              UPI
            </button>
            <button
              type="button"
              onClick={() => setPaymentMethod("card")}
              className={`payment-option ${
                paymentMethod === "card" ? "active" : ""
              }`}
            >
              Card
            </button>
            <button
              type="button"
              onClick={() => setPaymentMethod("netbanking")}
              className={`payment-option ${
                paymentMethod === "netbanking" ? "active" : ""
              }`}
            >
              Net Banking
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={handlePaymentClick}
          className={`payment-btn ${
            formData.paymentCompleted ? "completed" : ""
          }`}
          disabled={formData.paymentCompleted}
        >
          {formData.paymentCompleted ? (
            <>
              <Check size={20} />
              Payment Completed ✓
            </>
          ) : (
            `Pay ₹99 via ${paymentMethod.toUpperCase()}`
          )}
        </button>
      </div>

      <div className="declaration-content">
        <div className="declaration-text">
          <p>
            I agree to maintain professional service standards and accept
            responsibility for work performed. I consent to customer feedback
            and understand that this will be used to maintain service quality.
          </p>
        </div>

        <div className="form-group">
          <label className="checkbox-item large">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleInputChange}
              required
            />
            <span className="checkmark"></span>I agree to all terms and
            conditions
          </label>
        </div>

        <div className="form-group">
          <label>e-Signature *</label>
          <input
            type="text"
            name="eSignature"
            value={formData.eSignature}
            onChange={handleInputChange}
            placeholder="Type your full name as e-signature"
            required
          />
        </div>
      </div>
    </div>
  );

  if (!isOpen) {
    console.log("🔧 MechanicRegistrationForm returning null - isOpen is false");
    return null;
  }

  console.log("🔧 MechanicRegistrationForm rendering modal - isOpen is true");

  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="mechanic-form-modal">
        <div className="form-header">
          <h2>Mechanic Registration Form</h2>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="step-indicator">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`step-item ${
                currentStep >= step.number ? "active" : ""
              } ${currentStep === step.number ? "current" : ""}`}
            >
              <div className="step-number">
                {currentStep > step.number ? <Check size={16} /> : step.icon}
              </div>
              <span className="step-title">{step.title}</span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="form-content">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}
          {currentStep === 5 && renderStep5()}

          <div className="form-actions">
            {currentStep > 1 && (
              <button
                type="button"
                className="btn-secondary"
                onClick={prevStep}
              >
                Previous
              </button>
            )}

            {currentStep < 5 ? (
              <button type="button" className="btn-primary" onClick={nextStep}>
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="btn-primary"
                disabled={
                  !formData.paymentCompleted ||
                  !formData.agreeTerms ||
                  !formData.eSignature
                }
              >
                Submit Registration
              </button>
            )}
          </div>
        </form>

        {/* Payment Modal */}
        {showPaymentModal && (
          <div className="payment-modal-overlay">
            <div className="payment-modal">
              <div className="payment-modal-header">
                <h3>Complete Payment</h3>
                <button onClick={() => setShowPaymentModal(false)}>
                  <X size={20} />
                </button>
              </div>

              <div className="payment-modal-content">
                <div className="payment-details">
                  <p>
                    Registration Fee: <strong>₹99</strong>
                  </p>
                  <p>
                    Payment Method:{" "}
                    <strong>{paymentMethod.toUpperCase()}</strong>
                  </p>
                </div>

                <div className="payment-note">
                  <p>
                    This is a demo. Razorpay integration will be implemented
                    later.
                  </p>
                </div>

                <div className="payment-modal-actions">
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setShowPaymentModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={processPayment}
                  >
                    Complete Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MechanicRegistrationForm;
