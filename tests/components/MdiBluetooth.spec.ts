
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBluetooth from "../../src/components/MdiBluetooth.vue";

test("MdiBluetooth snapshot", () => {
  const wrapper = mount(MdiBluetooth, {});
  expect(wrapper.html()).toMatchSnapshot();
});
