
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBlender from "../../src/components/MdiBlender.vue";

test("MdiBlender snapshot", () => {
  const wrapper = mount(MdiBlender, {});
  expect(wrapper.html()).toMatchSnapshot();
});
