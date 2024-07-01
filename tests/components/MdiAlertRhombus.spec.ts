
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlertRhombus from "../../src/components/MdiAlertRhombus.vue";

test("MdiAlertRhombus snapshot", () => {
  const wrapper = mount(MdiAlertRhombus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
