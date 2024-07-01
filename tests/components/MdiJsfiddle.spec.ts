
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiJsfiddle from "../../src/components/MdiJsfiddle.vue";

test("MdiJsfiddle snapshot", () => {
  const wrapper = mount(MdiJsfiddle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
