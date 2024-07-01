
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFruitCherriesOff from "../../src/components/MdiFruitCherriesOff.vue";

test("MdiFruitCherriesOff snapshot", () => {
  const wrapper = mount(MdiFruitCherriesOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
