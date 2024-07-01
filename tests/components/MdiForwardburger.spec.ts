
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiForwardburger from "../../src/components/MdiForwardburger.vue";

test("MdiForwardburger snapshot", () => {
  const wrapper = mount(MdiForwardburger, {});
  expect(wrapper.html()).toMatchSnapshot();
});
