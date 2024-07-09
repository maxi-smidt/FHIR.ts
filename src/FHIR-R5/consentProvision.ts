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
import { CodeableConcept } from './codeableConcept';
import { Coding } from './coding';
import { ConsentActor } from './consentActor';
import { ConsentData } from './consentData';
import { Expression } from './expression';
import { Extension } from './extension';
import { Period } from './period';

/**
 * A record of a healthcare consumer’s  choices  or choices made on their behalf by a third party, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
 */
export interface ConsentProvision { 
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Array<Extension>;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Array<Extension>;
    period?: Period;
    /**
     * Who or what is controlled by this provision. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
     */
    actor?: Array<ConsentActor>;
    /**
     * Actions controlled by this provision.
     */
    action?: Array<CodeableConcept>;
    /**
     * A security label, comprised of 0..* security label fields (Privacy tags), which define which resources are controlled by this exception.
     */
    securityLabel?: Array<Coding>;
    /**
     * The context of the activities a user is taking - why the user is accessing the data - that are controlled by this provision.
     */
    purpose?: Array<Coding>;
    /**
     * The documentType(s) covered by this provision. The type can be a CDA document, or some other type that indicates what sort of information the consent relates to.
     */
    documentType?: Array<Coding>;
    /**
     * The resourceType(s) covered by this provision. The type can be a FHIR resource type or a profile on a type that indicates what information the consent relates to.
     */
    resourceType?: Array<Coding>;
    /**
     * If this code is found in an instance, then the provision applies.
     */
    code?: Array<CodeableConcept>;
    dataPeriod?: Period;
    /**
     * The resources controlled by this provision if specific resources are referenced.
     */
    data?: Array<ConsentData>;
    expression?: Expression;
    /**
     * Provisions which provide exceptions to the base provision or subprovisions.
     */
    provision?: Array<ConsentProvision>;
}