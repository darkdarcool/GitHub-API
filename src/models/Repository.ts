import * as z from 'npm:zod';
import { RepositoryFields } from "../services/service.types.ts";

// type RepositoryFields = 'allowUpdateBranch' | 'archivedAt' | 'authMergeAllowed' | 'codeOfConduct' | 'createdAt' | 'databaseId' | 'defaultBranchRef' | 'deleteBranchOnMerge' | 'description' | 'descriptionHTML' | 'diskUsage' | 'forkCount' | 'forkingAllowed' | 'hasDiscussionsEnabled' | 'hasIssuesEnabled' | 'hasProjectsEnabled' | 'hasVulnerabilityAlertsEnabled' | 'hasWikiEnabled' | 'homepageUrl' | 'id' | 'interactionAbility' | 'isArchived' | 'isBlankIssuesEnabled' | 'isDisabled' | 'isEmpty' | 'isFork' | 'isInOrganization' | 'isLocked' | 'isMirror' | 'isPrivate' | 'isSecurityPolicyEnabled' | 'isTemplate' | 'isUserConfigurationRepository' | 'latestRelease' | 'licenseInfo' | 'lockReason' | 'mergeCommitAllowed' | 'mergeCommitMessage' | 'mergeCommitTitle' | 'mirrorUrl' | 'name' | 'nameWithOwner' | 'openGraphImageUrl' | 'owner' | 'parent' | 'primaryLanguage' | 'projectsResourcePath' | 'projectsUrl' | 'pushedAt' | 'rebaseMergeAllowed' | 'resourcePath' | 'securityPolicyUrl' | 'squashMergeAllowed' | 'squashMergeCommitMessage' | 'squashMergeCommitTitle' | 'sshUrl' | 'stargazerCount' | 'tempCloneToken' | 'templateRepository' | 'updatedAt' | 'url' | 'usesCustomOpenGraphImage' | 'viewerCanAdminister' | 'viewerCanCreateProjects' | 'viewerCanSubscribe' | 'viewerCanUpdateTopics' | 'viewerDefaultCommitEmail' | 'viewerHasStarred' | 'viewerPermission' | 'visibility' | 'webCommitSignoffRequired'

export default class RepositoryBuilder {
  public fields: string[] = [];
  constructor() {

  }

  select(...fields: RepositoryFields[]) {
    fields.forEach(field => {
      this.fields.push(field);
    });

    return this;
  }

  generateSchema(): z.ZodType {
    return z.object(Object.fromEntries(this.fields.map(field => [field, z.string()])));
  }

  build() {
    return this.fields;
  }
}