
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEvPlugTesla from "../../src/components/MdiEvPlugTesla.vue";

test("MdiEvPlugTesla snapshot", () => {
  const wrapper = mount(MdiEvPlugTesla, {});
  expect(wrapper.html()).toMatchSnapshot();
});
