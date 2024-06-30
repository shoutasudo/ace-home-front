
export const deleteStaff = async (staffId: string) => {
    try {
        const params = {
            staffId: staffId
        };
        const res = await fetch('/api/staff/delete', {
            method: 'POST',
            body: JSON.stringify(params),
        });

        if (!res.ok) {
            const errorText = await res.text();
            throw new Error(`データフェッチに失敗しました: ${res.status} - ${errorText}`);
        }
    } catch (error) {
        console.error('Error fetching staff:', error);
        throw new Error('Failed to fetch staff');
    }
};
