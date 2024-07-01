
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVectorRadius from "../../src/components/MdiVectorRadius.vue";

test("MdiVectorRadius snapshot", () => {
  const wrapper = mount(MdiVectorRadius, {});
  expect(wrapper.html()).toMatchSnapshot();
});
