
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStickerText from "../../src/components/MdiStickerText.vue";

test("MdiStickerText snapshot", () => {
  const wrapper = mount(MdiStickerText, {});
  expect(wrapper.html()).toMatchSnapshot();
});
