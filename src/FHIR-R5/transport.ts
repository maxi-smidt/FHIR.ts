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
import { Code } from './code';
import { CodeableConcept } from './codeableConcept';
import { CodeableReference } from './codeableReference';
import { DateTime } from './dateTime';
import { Extension } from './extension';
import { Id } from './id';
import { Identifier } from './identifier';
import { Meta } from './meta';
import { Narrative } from './narrative';
import { Reference } from './reference';
import { ResourceList } from './resourceList';
import { TransportInput } from './transportInput';
import { TransportOutput } from './transportOutput';
import { TransportRestriction } from './transportRestriction';
import { Uri } from './uri';

/**
 * Record of transport of item.
 */
export interface Transport { 
    /**
     * This is a Transport resource
     */
    resourceType: 'Transport';
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
     * Identifier for the transport event that is used to identify it across multiple disparate systems.
     */
    identifier?: Array<Identifier>;
    instantiatesCanonical?: Canonical;
    instantiatesUri?: Uri;
    /**
     * BasedOn refers to a higher-level authorization that triggered the creation of the transport.  It references a \"request\" resource such as a ServiceRequest or Transport, which is distinct from the \"request\" resource the Transport is seeking to fulfill.  This latter resource is referenced by FocusOn.  For example, based on a ServiceRequest (= BasedOn), a transport is created to fulfill a procedureRequest ( = FocusOn ) to transport a specimen to the lab.
     */
    basedOn?: Array<Reference>;
    groupIdentifier?: Identifier;
    /**
     * A larger event of which this particular event is a component or step.
     */
    partOf?: Array<Reference>;
    status?: Code;
    statusReason?: CodeableConcept;
    intent?: Code;
    priority?: Code;
    code?: CodeableConcept;
    description?: string;
    focus?: Reference;
    _for?: Reference;
    encounter?: Reference;
    completionTime?: Date;
    authoredOn?: Date;
    lastModified?: Date;
    requester?: Reference;
    /**
     * The kind of participant that should perform the transport.
     */
    performerType?: Array<CodeableConcept>;
    owner?: Reference;
    location?: Reference;
    /**
     * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be relevant to the Transport.
     */
    insurance?: Array<Reference>;
    /**
     * Free-text information captured about the transport as it progresses.
     */
    note?: Array<Annotation>;
    /**
     * Links to Provenance records for past versions of this Transport that identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the transport.
     */
    relevantHistory?: Array<Reference>;
    restriction?: TransportRestriction;
    /**
     * Additional information that may be needed in the execution of the transport.
     */
    input?: Array<TransportInput>;
    /**
     * Outputs produced by the Transport.
     */
    output?: Array<TransportOutput>;
    requestedLocation: Reference;
    currentLocation: Reference;
    reason?: CodeableReference;
    history?: Reference;
}