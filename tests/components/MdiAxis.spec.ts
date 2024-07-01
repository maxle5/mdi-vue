
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAxis from "../../src/components/MdiAxis.vue";

test("MdiAxis snapshot", () => {
  const wrapper = mount(MdiAxis, {});
  expect(wrapper.html()).toMatchSnapshot();
});
