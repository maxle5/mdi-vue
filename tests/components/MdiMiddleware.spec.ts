
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMiddleware from "../../src/components/MdiMiddleware.vue";

test("MdiMiddleware snapshot", () => {
  const wrapper = mount(MdiMiddleware, {});
  expect(wrapper.html()).toMatchSnapshot();
});
