
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFountainPen from "../../src/components/MdiFountainPen.vue";

test("MdiFountainPen snapshot", () => {
  const wrapper = mount(MdiFountainPen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
