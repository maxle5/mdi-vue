
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSourceFork from "../../src/components/MdiSourceFork.vue";

test("MdiSourceFork snapshot", () => {
  const wrapper = mount(MdiSourceFork, {});
  expect(wrapper.html()).toMatchSnapshot();
});
