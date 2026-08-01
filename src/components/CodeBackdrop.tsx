const codeRows = [
    ['01', '/**'],
    ['02', ' * @author Despical'],
    ['03', ' * <p>'],
    ['04', ' * Created at 30.07.2026'],
    ['05', ' */'],
    ['06', '@RestController'],
    ['07', '@RequestMapping("/api")'],
    ['08', 'public final class LinkController {'],
    ['09', ''],
    ['10', '  private final LinkService linkService;'],
    ['11', ''],
    ['12', '  public LinkController(LinkService linkService) {'],
    ['13', '    this.linkService = linkService;'],
    ['14', '  }'],
    ['15', ''],
    ['16', '  @GetMapping("/status")'],
    ['17', '  public ResponseEntity<String> status() {'],
    ['18', '    return ResponseEntity.ok("OK");'],
    ['19', '  }'],
    ['20', ''],
    ['21', '  @GetMapping("/links/{profile}")'],
    ['22', '  public ResponseEntity<List<Link>> getLinks('],
    ['23', '      @PathVariable String profile) {'],
    ['24', '    return ResponseEntity.ok(linkService.findByProfile(profile));'],
    ['25', '  }'],
    ['26', ''],
    ['27', '  @ExceptionHandler(ProfileNotFoundException.class)'],
    ['28', '  public ResponseEntity<Void> handleNotFound() {'],
    ['29', '    return ResponseEntity.notFound().build();'],
    ['30', '  }'],
    ['31', '}'],
]

function CodeStream() {
    return (
        <div className="code-stream">
            {[...codeRows, ...codeRows].map(([number, code], index) => (
                <div className="code-line" key={`${number}-${index}`}>
                    <span>{number}</span>
                    <code>{code || ' '}</code>
                </div>
            ))}
        </div>
    )
}

export function CodeBackdrop() {
    return (
        <div className="background-scene" aria-hidden="true">
            <div className="code-canvas">
                <CodeStream/>
            </div>
            <div className="background-tint"/>
        </div>
    )
}
