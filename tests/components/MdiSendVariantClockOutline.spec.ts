
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSendVariantClockOutline from "../../src/components/MdiSendVariantClockOutline.vue";

test("MdiSendVariantClockOutline snapshot", () => {
  const wrapper = mount(MdiSendVariantClockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
