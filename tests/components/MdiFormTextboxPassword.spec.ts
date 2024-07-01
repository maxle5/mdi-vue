
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormTextboxPassword from "../../src/components/MdiFormTextboxPassword.vue";

test("MdiFormTextboxPassword snapshot", () => {
  const wrapper = mount(MdiFormTextboxPassword, {});
  expect(wrapper.html()).toMatchSnapshot();
});
