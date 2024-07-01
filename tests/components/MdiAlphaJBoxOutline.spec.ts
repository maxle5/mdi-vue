
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaJBoxOutline from "../../src/components/MdiAlphaJBoxOutline.vue";

test("MdiAlphaJBoxOutline snapshot", () => {
  const wrapper = mount(MdiAlphaJBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
