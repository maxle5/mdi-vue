
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaRCircle from "../../src/components/MdiAlphaRCircle.vue";

test("MdiAlphaRCircle snapshot", () => {
  const wrapper = mount(MdiAlphaRCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
