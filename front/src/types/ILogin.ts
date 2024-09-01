export interface ILoginProps {
    token: string | null;
    setToken: React.Dispatch<React.SetStateAction<string | null>>;
  }