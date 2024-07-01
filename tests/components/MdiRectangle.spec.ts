
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRectangle from "../../src/components/MdiRectangle.vue";

test("MdiRectangle snapshot", () => {
  const wrapper = mount(MdiRectangle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
