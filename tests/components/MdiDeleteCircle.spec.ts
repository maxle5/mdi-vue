
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDeleteCircle from "../../src/components/MdiDeleteCircle.vue";

test("MdiDeleteCircle snapshot", () => {
  const wrapper = mount(MdiDeleteCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
