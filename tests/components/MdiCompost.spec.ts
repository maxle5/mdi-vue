
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCompost from "../../src/components/MdiCompost.vue";

test("MdiCompost snapshot", () => {
  const wrapper = mount(MdiCompost, {});
  expect(wrapper.html()).toMatchSnapshot();
});
