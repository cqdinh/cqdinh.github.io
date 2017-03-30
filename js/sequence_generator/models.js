var models = {};
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
models["character"] = {
  lstms: [
    {
      weights: character_W_0,
      biases: character_b_0;
    },
    {
      weights: character_W_1,
      biases: character_b_1
    }
  ],
  softmax: {
    weights: character_softmax_W,
      biases: character_softmax_b
  },
  embeddings: character_embeddings,
  encoder: character_encoder,
  decoder: character_decoder,
  width: 128,
  depth: 2
}
