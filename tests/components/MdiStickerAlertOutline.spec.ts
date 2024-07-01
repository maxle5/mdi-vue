
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStickerAlertOutline from "../../src/components/MdiStickerAlertOutline.vue";

test("MdiStickerAlertOutline snapshot", () => {
  const wrapper = mount(MdiStickerAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
