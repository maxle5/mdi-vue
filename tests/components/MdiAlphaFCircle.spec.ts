
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaFCircle from "../../src/components/MdiAlphaFCircle.vue";

test("MdiAlphaFCircle snapshot", () => {
  const wrapper = mount(MdiAlphaFCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
