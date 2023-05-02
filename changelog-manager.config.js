'use strict';

module.exports = {
  // [Required] Indicates the name of the application.
  appName: 'Platform',

  // [Required] Indicates the relative path of the directory where files to add in the
  // changelog reside.
  sourceDirRelative: './changelog/unreleased',

  // [Required] Indicates the relative path of the target changelog file.
  targetChangelogFileRelative: './CHANGELOG.md',

  // [Optional] Indicates the relative path of the directory where changelog
  // detail files will be written.
  // If not provided the detail files will not be generated.
  targetDetailChangelogDirRelative: './changelog/details',

  // [Optional] File to store notification details in order to be retrived from `notification-changelog` command
  // Default: './notificationChangeLog'
  notificationFileRelative: './notificationChangeLog',

  // [Optional] If given, allows to overwrite the default allowed actionTypes.
  // Defaults are: [added, changed, deprecated, removed, fixed, security]
  // availableActionTypes: [],

  // [Optional] If given, is possible to execute the procedure only in the indicated branch.
  requiredBranch: 'master',

  // [Optional] If a truthy value is given, then the source files will be deleted.
  // Default: true
  // removeFiles: true,

  // [Optional] If a truthy value is given, then the procedure will be executed only if no diffs
  // are present in the current branch.
  // Default: true
  // checkBranchDiffs: true,

  // [Optional] The git origin where pull and push changes.
  // Default: 'origin'
  // gitRemote: 'origin',

  // [Optional] If a truthy value is given, then the procedure will use this branch to push
  // changes and tags to
  // Default: null, current branch
  // targetBranch: null,

  // [Optional] If a truthy value is given, then the procedure will perform git fetch command
  // before proceeding.
  // Default: true
  // gitFetch: true,

  // [Optional] If a truthy value is given, then the procedure will pull remote changes
  // before proceeding.
  // Default: true
  // gitPull: true,

  // [Optional] If a truthy value is given, then the procedure will commit and
  // push the current changes.
  // Default: true
  // gitCommitAndPush: true,

  // [Optional] The commit message of git commit command.
  // Default: 'Update changelog'
  // commitMessage: 'Update changelog',

  // [Optional] If a truthy value is given, then the procedure will generate a git tag based on
  // the last tag present on the current branch.
  // If no tags are present in the current branch, then the new one will be '0.0.0'.
  // Default: true
  gitTagAndPush: true,

  // [Optional] List of branches where integrate changes.
  // The operation will be performed only if gitCommitAndPush is set to true.
  // Default: []
  // Elements must be strings with branch names where to integrate the changes to.
  // gitIntegrateChangesInBranches: ['development', 'assessment'],


  // [Optional] Base url for Jira issues.
  // If given, links to jira issues will be automatically be generated.
  // Default: null
  tasksManagerBaseUrl: 'https://app-us2.wrike.com/open.htm?id=',

  gitMergeStrategy: 'merge',


  // [Optional] Data for email notification.
  // Default: null
  email: {
    smtp: {
      host: 'mailer-1.kloudymail.com',
      // port: 587,
      port: 25,
      secure: false,
      auth: {
        username: 'transactional@mailer.bubblesmail.net',
        password: 'dWL7vvHAACNBs8T2'
      }
    },
    headers: {
      'X-GreenArrow-MailClass': 'transa',
      'X-GreenArrow-MtaID': 'transa'
    },
    from: 'support@rdcom.com',
    to: [
      'leonardo.cristini@rdcom.it'
    ],
    cc: [
      'leonardo.cristini@rdcom.com'
    ]
  }
};
