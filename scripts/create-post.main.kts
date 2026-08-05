#!/usr/bin/env kotlin

@file:Suppress("KotlinPrintToLogpoint")

import java.time.LocalDate
import java.time.format.DateTimeFormatter
import kotlin.io.path.Path
import kotlin.io.path.copyTo
import kotlin.io.path.createDirectories
import kotlin.io.path.exists
import kotlin.io.path.writeText
import kotlin.system.exitProcess

object Config {

  val postsDir = Path("content", "posts")
  val defaultCover = Path("src", "assets", "about-cover.png")
  val slugPattern = Regex("^[a-z][a-z0-9-]*$")
}

data class PostMetadata(
  val title: String = "Placeholder",
  val description: String = "Placeholder",
  val author: String = "tozydev",
  val date: String = LocalDate.now().format(DateTimeFormatter.ISO_DATE),
  val tags: List<String> = listOf("placeholder"),
  val coverFileName: String = "cover.png",
) {

  fun toFrontMatter() = """
        ---
        title: $title
        description: $description
        author: $author
        publishedDate: $date
        tags:
        ${tags.joinToString(prefix = "  - ", separator = "\n")}
        coverImage: ./$coverFileName
        ---
    """.trimIndent()
}

fun validateSlug(slug: String): Boolean = Config.slugPattern.matches(slug)

fun createPost(slug: String) {
  val cleanSlug = slug.lowercase()

  if (!validateSlug(cleanSlug)) {
    System.err.println("Error: Invalid slug '$cleanSlug'. Must match pattern: ${Config.slugPattern.pattern}")
    exitProcess(1)
  }

  val postDir = Config.postsDir.resolve(cleanSlug)
  if (postDir.exists()) {
    System.err.println("Error: Post directory already exists at $postDir")
    exitProcess(1)
  }

  if (!Config.defaultCover.exists()) {
    System.err.println("Warning: Default cover image not found at ${Config.defaultCover}")
  }

  try {
    postDir.createDirectories()

    val contentViFile = postDir.resolve("index.vi.md")
    contentViFile.writeText(PostMetadata().toFrontMatter())

    if (Config.defaultCover.exists()) {
      Config.defaultCover.copyTo(postDir.resolve("cover.png"))
    }

    println("Successfully created post at: $postDir")
  } catch (e: Exception) {
    System.err.println("Failed to create post: ${e.message}")
    exitProcess(1)
  }
}

fun main(args: Array<String>) {
  if (args.size != 1) {
    println("Usage: create-post.kts <slug>")
    exitProcess(1)
  }

  createPost(args[0])
}

main(args)
