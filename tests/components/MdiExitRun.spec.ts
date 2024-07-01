
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiExitRun from "../../src/components/MdiExitRun.vue";

test("MdiExitRun snapshot", () => {
  const wrapper = mount(MdiExitRun, {});
  expect(wrapper.html()).toMatchSnapshot();
});
