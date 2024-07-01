
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBoomGateAlertOutline from "../../src/components/MdiBoomGateAlertOutline.vue";

test("MdiBoomGateAlertOutline snapshot", () => {
  const wrapper = mount(MdiBoomGateAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
