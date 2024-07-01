
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiScanner from "../../src/components/MdiScanner.vue";

test("MdiScanner snapshot", () => {
  const wrapper = mount(MdiScanner, {});
  expect(wrapper.html()).toMatchSnapshot();
});
