
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLandRowsVertical from "../../src/components/MdiLandRowsVertical.vue";

test("MdiLandRowsVertical snapshot", () => {
  const wrapper = mount(MdiLandRowsVertical, {});
  expect(wrapper.html()).toMatchSnapshot();
});
