
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlashTriangle from "../../src/components/MdiFlashTriangle.vue";

test("MdiFlashTriangle snapshot", () => {
  const wrapper = mount(MdiFlashTriangle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
