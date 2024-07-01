
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPiston from "../../src/components/MdiPiston.vue";

test("MdiPiston snapshot", () => {
  const wrapper = mount(MdiPiston, {});
  expect(wrapper.html()).toMatchSnapshot();
});
