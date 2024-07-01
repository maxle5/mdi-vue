
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileDelimitedOutline from "../../src/components/MdiFileDelimitedOutline.vue";

test("MdiFileDelimitedOutline snapshot", () => {
  const wrapper = mount(MdiFileDelimitedOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
