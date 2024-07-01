
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeLightbulb from "../../src/components/MdiHomeLightbulb.vue";

test("MdiHomeLightbulb snapshot", () => {
  const wrapper = mount(MdiHomeLightbulb, {});
  expect(wrapper.html()).toMatchSnapshot();
});
