
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMushroomOutline from "../../src/components/MdiMushroomOutline.vue";

test("MdiMushroomOutline snapshot", () => {
  const wrapper = mount(MdiMushroomOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
