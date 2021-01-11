import { shouldDisplayHelpMenu } from "./tests/shared-specs";
import { TestUtils } from "./tests/test-utils";
import { Constants } from "./modules/constants";

// -----------------------------------------------------------------------------------------
// #region Tests
// -----------------------------------------------------------------------------------------

describe("and-cli-restore-azure-storage", () => {
    // -----------------------------------------------------------------------------------------
    // #region clientId and tenantId
    // -----------------------------------------------------------------------------------------

    describe("clientId and tenantId", () => {
        test("given no '--client-id' or '--tenant-id' flag, it displays an error", async () => {
            // Arrange & Act
            const result = await TestUtils.executeCliCommand("restore", [
                "azure-storage",
            ]);

            // Assert
            expect(result).toContain(Constants.ERROR_OUTPUT_STRING);
            expect(result).toContain("--client-id or --tenant-id not provided");
        });

        test("given only '--tenant-id' flag, it displays an error", async () => {
            // Arrange & Act
            const result = await TestUtils.executeCliCommand(
                "restore",
                ["azure-storage"],
                "--tenant-id=test"
            );

            // Assert
            expect(result).toContain(Constants.ERROR_OUTPUT_STRING);
            expect(result).toContain("--client-id or --tenant-id not provided");
        });

        test("given only '--client-id' flag, it displays an error", async () => {
            // Arrange & Act
            const result = await TestUtils.executeCliCommand(
                "restore",
                ["azure-storage"],
                "--client-id=test"
            );

            // Assert
            expect(result).toContain(Constants.ERROR_OUTPUT_STRING);
            expect(result).toContain("--client-id or --tenant-id not provided");
        });
    });

    // #endregion clientId and tenantId

    // -----------------------------------------------------------------------------------------
    // #region destination-container
    // -----------------------------------------------------------------------------------------

    describe("destination-container", () => {
        test("given no '--destination-container' flag, it displays an error", async () => {
            // Arrange & Act
            const result = await TestUtils.executeCliCommand("restore", [
                "azure-storage",
            ]);

            // Assert
            expect(result).toContain(Constants.ERROR_OUTPUT_STRING);
            expect(result).toContain("--destination-container is required");
        });
    });

    // #endregion destination-container

    // -----------------------------------------------------------------------------------------
    // #region source-container
    // -----------------------------------------------------------------------------------------

    describe("source-container", () => {
        test("given no '--source-container' flag, it displays an error", async () => {
            // Arrange & Act
            const result = await TestUtils.executeCliCommand("restore", [
                "azure-storage",
            ]);

            // Assert
            expect(result).toContain(Constants.ERROR_OUTPUT_STRING);
            expect(result).toContain("--source-container is required");
        });
    });

    // #endregion source-container

    // -----------------------------------------------------------------------------------------
    // #region help
    // -----------------------------------------------------------------------------------------

    shouldDisplayHelpMenu("restore", ["azure-storage"]);

    // #endregion help

    // -----------------------------------------------------------------------------------------
    // #region secret
    // -----------------------------------------------------------------------------------------

    describe("secret", () => {
        test("given no '--secret' flag, it displays an error", async () => {
            // Arrange & Act
            const result = await TestUtils.executeCliCommand("restore", [
                "azure-storage",
            ]);

            // Assert
            expect(result).toContain(Constants.ERROR_OUTPUT_STRING);
            expect(result).toContain("--secret is required");
        });
    });

    // #endregion secret

    // -----------------------------------------------------------------------------------------
    // #region username
    // -----------------------------------------------------------------------------------------

    describe("username", () => {
        test("given no '--username' and no '--client-id' flag, it displays an error", async () => {
            // Arrange & Act
            const result = await TestUtils.executeCliCommand(
                "restore",
                ["azure-storage"],
                "--tenant-id=test"
            );

            // Assert
            expect(result).toContain(Constants.ERROR_OUTPUT_STRING);
            expect(result).toContain("--username is required");
        });

        test("given no '--username' and no '--tenant-id' flag, it displays an error", async () => {
            // Arrange & Act
            const result = await TestUtils.executeCliCommand(
                "restore",
                ["azure-storage"],
                "--client-id=test"
            );

            // Assert
            expect(result).toContain(Constants.ERROR_OUTPUT_STRING);
            expect(result).toContain("--username is required");
        });

        test("given '--username' and no '--tenant-id' or '--client-id' flag, it doesn't display an error", async () => {
            // Arrange & Act
            const result = await TestUtils.executeCliCommand(
                "restore",
                ["azure-storage"],
                "--username=test"
            );

            // Assert
            expect(result).toContain(Constants.ERROR_OUTPUT_STRING);
            expect(result).toContain("--username is required");
        });
    });

    // #endregion username
});

// #endregion Tests
