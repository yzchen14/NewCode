import numpy as np
from scipy.optimize import curve_fit

# Assuming M_shift_x and M_shift_y are your 15x15 matrices
# Define your functions f and h

def f(xy, a, b, c):
    x, y = xy
    return a * x**2 + b * x + c

def h(xy, d, e, f):
    x, y = xy
    return d * y**2 + e * y + f

# Reshape matrices for curve_fit
x_data = np.arange(15)
y_data = np.arange(15)
x_data, y_data = np.meshgrid(x_data, y_data)

# Flatten matrices for curve_fit
x_data_flat = x_data.flatten()
y_data_flat = y_data.flatten()
M_shift_x_flat = M_shift_x.flatten()
M_shift_y_flat = M_shift_y.flatten()

# Fit data for ShiftX
params_shift_x, _ = curve_fit(f, (x_data_flat, y_data_flat), M_shift_x_flat)

# Fit data for ShiftY
params_shift_y, _ = curve_fit(h, (x_data_flat, y_data_flat), M_shift_y_flat)

# Extracting the parameters
a, b, c = params_shift_x
d, e, f = params_shift_y

# Now, 'a', 'b', 'c' are the parameters for ShiftX, and 'd', 'e', 'f' are for ShiftY
