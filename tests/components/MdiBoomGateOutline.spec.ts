
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBoomGateOutline from "../../src/components/MdiBoomGateOutline.vue";

test("MdiBoomGateOutline snapshot", () => {
  const wrapper = mount(MdiBoomGateOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
