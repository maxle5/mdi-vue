
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRun from "../../src/components/MdiRun.vue";

test("MdiRun snapshot", () => {
  const wrapper = mount(MdiRun, {});
  expect(wrapper.html()).toMatchSnapshot();
});
