
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMiddlewareOutline from "../../src/components/MdiMiddlewareOutline.vue";

test("MdiMiddlewareOutline snapshot", () => {
  const wrapper = mount(MdiMiddlewareOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
