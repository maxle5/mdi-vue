
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShield from "../../src/components/MdiShield.vue";

test("MdiShield snapshot", () => {
  const wrapper = mount(MdiShield, {});
  expect(wrapper.html()).toMatchSnapshot();
});
