type ParamsType = {
    id?: string | string[];
    page: number | string;
    limit: number | string;
    sort: string | number;
    field?: string;
    keyword?: any;
    type?: number;
    transactionDate?: string;
    settlementDate?: string;
    status?: string;
    branchCode?: string;
    kanwil?: string;
};

interface SelectOption {
    id?: string | number;
    name?: string | number;
    value: string | number;
    label: string;
    description?: string;
}

// Interface type untuk fungsi akses
interface FunctionPermission {
    id: string;
    name: string;
    action: string;
    code: string;
    // Jika ada properti lain dalam objek `FunctionPermission`, tambahkan di sini.
}

// Interface type untuk perizinan pada setiap modul
interface ModulePermission {
    module_id: string;
    module_name: string;
    functions: FunctionPermission[];
    // Jika ada properti lain dalam objek `ModulePermission`, tambahkan di sini.
}

// Interface type untuk semua perizinan
interface Permissions {
    user: {
        id: string;
        name: string;
        email: string;
        personal_number: string;
        phone_number: string;
        image_url: string;
    };
    role: {
        id: string;
        name: string;
        description: string;
    };
    permissions: ModulePermission[];
    // Jika ada properti lain dalam objek `Permissions`, tambahkan di sini.
}

// Interface type untuk data user lengkap
interface UserData {
    exp: number;
    iss: string;
    sub: string;
    user_id: string;
    permissions: Permissions;
    // Jika ada properti lain dalam objek `UserData`, tambahkan di sini.
}

type ModalStatusType = 'success' | 'error' | null;
