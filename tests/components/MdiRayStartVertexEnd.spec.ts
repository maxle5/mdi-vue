
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRayStartVertexEnd from "../../src/components/MdiRayStartVertexEnd.vue";

test("MdiRayStartVertexEnd snapshot", () => {
  const wrapper = mount(MdiRayStartVertexEnd, {});
  expect(wrapper.html()).toMatchSnapshot();
});
