
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAngleRight from "../../src/components/MdiAngleRight.vue";

test("MdiAngleRight snapshot", () => {
  const wrapper = mount(MdiAngleRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
