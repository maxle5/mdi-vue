
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLabelOutline from "../../src/components/MdiLabelOutline.vue";

test("MdiLabelOutline snapshot", () => {
  const wrapper = mount(MdiLabelOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
