
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStickerMinusOutline from "../../src/components/MdiStickerMinusOutline.vue";

test("MdiStickerMinusOutline snapshot", () => {
  const wrapper = mount(MdiStickerMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
