
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBarcodeOff from "../../src/components/MdiBarcodeOff.vue";

test("MdiBarcodeOff snapshot", () => {
  const wrapper = mount(MdiBarcodeOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
