
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFirework from "../../src/components/MdiFirework.vue";

test("MdiFirework snapshot", () => {
  const wrapper = mount(MdiFirework, {});
  expect(wrapper.html()).toMatchSnapshot();
});
