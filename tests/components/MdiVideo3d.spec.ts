
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVideo3d from "../../src/components/MdiVideo3d.vue";

test("MdiVideo3d snapshot", () => {
  const wrapper = mount(MdiVideo3d, {});
  expect(wrapper.html()).toMatchSnapshot();
});
