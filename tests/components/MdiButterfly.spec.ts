
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiButterfly from "../../src/components/MdiButterfly.vue";

test("MdiButterfly snapshot", () => {
  const wrapper = mount(MdiButterfly, {});
  expect(wrapper.html()).toMatchSnapshot();
});
