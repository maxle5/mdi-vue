
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSegment from "../../src/components/MdiSegment.vue";

test("MdiSegment snapshot", () => {
  const wrapper = mount(MdiSegment, {});
  expect(wrapper.html()).toMatchSnapshot();
});
