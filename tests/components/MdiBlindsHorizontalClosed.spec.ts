
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBlindsHorizontalClosed from "../../src/components/MdiBlindsHorizontalClosed.vue";

test("MdiBlindsHorizontalClosed snapshot", () => {
  const wrapper = mount(MdiBlindsHorizontalClosed, {});
  expect(wrapper.html()).toMatchSnapshot();
});
