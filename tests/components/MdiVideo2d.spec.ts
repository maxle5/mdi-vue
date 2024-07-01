
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVideo2d from "../../src/components/MdiVideo2d.vue";

test("MdiVideo2d snapshot", () => {
  const wrapper = mount(MdiVideo2d, {});
  expect(wrapper.html()).toMatchSnapshot();
});
