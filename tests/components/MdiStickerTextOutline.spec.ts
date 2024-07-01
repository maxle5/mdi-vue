
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStickerTextOutline from "../../src/components/MdiStickerTextOutline.vue";

test("MdiStickerTextOutline snapshot", () => {
  const wrapper = mount(MdiStickerTextOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
