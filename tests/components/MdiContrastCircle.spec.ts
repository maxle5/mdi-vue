
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiContrastCircle from "../../src/components/MdiContrastCircle.vue";

test("MdiContrastCircle snapshot", () => {
  const wrapper = mount(MdiContrastCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
