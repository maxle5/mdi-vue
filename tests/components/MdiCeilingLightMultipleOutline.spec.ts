
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCeilingLightMultipleOutline from "../../src/components/MdiCeilingLightMultipleOutline.vue";

test("MdiCeilingLightMultipleOutline snapshot", () => {
  const wrapper = mount(MdiCeilingLightMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
