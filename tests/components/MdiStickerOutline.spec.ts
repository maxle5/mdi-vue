
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStickerOutline from "../../src/components/MdiStickerOutline.vue";

test("MdiStickerOutline snapshot", () => {
  const wrapper = mount(MdiStickerOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
