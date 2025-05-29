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
                                    style={{
                                        color: `rgb(249, 42, 173)`,
                                        textShadow: `rgb(16, 12, 15) 0px 0px 2px, rgba(220, 7, 142, 0.2) 0px 0px 5px, rgba(255, 255, 255, 0.2) 0px 0px 10px`
                                    }}
                                />
                            }

                            if (highLightTextWithBlue(token.content)) {
                                return <span key={key} {...getTokenProps({ token })}
                                    style={{
                                        color: `rgb(253, 253, 253)`,
                                        textShadow: `rgb(0, 23, 22) 0px 0px 2px,rgba(3, 237, 249, 0.46) 0px 0px 3px,rgba(3, 237, 249, 0.46) 0px 0px 5px,rgba(3, 237, 249, 0.46) 0px 0px 8px`
                                    }}
                                />
                            } else if (["export", "const", "new", "Pool"].includes(token.content)) {
                                return <span key={key} {...getTokenProps({ token })}
                                    style={{
                                        color: `rgb(244, 238, 228)`,
                                        textShadow: `rgb(57, 58, 51) 0px 0px 2px, rgba(243, 159, 5, 0.46) 0px 0px 8px, rgba(243, 159, 5, 0.46) 0px 0px 2px`
                                    }}
                                />
                            } else {
                                return <span key={key} {...getTokenProps({ token })}
                                    style={{
                                        color: `rgb(114, 241, 184)`,
                                        textShadow: `rgb(16, 12, 15) 0px 0px 2px, rgba(37, 124, 85, 0.46) 0px 0px 10px, rgba(33, 39, 36, 0.46) 0px 0px 35px`
                                    }}
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