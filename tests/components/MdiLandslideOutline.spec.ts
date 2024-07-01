
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLandslideOutline from "../../src/components/MdiLandslideOutline.vue";

test("MdiLandslideOutline snapshot", () => {
  const wrapper = mount(MdiLandslideOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
