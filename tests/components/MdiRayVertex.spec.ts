
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRayVertex from "../../src/components/MdiRayVertex.vue";

test("MdiRayVertex snapshot", () => {
  const wrapper = mount(MdiRayVertex, {});
  expect(wrapper.html()).toMatchSnapshot();
});
