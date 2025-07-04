import * as Dialog from '@radix-ui/react-dialog';

export default function ResetPasswordDialog() {
  return (
    <Dialog.Root>
      {/* Button to open dialog */}
      <Dialog.Trigger asChild>
        <button className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800">
          Reset Password
        </button>
      </Dialog.Trigger>

      {/* Dialog Content */}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-white rounded-lg shadow-lg max-w-sm w-full">
          {/* Dialog Header */}
          <Dialog.Header>
            <Dialog.Title className="text-xl font-semibold mb-2">Reset Password</Dialog.Title>
            <Dialog.Description className="text-sm text-gray-600">
              Silakan masukkan password baru Anda.
            </Dialog.Description>
          </Dialog.Header>

          {/* Form Input */}
          <form className="space-y-4">
            <div className="mb-4">
              <label className="block mb-2">Password Baru</label>
              <input
                type="password"
                placeholder="Masukkan password baru"
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Konfirmasi Password</label>
              <input
                type="password"
                placeholder="Konfirmasi password baru"
                className="w-full p-2 border rounded"
              />
            </div>
          </form>

          {/* Dialog Footer */}
          <Dialog.Footer className="flex justify-end gap-4">
            <Dialog.Close asChild>
              <button className="bg-gray-300 text-black px-4 py-2 rounded">Batal</button>
            </Dialog.Close>
            <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
              Simpan
            </button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
