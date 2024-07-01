
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldCheck from "../../src/components/MdiShieldCheck.vue";

test("MdiShieldCheck snapshot", () => {
  const wrapper = mount(MdiShieldCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
