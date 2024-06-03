import json
import re
import os
from fileStreams import getFileJsonStream

# Define your keyword lists
chatgpt_keywords = [
    r"\bchatgpt\b", r"\bgpt\b", r"\bgpt-3\b", r"\bgpt-4\b", r"\bopenai\b", r"\baigc\b", r"\bllm\b",
    r"\blarge language model\b", r"\bmidjourney\b", r"\bai\b", r"\bartificial intelligence\b",
    r"\bai-generated content\b", r"\bartificial intelligence generated content\b", r"\bai chatbot\b",
    r"\bai assistant\b", r"\bconversational ai\b", r"\bnlp\b", r"\btransformer model\b", r"\bgenerative model\b",
    r"\blanguage model\b"
]

education_keywords = [
    r"\beducation\b", r"\blearn\b", r"\bteach\b", r"\binstruct\b", r"\bstudy\b", r"\bschool\b", r"\buniversity\b",
    r"\bexam\b", r"\bhomework\b", r"\bpaper\b", r"\bclass\b", r"\blecture\b", r"\bcurriculum\b", r"\bsyllabus\b",
    r"\bprofessor\b", r"\bteacher\b", r"\bstudent\b", r"\bacademic\b", r"\bscholar\b", r"\bhigher education\b",
    r"\bcollege\b", r"\bacademy\b", r"\bcourse\b", r"\blesson\b", r"\bassignment\b", r"\bdegree\b", r"\bgraduate\b",
    r"\bundergraduate\b", r"\bphd\b", r"\bthesis\b", r"\bdissertation\b", r"\bresearch\b", r"\beducational\b",
    r"\bclassroom\b", r"\binstruction\b", r"\bpedagogy\b", r"\bassessment\b", r"\bonline learning\b",
    r"\bdistance learning\b", r"\be-learning\b", r"\bvirtual learning\b", r"\bdissertation\b"
]

# Function to check if content is relevant based on keywords
def is_relevant(content, chatgpt_keywords, education_keywords):
    content = content.lower()
    contains_chatgpt = any(re.search(kw, content) for kw in chatgpt_keywords)
    contains_education = any(re.search(kw, content) for kw in education_keywords)
    return contains_chatgpt and contains_education

def processRow(row):
    # row is already a dict, no need to load it
    data = row

    if 'title' in data:  # It's a post
        title = data.get('title', '')
        selftext = data.get('selftext', '')

        if is_relevant(title, chatgpt_keywords, education_keywords) or is_relevant(selftext, chatgpt_keywords, education_keywords):
            print(f"Relevant post found: {data.get('id')}")
            process_post(data)
        else:
            print(f"Irrelevant post: {data.get('id')}")
    else:  # It's a comment
        body = data.get('body', '')

        if is_relevant(body, chatgpt_keywords, education_keywords):
            print(f"Relevant comment found: {data.get('id')}")
            process_comment(data)
        else:
            print(f"Irrelevant comment: {data.get('id')}")

def process_post(post):
    post_id = post.get('id')
    print(f"Processing post: {post_id}")
    with open(f'filtered_data/posts/{post_id}.json', 'w') as f:
        json.dump(post, f, indent=4)

def process_comment(comment):
    comment_id = comment.get('id')
    print(f"Processing comment: {comment_id}")
    with open(f'filtered_data/comments/{comment_id}.json', 'w') as f:
        json.dump(comment, f, indent=4)

# The fileOrFolderPath variable should be set to the path of your downloaded data
fileOrFolderPath = r'/Users/vesper/Desktop/LSE/Capstone Project/dissertation/data'

# Ensure the output directories exist
os.makedirs('filtered_data/posts', exist_ok=True)
os.makedirs('filtered_data/comments', exist_ok=True)

# Process all files in the specified folder
def process_files_in_folder(folder_path):
    for filename in os.listdir(folder_path):
        file_path = os.path.join(folder_path, filename)
        print(f"Processing file: {file_path}")
        json_stream = getFileJsonStream(file_path)
        if json_stream is not None:
            for _, row in json_stream:
                processRow(row)
        else:
            print(f"Could not open JSON stream for file: {filename}")

# Process the files
process_files_in_folder(fileOrFolderPath)
