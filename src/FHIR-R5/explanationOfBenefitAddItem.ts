/**
 * FHIR Version R5
 * The following is auto generated resource definition.
 *
 * OpenAPI spec version: 3.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Address } from './address';
import { CodeableConcept } from './codeableConcept';
import { Decimal } from './decimal';
import { ExplanationOfBenefitAdjudication } from './explanationOfBenefitAdjudication';
import { ExplanationOfBenefitBodySite1 } from './explanationOfBenefitBodySite1';
import { ExplanationOfBenefitDetail1 } from './explanationOfBenefitDetail1';
import { ExplanationOfBenefitReviewOutcome } from './explanationOfBenefitReviewOutcome';
import { Extension } from './extension';
import { Identifier } from './identifier';
import { Money } from './money';
import { Period } from './period';
import { PositiveInt } from './positiveInt';
import { Quantity } from './quantity';
import { Reference } from './reference';

/**
 * This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
 */
export interface ExplanationOfBenefitAddItem { 
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Array<Extension>;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Array<Extension>;
    /**
     * Claim items which this service line is intended to replace.
     */
    itemSequence?: Array<PositiveInt>;
    /**
     * The sequence number of the details within the claim item which this line is intended to replace.
     */
    detailSequence?: Array<PositiveInt>;
    /**
     * The sequence number of the sub-details woithin the details within the claim item which this line is intended to replace.
     */
    subDetailSequence?: Array<PositiveInt>;
    /**
     * Trace number for tracking purposes. May be defined at the jurisdiction level or between trading partners.
     */
    traceNumber?: Array<Identifier>;
    /**
     * The providers who are authorized for the services rendered to the patient.
     */
    provider?: Array<Reference>;
    revenue?: CodeableConcept;
    productOrService?: CodeableConcept;
    productOrServiceEnd?: CodeableConcept;
    /**
     * Request or Referral for Goods or Service to be rendered.
     */
    request?: Array<Reference>;
    /**
     * Item typification or modifiers codes to convey additional context for the product or service.
     */
    modifier?: Array<CodeableConcept>;
    /**
     * Identifies the program under which this may be recovered.
     */
    programCode?: Array<CodeableConcept>;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    servicedDate?: string;
    servicedPeriod?: Period;
    locationCodeableConcept?: CodeableConcept;
    locationAddress?: Address;
    locationReference?: Reference;
    patientPaid?: Money;
    quantity?: Quantity;
    unitPrice?: Money;
    factor?: Decimal;
    tax?: Money;
    net?: Money;
    /**
     * Physical location where the service is performed or applies.
     */
    bodySite?: Array<ExplanationOfBenefitBodySite1>;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: Array<PositiveInt>;
    reviewOutcome?: ExplanationOfBenefitReviewOutcome;
    /**
     * The adjudication results.
     */
    adjudication?: Array<ExplanationOfBenefitAdjudication>;
    /**
     * The second-tier service adjudications for payor added services.
     */
    detail?: Array<ExplanationOfBenefitDetail1>;
}