
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldAccountVariantOutline from "../../src/components/MdiShieldAccountVariantOutline.vue";

test("MdiShieldAccountVariantOutline snapshot", () => {
  const wrapper = mount(MdiShieldAccountVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
