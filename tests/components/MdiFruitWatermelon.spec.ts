
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFruitWatermelon from "../../src/components/MdiFruitWatermelon.vue";

test("MdiFruitWatermelon snapshot", () => {
  const wrapper = mount(MdiFruitWatermelon, {});
  expect(wrapper.html()).toMatchSnapshot();
});
