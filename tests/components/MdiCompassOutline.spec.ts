
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCompassOutline from "../../src/components/MdiCompassOutline.vue";

test("MdiCompassOutline snapshot", () => {
  const wrapper = mount(MdiCompassOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
