
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessagePlus from "../../src/components/MdiMessagePlus.vue";

test("MdiMessagePlus snapshot", () => {
  const wrapper = mount(MdiMessagePlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
