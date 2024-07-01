
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBoomGateUpOutline from "../../src/components/MdiBoomGateUpOutline.vue";

test("MdiBoomGateUpOutline snapshot", () => {
  const wrapper = mount(MdiBoomGateUpOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
