
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStickerPlusOutline from "../../src/components/MdiStickerPlusOutline.vue";

test("MdiStickerPlusOutline snapshot", () => {
  const wrapper = mount(MdiStickerPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
