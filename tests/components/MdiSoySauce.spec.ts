
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSoySauce from "../../src/components/MdiSoySauce.vue";

test("MdiSoySauce snapshot", () => {
  const wrapper = mount(MdiSoySauce, {});
  expect(wrapper.html()).toMatchSnapshot();
});
