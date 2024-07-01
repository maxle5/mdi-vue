
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSinaWeibo from "../../src/components/MdiSinaWeibo.vue";

test("MdiSinaWeibo snapshot", () => {
  const wrapper = mount(MdiSinaWeibo, {});
  expect(wrapper.html()).toMatchSnapshot();
});
