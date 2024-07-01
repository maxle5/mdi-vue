
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBusArticulatedEnd from "../../src/components/MdiBusArticulatedEnd.vue";

test("MdiBusArticulatedEnd snapshot", () => {
  const wrapper = mount(MdiBusArticulatedEnd, {});
  expect(wrapper.html()).toMatchSnapshot();
});
