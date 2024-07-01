
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountMultiplePlusOutline from "../../src/components/MdiAccountMultiplePlusOutline.vue";

test("MdiAccountMultiplePlusOutline snapshot", () => {
  const wrapper = mount(MdiAccountMultiplePlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
