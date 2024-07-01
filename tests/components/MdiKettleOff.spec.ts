
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKettleOff from "../../src/components/MdiKettleOff.vue";

test("MdiKettleOff snapshot", () => {
  const wrapper = mount(MdiKettleOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
