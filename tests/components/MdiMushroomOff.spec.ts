
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMushroomOff from "../../src/components/MdiMushroomOff.vue";

test("MdiMushroomOff snapshot", () => {
  const wrapper = mount(MdiMushroomOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
