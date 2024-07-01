
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBusStop from "../../src/components/MdiBusStop.vue";

test("MdiBusStop snapshot", () => {
  const wrapper = mount(MdiBusStop, {});
  expect(wrapper.html()).toMatchSnapshot();
});
