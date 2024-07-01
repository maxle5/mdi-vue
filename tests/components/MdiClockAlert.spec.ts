
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockAlert from "../../src/components/MdiClockAlert.vue";

test("MdiClockAlert snapshot", () => {
  const wrapper = mount(MdiClockAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
