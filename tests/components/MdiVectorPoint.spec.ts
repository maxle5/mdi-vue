
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVectorPoint from "../../src/components/MdiVectorPoint.vue";

test("MdiVectorPoint snapshot", () => {
  const wrapper = mount(MdiVectorPoint, {});
  expect(wrapper.html()).toMatchSnapshot();
});
