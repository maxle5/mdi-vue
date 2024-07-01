
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarEsp from "../../src/components/MdiCarEsp.vue";

test("MdiCarEsp snapshot", () => {
  const wrapper = mount(MdiCarEsp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
