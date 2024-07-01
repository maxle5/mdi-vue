
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStickerCheck from "../../src/components/MdiStickerCheck.vue";

test("MdiStickerCheck snapshot", () => {
  const wrapper = mount(MdiStickerCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
