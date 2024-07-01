
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStickerAlert from "../../src/components/MdiStickerAlert.vue";

test("MdiStickerAlert snapshot", () => {
  const wrapper = mount(MdiStickerAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
