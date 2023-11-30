import base64
from PIL import Image
from io import BytesIO

def image_to_base64(image_path):
    try:
        with open(image_path, 'rb') as img_file:
            image_data = img_file.read()
            encoded_image = base64.b64encode(image_data).decode('utf-8')
            return encoded_image
    except FileNotFoundError:
        print("File not found!")
        return None

def resize_image(image_path, max_pixels=6400):
    try:
        img = Image.open(image_path)
        width, height = img.size
        current_pixels = width * height
        if current_pixels > max_pixels:
            # Calculate the new dimensions to maintain aspect ratio
            ratio = (max_pixels / current_pixels) ** 0.5
            new_width = int(width * ratio)
            new_height = int(height * ratio)
            img = img.resize((new_width, new_height), Image.ANTIALIAS)
        return img
    except FileNotFoundError:
        print("File not found!")
        return None
    except Exception as e:
        print(f"An error occurred: {e}")
        return None

def create_html_with_resized_image(image_path, output_html):
    resized_img = resize_image(image_path)
    if resized_img:
        buffered = BytesIO()
        resized_img.save(buffered, format="PNG")
        encoded_image = base64.b64encode(buffered.getvalue()).decode('utf-8')
        with open(output_html, 'w') as html_file:
            html_file.write(f'''
            <html>
            <head><title>Resized Image to Base64</title></head>
            <body>
                <h1>Resized Image converted to Base64</h1>
                <img src="data:image/png;base64,{encoded_image}" alt="Resized Image">
            </body>
            </html>
            ''')
        print(f"HTML file '{output_html}' with resized base64 image created successfully!")
    else:
        print("Failed to generate HTML with resized base64 image.")

# Provide your image file path and output HTML file path here
image_file_path = '001.png'  # Replace with your image file path
output_html_file = 'output_resized.html'  # Replace with your desired output HTML file name

create_html_with_resized_image(image_file_path, output_html_file)
