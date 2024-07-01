
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStickerCircleOutline from "../../src/components/MdiStickerCircleOutline.vue";

test("MdiStickerCircleOutline snapshot", () => {
  const wrapper = mount(MdiStickerCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
