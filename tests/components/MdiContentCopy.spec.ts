
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiContentCopy from "../../src/components/MdiContentCopy.vue";

test("MdiContentCopy snapshot", () => {
  const wrapper = mount(MdiContentCopy, {});
  expect(wrapper.html()).toMatchSnapshot();
});
