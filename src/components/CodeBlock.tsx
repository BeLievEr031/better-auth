import { Highlight, } from "prism-react-renderer"

const codeBlock = `export const auth = betterAuth({
  database: new Pool({
    connectionString: DATABASE_URL,
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [
    organization(),
    twoFactor(),
  ]
})`
function highLightTextWithBlue(text: string) {
    const arr = ["betterAuth", "true", "organization", "twoFactor"]
    return arr.includes(text)
}
export const CodeBlock = () => (
    <Highlight
        code={codeBlock}
        language="tsx"
    >
        {({ style, tokens, getLineProps, getTokenProps }) => (
            <pre style={{ ...style, backgroundColor: "transparent" }}>
                {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line })}>
                        <span className="pr-4">
                            {
                                i < 9 ? `0${i + 1}` : `${i + 1}`
                            }
                        </span>
                        {line.map((token, key) => {

                            if (token.content === "DATABASE_URL") {
                                return <span key={key} {...getTokenProps({ token })}
                                    className="dark:text-[rgb(249_42_173)] dark:text-shadow-emeraldGlow text-yellow-700s"
                                    style={{
                                        // color: "white"
                                    }}
                                />
                            }

                            if (highLightTextWithBlue(token.content)) {
                                return <span key={key} {...getTokenProps({ token })}
                                    className="dark:text-shadow-aquaGlow dark:text-[rgb(253_253_253)] text-blue-600"
                                    style={{
                                        // color: "white"
                                    }}

                                />
                            } else if (["export", "const", "new", "Pool"].includes(token.content)) {
                                return <span key={key} {...getTokenProps({ token })}
                                    className="dark:text-[rgb(253_253_253)] dark:text-shadow-gold text-fuchsia-600"
                                    style={{
                                        // color: "white"
                                    }}
                                />
                            } else {
                                return <span key={key} {...getTokenProps({ token })}
                                    className="dark:text-shadow-emeraldGlow dark:text-[rgb(114_241_184)] text-orange-600"
                                />
                            }
                        }
                        )}
                    </div>
                ))}
            </pre>
        )}
    </Highlight>
)