
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStickerRemoveOutline from "../../src/components/MdiStickerRemoveOutline.vue";

test("MdiStickerRemoveOutline snapshot", () => {
  const wrapper = mount(MdiStickerRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
