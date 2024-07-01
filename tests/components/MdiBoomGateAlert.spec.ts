
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBoomGateAlert from "../../src/components/MdiBoomGateAlert.vue";

test("MdiBoomGateAlert snapshot", () => {
  const wrapper = mount(MdiBoomGateAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
