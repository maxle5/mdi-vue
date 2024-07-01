
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBusArticulatedFront from "../../src/components/MdiBusArticulatedFront.vue";

test("MdiBusArticulatedFront snapshot", () => {
  const wrapper = mount(MdiBusArticulatedFront, {});
  expect(wrapper.html()).toMatchSnapshot();
});
