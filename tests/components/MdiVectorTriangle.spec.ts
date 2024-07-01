
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVectorTriangle from "../../src/components/MdiVectorTriangle.vue";

test("MdiVectorTriangle snapshot", () => {
  const wrapper = mount(MdiVectorTriangle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
