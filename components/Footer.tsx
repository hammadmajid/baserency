import {DotIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Octokit} from "@octokit/core";

async function LatestCommit() {
    const octokit = new Octokit({auth: process.env.GITHUB_TOKEN});
    let response;

    try {
        response = await octokit.request('GET /repos/hammadmajid/baserency/commits', {
            owner: 'OWNER',
            repo: 'REPO',
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })
    } catch (err) {
        console.error(err)
        return (
            <span>error: couldn&#39;t get commit info</span>
        )
    }

    const sha = response.data[0].sha;

    return (
        <Button asChild variant="link" className="text-muted-foreground">
            <Link href={"https://github.com/hammadmajid/baserency/commit/" + sha}>
                {sha.substring(0, 7)}
            </Link>
        </Button>
    )

}

export function Footer() {
    return (
        <footer className="flex p-4 justify-center items-center gap-2 w-1/2 mx-auto">
            <Button asChild variant="link" className="text-muted-foreground">
                <Link href="https://github.com/hammadmajid/baserency/blob/main/LICENSE">
                    MIT License
                </Link>
            </Button>
            <DotIcon className="text-muted-foreground"/>
            <LatestCommit/>
        </footer>
    )
}