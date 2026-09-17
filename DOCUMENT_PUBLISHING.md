# Governance document publishing

The public document library is driven by `src/content/governance.ts` and rendered with the reusable `DocumentCard` component.

## Recommended public document set

After review/redaction, consider publishing:

- Registration / Foundation Deed or relevant registration document
- NGO DARPAN details/reference
- 12A certificate
- 80G certificate
- CSR-1 registration certificate
- Annual reports
- Audited financial statements / accountability reports as appropriate
- Selected safeguarding, privacy or governance policies when formally adopted

## Do not automatically publish

Do not place PAN copies, Aadhaar/identity documents, bank account documents, trustee signatures, unnecessary personal addresses or similar sensitive information in the public document library merely for completeness.

## How to add a PDF

1. Create `public/documents/` if it does not already exist.
2. Add a reviewed PDF, for example:
   `public/documents/12a-certificate.pdf`
3. In `src/content/governance.ts`, change that document's `href` from `null` to:
   `"/documents/12a-certificate.pdf"`
4. The existing `DocumentCard` will automatically change from the review state to a working “View document” link.

Use clear filenames and replace documents when registrations are renewed or superseded.
