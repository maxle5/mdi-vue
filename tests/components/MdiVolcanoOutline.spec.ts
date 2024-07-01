
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVolcanoOutline from "../../src/components/MdiVolcanoOutline.vue";

test("MdiVolcanoOutline snapshot", () => {
  const wrapper = mount(MdiVolcanoOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
