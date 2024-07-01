
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVideoStabilization from "../../src/components/MdiVideoStabilization.vue";

test("MdiVideoStabilization snapshot", () => {
  const wrapper = mount(MdiVideoStabilization, {});
  expect(wrapper.html()).toMatchSnapshot();
});
