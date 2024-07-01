
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStickerRemove from "../../src/components/MdiStickerRemove.vue";

test("MdiStickerRemove snapshot", () => {
  const wrapper = mount(MdiStickerRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
