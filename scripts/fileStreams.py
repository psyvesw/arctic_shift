import time
import traceback
from typing import Iterator
try:
	import orjson as json
except ImportError:
	import json
	print("Recommended to install 'orjson' for faster JSON parsing")

import zstandard

from zst_blocks_format.python_cli.ZstBlocksFile import ZstBlocksFile

def getZstFileJsonStream(path: str, chunk_size=1024*1024*10) -> Iterator[tuple[int, dict]]:
	dctx = zstandard.ZstdDecompressor(max_window_size=2147483648)
	currentString = ""
	def yieldLinesJson():
		nonlocal currentString
		lines = currentString.split("\n")
		currentString = lines[-1]
		for line in lines[:-1]:
			try:
				yield len(line), json.loads(line)
			except:
				print("Error parsing line: " + line)
				print("Current string: " + currentString)
				traceback.print_exc()
				continue
	with open(path, 'rb') as ifh:
		reader = dctx.stream_reader(ifh)
		while True:
			try:
				chunk = reader.read(chunk_size)
			except zstandard.ZstdError:
				print("Error reading file: " + path)
				print(traceback.format_exc())
				break
			if not chunk:
				break
			currentString += chunk.decode("utf-8", "replace")
			
			for line in yieldLinesJson():
				yield line
	for line in yieldLinesJson():
		yield line
	if len(currentString) > 0:
		try:
			yield len(currentString), json.loads(currentString)
		except:
			print("Error parsing line: " + currentString)
			print(traceback.format_exc())
			pass

def getZstBlocksFileJsonStream(path: str) -> Iterator[tuple[int, dict]]:
	with open(path, "rb") as f:
		for row in ZstBlocksFile.streamRows(f):
			try:
				yield len(row), json.loads(row.decode("utf-8", errors="replace"))
			except:
				print("Error parsing line: " + str(row))
				traceback.print_exc()
				continue

def getJsonFileJsonStream(path: str):
    print(f"Opening JSONL file: {path}")
    try:
        with open(path, "r", encoding="utf-8") as f:
            for line in f:
                try:
                    yield len(line), json.loads(line)
                except json.JSONDecodeError as e:
                    print(f"Error parsing line: {line}\nError: {e}")
    except FileNotFoundError:
        print(f"File not found: {path}")
    except Exception as e:
        print(f"Error opening file: {path}\nError: {e}")

def getFileJsonStream(path: str):
    if path.endswith(".jsonl"):
        return getJsonFileJsonStream(path)
    else:
        return None
