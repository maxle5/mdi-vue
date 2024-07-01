
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandWashOutline from "../../src/components/MdiHandWashOutline.vue";

test("MdiHandWashOutline snapshot", () => {
  const wrapper = mount(MdiHandWashOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
