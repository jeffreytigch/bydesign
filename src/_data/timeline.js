// Header and footer
export const header = 'By Design';
export const footer = 'Vulnerabilities Microsoft Security Response Center deems "by design" or not important enough. Sourced from MSRC advisories.';

// Timeline entries — add new ones at the top (most recent first)
const entries = [
  {
    id: 'msrc-2026-001',
    categories: ['security', 'msrc'],
    color: 'red',
    faicon: 'shield-alt',
    datetime: '2026-05-01 00:00',
    title: 'Windows TCP/IP Remote Code Execution — "Not Exploitable"',
    link: {
      href: 'https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-30001',
      linkText: 'MSRC Advisory',
    },
    body: 'Microsoft classified a remote code execution vulnerability in Windows TCP/IP stack as "not exploitable" in normal scenarios. The vulnerability requires specific network conditions that MSRC deemed "extremely unlikely" in production environments. Security researchers argued the attack surface was broader than acknowledged.',
    links: [
      {
        href: 'https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-30001',
        linkText: 'CVE Details',
        extraText: 'MSRC security update guide',
      },
    ],
  },
  {
    id: 'msrc-2026-002',
    categories: ['security', 'msrc'],
    color: 'red',
    faicon: 'bug',
    datetime: '2026-04-15 00:00',
    title: 'SharePoint Server Spoofing — "By Design"',
    link: {
      href: 'https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-32201',
      linkText: 'MSRC Advisory',
    },
    body: 'A spoofing vulnerability in Microsoft SharePoint Server was marked as "by design" — meaning the behavior is intentional and will not be patched. The vulnerability allows attackers to impersonate legitimate SharePoint services, potentially leading to credential theft or phishing attacks.',
    links: [
      {
        href: 'https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-32201',
        linkText: 'CVE Details',
        extraText: 'MSRC security update guide',
      },
    ],
  },
  {
    id: 'msrc-2026-003',
    categories: ['security', 'msrc'],
    color: 'red',
    faicon: 'lock',
    datetime: '2026-03-11 00:00',
    title: 'SQL Server Privilege Escalation — "Won\'t Fix"',
    link: {
      href: 'https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-21262',
      linkText: 'MSRC Advisory',
    },
    body: 'An improper access control vulnerability in SQL Server allows authorized low-privileged users to elevate privileges over the network, potentially gaining sysadmin access. Microsoft declined to patch, stating the vulnerability requires existing authentication and is "not a security boundary violation" in their threat model.',
    links: [
      {
        href: 'https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-21262',
        linkText: 'CVE Details',
        extraText: 'MSRC security update guide',
      },
    ],
  },
  {
    id: 'msrc-2026-004',
    categories: ['security', 'msrc'],
    color: 'red',
    faicon: 'exclamation-triangle',
    datetime: '2026-02-11 00:00',
    title: 'HTTP.sys Denial of Service — "Informational"',
    link: {
      href: 'https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-33096',
      linkText: 'MSRC Advisory',
    },
    body: 'A denial-of-service vulnerability in HTTP.sys was classified as "informational" severity rather than a security update. While the bug can crash IIS and other network-facing Windows services, MSRC deemed it "not a security vulnerability" since it does not lead to code execution or privilege escalation.',
    links: [
      {
        href: 'https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-33096',
        linkText: 'CVE Details',
        extraText: 'MSRC security update guide',
      },
    ],
  },
  {
    id: 'msrc-2026-005',
    categories: ['security', 'msrc'],
    color: 'red',
    faicon: 'windows',
    datetime: '2026-01-14 00:00',
    title: 'Windows Kerberos Privilege Escalation — "By Design"',
    link: {
      href: 'https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-20001',
      linkText: 'MSRC Advisory',
    },
    body: 'A privilege escalation vulnerability in Windows Kerberos was marked as "by design." The issue relates to how Kerberos tickets are validated, allowing certain authenticated users to obtain elevated tickets. Microsoft\'s position: the attack requires domain-joined membership and valid credentials, placing it outside their security boundary.',
    links: [
      {
        href: 'https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-20001',
        linkText: 'CVE Details',
        extraText: 'MSRC security update guide',
      },
    ],
  },
];

// Page details
export const pageTitle = 'by design';
export const pageDescription = 'Vulnerabilities Microsoft Security Response Center deems "by design" or not important enough.';
export const pageAuthor = 'Jeffrey Tigch';
export const showMirrorLinks = true;

// DON'T EDIT BELOW THIS LINE! --------------------------------------------------------------------
const getFilters = (entries) => {
  const filters = new Set();
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      for (var j = 0; j < entry.categories.length; j++) {
        filters.add(entry.categories[j]);
      }
    }
  }
  var filtersArray = [...filters];
  filtersArray.sort();
  return filtersArray;
};

const addCategoriesStringsToEntries = (entries) => {
  for (const entry of entries) {
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      entry.categoriesString = entry.categories.join(',');
    }
  }
  return entries;
};

export default {
  header,
  footer,
  showMirrorLinks,
  entries: addCategoriesStringsToEntries(entries),
  filters: getFilters(entries),
  head: {
    title: pageTitle,
    description: pageDescription,
    author: pageAuthor,
  },
};
