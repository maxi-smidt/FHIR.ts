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
import { Age } from './age';
import { Canonical } from './canonical';
import { Code } from './code';
import { CodeableConcept } from './codeableConcept';
import { DataRequirement } from './dataRequirement';
import { Duration } from './duration';
import { Extension } from './extension';

import { Period } from './period';
import { PlanDefinitionCondition } from './planDefinitionCondition';
import { PlanDefinitionDynamicValue } from './planDefinitionDynamicValue';
import { PlanDefinitionParticipant } from './planDefinitionParticipant';
import { PlanDefinitionRelatedAction } from './planDefinitionRelatedAction';
import { Range } from './range';
import { Reference } from './reference';
import { RelatedArtifact } from './relatedArtifact';
import { Timing } from './timing';
import { TriggerDefinition } from './triggerDefinition';


/**
 * This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols.
 */
export class PlanDefinitionAction { 
    /**
     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
     */
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Array<Extension>;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Array<Extension>;
    /**
     * A user-visible prefix for the action.
     */
    prefix?: string;
    /**
     * The title of the action displayed to a user.
     */
    title?: string;
    /**
     * A brief description of the action used to provide a summary to display to the user.
     */
    description?: string;
    /**
     * A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that might not be capable of interpreting it dynamically.
     */
    textEquivalent?: string;
    /**
     * Indicates how quickly the action should be addressed with respect to other actions.
     */
    priority?: Code;
    /**
     * A code that provides meaning for the action or action group. For example, a section may have a LOINC code for the section of a documentation template.
     */
    code?: Array<CodeableConcept>;
    /**
     * A description of why this action is necessary or appropriate.
     */
    reason?: Array<CodeableConcept>;
    /**
     * Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.
     */
    documentation?: Array<RelatedArtifact>;
    /**
     * Identifies goals that this action supports. The reference must be to a goal element defined within this plan definition.
     */
    goalId?: Array<string>;
    /**
     * A code or group definition that describes the intended subject of the action and its children, if any.
     */
    subjectCodeableConcept?: CodeableConcept;
    /**
     * A code or group definition that describes the intended subject of the action and its children, if any.
     */
    subjectReference?: Reference;
    /**
     * A description of when the action should be triggered.
     */
    trigger?: Array<TriggerDefinition>;
    /**
     * An expression that describes applicability criteria or start/stop conditions for the action.
     */
    condition?: Array<PlanDefinitionCondition>;
    /**
     * Defines input data requirements for the action.
     */
    input?: Array<DataRequirement>;
    /**
     * Defines the outputs of the action, if any.
     */
    output?: Array<DataRequirement>;
    /**
     * A relationship to another action such as \"before\" or \"30-60 minutes after start of\".
     */
    relatedAction?: Array<PlanDefinitionRelatedAction>;
    /**
     * An optional value describing when the action should be performed.
     */
    timingDateTime?: string;
    /**
     * An optional value describing when the action should be performed.
     */
    timingAge?: Age;
    /**
     * An optional value describing when the action should be performed.
     */
    timingPeriod?: Period;
    /**
     * An optional value describing when the action should be performed.
     */
    timingDuration?: Duration;
    /**
     * An optional value describing when the action should be performed.
     */
    timingRange?: Range;
    /**
     * An optional value describing when the action should be performed.
     */
    timingTiming?: Timing;
    /**
     * Indicates who should participate in performing the action described.
     */
    participant?: Array<PlanDefinitionParticipant>;
    /**
     * The type of action to perform (create, update, remove).
     */
    type?: CodeableConcept;
    /**
     * Defines the grouping behavior for the action and its children.
     */
    groupingBehavior?: PlanDefinitionAction.GroupingBehaviorEnum;
    /**
     * Defines the selection behavior for the action and its children.
     */
    selectionBehavior?: PlanDefinitionAction.SelectionBehaviorEnum;
    /**
     * Defines the required behavior for the action.
     */
    requiredBehavior?: PlanDefinitionAction.RequiredBehaviorEnum;
    /**
     * Defines whether the action should usually be preselected.
     */
    precheckBehavior?: PlanDefinitionAction.PrecheckBehaviorEnum;
    /**
     * Defines whether the action can be selected multiple times.
     */
    cardinalityBehavior?: PlanDefinitionAction.CardinalityBehaviorEnum;
    /**
     * A reference to an ActivityDefinition that describes the action to be taken in detail, or a PlanDefinition that describes a series of actions to be taken.
     */
    definitionCanonical?: string;
    /**
     * A reference to an ActivityDefinition that describes the action to be taken in detail, or a PlanDefinition that describes a series of actions to be taken.
     */
    definitionUri?: string;
    /**
     * A reference to a StructureMap resource that defines a transform that can be executed to produce the intent resource using the ActivityDefinition instance as the input.
     */
    transform?: Canonical;
    /**
     * Customizations that should be applied to the statically defined resource. For example, if the dosage of a medication must be computed based on the patient's weight, a customization would be used to specify an expression that calculated the weight, and the path on the resource that would contain the result.
     */
    dynamicValue?: Array<PlanDefinitionDynamicValue>;
    /**
     * Sub actions that are contained within the action. The behavior of this action determines the functionality of the sub-actions. For example, a selection behavior of at-most-one indicates that of the sub-actions, at most one may be chosen as part of realizing the action definition.
     */
    action?: Array<PlanDefinitionAction>;
}
export namespace PlanDefinitionAction {
    export type GroupingBehaviorEnum = 'visual-group' | 'logical-group' | 'sentence-group';
    export const GroupingBehaviorEnum = {
        VisualGroup: 'visual-group' as GroupingBehaviorEnum,
        LogicalGroup: 'logical-group' as GroupingBehaviorEnum,
        SentenceGroup: 'sentence-group' as GroupingBehaviorEnum
    };
    export type SelectionBehaviorEnum = 'any' | 'all' | 'all-or-none' | 'exactly-one' | 'at-most-one' | 'one-or-more';
    export const SelectionBehaviorEnum = {
        Any: 'any' as SelectionBehaviorEnum,
        All: 'all' as SelectionBehaviorEnum,
        AllOrNone: 'all-or-none' as SelectionBehaviorEnum,
        ExactlyOne: 'exactly-one' as SelectionBehaviorEnum,
        AtMostOne: 'at-most-one' as SelectionBehaviorEnum,
        OneOrMore: 'one-or-more' as SelectionBehaviorEnum
    };
    export type RequiredBehaviorEnum = 'must' | 'could' | 'must-unless-documented';
    export const RequiredBehaviorEnum = {
        Must: 'must' as RequiredBehaviorEnum,
        Could: 'could' as RequiredBehaviorEnum,
        MustUnlessDocumented: 'must-unless-documented' as RequiredBehaviorEnum
    };
    export type PrecheckBehaviorEnum = 'yes' | 'no';
    export const PrecheckBehaviorEnum = {
        Yes: 'yes' as PrecheckBehaviorEnum,
        No: 'no' as PrecheckBehaviorEnum
    };
    export type CardinalityBehaviorEnum = 'single' | 'multiple';
    export const CardinalityBehaviorEnum = {
        Single: 'single' as CardinalityBehaviorEnum,
        Multiple: 'multiple' as CardinalityBehaviorEnum
    };
}
