
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCeilingLightOutline from "../../src/components/MdiCeilingLightOutline.vue";

test("MdiCeilingLightOutline snapshot", () => {
  const wrapper = mount(MdiCeilingLightOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
