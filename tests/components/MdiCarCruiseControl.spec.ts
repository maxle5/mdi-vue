
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarCruiseControl from "../../src/components/MdiCarCruiseControl.vue";

test("MdiCarCruiseControl snapshot", () => {
  const wrapper = mount(MdiCarCruiseControl, {});
  expect(wrapper.html()).toMatchSnapshot();
});
