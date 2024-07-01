
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFruitPear from "../../src/components/MdiFruitPear.vue";

test("MdiFruitPear snapshot", () => {
  const wrapper = mount(MdiFruitPear, {});
  expect(wrapper.html()).toMatchSnapshot();
});
