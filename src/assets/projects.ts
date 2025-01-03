interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    link: string;
}

export const projects: ProjectCardProps[] = [
    {
        title: "ZKEmail",
        description: "Privacy-preserving proof of email",
        tags: ["general"],
        link: "https://github.com/zkemail/zkemail.nr",
    },
    {
        title: "ZK-Bench",
        description: "Benchmark Noir against other ZK frameworks",
        tags: ["benchmark"],
        link: "https://zkbench.dev/",
    },
    {
        title: "zkLogin",
        description: "Apple/Google account based authentication for EVM smart accounts",
        tags: ["authentication"],
        link: "https://github.com/olehmisar/zklogin",
    },
    {
        title: "GitClaim",
        description: "privacy-preserving airdrop claims through proof of GitHub contributions",
        tags: ["commercial"],
        link: "https://github.com/saleel/gitclaim",
    },
    {
        title: "z-imburse",
        description: "automated and privacy-preserving expense reimbursements",
        tags: ["commercial"],
        link: "https://github.com/Mach-34/z-imburse",
    },
    {
        title: "BattleZips",
        description: " on-chain Battleshipa",
        tags: ["gaming"],
        link: "https://github.com/BattleZips/BattleZips-Noir",
    },
    {
        title: "Dappicom",
        description: "Nintendo Entertainment System (NES) emulator in Noir for proofs of gameplays / speedruns",
        tags: ["gaming"],
        link: "https://github.com/tonk-labs/dappicom",
    },
    {
        title: "Nouns Anonymous Voting",
        description: "privacy-preserving voting research project for NounsDAO",
        tags: ["governance"],
        link: "https://github.com/aragonzkresearch/nouns-anonymous-voting",
    },
    {
        title: "Anon-Aadhaar",
        description: "privacy-preserving verification of Aadhaar (Indian residence ID) through proofs revealing only selected identity information",
        tags: ["identity"],
        link: "https://github.com/anon-aadhaar/anon-aadhaar-noir",
    },
    {
        title: "OpenPassport",
        description: "identity wallet supporting privacy-preserving proofs of goverment-issued IDs",
        tags: ["identity"],
        link: "https://github.com/openpassport-org/openpassport",
    },
    {
        title: "zkPassport",
        description: "privacy-preserving proofs of national passports",
        tags: ["identity"],
        link: "https://github.com/zkpassport/circuits",
    },
    {
        title: "anon.world",
        description: "social media with optional anonymity",
        tags: ["social"],
        link: "https://github.com/Slokh/anonworld",
    },
    {
        title: "Rate Limiting Nullifiers",
        description: "spam regulation in anonymous environments",
        tags: ["social"],
        link: "https://github.com/Rate-Limiting-Nullifier/noir-rln",
    },
    {
        title: "StealthNote",
        description: "message board for people in an organization to anonymously broadcast messages",
        tags: ["social"],
        link: "https://github.com/saleel/stealthnote",
    }
]