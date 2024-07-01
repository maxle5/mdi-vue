
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBoomGateArrowDownOutline from "../../src/components/MdiBoomGateArrowDownOutline.vue";

test("MdiBoomGateArrowDownOutline snapshot", () => {
  const wrapper = mount(MdiBoomGateArrowDownOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
