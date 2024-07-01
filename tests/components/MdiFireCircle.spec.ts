
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFireCircle from "../../src/components/MdiFireCircle.vue";

test("MdiFireCircle snapshot", () => {
  const wrapper = mount(MdiFireCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
