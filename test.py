





import pandas as pd



df_table= pd.DataFrame()

df_table.at[df_table['Time'] > pd.to_datetime("2023/01/01"), "OK"] = True