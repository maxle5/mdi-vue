
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVectorIntersection from "../../src/components/MdiVectorIntersection.vue";

test("MdiVectorIntersection snapshot", () => {
  const wrapper = mount(MdiVectorIntersection, {});
  expect(wrapper.html()).toMatchSnapshot();
});
