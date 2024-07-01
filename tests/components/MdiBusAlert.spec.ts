
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBusAlert from "../../src/components/MdiBusAlert.vue";

test("MdiBusAlert snapshot", () => {
  const wrapper = mount(MdiBusAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
