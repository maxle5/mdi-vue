
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSquareMediumOutline from "../../src/components/MdiSquareMediumOutline.vue";

test("MdiSquareMediumOutline snapshot", () => {
  const wrapper = mount(MdiSquareMediumOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
