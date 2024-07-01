
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMagnifyClose from "../../src/components/MdiMagnifyClose.vue";

test("MdiMagnifyClose snapshot", () => {
  const wrapper = mount(MdiMagnifyClose, {});
  expect(wrapper.html()).toMatchSnapshot();
});
