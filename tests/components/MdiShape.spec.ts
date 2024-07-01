
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShape from "../../src/components/MdiShape.vue";

test("MdiShape snapshot", () => {
  const wrapper = mount(MdiShape, {});
  expect(wrapper.html()).toMatchSnapshot();
});
