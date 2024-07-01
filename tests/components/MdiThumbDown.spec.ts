
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiThumbDown from "../../src/components/MdiThumbDown.vue";

test("MdiThumbDown snapshot", () => {
  const wrapper = mount(MdiThumbDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
