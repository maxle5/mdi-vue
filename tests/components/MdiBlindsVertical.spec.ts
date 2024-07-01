
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBlindsVertical from "../../src/components/MdiBlindsVertical.vue";

test("MdiBlindsVertical snapshot", () => {
  const wrapper = mount(MdiBlindsVertical, {});
  expect(wrapper.html()).toMatchSnapshot();
});
