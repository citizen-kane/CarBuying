"""
Script to flatten obj_feature_list
Use Python3
"""


"""
Package required: pandas, json
"""
import pandas as pd
import json

"""
First read the exhaustive list of all the features in specification. 
Use the information to structure the data frame @fea_df: columns, column 
numbers
@fea_df will contain all the information after flattenning
"""
with open('specification.json', 'r') as f:
    spec_full = json.load(f)

fea_df = pd.DataFrame(index=range(1, len(features.T)+1),columns=fea_key_list, dtype='str')


"""
Read all the data from 'car_data.json', populate @fea_df
"""
features = pd.read_json('car_data.json').T
fea_key_list = []
for key in spec_full:
    if key != 'Suspension':
        for item in spec_full[key]:
            fea_key_list.append(key + ' ' + item)

for i in range(len(features.T)):
    for key in features[i]['car data']['specification']:
        if key != 'Suspension':
            print(key)
            for item in features[i]['car data']['specification'][key]:
                for sec_key in item.keys():
                    fea_df[key + ' ' + sec_key][i+1] = item[sec_key]
            print('\n')



"""
Finally, write @fea_df to csv
"""
fea_df.to_csv('obj_feature_list.csv')