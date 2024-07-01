
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStickerPlus from "../../src/components/MdiStickerPlus.vue";

test("MdiStickerPlus snapshot", () => {
  const wrapper = mount(MdiStickerPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
