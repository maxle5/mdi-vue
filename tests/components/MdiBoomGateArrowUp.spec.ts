
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBoomGateArrowUp from "../../src/components/MdiBoomGateArrowUp.vue";

test("MdiBoomGateArrowUp snapshot", () => {
  const wrapper = mount(MdiBoomGateArrowUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
