
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaICircle from "../../src/components/MdiAlphaICircle.vue";

test("MdiAlphaICircle snapshot", () => {
  const wrapper = mount(MdiAlphaICircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
