
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaWBoxOutline from "../../src/components/MdiAlphaWBoxOutline.vue";

test("MdiAlphaWBoxOutline snapshot", () => {
  const wrapper = mount(MdiAlphaWBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
