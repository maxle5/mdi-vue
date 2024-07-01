
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaVCircle from "../../src/components/MdiAlphaVCircle.vue";

test("MdiAlphaVCircle snapshot", () => {
  const wrapper = mount(MdiAlphaVCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
