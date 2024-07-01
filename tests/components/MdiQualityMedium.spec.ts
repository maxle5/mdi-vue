
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiQualityMedium from "../../src/components/MdiQualityMedium.vue";

test("MdiQualityMedium snapshot", () => {
  const wrapper = mount(MdiQualityMedium, {});
  expect(wrapper.html()).toMatchSnapshot();
});
