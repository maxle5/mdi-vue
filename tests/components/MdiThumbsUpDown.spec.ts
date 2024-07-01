
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiThumbsUpDown from "../../src/components/MdiThumbsUpDown.vue";

test("MdiThumbsUpDown snapshot", () => {
  const wrapper = mount(MdiThumbsUpDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
