
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBoomGateArrowUpOutline from "../../src/components/MdiBoomGateArrowUpOutline.vue";

test("MdiBoomGateArrowUpOutline snapshot", () => {
  const wrapper = mount(MdiBoomGateArrowUpOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
