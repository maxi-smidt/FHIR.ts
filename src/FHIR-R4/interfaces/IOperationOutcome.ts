/**
 * Account-ActivityDefinition-AdverseEvent-AllergyIntolerance-Appointment-AppointmentResponse-AuditEvent-Basic-Binary-BiologicallyDerivedProduct-BodyStructure-Bundle-CapabilityStatement-CarePlan-CareTeam-CatalogEntry-ChargeItem-ChargeItemDefinition-Claim-ClaimResponse-ClinicalImpression-CodeSystem-Communication-CommunicationRequest-CompartmentDefinition-Composition-ConceptMap-Condition-Consent-Contract-Coverage-CoverageEligibilityRequest-CoverageEligibilityResponse-DetectedIssue-Device-DeviceDefinition-DeviceMetric-DeviceRequest-DeviceUseStatement-DiagnosticReport-DocumentManifest-DocumentReference-EffectEvidenceSynthesis-Encounter-Endpoint-EnrollmentRequest-EnrollmentResponse-EpisodeOfCare-EventDefinition-Evidence-EvidenceVariable-ExampleScenario-ExplanationOfBenefit-FamilyMemberHistory-Flag-Goal-GraphDefinition-Group-GuidanceResponse-HealthcareService-ImagingStudy-Immunization-ImmunizationEvaluation-ImmunizationRecommendation-ImplementationGuide-InsurancePlan-Invoice-Library-Linkage-List-Location-Measure-MeasureReport-Media-Medication-MedicationAdministration-MedicationDispense-MedicationKnowledge-MedicationRequest-MedicationStatement-MedicinalProduct-MedicinalProductAuthorization-MedicinalProductContraindication-MedicinalProductIndication-MedicinalProductIngredient-MedicinalProductInteraction-MedicinalProductManufactured-MedicinalProductPackaged-MedicinalProductPharmaceutical-MedicinalProductUndesirableEffect-MessageDefinition-MessageHeader-MolecularSequence-NamingSystem-NutritionOrder-Observation-ObservationDefinition-OperationDefinition-OperationOutcome-Organization-OrganizationAffiliation-Parameters-Patient-PaymentNotice-PaymentReconciliation-Person-PlanDefinition-Practitioner-PractitionerRole-Procedure-Provenance-Questionnaire-QuestionnaireResponse-RelatedPerson-RequestGroup-ResearchDefinition-ResearchElementDefinition-ResearchStudy-ResearchSubject-RiskAssessment-RiskEvidenceSynthesis-Schedule-SearchParameter-ServiceRequest-Slot-Specimen-SpecimenDefinition-StructureDefinition-StructureMap-Subscription-Substance-SubstanceNucleicAcid-SubstancePolymer-SubstanceProtein-SubstanceReferenceInformation-SubstanceSourceMaterial-SubstanceSpecification-SupplyDelivery-SupplyRequest-Task-TerminologyCapabilities-TestReport-TestScript-ValueSet-VerificationResult-VisionPrescription--FHIRAPI
 * Swagger for FHIR Resources Account, ActivityDefinition, AdverseEvent, AllergyIntolerance, Appointment, AppointmentResponse, AuditEvent, Basic, Binary, BiologicallyDerivedProduct, BodyStructure, Bundle, CapabilityStatement, CarePlan, CareTeam, CatalogEntry, ChargeItem, ChargeItemDefinition, Claim, ClaimResponse, ClinicalImpression, CodeSystem, Communication, CommunicationRequest, CompartmentDefinition, Composition, ConceptMap, Condition, Consent, Contract, Coverage, CoverageEligibilityRequest, CoverageEligibilityResponse, DetectedIssue, Device, DeviceDefinition, DeviceMetric, DeviceRequest, DeviceUseStatement, DiagnosticReport, DocumentManifest, DocumentReference, EffectEvidenceSynthesis, Encounter, Endpoint, EnrollmentRequest, EnrollmentResponse, EpisodeOfCare, EventDefinition, Evidence, EvidenceVariable, ExampleScenario, ExplanationOfBenefit, FamilyMemberHistory, Flag, Goal, GraphDefinition, Group, GuidanceResponse, HealthcareService, ImagingStudy, Immunization, ImmunizationEvaluation, ImmunizationRecommendation, ImplementationGuide, InsurancePlan, Invoice, Library, Linkage, List, Location, Measure, MeasureReport, Media, Medication, MedicationAdministration, MedicationDispense, MedicationKnowledge, MedicationRequest, MedicationStatement, MedicinalProduct, MedicinalProductAuthorization, MedicinalProductContraindication, MedicinalProductIndication, MedicinalProductIngredient, MedicinalProductInteraction, MedicinalProductManufactured, MedicinalProductPackaged, MedicinalProductPharmaceutical, MedicinalProductUndesirableEffect, MessageDefinition, MessageHeader, MolecularSequence, NamingSystem, NutritionOrder, Observation, ObservationDefinition, OperationDefinition, OperationOutcome, Organization, OrganizationAffiliation, Parameters, Patient, PaymentNotice, PaymentReconciliation, Person, PlanDefinition, Practitioner, PractitionerRole, Procedure, Provenance, Questionnaire, QuestionnaireResponse, RelatedPerson, RequestGroup, ResearchDefinition, ResearchElementDefinition, ResearchStudy, ResearchSubject, RiskAssessment, RiskEvidenceSynthesis, Schedule, SearchParameter, ServiceRequest, Slot, Specimen, SpecimenDefinition, StructureDefinition, StructureMap, Subscription, Substance, SubstanceNucleicAcid, SubstancePolymer, SubstanceProtein, SubstanceReferenceInformation, SubstanceSourceMaterial, SubstanceSpecification, SupplyDelivery, SupplyRequest, Task, TerminologyCapabilities, TestReport, TestScript, ValueSet, VerificationResult, VisionPrescription
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { OperationOutcomeIssue } from './../classes/operationOutcomeIssue';


/**
 * A collection of error, warning, or information messages that result from a system action.
 */
export interface IOperationOutcome { 
    /**
     * This is a OperationOutcome resource
     */
    resourceType: string;
    /**
     * An error, warning, or information message that results from a system action.
     */
    issue: Array<OperationOutcomeIssue>;
}
