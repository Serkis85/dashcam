#!/usr/bin/env bash
set -euo pipefail

# Assert that HUGO_VERSION has been set
if [ -z ${HUGO_VERSION:-} ]; then
  echo "HUGO_VERSION was not set. Set it to something like 0.111.3"  >&2
  exit 1
fi

# Assert that wget is installed
hash wget 2>/dev/null || { echo "'wget' is not installed but is required by this script." >&2; exit 1; }

# Save the current working directory as we may have to cd out of it
# and want to ensure we end in the same place.
WORKING_DIRECTORY=$(pwd)

# Get the directory in which this script lives
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Get the repo root directory
ROOT=$(cd "${DIR}" && pwd) # You may need to change this depending on where you put this script

# Get the the hugo site directory
HUGO_SITE_DIR=$(cd "${ROOT}" && pwd) # You may need to change this depending on where your hugo site lives in your repo

if [ "$(uname)" == "Darwin" ]; then
  echo Detected platform: Darwin.
  CACHES_ROOT="${HOME}/Library/Caches"
  HUGO_TAR_PLATFORM_VARIANT="darwin-universal"
elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
  echo Detected platform: Linux.
  CACHES_ROOT="${XDG_CACHE_HOME}"
  HUGO_TAR_PLATFORM_VARIANT="Linux-64bit"
else
  echo Unsupported platform: $(uname) >&2
  exit 1
fi

# Assert that required variables are now set
if [ -z ${CACHES_ROOT:-} ]; then
  echo CACHES_ROOT was not set >&2
  exit 1
fi

if [ -z ${HUGO_TAR_PLATFORM_VARIANT:-} ]; then
  echo HUGO_TAR_PLATFORM_VARIANT was not set >&2
  exit 1
fi

CACHE="${CACHES_ROOT}/render-build"
mkdir -p ${CACHE}

HUGO_BIN="${CACHE}/hugo"
if [[ ! -f "${HUGO_BIN}" ]]; then
  echo "Hugo not found in cache."
  TEMP_DIR=$(mktemp -d 2>/dev/null || mktemp -d -t 'mytmpdir')

  TAR_NAME="hugo_extended_${HUGO_VERSION}_${HUGO_TAR_PLATFORM_VARIANT}.tar.gz"
  DOWNLOAD_URL="https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/${TAR_NAME}"

  echo "Downloading hugo from ${DOWNLOAD_URL}..."
  wget -P "${TEMP_DIR}" "${DOWNLOAD_URL}"

  cd "${TEMP_DIR}"

  echo "Extracting ${TAR_NAME}..."
  tar -xzvf ${TAR_NAME}

  echo "Moving Hugo..."
  mv hugo "${HUGO_BIN}"

  echo "Hugo binary is: ${HUGO_BIN}"

  # Return to the old directory
  cd "${WORKING_DIRECTORY}"

  rm -rf "${TEMP_DIR}"
else
  echo "Using existing Hugo binary from build cache."
fi

"${HUGO_BIN}" version

# Render sets IS_PULL_REQUEST to true for PR previews.
if [ "${IS_PULL_REQUEST:-}" = "true" ]; then
  cd "${HUGO_SITE_DIR}" && "${HUGO_BIN}" --gc -e preview
else
  cd "${HUGO_SITE_DIR}" && "${HUGO_BIN}" --gc --minify
fi

# Return to the old directory
cd "${WORKING_DIRECTORY}"
