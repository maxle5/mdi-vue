
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldAccountVariant from "../../src/components/MdiShieldAccountVariant.vue";

test("MdiShieldAccountVariant snapshot", () => {
  const wrapper = mount(MdiShieldAccountVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
