
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardOff from "../../src/components/MdiCardOff.vue";

test("MdiCardOff snapshot", () => {
  const wrapper = mount(MdiCardOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
