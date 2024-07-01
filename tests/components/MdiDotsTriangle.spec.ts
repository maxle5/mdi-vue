
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDotsTriangle from "../../src/components/MdiDotsTriangle.vue";

test("MdiDotsTriangle snapshot", () => {
  const wrapper = mount(MdiDotsTriangle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
