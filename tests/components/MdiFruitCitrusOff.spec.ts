
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFruitCitrusOff from "../../src/components/MdiFruitCitrusOff.vue";

test("MdiFruitCitrusOff snapshot", () => {
  const wrapper = mount(MdiFruitCitrusOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
