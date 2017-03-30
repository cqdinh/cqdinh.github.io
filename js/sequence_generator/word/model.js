models["word"] = {
  lstms: [
    {
      weights: word_W_0,
      biases: word_b_0;
    },
    {
      weights: word_W_1,
      biases: word_b_1
    }
  ],
  softmax: {
    weights: word_softmax_W,
      biases: word_softmax_b
  },
  embeddings: word_embeddings,
  encoder: word_encoder,
  decoder: word_decoder,
  width: 128,
  depth: 2
}
