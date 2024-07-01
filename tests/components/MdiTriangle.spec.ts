
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTriangle from "../../src/components/MdiTriangle.vue";

test("MdiTriangle snapshot", () => {
  const wrapper = mount(MdiTriangle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
