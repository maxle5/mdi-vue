
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGateAlert from "../../src/components/MdiGateAlert.vue";

test("MdiGateAlert snapshot", () => {
  const wrapper = mount(MdiGateAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
