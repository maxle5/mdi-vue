
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFruitPineapple from "../../src/components/MdiFruitPineapple.vue";

test("MdiFruitPineapple snapshot", () => {
  const wrapper = mount(MdiFruitPineapple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
