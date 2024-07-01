
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrafficLightOutline from "../../src/components/MdiTrafficLightOutline.vue";

test("MdiTrafficLightOutline snapshot", () => {
  const wrapper = mount(MdiTrafficLightOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
