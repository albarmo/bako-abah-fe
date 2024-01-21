import { toast } from 'react-hot-toast';
import { useMutation, UseMutationOptions } from 'react-query';

interface CustomMutationOptions<TData extends { status: number }, TError, TVariables>
    extends UseMutationOptions<TData, TError, TVariables> {
    mutationFunction: (variables: TVariables) => Promise<TData>;
}

export default function useCustomMutation<
    TData extends {
        status: number;
        message: string;
        code: number;
        responseDesc: string;
        responseCode: number;
    },
    TError extends { responseDesc: string; responseCode: number; code: number },
    TVariables
>(
    mutationFunction: (variables: TVariables) => Promise<TData>,
    options?: CustomMutationOptions<TData, TError, TVariables>
) {
    const { onError, onSuccess, ...mutationOptions } = options || {};

    const mutation = useMutation<TData, TError, TVariables>(mutationFunction, {
        onSuccess: (data, variables, context) => {
            if (onSuccess) {
                onSuccess(data, variables, context);
            }
        },
        onError: (error, variables, context) => {
            toast.error(`An error occurred, ${error?.responseDesc} `, {
                duration: 1000,
                style: {
                    maxWidth: '350px',
                    fontSize: 12,
                    textAlign: 'center',
                },
            });
            if (onError) {
                onError(error, variables, context);
            }
        },
        ...mutationOptions,
    });

    const reset = () => {
        mutation.reset();
    };

    return {
        mutation,
        isLoading: mutation.isLoading,
        isSuccess: mutation.isSuccess,
        isError: mutation.isError,
        error: mutation.error,
        reset, // Add reset function to the returned object
    };
}