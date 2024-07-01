
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSendVariantOutline from "../../src/components/MdiSendVariantOutline.vue";

test("MdiSendVariantOutline snapshot", () => {
  const wrapper = mount(MdiSendVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
