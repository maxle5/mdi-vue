
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRugby from "../../src/components/MdiRugby.vue";

test("MdiRugby snapshot", () => {
  const wrapper = mount(MdiRugby, {});
  expect(wrapper.html()).toMatchSnapshot();
});
