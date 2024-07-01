
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric1Circle from "../../src/components/MdiNumeric1Circle.vue";

test("MdiNumeric1Circle snapshot", () => {
  const wrapper = mount(MdiNumeric1Circle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
