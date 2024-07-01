
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBusMultiple from "../../src/components/MdiBusMultiple.vue";

test("MdiBusMultiple snapshot", () => {
  const wrapper = mount(MdiBusMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
