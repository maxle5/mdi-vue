
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageAreaClose from "../../src/components/MdiImageAreaClose.vue";

test("MdiImageAreaClose snapshot", () => {
  const wrapper = mount(MdiImageAreaClose, {});
  expect(wrapper.html()).toMatchSnapshot();
});
