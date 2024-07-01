
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiScentOff from "../../src/components/MdiScentOff.vue";

test("MdiScentOff snapshot", () => {
  const wrapper = mount(MdiScentOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
