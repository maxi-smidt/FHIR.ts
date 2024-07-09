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
import { CareTeamParticipant } from './careTeamParticipant';
import { Code } from './code';
import { CodeableConcept } from './codeableConcept';
import { CodeableReference } from './codeableReference';
import { ContactPoint } from './contactPoint';
import { Extension } from './extension';
import { Id } from './id';
import { Identifier } from './identifier';
import { Meta } from './meta';
import { Narrative } from './narrative';
import { Period } from './period';
import { Reference } from './reference';
import { ResourceList } from './resourceList';
import { Uri } from './uri';

/**
 * The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care.
 */
export interface CareTeam { 
    /**
     * This is a CareTeam resource
     */
    resourceType: 'CareTeam';
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
     * Business identifiers assigned to this care team by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
     */
    identifier?: Array<Identifier>;
    status?: Code;
    /**
     * Identifies what kind of team.  This is to support differentiation between multiple co-existing teams, such as care plan team, episode of care team, longitudinal care team.
     */
    category?: Array<CodeableConcept>;
    name?: string;
    subject?: Reference;
    period?: Period;
    /**
     * Identifies all people and organizations who are expected to be involved in the care team.
     */
    participant?: Array<CareTeamParticipant>;
    /**
     * Describes why the care team exists.
     */
    reason?: Array<CodeableReference>;
    /**
     * The organization responsible for the care team.
     */
    managingOrganization?: Array<Reference>;
    /**
     * A central contact detail for the care team (that applies to all members).
     */
    telecom?: Array<ContactPoint>;
    /**
     * Comments made about the CareTeam.
     */
    note?: Array<Annotation>;
}