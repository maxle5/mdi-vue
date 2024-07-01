
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaJCircle from "../../src/components/MdiAlphaJCircle.vue";

test("MdiAlphaJCircle snapshot", () => {
  const wrapper = mount(MdiAlphaJCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
