
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaZCircle from "../../src/components/MdiAlphaZCircle.vue";

test("MdiAlphaZCircle snapshot", () => {
  const wrapper = mount(MdiAlphaZCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
