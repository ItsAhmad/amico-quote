import smartsheet
import os
from dotenv import load_dotenv

load_dotenv()

def get_tier_data(tier_name="Tier 1"):
    smartsheet_client = smartsheet.Smartsheet(os.getenv("api_token2"))
    SHEET_ID = 4331873408864132

    sheet = smartsheet_client.Sheets.get_sheet(SHEET_ID)
    columns = sheet.columns
    column_mapping = {column.title: column.id for column in columns}

    target_column_id = column_mapping.get(tier_name)
    if not target_column_id:
        return {"error": f"Column '{tier_name}' not found"}

    result = {}
    for row in sheet.rows:
        for cell in row.cells:
            if cell.column_id == target_column_id:
                value = getattr(cell, "value", "Empty")
                result[row.id] = value
    return result
