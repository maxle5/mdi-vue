
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStackOverflow from "../../src/components/MdiStackOverflow.vue";

test("MdiStackOverflow snapshot", () => {
  const wrapper = mount(MdiStackOverflow, {});
  expect(wrapper.html()).toMatchSnapshot();
});
