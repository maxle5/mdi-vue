
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBlindsVerticalClosed from "../../src/components/MdiBlindsVerticalClosed.vue";

test("MdiBlindsVerticalClosed snapshot", () => {
  const wrapper = mount(MdiBlindsVerticalClosed, {});
  expect(wrapper.html()).toMatchSnapshot();
});
