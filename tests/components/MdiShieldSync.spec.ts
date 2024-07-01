
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldSync from "../../src/components/MdiShieldSync.vue";

test("MdiShieldSync snapshot", () => {
  const wrapper = mount(MdiShieldSync, {});
  expect(wrapper.html()).toMatchSnapshot();
});
