
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinter from "../../src/components/MdiPrinter.vue";

test("MdiPrinter snapshot", () => {
  const wrapper = mount(MdiPrinter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
