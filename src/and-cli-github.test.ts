import { shouldDisplayHelpMenu } from "./tests/shared-specs";

// -----------------------------------------------------------------------------------------
// #region Tests
// -----------------------------------------------------------------------------------------

describe("and-cli-github", () => {
    // -----------------------------------------------------------------------------------------
    // #region help
    // -----------------------------------------------------------------------------------------

    shouldDisplayHelpMenu("github");

    // #endregion help
});

// #endregion Tests