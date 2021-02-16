/*********************************************************************
* Copyright (c) Intel Corporation 2021
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

export interface Device{
  'host': string
  'amtuser': string
  'icon': number
  'conn': number
}
export interface Domain{
  'Name': string
  'DomainSuffix': string
  'ProvisioningCert': string
  'ProvisioningCertPassword': string
  'ProvisioningCertStorageFormat': string
}

export interface Profile {
  'ProfileName': string
  'AMTPassword': null
  'GenerateRandomPassword': boolean
  'RandomPasswordLength': number
  'ConfigurationScript': null
  'Activation': string
  'CIRAConfigName': string
  'NetworkConfigName': string
  'MEBxPassword': string
  'GenerateRandomMEBxPassword': boolean
  'RandomMEBxPasswordLength': number
}
export interface CIRAConfig {
  'ConfigName': string
  'MPSServerAddress': string
  'MPSPort': number
  'Username': string
  'Password': string
  'CommonName': string
  'ServerAddressFormat': number
  'AuthMethod': number
  'MPSRootCertificate': string
  'ProxyDetails': string
}
export interface AuditLog{
  AuditApp: string
  AuditAppID: number
  Event: string
  EventID: number
  Ex: string
  ExStr: string
  Initiator: string
  InitiatorType: number
  MCLocationType: number
  NetAddress: string
  Time: string
}
export interface AuditLogResponse{
  totalCnt: number
  records: AuditLog[]
}

export interface APIResponse{
  error: string
  message: string
}
