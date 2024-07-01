
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCompassOffOutline from "../../src/components/MdiCompassOffOutline.vue";

test("MdiCompassOffOutline snapshot", () => {
  const wrapper = mount(MdiCompassOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
