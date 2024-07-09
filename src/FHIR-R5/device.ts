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
import { Code } from './code';
import { CodeableConcept } from './codeableConcept';
import { CodeableReference } from './codeableReference';
import { ContactPoint } from './contactPoint';
import { Count } from './count';
import { DateTime } from './dateTime';
import { DeviceConformsTo } from './deviceConformsTo';
import { DeviceName } from './deviceName';
import { DeviceProperty } from './deviceProperty';
import { DeviceUdiCarrier } from './deviceUdiCarrier';
import { DeviceVersion } from './deviceVersion';
import { Duration } from './duration';
import { Extension } from './extension';
import { Id } from './id';
import { Identifier } from './identifier';
import { Meta } from './meta';
import { Narrative } from './narrative';
import { Reference } from './reference';
import { ResourceList } from './resourceList';
import { Uri } from './uri';

/**
 * A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.
 */
export interface Device { 
    /**
     * This is a Device resource
     */
    resourceType: 'Device';
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
     * Unique instance identifiers assigned to a device by manufacturers other organizations or owners.
     */
    identifier?: Array<Identifier>;
    displayName?: string;
    definition?: CodeableReference;
    /**
     * Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
     */
    udiCarrier?: Array<DeviceUdiCarrier>;
    status?: Code;
    availabilityStatus?: CodeableConcept;
    biologicalSourceEvent?: Identifier;
    manufacturer?: string;
    manufactureDate?: Date;
    expirationDate?: Date;
    lotNumber?: string;
    serialNumber?: string;
    /**
     * This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition.
     */
    name?: Array<DeviceName>;
    modelNumber?: string;
    partNumber?: string;
    /**
     * Devices may be associated with one or more categories.
     */
    category?: Array<CodeableConcept>;
    /**
     * The kind or type of device. A device instance may have more than one type - in which case those are the types that apply to the specific instance of the device.
     */
    type?: Array<CodeableConcept>;
    /**
     * The actual design of the device or software version running on the device.
     */
    version?: Array<DeviceVersion>;
    /**
     * Identifies the standards, specifications, or formal guidances for the capabilities supported by the device. The device may be certified as conformant to these specifications e.g., communication, performance, process, measurement, or specialization standards.
     */
    conformsTo?: Array<DeviceConformsTo>;
    /**
     * Static or essentially fixed characteristics or features of the device (e.g., time or timing attributes, resolution, accuracy, intended use or instructions for use, and physical attributes) that are not otherwise captured in more specific attributes.
     */
    property?: Array<DeviceProperty>;
    mode?: CodeableConcept;
    cycle?: Count;
    duration?: Duration;
    owner?: Reference;
    /**
     * Contact details for an organization or a particular human that is responsible for the device.
     */
    contact?: Array<ContactPoint>;
    location?: Reference;
    url?: Uri;
    /**
     * Technical endpoints providing access to services provided by the device defined at this resource.
     */
    endpoint?: Array<Reference>;
    /**
     * The linked device acting as a communication controller, data collector, translator, or concentrator for the current device (e.g., mobile phone application that relays a blood pressure device's data).
     */
    gateway?: Array<CodeableReference>;
    /**
     * Descriptive information, usage information or implantation information that is not captured in an existing element.
     */
    note?: Array<Annotation>;
    /**
     * Provides additional safety characteristics about a medical device.  For example devices containing latex.
     */
    safety?: Array<CodeableConcept>;
    parent?: Reference;
}