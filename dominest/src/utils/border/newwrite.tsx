<Containerright>
  {typeof idname === "object" && idname.length > 3 && type === "IMAGE" && (
    <Link href={`/${idname[2]}/${idname[0]}`}>
      <Button>글 작성</Button>
    </Link>
  )}
  {typeof idname === "object" &&
    idname.length > 3 &&
    type === "UNDELIVERED_PARCEL_REGISTER" && (
      <Button onClick={onUpload}>글 작성</Button>
    )}
</Containerright>;
