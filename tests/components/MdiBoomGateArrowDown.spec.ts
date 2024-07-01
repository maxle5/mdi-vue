
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBoomGateArrowDown from "../../src/components/MdiBoomGateArrowDown.vue";

test("MdiBoomGateArrowDown snapshot", () => {
  const wrapper = mount(MdiBoomGateArrowDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
