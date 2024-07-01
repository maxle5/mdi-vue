
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlertMinus from "../../src/components/MdiAlertMinus.vue";

test("MdiAlertMinus snapshot", () => {
  const wrapper = mount(MdiAlertMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
