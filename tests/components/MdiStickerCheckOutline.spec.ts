
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStickerCheckOutline from "../../src/components/MdiStickerCheckOutline.vue";

test("MdiStickerCheckOutline snapshot", () => {
  const wrapper = mount(MdiStickerCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
