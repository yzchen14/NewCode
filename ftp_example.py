from ftplib import FTP, error_perm

class FTPConnection:
    def __init__(self, host, username, password):
        self.host = host
        self.username = username
        self.password = password
        self.ftp = None

    def __enter__(self):
        try:
            self.ftp = FTP(self.host)
            self.ftp.login(self.username, self.password)
            print(f"Connected to {self.host} via FTP")
            return self.ftp
        except ConnectionError:
            print(f"Connection to {self.host} failed.")
            raise
        except error_perm as e:
            print(f"Login to {self.host} failed: {e}")
            raise

    def __exit__(self, exc_type, exc_value, traceback):
        if self.ftp:
            self.ftp.quit()
            print(f"Disconnected from {self.host} via FTP")

# Usage of the context manager
ftp_host = "ftp.example.com"
ftp_username = "your_username"
ftp_password = "your_password"

try:
    with FTPConnection(ftp_host, ftp_username, ftp_password) as ftp:
        file_list = ftp.nlst()  # Get a list of files in the current directory
        print("List of files:", file_list)
        # Perform other FTP operations here
except (ConnectionError, error_perm) as e:
    print("Error:", e)

print("Outside the context")
