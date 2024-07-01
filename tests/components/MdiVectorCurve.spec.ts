
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVectorCurve from "../../src/components/MdiVectorCurve.vue";

test("MdiVectorCurve snapshot", () => {
  const wrapper = mount(MdiVectorCurve, {});
  expect(wrapper.html()).toMatchSnapshot();
});
