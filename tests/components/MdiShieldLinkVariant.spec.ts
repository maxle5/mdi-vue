
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldLinkVariant from "../../src/components/MdiShieldLinkVariant.vue";

test("MdiShieldLinkVariant snapshot", () => {
  const wrapper = mount(MdiShieldLinkVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
