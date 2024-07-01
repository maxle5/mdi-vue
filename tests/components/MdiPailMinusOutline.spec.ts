
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPailMinusOutline from "../../src/components/MdiPailMinusOutline.vue";

test("MdiPailMinusOutline snapshot", () => {
  const wrapper = mount(MdiPailMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
