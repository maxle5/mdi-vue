
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRug from "../../src/components/MdiRug.vue";

test("MdiRug snapshot", () => {
  const wrapper = mount(MdiRug, {});
  expect(wrapper.html()).toMatchSnapshot();
});
