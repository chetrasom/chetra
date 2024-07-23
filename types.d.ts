type NavLinks = {
    path: string,
    name: string
}

type SocialType = {
    path: string,
    icon: React.ReactNode
}

type AboutType = {
    title: string;
    description: string;
    info: {
        fieldName: string;
        fieldValue: string;
    }[];
}

type EducationType = {
    icon: string;
    title: string;
    description: string;
    items: {
        institute: string;
        degree: string;
        duration: string;
    }[];
}

type SkillType = {
    title: string;
    description: string;
    skillList: {
        icon: JSX.Element;
        name: string;
    }[];
}

type ContactType = {
    icon: JSX.Element;
    title: string;
    description: string;
    path: string;
}[]