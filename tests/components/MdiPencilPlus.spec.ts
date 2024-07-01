
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPencilPlus from "../../src/components/MdiPencilPlus.vue";

test("MdiPencilPlus snapshot", () => {
  const wrapper = mount(MdiPencilPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
