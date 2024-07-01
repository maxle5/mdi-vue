
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinter3d from "../../src/components/MdiPrinter3d.vue";

test("MdiPrinter3d snapshot", () => {
  const wrapper = mount(MdiPrinter3d, {});
  expect(wrapper.html()).toMatchSnapshot();
});
