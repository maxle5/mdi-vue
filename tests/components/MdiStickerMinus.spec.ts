
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStickerMinus from "../../src/components/MdiStickerMinus.vue";

test("MdiStickerMinus snapshot", () => {
  const wrapper = mount(MdiStickerMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
