
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMushroomOffOutline from "../../src/components/MdiMushroomOffOutline.vue";

test("MdiMushroomOffOutline snapshot", () => {
  const wrapper = mount(MdiMushroomOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
