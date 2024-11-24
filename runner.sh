
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

if ! command_exists node; then
    echo "Error: Node.js is not installed. Please install it and try again."
    exit 1
fi

# Check if npm is installed
if ! command_exists npm; then
    echo "Error: npm is not installed. Please install it and try again."
    exit 1
fi

if ! command_exists tsc; then
    echo "TypeScript is not installed globally. Installing it now..."
    npm install -g typescript
fi


if [ ! -d "node_modules" ]; then
    echo "Installing project dependencies..."
    npm install
fi

# Compile TypeScript files
echo "Run code"
npm start $1 $2


