
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldLinkVariantOutline from "../../src/components/MdiShieldLinkVariantOutline.vue";

test("MdiShieldLinkVariantOutline snapshot", () => {
  const wrapper = mount(MdiShieldLinkVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
