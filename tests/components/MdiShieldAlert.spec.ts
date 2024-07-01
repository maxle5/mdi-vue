
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldAlert from "../../src/components/MdiShieldAlert.vue";

test("MdiShieldAlert snapshot", () => {
  const wrapper = mount(MdiShieldAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
