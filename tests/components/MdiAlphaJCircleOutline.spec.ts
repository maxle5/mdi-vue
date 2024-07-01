
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaJCircleOutline from "../../src/components/MdiAlphaJCircleOutline.vue";

test("MdiAlphaJCircleOutline snapshot", () => {
  const wrapper = mount(MdiAlphaJCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
