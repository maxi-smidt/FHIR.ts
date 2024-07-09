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
import { Annotation } from './annotation';
import { Canonical } from './canonical';
import { ChargeItemPerformer } from './chargeItemPerformer';
import { Code } from './code';
import { CodeableConcept } from './codeableConcept';
import { CodeableReference } from './codeableReference';
import { DateTime } from './dateTime';
import { Extension } from './extension';
import { Id } from './id';
import { Identifier } from './identifier';
import { Meta } from './meta';
import { MonetaryComponent } from './monetaryComponent';
import { Narrative } from './narrative';
import { Period } from './period';
import { Quantity } from './quantity';
import { Reference } from './reference';
import { ResourceList } from './resourceList';
import { Timing } from './timing';
import { Uri } from './uri';

/**
 * The resource ChargeItem describes the provision of healthcare provider products for a certain patient, therefore referring not only to the product, but containing in addition details of the provision, like date, time, amounts and participating organizations and persons. Main Usage of the ChargeItem is to enable the billing process and internal cost allocation.
 */
export interface ChargeItem { 
    /**
     * This is a ChargeItem resource
     */
    resourceType: 'ChargeItem';
    id?: Id;
    meta?: Meta;
    implicitRules?: Uri;
    language?: Code;
    text?: Narrative;
    /**
     * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, nor can they have their own independent transaction scope. This is allowed to be a Parameters resource if and only if it is referenced by a resource that provides context/meaning.
     */
    contained?: Array<ResourceList>;
    /**
     * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Array<Extension>;
    /**
     * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Array<Extension>;
    /**
     * Identifiers assigned to this event performer or other systems.
     */
    identifier?: Array<Identifier>;
    /**
     * References the (external) source of pricing information, rules of application for the code this ChargeItem uses.
     */
    definitionUri?: Array<Uri>;
    /**
     * References the source of pricing information, rules of application for the code this ChargeItem uses.
     */
    definitionCanonical?: Array<Canonical>;
    status?: Code;
    /**
     * ChargeItems can be grouped to larger ChargeItems covering the whole set.
     */
    partOf?: Array<Reference>;
    code: CodeableConcept;
    subject: Reference;
    encounter?: Reference;
    /**
     * Date/time(s) or duration when the charged service was applied.
     */
    occurrenceDateTime?: string;
    occurrencePeriod?: Period;
    occurrenceTiming?: Timing;
    /**
     * Indicates who or what performed or participated in the charged service.
     */
    performer?: Array<ChargeItemPerformer>;
    performingOrganization?: Reference;
    requestingOrganization?: Reference;
    costCenter?: Reference;
    quantity?: Quantity;
    /**
     * The anatomical location where the related service has been applied.
     */
    bodysite?: Array<CodeableConcept>;
    unitPriceComponent?: MonetaryComponent;
    totalPriceComponent?: MonetaryComponent;
    overrideReason?: CodeableConcept;
    enterer?: Reference;
    enteredDate?: Date;
    /**
     * Describes why the event occurred in coded or textual form.
     */
    reason?: Array<CodeableConcept>;
    /**
     * Indicated the rendered service that caused this charge.
     */
    service?: Array<CodeableReference>;
    /**
     * Identifies the device, food, drug or other product being charged either by type code or reference to an instance.
     */
    product?: Array<CodeableReference>;
    /**
     * Account into which this ChargeItems belongs.
     */
    account?: Array<Reference>;
    /**
     * Comments made about the event by the performer, subject or other participants.
     */
    note?: Array<Annotation>;
    /**
     * Further information supporting this charge.
     */
    supportingInformation?: Array<Reference>;
}