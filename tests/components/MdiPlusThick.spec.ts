
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlusThick from "../../src/components/MdiPlusThick.vue";

test("MdiPlusThick snapshot", () => {
  const wrapper = mount(MdiPlusThick, {});
  expect(wrapper.html()).toMatchSnapshot();
});
