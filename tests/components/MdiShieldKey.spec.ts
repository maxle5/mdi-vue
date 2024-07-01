
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldKey from "../../src/components/MdiShieldKey.vue";

test("MdiShieldKey snapshot", () => {
  const wrapper = mount(MdiShieldKey, {});
  expect(wrapper.html()).toMatchSnapshot();
});
